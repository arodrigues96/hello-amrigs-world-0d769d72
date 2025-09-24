-- Create function to handle PIX payment confirmation and update user premium status
CREATE OR REPLACE FUNCTION public.handle_payment_confirmation()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $function$
BEGIN
  -- When payment status changes to 'paid', update user profile to premium
  IF NEW.status = 'paid' AND OLD.status != 'paid' THEN
    UPDATE public.profiles 
    SET 
      is_premium = true,
      premium_expires_at = (NEW.paid_at + INTERVAL '1 year'),
      updated_at = now()
    WHERE id = NEW.user_id;
  END IF;
  
  RETURN NEW;
END;
$function$;

-- Create trigger to automatically handle payment confirmations
CREATE TRIGGER on_payment_status_change
  AFTER UPDATE ON public.payments
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_payment_confirmation();