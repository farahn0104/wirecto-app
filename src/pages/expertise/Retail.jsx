import React from 'react';

const Retail = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Retail Software</h1>
                        <p className="text-xl opacity-90">Enhance Your Retail Operations with Smart Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the highly competitive retail industry, where customer expectations are continuously evolving, achieving operational efficiency and exceptional customer satisfaction has become more crucial than ever.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Wirecto's innovative retail software stands out as a comprehensive solution specifically crafted to elevate your business to new heights.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/RETAIL-SOFTWARE.jpg" alt="Retail Software" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Wirecto's Retail Software */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's Retail Software?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Centralized Inventory Management',
                                    description: 'Keep track of products, manage stock levels, and automate reordering to ensure availability.'
                                },
                                {
                                    title: 'Seamless POS Integration',
                                    description: 'Accelerate checkout with user-friendly POS system supporting multiple payment methods.'
                                },
                                {
                                    title: 'Customer-Centric Features',
                                    description: 'Provide loyalty programs, discounts, and personalized recommendations.'
                                },
                                {
                                    title: 'Real-Time Analytics',
                                    description: 'Monitor sales, inventory trends, and customer preferences for data-driven decisions.'
                                },
                                {
                                    title: 'Multi-Store Management',
                                    description: 'Oversee all locations from a single platform and ensure consistent operations.'
                                },
                                {
                                    title: 'Omnichannel Support',
                                    description: 'Integrate online and offline sales channels for unified customer experience.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
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
                                'Point of Sale (POS) System',
                                'Stock & Order Management',
                                'Customer Relationship Management (CRM)',
                                'Sales & Performance Reporting',
                                'Employee Management',
                                'Supplier Management',
                                'Purchase Order Management',
                                'Barcode & Label Printing',
                                'GST & Tax Management',
                                'E-commerce Integration',
                                'Mobile App for Store Managers',
                                'Customer Loyalty Programs'
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                    <span className="text-gray-700">{feature}</span>
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