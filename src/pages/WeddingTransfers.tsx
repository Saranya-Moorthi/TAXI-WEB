import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Heart, Clock, Users, Phone, CheckCircle, Camera } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";

const WeddingTransfers = () => {
  const features = [
    "Decorated vehicle options",
    "Punctual, reliable service",
    "Transport for bridal party",
    "Guest shuttle services",
    "Flexible scheduling",
    "Professional, courteous drivers",
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
                <Heart size={18} />
                <span className="font-semibold">Wedding Transfer Service</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                MELBOURNE <span className="text-primary">WEDDING</span> TRANSFERS
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Elegant and reliable wedding transfers in Melbourne for your special day. From bridal party transport to guest shuttles, we ensure everyone arrives in style and on time.
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
                  MAKE YOUR DAY PERFECT
                </h2>
                <p className="text-muted-foreground mb-8">
                  Your wedding day should be stress-free. Our wedding transfer service takes care of all your transportation needs, so you can focus on celebrating with your loved ones.
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
                  <Heart className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Special Touch</h3>
                  <p className="text-sm text-muted-foreground">Decorated vehicles available</p>
                </div>
                <div className="card-white text-center">
                  <Users className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Guest Shuttles</h3>
                  <p className="text-sm text-muted-foreground">Transport all your guests</p>
                </div>
                <div className="card-white text-center">
                  <Clock className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Always On Time</h3>
                  <p className="text-sm text-muted-foreground">Punctuality guaranteed</p>
                </div>
                <div className="card-white text-center">
                  <Camera className="text-primary mx-auto mb-4" size={40} />
                  <h3 className="font-heading font-bold text-navy mb-2">Photo Ready</h3>
                  <p className="text-sm text-muted-foreground">Clean, presentable vehicles</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              BOOK YOUR WEDDING TRANSPORT
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us early to secure your wedding date. We'll work with you to plan the perfect transport schedule.
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

export default WeddingTransfers;
