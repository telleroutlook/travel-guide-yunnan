import React from 'react';
import { MapPin, Camera, Utensils } from 'lucide-react';

interface City {
  name: string;
  description: string;
  top_attractions: { name: string; desc: string }[];
  local_food: string[];
}

interface CityCardProps {
  city: City;
}

export default function CityCard({ city }: CityCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
      <div className="h-48 bg-gradient-to-r from-teal-600 to-emerald-600 flex items-center justify-center relative overflow-hidden group">
        <span className="text-3xl font-bold text-white z-10 drop-shadow-lg">{city.name}</span>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      </div>
      <div className="p-6 space-y-4">
        <p className="text-gray-300 leading-relaxed text-sm min-h-[60px]">{city.description}</p>
        
        <div className="space-y-3">
          <h4 className="flex items-center gap-2 text-teal-400 font-semibold">
            <Camera size={18} /> 必游景点
          </h4>
          <ul className="space-y-2">
            {city.top_attractions.map((attraction, idx) => (
              <li key={idx} className="bg-white/5 rounded-lg p-3 text-sm hover:bg-white/10 transition-colors">
                <span className="font-medium text-white block mb-1">{attraction.name}</span>
                <span className="text-gray-400 text-xs">{attraction.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 border-t border-white/10">
          <h4 className="flex items-center gap-2 text-orange-400 font-semibold mb-2">
            <Utensils size={18} /> 美食推荐
          </h4>
          <div className="flex flex-wrap gap-2">
            {city.local_food.map((food, idx) => (
              <span key={idx} className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-200 border border-orange-500/30">
                {food}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
