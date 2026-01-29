import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Accessibility, Clock, Shield, Phone, CheckCircle, Heart } from "lucide-react";
import heroImg from "@/assets/hero-wheelchair.jpg";

const WheelchairTaxi = () => {
  const features = [
    "Wheelchair accessible vehicles",
    "Hydraulic lift or ramp equipped",
    "Trained drivers for disability assistance",
    "Secure wheelchair restraints",
    "Door-to-door assistance",
    "NDIS registered provider",
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
                <Accessibility size={18} />
                <span className="font-semibold">Wheelchair Taxi Service</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                MELBOURNE <span className="text-primary">WHEELCHAIR</span> ACCESSIBLE TAXI
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Safe and comfortable wheelchair accessible taxi service in Melbourne. Our specially equipped vehicles and trained drivers ensure dignified, stress-free transportation for all mobility needs.
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
                  ACCESSIBLE TRANSPORT FOR ALL
                </h2>
                <p className="text-muted-foreground mb-8">
                  We believe everyone deserves reliable, comfortable transportation. Our wheelchair accessible taxis are designed to provide safe, dignified travel for passengers with mobility challenges.
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
                  <Accessibility className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Full Access</h3>
                  <p className="text-sm text-muted-foreground">Wheelchair friendly vehicles</p>
                </div>
                <div className="card-white text-center">
                  <Shield className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Safe & Secure</h3>
                  <p className="text-sm text-muted-foreground">Proper restraint systems</p>
                </div>
                <div className="card-white text-center">
                  <Heart className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Caring Drivers</h3>
                  <p className="text-sm text-muted-foreground">Trained assistance staff</p>
                </div>
                <div className="card-white text-center">
                  <Clock className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">24/7 Service</h3>
                  <p className="text-sm text-muted-foreground">Available round the clock</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              BOOK YOUR WHEELCHAIR TAXI NOW
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We're NDIS registered and happy to assist with all your accessible transport needs.
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

export default WheelchairTaxi;
