import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, BookOpen, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Experience = () => {
  const experience = [
    {
      title: "Senior Mathematics Teacher",
      company: "Springfield High School",
      location: "Springfield, MA",
      period: "2018 - Present",
      description: "Lead mathematics department, develop advanced curriculum, and mentor new teachers. Implemented innovative teaching methods resulting in 25% improvement in student performance.",
      achievements: ["Teacher of the Year 2022", "Curriculum Innovation Award", "Student Mentorship Excellence"]
    },
    {
      title: "Mathematics Teacher",
      company: "Lincoln Middle School",
      location: "Boston, MA",
      period: "2015 - 2018",
      description: "Taught algebra and geometry to middle school students. Developed after-school tutoring programs and integrated technology into classroom instruction.",
      achievements: ["Outstanding Educator Award", "Technology Integration Leader", "Parent Choice Award"]
    },
    {
      title: "Teaching Assistant",
      company: "Harvard University",
      location: "Cambridge, MA",
      period: "2012 - 2015",
      description: "Assisted in undergraduate mathematics courses while pursuing graduate studies. Conducted study sessions and provided one-on-one tutoring to students.",
      achievements: ["Excellence in Teaching Assistant Award", "Student Favorite TA", "Research Assistant Recognition"]
    }
  ];

  const education = [
    {
      degree: "Master of Education (M.Ed.)",
      school: "Harvard Graduate School of Education",
      location: "Cambridge, MA",
      year: "2015",
      specialization: "Curriculum and Instruction"
    },
    {
      degree: "Bachelor of Science in Mathematics",
      school: "MIT",
      location: "Cambridge, MA",
      year: "2012",
      specialization: "Applied Mathematics"
    }
  ];

  const certifications = [
    "Massachusetts Teaching License",
    "Google for Education Certified Trainer",
    "Advanced Placement Calculus Certification",
    "Educational Technology Specialist",
    "Differentiated Instruction Certificate"
  ];

  const publications = [
    {
      title: "Innovative Approaches to Mathematics Education",
      journal: "Journal of Educational Innovation",
      year: "2023"
    },
    {
      title: "Technology Integration in Secondary Mathematics",
      journal: "Mathematics Teacher Magazine",
      year: "2022"
    },
    {
      title: "Student Engagement in STEM Learning",
      journal: "Educational Research Quarterly",
      year: "2021"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="medical-text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my educational background, teaching experience, 
            and professional accomplishments in the field of education.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Users className="w-6 h-6 text-primary mr-3" />
              Teaching Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Card className="card-medical group hover:shadow-medical-float">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                        {exp.title}
                      </CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-primary font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.company}, {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <Badge 
                            key={achIndex} 
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Other */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 text-primary mr-3" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="card-medical">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground text-lg mb-2">{edu.degree}</h4>
                        <p className="text-primary font-medium mb-1">{edu.school}</p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{edu.location}</span>
                          <span>{edu.year}</span>
                        </div>
                        {edu.specialization && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Award className="w-6 h-6 text-primary mr-3" />
                Certifications
              </h3>
              <Card className="card-medical">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                        >
                          {cert}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <BookOpen className="w-6 h-6 text-primary mr-3" />
                Recent Publications
              </h3>
              <div className="space-y-3">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <Card className="card-medical">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-1">{pub.title}</h4>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{pub.journal}</span>
                          <span>{pub.year}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};