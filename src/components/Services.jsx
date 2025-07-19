import { motion } from 'framer-motion';
import { BookOpen, Users, Laptop, GraduationCap, Target, Lightbulb, Calendar, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Curriculum Development",
      description: "Custom curriculum design tailored to specific learning objectives and student needs.",
      features: ["Lesson Planning", "Assessment Design", "Learning Outcomes", "Progress Tracking"],
      price: "From $200/course",
      popular: false
    },
    {
      icon: Users,
      title: "Group Tutoring",
      description: "Interactive group sessions focused on collaborative learning and peer engagement.",
      features: ["Small Groups (4-6 students)", "Interactive Activities", "Peer Learning", "Group Projects"],
      price: "From $80/session",
      popular: true
    },
    {
      icon: Laptop,
      title: "Online Teaching",
      description: "Virtual classroom experiences with modern educational technology and tools.",
      features: ["Live Video Sessions", "Interactive Whiteboards", "Digital Resources", "Recording Available"],
      price: "From $60/hour",
      popular: false
    },
    {
      icon: GraduationCap,
      title: "Academic Coaching",
      description: "One-on-one mentoring for academic success and personal development.",
      features: ["Study Strategies", "Goal Setting", "Progress Monitoring", "Career Guidance"],
      price: "From $100/session",
      popular: false
    },
    {
      icon: Target,
      title: "Test Preparation",
      description: "Comprehensive exam preparation with proven strategies and practice materials.",
      features: ["Practice Tests", "Strategy Sessions", "Performance Analysis", "Confidence Building"],
      price: "From $120/session",
      popular: false
    },
    {
      icon: Video,
      title: "Educational Workshops",
      description: "Specialized workshops on specific topics or skills development programs.",
      features: ["Interactive Sessions", "Hands-on Activities", "Resource Materials", "Follow-up Support"],
      price: "From $300/workshop",
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Teaching <span className="medical-text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational services designed to enhance learning experiences 
            and achieve academic excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`card-medical h-full group hover:shadow-medical-float relative overflow-hidden ${
                service.popular ? 'ring-2 ring-primary/20' : ''
              }`}>
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <div className="text-2xl font-bold text-primary mt-1">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button 
                        className="w-full bg-primary hover:bg-primary-dark text-primary-foreground hover:scale-105 transition-all duration-300"
                        size="lg"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="card-medical p-8 max-w-2xl mx-auto">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I offer personalized educational solutions tailored to your specific needs. 
              Let's discuss how I can help you achieve your learning goals.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};