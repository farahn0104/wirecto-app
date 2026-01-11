import React from 'react';

const Blockchain = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Blockchain Solutions</h1>
                        <p className="text-xl opacity-90">Revolutionize Your Business with Blockchain Technology</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's rapidly evolving digital landscape, businesses are increasingly turning to cutting-edge technologies to enhance transparency, boost security, and improve overall efficiency.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Blockchain technology stands out as a game-changer, offering unprecedented levels of trust and accountability across industries.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/5.png" alt="Blockchain Technology" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* What is Blockchain */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">What is Blockchain?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Transparency',
                                    description: 'Every transaction is visible, ensuring accountability.'
                                },
                                {
                                    title: 'Security',
                                    description: 'Advanced cryptographic techniques protect data from unauthorized access.'
                                },
                                {
                                    title: 'Efficiency',
                                    description: 'Automating processes with smart contracts reduces costs and saves time.'
                                },
                                {
                                    title: 'Decentralization',
                                    description: 'By eliminating intermediaries, it creates a peer-to-peer trust system.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How Blockchain Can Benefit Your Business */}
                    <div className="mb-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">How Blockchain Can Benefit Your Business</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Supply Chain Transparency: Track products from origin to destination with real-time accuracy.',
                                'Secure Transactions: Protect sensitive data in financial and legal agreements.',
                                'Smart Contracts: Automate workflows with self-executing, tamper-proof contracts.',
                                'Identity Management: Enhance security with decentralized identity verification.',
                                'Tokenization: Unlock new revenue streams by digitizing assets.',
                                'Audit Trail: Maintain immutable records for compliance and auditing.'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Wirecto for Blockchain Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto for Blockchain Solutions?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Blockchain Development',
                                    description: 'Create custom blockchain platforms tailored to your needs.'
                                },
                                {
                                    title: 'Smart Contract Implementation',
                                    description: 'Design, deploy, and audit smart contracts for secure automation.'
                                },
                                {
                                    title: 'Blockchain Consulting',
                                    description: 'Understand how blockchain can drive value in your specific industry.'
                                },
                                {
                                    title: 'Integration Services',
                                    description: 'Seamlessly integrate blockchain with your existing systems.'
                                },
                                {
                                    title: 'Ongoing Support',
                                    description: 'Ensure smooth operations with 24/7 technical assistance.'
                                },
                                {
                                    title: 'Industry Expertise',
                                    description: 'Deep knowledge of blockchain applications across sectors.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-green-600 mb-3">{index + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blockchain;