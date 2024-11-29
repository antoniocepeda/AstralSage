import React from 'react';
import { Sun, Moon, Star, Calendar, Settings, User, Brain, Sparkles } from 'lucide-react';
import { AstroCard } from '../components/dashboard/AstroCard';
import { InsightCard } from '../components/dashboard/InsightCard';
import { PlanetaryChart } from '../components/dashboard/PlanetaryChart';
import { TransitTimeline } from '../components/dashboard/TransitTimeline';
import { useAuth } from '../contexts/AuthContext';
import { BaseInput } from '../components/ui/BaseInput';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const planetaryPositions = [
    { planet: 'Sun', sign: 'Pisces', degree: 15, house: 10 },
    { planet: 'Moon', sign: 'Libra', degree: 23, house: 5 },
    { planet: 'Mercury', sign: 'Aquarius', degree: 8, house: 9 },
    { planet: 'Venus', sign: 'Aries', degree: 2, house: 11 },
    { planet: 'Mars', sign: 'Capricorn', degree: 19, house: 8 }
  ];

  const upcomingTransits = [
    {
      date: 'Mar 25, 2024',
      event: 'Full Moon in Libra',
      description: 'A powerful time for relationships and partnerships. Expect revelations in personal connections.',
      impact: 'high' as const
    },
    {
      date: 'Mar 30, 2024',
      event: 'Venus enters Taurus',
      description: 'Enhanced focus on material comfort and creative pursuits.',
      impact: 'medium' as const
    },
    {
      date: 'Apr 5, 2024',
      event: 'Mercury Retrograde',
      description: 'Time to review and reassess communication patterns.',
      impact: 'high' as const
    }
  ];

  return (
    <div className="min-h-screen gradient-bg py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* User Welcome Section */}
        <div className="glass-card rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2 text-default">Welcome back, {user?.name}</h1>
              <p className="text-secondary">Your Cosmic Journey Continues</p>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 accent-glow" />
              <span className="text-sm font-medium text-secondary">AI Analysis Ready</span>
            </div>
          </div>
        </div>

        {/* Grid of insight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <InsightCard
            title="Career Trajectory"
            prediction="Your professional path is entering a phase of innovation and growth."
            confidence={85}
          />
          <InsightCard
            title="Relationship Insights"
            prediction="A period of deep connections and meaningful conversations approaches."
            confidence={92}
          />
          <InsightCard
            title="Personal Growth"
            prediction="Focus on creative pursuits will yield unexpected rewards."
            confidence={88}
          />
        </div>

        {/* Planetary info section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PlanetaryChart positions={planetaryPositions} />
          <TransitTimeline transits={upcomingTransits} />
        </div>

        <BaseInput 
          label="Search" 
          placeholder="Search insights..."
          className="max-w-md"
        />
      </div>
    </div>
  );
};