import { motion } from 'framer-motion';
import { Cake, Cookie, Bread, Cherry, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Products = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const products = [
    {
      category: "Custom Cakes",
      icon: Cake,
      items: [
        {
          name: "Wedding Cakes",
          description: "Elegant multi-tier cakes designed for your special day",
          price: "Starting at $150",
          features: ["Custom Design", "Multiple Flavors", "Delivery Included"],
          popular: true
        },
        {
          name: "Birthday Cakes",
          description: "Personalized cakes that make birthdays unforgettable",
          price: "Starting at $45",
          features: ["Custom Message", "Theme Options", "Fresh Ingredients"],
          popular: false
        },
        {
          name: "Corporate Cakes",
          description: "Professional cakes for business events and celebrations",
          price: "Starting at $80",
          features: ["Logo Design", "Professional Finish", "Bulk Orders"],
          popular: false
        }
      ]
    },
    {
      category: "Pastries & Treats",
      icon: Cookie,
      items: [
        {
          name: "Artisan Cupcakes",
          description: "Gourmet cupcakes with premium frosting and toppings",
          price: "$4.50 each",
          features: ["12 Flavors", "Custom Frosting", "Edible Decorations"],
          popular: true
        },
        {
          name: "French Macarons",
          description: "Delicate almond cookies with silky ganache filling",
          price: "$2.25 each",
          features: ["15 Colors", "Premium Ingredients", "Gift Boxes"],
          popular: false
        },
        {
          name: "Chocolate Brownies",
          description: "Rich, fudgy brownies made with Belgian chocolate",
          price: "$3.75 each",
          features: ["Gluten-Free Option", "Nuts Available", "Caramel Drizzle"],
          popular: true
        }
      ]
    },
    {
      category: "Artisan Breads",
      icon: Bread,
      items: [
        {
          name: "Sourdough Loaves",
          description: "Traditional sourdough with a perfect crust and tang",
          price: "$8.50 per loaf",
          features: ["24hr Fermentation", "Organic Flour", "Daily Fresh"],
          popular: false
        },
        {
          name: "Dinner Rolls",
          description: "Soft, buttery rolls perfect for any meal",
          price: "$12 per dozen",
          features: ["Same Day Baking", "Herb Options", "Bulk Orders"],
          popular: true
        },
        {
          name: "Specialty Breads",
          description: "Unique breads with seeds, nuts, and dried fruits",
          price: "$10.50 per loaf",
          features: ["Multigrain", "Walnut Cranberry", "Rosemary Olive"],
          popular: false
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="medical-text-gradient">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of handcrafted baked goods, each made with 
            premium ingredients and attention to detail.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* Category header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4 bg-primary/10 rounded-full px-8 py-4">
                  <category.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
              </div>

              {/* Products grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + productIndex * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="relative"
                  >
                    <Card className="card-medical h-full group hover:shadow-medical-float">
                      <CardHeader className="relative">
                        {product.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-xl font-bold text-foreground mb-2">
                              {product.name}
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {product.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6">
                        <div className="text-2xl font-bold text-primary">
                          {product.price}
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="font-semibold text-foreground flex items-center">
                            <Heart className="w-4 h-4 mr-2 text-primary" />
                            Features
                          </h5>
                          <ul className="space-y-2">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                                <Cherry className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group-hover:scale-105 transition-all duration-300"
                        >
                          Order Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 p-8 card-medical"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See What You're Looking For?
          </h3>
          <p className="text-muted-foreground mb-6">
            We love creating custom orders! Contact us to discuss your special requirements.
          </p>
          <Button 
            size="lg"
            className="bg-secondary hover:bg-secondary-dark text-secondary-foreground px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300"
          >
            Contact Us for Custom Orders
          </Button>
        </motion.div>
      </div>
    </section>
  );
};