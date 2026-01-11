import React from 'react';

const CorporateTraining = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Corporate Training</h1>
            <p className="text-xl opacity-90">Empower Your Workforce with Professional Training</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In today's rapidly evolving business landscape, ongoing learning and development are essential for maintaining a competitive edge.
              </p>
              <p className="text-gray-600 text-lg">
                Investing in corporate training is one of the best ways to enhance your workforce's skills, improve productivity, and achieve long-term success.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-5.jpg" alt="Corporate Training" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Training Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Training Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Leadership Development', desc: 'Enhancing management and leadership skills' },
                { title: 'Technical Skills', desc: 'Latest technologies and tools training' },
                { title: 'Soft Skills', desc: 'Communication, teamwork, and interpersonal skills' },
                { title: 'Sales & Marketing', desc: 'Strategies for business growth and revenue' },
                { title: 'Compliance Training', desc: 'Regulatory and safety compliance' },
                { title: 'Team Building', desc: 'Activities to enhance collaboration' }
              ].map((program, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{program.title}</h3>
                    <p className="text-gray-600">{program.desc}</p>
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

export default CorporateTraining;