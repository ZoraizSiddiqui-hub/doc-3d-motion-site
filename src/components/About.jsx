import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Heart, Target, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    "Curriculum Development", "Student Assessment", "Educational Technology",
    "Classroom Management", "Interactive Learning", "Research Methods",
    "Project-Based Learning", "Differentiated Instruction"
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion for Teaching",
      description: "Dedicated to inspiring and nurturing every student's potential"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on achieving measurable learning outcomes and student success"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new teaching methods and educational technologies"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="medical-text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An experienced educator committed to transforming lives through quality education
            and innovative teaching methodologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Bio and stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                With over 15 years of experience in education, I have dedicated my career to 
                creating engaging learning environments that foster creativity, critical thinking, 
                and personal growth. My approach combines traditional pedagogical principles with 
                modern educational technology to deliver exceptional learning experiences.
              </p>
              <p className="text-lg leading-relaxed">
                I specialize in curriculum development, student assessment, and implementing 
                innovative teaching strategies that cater to diverse learning styles. My goal 
                is to inspire students to become lifelong learners and confident individuals.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, number: "500+", label: "Students Mentored", color: "text-blue-500" },
                { icon: BookOpen, number: "50+", label: "Courses Developed", color: "text-green-500" },
                { icon: Award, number: "25+", label: "Awards Received", color: "text-purple-500" },
                { icon: Heart, number: "15+", label: "Years Teaching", color: "text-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="card-medical p-6 text-center group hover:shadow-medical-float"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Skills and values */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Skills */}
            <Card className="card-medical">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Core Competencies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Teaching Philosophy</h3>
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="card-medical p-6 group hover:shadow-medical-float"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};