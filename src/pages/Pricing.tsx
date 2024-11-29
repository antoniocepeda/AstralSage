import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for exploring the basics of astrology",
      features: [
        "Daily sun sign horoscope",
        "Basic birth chart",
        "Limited compatibility checks",
        "Community forum access"
      ]
    },
    {
      name: "Premium",
      price: "$9.99",
      description: "For dedicated astrology enthusiasts",
      features: [
        "All Starter features",
        "Detailed daily horoscopes",
        "Full birth chart analysis",
        "Unlimited compatibility reports",
        "Transit forecasts",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Professional",
      price: "$19.99",
      description: "For professional astrologers and serious practitioners",
      features: [
        "All Premium features",
        "Advanced transit forecasts",
        "Synastry reports",
        "API access",
        "Custom report generation",
        "1-on-1 consultations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the plan that best suits your astrological journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card rounded-xl p-8 ${
                plan.popular ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 right-8">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant={plan.popular ? "primary" : "outline"}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};