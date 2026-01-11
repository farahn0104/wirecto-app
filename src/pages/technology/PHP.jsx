import React from 'react';

const PHP = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">PHP Development</h1>
                        <p className="text-xl opacity-90">Achieve Excellence in Web Development</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the dynamic landscape of web development, PHP (Hypertext Preprocessor) has earned its reputation as a cornerstone technology, trusted by developers and businesses around the globe.
                            </p>
                            <p className="text-gray-600 text-lg">
                                PHP is the backbone of nearly 80% of websites worldwide, including highly acclaimed platforms such as Facebook, WordPress, and Wikipedia.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/php.jpeg" alt="PHP Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose PHP for Web Development */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose PHP for Web Development?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Open-Source and Cost-Effective',
                                    description: 'PHP is free to use and backed by a massive global community with constant updates and reliable support.'
                                },
                                {
                                    title: 'Cross-Platform Compatibility',
                                    description: 'PHP runs seamlessly on all major operating systems and is compatible with most web servers.'
                                },
                                {
                                    title: 'Scalability for Any Project',
                                    description: 'Whether building a simple website or complex web application, PHP scales effortlessly.'
                                },
                                {
                                    title: 'Database Integration',
                                    description: 'PHP integrates smoothly with various databases, ensuring data-driven applications perform flawlessly.'
                                },
                                {
                                    title: 'Fast and Secure',
                                    description: 'With built-in features for data encryption and seamless third-party tool integration.'
                                },
                                {
                                    title: 'Proven Track Record',
                                    description: 'Powering major platforms like WordPress, Facebook, and Wikipedia for decades.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wirecto's PHP Development Services */}
                    <div className="mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Wirecto's PHP Development Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Custom Web Development: From dynamic websites to enterprise-grade applications.',
                                'PHP Framework Expertise: Laravel, Symfony, CodeIgniter, and CakePHP.',
                                'CMS Development: WordPress, Drupal, Joomla, and Magento customization.',
                                'E-Commerce Solutions: Tailored e-commerce platforms with secure transactions.',
                                'API Integration and Development: Enhance functionality and streamline workflows.',
                                'Legacy System Modernization: Upgrade and optimize existing PHP applications.',
                                'Performance Optimization: Improve speed, security, and scalability.',
                                'Maintenance and Support: Ongoing support to keep your applications running smoothly.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PHP Frameworks We Specialize In */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">PHP Frameworks We Specialize In</h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                {
                                    name: 'Laravel',
                                    description: 'Elegant syntax and powerful features for modern web applications.'
                                },
                                {
                                    name: 'Symfony',
                                    description: 'Enterprise-ready framework for complex, large-scale applications.'
                                },
                                {
                                    name: 'CodeIgniter',
                                    description: 'Lightweight framework for simple, elegant applications.'
                                },
                                {
                                    name: 'CakePHP',
                                    description: 'Rapid development framework with convention over configuration.'
                                },
                                {
                                    name: 'WordPress',
                                    description: 'World\'s most popular CMS for blogs and business websites.'
                                },
                                {
                                    name: 'Drupal',
                                    description: 'Flexible CMS for complex, content-rich websites.'
                                },
                                {
                                    name: 'Magento',
                                    description: 'Powerful e-commerce platform for online stores.'
                                },
                                {
                                    name: 'Yii',
                                    description: 'High-performance framework for developing Web 2.0 applications.'
                                }
                            ].map((framework, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                    <div className="text-3xl font-bold text-indigo-600 mb-3">{framework.name.charAt(0)}</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{framework.name}</h3>
                                    <p className="text-gray-600 text-sm">{framework.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PHP;