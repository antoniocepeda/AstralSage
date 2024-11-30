import React from 'react';
import { Brain } from 'lucide-react';

interface InsightCardProps {
  title: string;
  prediction: string;
  confidence: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, prediction, confidence }) => {
  return (
    <div className="glass-card rounded-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-default">{title}</h3>
        <Brain className="h-6 w-6 accent-glow" />
      </div>
      <p className="text-secondary mb-4">{prediction}</p>
      <div className="w-full bg-background rounded-full h-2">
        <div 
          className="bg-accent rounded-full h-2 animate-pulse"
          style={{ width: `${confidence}%` }}
        />
      </div>
      <p className="text-sm text-secondary mt-2">AI Confidence: {confidence}%</p>
    </div>
  );
};