import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a modern UI, product management, and a secure checkout process.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    link: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop functionality and real-time updates.',
    technologies: ['React', 'Firebase', 'Zustand', 'Radix UI'],
    link: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
  },
  {
    title: 'Portfolio Website V1',
    description: 'My first personal portfolio website, built to showcase my skills and learn new technologies.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    link: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-3'),
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                {project.image && (
                  <Image
                    src={project.image.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-[3/2] object-cover w-full"
                    data-ai-hint={project.image.imageHint}
                  />
                )}
              </CardHeader>
              <CardContent className="flex-1 p-6">
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline">
                  <Link href={project.link}>
                    View Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
