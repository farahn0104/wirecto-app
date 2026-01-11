import React from 'react';

const MLM = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">MLM Software</h1>
                        <p className="text-xl opacity-90">Empower Your Network with Multi-Level Marketing Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the dynamic world of network marketing, establishing strong relationships and creating lucrative opportunities is key to success. Wirecto's innovative MLM software is your ultimate partner in navigating this landscape.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Designed with user-friendliness in mind, our software streamlines the complexities of managing your multi-level marketing business, making it a breeze to oversee your distributors and track their performance.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/MLM-SOFTWARE.jpg" alt="MLM Software" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Wirecto's MLM Software */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's MLM Software?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Comprehensive Commission Tracking',
                                    description: 'Automatically calculate commissions and bonuses based on custom compensation plans.'
                                },
                                {
                                    title: 'Easy Distributor Management',
                                    description: 'Manage your network, track recruitment, and monitor performance from one platform.'
                                },
                                {
                                    title: 'Real-Time Analytics',
                                    description: 'Gain actionable insights into sales, growth patterns, and distributor performance.'
                                },
                                {
                                    title: 'Seamless Integration',
                                    description: 'Integrates with existing systems like payment gateways and CRM tools.'
                                },
                                {
                                    title: 'Scalable Solution',
                                    description: 'Whether you have a small team or a global network, our software grows with your business.'
                                },
                                {
                                    title: 'Mobile Accessibility',
                                    description: 'Distributors can access their dashboard and track performance on mobile devices.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Custom Compensation Plans',
                                    description: 'Create flexible compensation structures including direct sales, bonuses, and residual income.'
                                },
                                {
                                    title: 'Distributor Portals',
                                    description: 'Provide personalized dashboards to track sales, commissions, and team performance.'
                                },
                                {
                                    title: 'Automated Payments',
                                    description: 'Simplify payments with automatic commission calculations and secure transactions.'
                                },
                                {
                                    title: 'Genealogy Tracking',
                                    description: 'Visualize and track the structure of your downline for efficient network management.'
                                },
                                {
                                    title: 'Marketing Tools',
                                    description: 'Empower distributors with tools for lead generation and sales tracking.'
                                },
                                {
                                    title: 'Inventory Management',
                                    description: 'Track product inventory and manage orders efficiently.'
                                },
                                {
                                    title: 'E-commerce Integration',
                                    description: 'Seamlessly integrate with online stores for product sales.'
                                },
                                {
                                    title: 'Performance Reports',
                                    description: 'Generate detailed reports on individual and team performance.'
                                },
                                {
                                    title: 'Training & Support',
                                    description: 'Provide training materials and support resources for your distributors.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MLM;