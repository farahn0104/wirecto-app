import React from 'react';

const Dubai = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Dubai Office</h1>
            <p className="text-xl opacity-90">Wirecto Technologies Middle East</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Dubai Media City Office</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Wirecto Technologies Middle East<br />
                    Dubai Media City<br />
                    Building 8, Office 204<br />
                    Dubai, UAE
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +971 4 234 5678<br />
                    <strong>Email:</strong> dubai@wireto.com<br />
                    <strong>Media:</strong> media@wireto.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Sunday - Thursday: 8:00 AM - 6:00 PM GST<br />
                    Friday: 9:00 AM - 1:00 PM GST<br />
                    Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="h-96 bg-gray-200 rounded-2xl mb-6">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏙️</div>
                    <p className="text-gray-700">Dubai Media City Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Media & Entertainment',
                  description: 'Solutions for media companies and broadcasters'
                },
                {
                  title: 'Hospitality Technology',
                  description: 'Hotel management and tourism solutions'
                },
                {
                  title: 'Retail Technology',
                  description: 'Point of sale and retail management systems'
                },
                {
                  title: 'Real Estate Tech',
                  description: 'Property management and real estate platforms'
                },
                {
                  title: 'Financial Technology',
                  description: 'Fintech solutions for the Middle East market'
                },
                {
                  title: 'Government Solutions',
                  description: 'Digital transformation for government entities'
                }
              ].map((spec, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{spec.title}</h3>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dubai;