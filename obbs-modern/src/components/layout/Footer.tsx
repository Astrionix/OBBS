
import Link from "next/link";
import { GlassWater, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black/40 border-t border-white/10 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <GlassWater className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold tracking-tight text-white">OBBS</span>
                        </Link>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed">
                            Experience luxury and elegance with our premium banquet booking services.
                            Making your special moments unforgettable.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Services", href: "/services" },
                                { name: "About Us", href: "/about" },
                                { name: "Contact", href: "/contact" },
                                { name: "Admin Login", href: "/admin/login" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
                        <ul className="space-y-2">
                            {[
                                "Wedding Halls",
                                "Birthday Parties",
                                "Corporate Events",
                                "Engagements",
                                "Catering Services",
                            ].map((item) => (
                                <li key={item} className="text-sm text-muted-foreground">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span>123 Celebration Avenue,<br />Luxury District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>contact@obbs-premium.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground/60">
                    <p>&copy; {new Date().getFullYear()} Online Banquet Booking System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
