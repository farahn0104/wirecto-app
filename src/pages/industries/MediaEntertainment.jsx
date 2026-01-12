import React from 'react';
import { Link } from 'react-router-dom';

const MediaEntertainment = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Media & Entertainment</h1>
            <p className="text-xl opacity-90">Your Portal to Excitement and Beyond</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                The media and entertainment world is evolving at an exhilarating speed, constantly bringing forth new and exciting content that captures our attention. From the latest blockbuster movies to chart-topping music and trending shows, there's always something fresh to dive into.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we are committed to delivering a meticulously curated experience that connects you directly with the most engaging and relevant content in the industry.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/MEDIA-AND-ENTERTAINMENT.jpg" 
                alt="Media & Entertainment" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* What Makes Wirecto Your Go-To Destination */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Makes Wirecto Your Go-To Media Destination?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Diverse Content Library',
                  description: 'From latest movie releases to trending news, we cater to every interest.'
                },
                {
                  title: 'User-Friendly Interface',
                  description: 'Smooth, intuitive design that makes browsing seamless and enjoyable.'
                },
                {
                  title: 'Personalized Recommendations',
                  description: 'Smart algorithms deliver tailored content suggestions based on your preferences.'
                },
                {
                  title: 'Real-Time Updates',
                  description: 'Stay ahead with real-time industry trends, events, and breaking news.'
                },
                {
                  title: 'Interactive Community',
                  description: 'Join discussions and connect with like-minded entertainment enthusiasts.'
                },
                {
                  title: 'Exclusive Features',
                  description: 'Behind-the-scenes access, in-depth reviews, and breaking news coverage.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-4">{index + 1}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Categories */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Explore Categories That Spark Joy</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: 'Movies', icon: '🎬' },
                { name: 'TV Shows', icon: '📺' },
                { name: 'Music', icon: '🎵' },
                { name: 'Celebrity News', icon: '🌟' },
                { name: 'Gaming', icon: '🎮' },
                { name: 'Pop Culture', icon: '🔥' }
              ].map((category, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="font-bold text-gray-800">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Stay Updated with Exclusive Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'In-Depth Reviews',
                  description: 'Get fair opinions before investing your time in movies, shows, or albums with our comprehensive reviews.'
                },
                {
                  title: 'Breaking News',
                  description: 'Stay informed about the latest developments in the entertainment world with our dedicated news coverage.'
                },
                {
                  title: 'Behind-the-Scenes',
                  description: 'Exclusive interviews, making-of stories, and fun trivia that bring you closer to the artists you admire.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Entertainment Matters */}
          <div className="mb-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">Why Entertainment Matters</h2>
            <p className="text-lg opacity-90 mb-6">
              Media and entertainment play a vital role in our lives, offering an escape, a source of inspiration, and a means of connection. Movies transport us to new worlds, music evokes powerful emotions, and pop culture shapes how we interact with the world.
            </p>
            <p className="text-lg opacity-90">
              At Wirecto, we celebrate the power of entertainment to unite and elevate communities, creating memorable experiences that bring people together.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join the Wirecto Family Today</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
              Ready to embark on an exceptional entertainment journey? Explore the world of media like never before with Wirecto. Whether you're here to relax, discover, or connect, our platform offers everything you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
              >
                Get Started
              </Link>
              <Link
                to="#"
                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaEntertainment;