import React from 'react';

const DevOpsServices = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">DevOps Services</h1>
            <p className="text-xl opacity-90">Top-Notch DevOps Services for Agile and Efficient IT Operations</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                At Wirecto, we offer comprehensive DevOps services designed to help your business streamline operations, enhance collaboration, and accelerate the delivery of high-quality software.
              </p>
              <p className="text-gray-600 text-lg">
                By leveraging the power of automation, continuous integration, and a culture of collaboration, we help you create a more agile and efficient IT environment that aligns with your business goals.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/Service-2.jpg" alt="DevOps Services" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* What is DevOps */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">What is DevOps?</h2>
            <p className="text-gray-600 text-lg">
              DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide high-quality software continuously. By promoting collaboration between developers and IT teams, DevOps enables faster, more reliable product releases.
            </p>
          </div>

          {/* Our DevOps Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our DevOps Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'CI/CD Pipelines', desc: 'Build and maintain automated pipelines for faster releases' },
                { title: 'Cloud Migration', desc: 'Seamlessly migrate infrastructure to cloud platforms' },
                { title: 'Automation', desc: 'Automate key processes using Ansible, Puppet, Chef' },
                { title: 'Monitoring & Logging', desc: 'Proactive monitoring for maximum uptime' },
                { title: 'Infrastructure as Code', desc: 'Automate setup and configuration with Terraform' },
                { title: 'Security Integration', desc: 'Implement security throughout the DevOps lifecycle' }
              ].map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Benefits of DevOps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Faster Time to Market',
                'Improved Collaboration',
                'Enhanced Reliability',
                'Scalability & Flexibility',
                'Cost Efficiency',
                'Better Quality Software'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ✓
                  </div>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServices;