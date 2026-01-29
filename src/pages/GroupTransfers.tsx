import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Users, Clock, Shield, Phone, CheckCircle, Car } from "lucide-react";
import heroImg from "@/assets/hero-group.jpg";

const GroupTransfers = () => {
  const features = [
    "7-seater and 11-seater vehicles",
    "Comfortable seating for all passengers",
    "Ample luggage space",
    "Professional drivers",
    "Door-to-door service",
    "Competitive group rates",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      <main>
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
                <Users size={18} />
                <span className="font-semibold">Group Transfer Service</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                MELBOURNE <span className="text-primary">GROUP TRANSFERS</span>
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Spacious and affordable group transfers in Melbourne. Ideal for families, friends, or corporate teams traveling together. Our maxi cabs accommodate up to 11 passengers comfortably.
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

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                  TRAVEL TOGETHER, SAVE TOGETHER
                </h2>
                <p className="text-muted-foreground mb-8">
                  Why take multiple cars when you can travel together? Our maxi cabs offer the perfect solution for group travel in Melbourne, saving you money while keeping everyone together.
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
                  <Users className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Up to 11 Seats</h3>
                  <p className="text-sm text-muted-foreground">Spacious vehicles for large groups</p>
                </div>
                <div className="card-white text-center">
                  <Car className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Modern Fleet</h3>
                  <p className="text-sm text-muted-foreground">Well-maintained, comfortable vehicles</p>
                </div>
                <div className="card-white text-center">
                  <Shield className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Safe Travel</h3>
                  <p className="text-sm text-muted-foreground">Licensed, insured drivers</p>
                </div>
                <div className="card-white text-center">
                  <Clock className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">On-Time</h3>
                  <p className="text-sm text-muted-foreground">Punctual pickup guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              BOOK YOUR GROUP TRANSFER NOW
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free quote for your group travel needs. We offer competitive rates for all group sizes.
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

export default GroupTransfers;
