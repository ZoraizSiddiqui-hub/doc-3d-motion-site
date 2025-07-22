import { motion } from 'framer-motion';
import { Cake, Phone, Mail, MapPin, Clock, Heart, Facebook, Instagram, Twitter, Star, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const quickLinks = [
    { name: "Custom Cakes", href: "#products" },
    { name: "Wedding Cakes", href: "#products" },
    { name: "Pastries", href: "#products" },
    { name: "Artisan Breads", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const policies = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Delivery Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The wedding cake was absolutely perfect! Beautiful design and delicious taste.",
      rating: 5
    },
    {
      name: "Mike Chen",
      text: "Best cupcakes in town! Fresh ingredients and amazing flavors.",
      rating: 5
    },
    {
      name: "Emily Davis",
      text: "Eclat Bakes made my daughter's birthday extra special with their custom cake.",
      rating: 5
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-muted/30 to-background border-t border-border">
      {/* Newsletter Section */}
      <motion.section
        {...fadeInUp}
        className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Stay Sweet with Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Get exclusive recipes, special offers, and be the first to know about new products!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1 border-primary/30 focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, just sweet updates! Unsubscribe anytime.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h3>
            <p className="text-muted-foreground">
              Don't just take our word for it - hear from our happy customers!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="card-medical text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Main Footer Content */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary rounded-lg">
                  <Cake className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Eclat Bakes</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Crafting sweet memories with handmade baked goods since 2019. 
                Every creation is made with love, passion, and the finest ingredients.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm">Award-winning bakery</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">1000+ happy customers</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-sm">Made with love daily</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">hello@eclatbakes.com</p>
                    <p className="text-sm text-muted-foreground">24-hour response</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Downtown Area</p>
                    <p className="text-sm text-muted-foreground">Delivery available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-foreground font-medium">Mon-Sat: 8AM-6PM</p>
                    <p className="text-sm text-muted-foreground">Sun: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies & Social */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Policies</h4>
              <ul className="space-y-3">
                {policies.map((policy, index) => (
                  <li key={index}>
                    <a 
                      href={policy.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {policy.name}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <h5 className="text-lg font-semibold text-foreground mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-muted rounded-full text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color} hover:bg-primary/10`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Bottom Bar */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="py-8 border-t border-border bg-muted/20"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 Eclat Bakes. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Handcrafted with <Heart className="w-4 h-4 inline text-red-500" /> in your neighborhood
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Made fresh daily</span>
              <span>•</span>
              <span>Local ingredients</span>
              <span>•</span>
              <span>Custom orders welcome</span>
            </div>
          </div>
        </div>
      </motion.section>
    </footer>
  );
};