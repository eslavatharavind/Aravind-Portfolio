import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary-light/10 to-primary-glow/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                  Eslavath Aravind
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                Computer Science Engineering Student
              </p>
              <p className="text-lg text-white/80 max-w-2xl">
                Passionate about developing intelligent systems, web applications, and AI-driven solutions. 
                Currently pursuing B.Tech at Bharat Institute of Engineering and Technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-medium"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary shadow-medium"
                onClick={() => scrollToSection('resume')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-primary-glow hover:bg-white/10">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-strong bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20">
                <img
                  src="/chinnu/image.jpg"
                  alt="Eslavath Aravind"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-glow/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors duration-300 flex flex-col items-center gap-2 group"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;