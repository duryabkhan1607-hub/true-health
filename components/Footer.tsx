import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { COMPANY_NAME, ADDRESS, EMAIL, PHONE_NUMBER, NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed mb-4 text-stone-400">
              Compassionate, evidence-based addiction treatment and behavioral health services in Murfreesboro and Nashville, TN. Reclaiming lives, one day at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-teal-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li><Link to="/contact" className="text-sm hover:text-teal-400 transition-colors">Verify Insurance</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-sm hover:text-teal-400 transition-colors">Intensive Outpatient (IOP)</Link></li>
              <li><Link to="/services" className="text-sm hover:text-teal-400 transition-colors">Dual Diagnosis</Link></li>
              <li><Link to="/services" className="text-sm hover:text-teal-400 transition-colors">Medical Detox Support</Link></li>
              <li><Link to="/services" className="text-sm hover:text-teal-400 transition-colors">Family Therapy</Link></li>
              <li><Link to="/services" className="text-sm hover:text-teal-400 transition-colors">Sober Living</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <span className="text-sm">{ADDRESS}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="text-sm hover:text-white">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-teal-500 flex-shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-sm hover:text-white">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <p className="mt-2">
            In case of a medical emergency, please dial 911. 
            <br />
            Our facility adheres to HIPAA regulations and client confidentiality.
          </p>
        </div>
      </div>
    </footer>
  );
};