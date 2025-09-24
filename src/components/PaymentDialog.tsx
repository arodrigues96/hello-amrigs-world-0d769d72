import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CreditCard, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPaymentComplete: () => void;
}

export const PaymentDialog = ({ open, onOpenChange, onPaymentComplete }: PaymentDialogProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  // Em um ambiente real, estes dados viriam de uma API
  const pixKey = "exemplo@medguru.com";
  const pixCode = "00020126360014BR.GOV.BCB.PIX0114exemplo@medguru.com5204000053039865802BR5913MedGuru LTDA6009SAO PAULO62070503***63041D3D";
  
  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    toast({
      title: "Chave PIX copiada!",
      description: "Cole a chave no seu app de pagamentos",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const copyPixCode = () => {
    navigator.clipboard.writeText(pixCode);
    toast({
      title: "Código PIX copiado!",
      description: "Cole o código no seu app de pagamentos",
    });
  };

  const handlePaymentConfirmation = () => {
    // Em um ambiente real, isso seria verificado via webhook/API
    toast({
      title: "Pagamento confirmado!",
      description: "Você agora tem acesso aos simulados premium",
    });
    onPaymentComplete();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Upgrade para Premium
          </DialogTitle>
          <DialogDescription>
            Acesso completo aos simulados com 100 questões por apenas R$ 25,00
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">O que está incluso:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm">100 questões por simulado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm">Acesso vitalício</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm">Histórico completo de tentativas</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-sm">Feedback detalhado</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pagamento via PIX</CardTitle>
              <CardDescription>
                Valor: R$ 25,00 - Pagamento único
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Chave PIX (Email):</label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 p-2 bg-muted rounded text-sm">
                    {pixKey}
                  </code>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={copyPixKey}
                    className="shrink-0"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ou use o QR Code PIX:</label>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={copyPixCode}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar código do QR
                </Button>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground mb-3">
                  Após realizar o pagamento via PIX, clique no botão abaixo para confirmar.
                  O acesso será liberado imediatamente.
                </p>
                <Button 
                  className="w-full" 
                  variant="medical"
                  onClick={handlePaymentConfirmation}
                >
                  Já fiz o pagamento
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};