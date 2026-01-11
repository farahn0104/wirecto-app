import React from 'react';

const AWS = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">AWS Cloud</h1>
                        <p className="text-xl opacity-90">Ignite Your Innovation with Cloud Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's rapidly evolving digital landscape, businesses face the pressing need to adapt swiftly to maintain a competitive edge.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Amazon Web Services (AWS), the world's leading cloud computing platform, provides organizations with unparalleled tools and resources to foster innovation, enable seamless scaling, and optimize operational costs.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/3.png" alt="AWS Cloud" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why AWS Cloud */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why AWS Cloud?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Compute Power',
                                    description: 'Scale your applications with powerful computing services like EC2 and Lambda.'
                                },
                                {
                                    title: 'Storage Solutions',
                                    description: 'Secure, scalable, and cost-effective storage with S3, Glacier, and more.'
                                },
                                {
                                    title: 'Database Options',
                                    description: 'Flexible database services, including RDS, DynamoDB, and Aurora.'
                                },
                                {
                                    title: 'Machine Learning',
                                    description: 'Integrate AI and ML with tools like SageMaker to unlock new insights.'
                                },
                                {
                                    title: 'Security and Compliance',
                                    description: 'World-class security protocols to keep your data safe and compliant.'
                                },
                                {
                                    title: 'Global Infrastructure',
                                    description: 'Largest global cloud infrastructure with regions worldwide.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How Wirecto Adds Value */}
                    <div className="mb-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">How Wirecto Adds Value</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Cloud Migration: Seamlessly transition your existing systems to AWS with minimal disruption.',
                                'Custom Architectures: Design robust and scalable cloud architectures optimized for performance.',
                                'Cost Management: Maximize ROI with proactive cost optimization strategies.',
                                'Ongoing Support: Enjoy peace of mind with 24/7 monitoring and expert troubleshooting.',
                                'Security Implementation: Implement AWS security best practices and compliance frameworks.',
                                'DevOps Automation: Automate deployment and management with AWS DevOps tools.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-orange-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AWS Services */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">AWS Services We Specialize In</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'EC2', 'S3', 'RDS', 'Lambda',
                                'CloudFront', 'VPC', 'IAM', 'CloudWatch',
                                'SNS', 'SQS', 'Route 53', 'Elastic Beanstalk',
                                'EKS', 'ECS', 'Redshift', 'DynamoDB'
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                                    <span className="font-semibold text-gray-700">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AWS;