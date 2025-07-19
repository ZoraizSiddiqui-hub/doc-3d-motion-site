import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Activity, Zap, Shield, Stethoscope, Users } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: "Interventional Cardiology",
    description: "Advanced catheter-based procedures to treat cardiovascular conditions with minimal invasive techniques.",
    features: ["Angioplasty", "Stent Placement", "Cardiac Catheterization"],
    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: Activity,
    title: "Cardiac Diagnostics",
    description: "Comprehensive diagnostic testing to accurately assess heart health and identify potential issues.",
    features: ["Echocardiography", "Stress Testing", "Holter Monitoring"],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Zap,
    title: "Electrophysiology",
    description: "Specialized treatment for heart rhythm disorders using the latest technological advances.",
    features: ["Ablation Therapy", "Pacemaker Implant", "Arrhythmia Treatment"],
    gradient: "from-secondary to-primary-light"
  },
  {
    icon: Shield,
    title: "Preventive Cardiology",
    description: "Proactive approaches to prevent heart disease through lifestyle modification and risk assessment.",
    features: ["Risk Assessment", "Lifestyle Counseling", "Early Detection"],
    gradient: "from-primary-light to-secondary-light"
  },
  {
    icon: Stethoscope,
    title: "Heart Failure Management",
    description: "Comprehensive care for patients with heart failure, focusing on quality of life improvement.",
    features: ["Medical Optimization", "Device Therapy", "Lifestyle Management"],
    gradient: "from-secondary-light to-primary"
  },
  {
    icon: Users,
    title: "Patient Education",
    description: "Empowering patients with knowledge and tools for better cardiovascular health management.",
    features: ["Educational Programs", "Support Groups", "Resource Materials"],
    gradient: "from-primary to-secondary-dark"
  }
];

export function Services() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold medical-text-gradient mb-6">
            Medical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cardiovascular care utilizing cutting-edge technology and evidence-based practices
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="card-medical h-full group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="mr-2 mb-1 text-xs bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}