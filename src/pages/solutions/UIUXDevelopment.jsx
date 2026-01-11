import React from 'react';

const UIUXDevelopment = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">UI/UX Development</h1>
            <p className="text-xl opacity-90">Creating Exceptional User Experiences</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In the modern digital world, the design of user interfaces (UI) and the overall user experience (UX) have become essential elements for success. A seamless, engaging experience can make all the difference in a user's interaction with your website or app.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we specialize in providing custom UI/UX development services designed to create intuitive, visually appealing, and user-centered digital solutions.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/service-3.jpg" alt="UI/UX Design" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* UI/UX Process */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our UI/UX Development Process</h2>
            <div className="space-y-8">
              {[
                { step: '01', title: 'Research & Discovery', desc: 'Understanding business goals and target audience' },
                { step: '02', title: 'Wireframing & Prototyping', desc: 'Visualizing layout and functionality' },
                { step: '03', title: 'UI Design', desc: 'Creating visual elements and interactive components' },
                { step: '04', title: 'UX Testing', desc: 'Conducting usability tests and gathering feedback' },
                { step: '05', title: 'Implementation', desc: 'Working with developers for seamless integration' },
                { step: '06', title: 'Post-launch Support', desc: 'Monitoring performance and making improvements' }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl mr-6">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
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

export default UIUXDevelopment;