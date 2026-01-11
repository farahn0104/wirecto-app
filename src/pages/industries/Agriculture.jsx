import React from 'react';

const Agriculture = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Agriculture</h1>
                        <p className="text-xl opacity-90">Empowering the Future of Farming</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                Agriculture is the backbone of the global economy, feeding billions and supporting countless livelihoods. At Wirecto Agriculture, we're committed to driving innovation, sustainability, and efficiency in the agricultural sector.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Whether you're a small-scale farmer, an agribusiness, or an enthusiast exploring modern agriculture techniques, we provide the tools, insights, and resources you need to succeed.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/agriculture.jpg" alt="Agriculture" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Agricultural Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Agricultural Solutions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Smart Farming Technologies',
                                    items: ['Precision Agriculture', 'IoT-Enabled Equipment', 'Drone Technology', 'Sensor Networks']
                                },
                                {
                                    title: 'Sustainable Practices',
                                    items: ['Organic Farming Support', 'Water Conservation', 'Soil Health Management', 'Crop Rotation']
                                },
                                {
                                    title: 'Agribusiness Development',
                                    items: ['Farm-to-Market Solutions', 'Financial Support', 'Training & Workshops', 'Market Access']
                                },
                                {
                                    title: 'Crop & Livestock Management',
                                    items: ['Disease Prevention', 'Yield Maximization', 'Diversification Strategies', 'Quality Control']
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                                    <div className="space-y-2">
                                        {solution.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center">
                                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                                <span className="text-gray-600">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology in Agriculture */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">The Role of Technology in Modern Agriculture</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Precision Agriculture: Real-time monitoring of soil and crop conditions',
                                'Drones and Robotics: Automation of planting, harvesting, and spraying',
                                'Blockchain: Transparency in food supply chains',
                                'IoT Devices: Sensors for field monitoring and storage conditions',
                                'AI Analytics: Predictive analytics for crop yield and disease detection',
                                'Mobile Apps: Access to weather forecasts, market prices, and farming resources'
                            ].map((tech, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <span className="text-gray-700">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sustainability */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Sustainable Agriculture for the Future</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Efficient Resource Use with water-saving irrigation',
                                'Eco-Friendly Practices like cover cropping',
                                'Biodiversity Conservation through native species planting',
                                'Waste Management with composting and bioenergy',
                                'Climate Resilience strategies',
                                'Carbon Farming techniques'
                            ].map((practice, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl mb-3">
                                        {index === 0 && '💧'}
                                        {index === 1 && '🌱'}
                                        {index === 2 && '🦋'}
                                        {index === 3 && '♻️'}
                                        {index === 4 && '🌍'}
                                        {index === 5 && '🌳'}
                                    </div>
                                    <span className="font-semibold text-gray-700">{practice}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Agriculture;