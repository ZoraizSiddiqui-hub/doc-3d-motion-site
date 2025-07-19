import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Doctor of Medicine (M.D.)",
    institution: "Johns Hopkins University School of Medicine",
    year: "2005",
    honors: "Magna Cum Laude"
  },
  {
    degree: "Residency in Internal Medicine",
    institution: "Massachusetts General Hospital",
    year: "2008",
    honors: "Chief Resident"
  },
  {
    degree: "Fellowship in Cardiology",
    institution: "Massachusetts General Hospital",
    year: "2011",
    honors: "Outstanding Fellow Award"
  },
  {
    degree: "Fellowship in Interventional Cardiology",
    institution: "Cleveland Clinic",
    year: "2012",
    honors: "Research Excellence Award"
  }
];

const experience = [
  {
    title: "Director of Interventional Cardiology",
    institution: "San Francisco Medical Center",
    period: "2018 - Present",
    description: "Leading a team of 12 cardiologists, overseeing 500+ procedures annually"
  },
  {
    title: "Senior Attending Cardiologist",
    institution: "UCSF Medical Center",
    period: "2015 - 2018",
    description: "Performed complex interventional procedures, mentored residents and fellows"
  },
  {
    title: "Assistant Professor of Medicine",
    institution: "University of California, San Francisco",
    period: "2012 - 2015",
    description: "Clinical practice and research in cardiovascular disease"
  }
];

const certifications = [
  "American Board of Internal Medicine - Cardiovascular Disease",
  "American Board of Internal Medicine - Interventional Cardiology",
  "Advanced Cardiac Life Support (ACLS)",
  "Basic Life Support (BLS)",
  "Registered Physician in Vascular Interpretation (RPVI)",
  "National Board of Echocardiography (NBE)"
];

const publications = [
  {
    title: "Novel Approaches in Interventional Cardiology: A 5-Year Study",
    journal: "Journal of American College of Cardiology",
    year: "2023"
  },
  {
    title: "Minimally Invasive Cardiac Procedures: Patient Outcomes",
    journal: "Circulation Research",
    year: "2022"
  },
  {
    title: "AI in Cardiovascular Diagnostics: Future Perspectives",
    journal: "Nature Medicine",
    year: "2022"
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold medical-text-gradient mb-6">
            Education & Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A foundation of excellence built through rigorous training and continuous learning
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="medical-gradient w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold">Education</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-medical h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <Badge className="bg-primary/10 text-primary">{edu.honors}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <div className="medical-gradient w-12 h-12 rounded-xl flex items-center justify-center mr-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-semibold">Professional Experience</h3>
          </div>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-medical">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.institution}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="medical-gradient w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <Card className="card-medical">
              <CardContent className="p-6">
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Publications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="medical-gradient w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Recent Publications</h3>
            </div>
            
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-medical">
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">{pub.title}</h4>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{pub.journal}</span>
                        <Badge variant="outline">{pub.year}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}