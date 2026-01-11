import React from 'react';

const Advertising = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Advertising</h1>
                        <p className="text-xl opacity-90">Transforming Ideas into Impactful Campaigns</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's fast-paced digital world, advertising is more than just promoting a product or service—it's about building connections, driving engagement, and creating memorable experiences.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we understand the power of advertising and its potential to lift brands. Whether you're a startup or an established business, our platform is designed to help you achieve your advertising goals efficiently.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/Adversting.jpg" alt="Advertising" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Wirecto */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto for Your Advertising Needs?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Targeted Solutions',
                                    description: 'Data-driven strategies to reach your perfect audience with precision.'
                                },
                                {
                                    title: 'Cross-Platform Reach',
                                    description: 'Visibility across social media, Google Ads, and other digital platforms.'
                                },
                                {
                                    title: 'Cost-Effective Campaigns',
                                    description: 'Maximum ROI with campaigns tailored to your budget.'
                                },
                                {
                                    title: 'Creative Excellence',
                                    description: 'Eye-catching designs and strategies that captivate your audience.'
                                },
                                {
                                    title: 'Real-Time Analytics',
                                    description: 'Advanced analytics tools to track performance and refine strategies.'
                                },
                                {
                                    title: 'Multi-Channel Integration',
                                    description: 'Cohesive campaigns that amplify your message across all touchpoints.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advertising Services */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Advertising Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Digital Advertising',
                                'Content Marketing',
                                'Influencer Marketing',
                                'Programmatic Advertising',
                                'Traditional Advertising',
                                'Social Media Marketing',
                                'Search Engine Marketing',
                                'Video Advertising',
                                'Brand Strategy'
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center">
                                    <div className="text-4xl font-bold text-primary mb-3">
                                        {index === 0 && '🎯'}
                                        {index === 1 && '📝'}
                                        {index === 2 && '🌟'}
                                        {index === 3 && '🤖'}
                                        {index === 4 && '📺'}
                                        {index === 5 && '📱'}
                                        {index === 6 && '🔍'}
                                        {index === 7 && '🎬'}
                                        {index === 8 && '🏢'}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{service}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Advertising;