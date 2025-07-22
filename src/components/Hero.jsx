import { motion } from 'framer-motion';
import { Cake, Cookie, ChefHat, Heart } from 'lucide-react';
import { HeroBaking3D, FloatingBakingIcon } from './Baking3D';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <HeroBaking3D>
        {/* Floating baking icons */}
        <FloatingBakingIcon 
          icon={Cake} 
          className="top-20 left-10 md:left-20" 
          delay={0.2} 
        />
        <FloatingBakingIcon 
          icon={Cookie} 
          className="top-32 right-16 md:right-32" 
          delay={0.4} 
        />
        <FloatingBakingIcon 
          icon={ChefHat} 
          className="bottom-40 left-8 md:left-24" 
          delay={0.6} 
        />
        <FloatingBakingIcon 
          icon={Heart} 
          className="bottom-32 right-12 md:right-28" 
          delay={0.8} 
        />

        {/* Hero content */}
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block text-foreground">Welcome to</span>
              <span className="block medical-text-gradient">Eclat Bakes</span>
              <span className="block text-foreground">Sweet Creations</span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Handcrafted with love, baked fresh daily. From custom cakes to artisanal 
              breads, we create sweet memories one bite at a time.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-medical"
            >
              View Our Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300"
            >
              Order Now
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          >
            {[
              { number: "1000+", label: "Happy Customers" },
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Unique Recipes" },
              { number: "100%", label: "Fresh Daily" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </HeroBaking3D>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};