import React from 'react';

const Pharma = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Pharmacy Software</h1>
                        <p className="text-xl opacity-90">Transform Your Pharmacy Operations</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                Managing a pharmacy is no small feat; it demands a delicate balance between providing exceptional customer care, efficiently handling inventory, and adhering to stringent regulatory guidelines.
                            </p>
                            <p className="text-gray-600 text-lg">
                                As the heart of community healthcare, pharmacies must deliver timely and accurate services to meet the needs of their patients effectively. This is where Wirecto's pharmacy software steps in.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/pharmecy-software.jpg" alt="Pharmacy Software" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Efficient Features */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Efficient Pharmacy Management</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Prescription Management',
                                    description: 'Process prescriptions quickly and accurately to reduce errors and enhance patient safety.'
                                },
                                {
                                    title: 'Inventory Control',
                                    description: 'Monitor medications and supplies to ensure you never run out of stock while effectively managing expiry dates.'
                                },
                                {
                                    title: 'Regulatory Compliance',
                                    description: 'Adhere to industry standards and regulations by maintaining proper documentation and audit trails.'
                                },
                                {
                                    title: 'Customer Management',
                                    description: 'Manage patient profiles, track prescriptions, and provide personalized services.'
                                },
                                {
                                    title: 'Real-Time Data Access',
                                    description: 'Access and update medication and inventory data in real-time from any location.'
                                },
                                {
                                    title: 'Insurance Processing',
                                    description: 'Streamline insurance claims processing and verification.'
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Prescription Tracking',
                                    description: 'Easily monitor and manage prescriptions from receipt to fulfillment.'
                                },
                                {
                                    title: 'Automated Reordering',
                                    description: 'Automate stock replenishment based on usage patterns.'
                                },
                                {
                                    title: 'Pharmacy Point of Sale (POS)',
                                    description: 'Process transactions quickly with integrated POS systems.'
                                },
                                {
                                    title: 'Compliance & Reporting',
                                    description: 'Built-in reports for audits and controlled substances.'
                                },
                                {
                                    title: 'Customer Loyalty Programs',
                                    description: 'Design and manage loyalty programs to encourage repeat business.'
                                },
                                {
                                    title: 'Mobile Integration',
                                    description: 'Enable customers to access prescriptions through a mobile app.'
                                },
                                {
                                    title: 'Drug Interaction Alerts',
                                    description: 'Alert pharmacists to potential drug interactions.'
                                },
                                {
                                    title: 'Expiry Management',
                                    description: 'Track and manage medication expiry dates effectively.'
                                },
                                {
                                    title: 'Multi-Branch Support',
                                    description: 'Manage multiple pharmacy locations from a single system.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6">
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

export default Pharma;