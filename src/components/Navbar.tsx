import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenuDemo } from "./NavigationMenu";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <nav className="container flex h-16 items-center">
        <div className="flex flex-1 items-center gap-6">
          <a href="/" className="flex items-center gap-2 font-semibold">
            <img src="./public/icons/logo.png" alt="Logo" className="Logo" />
          </a>
          <div className="hidden md:block">
            <NavigationMenuDemo />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="mt-8">
                <NavigationMenuDemo />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:block text-lg md:text-2xl lg:text-3xl font-bold absolute left-1/2 -translate-x-1/2">  
          AIVOLVE
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  );
}