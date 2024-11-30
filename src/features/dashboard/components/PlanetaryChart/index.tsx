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
    <div className="glass-card rounded-lg p-6 card-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-default">Current Planetary Positions</h3>
        <Moon className="h-6 w-6 accent-glow" />
      </div>
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-card-bg hover:bg-card-bg/80 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium text-default">{position.planet}</span>
              <span className="text-secondary">in</span>
              <span className="font-medium accent-glow">{position.sign}</span>
            </div>
            <div className="text-sm text-secondary">
              {position.degree}° | House {position.house}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};