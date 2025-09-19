import { Construction } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="text-center">
          <Construction className="mx-auto h-16 w-16 text-primary" />
          <h2 className="mt-8 text-3xl md:text-4xl font-bold font-headline uppercase">Projects Coming Soon</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm currently working hard to put together a collection of my best work. Please check back shortly!
          </p>
        </div>
      </div>
    </section>
  );
}
