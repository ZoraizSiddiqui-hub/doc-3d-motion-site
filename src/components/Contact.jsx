import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Education3DScene } from './Education3D';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sarah.educator@email.com",
      description: "Send me a message anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call during office hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Boston, Massachusetts",
      description: "Available for in-person sessions"
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon-Fri: 9AM-6PM",
      description: "Weekend sessions available"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Education3DScene />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="medical-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your learning journey? I'd love to hear from you and discuss 
            how I can help you achieve your educational goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Card className="card-medical group hover:shadow-medical-float">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-lg text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="John"
                      className="border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Doe"
                      className="border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="john@example.com"
                    className="border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input 
                    placeholder="What would you like to discuss?"
                    className="border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell me about your learning goals, preferred schedule, or any questions you have..."
                    rows={5}
                    className="border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 shadow-medical"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>

                <p className="text-sm text-muted-foreground text-center">
                  I typically respond within 24 hours. For urgent matters, please call directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};