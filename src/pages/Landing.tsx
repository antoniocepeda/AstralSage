import React from 'react';
import { Link } from 'react-router-dom';
import { Stars, Moon, Sun, Sparkles, Brain, Cpu } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Landing: React.FC = () => {
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

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-background pt-24 min-h-screen">
        <div className="absolute inset-0">
          <div className="gradient-bg opacity-90 dark:opacity-70 h-full w-full" />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                <Stars className="text-white h-2 w-2" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="flex justify-center items-center space-x-4 mb-8">
            <Moon className="h-16 w-16 text-white animate-glow" />
            <Brain className="h-16 w-16 text-white animate-glow" style={{ animationDelay: "0.5s" }} />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Your AI-Powered Celestial Guide
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Experience personalized mentorship powered by advanced AI that adapts to your style - 
            from gentle guidance to direct insights, all informed by astrological wisdom.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/signup">
              <Button 
                variant="primary"
                size="lg" 
                className="bg-accent text-white hover:bg-accent/90 dark:bg-accent/90 dark:hover:bg-accent"
              >
                Start Your Journey
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={scrollToPricing}
              className="border-2 border-white text-white hover:bg-white/20 dark:border-accent dark:text-accent dark:hover:bg-accent/10"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-background">
        <div className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary">
                Guidance That Adapts To You
              </h2>
              <p className="mt-4 text-xl text-text-secondary">
                Our AI mentorship system adjusts to your preferences, combining astrological insights with your chosen coaching style
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-12 w-12" />,
                  title: "Customizable AI Mentor",
                  description: "Adjust your mentor's style from nurturing to direct, ensuring guidance that resonates with you."
                },
                {
                  icon: <Sparkles className="h-12 w-12" />,
                  title: "Adaptive Life Coaching",
                  description: "AI-powered insights that evolve with you, blending astrological timing with your personal growth pace."
                },
                {
                  icon: <Moon className="h-12 w-12" />,
                  title: "Personalized Growth Tools",
                  description: "Smart tools that adapt to your preferences - from detailed analysis to intuitive guidance."
                }
              ].map((feature, index) => (
                <div key={index} className="glass-card rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="mx-auto h-12 w-12 text-accent animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-text-primary">{feature.title}</h3>
                  <p className="mt-4 text-text-secondary">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mentorship Section (formerly AI Technology) */}
      <div className="bg-background">
        <div className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mb-12 lg:mb-0">
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  AI-Powered Personal Growth
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-text-secondary">
                    Our advanced AI models create a uniquely personal mentorship experience,
                    adapting to your preferences while maintaining astrological accuracy.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Customizable mentor personality and communication style",
                      "AI-driven insights that match your preferred depth level",
                      "Adaptive guidance based on your feedback and progress",
                      "Precise astrological timing with flexible interpretation",
                      "Community features with privacy controls you choose"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Stars className="h-5 w-5 text-accent mr-2" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden glass-card p-8">
                  <div className="grid grid-cols-2 gap-4 h-full">
                    <div className="space-y-4">
                      <Brain className="h-16 w-16 text-indigo-600 animate-glow" />
                      <div className="h-2 bg-indigo-600/20 rounded animate-pulse" />
                      <div className="h-2 bg-indigo-600/20 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <div className="h-2 bg-indigo-600/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </div>
                    <div className="space-y-4">
                      <Cpu className="h-16 w-16 text-purple-600 animate-glow" />
                      <div className="h-2 bg-purple-600/20 rounded animate-pulse" style={{ animationDelay: "0.6s" }} />
                      <div className="h-2 bg-purple-600/20 rounded animate-pulse" style={{ animationDelay: "0.8s" }} />
                      <div className="h-2 bg-purple-600/20 rounded animate-pulse" style={{ animationDelay: "1s" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-background">
        <div className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-text-primary">
                Choose Your Path
              </h2>
              <p className="mt-4 text-xl text-text-secondary">
                Select the plan that best suits your astrological journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`glass-card rounded-xl p-8 relative ${
                    plan.popular ? 'ring-2 ring-accent scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium absolute -top-3 right-8">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                    {plan.price !== "Free" && <span className="text-text-secondary">/month</span>}
                  </div>
                  <p className="text-text-secondary mb-6">{plan.description}</p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-text-secondary">
                        <Stars className="h-5 w-5 text-accent mr-2" />
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
      </div>
    </div>
  );
};