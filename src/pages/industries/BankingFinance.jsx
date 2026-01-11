import React from 'react';

const BankingFinance = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Banking & Finance</h1>
                        <p className="text-xl opacity-90">Empowering Your Financial Journey</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's ever-evolving financial landscape, managing your money effectively has never been more critical. At Wirecto, we aim to simplify the complexities of banking and finance by offering innovative tools, expert insights, and tailored solutions.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Whether you're an individual seeking personal financial growth or a business looking to optimize your financial operations, Wirecto is your trusted partner every step of the way.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/Banking-Finance.jpg" alt="Banking & Finance" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Services Offered */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">What We Offer at Wirecto Banking & Finance Services</h2>

                        <div className="space-y-8">
                            {[
                                {
                                    title: 'Personal Finance Solutions',
                                    items: ['Savings & Checking Accounts', 'Loans & Credit Access', 'Investment Advice', 'Retirement Planning']
                                },
                                {
                                    title: 'Business Finance Services',
                                    items: ['Commercial Accounts', 'Business Loans', 'Cash Flow Management', 'Trade Finance']
                                },
                                {
                                    title: 'Digital Banking Solutions',
                                    items: ['Online Banking', 'Mobile Apps', 'Payment Gateways', 'Digital Wallets']
                                },
                                {
                                    title: 'Wealth Management',
                                    items: ['Wealth Building Strategies', 'Tax Optimization', 'Risk Management', 'Insurance Services']
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {service.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="flex items-center">
                                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                                <span className="text-gray-600">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Digital Transformation */}
                    <div className="mb-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">The Role of Digital Transformation in Banking & Finance</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Artificial Intelligence for personalized financial advice',
                                'Blockchain Technology for secure transactions',
                                'Mobile Banking for 24/7 access',
                                'Data Analytics for real-time insights',
                                'Robotic Process Automation',
                                'Cybersecurity Solutions'
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BankingFinance;