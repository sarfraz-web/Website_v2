import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, MessageSquare, Image } from "lucide-react";

export function Demo() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setResult("This is a simulated AI response demonstrating the capabilities of our platform. In a real implementation, this would be powered by our advanced AI models.");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="container py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Try AIVOLVE Live</h1>
          <p className="text-lg text-muted-foreground">
            Experience the power of our AI platform with these interactive demos
          </p>
        </div>

        <Tabs defaultValue="text" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Text Generation
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Image Analysis
            </TabsTrigger>
            <TabsTrigger value="ml" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              ML Prediction
            </TabsTrigger>
          </TabsList>

          <TabsContent value="text">
            <Card>
              <CardHeader>
                <CardTitle>AI Text Generation</CardTitle>
                <CardDescription>
                  Generate human-like text for various purposes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Enter your prompt here..."
                    className="min-h-[100px]"
                  />
                  <Button disabled={isLoading} className="w-full">
                    {isLoading ? "Generating..." : "Generate"}
                  </Button>
                  {result && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm">{result}</p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="image">
            <Card>
              <CardHeader>
                <CardTitle>Image Analysis</CardTitle>
                <CardDescription>
                  Analyze images using our computer vision models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <Input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer text-sm text-muted-foreground"
                    >
                      Click to upload or drag and drop
                    </label>
                  </div>
                  <Button disabled className="w-full">
                    Analyze Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ml">
            <Card>
              <CardHeader>
                <CardTitle>ML Prediction</CardTitle>
                <CardDescription>
                  Test our machine learning models with your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid gap-4">
                    <Input placeholder="Feature 1" />
                    <Input placeholder="Feature 2" />
                    <Input placeholder="Feature 3" />
                  </div>
                  <Button className="w-full">Make Prediction</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}