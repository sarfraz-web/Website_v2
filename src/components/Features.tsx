import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, LineChart, Users, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { FoundingMembers } from "@/components/FoundingMembers";

const features = [
  {
    name: "Advanced ML Models",
    description:
      "State-of-the-art machine learning models trained on vast datasets for optimal performance.",
    icon: Brain,
  },
  {
    name: "Natural Language Processing",
    description: "Process and understand human language at scale with our NLP solutions.",
    icon: Code,
  },
  {
    name: "Predictive Analytics",
    description: "Make data-driven decisions with our powerful predictive analytics tools.",
    icon: LineChart,
  },
  {
    name: "Expert Consulting",
    description: "Get guidance from our team of AI experts to implement the right solutions.",
    icon: Users,
  },
  {
    name: "Lightning Fast",
    description: "Optimized for performance with real-time processing capabilities.",
    icon: Zap,
  },
  {
    name: "Enterprise Security",
    description: "Bank-grade security with encrypted data transmission and storage.",
    icon: Shield,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            AI Solutions for Every Need
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive suite of AI tools and services helps businesses transform their operations and stay ahead of the competition.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.name}
                className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader>
                  <div className="relative inline-flex p-3 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 transition-transform duration-300 group-hover:scale-110 group-hover:from-primary/20 group-hover:to-secondary/20">
                    <feature.icon
                      className={cn(
                        "h-8 w-8 transition-colors duration-300",
                        "text-primary group-hover:text-secondary"
                      )}
                    />
                  </div>
                  <CardTitle className="mt-4 transition-colors duration-300 group-hover:text-primary">
                    {feature.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <FoundingMembers />
    </div>
  );
}
