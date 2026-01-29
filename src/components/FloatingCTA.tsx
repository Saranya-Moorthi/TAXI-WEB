import { Phone, MessageCircle, Mail, Calendar } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col gap-2">
      <a
        href="mailto:book@easymaxicabs.com.au"
        className="w-12 h-12 bg-navy hover:bg-navy-light text-secondary-foreground flex items-center justify-center rounded-r-lg transition-all hover:w-14 shadow-lg group"
        title="Email Us"
      >
        <Mail size={20} />
      </a>
      <a
        href="https://wa.me/61485976610"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center rounded-r-lg transition-all hover:w-14 shadow-lg"
        title="WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="tel:+61390754956"
        className="w-12 h-12 bg-primary hover:bg-gold-dark text-primary-foreground flex items-center justify-center rounded-r-lg transition-all hover:w-14 shadow-lg"
        title="Call Now"
      >
        <Phone size={20} />
      </a>
      <a
        href="#quote"
        className="w-12 h-12 bg-teal hover:bg-teal-dark text-secondary-foreground flex items-center justify-center rounded-r-lg transition-all hover:w-14 shadow-lg"
        title="Book Now"
      >
        <Calendar size={20} />
      </a>
    </div>
  );
};

export default FloatingCTA;
