import React from 'react';
import { SERVICES } from '../constants';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-10 pb-20">
      <div className="bg-stone-100 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-stone-900 font-serif mb-4">Treatment Programs</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Comprehensive addiction and behavioral health services tailored to your unique journey in Murfreesboro and Nashville.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {SERVICES.map((service, index) => (
          <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto lg:h-96 group">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-teal-900/10"></div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-100 rounded-lg mr-4">
                  <service.icon className="w-8 h-8 text-teal-700" />
                </div>
                <h2 className="text-3xl font-bold text-stone-900 font-serif">{service.title}</h2>
              </div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                {service.fullDescription}
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                  <span className="text-stone-700">Personalized assessment and treatment planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                  <span className="text-stone-700">Experienced, licensed medical and clinical staff</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-teal-600 mr-2 mt-1" />
                  <span className="text-stone-700">Safe, supportive, and confidential environment</span>
                </li>
              </ul>

              <Button onClick={() => navigate('/contact')} variant="secondary">
                Get Info on {service.title}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-24 text-center bg-teal-50 py-16 rounded-xl mx-4 border border-teal-100">
        <h3 className="text-2xl font-bold text-stone-800 mb-4">Not sure what you need?</h3>
        <p className="text-stone-600 mb-8">Our care coordinators can help assess your situation and recommend the right level of care.</p>
        <Button size="lg" onClick={() => navigate('/contact')}>Free Confidential Assessment</Button>
      </div>
    </div>
  );
};