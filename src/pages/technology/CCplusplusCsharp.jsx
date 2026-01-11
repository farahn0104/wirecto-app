import React from 'react';

const CCplusplusCsharp = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">C, C++ & C# Development</h1>
            <p className="text-xl opacity-90">Building the Core of Tomorrow's Technology</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In a world driven by innovation, some tools remain timeless. C and C++, the giants of system-level programming, continue to fuel cutting-edge technology and power industries that demand performance, reliability, and efficiency.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we don't just code—we craft solutions that stand the test of time, leveraging the unmatched capabilities of C, C++, and C#.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/c++.jpeg" alt="C/C++/C# Development" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* The Edge of C and C++ */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">The Edge of C and C++</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'C Language',
                  description: 'The foundation for modern computing, offering unparalleled access to hardware and unmatched execution speed.'
                },
                {
                  title: 'C++ Language',
                  description: 'A powerhouse for scalable, object-oriented programming with the flexibility to handle complex architectures.'
                },
                {
                  title: 'C# Language',
                  description: 'Modern, object-oriented language for building Windows applications, games, and enterprise software.'
                },
                {
                  title: '.NET Framework',
                  description: 'Comprehensive framework for building Windows applications, web services, and mobile apps.'
                }
              ].map((language, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{language.title}</h3>
                  <p className="text-gray-600">{language.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Expertise */}
          <div className="mb-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h2 className="text-4xl font-bold mb-8">Our C, C++ & C# Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'System-Level Applications: Operating systems, compilers, and hardware drivers.',
                'Embedded Systems: Smart devices, automotive software, and IoT solutions.',
                'Game Engines and Graphics: High-performance gaming engines and 3D applications.',
                'Scientific Applications: Computationally intensive applications for data analysis.',
                'Financial Systems: High-frequency trading and financial modeling applications.',
                'Enterprise Software: Robust business applications using C# and .NET.',
                'Desktop Applications: Windows applications using WinForms and WPF.',
                'High-Performance Algorithms: Optimized algorithms for aerospace and robotics.'
              ].map((expertise, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                    ✓
                  </div>
                  <span>{expertise}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Makes Wirecto Different */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Makes Wirecto Different?</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Tailored Solutions',
                  description: 'No cookie-cutter software—our solutions are as unique as your challenges.'
                },
                {
                  title: 'Performance First',
                  description: 'Speed and efficiency are woven into every line of code we write.'
                },
                {
                  title: 'Scalable Designs',
                  description: 'Future-proof your systems with code that evolves with your needs.'
                },
                {
                  title: 'Transparent Collaboration',
                  description: 'You\'re not just a client; you\'re a collaborator in shaping the solution.'
                },
                {
                  title: 'Cross-Platform Development',
                  description: 'Build applications that run on Windows, Linux, macOS, and embedded systems.'
                },
                {
                  title: 'Legacy System Modernization',
                  description: 'Modernize and optimize existing C/C++/C# applications.'
                }
              ].map((difference, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{difference.title}</h3>
                    <p className="text-gray-600">{difference.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CCplusplusCsharp;