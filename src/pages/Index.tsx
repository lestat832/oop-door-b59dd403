import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen gradient-launch flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Color Accent Dots */}
          <div className="flex justify-center gap-3 mb-8 animate-float">
            <div className="w-3 h-3 rounded-full bg-gesture-swipe-left"></div>
            <div className="w-3 h-3 rounded-full bg-gesture-tap"></div>
            <div className="w-3 h-3 rounded-full bg-gesture-swipe-up"></div>
            <div className="w-3 h-3 rounded-full bg-gesture-shake"></div>
            <div className="w-3 h-3 rounded-full bg-gesture-long-press"></div>
          </div>

          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl">
              Out of Pocket
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-semibold max-w-2xl mx-auto leading-relaxed">
              The fast-paced reflex + memory game for your phone.
            </p>
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-block">
            <span className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30">
              Coming Soon
            </span>
          </div>

          {/* Waitlist Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-14 text-lg bg-white/95 backdrop-blur-sm border-2 border-white/50 rounded-full px-6 focus-visible:ring-white focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg"
                  className="sm:min-w-[180px]"
                >
                  Join the Waitlist
                </Button>
              </div>
            </form>
          ) : (
            <div className="max-w-md mx-auto animate-scale-in">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 border-white/50">
                <p className="text-3xl font-bold text-primary mb-2">
                  You're on the list! 🎉
                </p>
                <p className="text-muted-foreground text-lg">
                  We'll notify you when Out of Pocket launches.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Join with another email
                </button>
              </div>
            </div>
          )}

          {/* Gesture Color Accents */}
          <div className="flex flex-wrap justify-center gap-2 pt-8">
            <div className="w-12 h-1 rounded-full bg-gesture-swipe-up"></div>
            <div className="w-12 h-1 rounded-full bg-gesture-swipe-down"></div>
            <div className="w-12 h-1 rounded-full bg-gesture-swipe-right"></div>
            <div className="w-12 h-1 rounded-full bg-gesture-double-tap"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center">
        <p className="text-white/80 text-sm font-medium">
          © 2025 Out of Pocket
        </p>
      </footer>
    </div>
  );
};

export default Index;
