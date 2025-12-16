import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl font-bold text-white mb-6">About OBBS</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Online Banquet Booking System (OBBS) is the internet's largest and most trusted platform for finding and booking luxury event venues.
                            Since our inception, we have successfully orchestrated thousands of events, ranging from intimate family gatherings to grand corporate galas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative h-96 rounded-2xl overflow-hidden">
                            {/* Placeholder for an about image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20" />
                            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
                                <span className="text-muted-foreground">About Image Placeholder</span>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                            <p className="text-muted-foreground">
                                To simplify the event planning process by providing a seamless, transparent, and premium booking experience. We believe every celebration deserves a perfect setting.
                            </p>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                            <p className="text-muted-foreground">
                                To be the global leader in venue management and event services, setting the standard for quality, reliability, and innovation in the hospitality industry.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
