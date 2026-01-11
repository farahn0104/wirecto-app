import React from 'react';

const RealEstateConstruction = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Real Estate & Construction</h1>
                        <p className="text-xl opacity-90">Transforming Spaces, Building Futures</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                The real estate and construction industry is the backbone of economic development and urban transformation. With rapid urbanization and evolving architectural trends, this sector is pivotal in shaping modern lifestyles, commercial spaces, and sustainable environments.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we pride ourselves on delivering excellence, innovation, and integrity in every project we undertake. Whether it's residential, commercial, or infrastructural development, our expertise ensures unmatched quality and value.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/real-state-constrution.jpg"
                                alt="Real Estate & Construction"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Comprehensive Real Estate Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive Real Estate Solutions</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Real estate is more than just buying or selling properties; it's about creating spaces that inspire and sustain life. We offer a comprehensive array of real estate services tailored to address the varied needs of our clients.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            {[
                                {
                                    title: 'Residential Spaces',
                                    description: 'We specialize in creating homes that blend comfort and aesthetics. Whether you\'re looking for luxury apartments or affordable housing, our projects cater to various budgets and preferences.'
                                },
                                {
                                    title: 'Commercial Real Estate',
                                    description: 'Our commercial properties are designed with businesses in mind, offering premium office spaces, retail outlets, and industrial parks that enhance productivity and brand value.'
                                },
                                {
                                    title: 'Property Management',
                                    description: 'Beyond construction, we provide end-to-end property management solutions, ensuring the upkeep and appreciation of your investments.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Construction Services */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Construction Services That Set Benchmarks</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Construction is the heart of our operations. With a team of seasoned architects, engineers, and project managers, we bring visions to life with precision and expertise.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Custom Construction',
                                    description: 'Tailored solutions for bespoke needs, including interior design, renovations, and customized builds.'
                                },
                                {
                                    title: 'Sustainable Practices',
                                    description: 'We integrate eco-friendly practices in every project, focusing on renewable materials, energy efficiency, and waste management.'
                                },
                                {
                                    title: 'Smart Technology Integration',
                                    description: 'Our constructions feature smart systems for lighting, security, and climate control, ensuring convenience and sustainability.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Innovations */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Innovations Driving the Industry</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            The real estate and construction industries are undergoing swift transformations, fueled by technological innovations and shifting consumer demands.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                            {[
                                'Green Building Technologies',
                                'Smart Cities Initiatives',
                                'Prefabrication and Modular Construction',
                                'Building Information Modeling (BIM)',
                                'Augmented Reality Visualization',
                                'Sustainable Material Innovations'
                            ].map((innovation, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">{innovation}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Proven Expertise',
                                    description: 'Years of experience delivering exceptional projects'
                                },
                                {
                                    title: 'Customer-Centric',
                                    description: 'Collaborative approach with client-focused solutions'
                                },
                                {
                                    title: 'Transparency',
                                    description: 'Complete transparency in processes and costs'
                                },
                                {
                                    title: 'Timely Delivery',
                                    description: 'On-time project completion without compromising quality'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RealEstateConstruction;