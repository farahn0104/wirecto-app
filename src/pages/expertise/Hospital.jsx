import React from 'react';
import { Link } from 'react-router-dom'

const Hospital = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hospital Software</h1>
                        <p className="text-xl opacity-90">
                            Revolutionize healthcare with advanced hospital management solutions
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the fast-paced healthcare sector, precision and efficiency are essential. Wirecto's hospital software is the ultimate solution to streamline operations, enhance patient care, and empower your medical team with technology that truly delivers.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Our comprehensive platform simplifies administrative tasks such as patient registration, appointment scheduling, billing, and reporting. With user-friendly interfaces and real-time data insights, Wirecto enables healthcare professionals to prioritize what truly matters: saving lives.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/HOSPITAL-SOFTWARE-1.jpg"
                                alt="Hospital Management Software"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Why Choose Wirecto */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Seamless Integration',
                                    description: 'Works effortlessly with existing hospital systems.'
                                },
                                {
                                    title: 'Enhanced Patient Experience',
                                    description: 'We provide accessible and efficient healthcare services, from online appointment booking to digital medical records.'
                                },
                                {
                                    title: 'Data Security',
                                    description: 'Our state-of-the-art encryption ensures compliance with global health regulations.'
                                },
                                {
                                    title: 'Scalable Solutions',
                                    description: 'Our software adapts to your needs, whether you’re a small clinic or a large hospital.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-primary mb-4">{index + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Patient Management System',
                                'Appointment Scheduling',
                                'Electronic Health Records (EHR)',
                                'Billing & Insurance Processing',
                                'Pharmacy Management',
                                'Laboratory Integration',
                                'Inventory Management',
                                'Doctor & Staff Management',
                                'Reporting & Analytics',
                                'Telemedicine Integration',
                                'Emergency Management',
                                'Multi-Branch Support'
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span className="text-gray-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Join the Healthcare Revolution</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
                            Together, let's make healthcare smarter, faster, and better! Contact us today for a demo or consultation!
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Get a Free Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hospital;