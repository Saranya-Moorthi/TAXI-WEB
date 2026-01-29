import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  const services = [
    "Melbourne Airport Transfers",
    "Corporate Transfers",
    "Group Transfers",
    "Cruise Transfers",
    "Baby Seat Taxi",
    "Wedding Transfers",
    "Wheelchair Taxi",
    "Mini Bus Hire",
  ];

  const areas = [
    "Melbourne CBD",
    "Port Phillip",
    "Eastern Suburbs",
    "South Eastern",
    "Mornington Peninsula",
    "Frankston",
  ];

  return (
    <footer id="contact" className="bg-navy text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img src={logoLight} alt="Easy Maxi Cabs" className="h-18 w-auto mb-6" />
            <p className="text-secondary-foreground/80 mb-6 text-2xl">
              Book Maxi Cab in Melbourne online for best, Affordability, Reliable, Ontime and 
              Guaranteed To Melbourne Airport and all other transfers
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/easymaxicabs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/easymaxicabs/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@easymaxicabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
              <a href="https://x.com/easymaxicabs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-4xl font-bold mb-6">OUR SERVICES</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className=" text-xl text-secondary-foreground/80 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-heading text-4xl font-bold mb-6">AREAS WE SERVE</h4>
            <ul className="space-y-3">
              {areas.map((area, index) => (
                <li key={index}>
                  <a href="#areas" className="text-xl text-secondary-foreground/80 hover:text-primary transition-colors">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-4xl font-bold mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-xl text-secondary-foreground/80">Deanside Victoria 3336</span>
              </li>
              <li>
                <a href="tel:+61390754956" className="text-xl flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone size={20} className="text-primary" />
                  <span>(03) 9075 4956</span>
                </a>
              </li>
              <li>
                <a href="mailto:book@easymaxicabs.com.au" className="text-xl flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail size={20} className="text-primary" />
                  <span>book@easymaxicabs.com.au</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-secondary-foreground/60 text-sm">
            © 2026. <strong>EASY MAXI CABS</strong>, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
