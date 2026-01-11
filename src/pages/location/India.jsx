import React from 'react';

const India = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">India Office</h1>
            <p className="text-xl opacity-90">Wirecto Technologies Private Limited</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Corporate Headquarters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Wirecto Technologies Private Limited<br />
                    C - 49, Triloki Colony<br />
                    New Delhi 110003<br />
                    India
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 11 2345 6789<br />
                    <strong>Email:</strong> info@wiretco.com<br />
                    <strong>Support:</strong> support.in@wireto.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday: 10:00 AM - 2:00 PM IST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="h-96 bg-gray-200 rounded-2xl mb-6">
                {/* Map placeholder - you can add actual map here */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="text-gray-700">C - 49, Triloki Colony New Delhi, India</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-xl">
                  <div className="text-2xl font-bold text-primary mb-2">150+</div>
                  <p className="text-gray-600">Team Members</p>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-xl">
                  <div className="text-2xl font-bold text-accent mb-2">10+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Departments at India Office</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Software Development',
                  description: 'Our largest development center with 100+ developers'
                },
                {
                  title: 'Research & Innovation',
                  description: 'AI/ML research and new technology exploration'
                },
                {
                  title: 'Customer Support',
                  description: '24/7 technical support for Indian clients'
                },
                {
                  title: 'Sales & Marketing',
                  description: 'Business development and client acquisition'
                },
                {
                  title: 'Quality Assurance',
                  description: 'Software testing and quality control'
                },
                {
                  title: 'Training Center',
                  description: 'Employee training and skill development'
                }
              ].map((dept, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{dept.title}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default India;