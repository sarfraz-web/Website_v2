import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative isolate pt-14">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[48rem] -translate-x-1/6 rotate-[40deg] bg-gradient-to-tr from-[#FF4D9E] to-[#A349E5] opacity-77 sm:left-[calc(50%-35rem)] sm:w-[80rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-muted-foreground ring-1 ring-gray-900/50 hover:ring-gray-900/5 bg-white/300 backdrop-blur-md shadow-lg overflow-hidden">
                Announcing our next-gen AI platform.{" "}
                <a href="/announcement" className="font-semibold text-primary relative">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                  <div className="shine absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 transform -rotate-45 animate-shine"></div>
                </a>
              </div>
            </div>
            <br />
            <br />
            <div className="flex flex-row">

              <motion.div
                // Animation properties for fade-in effect
                initial={{ opacity: 0, scale: 1.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="mr-60"
              >
                <h1
                  className="text-4xl font-bold tracking-tight text-center sm:text-6xl whitespace-nowrap"
                >
                  Unlock The Power of AI For{" "}
                  <br />
                  <TypeAnimation
                    sequence={[
                      "BUSINESS", 
                      1500,
                      "DEVELOPERS",
                      1000,
                      "END-USER",
                      1000,
                      "EVERYONE",
                      1500,
                    ]}
                    wrapper="span"
                    speed={45}
                    repeat={Infinity}
                  />
                </h1>
              </motion.div>


            </div>
            <br /><br />
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transform the way you work with cutting-edge AI solutions designed to streamline operations, enhance decision-making, and drive growth.
            </p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90">
                <Brain className="h-5 w-5" />
                Get Started
              </Button>
              <Link to="/demo">
              <Button size="lg" variant="outline" className="border-secondary hover:bg-secondary/10">
                Demo
            </Button>
            </Link>
            </div>
          </div>
          <div className="mt-16 flex justify-center sm:mt-24">
            <div className="relative max-w-[996px] max-h-[651px] rounded-xl bg-gradient-to-r from-secondary/5 to-primary/5 p-4 ring-1 ring-inset ring-gray-900/10">
              <img
                src="/products/chat.png"
                alt="App screenshot"
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
