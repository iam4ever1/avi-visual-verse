import { Card } from '@/components/ui/card';
import { Palette, Share2, FileText, Brush, Play } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      description: "Complete brand identity packages including logos, color schemes, typography, and brand guidelines that create lasting impressions.",
      features: ["Logo Design", "Brand Guidelines", "Color Palettes", "Typography Selection"]
    },
    {
      icon: Share2,
      title: "Social Media Campaign Design",
      description: "Engaging social media visuals and campaigns that boost your online presence and drive audience engagement across platforms.",
      features: ["Social Media Posts", "Story Templates", "Campaign Graphics", "Platform Optimization"]
    },
    {
      icon: FileText,
      title: "Print Design",
      description: "Professional print materials that make your brand stand out in the physical world, from business cards to large format displays.",
      features: ["Business Cards", "Brochures", "Posters", "Banners"]
    },
    {
      icon: Brush,
      title: "Illustration",
      description: "Custom illustrations and artwork that bring your concepts to life with unique, hand-crafted visual storytelling.",
      features: ["Digital Illustrations", "Character Design", "Icon Design", "Custom Artwork"]
    },
    {
      icon: Play,
      title: "Motion Graphics",
      description: "Dynamic motion graphics and basic video editing to add movement and life to your brand communications.",
      features: ["After Effects", "Premiere Pro", "Basic Animation", "Video Editing"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-purple-gradient mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions to elevate your brand and achieve your creative goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card p-8 hover-lift group">
              <div className="space-y-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-gradient rounded-xl flex items-center justify-center group-hover:animate-glow-pulse">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-accent">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate to bring your vision to life with exceptional design solutions 
              tailored to your brand's unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-gradient hover:opacity-90 text-white px-8 py-3 rounded-lg transition-opacity">
                Get a Quote
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg transition-colors">
                View Process
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;