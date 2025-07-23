import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'eslavatharavind@gmail.com',
      description: 'Send me an email',
      action: 'mailto:eslavatharavind@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9347268583',
      description: 'Give me a call',
      action: 'tel:9347268583',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Hyderabad, Telangana',
      description: 'Come say hello',
      action: '',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/eslavath-aravind',
      color: 'bg-gray-900 hover:bg-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/eslavath-aravind-9aa64a30a',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      url: 'https://wa.me/9347268583',
      color: 'bg-green-600 hover:bg-green-700',
    },
  ];

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), 5000)
    );

    try {
      await Promise.race([
        emailjs.send(
          'service_bapuuds',
          'template_r3rtv5n',
          {
            from_name: `${form.firstName} ${form.lastName}`,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
          },
          'EvvqHDSU_6TAyPFwM'
        ),
        timeoutPromise,
      ]);
      setResult('✅ Message sent successfully!');
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      console.error('EmailJS error:', err);
      setResult('❌ Failed to send email: ' + (err?.text || err?.message || 'Unknown error'));
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary-light/20 to-primary-glow/10"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-glow/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities, collaborations, and meaningful conversations. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Whether you're interested in discussing opportunities, collaborating on projects, 
                  or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">{contact.title}</h4>
                            <p className="text-white/90 font-medium">{contact.value}</p>
                            <p className="text-white/70 text-sm">{contact.description}</p>
                          </div>
                          {contact.action && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-white hover:bg-white/20"
                              onClick={() => window.open(contact.action, '_blank')}
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect on Social Media</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        size="lg"
                        className={`${social.color} text-white shadow-medium hover:shadow-strong transition-all duration-300`}
                        onClick={() => window.open(social.url, '_blank')}
                      >
                        <Icon className="h-5 w-5 mr-2" />
                        {social.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">First Name</label>
                      <Input
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Last Name</label>
                      <Input
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter Your Name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter Your Mail"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                    <Input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me more about your project, question, or how I can help..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-white text-primary hover:bg-white/90 shadow-medium"
                    type="submit"
                    disabled={loading}
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                  {result && <p className="text-white/60 text-sm text-center mt-2">{result}</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
