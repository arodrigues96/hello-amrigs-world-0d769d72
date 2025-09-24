import { useState } from "react";
import { QuizCard } from "@/components/QuizCard";
import { AuthCard } from "@/components/AuthCard";
import { QuizInterface } from "@/components/QuizInterface";
import { ResultsScreen } from "@/components/ResultsScreen";
import { quizData } from "@/data/questions";
import { useAuth } from "@/hooks/useAuth";
import { Stethoscope, BookOpen, Target, Users } from "lucide-react";

type ViewState = 'home' | 'quiz' | 'results' | 'history';

const Index = () => {
  const { user, login, logout, saveAttempt, getHistory } = useAuth();
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    answers: number[];
  } | null>(null);

  const handleStartQuiz = (quizKey: string) => {
    if (!user) {
      login();
      return;
    }
    setSelectedQuiz(quizKey);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (score: number, answers: number[]) => {
    if (!selectedQuiz) return;
    
    const quiz = quizData[selectedQuiz as keyof typeof quizData];
    
    // Salvar cada resposta no histórico
    quiz.questions.forEach((question, index) => {
      saveAttempt(question.id, question.area, answers[index], question.correct);
    });

    setQuizResults({ score, answers });
    setCurrentView('results');
  };

  const handleRestartQuiz = () => {
    setCurrentView('quiz');
    setQuizResults(null);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedQuiz(null);
    setQuizResults(null);
  };

  const handleViewHistory = () => {
    // Em uma implementação completa, criaria uma página de histórico
    const history = getHistory();
    console.log('Histórico do usuário:', history);
    alert(`Você tem ${history.length} tentativas registradas. Confira o console para mais detalhes.`);
  };

  // Renderizar conteúdo baseado no estado atual
  if (currentView === 'quiz' && selectedQuiz) {
    const quiz = quizData[selectedQuiz as keyof typeof quizData];
    return (
      <QuizInterface
        questions={quiz.questions}
        title={quiz.title}
        onComplete={handleQuizComplete}
        onExit={handleBackToHome}
      />
    );
  }

  if (currentView === 'results' && selectedQuiz && quizResults) {
    const quiz = quizData[selectedQuiz as keyof typeof quizData];
    return (
      <ResultsScreen
        score={quizResults.score}
        totalQuestions={quiz.questions.length}
        questions={quiz.questions}
        userAnswers={quizResults.answers}
        onRestart={handleRestartQuiz}
        onHome={handleBackToHome}
      />
    );
  }

  // Vista principal (home)
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AMRIGS</h1>
                <p className="text-sm text-muted-foreground">Simulados Médicos</p>
              </div>
            </div>
            
            <div className="w-80">
              <AuthCard
                user={user}
                onLogin={login}
                onLogout={logout}
                onViewHistory={handleViewHistory}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Simulados AMRIGS
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Prepare-se para o concurso da Associação Médica do Rio Grande do Sul 
              com nossos simulados baseados em provas anteriores
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <BookOpen className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">Questões Disponíveis</div>
            </div>
            <div className="text-center space-y-2">
              <Target className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-foreground">15+</div>
              <div className="text-sm text-muted-foreground">Áreas Médicas</div>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="text-2xl font-bold text-foreground">1000+</div>
              <div className="text-sm text-muted-foreground">Médicos Aprovados</div>
            </div>
          </div>
        </div>

        {/* Quiz Cards */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Escolha seu Simulado
            </h3>
            <p className="text-muted-foreground">
              Selecione o simulado que melhor se adequa ao seu nível de preparação
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {Object.entries(quizData).map(([key, quiz]) => (
              <QuizCard
                key={key}
                title={quiz.title}
                description={quiz.description}
                year={quiz.year}
                questionCount={quiz.questions.length}
                onClick={() => handleStartQuiz(key)}
              />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 text-center space-y-8">
          <h3 className="text-2xl font-semibold text-foreground">
            Por que escolher nossos simulados?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Questões Atualizadas</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Baseadas nas provas mais recentes da AMRIGS, cobrindo todas as especialidades médicas
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Feedback Detalhado</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Explicações completas para cada questão, ajudando no seu aprendizado
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Acompanhamento</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Histórico de tentativas e análise de desempenho por área médica
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">AMRIGS Simulados</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Preparação completa para o concurso da Associação Médica do Rio Grande do Sul
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 AMRIGS Simulados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
