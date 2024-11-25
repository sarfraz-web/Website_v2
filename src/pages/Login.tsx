import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Github,Chrome , ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 flex items-center justify-center p-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-slow-spin" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary/20 to-secondary/20 rounded-full blur-3xl animate-reverse-slow-spin" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-2 h-2 bg-primary/30 rounded-full",
              "animate-float",
              i % 2 === 0 ? "animate-delay-2000" : "animate-delay-3000"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <Card className="relative w-full max-w-md mx-auto overflow-hidden backdrop-blur-sm bg-background/80 border-primary/20">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <div className="absolute inset-0 animate-ping-slow">
                <Sparkles className="w-8 h-8 text-primary opacity-50" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-muted-foreground text-center mb-8">
            Enter your credentials to access your account
          </p>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className={cn(
                  "transition-colors duration-200",
                  isEmailFocused && "text-primary"
                )}
              >
                Email
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                  className={cn(
                    "transition-all duration-200",
                    isEmailFocused && "ring-2 ring-primary/20"
                  )}
                  placeholder="name@example.com"
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transform origin-left transition-transform duration-200",
                    isEmailFocused ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className={cn(
                  "transition-colors duration-200",
                  isPasswordFocused && "text-primary"
                )}
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  className={cn(
                    "transition-all duration-200",
                    isPasswordFocused && "ring-2 ring-primary/20"
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-primary transform origin-left transition-transform duration-200",
                    isPasswordFocused ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full relative overflow-hidden group"
              disabled={isLoading}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? (
                  <div className="animate-spin w-5 h-5 border-2 border-background border-r-transparent rounded-full" />
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transform transition-transform group-hover:scale-105" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background/80 px-2 text-muted-foreground backdrop-blur-sm">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="group relative overflow-hidden hover:text-background"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Github className="w-4 h-4" />
                Github
              </span>
              <div className="absolute inset-0 bg-foreground transform -translate-x-full transition-transform group-hover:translate-x-0" />
            </Button>
            <Button
              variant="outline"
              className="group relative overflow-hidden hover:text-background"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Chrome className="w-4 h-4" />
                Google
              </span>
              <div className="absolute inset-0 bg-foreground transform -translate-x-full transition-transform group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}