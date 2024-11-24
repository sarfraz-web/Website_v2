import {
  NavigationMenu as Nav,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Brain, Code, LineChart, Users } from "lucide-react";
import React from "react";

const components: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Machine Learning",
    href: "/products/ml",
    description: "Advanced ML models for complex problem-solving.",
    icon: <Brain className="h-6 w-6" />,
  },
  {
    title: "Natural Language Processing",
    href: "/products/nlp",
    description: "Process and understand human language at scale.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Predictive Analytics",
    href: "/products/analytics",
    description: "Data-driven insights for informed decision making.",
    icon: <LineChart className="h-6 w-6" />,
  },
  {
    title: "AI Consulting",
    href: "/services/consulting",
    description: "Expert guidance for AI implementation.",
    icon: <Users className="h-6 w-6" />,
  },
];

export function NavigationMenuDemo() {
  return (
    <Nav>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      About AIVOLVE
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Pioneering the future of AI technology with innovative solutions for businesses worldwide.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="About Us">
                Learn about our mission and values
              </ListItem>
              <ListItem href="https://www.linkedin.com/company/aievolve/jobs/" title="Careers">
                Join our growing team
              </ListItem>
              <ListItem href="mailto:tech.aivolve@gmail.com" title="Contact">
                Get in touch with us
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </Nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          {icon && <div className="mb-2">{icon}</div>}
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});