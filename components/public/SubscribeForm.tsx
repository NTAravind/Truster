'use client';

import { useState } from 'react';
import { TOPIC_GROUPS } from '@/lib/constants/topics';
import { toast } from 'sonner';

const BUSINESSES = [
  {
    id: 'trust_code',
    label: 'Trust Code Solutions',
    description: 'Business Software - ERP, Tally, Tax & Compliance, CRM & Consulting',
    tone: 'B2B, serious clients, high trust tone',
  },
  {
    id: 'arvi_yatra',
    label: 'Arvi Yatra',
    description: 'Travel - Domestic, International, Spiritual Tours & Group Packages',
    tone: 'B2C, emotional + visual content',
  },
  {
    id: 'easy_pc',
    label: 'Easy to PC',
    description: 'Tech & AI - AI Tools, Automation, SaaS, Web & App Development, eCommerce',
    tone: 'Tech-savvy audience',
  },
];

interface SubscribeFormProps {
  compact?: boolean;
}

export function SubscribeForm({ compact = false }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [selectedBusinesses, setSelectedBusinesses] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleBusiness = (id: string) => {
    setSelectedBusinesses(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedBusinesses.length === 0) {
      toast.error('Please select at least one business and enter your email');
      return;
    }

    setIsSubmitting(true);
    try {
      const topicMap: Record<string, string[]> = {
        trust_code: ['erp_tally', 'tax_compliance', 'crm_consulting'],
        arvi_yatra: ['domestic_tours', 'international_tours', 'spiritual_tours', 'group_packages'],
        easy_pc: ['ai_tools', 'automation', 'saas', 'web_app_dev', 'ecommerce'],
      };

      const topics = selectedBusinesses.flatMap(b => topicMap[b] || []);

      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, topics }),
      });

      if (res.ok) {
        toast.success('Subscribed!', {
          description: "You'll receive newsletters from your selected businesses.",
        });
        setEmail('');
        setSelectedBusinesses([]);
      } else {
        toast.error('Something went wrong. Try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={compact ? "space-y-8" : "space-y-16"}>
      
      {/* ── EMAIL INPUT ── */}
      <div className="relative group">
        <label htmlFor="email" className={`editorial-label text-truster-primary block transition-colors group-focus-within:text-truster-foreground ${compact ? 'mb-2' : 'mb-6'}`}>
          01. Email Address
        </label>
        <input
          id="email"
          type="email"
          placeholder="ENTER EMAIL..."
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`w-full bg-transparent border-0 border-b-2 border-truster-foreground/20 font-black uppercase tracking-tighter text-truster-foreground placeholder:text-truster-foreground/20 focus:outline-none focus:ring-0 focus:border-truster-foreground transition-colors ${compact ? 'pb-2 text-2xl md:text-3xl' : 'pb-4 text-3xl md:text-5xl'}`}
          required
        />
      </div>

      {/* ── DIVISIONS SELECTION ── */}
      <div>
        <label className={`editorial-label text-truster-primary block ${compact ? 'mb-2' : 'mb-4'}`}>
          02. Select Divisions
        </label>
        <p className={`${compact ? 'text-sm mb-4' : 'text-lg mb-8'} text-truster-foreground/60`}>
          Choose which updates you want to receive.
        </p>
        
        <div className="grid gap-0 border-y border-truster-foreground/20">
          {BUSINESSES.map((business) => {
            const isSelected = selectedBusinesses.includes(business.id);
            return (
              <div 
                key={business.id} 
                onClick={() => toggleBusiness(business.id)}
                className={`group cursor-pointer transition-colors duration-500 border-b border-truster-foreground/20 last:border-0 ${compact ? 'p-4' : 'p-6 lg:p-8'} ${isSelected ? 'bg-truster-foreground text-white' : 'bg-transparent hover:bg-[#F3F1E8] text-truster-foreground'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-black uppercase tracking-tighter ${compact ? 'text-lg md:text-xl mb-1' : 'text-2xl lg:text-3xl mb-2'} ${isSelected ? 'text-white' : 'text-truster-foreground'}`}>
                      {business.label}
                    </h3>
                    <p className={`leading-relaxed max-w-xl ${compact ? 'text-xs md:text-sm' : 'text-sm lg:text-base'} ${isSelected ? 'text-white/80' : 'text-truster-foreground/70'}`}>
                      {business.description}
                    </p>
                  </div>
                  <div className={`border-2 flex items-center justify-center transition-colors flex-shrink-0 ${compact ? 'w-6 h-6 lg:w-8 lg:h-8 ml-4' : 'w-8 h-8 lg:w-12 lg:h-12'} ${isSelected ? 'border-white bg-white text-truster-foreground' : 'border-truster-foreground/20'}`}>
                    {isSelected && <span className={`font-black leading-none uppercase ${compact ? 'text-sm lg:text-base' : 'text-xl lg:text-2xl'}`}>X</span>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── SUBMIT BUTTON ── */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full bg-truster-foreground text-white flex items-center justify-between group hover:bg-truster-primary transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed ${compact ? 'py-4 px-4' : 'py-8 lg:py-12 px-8'}`}
      >
        <span className={`font-black uppercase tracking-tighter ${compact ? 'text-xl lg:text-2xl' : 'text-3xl lg:text-5xl'}`}>
          {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE NOW'}
        </span>
        {!isSubmitting && (
          <span className={`font-black tracking-tighter group-hover:translate-x-2 transition-transform duration-500 ${compact ? 'text-xl lg:text-2xl' : 'text-3xl lg:text-5xl'}`}>
            &rarr;
          </span>
        )}
      </button>
      
    </form>
  );
}