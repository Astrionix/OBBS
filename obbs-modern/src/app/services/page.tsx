import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Music, Utensils, Camera, Wifi, Flower, Car } from "lucide-react";

export default function ServicesPage() {
    const services = [
        { icon: Music, title: "DJ & Sound", description: "Professional DJs and state-of-the-art sound systems to keep the party going.", price: "Starts at $500" },
        { icon: Utensils, title: "Premium Catering", description: "A wide range of culinary delights from 5-star chefs.", price: "Custom Quote" },
        { icon: Camera, title: "Photography", description: "Capture every moment with our expert photographers and videographers.", price: "Starts at $800" },
        { icon: Flower, title: "Floral & Decor", description: "Breathtaking floral arrangements and theme-based decorations.", price: "Starts at $300" },
        { icon: Wifi, title: "Connectivity", description: "High-speed Wi-Fi and live streaming capabilities for hybrid events.", price: "Included" },
        { icon: Car, title: "Valet Parking", description: "Hassle-free parking services for your guests.", price: "Starts at $200" },
    ];

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-white mb-4">Our Premium Services</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Elevate your event with our curated list of exclusive services. We handle the details so you can enjoy the moment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="bg-secondary/20 border border-white/5 rounded-2xl p-8 hover:bg-secondary/30 transition-colors">
                                <service.icon className="h-10 w-10 text-primary mb-6" />
                                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-4">{service.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm font-medium text-accent">{service.price}</span>
                                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">Inquire</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
