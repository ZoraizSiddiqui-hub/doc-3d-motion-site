import { motion } from 'framer-motion';
import { Cake, Users, Award, Heart, Target, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    "Custom Cake Design", "Wedding Cakes", "Birthday Cakes",
    "Artisan Breads", "French Pastries", "Gluten-Free Options",
    "Vegan Delights", "Seasonal Specialties"
  ];

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every creation is crafted with passion and attention to detail"
    },
    {
      icon: Target,
      title: "Quality First",
      description: "Using only the finest ingredients for the best taste and quality"
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Bringing your sweetest dreams to life with innovative designs"
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
            About <span className="medical-text-gradient">Eclat Bakes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passion-driven home bakery dedicated to creating exceptional baked goods 
            that bring joy and sweetness to every occasion.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Story and stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded with a simple belief that great baking starts with great ingredients 
                and genuine care, Eclat Bakes has been serving the community with handcrafted 
                delights for over 5 years. What started as a hobby in my kitchen has grown 
                into a beloved local bakery known for quality and creativity.
              </p>
              <p className="text-lg leading-relaxed">
                From elaborate wedding cakes to everyday treats, we specialize in making 
                your special moments even sweeter. Our commitment to using fresh, locally 
                sourced ingredients ensures every bite is a delightful experience.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, number: "1000+", label: "Happy Customers", color: "text-blue-500" },
                { icon: Cake, number: "500+", label: "Custom Cakes", color: "text-pink-500" },
                { icon: Award, number: "10+", label: "Awards Won", color: "text-yellow-500" },
                { icon: Heart, number: "5+", label: "Years Experience", color: "text-red-500" }
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
            {/* Specialties */}
            <Card className="card-medical">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Our Specialties</h3>
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
              <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
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