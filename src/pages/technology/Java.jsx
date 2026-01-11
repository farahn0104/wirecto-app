import React from 'react';

const Java = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Java Development</h1>
                        <p className="text-xl opacity-90">Empowering Your Business with Expert Java Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the rapidly evolving landscape of software development, Java continues to stand out as a versatile, reliable, and powerful programming language.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Its widespread adoption and robust functionality make it an ideal choice for businesses seeking to innovate and thrive in a competitive market.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/java.jpeg" alt="Java Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Java for Your Development Needs */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Java for Your Development Needs?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Platform Independence',
                                    description: '"Write Once, Run Anywhere" - Java\'s ability to run seamlessly across different platforms ensures compatibility and cost-efficiency.'
                                },
                                {
                                    title: 'Security',
                                    description: 'Java\'s built-in security features, such as advanced authentication mechanisms and secure APIs, make it ideal for sensitive applications.'
                                },
                                {
                                    title: 'Scalability',
                                    description: 'Whether building a small application or large enterprise system, Java can scale effortlessly to meet growing business demands.'
                                },
                                {
                                    title: 'Community Support',
                                    description: 'Backed by a vast developer community, Java boasts extensive libraries and frameworks that accelerate development.'
                                },
                                {
                                    title: 'Performance',
                                    description: 'Just-In-Time compilation and efficient memory management ensure high performance for demanding applications.'
                                },
                                {
                                    title: 'Enterprise Readiness',
                                    description: 'Proven track record in enterprise environments with robust tools and frameworks.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Java Development Services */}
                    <div className="mb-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Our Java Development Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Custom Java Application Development: From concept to deployment, tailored to your goals.',
                                'Enterprise Solutions: Secure, scalable, and performance-driven enterprise applications.',
                                'Java-Based Web Development: Using Spring, Hibernate, and Struts for dynamic applications.',
                                'API and Microservices Development: Robust APIs and microservices for enhanced functionality.',
                                'Java Maintenance and Support: Dedicated post-deployment support and updates.',
                                'Mobile Application Development: Android apps using Java and Kotlin.',
                                'Cloud-Native Applications: Java applications optimized for cloud environments.',
                                'Legacy System Migration: Modernize and migrate legacy Java applications.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Java Technologies & Frameworks */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Java Technologies & Frameworks</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Spring Framework',
                                'Spring Boot',
                                'Hibernate',
                                'Struts',
                                'Java EE',
                                'Microservices',
                                'Android SDK',
                                'JavaFX',
                                'Apache Kafka',
                                'Maven',
                                'Gradle',
                                'JUnit',
                                'Mockito',
                                'JPA',
                                'JDBC',
                                'Servlets & JSP'
                            ].map((tech, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                                    <span className="font-medium text-gray-700">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Java;