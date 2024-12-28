import { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

const founders = [
  {
    name: "Md Adnan Baqi",
    role: "CEO & Co-founder",
    image: "https://www.linkedin.com/in/buckybarns/overlay/photo/",
    bio: "AI/ML Engineer & Entrepreneur",
    links: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/buckybarns",
      github: "https://github.com/adnanbaqi"
    }
  },
  {
    name: "Mohammed Sarfraz",
    role: "CTO & Co-founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=60",
    bio: "Ex-Engineering Director at OpenAI",
    links: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/mohammad-sarfraz-043118258",
      github: "https://github.com/sarfraz-web"
    }
  },
  {
    name: "Aquib Jawed",
    role: "Chief Research Officer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop&q=60",
    bio: "B.tech in Computer Science & Engineering",
    links: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/aquib-jawed-1147ab164",
      github: "https://github.com/anaquib1110"
    }
  },
  {
    name: "Gufran Siddiqui",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=60",
    bio: "B.tech in Computer Science & Engineering",
    links: {
      twitter: "https://twitter.com",
      linkedin: "https://www.linkedin.com/in/gufran-ahmad-siddiqui-232756278",
      github: "https://github.com/GufranSiddiqui0101"
    }
  }
];

const duplicatedFounders = [...founders, ...founders];

export function FoundingMembers() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const innerScrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !innerScrollerRef.current) return;

    const scrollerContent = Array.from(innerScrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (innerScrollerRef.current) {
        innerScrollerRef.current.appendChild(duplicatedItem);
      }
    });

    getDirection();
    window.addEventListener("resize", getDirection);

    return () => {
      window.removeEventListener("resize", getDirection);
    };
  }, []);

  const getDirection = () => {
    if (!scrollerRef.current || !innerScrollerRef.current) return;
    
    const scrollerWidth = scrollerRef.current.offsetWidth;
    const scrollerContentWidth = innerScrollerRef.current.scrollWidth;
    
    if (scrollerContentWidth > scrollerWidth) {
      startAnimation();
    }
  };

  const startAnimation = () => {
    if (!innerScrollerRef.current) return;
    
    innerScrollerRef.current.style.animation = "scroll 40s linear infinite";
  };

  return (
    <div className="w-full py-24 overflow-hidden bg-gradient-to-r from-[#FF4D9E]/10 via-[#A349E5]/10 to-[#4A90E2]/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Founders</h2>
          <p className="text-lg text-muted-foreground">
            The visionaries behind AIVOLVE's groundbreaking AI technology
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="max-w-7xl mx-auto scroller relative group"
      >
        <div
          ref={innerScrollerRef}
          className="flex gap-4 inner-scroller py-4"
        >
          {duplicatedFounders.map((founder, idx) => (
            <Card
              key={`${founder.name}-${idx}`}
              className="relative group flex-shrink-0 w-[300px] overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4D9E]/20 via-[#A349E5]/20 to-[#4A90E2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-6">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1">{founder.name}</h3>
                  <p className="text-sm text-primary mb-2">{founder.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{founder.bio}</p>
                  
                  <div className="flex justify-center gap-4">
                    <a
                      href={founder.links.twitter}
                      className={cn(
                        "p-2 rounded-full transition-colors duration-200",
                        "hover:bg-[#FF4D9E]/10 text-[#FF4D9E]"
                      )}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.links.linkedin}
                      className={cn(
                        "p-2 rounded-full transition-colors duration-200",
                        "hover:bg-[#A349E5]/10 text-[#A349E5]"
                      )}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.links.github}
                      className={cn(
                        "p-2 rounded-full transition-colors duration-200",
                        "hover:bg-[#4A90E2]/10 text-[#4A90E2]"
                      )}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}