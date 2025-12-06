import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { ADDRESS, EMAIL, PHONE_NUMBER } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    insurance: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out. A member of our team will contact you confidentially within 1 hour.');
    setFormData({ name: '', phone: '', email: '', message: '', insurance: '' });
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-teal-900 py-16 text-white text-center">
        <h1 className="text-4xl font-bold font-serif mb-4">Contact Us</h1>
        <p className="text-teal-100 text-lg">We are here to help 24 hours a day, 7 days a week.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 font-serif mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4 border border-stone-100">
                  <Phone className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Phone (24/7 Helpline)</h3>
                  <p className="text-stone-600 text-sm mb-1">Immediate assistance for admissions.</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="text-teal-700 font-bold text-lg hover:underline">{PHONE_NUMBER}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4 border border-stone-100">
                  <Mail className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Email</h3>
                  <p className="text-stone-600 text-sm mb-1">General inquiries and verification.</p>
                  <a href={`mailto:${EMAIL}`} className="text-teal-700 font-medium hover:underline">{EMAIL}</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4 border border-stone-100">
                  <MapPin className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Location</h3>
                  <p className="text-stone-600">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4 border border-stone-100">
                   <Clock className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900">Hours</h3>
                  <p className="text-stone-600"><span className="font-semibold">Helpline:</span> 24/7</p>
                  <p className="text-stone-600"><span className="font-semibold">Facility:</span> Mon-Fri 8am - 8pm, Sat 9am - 1pm</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-stone-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center text-stone-500">
               <iframe 
                 width="100%" 
                 height="100%" 
                 frameBorder="0" 
                 scrolling="no" 
                 marginHeight={0} 
                 marginWidth={0} 
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Murfreesboro%20TN+(TRUE%20Addiction)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-100">
            <h2 className="text-2xl font-bold text-stone-900 font-serif mb-2">Confidential Inquiry</h2>
            <p className="text-stone-500 mb-8 text-sm">Your information is secure and HIPAA compliant. We will never share your details.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="insurance" className="block text-sm font-medium text-stone-700 mb-1">Insurance Provider (Optional)</label>
                <input 
                  type="text" 
                  id="insurance" 
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. BlueCross BlueShield"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">How can we help?</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                  placeholder="Briefly describe your situation..."
                ></textarea>
              </div>

              <Button fullWidth size="lg" type="submit">
                Request Confidential Call
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};