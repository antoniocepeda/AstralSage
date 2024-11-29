import React from 'react';
import { Brain } from 'lucide-react';

interface InsightCardProps {
  title: string;
  prediction: string;
  confidence: number;
}

export const InsightCard: React.FC<InsightCardProps> = ({ title, prediction, confidence }) => {
  return (
    <div className="glass-card rounded-lg p-6 hover:scale-102 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Brain className="h-6 w-6 text-purple-600 animate-glow" />
      </div>
      <p className="text-gray-600 mb-4">{prediction}</p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-purple-600 rounded-full h-2 animate-pulse"
          style={{ width: `${confidence}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-2">AI Confidence: {confidence}%</p>
    </div>
  );
};