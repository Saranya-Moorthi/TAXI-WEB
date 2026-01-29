import {
  MapPin,
  Clock,
  Users,
  Camera,
  Wine,
  Landmark,
  Mountain,
  Compass,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import leftright from "@/assets/leftright.png";

const tourPackages = [
  {
    icon: Wine,
    title: "Winery Tours",
    description:
      "Discover world-class wineries in the Yarra Valley and Mornington Peninsula with guided tastings.",
    duration: "6-8 hours",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
  },
  {
    icon: Landmark,
    title: "City Highlights",
    description:
      "Explore Melbourne's iconic landmarks, hidden laneways, and vibrant cultural districts.",
    duration: "4-5 hours",
    image:
      "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800",
  },
  {
    icon: Mountain,
    title: "Coastal Adventures",
    description:
      "Experience the breathtaking Great Ocean Road and its stunning coastal scenery.",
    duration: "10-12 hours",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description:
      "Capture Melbourne's most photogenic locations with stops at prime viewing points.",
    duration: "5-6 hours",
    image:
      "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800",
  },
];

const features = [
  {
    icon: Users,
    title: "Private Experience",
    description:
      "Exclusive tours tailored to your group's preferences and interests.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Choose your departure time and customize the duration to fit your plans.",
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description:
      "Professional chauffeurs with extensive local knowledge and insider tips.",
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description:
      "Design your perfect tour with stops at locations that matter to you.",
  },
];

const Tours = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />

      <main>
        {/* HERO */}
        <section className="pt-40 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
                        <img
                            src={leftright}
                            alt="Maxi Cab Melbourne"
                            className="w-full h-full object-cover"
                        />
                    </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="font-heading text-4xl md:text-7xl font-bold text-navy text-white">
              Discover <span className="text-primary">Melbourne</span>
            </h1>

          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 bg-navy">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center text-white">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOUR PACKAGES */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Packages
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                Curated <span className="text-primary">Experiences</span>
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
                Each tour is carefully crafted to showcase the best of
                Melbourne and its surroundings.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {tourPackages.map((tour) => (
                <div
                  key={tour.title}
                  className="bg-white rounded-3xl overflow-hidden border shadow-lg"
                >
                  <div className="relative h-64">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      {tour.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                      <tour.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-navy mb-3">
                      {tour.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {tour.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOKING INFO */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Book Your Tour
            </span>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
              Start Your <span className="text-primary">Journey</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Easy Maxi Cabs offers private tour services to help you
                explore Melbourne’s best attractions.
              </p>
              <p>
                Our professional chauffeurs act as local guides, ensuring
                comfort, safety, and memorable experiences.
              </p>
              <p>
                Complimentary water, flexible photo stops, and premium
                vehicles included.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tours;
