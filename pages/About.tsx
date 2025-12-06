import React from 'react';
import { Users, Target, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <div className="bg-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">About TRUE Addiction</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Dedicated to providing ethical, compassionate, and effective care to the community of Middle Tennessee.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 font-serif mb-6">Our Mission</h2>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                At TRUE Addiction & Behavioral Health, our mission is to empower individuals to reclaim their lives from the grip of addiction and mental health struggles. We believe in treating the whole person—mind, body, and spirit—through evidence-based clinical practices and holistic support.
              </p>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Located in Murfreesboro, TN, we are proud to serve the Nashville area with a program that bridges the gap between inpatient treatment and independent living.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center p-4 bg-stone-100 rounded-lg">
                  <Users className="w-8 h-8 text-teal-700 mr-3" />
                  <span className="font-semibold text-stone-800">Expert Staff</span>
                </div>
                <div className="flex items-center p-4 bg-stone-100 rounded-lg">
                  <Target className="w-8 h-8 text-teal-700 mr-3" />
                  <span className="font-semibold text-stone-800">Goal Oriented</span>
                </div>
                <div className="flex items-center p-4 bg-stone-100 rounded-lg">
                  <Heart className="w-8 h-8 text-teal-700 mr-3" />
                  <span className="font-semibold text-stone-800">Compassionate</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/id/101/600/800" 
                alt="Team meeting" 
                className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-stone-100 max-w-xs hidden md:block">
                <p className="text-teal-800 font-bold text-lg mb-1">Local & Trusted</p>
                <p className="text-stone-500 text-sm">Serving the community with integrity for over a decade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 font-serif mb-8">Our Philosophy</h2>
          <p className="text-lg text-stone-700 leading-loose">
            We operate under the belief that recovery is possible for everyone. We reject the "one-size-fits-all" approach. 
            Instead, we listen. We build trust. We create a safe harbor where you can be vulnerable and do the hard work of healing 
            without judgment. Whether you are dealing with substance abuse, anxiety, depression, or trauma, you have a place here.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-6 text-stone-900">Meet Our Team</h2>
           <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
             Our clinical director, therapists, and support staff are here to guide you every step of the way.
           </p>
           <Button onClick={() => navigate('/contact')}>Contact Our Team</Button>
         </div>
      </section>
    </div>
  );
};