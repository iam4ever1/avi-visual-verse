import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';
import projectRealfy from '@/assets/project-realfy.jpg';
import projectKabaddi from '@/assets/project-kabaddi.jpg';
import projectAaj from '@/assets/project-aaj.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "RealFy Oasis",
      category: "Branding & Print Design",
      description: "Complete branding package including logo design, business cards, letterheads, and social media assets for a premium real estate company.",
      image: projectRealfy,
      tags: ["Branding", "Print Design", "Social Media"],
      link: "#"
    },
    {
      title: "Indian Women's Kabaddi League",
      category: "Sports Branding",
      description: "Comprehensive branding and design package including team logos, social media campaigns, office branding, and promotional illustrations.",
      image: projectKabaddi,
      tags: ["Sports Design", "Social Media", "Illustrations"],
      link: "#"
    },
    {
      title: "AAJ Media Production - Ping Pong",
      category: "Animation & Digital Media",
      description: "Cleanup artwork and digital asset creation for MX Player web series, ensuring high-quality visuals for animation and digital platforms.",
      image: projectAaj,
      tags: ["Animation", "Digital Media", "Cleanup Art"],
      link: "https://www.youtube.com/watch?v=FyiRCG1_RI4"
    }
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-purple-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my most recent work across branding, digital design, and creative campaigns
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover-lift overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-md hover:bg-white/30">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-accent font-medium">{project.category}</p>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {project.link !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;