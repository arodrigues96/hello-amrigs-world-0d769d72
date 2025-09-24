import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Gift, Calendar, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizMenuProps {
  onSelectQuiz: (quizKey: string) => void;
  userHasPremium: boolean;
}

export const QuizMenu = ({ onSelectQuiz, userHasPremium }: QuizMenuProps) => {
  const [selectedVersion, setSelectedVersion] = useState<'free' | 'premium'>('free');
  const [selectedYear, setSelectedYear] = useState<'2023' | '2024'>('2024');

  const versions = [
    {
      key: 'free',
      title: 'Versão Gratuita',
      icon: Gift,
      description: '25 questões',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950',
      borderColor: 'border-green-200 dark:border-green-800'
    },
    {
      key: 'premium',
      title: 'Versão Premium',
      icon: Crown,
      description: '100 questões',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 dark:bg-yellow-950',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      price: 'R$ 25,00'
    }
  ];

  const years = [
    { key: '2023', label: '2023' },
    { key: '2024', label: '2024' }
  ];

  const handleStartQuiz = () => {
    const quizKey = `${selectedVersion}25_${selectedYear}`;
    onSelectQuiz(quizKey);
  };

  const isPremiumSelected = selectedVersion === 'premium';
  const canStartQuiz = !isPremiumSelected || userHasPremium;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Escolha seu Simulado AMRIGS
        </h2>
        <p className="text-lg text-muted-foreground">
          Selecione a versão e o ano da prova que deseja realizar
        </p>
      </div>

      {/* Version Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground text-center">
          Escolha a Versão
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {versions.map((version) => {
            const Icon = version.icon;
            const isSelected = selectedVersion === version.key;
            
            return (
              <Card
                key={version.key}
                className={cn(
                  "cursor-pointer transition-all duration-200 hover:shadow-lg",
                  isSelected 
                    ? `${version.bgColor} ${version.borderColor} border-2` 
                    : "hover:border-primary/50"
                )}
                onClick={() => setSelectedVersion(version.key as 'free' | 'premium')}
              >
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className={cn(
                      "p-3 rounded-full",
                      isSelected ? version.bgColor : "bg-muted"
                    )}>
                      <Icon className={cn(
                        "w-8 h-8",
                        isSelected ? version.color : "text-muted-foreground"
                      )} />
                    </div>
                  </div>
                  <CardTitle className={cn(
                    "text-xl",
                    isSelected ? version.color : "text-foreground"
                  )}>
                    {version.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <p className="text-muted-foreground">{version.description}</p>
                    {version.price && (
                      <Badge variant="secondary" className="text-sm">
                        {version.price}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Year Selection */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground text-center">
          Escolha o Ano da Prova
        </h3>
        <div className="flex justify-center gap-4">
          {years.map((year) => (
            <Button
              key={year.key}
              variant={selectedYear === year.key ? "default" : "outline"}
              size="lg"
              onClick={() => setSelectedYear(year.key as '2023' | '2024')}
              className="min-w-[120px]"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {year.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Quiz Info */}
      <Card className="bg-card/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">
                Simulado Selecionado
              </h4>
            </div>
            
            <div className="space-y-2">
              <p className="text-xl font-bold text-foreground">
                {selectedVersion === 'free' ? 'Versão Gratuita' : 'Versão Premium'} - {selectedYear}
              </p>
              <p className="text-muted-foreground">
                {selectedVersion === 'free' ? '25 questões' : '100 questões'} da prova AMRIGS {selectedYear}
              </p>
            </div>

            {/* Premium Warning */}
            {isPremiumSelected && !userHasPremium && (
              <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                  <Crown className="w-4 h-4" />
                  <span className="font-medium">Versão Premium</span>
                </div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  Esta versão requer acesso premium. Você será redirecionado para pagamento.
                </p>
              </div>
            )}

            {/* Start Button */}
            <Button
              size="lg"
              onClick={handleStartQuiz}
              disabled={!canStartQuiz}
              className="min-w-[200px]"
            >
              {isPremiumSelected && !userHasPremium ? (
                <>
                  <Crown className="w-4 h-4 mr-2" />
                  Adquirir Premium
                </>
              ) : (
                <>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Iniciar Simulado
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
