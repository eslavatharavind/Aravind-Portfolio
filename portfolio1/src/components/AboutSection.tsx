import { Card, CardContent } from '@/components/ui/card';
import { Code, Brain, Rocket, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Passionate about creating responsive and interactive web applications using modern technologies.'
    },
    {
      icon: Brain,
      title: 'AI & ML Enthusiast',
      description: 'Keen interest in artificial intelligence, machine learning, and developing intelligent systems.'
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Always exploring new technologies and approaches to solve real-world problems effectively.'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on continuous learning and building a successful career in technology.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Passionate Computer Science Student
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am Eslavath Aravind, a dedicated Computer Science Engineering student at 
                  Bharat Institute of Engineering and Technology. My journey in technology is 
                  driven by a deep passion for creating innovative solutions that make a difference.
                </p>
                <p>
                  I specialize in front-end development with expertise in modern web technologies 
                  like React, JavaScript, and responsive design. My interest extends to artificial 
                  intelligence and machine learning, where I see immense potential for creating 
                  intelligent systems that can solve complex real-world problems.
                </p>
                <p>
                  Through various projects including facial recognition systems and AI-powered 
                  educational tools, I've gained hands-on experience in translating theoretical 
                  knowledge into practical applications. I'm committed to continuous learning 
                  and staying updated with the latest technological advancements.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold text-foreground mb-6">
                    Career Objectives
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Develop expertise in full-stack web development
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Master AI/ML technologies and their applications
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Contribute to innovative tech solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Build a successful career in technology industry
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <Card 
                  key={index}
                  className="text-center p-6 hover:shadow-medium transition-all duration-300 border-border hover:border-primary/20 group"
                >
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;