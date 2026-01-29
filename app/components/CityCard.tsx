import React from 'react';
import { MapPin, Camera, Utensils, Lightbulb } from 'lucide-react';

interface City {
  name: string;
  description: string;
  top_attractions: { name: string; desc: string }[];
  local_food: string[];
  travel_tip: string;
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col h-full">
      <div className="h-48 bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-center relative overflow-hidden group shrink-0">
        <span className="text-3xl font-bold text-white z-10 drop-shadow-lg">{city.name}</span>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-6 space-y-5 flex-1 flex flex-col">
        <p className="text-gray-300 leading-relaxed text-sm min-h-[60px]">{city.description}</p>
        
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-teal-400 font-semibold text-sm uppercase tracking-wider">
            <Camera size={16} /> 必游景点
          </h4>
          <ul className="space-y-2">
            {city.top_attractions.map((attraction, idx) => (
              <li key={idx} className="bg-white/5 rounded-lg p-3 text-sm hover:bg-white/10 transition-colors">
                <span className="font-medium text-white block mb-1">{attraction.name}</span>
                <span className="text-gray-400 text-xs block leading-snug">{attraction.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-white/10">
          <h4 className="flex items-center gap-2 text-orange-400 font-semibold mb-2 text-sm uppercase tracking-wider">
            <Utensils size={16} /> 地道美食
          </h4>
          <div className="flex flex-wrap gap-2">
            {city.local_food.map((food, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                {food}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-white/10">
           <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-3 flex gap-3 items-start">
              <Lightbulb size={18} className="text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-100/90 leading-relaxed">
                <span className="font-bold text-emerald-400 block mb-1">游友经验谈</span>
                {city.travel_tip}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
