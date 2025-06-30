
import Navigation from '../components/Navigation';

const Author = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-yellow-300/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 animate-fade-in">
            From the Farmer
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A personal message from Sarah Wilson
          </p>
        </div>
      </section>

      {/* Author Message */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🌾</span>
              </div>
              <h2 className="text-3xl font-bold text-green-800 mb-2">Sarah Wilson</h2>
              <p className="text-gray-600">Third Generation Farmer & Owner</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl text-center italic text-green-700 mb-8">
                "Welcome to our family farm, where tradition meets innovation in every pasture."
              </p>

              <p>
                Dear Friends and Visitors,
              </p>

              <p>
                My name is Sarah Wilson, and I'm honored to welcome you to Meadow Farm, a place that has been my family's heart and soul for over seven decades. As the third generation to call this land home, I carry forward the dreams and values of my grandfather Thomas and my father Michael, while adding my own vision for the future of sustainable farming.
              </p>

              <p>
                When I returned to the farm after completing my degree in Agricultural Science, I brought with me new ideas about sustainable practices, animal welfare, and community engagement. But I also carried the timeless wisdom passed down through generations – that farming is not just about producing food, but about nurturing the land, caring for our animals, and building connections with our community.
              </p>

              <p>
                Every morning, I wake up to the sound of our cows greeting the day, and I'm reminded of the privilege and responsibility that comes with being a steward of this land. Our 150 Holstein and Jersey cows are not just livestock to us – they're individuals with their own personalities, and they deserve the best care we can provide.
              </p>

              <p>
                What makes me most proud is how we've evolved our practices to be more sustainable while maintaining the quality our community has come to love. We've implemented rotational grazing, which not only keeps our pastures healthy but also allows our cows to express their natural behaviors. Our commitment to organic practices means no harmful chemicals touch our land or our animals.
              </p>

              <p>
                But perhaps what brings me the greatest joy is seeing families visit our farm and watch children's faces light up when they see a cow up close for the first time. In our increasingly digital world, there's something magical about connecting with the source of our food and understanding the care that goes into every glass of milk.
              </p>

              <p>
                I believe that farming is both an art and a science, requiring constant learning and adaptation. Climate change, market pressures, and evolving consumer preferences challenge us to be innovative while staying true to our core values. It's not always easy, but it's always rewarding.
              </p>

              <p>
                To our neighbors and customers who have supported us through the years, thank you. Your trust in our products and your enthusiasm for our mission inspire us every day. To those who are visiting for the first time, I hope you'll leave with a deeper appreciation for the dedication and love that goes into sustainable farming.
              </p>

              <p>
                Our farm is more than a business – it's a living testament to the possibility of working in harmony with nature while providing for our community. I invite you to explore, learn, and become part of our extended farm family.
              </p>

              <p className="text-center font-semibold text-green-800 text-xl">
                With warm regards and muddy boots,<br />
                Sarah Wilson
              </p>
            </div>

            <div className="mt-12 bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Connect with Sarah</h3>
              <p className="text-gray-700 mb-4">
                I love hearing from visitors and fellow farming enthusiasts. Feel free to reach out if you have questions about our practices, want to share your farm visit experience, or are interested in learning more about sustainable agriculture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <span className="font-medium text-gray-700">Email:</span>
                  <span className="ml-2 text-green-600">sarah@meadowfarm.com</span>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-gray-700">Direct Line:</span>
                  <span className="ml-2 text-green-600">(555) 123-4567 ext. 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Author;
