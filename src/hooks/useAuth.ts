import { useState, useEffect } from 'react';

interface User {
  name: string;
  email: string;
  picture?: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento do usuário do localStorage
    const loadUser = () => {
      try {
        const savedUser = localStorage.getItem('amrigs_user');
        if (savedUser) {
          setUser(JSON.parse(savedUser));
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = () => {
    // Simular login (em produção, integraria com Google OAuth)
    const mockUser: User = {
      name: 'Dr. João Silva',
      email: 'joao.silva@email.com',
      picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=doctor'
    };
    
    localStorage.setItem('amrigs_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem('amrigs_user');
    localStorage.removeItem('amrigs_history');
    setUser(null);
  };

  const saveAttempt = (questionId: number, area: string, userAnswer: number, correct: number) => {
    if (!user) return;

    const attempt = {
      id: Date.now(),
      questionId,
      area,
      userAnswer,
      correct,
      isCorrect: userAnswer === correct,
      timestamp: new Date().toISOString(),
      userId: user.email
    };

    try {
      const history = JSON.parse(localStorage.getItem('amrigs_history') || '[]');
      history.push(attempt);
      localStorage.setItem('amrigs_history', JSON.stringify(history));
    } catch (error) {
      console.error('Erro ao salvar tentativa:', error);
    }
  };

  const getHistory = () => {
    if (!user) return [];

    try {
      const history = JSON.parse(localStorage.getItem('amrigs_history') || '[]');
      return history.filter((attempt: any) => attempt.userId === user.email);
    } catch (error) {
      console.error('Erro ao recuperar histórico:', error);
      return [];
    }
  };

  return {
    user,
    loading,
    login,
    logout,
    saveAttempt,
    getHistory
  };
};