import React from 'react';

const Microsoft = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Microsoft Solutions</h1>
                        <p className="text-xl opacity-90">Enhance Your Business with Microsoft Technologies</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the fast-paced landscape of digital transformation, businesses must equip themselves with robust tools that foster agility, spur innovation, and maintain a competitive edge.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Microsoft stands at the forefront of this technological revolution, offering a comprehensive suite of state-of-the-art solutions tailored to meet the diverse needs of modern organizations.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/4.png" alt="Microsoft Solutions" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Microsoft */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Microsoft?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Microsoft 365',
                                    description: 'Enhance productivity with applications like Word, Excel, Teams, and SharePoint, all powered by the cloud.'
                                },
                                {
                                    title: 'Azure Cloud Services',
                                    description: 'Build, manage, and deploy applications on a secure, scalable global cloud platform.'
                                },
                                {
                                    title: 'Power Platform',
                                    description: 'Accelerate innovation with low-code tools such as Power BI, Power Automate, and Power Apps.'
                                },
                                {
                                    title: 'Windows Ecosystem',
                                    description: 'Ensure seamless and secure workflows with Windows OS and enterprise-grade tools.'
                                },
                                {
                                    title: 'Cybersecurity Solutions',
                                    description: 'Protect your business with industry-leading security frameworks and compliance tools.'
                                },
                                {
                                    title: 'Dynamics 365',
                                    description: 'Unify your business applications with CRM and ERP solutions.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How Wirecto Enhances Your Microsoft Investment */}
                    <div className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">How Wirecto Enhances Your Microsoft Investment</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Microsoft 365 Integration: Enhance your workflows with seamless integration of applications.',
                                'Azure Cloud Deployment: Revolutionize your IT infrastructure with scalable cloud solutions.',
                                'Data Analytics with Power BI: Transform raw data into actionable insights.',
                                'Custom Solutions: Adapt Microsoft products to fit your unique business needs.',
                                'Ongoing Support: Benefit from 24/7 assistance to ensure your systems run smoothly.',
                                'Security Implementation: Implement and manage Microsoft security solutions.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Microsoft;