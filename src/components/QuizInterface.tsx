import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface QuizInterfaceProps {
  questions: Question[];
  title: string;
  onComplete: (score: number, answers: number[]) => void;
  onExit: () => void;
}

export const QuizInterface = ({ questions, title, onComplete, onExit }: QuizInterfaceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [flagged, setFlagged] = useState<boolean[]>(new Array(questions.length).fill(false));
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const currentQuestion = questions[currentIndex];
  const isAnswered = answers[currentIndex] !== null;
  const isFlagged = flagged[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  useEffect(() => {
    setSelectedOption(answers[currentIndex]);
  }, [currentIndex, answers]);

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
    setSelectedOption(optionIndex);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowResult(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowResult(false);
    }
  };

  const handleFlag = () => {
    const newFlagged = [...flagged];
    newFlagged[currentIndex] = !newFlagged[currentIndex];
    setFlagged(newFlagged);
  };

  const handleFinish = () => {
    const score = answers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correct ? 1 : 0);
    }, 0);
    onComplete(score, answers.map(a => a ?? -1));
  };

  const getOptionVariant = (optionIndex: number) => {
    if (!showResult) {
      return selectedOption === optionIndex ? "default" : "quiz";
    }
    
    if (optionIndex === currentQuestion.correct) {
      return "correct";
    }
    
    if (selectedOption === optionIndex && optionIndex !== currentQuestion.correct) {
      return "incorrect";
    }
    
    return "quiz";
  };

  const answeredCount = answers.filter(a => a !== null).length;
  const canFinish = answeredCount === questions.length;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            <p className="text-muted-foreground">
              Questão {currentIndex + 1} de {questions.length}
            </p>
          </div>
          <Button variant="ghost" onClick={onExit}>
            <Home className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Progresso</span>
            <span>{answeredCount}/{questions.length} respondidas</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="medical-card">
          <CardHeader className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{currentQuestion.area}</Badge>
                  {isFlagged && <Flag className="w-4 h-4 text-warning fill-warning" />}
                </div>
                <CardTitle className="text-lg leading-relaxed">
                  {currentQuestion.question}
                </CardTitle>
              </div>
              <Button
                variant={isFlagged ? "flag" : "ghost"}
                size="icon"
                onClick={handleFlag}
              >
                <Flag className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant={getOptionVariant(index)}
                  className={cn(
                    "w-full text-left justify-start p-4 h-auto whitespace-normal",
                    "disabled:opacity-100"
                  )}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                >
                  <span className="font-medium mr-3">
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span className="flex-1">{option}</span>
                  {showResult && index === currentQuestion.correct && (
                    <CheckCircle className="w-5 h-5 ml-2 text-success-foreground" />
                  )}
                  {showResult && selectedOption === index && index !== currentQuestion.correct && (
                    <XCircle className="w-5 h-5 ml-2 text-destructive-foreground" />
                  )}
                </Button>
              ))}
            </div>

            {/* Explanation */}
            {showResult && currentQuestion.explanation && (
              <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-primary">
                <h4 className="font-medium text-foreground mb-2">Explicação:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Anterior
          </Button>

          <div className="flex gap-2">
            {!showResult && isAnswered && (
              <Button
                variant="ghost"
                onClick={() => setShowResult(true)}
              >
                Ver Resposta
              </Button>
            )}
            
            {showResult && selectedOption !== null && (
              <Button
                variant="ghost"
                onClick={() => {
                  setShowResult(false);
                  setSelectedOption(null);
                  const newAnswers = [...answers];
                  newAnswers[currentIndex] = null;
                  setAnswers(newAnswers);
                }}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Responder Novamente
              </Button>
            )}
          </div>

          {currentIndex === questions.length - 1 ? (
            <Button
              variant="medical"
              onClick={handleFinish}
              disabled={!canFinish}
            >
              Finalizar Simulado
            </Button>
          ) : (
            <Button
              variant="default"
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
            >
              Próxima
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};