import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import heroImage from '@/assets/bryan-hero.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 animate-gradient-x"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Bryan</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-foreground/80 font-light">
                Graphic Designer | Branding & Advertising
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Crafting compelling visual narratives through design.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex items-center space-x-6">
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
                <ExternalLink className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary hover:bg-primary/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-purple-gradient hover:opacity-90 text-white border-0 px-8 py-6 text-lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
              >
                Let's Collaborate
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-gradient rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img 
                src={heroImage}
                alt="Bryan - Graphic Designer"
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;