import React from 'react';
import { Moon } from 'lucide-react';

interface PlanetPosition {
  planet: string;
  sign: string;
  degree: number;
  house: number;
}

interface PlanetaryChartProps {
  positions: PlanetPosition[];
}

export const PlanetaryChart: React.FC<PlanetaryChartProps> = ({ positions }) => {
  return (
    <div className="glass-card rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Current Planetary Positions</h3>
        <Moon className="h-6 w-6 text-indigo-600 animate-glow" />
      </div>
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-white/50 hover:bg-white/80 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium">{position.planet}</span>
              <span className="text-gray-600">in</span>
              <span className="font-medium text-indigo-600">{position.sign}</span>
            </div>
            <div className="text-sm text-gray-600">
              {position.degree}° | House {position.house}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};