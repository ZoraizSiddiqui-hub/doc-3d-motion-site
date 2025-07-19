import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: Users, label: "Patients Treated", value: "5,000+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: GraduationCap, label: "Certifications", value: "12" },
  { icon: Clock, label: "Success Rate", value: "98%" }
];

const specializations = [
  "Interventional Cardiology",
  "Cardiac Surgery",
  "Preventive Cardiology", 
  "Heart Failure Treatment",
  "Electrophysiology",
  "Cardiac Imaging"
];

export function About() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold medical-text-gradient mb-6">
            About Dr. Johnson
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Committed to excellence in cardiovascular medicine with a passion for innovation and patient-centered care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="card-medical overflow-hidden">
              <CardContent className="p-0">
                <div className="h-80 bg-medical-gradient flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white text-6xl font-light">SJ</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Professional Background</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience 
                    in advanced cardiovascular care. She completed her medical degree at Johns Hopkins 
                    University and her cardiology fellowship at Massachusetts General Hospital.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-medical text-center p-6 h-full">
                  <CardContent className="p-0">
                    <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-2">{stat.value}</h4>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-semibold mb-8">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-sm border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                >
                  {spec}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}