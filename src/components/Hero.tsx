
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-24 hero-gradient text-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Cloud Integration & API Solutions for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            We specialize in API development, cloud services, and enterprise-grade solutions to drive your digital transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100 hover:text-primary font-medium px-6">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-6">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
