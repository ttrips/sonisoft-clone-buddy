
import { Cloud, Code, Smartphone, GitBranch } from "lucide-react";

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="inline-block p-3 bg-blue-50 rounded-lg text-primary mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions to enhance your business operations and reduce infrastructure costs.",
      icon: Cloud
    },
    {
      title: "API Integration",
      description: "Seamless API development and integration services to connect your systems and applications.",
      icon: Code
    },
    {
      title: "Mobile Development",
      description: "Custom mobile app development for iOS and Android platforms with modern technologies.",
      icon: Smartphone
    },
    {
      title: "DevOps Solutions",
      description: "Streamline your development and operation processes with our DevOps expertise.",
      icon: GitBranch
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
