import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye, Bot, X } from 'lucide-react';

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showVocmateModal, setShowVocmateModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenVocmateModal = () => setShowVocmateModal(true);
  const handleCloseVocmateModal = () => setShowVocmateModal(false);

  const projects = [
    {
      title: 'Facial Recognition Based Attendance Management System',
      description:
        'A comprehensive attendance tracking system that automates student attendance using advanced facial recognition technology.',
      icon: Eye,
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'GUI Development', 'SQLite', 'Tkinter'],
      features: [
        'Secure enrollment-based authentication system',
        'Real-time facial recognition with green bounding box detection',
        'Automatic attendance marking with timestamp',
        'Comprehensive attendance statistics and reporting',
        'CSV export functionality for data analysis',
        'Student profile management with image training',
        'Course, year, semester, and section-wise attendance tracking',
        'Intuitive GUI with multiple operation modes',
      ],
      challenges:
        'Developed a robust facial recognition system capable of accurately identifying students in varying lighting conditions, implemented secure authentication with enrollment validation, and created a comprehensive reporting system with statistical analysis and data export features.',
      category: 'Machine Learning',
      status: 'Completed',
      codeUrl: 'https://github.com/eslavatharavind/Face-Recognition-Attendance-System',
    },
    {
      title: 'VocMate AI Tutor',
      description:
        'An AI-powered vocabulary enhancement tool that helps users improve their English vocabulary through interactive speech and text-based learning exercises.',
      icon: Bot,
      technologies: ['AI/ML', 'Natural Language Processing', 'Speech Recognition', 'React', 'Python'],
      features: [
        'AI-powered vocabulary recommendations',
        'Speech recognition for pronunciation',
        'Interactive learning exercises',
        'Progress tracking and analytics',
        'Personalized learning paths',
      ],
      challenges:
        'Integrated speech recognition APIs and implemented adaptive learning algorithms for personalized vocabulary enhancement.',
      category: 'Artificial Intelligence',
      status: 'In Development',
      codeUrl: 'https://github.com/eslavatharavind/VOCMATE-AI-TUTOR',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-accent/30 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Explore my key projects that demonstrate my technical skills and problem-solving abilities across different domains.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={index}
                  className="shadow-medium hover:shadow-strong transition-all duration-300 border-border hover:border-primary/20 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                              <IconComponent className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                              <Badge
                                variant="secondary"
                                className={`mb-2 ${
                                  project.status === 'Completed'
                                    ? 'bg-green-100 text-green-800 border-green-200'
                                    : 'bg-blue-100 text-blue-800 border-blue-200'
                                }`}
                              >
                                {project.status}
                              </Badge>
                              <p className="text-sm text-primary font-medium">
                                {project.category}
                              </p>
                            </div>
                          </div>
                        </div>

                        <CardTitle className="text-2xl font-bold text-foreground mb-3">
                          {project.title}
                        </CardTitle>

                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          {project.codeUrl && (
                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="shadow-soft">
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                              </Button>
                            </a>
                          )}
                          {project.title.includes('Facial') && (
                            <Button variant="outline" size="sm" onClick={handleOpenModal}>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Result Image
                            </Button>
                          )}
                          {project.title.includes('VocMate') && (
                            <Button variant="outline" size="sm" onClick={handleOpenVocmateModal}>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Result Image
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>

                    <div className="bg-gradient-card p-8 border-l border-border">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-3">Challenges & Solutions</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.challenges}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Major Projects</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Technologies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Completion Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-0">
                <div className="text-2xl font-bold text-primary mb-2">2+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-xl relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
              <X size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Facial Recognition Attendance - Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src="/results/facial-ui.png" alt="UI Screenshot" className="rounded shadow" />
              <img src="/results/facial-cam.png" alt="Camera Screenshot" className="rounded shadow" />
              <img src="/results/facial-date-filter.png" alt="Date Filter" className="rounded shadow" />
              <img src="/results/facial-stats.png" alt="Attendance Stats" className="rounded shadow" />
            </div>
          </div>
        </div>
      )}

      {showVocmateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-4xl w-full overflow-y-auto max-h-[90vh] shadow-xl relative">
            <button onClick={handleCloseVocmateModal} className="absolute top-2 right-2 text-gray-500 hover:text-red-600">
              <X size={24} />
            </button>
            <h2 className="text-xl font-semibold mb-4">VocMate AI Tutor - Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src="/results/vocmate-ui.png" alt="UI Screenshot" className="rounded shadow" />
                <div className="text-center mt-2 text-sm text-muted-foreground">UI Screenshot</div>
              </div>
              <div>
                <img src="/results/vocmate-avatar.png" alt="Avatar Selection" className="rounded shadow" />
                <div className="text-center mt-2 text-sm text-muted-foreground">Avatar Selection</div>
              </div>
              <div>
                <img src="/results/vocmate-progress.png" alt="Progress Dashboard" className="rounded shadow" />
                <div className="text-center mt-2 text-sm text-muted-foreground">Progress Dashboard</div>
              </div>
              <div>
                <img src="/results/vocmate-session.png" alt="Session Example" className="rounded shadow" />
                <div className="text-center mt-2 text-sm text-muted-foreground">Session Example</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
