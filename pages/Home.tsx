import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Phone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { SERVICES, TESTIMONIALS, PHONE_NUMBER } from '../constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/id/190/1920/1080" 
            alt="Calm lake in Tennessee" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-900/95 to-teal-900/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 leading-tight">
              Reclaim Your Life from Addiction
            </h1>
            <p className="text-lg md:text-xl text-teal-50 mb-8 leading-relaxed">
              Compassionate, evidence-based outpatient treatment in Murfreesboro. 
              We combine medical expertise with holistic healing to treat the whole person, not just the symptoms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/contact')}>
                Start Your Recovery
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" onClick={() => navigate('/services')}>
                Explore Programs
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-teal-200/80">
              <ShieldCheck className="w-5 h-5 mr-2 text-teal-400" />
              <span>Confidential • Licensed • Insurance Accepted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / USP Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-stone-900 font-serif mb-4">Why Choose TRUE Addiction?</h2>
            <p className="text-lg text-stone-600">
              We believe in a path to recovery that is accessible, dignified, and effective. 
              Located in the heart of Middle Tennessee, we serve our community with integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Heart className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Compassionate Care</h3>
              <p className="text-stone-600 leading-relaxed">
                Trauma-informed staff who understand that addiction is a disease, not a moral failing.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Evidence-Based</h3>
              <p className="text-stone-600 leading-relaxed">
                Utilization of CBT, DBT, and MAT (Medication-Assisted Treatment) protocols for lasting results.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Individualized Plans</h3>
              <p className="text-stone-600 leading-relaxed">
                No cookie-cutter programs. Every treatment plan is tailored to your unique history and needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 font-serif mb-2">Our Programs</h2>
              <p className="text-stone-600">Comprehensive care for every stage of recovery.</p>
            </div>
            <button 
              onClick={() => navigate('/services')} 
              className="hidden md:flex items-center text-teal-700 font-semibold hover:text-teal-800 transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-stone-100">
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <service.icon className="w-5 h-5 text-teal-600 mr-2" />
                    <h3 className="text-xl font-bold text-stone-900">{service.title}</h3>
                  </div>
                  <p className="text-stone-600 mb-4 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <span className="text-teal-700 font-medium text-sm cursor-pointer hover:underline" onClick={() => navigate('/services')}>Learn more &rarr;</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Button variant="secondary" onClick={() => navigate('/services')}>View All Programs</Button>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-teal-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold font-serif mb-4">Help is just a phone call away</h2>
          <p className="text-teal-100 text-lg mb-8">
            Our admissions team is available 24/7 to answer your questions, verify insurance, and help you take the first step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`} className="bg-white text-teal-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-stone-100 transition-colors flex items-center justify-center shadow-lg">
               <Phone className="w-5 h-5 mr-3" /> Call {PHONE_NUMBER}
             </a>
             <Button variant="outline" className="border-teal-400 text-teal-50 hover:bg-teal-700 hover:text-white" onClick={() => navigate('/contact')}>
               Online Assessment
             </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-stone-900 font-serif mb-12">Stories of Hope</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-stone-50 p-8 rounded-2xl relative border border-stone-100">
                <div className="text-teal-200 text-6xl font-serif absolute top-4 left-6 opacity-50">"</div>
                <p className="text-stone-700 relative z-10 mb-6 italic leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-800 font-bold mr-3">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{t.name}</h4>
                    <p className="text-xs text-stone-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};