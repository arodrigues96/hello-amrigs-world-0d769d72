import { useState } from "react";
import { Navigate } from "react-router-dom";
import { QuizMenu } from "@/components/QuizMenu";
import { QuizInterface } from "@/components/QuizInterface";
import { ResultsScreen } from "@/components/ResultsScreen";
import { PaymentDialog } from "@/components/PaymentDialog";
import { ThemeToggle } from "@/components/ThemeToggle";
import { quizData } from "@/data/questions";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { Stethoscope, BookOpen, Target, Users, LogOut, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png";

type ViewState = 'home' | 'quiz' | 'results' | 'history';

const Index = () => {
  const { user, loading, signOut, saveQuizAttempt, getUserAttempts, isPremium } = useSupabaseAuth();
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [quizResults, setQuizResults] = useState<{
    score: number;
    answers: number[];
  } | null>(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);

  // Redirect to auth if not logged in
  if (!loading && !user) {
    return <Navigate to="/auth" replace />;
  }

  const handleStartQuiz = (quizKey: string) => {
    const quiz = quizData[quizKey as keyof typeof quizData];
    
    // Check if quiz is premium and user doesn't have premium access
    if (quiz.isPremium && !isPremium) {
      setPaymentDialogOpen(true);
      return;
    }
    
    setSelectedQuiz(quizKey);
    setCurrentView('quiz');
  };

  const handleQuizComplete = async (score: number, answers: number[]) => {
    if (!selectedQuiz) return;
    
    const quiz = quizData[selectedQuiz as keyof typeof quizData];
    
    // Salvar tentativa do quiz
    await saveQuizAttempt(quiz.type, score, quiz.questions.length, answers);

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

  const handleViewHistory = async () => {
    const history = await getUserAttempts();
    console.log('Histórico do usuário:', history);
    alert(`Você tem ${history.length} tentativas registradas. Confira o console para mais detalhes.`);
  };

  const handlePaymentComplete = () => {
    // Em um ambiente real, isso atualizaria o status premium do usuário no banco
    window.location.reload(); // Recarrega para atualizar o status
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Stethoscope className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

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
              <img src={logo} alt="ResidentLabs" className="w-16 h-16 rounded-lg" />
              <div>
                <h1 className="text-xl font-bold text-foreground">ResidentLabs</h1>
                <p className="text-sm text-muted-foreground">Simulados Médicos</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {user && (
                <Card className="border-border bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-medium text-foreground">{user.email}</p>
                        <div className="flex items-center gap-2">
                          {isPremium ? (
                            <>
                              <Crown className="w-4 h-4 text-yellow-500" />
                              <span className="text-xs text-yellow-600">Premium</span>
                            </>
                          ) : (
                            <span className="text-xs text-muted-foreground">Gratuito</span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={handleViewHistory}
                        >
                          Histórico
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={signOut}
                        >
                          <LogOut className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
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
              ResidentLabs - Simulados Médicos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Prepare-se para concursos médicos com nossos simulados baseados em provas da AMRIGS
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Planos Disponíveis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <h4 className="font-medium text-foreground">Gratuito</h4>
                    <p className="text-2xl font-bold text-primary">25 questões</p>
                    <p className="text-sm text-muted-foreground">Acesso livre</p>
                  </div>
                  <div className="bg-background/50 rounded-lg p-4 border-2 border-primary/20">
                    <h4 className="font-medium text-foreground flex items-center gap-2">
                      <Crown className="w-4 h-4 text-yellow-500" />
                      Premium
                    </h4>
                    <p className="text-2xl font-bold text-primary">100 questões</p>
                    <p className="text-sm text-yellow-600 font-medium">Apenas R$ 25,00</p>
                  </div>
                </div>
              </div>
            </div>
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

        {/* Quiz Menu */}
        <QuizMenu 
          onSelectQuiz={handleStartQuiz}
          userHasPremium={isPremium}
        />

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

      {/* Payment Dialog */}
      <PaymentDialog
        open={paymentDialogOpen}
        onOpenChange={setPaymentDialogOpen}
        onPaymentComplete={handlePaymentComplete}
      />

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <img src={logo} alt="ResidentLabs" className="w-8 h-8" />
              <span className="font-semibold text-foreground">ResidentLabs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sua plataforma completa de simulados médicos
            </p>
            <p className="text-xs text-muted-foreground">
              © 2024 ResidentLabs. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
