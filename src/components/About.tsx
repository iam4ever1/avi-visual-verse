import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const strengths = [
    { icon: Lightbulb, title: "Creative Problem Solving", description: "Innovative solutions for complex design challenges" },
    { icon: Award, title: "Eye for Detail", description: "Meticulous attention to every design element" },
    { icon: Users, title: "Collaborative Spirit", description: "Thriving in team environments and client partnerships" }
  ];

  const education = [
    {
      degree: "Bachelor's in Visual Arts",
      institution: "Asian Institute of Gaming and Animation",
      period: "2020–2024",
      icon: BookOpen
    },
    {
      degree: "MAAC Certification",
      institution: "MAAC, Noida",
      period: "2019–2020",
      icon: Award
    },
    {
      degree: "Higher Secondary Education",
      institution: "JKG International School",
      period: "Completed",
      icon: BookOpen
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-purple-gradient mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Personal Bio</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Avi Vikram Singh is a passionate and dedicated Graphic Designer with over a year of experience 
                  in branding and advertising. He brings concepts to life using Adobe Creative Suite 
                  and Canva, always striving to exceed brand goals with innovative design.
                </p>
                <p>
                  With a strong foundation in visual arts and a collaborative approach to design, 
                  Avi creates compelling visual narratives that resonate with audiences and 
                  drive business results.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Key Strengths</h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <div key={index} className="glass-card p-6 hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-purple-gradient rounded-lg">
                        <strength.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                        <p className="text-muted-foreground">{strength.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-3 top-2 w-6 h-6 bg-purple-gradient rounded-full flex items-center justify-center">
                      <edu.icon className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">{edu.degree}</h4>
                      <p className="text-accent font-medium">{edu.institution}</p>
                      <Badge variant="secondary" className="mt-2">{edu.period}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">1+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3</div>
                <p className="text-muted-foreground">Major Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;