import { Briefcase, GraduationCap, Star } from 'lucide-react';

const timelineData = [
  {
    icon: <GraduationCap />,
    date: '2018',
    title: 'Started at Vision Programming Tech',
    description: 'Began my journey into computer science, laying the foundational knowledge for my future career.',
  },
  {
    icon: <Star />,
    date: '2020',
    title: 'First Web Project',
    description: 'Developed my first full-stack web application, sparking a deep passion for web development.',
  },
  {
    icon: <Briefcase />,
    date: '2022',
    title: 'Software Engineer Intern',
    description: 'Gained real-world experience working with a team of developers on a large-scale enterprise application.',
  },
  {
    icon: <GraduationCap />,
    date: '2023',
    title: 'Graduated from Vision Programming Tech',
    description: 'Completed my program, ready to take on new challenges in the tech industry.',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">My Journey</h2>
          <p className="mt-4 text-lg text-muted-foreground">A brief history of my career so far.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-center mb-12">
              <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className={`p-6 rounded-lg shadow-md bg-card border ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <time className="text-sm font-medium text-primary">{item.date}</time>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full flex items-center justify-center text-primary">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
