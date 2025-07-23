import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'bg-blue-500',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        
        
      ]
    },
    {
      category: 'Programming Languages',
      icon: Database,
      color: 'bg-green-500',
      skills: [
        { name: 'Python', level: 60 },
        { name: 'JavaScript', level: 80 },
        { name: 'SQL', level: 65 },
        { name: 'C Programming', level: 70 }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      color: 'bg-purple-500',
      skills: [
        { name: 'Git & GitHub', level: 75 },
        { name: 'Firebase', level: 40 },
        { name: 'OpenCV', level: 65 },
        { name: 'VS Code', level: 70 },
        { name: 'Cursor AI', level: 90 },
        { name: 'Lovable AI', level: 91 }
      ]
    },
    {
      category: 'Design & UI/UX',
      icon: Palette,
      color: 'bg-pink-500',
      skills: [
        { name: 'Responsive Design', level: 85 },
        { name: 'UI/UX Principles', level: 70 },
        { name: 'Component Design', level: 75 }
      ]
    }
  ];

  const additionalSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Project Management',
    'Technical Documentation',
    'API Integration',
    'Database Design',
    'Machine Learning Basics',
    'Agile Methodology'
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and proficiency levels across various technologies.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index}
                  className="shadow-medium hover:shadow-strong transition-all duration-300 border-border hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Skills */}
          <Card className="bg-gradient-card border-0 shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Additional Competencies
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <p className="text-muted-foreground">Programming Languages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <p className="text-muted-foreground">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <p className="text-muted-foreground">Years Learning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;