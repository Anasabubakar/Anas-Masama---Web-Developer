import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { JavascriptIcon } from '../icons/JavascriptIcon';
import { TypescriptIcon } from '../icons/TypescriptIcon';
import { ReactIcon } from '../icons/ReactIcon';
import { NextjsIcon } from '../icons/NextjsIcon';
import { NodeIcon } from '../icons/NodeIcon';
import { TailwindIcon } from '../icons/TailwindIcon';

const skills = [
  { name: 'JavaScript', icon: <JavascriptIcon className="h-10 w-10" /> },
  { name: 'TypeScript', icon: <TypescriptIcon className="h-10 w-10" /> },
  { name: 'React', icon: <ReactIcon className="h-10 w-10" /> },
  { name: 'Next.js', icon: <NextjsIcon className="h-10 w-10" /> },
  { name: 'Node.js', icon: <NodeIcon className="h-10 w-10" /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon className="h-10 w-10" /> },
];

const certificates = [
  {
    name: 'Introduction to Web Development',
    issuer: 'University of California, Davis (via Coursera)',
    image: PlaceHolderImages.find(p => p.id === 'cert-coursera-ucdavis'),
    link: 'https://coursera.org/verify/5VFZ2J50PJOT',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Skills & Certificates</h2>
          <p className="mt-4 text-lg text-muted-foreground">My technical expertise and professional credentials.</p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">Core Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto mb-20">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border transition-transform hover:scale-105 hover:shadow-lg">
              {skill.icon}
              <p className="font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8">Certificates</h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {certificates.map((cert) => (
            <Card key={cert.name} className="overflow-hidden">
                {cert.image && (
                <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-0">
                        <Image
                            src={cert.image.imageUrl}
                            alt={cert.name}
                            width={500}
                            height={300}
                            className="w-full aspect-[5/3] object-cover transition-transform hover:scale-105"
                            data-ai-hint={cert.image.imageHint}
                        />
                    </CardContent>
                </Link>
                )}
              <CardHeader>
                <CardTitle>{cert.name}</CardTitle>
                <p className="text-muted-foreground">{cert.issuer}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
