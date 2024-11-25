import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Award, Globe, Layers, UserPlus } from "lucide-react";

export function About() {
  return (
    <div className="container mx-auto py-24">
      {/* Introduction Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-lg text-muted-foreground">
          <br />
          AIVOLVE is an innovative SaaS company founded by a team of three college students in November 2024. 
          The company is at the forefront of cutting-edge technology, specializing in a variety of fields. 
          Its offerings include crypto wallets for Web3 applications, generative AI solutions, and conversational AI agents with emotional and sentimental capabilities, 
          powered by an advanced NLP engine and OpenAI's API. 
          AIVOLVE's mission is to revolutionize user experiences across multiple sectors by blending AI with human-like interactions and smart digital solutions.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Brain className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-muted-foreground">
              At AIVOLVE, our mission is to make advanced AI technology accessible to businesses of all sizes, 
              enabling digital transformation and fostering innovation across industries. We aim to break down barriers 
              and offer seamless AI solutions that are easy to integrate, whether for everyday use or complex enterprise 
              applications.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-muted-foreground">
              We envision a world where AI is as easy to use as a click of a button, making powerful AI tools 
              available to every user, from small businesses to global enterprises. Our vision is to lead the AI 
              revolution, enabling organizations to integrate intelligent automation, data analytics, and machine learning 
              seamlessly into their day-to-day operations.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Award className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We aim for excellence in everything we do, from the technology we build to the services we provide. 
                Our AI solutions are designed to help businesses thrive with cutting-edge capabilities while ensuring ease of use.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Collaboration is at the heart of our success. We work closely with our clients to understand their unique 
                challenges and provide AI solutions that not only integrate with their systems but also grow alongside their 
                evolving needs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Globe className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
              <p className="text-muted-foreground">
                Our goal is to shape the future of AI globally. We believe in the transformative power of AI to solve complex 
                problems, improve industries, and enhance lives worldwide. By making AI more accessible, we contribute to a 
                smarter, more sustainable future for all.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Layers className="h-6 w-6 text-primary mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Innovation is at the core of our work. We are constantly pushing the boundaries of what’s possible with AI, 
                continuously improving our technology to ensure it stays at the cutting edge and meets the needs of a rapidly 
                changing world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4 flex items-center justify-center gap-2">
          <UserPlus className="h-6 w-6 text-primary" /> Join Us on Our Journey
        </h2>
        <p className="text-lg text-muted-foreground">
          At AIVOLVE, we’re building a future where AI is accessible to all. Whether you’re a business looking to integrate 
          AI solutions or an individual passionate about AI, we invite you to be part of our journey. Together, we can create 
          innovative solutions that empower the world.
        </p>
      </div>
      </div>

  );
}
