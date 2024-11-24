import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

const posts = [
  {
    id: 1,
    title: "Introducing Our Next-Gen AI Platform",
    excerpt: "Today, we're excited to announce the launch of our next-generation AI platform, bringing unprecedented capabilities to businesses worldwide.",
    date: new Date("2024-03-01"),
    author: "Sarah Johnson",
    category: "Product Updates",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "The Future of AI in Enterprise",
    excerpt: "Explore how artificial intelligence is transforming enterprise operations and what the future holds for businesses adopting AI technologies.",
    date: new Date("2024-02-28"),
    author: "Michael Chen",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1676377923060-e859bd4ec77b?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Best Practices for AI Model Training",
    excerpt: "Learn the essential best practices for training AI models that deliver accurate and reliable results for your specific use case.",
    date: new Date("2024-02-25"),
    author: "Dr. Emily Roberts",
    category: "Technical Guides",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
  }
];

export function Blog() {
  return (
    <div className="container mx-auto py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, updates, and guides from our team of AI experts
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="overflow-hidden group">
              <div className="aspect-video relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    By {post.author} • {format(post.date, 'MMMM d, yyyy')}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}