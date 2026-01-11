import React from 'react';

const Manufacturing = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Manufacturing</h1>
                        <p className="text-xl opacity-90">
                            Transform Your Manufacturing Operations with Smart Solutions
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
                                In the dynamic world of manufacturing, efficiency, precision, and innovation are key to staying competitive. Wirecto provides comprehensive manufacturing solutions that help businesses optimize their production processes, reduce costs, and improve quality.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Our advanced manufacturing software integrates seamlessly with your operations, providing real-time visibility and control over every aspect of your production line.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/manufacturing-solution.png"
                                alt="Manufacturing Solutions"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Key Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Manufacturing Solutions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Production Planning',
                                    description: 'Optimize production schedules and resource allocation for maximum efficiency.',
                                    icon: '📋'
                                },
                                {
                                    title: 'Quality Control',
                                    description: 'Implement rigorous quality checks and maintain consistent product standards.',
                                    icon: '✅'
                                },
                                {
                                    title: 'Inventory Management',
                                    description: 'Track raw materials, work-in-progress, and finished goods in real-time.',
                                    icon: '📦'
                                },
                                {
                                    title: 'Supply Chain Integration',
                                    description: 'Seamlessly connect with suppliers and distributors for smooth operations.',
                                    icon: '🔗'
                                },
                                {
                                    title: 'Predictive Maintenance',
                                    description: 'Reduce downtime with AI-powered equipment maintenance predictions.',
                                    icon: '🔧'
                                },
                                {
                                    title: 'Analytics & Reporting',
                                    description: 'Gain insights into production performance and identify improvement areas.',
                                    icon: '📊'
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="text-4xl mb-4">{solution.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Benefits for Manufacturers</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Increased production efficiency by up to 40%',
                                'Reduced operational costs through optimized resource utilization',
                                'Improved product quality and consistency',
                                'Real-time visibility across the manufacturing floor',
                                'Better compliance with industry standards and regulations',
                                'Enhanced supply chain coordination and collaboration',
                                'Reduced waste and improved sustainability',
                                'Scalable solutions that grow with your business'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-lg text-gray-700">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Industry Focus */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Industries We Serve</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                'Automotive',
                                'Electronics',
                                'Pharmaceuticals',
                                'Food & Beverage',
                                'Textiles',
                                'Chemicals',
                                'Aerospace',
                                'Consumer Goods'
                            ].map((industry, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                    <div className="text-3xl mb-3">🏭</div>
                                    <h3 className="font-bold text-gray-800">{industry}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manufacturing;