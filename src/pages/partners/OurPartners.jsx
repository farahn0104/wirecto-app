import React from 'react';
import { Link } from 'react-router-dom';

const OurPartners = () => {
    const partners = [
        { name: 'Microsoft', logo: '🤝', category: 'Technology Partner' },
        { name: 'AWS', logo: '☁️', category: 'Cloud Partner' },
        { name: 'Google Cloud', logo: '🔷', category: 'Cloud Partner' },
        { name: 'Salesforce', logo: '⚡', category: 'CRM Partner' },
        { name: 'Oracle', logo: '🗄️', category: 'Database Partner' },
        { name: 'SAP', logo: '📊', category: 'Enterprise Partner' },
        { name: 'IBM', logo: '💻', category: 'Technology Partner' },
        { name: 'Adobe', logo: '🎨', category: 'Creative Partner' },
        { name: 'Intel', logo: '⚡', category: 'Hardware Partner' },
        { name: 'Dell', logo: '💻', category: 'Infrastructure Partner' },
        { name: 'Cisco', logo: '🌐', category: 'Networking Partner' },
        { name: 'HP', logo: '🖨️', category: 'Hardware Partner' }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Partners</h1>
                        <p className="text-xl opacity-90">
                            Collaborating with Industry Leaders to Deliver Excellence
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Strategic Partnerships for Success</h2>
                        <p className="text-gray-600 text-lg mb-6 text-center">
                            At Wirecto, we believe that strong partnerships are the foundation of exceptional service delivery. Our collaborations with industry leaders enable us to provide cutting-edge solutions and comprehensive support to our clients.
                        </p>
                    </div>

                    {/* Partners Grid */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Technology Partners</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {partners.map((partner, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                                    <div className="text-5xl mb-4">{partner.logo}</div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h4>
                                    <span className="text-sm text-primary font-semibold">{partner.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partnership Benefits */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Benefits of Partnering with Wirecto</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Technology Access',
                                    description: 'Gain access to cutting-edge technologies and platforms through our partnerships.'
                                },
                                {
                                    title: 'Expert Support',
                                    description: 'Receive expert guidance and support from certified professionals.'
                                },
                                {
                                    title: 'Cost Efficiency',
                                    description: 'Leverage our partnerships for cost-effective solutions and licensing.'
                                },
                                {
                                    title: 'Innovation',
                                    description: 'Stay ahead with the latest innovations and updates from technology leaders.'
                                },
                                {
                                    title: 'Training & Certification',
                                    description: 'Access comprehensive training and certification programs.'
                                },
                                {
                                    title: 'Global Standards',
                                    description: 'Benefit from solutions that meet global industry standards and compliance.'
                                }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h4>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Partner Programs */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Partner Programs</h3>

                        <div className="space-y-6">
                            {[
                                {
                                    level: 'Platinum Partner',
                                    benefits: ['Highest level of partnership', 'Exclusive access to beta programs', 'Dedicated account management', 'Joint marketing initiatives']
                                },
                                {
                                    level: 'Gold Partner',
                                    benefits: ['Priority technical support', 'Advanced training access', 'Co-selling opportunities', 'Regular business reviews']
                                },
                                {
                                    level: 'Silver Partner',
                                    benefits: ['Standard technical support', 'Basic training access', 'Marketing materials', 'Partner portal access']
                                }
                            ].map((program, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-2xl font-bold text-gray-800">{program.level}</h4>
                                        <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                                            Level {index + 1}
                                        </span>
                                    </div>
                                    <ul className="space-y-2">
                                        {program.benefits.map((benefit, benefitIndex) => (
                                            <li key={benefitIndex} className="flex items-center">
                                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                                <span className="text-gray-600">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Become a Wirecto Partner</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
                            Join our growing network of partners and unlock new business opportunities. Together, we can deliver exceptional value to clients and drive mutual success.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Apply for Partnership
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
                            >
                                Request Information
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurPartners;