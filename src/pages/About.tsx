import { Clock, Shield, CreditCard, Car, UserCheck, Sparkles, Phone, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Aboutbg from "@/assets/Aboutbg2.png";

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Clock,
            title: "On Time Pick & Drop",
            description: "We value your time. Our drivers arrive promptly for every booking.",
        },
        {
            icon: Shield,
            title: "Safe & Secure Rides",
            description: "Your safety is our priority. All vehicles are regularly inspected and maintained.",
        },
        {
            icon: CreditCard,
            title: "Advance Payments Accepted",
            description: "Pay online in advance for a hassle-free experience.",
        },
        {
            icon: Car,
            title: "Luxury Fleet",
            description: "Travel in style with our modern, well-maintained vehicles.",
        },
        {
            icon: UserCheck,
            title: "Professional Drivers",
            description: "Our drivers are trained, accredited, and friendly.",
        },
        {
            icon: Sparkles,
            title: "Spacious & Clean Maxis",
            description: "Enjoy roomy, spotless vehicles for maximum comfort.",
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <FloatingCTA />
            <main>
                <section id="about" className="pt-40 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={Aboutbg}
                            alt="Maxi Cab Melbourne"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center">
                            <h2 className="font-heading text-3xl md:text-7xl font-bold text-secondary mb-4">
                                ABOUT EASY MAXI CABS
                            </h2>


                        </div>
                        {/* Background decorative */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl" />
                        </div>

                        <div className="container mx-auto px-4 relative z-10 drop-blur-sm bg-black/30 p-8 rounded-lg mt-12">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Content */}
                                <div>
                                    <h2 className="font-heading text-6xl font-bold mb-6">
                                        WHY CHOOSE <span className="text-primary">EASY MAXI CABS?</span>
                                    </h2>
                                    <p className="text-primary mb-8 text-xl">
                                        Easy Maxi Cabs serves all neighborhoods in Melbourne, including the airport, hotels, and ports.
                                        We offer a variety of vehicle options and prioritize security and passenger safety.
                                    </p>
                                    <p className="text-primary mb-8 text-xl">
                                        Our drivers patiently wait up to an hour for international travelers to clear customs.
                                        We offer lower rates than other taxi services, with no extra call-out fees.
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {reasons.map((reason, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <reason.icon className="text-primary" size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-heading text-black text-3xl mb-1">{reason.title}</h4>
                                                    <p className="text-primary text-xl">{reason.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-8">
                                        <a href="#quote" className="btn-gold text-xl">
                                            Send Quote To My Email
                                        </a>
                                        <a href="tel:+61390754956" className="btn-outline-gold text-xl flex items-center gap-2">
                                            <Phone size={18} />
                                            Call Now
                                        </a>
                                    </div>
                                </div>

                                {/* Image/Visual Side */}
                                <div className="relative">
                                    <div className="bg-gradient-to-br from-teal-dark to-navy-light rounded-3xl p-8">
                                        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                            <p className="text-primary font-heading text-2xl mb-2">480+ FIVE-STAR</p>
                                            <p className="text-xl">Google Reviews</p>
                                        </div>
                                        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                            <p className="text-primary font-heading text-2xl mb-2">7+ YEARS SERVING</p>
                                            <p className="text-xl">Melbourne Families</p>
                                        </div>
                                        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 mb-4">
                                            <p className="text-primary font-heading text-2xl mb-2">ALL SUBURBS</p>
                                            <p className="text-xl">Melbourne Wide Coverage</p>
                                        </div>
                                        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6">
                                            <p className="text-primary font-heading text-2xl mb-2">LICENSED</p>
                                            <p className="text-xl">Professional Operators</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default WhyChooseUs;
