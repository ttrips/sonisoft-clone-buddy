
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Sonisoft</span>
        </a>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Services
          </a>
          <a href="#solutions" className="font-medium text-gray-700 hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#about-us" className="font-medium text-gray-700 hover:text-primary transition-colors">
            About Us
          </a>
          <Button variant="default" className="ml-4">
            Contact Us
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="font-medium text-gray-700 hover:text-primary transition-colors p-2">
              Home
            </a>
            <a href="#services" className="font-medium text-gray-700 hover:text-primary transition-colors p-2">
              Services
            </a>
            <a href="#solutions" className="font-medium text-gray-700 hover:text-primary transition-colors p-2">
              Solutions
            </a>
            <a href="#about-us" className="font-medium text-gray-700 hover:text-primary transition-colors p-2">
              About Us
            </a>
            <Button variant="default" className="mt-2">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
