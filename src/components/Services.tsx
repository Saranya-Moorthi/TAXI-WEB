import { Plane, Users, Baby, Briefcase, Heart, Ship, ArrowRight } from "lucide-react";
import bgImage from "../assets/road.png";
import Airport from "@/assets/Airport.png";
import Group from "@/assets/group.png";
import Babys from "@/assets/mother.png";
import Corporate from "@/assets/corporate.png";
import Wedding from "@/assets/wedding.png";
import Cruise from "@/assets/cruise.png";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Reliable and affordable maxi cab Melbourne airport. Enjoy spacious, comfortable rides with professional drivers.",
      link: "#quote",
      image: Airport,
    },
    {
      icon: Users,
      title: "Group Transfers",
      description:
        "Spacious and affordable group transfers in Melbourne. Ideal for families or corporate teams.",
      link: "#quote",
      image: Group,
    },
    {
      icon: Baby,
      title: "Baby Seat Taxi",
      description:
        "Taxis with car seats for safe and comfortable travel with children in Melbourne.",
      link: "#quote",
      image: Babys,
    },
    {
      icon: Briefcase,
      title: "Corporate Transfers",
      description:
        "Reliable and spacious corporate transfers. Ideal for business teams and corporate events.",
      link: "#quote",
      image: Corporate,
    },
    {
      icon: Heart,
      title: "Wedding Transfers",
      description:
        "Elegant and reliable wedding transfers in Melbourne for your special day.",
      link: "#quote",
      image: Wedding,
    },
    {
      icon: Ship,
      title: "Cruise Transfers",
      description:
        "Comfortable cruise transfers to and from Melbourne seaports with professional drivers.",
      link: "#quote",
      image: Cruise,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-muted relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Maxi Cab Melbourne"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy mb-4">
            OUR MAXI CAB SERVICES
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Comprehensive transportation solutions for every need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden
              h-[260px] sm:h-[300px] lg:h-[320px]
              hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover
                group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors" />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end text-white">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary
                  flex items-center justify-center mb-3 sm:mb-4"
                >
                  <service.icon
                    className="text-primary-foreground"
                    size={22}
                  />
                </div>

                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl mb-2">
                  {service.title}
                </h3>

                <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-2
                  text-lg sm:text-xl md:text-2xl
                  text-primary font-semibold
                  group-hover:gap-3 transition-all"
                >
                  Book Now <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
