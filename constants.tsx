import { 
  HeartHandshake, 
  Activity, 
  Users, 
  Home, 
  Stethoscope, 
  BrainCircuit 
} from 'lucide-react';
import { NavItem, Service, Testimonial, FAQItem, BlogPost } from './types';

export const COMPANY_NAME = "TRUE Addiction & Behavioral Health";
export const PHONE_NUMBER = "(615) 555-0123";
export const ADDRESS = "123 Healing Way, Murfreesboro, TN 37129";
export const EMAIL = "help@trueaddictiontn.com";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'outpatient',
    title: 'Intensive Outpatient (IOP)',
    shortDescription: 'Flexible treatment schedules allowing you to maintain daily responsibilities while recovering.',
    fullDescription: 'Our Intensive Outpatient Program (IOP) is designed for individuals who need structured support but do not require 24/7 supervision. We focus on relapse prevention, coping mechanisms, and rebuilding life skills.',
    icon: Activity,
    image: 'https://picsum.photos/id/42/800/600',
  },
  {
    id: 'dual-diagnosis',
    title: 'Dual Diagnosis Treatment',
    shortDescription: 'Integrated care for co-occurring mental health disorders and substance abuse.',
    fullDescription: 'We address the root causes of addiction by treating underlying mental health conditions such as anxiety, depression, and PTSD alongside substance use disorders.',
    icon: BrainCircuit,
    image: 'https://picsum.photos/id/56/800/600',
  },
  {
    id: 'detox-referral',
    title: 'Medical Detox Support',
    shortDescription: 'Safe, medically monitored withdrawal management coordination.',
    fullDescription: 'While we focus on outpatient care, we work closely with top-tier local partners to ensure your detox process is medically supervised, safe, and comfortable before you begin your therapy with us.',
    icon: Stethoscope,
    image: 'https://picsum.photos/id/60/800/600',
  },
  {
    id: 'sober-living',
    title: 'Sober Living & Aftercare',
    shortDescription: 'Community support and structured living environments for long-term success.',
    fullDescription: 'Recovery doesn’t end after treatment. We connect clients with high-quality sober living homes in Murfreesboro and Nashville and provide ongoing alumni support groups.',
    icon: Home,
    image: 'https://picsum.photos/id/78/800/600',
  },
  {
    id: 'family-therapy',
    title: 'Family Therapy',
    shortDescription: 'Healing the family unit to build a stronger support system.',
    fullDescription: 'Addiction affects the whole family. Our counselors facilitate healing sessions to rebuild trust, improve communication, and educate loved ones on how to support recovery.',
    icon: Users,
    image: 'https://picsum.photos/id/102/800/600',
  },
  {
    id: 'holistic',
    title: 'Holistic Recovery',
    shortDescription: 'Mind-body connection therapies including mindfulness and wellness.',
    fullDescription: 'We incorporate holistic modalities such as mindfulness meditation, yoga, and nutritional counseling to support physical and emotional well-being.',
    icon: HeartHandshake,
    image: 'https://picsum.photos/id/115/800/600',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Murfreesboro, TN",
    text: "TRUE Addiction saved my life. The staff actually cares about you as a person, not just a number. The outpatient program allowed me to keep my job while getting the help I desperately needed.",
    rating: 5
  },
  {
    id: 2,
    name: "James D.",
    location: "Nashville, TN",
    text: "The dual diagnosis approach was the missing piece for me. Treating my anxiety alongside my addiction changed everything. Forever grateful to this team.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily R.",
    location: "Franklin, TN",
    text: "A warm, welcoming environment. It didn't feel like a 'facility', it felt like a community. Highly recommend to anyone struggling.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you accept insurance?",
    answer: "Yes, we work with most major insurance providers including BlueCross BlueShield, Aetna, Cigna, and UnitedHealthcare. Please call us for a free benefits verification."
  },
  {
    question: "What is the difference between IOP and PHP?",
    answer: "Partial Hospitalization Programs (PHP) are more intensive, typically meeting 5-6 days a week for full days. Intensive Outpatient Programs (IOP) are more flexible, usually meeting 3-4 days a week for a few hours, allowing for work or school."
  },
  {
    question: "How long does treatment last?",
    answer: "Treatment duration varies based on individual needs. Programs can range from 30 days to several months, with long-term aftercare support available."
  },
  {
    question: "Is my treatment confidential?",
    answer: "Absolutely. We adhere strictly to HIPAA regulations and 42 CFR Part 2 to ensure your privacy and confidentiality are protected at all times."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Recognizing the Signs of Opioid Addiction",
    excerpt: "Learn the physical and behavioral warning signs that a loved one might be struggling with opioids.",
    date: "Oct 12, 2023",
    category: "Education",
    image: "https://picsum.photos/id/20/400/300"
  },
  {
    id: 2,
    title: "Benefits of Outpatient Rehab in Nashville",
    excerpt: "Why staying connected to your community can sometimes offer better long-term recovery results.",
    date: "Sep 28, 2023",
    category: "Treatment",
    image: "https://picsum.photos/id/28/400/300"
  },
  {
    id: 3,
    title: "Coping Strategies for Holiday Triggers",
    excerpt: "Practical tips for maintaining sobriety during high-stress family gatherings and holidays.",
    date: "Nov 15, 2023",
    category: "Recovery Tips",
    image: "https://picsum.photos/id/36/400/300"
  }
];