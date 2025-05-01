
import { Database, Code, Server, Network } from "lucide-react";

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
      title: "Software Development",
      description: "Custom software development and our IntelliTrack suite of products for corporate intelligence data management.",
      icon: Code
    },
    {
      title: "IT & Security Consultancy",
      description: "Expert IT and security consultancy services for organizations that handle sensitive intelligence data.",
      icon: Database
    },
    {
      title: "System Administration",
      description: "Database administration, server administration, and comprehensive system support services.",
      icon: Server
    },
    {
      title: "Network Infrastructure",
      description: "Network & technology infrastructure management, systems integration, and conversion management.",
      icon: Network
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive IT solutions focused on intelligence data management and loss prevention systems for retail and financial sector businesses.
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
