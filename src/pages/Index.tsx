
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Milk, Heart, Leaf } from 'lucide-react';
import Navigation from '../components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-yellow-300/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse" />
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-300 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-green-800 mb-6 animate-fade-in">
            Meadow Farm
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            Where happy cows produce the finest organic milk
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            <Link
              to="/visit"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Plan Your Visit <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-800 mb-16 animate-fade-in">
            Why Choose Meadow Farm?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Milk className="w-12 h-12 text-green-600" />,
                title: "Pure Organic Milk",
                description: "Our cows graze on pesticide-free pastures, producing the purest milk nature can offer."
              },
              {
                icon: <Heart className="w-12 h-12 text-green-600" />,
                title: "Happy Cows",
                description: "We believe happy cows produce better milk. Our cattle roam freely in spacious, natural environments."
              },
              {
                icon: <Leaf className="w-12 h-12 text-green-600" />,
                title: "Sustainable Farming",
                description: "Our practices protect the environment while maintaining the highest quality standards."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Experience Farm Life
          </h2>
          <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Join us for a day of learning, fun, and connecting with nature
          </p>
          <Link
            to="/visit"
            className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            Book Your Visit Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
