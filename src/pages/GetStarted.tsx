import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams and startups",
    price: "$49",
    features: [
      "Up to 5,000 API calls/month",
      "Basic ML models",
      "Email support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing businesses",
    price: "$99",
    features: [
      "Up to 50,000 API calls/month",
      "Advanced ML models",
      "Priority support",
      "Advanced analytics",
      "Custom model training",
    ],
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    features: [
      "Unlimited API calls",
      "Custom ML models",
      "24/7 dedicated support",
      "Advanced analytics",
      "Custom model training",
      "On-premise deployment",
    ],
  },
];

export function GetStarted() {
  return (
    <div className="container py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Start building with AIVOLVE today. Choose the plan that best fits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-6">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-lg font-normal text-muted-foreground">
                    /month
                  </span>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2">
                <Zap className="h-4 w-4" />
                Get Started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}