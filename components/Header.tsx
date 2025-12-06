import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS, PHONE_NUMBER } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-teal-700 rounded-lg flex items-center justify-center mr-3 shadow-sm">
               <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-stone-800 leading-tight">TRUE</h1>
              <p className="text-xs text-stone-500 uppercase tracking-wider">Addiction & Behavioral Health</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-teal-700' : 'text-stone-600 hover:text-teal-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="flex items-center text-teal-700 font-semibold text-sm hover:underline">
                <Phone className="w-4 h-4 mr-2" />
                {PHONE_NUMBER}
              </a>
              <Button onClick={() => navigate('/contact')} size="sm">Get Help Now</Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-teal-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-teal-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 border-t border-stone-100 mt-4">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} 
                className="flex items-center justify-center w-full px-4 py-3 border border-teal-700 text-teal-700 rounded-lg font-bold mb-3"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {PHONE_NUMBER}
              </a>
              <Button onClick={() => { navigate('/contact'); handleNavClick(); }} fullWidth>
                Get Help Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};