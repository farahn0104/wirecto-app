import React from 'react';

const UAE = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">UAE Office</h1>
            <p className="text-xl opacity-90">Wirecto Technologies FZ-LLC</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Dubai Internet City Office</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Address</h3>
                  <p className="text-gray-600">
                    Wirecto Technologies FZ-LLC<br />
                    Dubai Internet City<br />
                    Building 12, Office 301<br />
                    Dubai, UAE
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +971 4 123 4567<br />
                    <strong>Email:</strong> uae@wireto.com<br />
                    <strong>Sales:</strong> sales.uae@wireto.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Sunday - Thursday: 8:00 AM - 6:00 PM GST<br />
                    Friday - Saturday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <div className="h-96 bg-gray-200 rounded-2xl mb-6">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🇦🇪</div>
                    <p className="text-gray-700">Dubai, UAE Location</p>
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

export default UAE;