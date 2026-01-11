import React from 'react';

const Retail = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Retail Solutions</h1>
                        <p className="text-xl opacity-90">Empowering Businesses to Thrive</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's dynamic retail environment, maintaining a competitive edge demands creativity and a strong focus on customer needs. At Wirecto, we specialize in providing comprehensive retail services that enable businesses to grow, adapt, and succeed.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Whether you're an emerging entrepreneur or an established brand, our expertise and resources are designed to transform your retail vision into a thriving reality.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/retail.jpg" alt="Retail Solutions" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Tailored Retail Services */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Tailored Retail Services for Every Business Need</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Retail Space Development',
                                    description: 'Well-designed, strategically located spaces that maximize footfall and boost sales potential.'
                                },
                                {
                                    title: 'Store Design & Layout',
                                    description: 'Layouts that enhance customer flow and optimize product display.'
                                },
                                {
                                    title: 'Franchise Support',
                                    description: 'End-to-end assistance in setting up franchise outlets.'
                                },
                                {
                                    title: 'Market Research',
                                    description: 'Deep insights into target audience, competitors, and market trends.'
                                },
                                {
                                    title: 'Strategic Planning',
                                    description: 'Roadmaps for success with clear goals and actionable steps.'
                                },
                                {
                                    title: 'Operations Support',
                                    description: 'Expertise in inventory management, staff training, and day-to-day operations.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Innovations in Retail */}
                    <div className="mb-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Innovations in Retail</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Omnichannel Retailing',
                                'Personalization at Scale',
                                'Automation and AI',
                                'Augmented Reality Shopping',
                                'Contactless Payments',
                                'Sustainable Retail Practices'
                            ].map((innovation, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-lg">{innovation}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Retail;