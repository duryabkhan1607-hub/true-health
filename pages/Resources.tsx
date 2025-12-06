import React from 'react';
import { FAQS, BLOG_POSTS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-stone-900">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-teal-600" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const Resources: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      
      {/* Header */}
      <div className="bg-stone-100 py-16 text-center">
        <h1 className="text-4xl font-bold font-serif text-stone-900 mb-4">Resources & Support</h1>
        <p className="text-lg text-stone-600 max-w-2xl mx-auto">
          Education is a powerful tool in recovery. Explore our articles and frequently asked questions.
        </p>
      </div>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold font-serif text-stone-900 mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-teal-600 font-semibold uppercase tracking-wider mb-2">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2 leading-tight">{post.title}</h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-teal-700 font-medium text-sm hover:underline">Read Article &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold font-serif text-stone-900 mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-center text-stone-500 mb-10">Common questions about admissions, treatment, and insurance.</p>
        
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-stone-100">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      {/* AI Placeholder / Additional Resource */}
      <section className="bg-stone-900 text-white py-16 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-2xl font-bold mb-4">Need help understanding treatment options?</h2>
           <p className="text-stone-300 mb-8 max-w-2xl mx-auto">
             Our team is ready to guide you through the process, explain your insurance benefits, and verify your eligibility.
           </p>
           <Button variant="white" onClick={() => navigate('/contact')}>Verify Insurance Now</Button>
        </div>
      </section>

    </div>
  );
};