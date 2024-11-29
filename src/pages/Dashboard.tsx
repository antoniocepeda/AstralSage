import React from 'react';
import { Sun, Moon, Star, Calendar, Settings, User, Brain, Sparkles } from 'lucide-react';
import { AstroCard } from '../components/dashboard/AstroCard';
import { InsightCard } from '../components/dashboard/InsightCard';
import { PlanetaryChart } from '../components/dashboard/PlanetaryChart';
import { TransitTimeline } from '../components/dashboard/TransitTimeline';
import { useAuth } from '../contexts/AuthContext';

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
              <h1 className="text-2xl font-bold mb-2">Welcome back, {user?.name}</h1>
              <p className="text-gray-600">Your Cosmic Journey Continues</p>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-purple-600 animate-glow" />
              <span className="text-sm font-medium">AI Analysis Ready</span>
            </div>
          </div>
        </div>

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <InsightCard
            title="Career Trajectory"
            prediction="Mars in your 10th house suggests a significant career opportunity this week. Stay alert for leadership roles."
            confidence={92}
          />
          <InsightCard
            title="Relationship Insights"
            prediction="Venus-Jupiter aspect indicates potential for meaningful connections. Social gatherings will be particularly favorable."
            confidence={87}
          />
          <InsightCard
            title="Personal Growth"
            prediction="Saturn's position supports long-term learning. Consider starting that course you've been thinking about."
            confidence={94}
          />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PlanetaryChart positions={planetaryPositions} />
          </div>
          <div>
            <TransitTimeline transits={upcomingTransits} />
          </div>
        </div>

        {/* Daily Aspects Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <AstroCard title="Daily Energy" icon={Sun}>
            <div className="space-y-2">
              <p className="text-gray-600">
                Sun trine Moon brings harmony between your conscious and subconscious mind.
              </p>
              <div className="flex items-center space-x-2 text-sm text-indigo-600">
                <Sparkles className="h-4 w-4" />
                <span>Peak Energy Time: 2:30 PM</span>
              </div>
            </div>
          </AstroCard>
          
          <AstroCard title="Meditation Focus" icon={Moon}>
            <div className="space-y-2">
              <p className="text-gray-600">
                Lunar position suggests focusing on heart chakra meditation today.
              </p>
              <div className="flex items-center space-x-2 text-sm text-indigo-600">
                <Star className="h-4 w-4" />
                <span>Recommended Duration: 20 mins</span>
              </div>
            </div>
          </AstroCard>

          <AstroCard title="Daily Affirmation" icon={Star}>
            <div className="space-y-2">
              <p className="text-gray-600">
                "I am aligned with the cosmic energy and open to receiving guidance."
              </p>
              <div className="flex items-center space-x-2 text-sm text-indigo-600">
                <Brain className="h-4 w-4" />
                <span>AI-Generated for Your Chart</span>
              </div>
            </div>
          </AstroCard>
        </div>
      </div>
    </div>
  );
};