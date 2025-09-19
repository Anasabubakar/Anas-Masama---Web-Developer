import { Button } from '@/components/ui/button';
import { IntroGenerator } from '@/components/IntroGenerator';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 bg-background">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,255,0.3),rgba(255,255,255,0))]"></div>
        </div>
      <div className="container text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-wider text-foreground sm:text-5xl md:text-6xl font-headline uppercase">
            Anas Masama
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            A Passionate Web Developer Crafting Modern and Performant Web Experiences
          </p>
          <div className="mt-8">
            <IntroGenerator />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <Link href="#timeline" aria-label="Scroll to next section">
                <ArrowDown className="h-8 w-8 text-primary/50 animate-bounce transition-transform duration-300 hover:scale-125" />
            </Link>
        </div>
      </div>
    </section>
  );
}
