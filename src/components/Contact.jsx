import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Baking3DScene } from './Baking3D';

export const Contact = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Call or text anytime"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@eclatbakes.com", "We respond within 24 hours"],
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Downtown Area", "Delivery & Pickup Available"],
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sat: 8AM-6PM", "Sun: 10AM-4PM"],
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-10">
        <Baking3DScene />
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="medical-text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to place an order or have questions about our baked goods? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="card-medical p-6 group hover:shadow-medical-float"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="card-medical">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="w-6 h-6 mr-2 text-primary" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="border-primary/20 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your order or inquiry..." 
                    className="min-h-[120px] border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground py-3 text-lg hover:scale-105 transition-all duration-300 shadow-medical"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};