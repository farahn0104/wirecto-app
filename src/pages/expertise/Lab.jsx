import React from 'react';

const Lab = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Lab Software</h1>
                        <p className="text-xl opacity-90">Streamline Laboratory Operations with Precision</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the fast-paced world of scientific research and experimentation, the importance of efficiency, accuracy, and organization in a laboratory environment cannot be overstated.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Wirecto's lab software embodies this vision, offering an innovative solution that transforms the way laboratories operate. Designed to help you manage, automate, and optimize every facet of your laboratory processes.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/Lab-software.jpg" alt="Lab Software" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Reasons to Choose Wirecto's Lab Software */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Reasons to Choose Wirecto's Lab Software</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Real-Time Data Tracking',
                                    description: 'Monitor and access lab data in real-time to ensure accurate results and immediate insights.'
                                },
                                {
                                    title: 'Seamless Integration',
                                    description: 'Easily integrate with your existing instruments, databases, and equipment.'
                                },
                                {
                                    title: 'Compliance Management',
                                    description: 'Maintain compliance with industry standards, regulations, and best practices.'
                                },
                                {
                                    title: 'Customizable Modules',
                                    description: 'Adapt the software to meet the unique needs of your lab.'
                                },
                                {
                                    title: 'Cloud Access',
                                    description: 'Securely store data in the cloud and access it from anywhere.'
                                },
                                {
                                    title: 'Data Security',
                                    description: 'Advanced security measures to protect sensitive laboratory data.'
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Sample & Test Management',
                                    description: 'Track samples from collection through testing, analysis, and reporting.'
                                },
                                {
                                    title: 'Automated Reporting',
                                    description: 'Generate customized reports with minimal effort, saving time and reducing errors.'
                                },
                                {
                                    title: 'Data Integrity & Security',
                                    description: 'Protect lab data with advanced encryption and user access controls.'
                                },
                                {
                                    title: 'Inventory Management',
                                    description: 'Monitor lab supplies, reagents, and equipment to reduce waste.'
                                },
                                {
                                    title: 'Collaboration Tools',
                                    description: 'Facilitate seamless communication between teams with shared data access.'
                                },
                                {
                                    title: 'Quality Control',
                                    description: 'Implement quality control protocols and track QC data.'
                                },
                                {
                                    title: 'Instrument Integration',
                                    description: 'Connect with laboratory instruments for automated data capture.'
                                },
                                {
                                    title: 'Workflow Management',
                                    description: 'Streamline laboratory workflows and processes.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        ✓
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
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

export default Lab;