import { Phone, Mail, Send, Star } from "lucide-react";
import { useState } from "react";

const CTA = () => {
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
    <section className="py-20 bg-navy text-secondary-foreground relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-heading text-3xl md:text-6xl  mb-6">
              LOOKING FOR MAXI CAB FOR AIRPORT, EVENTS & SUBURBS?
            </h2>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Book your ride today and enjoy the comfort, reliability, and professionalism you deserve.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-bold">480+ Reviews</p>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-primary font-heading text-2xl font-bold">24/7</p>
                <p className="font-medium">Available</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+61390754956"
                className="btn-gold flex items-center gap-2 text-2xl"
              >
                <Phone size={20} />
                (03) 9075 4956
              </a>
              <a
                href="mailto:book@easymaxicabs.com.au"
                className="btn-outline-gold flex items-center gap-2 text-2xl"
              >
                <Mail size={20} />
                Email Quote Request
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="card-white text-foreground">
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
        </div>
      </div>
    </section>
  );
};

export default CTA;
