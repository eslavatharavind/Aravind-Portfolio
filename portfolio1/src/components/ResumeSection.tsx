import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Eye, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ResumeSection = () => {
  const resumeData = {
    personal: {
      name: 'Eslavath Aravind',
      title: 'Computer Science Engineering Student',
      email: 'eslavatharavind@gmail.com',
      phone: '+91 9347268583',
      location: 'Hyderabad, Telangana, India',
      linkedin: 'linkedin.com/in/eslavath-aravind'
    },
    experience: [
      {
        role: 'Full Stack Development Intern',
        company: 'Cognifyz Technologies',
        duration: '2024',
        description: 'Gained hands-on experience in full-stack web development, working with modern technologies and frameworks to build responsive web applications.'
      }
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science Engineering',
        institution: 'Bharat Institute of Engineering and Technology',
        duration: '2021 - 2025',
        cgpa: '6.9'
      },
      {
        degree: 'Intermediate (Class XII)',
        institution: 'Sri Chaitanya Junior College',
        duration: '2019 - 2021',
        cgpa: '5.74'
      }
    ],
    skills: {
      'Programming Languages': ['JavaScript', 'Python', 'C', 'SQL'],
      'Web Technologies': ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
      'Tools & Frameworks': ['Git/GitHub', 'Firebase', 'OpenCV', 'VS Code'],
      'Soft Skills': ['Problem Solving', 'Team Collaboration', 'Communication']
    },
    projects: [
      {
        name: 'Facial Recognition Based Attendance System',
        technologies: 'Python, OpenCV, Machine Learning',
        description: 'Automated attendance system using facial recognition technology for real-time student identification and attendance marking.'
      },
      
      {
        name: 'VocMate AI Tutor',
        technologies: 'AI/ML, NLP, Speech Recognition, React',
        description: 'AI-powered vocabulary enhancement tool with speech recognition and personalized learning paths.'
      }
    ]
  };

  const [open, setOpen] = React.useState(false);
  const [openAltoks, setOpenAltoks] = React.useState(false);
  const [openCognifyz, setOpenCognifyz] = React.useState(false);

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Professional Resume
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my academic background, technical skills, and project experience.
            </p>
          </div>

          {/* Resume Actions */}
          <div className="flex justify-center gap-4 mb-12">
            {/* Download PDF Button */}
            <a href="/ARAVIND-ESLAVATH-RESUME.pdf" download className="no-underline">
              <Button size="lg" className="shadow-medium">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
            </a>
            {/* View Full Resume Button */}
            <Button variant="outline" size="lg" onClick={() => setOpen(true)}>
              <Eye className="mr-2 h-5 w-5" />
              View Full Resume
            </Button>
            {/* PDF Viewer Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                <DialogHeader>
                  <DialogTitle>Full Resume PDF</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-auto">
                  <iframe
                    src="/ARAVIND-ESLAVATH-RESUME.pdf"
                    title="ARAVIND ESLAVATH Resume PDF"
                    className="w-full h-[70vh] border rounded"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Resume Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Personal Information */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground break-all">
                      {resumeData.personal.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {resumeData.personal.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {resumeData.personal.location}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(resumeData.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-foreground text-sm mb-2">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Education */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-primary font-medium text-sm">{edu.institution}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{edu.duration}</span>
                        </div>
                        <span className="text-xs font-medium text-foreground">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Altoks Internship - FIRST */}
                  <div className="border-l-2 border-primary pl-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">AI Full Stack Developer Intern</h4>
                        <p className="text-primary font-medium text-sm">Altoks</p>
                      <div className="flex items-center gap-1 mt-2 mb-2">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">2025</span>
                        </div>
                      </div>
                      <div>
                        {/* View Certificate Button */}
                        <Button size="sm" variant="outline" onClick={() => setOpenAltoks(true)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2 mt-2">
                      As an AI Full Stack Developer Intern at Altoks, I engineered VOCMATE, an advanced real-time AI speaking partner platform. I led the integration of voice, LLM, and web technologies to deliver seamless, interactive user experiences. This role deepened my expertise in building production-grade, end-to-end conversational AI systems.
                    </p>
                    {/* Certificate Dialog */}
                    <Dialog open={openAltoks} onOpenChange={setOpenAltoks}>
                      <DialogContent className="max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Altoks Internship Certificate</DialogTitle>
                        </DialogHeader>
                        <img
                          src="/results/altoks-certificate.jpg"
                          alt="Altoks Internship Certificate"
                          className="w-full h-auto rounded shadow-md border"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                  {/* Cognifyz Internship - SECOND */}
                  <div className="border-l-2 border-primary pl-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground">Python Development Intern</h4>
                        <p className="text-primary font-medium text-sm">Cognifyz Technologies</p>
                        <div className="flex items-center gap-1 mt-2 mb-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">2024</span>
                        </div>
                      </div>
                      <div>
                        {/* View Certificate Button */}
                        <Button size="sm" variant="outline" onClick={() => setOpenCognifyz(true)}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      Gained hands-on experience in full-stack web development, working with modern technologies and frameworks to build responsive web applications.
                    </p>
                    {/* Certificate Dialog */}
                    <Dialog open={openCognifyz} onOpenChange={setOpenCognifyz}>
                      <DialogContent className="max-w-xl">
                        <DialogHeader>
                          <DialogTitle>Cognifyz Internship Certificate</DialogTitle>
                        </DialogHeader>
                        <img
                          src="/results/cognifyz-certificate.jpg"
                          alt="Cognifyz Internship Certificate"
                          className="w-full h-auto rounded shadow-md border"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>

              {/* Projects */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Key Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {resumeData.projects.map((project, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4">
                      <h4 className="font-semibold text-foreground mb-1">
                        {project.name}
                      </h4>
                      <p className="text-primary text-sm font-medium mb-2">
                        {project.technologies}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Objective */}
              <Card className="shadow-medium bg-gradient-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    Career Objective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Enthusiastic Computer Science Engineering student seeking opportunities to apply 
                    my technical skills in web development, artificial intelligence, and software 
                    engineering. Committed to continuous learning and contributing to innovative 
                    technology solutions that make a positive impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;