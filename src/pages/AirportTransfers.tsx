import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Plane, Clock, Shield, MapPin, Phone, CheckCircle } from "lucide-react";
import heroImg from "@/assets/hero-airport.jpg";

const AirportTransfers = () => {
  const features = [
    "Meet & Greet service at arrivals",
    "Flight tracking - we monitor delays",
    "Fixed prices - no hidden fees",
    "24/7 availability",
    "Spacious vehicles for luggage",
    "Professional, experienced drivers",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      <main>
        {/* Hero Section */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Plane size={18} />
                <span className="font-semibold">Airport Transfer Service</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                MELBOURNE AIRPORT <span className="text-primary">MAXI CAB</span> TRANSFERS
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Reliable and affordable maxi cab Melbourne airport transfers. Enjoy spacious, comfortable rides with professional drivers to and from Melbourne, Avalon, and all regional airports.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+61390754956" className="btn-gold text-lg py-4 px-8 flex items-center justify-center gap-2">
                  <Phone size={20} />
                  (03) 9075 4956
                </a>
                <a href="/#quote" className="btn-outline-gold text-lg py-4 px-8 text-center">
                  Get Instant Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  WHY CHOOSE OUR AIRPORT TRANSFERS?
                </h2>
                <p className="text-muted-foreground mb-8">
                  We understand the stress of airport travel. That's why we offer reliable, comfortable, and affordable maxi cab services to ensure you reach your destination on time, every time.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={24} />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="card-white text-center">
                  <Clock className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">24/7 Service</h3>
                  <p className="text-sm text-muted-foreground">Available round the clock for early or late flights</p>
                </div>
                <div className="card-white text-center">
                  <Shield className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Fixed Pricing</h3>
                  <p className="text-sm text-muted-foreground">No surge pricing or hidden fees</p>
                </div>
                <div className="card-white text-center">
                  <Plane className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Flight Tracking</h3>
                  <p className="text-sm text-muted-foreground">We monitor your flight for delays</p>
                </div>
                <div className="card-white text-center">
                  <MapPin className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">All Airports</h3>
                  <p className="text-sm text-muted-foreground">Melbourne, Avalon & regional airports</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              BOOK YOUR AIRPORT TRANSFER NOW
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free quote or call us directly for immediate booking. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+61390754956" className="bg-navy text-white font-heading font-bold py-4 px-8 rounded-lg hover:bg-navy-light transition-colors">
                Call Now: (03) 9075 4956
              </a>
              <a href="/#quote" className="bg-white text-navy font-heading font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors">
                Get Free Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AirportTransfers;
