import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  Target, 
  CheckCircle, 
  XCircle, 
  RotateCcw, 
  Home,
  Award,
  TrendingUp
} from "lucide-react";

interface Question {
  id: number;
  area: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: number[];
  onRestart: () => void;
  onHome: () => void;
}

export const ResultsScreen = ({ 
  score, 
  totalQuestions, 
  questions, 
  userAnswers, 
  onRestart, 
  onHome 
}: ResultsScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceLevel = () => {
    if (percentage >= 80) return { text: "Excelente", color: "text-success", icon: Trophy };
    if (percentage >= 70) return { text: "Bom", color: "text-primary", icon: Award };
    if (percentage >= 60) return { text: "Regular", color: "text-warning", icon: TrendingUp };
    return { text: "Precisa Melhorar", color: "text-destructive", icon: Target };
  };

  const performance = getPerformanceLevel();
  const PerformanceIcon = performance.icon;

  // Estatísticas por área
  const areaStats = questions.reduce((acc, question, index) => {
    const area = question.area;
    if (!acc[area]) {
      acc[area] = { correct: 0, total: 0 };
    }
    acc[area].total++;
    if (userAnswers[index] === question.correct) {
      acc[area].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Resultado do Simulado</h1>
          <p className="text-muted-foreground">Confira seu desempenho detalhado</p>
        </div>

        {/* Score Card */}
        <Card className="medical-card text-center">
          <CardHeader className="space-y-4">
            <div className="flex justify-center">
              <PerformanceIcon className={`w-16 h-16 ${performance.color}`} />
            </div>
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-foreground">{percentage}%</h2>
              <p className={`text-lg font-medium ${performance.color}`}>
                {performance.text}
              </p>
              <p className="text-muted-foreground">
                {score} de {totalQuestions} questões corretas
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={percentage} className="h-3" />
          </CardContent>
        </Card>

        {/* Area Performance */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Desempenho por Área
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(areaStats).map(([area, stats]) => {
              const areaPercentage = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={area} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="text-sm">
                      {area}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {stats.correct}/{stats.total} ({areaPercentage}%)
                    </span>
                  </div>
                  <Progress value={areaPercentage} className="h-2" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Question Review */}
        <Card className="medical-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Revisão das Questões
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correct;
              
              return (
                <div key={question.id} className="border-l-4 border-muted pl-4 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Questão {index + 1}</span>
                        <Badge variant="outline" className="text-xs">
                          {question.area}
                        </Badge>
                        {isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-success" />
                        ) : (
                          <XCircle className="w-4 h-4 text-destructive" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {question.question}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="flex gap-4">
                      <span className="text-muted-foreground">
                        Sua resposta: 
                        <span className={isCorrect ? "text-success ml-1" : "text-destructive ml-1"}>
                          {String.fromCharCode(65 + userAnswer)}
                        </span>
                      </span>
                      {!isCorrect && (
                        <span className="text-muted-foreground">
                          Correta: 
                          <span className="text-success ml-1">
                            {String.fromCharCode(65 + question.correct)}
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={onHome}>
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
          <Button variant="medical" onClick={onRestart}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Fazer Novamente
          </Button>
        </div>
      </div>
    </div>
  );
};