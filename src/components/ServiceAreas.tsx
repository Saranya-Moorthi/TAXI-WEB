import { MapPin, ArrowRight } from "lucide-react";
import map from "../assets/map.png";
import Mapbg from "@/assets/Mapbg.png"

const ServiceAreas = () => {
  const areas = [
    "Fraser Rise", "Rockbank", "Burnside", "Ravenhall",
    "Truganina", "St Albans", "Sydenham", "Cairnlea",
    "Point Cook", "Delahey", "Derrimut", "Tarneit",
    "Keilor", "Seabrook", "Brookfield", "Greenvale",
  ];

  const mainAreas = [
    "Melbourne CBD",
    "Port Phillip",
    "Eastern Suburbs",
    "South Eastern",
    "Mornington Peninsula",
    "Frankston",
  ];

  return (
    <section id="areas" className="py-20 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 z-0">
              <img
                src={Mapbg}
                alt="Maxi Cab Melbourne"
                className="w-full h-full object-cover opacity-50 "
              />
            </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-6xl font-bold text-navy mb-4">
            OUR SERVICE AREAS IN MELBOURNE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto md:text-3xl">
            Covering all major suburbs and locations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Suburbs Grid */}
          <div className="card-white relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src={map}
                alt="Maxi Cab Melbourne"
                className="w-full h-full object-cover "
              />
            </div>
            {/* <h3 className="font-heading text-xl font-bold text-navy mb-6">
              Popular Suburbs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {areas.map((area, index) => (
                <a
                  key={index}
                  href="#quote"
                  className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <MapPin size={14} className="text-primary" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">
                    {area}
                  </span>
                </a>
              ))}
            </div> */}
          </div>

          {/* Main Areas */}
          <div className="card-white">
            <h3 className="font-heading text-3xl  text-navy mb-6">
              Major Service Regions
            </h3>
            <div className="space-y-3">
              {mainAreas.map((area, index) => (
                <a
                  key={index}
                  href="#quote"
                  className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <span className="font-medium text-2xl">{area}</span>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground mb-4 text-2xl">
            Don't see your area? We serve all Melbourne suburbs!
          </p>
          <a href="#quote" className="btn-gold text-2xl inline-flex items-center gap-2">
            Get a Quote for Your Area
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
