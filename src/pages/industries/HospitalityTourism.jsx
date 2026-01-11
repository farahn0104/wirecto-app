import React from 'react';

const HospitalityTourism = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hospitality & Tourism</h1>
                        <p className="text-xl opacity-90">Crafting Memorable Experiences for Every Traveler</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's competitive hospitality and tourism industry, providing exceptional experiences is more important than ever. At Wirecto, we specialize in delivering innovative and customer-centric solutions that drive growth and sustainability.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Whether you're managing a hotel, a travel agency, a resort, or an event, our tailored services will help you meet the demands of today's savvy travelers while ensuring operational efficiency and profitability.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/HOSPILITY-TOURISIM.jpg" alt="Hospitality & Tourism" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Comprehensive Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive Hospitality & Tourism Solutions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Hotel & Resort Management',
                                    description: 'Property management systems, reservation platforms, and customer service training.'
                                },
                                {
                                    title: 'Travel Agency Solutions',
                                    description: 'Integrated booking platforms, tour management, and customer support.'
                                },
                                {
                                    title: 'Event Planning & Management',
                                    description: 'End-to-end event planning from conceptualization to execution.'
                                },
                                {
                                    title: 'Destination Marketing',
                                    description: 'Targeted marketing strategies and social media initiatives.'
                                },
                                {
                                    title: 'Customer Experience Excellence',
                                    description: 'Training and consulting to enhance customer interactions.'
                                },
                                {
                                    title: 'Revenue Management',
                                    description: 'Optimizing pricing and revenue streams across all channels.'
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Integration */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Leveraging Technology in Hospitality & Tourism</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Mobile App Development',
                                    description: 'Custom mobile apps for guest engagement and booking services.'
                                },
                                {
                                    title: 'Property Management Systems',
                                    description: 'Advanced PMS for seamless hotel operations.'
                                },
                                {
                                    title: 'Online Booking Platforms',
                                    description: 'Secure, user-friendly booking systems for all devices.'
                                },
                                {
                                    title: 'Data Analytics & Business Intelligence',
                                    description: 'Insights into customer trends and booking patterns.'
                                },
                                {
                                    title: 'Smart Hotel Technologies',
                                    description: 'Smart room controls and automated check-in systems.'
                                }
                            ].map((tech, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{tech.title}</h3>
                                        <p className="text-gray-600">{tech.description}</p>
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

export default HospitalityTourism;