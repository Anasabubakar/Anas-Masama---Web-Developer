import { Briefcase, GraduationCap, Star, Search } from 'lucide-react';

const timelineData = [
  {
    icon: <GraduationCap />,
    date: 'June 2020',
    title: 'Started at Vision Programming Tech',
    description: 'Began my journey into computer science, laying the foundational knowledge for my future career.',
  },
  {
    icon: <GraduationCap />,
    date: 'December 2023',
    title: 'Graduated from Vision Programming Tech',
    description: 'Completed my program and immediately began my freelance career, applying my new skills to real-world projects.',
  },
  {
    icon: <Briefcase />,
    date: 'January 2025 - May 2025',
    title: 'Software Engineer Trainee at Be-Mint 2.0',
    description: 'Honed my skills as a software engineer trainee, contributing to innovative projects and collaborating with a dynamic team.',
  },
  {
    icon: <Search />,
    date: 'Present',
    title: 'Freelancing & Seeking New Opportunities',
    description: 'Currently working as a freelance developer and actively looking for my next full-time role.',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">A brief history of my career so far.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-primary/20 -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 rounded-lg shadow-lg bg-card border-primary/20 border transition-all duration-300 hover:border-primary hover:shadow-[0_0_30px_theme(colors.primary/50)] ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <time className="text-sm font-medium text-primary">{item.date}</time>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary shadow-[0_0_20px_theme(colors.primary/75)] transition-all duration-300 group-hover:scale-110">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
