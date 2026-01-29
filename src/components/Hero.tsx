import { Phone, Star, Check } from "lucide-react";
import hero from "../assets/hero.png";
import heroMobile from "../assets/hero-mobile.png";
import heroCab from "../assets/hero-cab.png";
import wave from "../assets/wave.png";

const Hero = () => {
  const features = [
    "7+ Years of Service",
    "24/7 Availability",
    "480+ Five-Star Reviews",
    "Fixed Prices, No Surprises",
  ];

  return (
    <section className="pt-40 hero-section relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroMobile}
          alt="Maxi Cab Melbourne"
          className="w-full h-full object-cover md:hidden"
        />
        <img
          src={hero}
          alt="Maxi Cab Melbourne"
          className="w-full h-full object-cover hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 md:bg-gradient-to-r md:from-black/50 md:via-transparent md:to-black/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-white">
            {/* Rating */}
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-6 shadow-lg">
              <span className="font-bold text-black">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-600 text-sm">(480 reviews)</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6">
              BOOK MAXI CAB{" "}
              <span className="text-primary">MELBOURNE</span>{" "}
              ONLINE – THAT’S OUR PROMISE
            </h1>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check size={14} className="text-black" />
                  </div>
                  <span className="text-xl sm:text-lg font-heading uppercase">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="tel:+61390754956"
              className="inline-flex items-center gap-3 bg-primary text-black font-bold px-6 py-3 rounded-lg text-lg"
            >
              <Phone size={20} />
              CALL 24/7 — (03) 9075 4956
            </a>

            {/* Testimonial */}
            <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6 max-w-xl">
              <p className="text-primary font-heading mb-2">
                WE ❤️ SERVING MELBOURNE FAMILIES
              </p>
              <p className="italic text-black/90">
                “Excellent service! Punctual, professional and spotless
                vehicle. Highly recommend!” – <strong>Sarah M</strong>
              </p>
            </div>
          </div>

          {/* CAB IMAGE – DESKTOP */}
          <div className="relative hidden lg:flex justify-center">
            <img
              src={heroCab}
              alt="Maxi Cab Melbourne"
              className="w-full max-w-2xl drop-shadow-2xl"
            />
          </div>
        </div>

        {/* CAB IMAGE – MOBILE */}
        <div className="mt-12 lg:hidden flex justify-center">
          <img
            src={heroCab}
            alt="Maxi Cab Melbourne"
            className="w-full max-w-sm drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Wave */}
      <img
        src={wave}
        alt="wave decoration"
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      />
    </section>
  );
};

export default Hero;
