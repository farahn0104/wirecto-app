import React from 'react';

const Qatar = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Qatar Office</h1>
            <p className="text-xl opacity-90">Wirecto Technologies Qatar W.L.L.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Middle East Office</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Wirecto Technologies Qatar W.L.L.<br />
                    West Bay, Doha<br />
                    Qatar Financial Centre<br />
                    Doha, Qatar
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +974 1234 5678<br />
                    <strong>Email:</strong> qatar@wireto.com<br />
                    <strong>Support:</strong> support.qa@wireto.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Sunday - Thursday: 8:00 AM - 4:00 PM AST<br />
                    Friday - Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="h-96 bg-gray-200 rounded-2xl mb-6">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🇶🇦</div>
                    <p className="text-gray-700">Doha, Qatar Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Qatar;