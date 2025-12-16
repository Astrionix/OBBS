import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <main className="flex-grow py-24 px-4 sm:px-6 lg:px-8">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
                        <p className="text-muted-foreground">
                            Have questions or ready to book? Reach out to our team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Our Location</h3>
                                    <p className="text-muted-foreground">D-204, Hole Town South West,<br />Delhi-110096, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                                    <p className="text-muted-foreground">info@obbs.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 1234567890</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-secondary/20 border border-white/5 rounded-2xl p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium text-white">First name</label>
                                        <Input id="first-name" placeholder="John" className="bg-background/50 border-white/10" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium text-white">Last name</label>
                                        <Input id="last-name" placeholder="Doe" className="bg-background/50 border-white/10" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                                        placeholder="Tell us about your event..."
                                    />
                                </div>
                                <Button variant="premium" className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
