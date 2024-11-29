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
      case 'high': return 'bg-accent';
      case 'medium': return 'bg-accent/80';
      case 'low': return 'bg-accent/60';
      default: return 'bg-text-secondary';
    }
  };

  return (
    <div className="glass-card rounded-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-default">Upcoming Transits</h3>
        <Calendar className="h-6 w-6 accent-glow" />
      </div>
      <div className="space-y-6">
        {transits.map((transit, index) => (
          <div key={index} className="relative pl-6">
            <div className={`absolute left-0 top-2 w-3 h-3 rounded-full ${getImpactColor(transit.impact)}`} />
            <div className="mb-1">
              <span className="text-sm text-secondary">{transit.date}</span>
            </div>
            <h4 className="font-medium mb-1 text-default">{transit.event}</h4>
            <p className="text-sm text-secondary">{transit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};