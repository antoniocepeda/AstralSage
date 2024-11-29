import React from 'react';
import { Calendar } from 'lucide-react';

interface Transit {
  date: string;
  event: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
}

interface TransitTimelineProps {
  transits: Transit[];
}

export const TransitTimeline: React.FC<TransitTimelineProps> = ({ transits }) => {
  const getImpactColor = (impact: Transit['impact']) => {
    switch (impact) {
      case 'high': return 'bg-purple-600';
      case 'medium': return 'bg-indigo-600';
      case 'low': return 'bg-blue-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Upcoming Transits</h3>
        <Calendar className="h-6 w-6 text-indigo-600 animate-glow" />
      </div>
      <div className="space-y-6">
        {transits.map((transit, index) => (
          <div key={index} className="relative pl-6">
            <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${getImpactColor(transit.impact)}`} />
            <div className="mb-1">
              <span className="text-sm text-gray-500">{transit.date}</span>
            </div>
            <h4 className="font-medium mb-1">{transit.event}</h4>
            <p className="text-sm text-gray-600">{transit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};