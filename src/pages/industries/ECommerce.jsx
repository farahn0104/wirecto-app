import React from 'react';

const ECommerce = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">eCommerce</h1>
                        <p className="text-xl opacity-90">Redefining Online Retail Success</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                The digital era has revolutionized the way businesses operate, and e-commerce stands at the forefront of this transformation. At Wirecto E-Commerce, we empower businesses to thrive in the competitive online marketplace.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Whether you're an established retailer seeking growth or a budding entrepreneur taking your first steps, Wirecto is your trusted partner for e-commerce excellence.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/ECOMEERCE-2.jpg" alt="eCommerce" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why eCommerce is Essential */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why eCommerce is Essential for Modern Businesses</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Global Reach',
                                    description: 'Break down geographical limitations and access markets worldwide.'
                                },
                                {
                                    title: 'Cost Efficiency',
                                    description: 'Reduce operational costs by automating processes and minimizing physical infrastructure.'
                                },
                                {
                                    title: '24/7 Accessibility',
                                    description: 'Enable customers to shop anytime, anywhere.'
                                },
                                {
                                    title: 'Customer Insights',
                                    description: 'Real-time data analytics help understand consumer behavior.'
                                },
                                {
                                    title: 'Scalability',
                                    description: 'Grow effortlessly by expanding product lines or entering new markets.'
                                },
                                {
                                    title: 'Competitive Advantage',
                                    description: 'Stay ahead in the digital marketplace.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* eCommerce Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our eCommerce Solutions</h2>

                        <div className="space-y-8">
                            {[
                                {
                                    title: 'Custom Online Store Development',
                                    features: ['Tailored Designs', 'Mobile-Friendly Interfaces', 'Feature Integration']
                                },
                                {
                                    title: 'Digital Marketing Strategies',
                                    features: ['Search Engine Optimization', 'Social Media Marketing', 'PPC Campaigns']
                                },
                                {
                                    title: 'Advanced eCommerce Features',
                                    features: ['AI-Powered Recommendations', 'Multi-Currency Support', 'Real-Time Analytics']
                                },
                                {
                                    title: 'Secure Payment & Logistics',
                                    features: ['Various Payment Methods', 'Reliable Shipping Integrations', 'Inventory Management']
                                },
                                {
                                    title: 'Customer Engagement Tools',
                                    features: ['Live Chat Support', 'Customer Loyalty Programs', 'Feedback Mechanisms']
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{solution.title}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {solution.features.map((feature, featureIndex) => (
                                            <span key={featureIndex} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Trends */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">The Role of Technology in eCommerce</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Mobile Commerce: Mobile-optimized shopping experiences',
                                'Artificial Intelligence: Personalized recommendations and customer service',
                                'Voice Commerce: Voice-enabled shopping assistants',
                                'Augmented Reality: Virtual product visualization',
                                'Blockchain: Secure transactions and supply chain transparency',
                                'Subscription Models: Recurring revenue business models'
                            ].map((trend, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        →
                                    </div>
                                    <span className="text-gray-700">{trend}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ECommerce;