import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Microscope, Bot } from "lucide-react";

export function AnnouncementPage() {
  return (
    <div className="container mx-auto py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Latest Announcements</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated with the latest developments, news, and milestones from AIVOLVE.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Announcement Cards */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Microscope className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Introducing: BackDrop AI</h3>
            </div>
            <p className="text-muted-foreground">
              Backdrop AI is a generative AI tool that effortlessly embeds customizable text into an image's background, ensuring seamless integration with advanced editing technology.
            </p>
            <a href="#" className="text-primary font-semibold">Beta Access</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Microscope className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">New Product Launch: AI-Powered Crypto Wallet</h3>
            </div>
            <p className="text-muted-foreground">
              We're excited to announce the launch of our new crypto wallet for Web3 applications. It allows users to securely store and manage their crypto assets with advanced AI security features.
            </p>
            <a href="#" className="text-primary font-semibold">Learn More</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Bot className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Introducing: AI Arsenal</h3>
            </div>
            <p className="text-muted-foreground">
              AI Arsenal is a versatile suite of AI tools featuring a chatbot, voice bot, and mail bot, crafted to streamline communication and automate workflows seamlessly.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">New AI Features Unveiled</h3>
            </div>
            <p className="text-muted-foreground">
              We're excited to announce the release of several new AI-driven features in our product! With enhanced functionality and smarter integrations, our latest updates take user experience to the next level.
            </p>
            <a href="#" className="text-primary font-semibold">Explore New Features</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">We're Hiring: Join Our Team!</h3>
            </div>
            <p className="text-muted-foreground">
              AIVOLVE is growing, and we're looking for passionate individuals to join our journey in shaping the future of AI. If you’re driven by innovation and thrive in dynamic environments, explore our open positions in engineering, product development, and marketing.
            </p>
            <a href="/jobs" className="text-primary font-semibold">Apply Now</a>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold">Research Papers Reviews</h3>
            </div>
            <p className="text-muted-foreground">
            We're excited to announce the release of several new AI-driven features in our product! With enhanced functionality and smarter integrations, our latest updates take user experience to the next level.
            </p>
            <a href="https://www.linkedin.com/company/aievolve/posts/?feedView=all&viewAsMember=true" className="text-primary font-semibold">Read Now..!</a>
          </CardContent>
        </Card>
      </div>

      {/* Previous Announcements */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Previous Announcements</h2>
        <div className="space-y-6">
          {/* Policy and Terms Update */}
          <div className="flex items-start gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Policy Updates</h3>
                  <p className="text-muted-foreground">
                    Our Privacy Policy has been updated. Make sure to go through it.
                  </p>
                  <a href="/privacy" className="text-primary font-semibold">Read Privacy Policy</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Terms of Service Update</h3>
                  <p className="text-muted-foreground">
                    Our Terms of Service has been updated. Make sure to go through it.
                  </p>
                  <a href="/terms" className="text-primary font-semibold">Read Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg text-muted-foreground">
          Be the first to know about our latest updates and news. Sign up for our newsletter now!
        </p>
        <form className="flex justify-center mt-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border rounded-l-md"
          />
          <button className="bg-primary text-white p-2 rounded-r-md">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
