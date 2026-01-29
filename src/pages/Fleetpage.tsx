import { Users, Briefcase } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import fleet7Seater from "@/assets/fleet-7-seater.png";
import fleet11Seater from "@/assets/fleet-11-seater.png";
import fleetSuv from "@/assets/fleet-suv.png";
import leftright from "@/assets/leftright.png";
import wave from "@/assets/wave.png";

const Fleet = () => {
    const vehicles = [
        {
            name: "Maxi 7 Seater",
            models: "Toyota Kluger, KIA Carnival, Lexus",
            passengers: "1-7",
            luggage: "4-8",
            image: fleet7Seater,
        },
        {
            name: "Maxi Bus 11 Seater",
            models: "Toyota Hiace, Mercedes Sprinter",
            passengers: "1-11",
            luggage: "12-18",
            image: fleet11Seater,
        },
        {
            name: "SUV",
            models: "Toyota RAV4, Lexus, Outlander",
            passengers: "1-5",
            luggage: "3-7",
            image: fleetSuv,
        },
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <FloatingCTA />
            <main>
                <section id="fleet" className="pt-40 pb-20 relative overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={leftright}
                            alt="Maxi Cab Melbourne"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-7xl font-bold text-white mb-4">
                                OUR FLEET
                            </h2>

                            <div className="flex justify-center">
                                <div
                                    className="border border-primary/60 rounded-full 
              bg-white/10 backdrop-blur-md 
              px-8 py-2 shadow-lg"
                                >
                                    <p className="text-primary text-center max-w-4xl md:text-3xl">
                                        Modern, well maintained vehicles for your comfort
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Fleet Cards */}
                        <div className="grid md:grid-cols-3 gap-8">
                            {vehicles.map((vehicle, index) => (
                                <div
                                    key={index}
                                    className="card-white group hover:-translate-y-2 transition-all duration-300 overflow-hidden border-2 border-primary"
                                >
                                    {/* Vehicle Image */}
                                    <div className="bg-gradient-to-br from-muted to-background rounded-xl p-6 mb-6 flex items-center justify-center h-48">
                                        <img
                                            src={vehicle.image}
                                            alt={vehicle.name}
                                            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <h3 className="font-heading text-3xl text-navy mb-2">
                                        {vehicle.name}
                                    </h3>

                                    <p className="text-muted-foreground text-sm mb-4">
                                        {vehicle.models}
                                    </p>

                                    <div className="flex justify-between border-t border-border pt-4">
                                        <div className="flex items-center gap-2">
                                            <Users size={18} className="text-primary" />
                                            <span className="text-xl">
                                                <strong>{vehicle.passengers}</strong> Passengers
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Briefcase size={18} className="text-primary" />
                                            <span className="text-xl">
                                                <strong>{vehicle.luggage}</strong> Luggage
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Wave */}
                    <img
                        src={wave}
                        alt="wave decoration"
                        className="absolute bottom-0 left-0 w-full h-auto pointer-events-none select-none"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Fleet;
