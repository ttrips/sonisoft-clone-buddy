
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <section id="solutions" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Enterprise Solutions for Every Industry</h2>
            <p className="text-gray-600 mb-6">
              Our team of experts delivers tailored solutions for businesses of all sizes. We understand the unique challenges faced by different industries and provide customized technology solutions to address them.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you need cloud migration, API development, or mobile solutions, our experienced team will work closely with you to meet your specific requirements and drive your business forward.
            </p>
            <Button className="px-6">Learn More</Button>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="text-center mb-6">
              <h3 className="font-bold text-2xl text-primary mb-2">Why Choose Sonisoft?</h3>
              <p className="text-gray-600">What sets us apart from the competition</p>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Experienced development team with industry expertise</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Customized solutions tailored to your business needs</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Commitment to innovation and cutting-edge technologies</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Ongoing support and maintenance services</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">✓</span>
                <span className="text-gray-700">Transparent communication throughout the development process</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
