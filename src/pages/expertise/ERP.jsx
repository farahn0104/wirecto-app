import React from 'react';

const ERP = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">ERP Software</h1>
                        <p className="text-xl opacity-90">Optimize Your Business Operations with Enterprise Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's fast-paced business environment, staying ahead of the competition is not just a goal; it's a necessity. Wirecto's ERP software stands as the ultimate solution, designed to integrate and optimize every aspect of your operations seamlessly.
                            </p>
                            <p className="text-gray-600 text-lg">
                                This powerful software allows you to take complete control of your finances, providing real-time insights that enable informed decision-making.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/CLOUD-ERP-1.jpg" alt="ERP Software" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Reasons to Choose Wirecto's ERP Software */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Reasons to Choose Wirecto's ERP Software</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Unified Platform',
                                    description: 'Break down department silos by connecting teams and streamlining workflows.'
                                },
                                {
                                    title: 'Scalable Solutions',
                                    description: 'Whether you\'re a startup or an established enterprise, our ERP system grows with your business.'
                                },
                                {
                                    title: 'Real-Time Insights',
                                    description: 'Make smarter decisions with accurate data available at your fingertips.'
                                },
                                {
                                    title: 'Customizable Modules',
                                    description: 'Tailor the ERP system to meet the unique demands of your industry.'
                                },
                                {
                                    title: 'Cloud & On-Premise Options',
                                    description: 'Choose the deployment method that suits your business model.'
                                },
                                {
                                    title: 'Mobile Accessibility',
                                    description: 'Access your ERP system from anywhere using mobile devices.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Core Features */}
                    <div className="mb-16 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Core Features</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Finance & Accounting',
                                    description: 'Simplify budgeting, forecasting, and compliance with automated tools.'
                                },
                                {
                                    title: 'Inventory & Supply Chain',
                                    description: 'Ensure smooth operations through real-time tracking and optimization.'
                                },
                                {
                                    title: 'Human Resources',
                                    description: 'Streamline recruitment, payroll, and employee performance tracking.'
                                },
                                {
                                    title: 'Sales & CRM Integration',
                                    description: 'Strengthen customer relationships and drive revenue growth.'
                                },
                                {
                                    title: 'Manufacturing',
                                    description: 'Production planning, quality control, and shop floor management.'
                                },
                                {
                                    title: 'Project Management',
                                    description: 'Plan, execute, and monitor projects efficiently.'
                                },
                                {
                                    title: 'Business Intelligence',
                                    description: 'Advanced analytics and reporting for strategic decisions.'
                                },
                                {
                                    title: 'Compliance Management',
                                    description: 'Ensure regulatory compliance across all operations.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-3 mt-1">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
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

export default ERP;