import { Button } from '@/components/ui/button';
import { ArrowDown, Linkedin, Github, Mail, ExternalLink, Download, Sparkles, MousePointer } from 'lucide-react';
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
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-float"></div>
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8 animate-slide-in-left">
            {/* Status badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for projects</span>
              <Sparkles className="w-4 h-4 text-accent" />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent text-lg font-medium tracking-wide uppercase">Hello, I'm</p>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                  <span className="gradient-text block">Avi</span>
                  <span className="gradient-text block">Vikram</span>
                  <span className="text-foreground/60 block text-4xl md:text-5xl font-light mt-2">Singh</span>
                </h1>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl text-foreground/90 font-medium leading-relaxed">
                  <span className="text-accent">Graphic Designer</span> • 
                  <span className="text-primary ml-2">Branding</span> • 
                  <span className="text-accent ml-2">Advertising</span>
                </h2>
                
                <div className="relative">
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-lg">
                    Crafting compelling visual narratives through design that 
                    <span className="text-primary font-medium"> resonate</span> and 
                    <span className="text-accent font-medium"> inspire</span>.
                  </p>
                  <div className="absolute -right-4 top-0 text-6xl text-primary/20 font-serif">"</div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
                  { icon: ExternalLink, label: "Behance", color: "hover:text-purple-500" },
                  { icon: Mail, label: "Email", color: "hover:text-green-500" },
                  { icon: Github, label: "GitHub", color: "hover:text-gray-400" }
                ].map((social, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    size="icon" 
                    className={`glass-card hover:scale-110 transition-all duration-300 ${social.color} hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
              <div className="h-8 w-px bg-border"></div>
              <Button variant="outline" size="sm" className="glass-card border-primary/30 hover:bg-primary hover:text-white">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('portfolio')}
                className="group bg-purple-gradient hover:shadow-xl hover:shadow-primary/25 text-white border-0 px-8 py-6 text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <MousePointer className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline" 
                className="group glass-card border-primary/50 text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg hover:shadow-xl transition-all"
              >
                Let's Collaborate
                <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">1+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">25+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Clients</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              {/* Glow effects */}
              <div className="absolute -inset-4 bg-purple-gradient rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
              
              {/* Main image */}
              <div className="relative glass-card p-4 rounded-3xl">
                <img 
                  src={heroImage}
                  alt="Avi Vikram Singh - Graphic Designer"
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl animate-float">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl animate-float" style={{ animationDelay: '1s' }}>
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 -right-8 w-20 h-20 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-accent/20 rounded-lg rotate-45 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Scroll</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => scrollToSection('about')}
              className="glass-card hover:bg-primary hover:text-white transition-all"
            >
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;