import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { JavascriptIcon } from '../icons/JavascriptIcon';
import { ReactIcon } from '../icons/ReactIcon';
import { TailwindIcon } from '../icons/TailwindIcon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { HtmlIcon } from '../icons/HtmlIcon';
import { CssIcon } from '../icons/CssIcon';
import { SqlIcon } from '../icons/SqlIcon';
import { BootstrapIcon } from '../icons/BootstrapIcon';

const skills = [
  { name: 'HTML', icon: <HtmlIcon className="h-10 w-10" /> },
  { name: 'CSS', icon: <CssIcon className="h-10 w-10" /> },
  { name: 'JavaScript', icon: <JavascriptIcon className="h-10 w-10" /> },
  { name: 'SQL', icon: <SqlIcon className="h-10 w-10" /> },
  { name: 'Tailwind CSS', icon: <TailwindIcon className="h-10 w-10" /> },
  { name: 'Bootstrap', icon: <BootstrapIcon className="h-10 w-10" /> },
  { name: 'React', icon: <ReactIcon className="h-10 w-10" /> },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">Skills & Certificates</h2>
          <p className="mt-4 text-lg text-muted-foreground">My technical expertise and professional credentials.</p>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8 font-headline">Core Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 max-w-5xl mx-auto mb-20">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-primary/20 transition-all duration-300 hover:border-primary hover:scale-105 hover:shadow-[0_0_30px_theme(colors.primary/50)]">
              {skill.icon}
              <p className="font-medium text-center">{skill.name}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-center mb-8 font-headline">Certificates</h3>
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
