import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import leftright from "@/assets/leftright.png";
import wave from "@/assets/wave.png";
import { useState } from "react";
const Contactpage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pickup: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("CTA Form submitted:", formData);
    };

    return (
        <div className="min-h-screen">
            <Header />
            <FloatingCTA />

            <main>
                <section className="pt-40 pb-32 relative overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={leftright}
                            alt="Contact background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 relative z-10">
                        {/* Heading */}
                        <h2 className="font-heading text-4xl md:text-7xl font-bold text-white mb-14">
                            CONTACT US
                        </h2>

                        <div className="grid lg:grid-cols-5 gap-12">
                            {/* LEFT – FORM */}
                            <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-2xl border border-primary">
                                <h3 className="font-heading text-4xl font-bold text-navy mb-2">
                                    GET A FREE QUOTE
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Fast Maxi Cab Service Across Melbourne - Same Day Booking
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4 text-2xl">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                            placeholder="Phone Number"
                                            required
                                        />
                                        <input
                                            type="text"
                                            value={formData.pickup}
                                            onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                                            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                            placeholder="Pickup Location"
                                            required
                                        />
                                    </div>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-none"
                                        placeholder="Message (optional)"
                                    />
                                    <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                                        <Send size={18} />
                                        GET A FREE QUOTE NOW
                                    </button>
                                </form>
                            </div>
                            <div></div>

                            {/* RIGHT – CONTACT INFO */}
                            <div className="lg:col-span-2 text-white">
                                <h3 className="font-heading text-4xl mb-8">
                                    Get In Touch
                                </h3>

                                <div className="space-y-6 text-lg">
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-primary" />
                                        <span>(03) 9075 4956</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="text-primary" />
                                        <span>book@easymaxicabs.com.au</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="text-primary" />
                                        <span>+61 485 976 610</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <MapPin className="text-primary" />
                                        <span>Deanside Victoria 3336</span>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="mt-10 mb-10">
                                    <h4 className="font-heading text-2xl mb-4">
                                        Follow Us On
                                    </h4>

                                    <div className="flex gap-4">
                                        <a href="#" className="social-icon">
                                            <Facebook />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <Instagram />
                                        </a>
                                        <a href="#" className="social-icon">
                                            <Twitter />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wave */}
                    <img
                        src={wave}
                        alt="wave decoration"
                        className="absolute -bottom-32 left-0 w-full pointer-events-none"
                    />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contactpage;
