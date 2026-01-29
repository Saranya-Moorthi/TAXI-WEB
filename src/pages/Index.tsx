import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Fleet from "@/components/Fleet";
import ServiceAreas from "@/components/ServiceAreas";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Fleet />
        <ServiceAreas />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
