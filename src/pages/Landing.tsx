import React from 'react';
import { Link } from 'react-router-dom';
import { Stars, Moon, Sun, Sparkles, Brain, Cpu } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-bg pt-24 min-h-screen">
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
            AI-Powered Celestial Insights
          </h1>
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Experience the future of astrology with our advanced AI models, delivering
            personalized cosmic guidance with unprecedented accuracy.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/signup">
              <Button 
                variant="primary"
                size="lg" 
                className="bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Start Your Journey
              </Button>
            </Link>
            <Link to="/pricing">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/20"
              >
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Powered by Advanced AI</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our fine-tuned models combine ancient wisdom with cutting-edge technology
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Brain className="h-12 w-12" />,
                title: "AI-Powered Predictions",
                description: "Our fine-tuned models analyze planetary positions and personal data to provide highly accurate predictions."
              },
              {
                icon: <Cpu className="h-12 w-12" />,
                title: "Neural Network Analysis",
                description: "Advanced neural networks process centuries of astrological data to deliver personalized insights."
              },
              {
                icon: <Sparkles className="h-12 w-12" />,
                title: "Pattern Recognition",
                description: "AI algorithms identify unique patterns in your birth chart and current transits."
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="mx-auto h-12 w-12 text-indigo-600 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {feature.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-4 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Technology Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Advanced AI Technology
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Our AI models are trained on vast datasets of astrological knowledge,
                  combining traditional wisdom with modern machine learning techniques.
                </p>
                <ul className="space-y-4">
                  {[
                    "Fine-tuned language models for personalized readings",
                    "Real-time planetary movement analysis",
                    "Pattern recognition in birth charts",
                    "Predictive modeling for transit impacts"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Stars className="h-5 w-5 text-indigo-600 mr-2" />
                      <span className="text-gray-600">{item}</span>
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
  );
};