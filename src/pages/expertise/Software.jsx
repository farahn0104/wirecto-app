import React from 'react';

const Software = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Software Expertise</h1>
                        <p className="text-xl opacity-90">
                            Comprehensive Software Solutions Powered by Innovation
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Mastering the Art of Software Development</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            At Wirecto, we bring decades of combined experience in software development, delivering robust, scalable, and innovative solutions that drive business transformation. Our expertise spans across various domains, technologies, and platforms.
                        </p>
                    </div>

                    {/* Expertise Areas */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Software Expertise</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Enterprise Software',
                                    description: 'Developing scalable enterprise solutions for large organizations.',
                                    technologies: ['Java', '.NET', 'Python', 'Oracle']
                                },
                                {
                                    title: 'Web Applications',
                                    description: 'Building responsive web applications with modern frameworks.',
                                    technologies: ['React', 'Angular', 'Vue.js', 'Node.js']
                                },
                                {
                                    title: 'Mobile Applications',
                                    description: 'Creating native and cross-platform mobile applications.',
                                    technologies: ['iOS', 'Android', 'Flutter', 'React Native']
                                },
                                {
                                    title: 'Cloud Solutions',
                                    description: 'Developing and deploying cloud-native applications.',
                                    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker']
                                },
                                {
                                    title: 'Data Analytics',
                                    description: 'Building data-driven solutions and analytics platforms.',
                                    technologies: ['Big Data', 'ML', 'AI', 'Business Intelligence']
                                },
                                {
                                    title: 'DevOps & Automation',
                                    description: 'Implementing CI/CD pipelines and automation solutions.',
                                    technologies: ['Jenkins', 'Kubernetes', 'Ansible', 'Terraform']
                                }
                            ].map((expertise, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                                    <h4 className="text-xl font-bold text-gray-800 mb-3">{expertise.title}</h4>
                                    <p className="text-gray-600 mb-4">{expertise.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {expertise.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Development Process */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Development Process</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    step: '01',
                                    title: 'Requirement Analysis',
                                    description: 'Understanding business needs and defining project scope'
                                },
                                {
                                    step: '02',
                                    title: 'Design & Architecture',
                                    description: 'Creating technical specifications and system architecture'
                                },
                                {
                                    step: '03',
                                    title: 'Development',
                                    description: 'Agile development with continuous integration'
                                },
                                {
                                    step: '04',
                                    title: 'Testing & QA',
                                    description: 'Comprehensive testing for quality assurance'
                                },
                                {
                                    step: '05',
                                    title: 'Deployment',
                                    description: 'Seamless deployment to production environment'
                                },
                                {
                                    step: '06',
                                    title: 'Maintenance',
                                    description: 'Ongoing support and regular updates'
                                },
                                {
                                    step: '07',
                                    title: 'Optimization',
                                    description: 'Performance tuning and optimization'
                                },
                                {
                                    step: '08',
                                    title: 'Security',
                                    description: 'Regular security audits and updates'
                                }
                            ].map((step, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                                        {step.step}
                                    </div>
                                    <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
                                    <p className="text-gray-600 text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies Stack */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                {
                                    category: 'Frontend',
                                    technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'HTML5', 'CSS3', 'SASS']
                                },
                                {
                                    category: 'Backend',
                                    technologies: ['Node.js', 'Python', 'Java', '.NET', 'PHP', 'Ruby', 'Go']
                                },
                                {
                                    category: 'Mobile',
                                    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Android', 'iOS']
                                },
                                {
                                    category: 'Databases',
                                    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle', 'SQL Server']
                                },
                                {
                                    category: 'Cloud',
                                    technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
                                },
                                {
                                    category: 'DevOps',
                                    technologies: ['Jenkins', 'GitLab CI', 'Ansible', 'Chef', 'Prometheus', 'Grafana']
                                },
                                {
                                    category: 'Testing',
                                    technologies: ['Jest', 'Cypress', 'Selenium', 'JUnit', 'TestNG', 'Postman']
                                },
                                {
                                    category: 'AI/ML',
                                    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision']
                                }
                            ].map((stack, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h4 className="text-lg font-bold text-gray-800 mb-4">{stack.category}</h4>
                                    <div className="space-y-2">
                                        {stack.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="flex items-center">
                                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                                <span className="text-gray-600">{tech}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
                        <h2 className="text-3xl font-bold mb-6">Ready to Build Your Software Solution?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
                            Leverage our software expertise to build robust, scalable, and innovative solutions that drive business growth and transformation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-block bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Start Your Project
                            </a>
                            <a
                                href="/contact"
                                className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/10 transition-colors"
                            >
                                Consultation Call
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Software;