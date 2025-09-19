import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { JavascriptIcon } from '../icons/JavascriptIcon';
import { TypescriptIcon } from '../icons/TypescriptIcon';
import { ReactIcon } from '../icons/ReactIcon';
import { NextjsIcon } from '../icons/NextjsIcon';
import { NodeIcon } from '../icons/NodeIcon';
import { TailwindIcon } from '../icons/TailwindIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const skills = [
  { name: 'JavaScript', icon: <JavascriptIcon className="h-10 w-10" /> },
  { name: 'TypeScript', icon: <TypescriptIcon className="h-10 w-10" /> },
  { name: 'React', icon: <ReactIcon className="h-10 w-10" /> },
  { name: 'Next.js', icon: <NextjsIcon className="h-10 w-10" /> },
  { name: 'Node.js', icon: <NodeIcon className="h-10 w-10" /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon className="h-10 w-10" /> },
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
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="https://drive.google.com/drive/folders/1VkuSV3OcgJbWPcR1uB_IA3E2D6ER0ZX7?usp=sharing" target="_blank" rel="noopener noreferrer">
              View All Certificates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}