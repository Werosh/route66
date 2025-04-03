import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import LogoImg from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={LogoImg} alt="Route 66 Car Wash Logo" className="h-20 mb-4" />
            <p className="text-gray-300 mb-4">
              The premium hand car wash and detailing service that keeps your vehicle looking its best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Pricing', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Exterior Hand Wash', 
                'Premium Wax', 
                'Interior Detailing', 
                'Express Wash',
                'Full Detail Service',
                'Paint Protection'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-gray-300">1 McFarlane St, Merrylands NSW 2160, Australia</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-gray-300">+61 433 187 980</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-gray-300">info@route66carwash.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-gray-300">Thu: 8AM - 7PM<br />Fri-Wed: 8AM - 5:30PM</span>
              </li>
            </ul>
          </div>
        </div>

        

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-6 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Route 66 Car Wash. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;