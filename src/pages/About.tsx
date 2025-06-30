
import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

const About = () => {
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
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-yellow-300/30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Three generations of sustainable farming
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Founded in 1952
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Meadow Farm began as a small family operation when my grandfather, 
                Thomas Wilson, purchased 50 acres of rolling hills in the countryside. 
                His vision was simple: raise happy, healthy cows that would produce 
                the finest milk for our community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, we continue his legacy with the same commitment to quality, 
                sustainability, and animal welfare that has defined our farm for over 
                seven decades.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-green-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide the highest quality organic dairy products while 
                  maintaining sustainable farming practices that protect our 
                  environment and ensure the wellbeing of our animals.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12 animate-fade-in">
              Our Journey
            </h2>
            {[
              { year: '1952', event: 'Thomas Wilson establishes Meadow Farm with 12 Holstein cows' },
              { year: '1978', event: 'Second generation takes over, expanding to 50 cows and organic certification' },
              { year: '1995', event: 'Introduction of rotational grazing and sustainable farming practices' },
              { year: '2010', event: 'Third generation joins, focusing on animal welfare and community education' },
              { year: '2020', event: 'Launch of farm tours and educational programs for families' }
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-green-600 text-white px-6 py-3 rounded-full font-bold text-lg min-w-[100px] text-center">
                  {item.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 text-lg">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 animate-fade-in">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Animal Welfare",
                description: "Our cows are treated with respect and care, living in spacious pastures with access to fresh water and shelter."
              },
              {
                title: "Environmental Stewardship",
                description: "We practice sustainable farming methods that protect soil health, water quality, and biodiversity."
              },
              {
                title: "Community Connection",
                description: "We're committed to educating our community about sustainable agriculture and providing fresh, local products."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-green-800 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
