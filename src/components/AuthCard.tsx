import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, LogOut, History } from "lucide-react";

interface AuthCardProps {
  user?: {
    name: string;
    email: string;
    picture?: string;
  } | null;
  onLogin: () => void;
  onLogout: () => void;
  onViewHistory: () => void;
}

export const AuthCard = ({ user, onLogin, onLogout, onViewHistory }: AuthCardProps) => {
  if (user) {
    return (
      <Card className="border-border bg-card/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            {user.picture ? (
              <img 
                src={user.picture} 
                alt={user.name}
                className="w-8 h-8 rounded-full border-2 border-primary/20"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onViewHistory}
              className="flex-1"
            >
              <History className="w-4 h-4 mr-2" />
              Histórico
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onLogout}
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border bg-card/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">Entre para continuar</CardTitle>
        <CardDescription>
          Faça login para acessar os simulados e acompanhar seu progresso
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="medical" 
          size="lg" 
          className="w-full"
          onClick={onLogin}
        >
          <User className="w-4 h-4 mr-2" />
          Entrar com Google
        </Button>
      </CardContent>
    </Card>
  );
};