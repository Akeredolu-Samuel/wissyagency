import { MessageCircle } from "lucide-react";

const BookCallButton = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-cta flex items-center justify-center shadow-lg animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Book a call"
    >
      <MessageCircle size={22} className="text-primary-foreground" />
    </a>
  );
};

export default BookCallButton;
