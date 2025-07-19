import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Stethoscope, Heart, Award } from 'lucide-react';
import { HeroMedical3D } from './Medical3D';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 animate-float">
          <HeroMedical3D />
        </div>
        <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '2s' }}>
          <HeroMedical3D />
        </div>
      </div>

      {/* Floating Medical Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-32 right-1/4"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Stethoscope className="w-12 h-12 text-white/20" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-1/4"
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Heart className="w-10 h-10 text-white/25" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-16"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Award className="w-8 h-8 text-white/20" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow-soft"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Dr. Sarah Johnson
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-4 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Cardiologist & Medical Innovator
          </motion.p>
          
          <motion.p 
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Dedicated to advancing cardiovascular health through innovative treatments and compassionate care
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 px-8 py-3 text-lg font-medium shadow-medical"
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-medium"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </div>
    </section>
  );
}