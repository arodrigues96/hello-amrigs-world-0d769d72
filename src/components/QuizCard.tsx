import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users } from "lucide-react";

interface QuizCardProps {
  title: string;
  description: string;
  year: string;
  questionCount: number;
  onClick: () => void;
}

export const QuizCard = ({ title, description, year, questionCount, onClick }: QuizCardProps) => {
  return (
    <Card className="medical-card border-border hover:border-ring transition-all duration-300 group cursor-pointer">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            {year}
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            {questionCount} questões
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Áreas médicas
          </div>
        </div>
        <Button 
          variant="medical" 
          size="lg" 
          className="w-full"
          onClick={onClick}
        >
          Iniciar Simulado
        </Button>
      </CardContent>
    </Card>
  );
};