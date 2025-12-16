"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Music, Utensils, Wifi, Camera } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Gradient/Image Placeholder */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background" />
          <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop')] bg-cover bg-center" />

          <div className="container relative z-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
                Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Unforgettable</span> Moments
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                The premier online banquet booking system. From intimate gatherings to grand celebrations, find the perfect venue and services for your special day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/signup">
                  <Button size="lg" variant="premium" className="w-full sm:w-auto text-lg px-8 py-6 h-auto">
                    Book Your Event
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 h-auto">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose OBBS?</h2>
              <p className="text-muted-foreground">Everything you need to make your event a success.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Seamless Booking", desc: "Real-time availability checking and instant reservation confirmation." },
                { icon: CheckCircle, title: "Verified Venues", desc: "All our banquets are physically verified for quality and amenities." },
                { icon: Music, title: "Premium Services", desc: "Add-on services like DJ, Catering, and Decor from trusted partners." }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-muted-foreground">More than just a venue. We provide a complete experience.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Utensils, title: "Catering", desc: "Exquisite culinary delights." },
                { icon: Camera, title: "Photography", desc: "Capture every moment." },
                { icon: Music, title: "Entertainment", desc: "DJs and Live Music." },
                { icon: Wifi, title: "Smart Venues", desc: "High-speed amenities." },
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 z-0" />
          <div className="container relative z-10 px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to create memories?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Join thousands of happy customers who found their perfect venue with OBBS.</p>
            <Link href="/signup">
              <Button size="lg" variant="premium" className="text-lg px-10 py-8 h-auto">
                Get Started Now
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
