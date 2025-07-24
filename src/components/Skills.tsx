import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: "Adobe Photoshop", level: 95, category: "Advanced" },
    { name: "Adobe Illustrator", level: 92, category: "Advanced" },
    { name: "After Effects", level: 75, category: "Intermediate" },
    { name: "Premiere Pro", level: 70, category: "Intermediate" },
    { name: "Canva", level: 88, category: "Proficient" },
    { name: "Figma", level: 80, category: "Proficient" }
  ];

  const softSkills = [
    "Creative Problem Solving",
    "Visual Communication",
    "Brand Strategy",
    "Color Theory",
    "Typography",
    "Layout Design",
    "Client Communication",
    "Project Management"
  ];

  const interests = [
    "Photography",
    "Art",
    "Music",
    "Cooking",
    "Digital Trends",
    "Brand Analysis"
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Advanced": return "bg-green-500";
      case "Intermediate": return "bg-yellow-500";
      case "Proficient": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-purple-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and creative competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge 
                          variant="secondary" 
                          className={`${getCategoryColor(skill.category)} text-white text-xs`}
                        >
                          {skill.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-purple-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Interests */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/30 text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Soft Skills & Design Principles */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Design Competencies</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="p-4 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-accent transition-colors"></div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{skill}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Achievement Stats */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <p className="text-sm text-muted-foreground">Software Mastered</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">100%</div>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">3</div>
                  <p className="text-sm text-muted-foreground">Design Specialties</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-accent">24/7</div>
                  <p className="text-sm text-muted-foreground">Creative Mindset</p>
                </div>
              </div>
            </Card>

            {/* Learning Journey */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Continuous Learning</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm constantly evolving my skills and staying updated with the latest design trends, 
                  tools, and technologies to deliver cutting-edge creative solutions.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">+</span>
                  </div>
                  <div>
                    <p className="font-medium">Always Learning</p>
                    <p className="text-sm text-muted-foreground">New courses, tutorials, and certifications</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;