import React from 'react';
import { MapPin, ExternalLink, Clock, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapUrl = "https://maps.app.goo.gl/9fSVX7zcZX3iKGnG8";

  const areas = [
    "DHA (All Phases)", "Bahria Town", "Gulberg", 
    "Johar Town", "Model Town", "Wapda Town",
    "Cantt", "Askari Colonies"
  ];

  return (
    <section id="map" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-8 bg-slate-50 rounded-[2.5rem] p-4 border border-slate-200 shadow-xl overflow-hidden">
           
           {/* Info Side */}
           <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-wider text-xs mb-4">
                <Navigation size={16} /> Service Coverage
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Serving All of Lahore</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed font-medium">
                 From the heart of the city to the expanding suburbs, our team is ready to reach you. We cover all major residential and commercial societies.
              </p>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-700 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    {area}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-8">
                 <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Clock size={24} />
                 </div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm">Operating Hours</h4>
                    <p className="text-slate-600 text-sm">Mon - Sat: 09:00 AM - 08:00 PM</p>
                 </div>
              </div>

              <button 
                onClick={() => window.open(mapUrl, '_blank')}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-slate-900/20"
              >
                <ExternalLink size={20} /> Get Directions
              </button>
           </div>

           {/* Map Visual Side */}
           <div className="flex-1 min-h-[400px] lg:min-h-full relative rounded-[2rem] overflow-hidden group cursor-pointer" onClick={() => window.open(mapUrl, '_blank')}>
              <img 
                src="https://images.unsplash.com/photo-1599940824399-b87987ced7bb?q=80&w=1200&auto=format&fit=crop" 
                alt="Khan Services Location Coverage" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200'; // Fallback to generic map/city
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:bg-gradient-to-l lg:from-slate-900/60"></div>
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin size={32} className="text-pink-400" fill="currentColor" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Locate Us</h3>
                 <p className="text-slate-200 font-medium text-sm">Tap to view our location on Google Maps</p>
              </div>
           </div>

        </div>

      </div>
    </section>
  );
};