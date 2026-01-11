import React from 'react';
import { Link } from 'react-router-dom';

const WBAPS = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">WBAPS Program</h1>
                        <p className="text-xl opacity-90">
                            Wirecto Business Accelerator & Partner Success Program
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Accelerate Your Business Growth</h2>
                        <p className="text-gray-600 text-lg mb-6 text-center">
                            The Wirecto Business Accelerator & Partner Success (WBAPS) Program is designed to help businesses and partners maximize their potential through comprehensive support, training, and resources.
                        </p>
                    </div>

                    {/* Program Overview */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Program Overview</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    phase: 'Foundation Phase',
                                    duration: 'Months 1-3',
                                    focus: 'Skill Development & Business Setup',
                                    color: 'from-blue-500 to-blue-600'
                                },
                                {
                                    phase: 'Growth Phase',
                                    duration: 'Months 4-9',
                                    focus: 'Market Expansion & Revenue Growth',
                                    color: 'from-green-500 to-green-600'
                                },
                                {
                                    phase: 'Scale Phase',
                                    duration: 'Months 10-12+',
                                    focus: 'Business Scaling & Innovation',
                                    color: 'from-purple-500 to-purple-600'
                                }
                            ].map((phase, index) => (
                                <div key={index} className={`bg-gradient-to-r ${phase.color} rounded-2xl p-8 text-white text-center`}>
                                    <div className="text-4xl mb-4">{index + 1}</div>
                                    <h4 className="text-2xl font-bold mb-4">{phase.phase}</h4>
                                    <div className="mb-4">
                                        <span className="font-semibold">Duration:</span> {phase.duration}
                                    </div>
                                    <p>{phase.focus}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Components */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Program Components</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: 'Training & Certification',
                                    items: ['Technical Training', 'Sales Certification', 'Product Knowledge', 'Business Development']
                                },
                                {
                                    title: 'Technical Support',
                                    items: ['Dedicated Support', 'Implementation Assistance', 'Troubleshooting', 'Best Practices']
                                },
                                {
                                    title: 'Marketing Support',
                                    items: ['Co-branded Materials', 'Lead Generation', 'Campaign Support', 'Digital Marketing']
                                },
                                {
                                    title: 'Business Resources',
                                    items: ['Business Planning', 'Financial Models', 'Legal Templates', 'Operational Guides']
                                }
                            ].map((component, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h4 className="text-xl font-bold text-gray-800 mb-4">{component.title}</h4>
                                    <ul className="space-y-2">
                                        {component.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center">
                                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                                <span className="text-gray-600">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Stories */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Success Stories</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: 'TechInnovate Inc.',
                                    achievement: '300% revenue growth in 12 months',
                                    quote: 'WBAPS program transformed our business approach and accelerated our market entry.'
                                },
                                {
                                    name: 'Digital Solutions Co.',
                                    achievement: 'Expanded to 5 new markets',
                                    quote: 'The comprehensive training and support helped us scale operations efficiently.'
                                },
                                {
                                    name: 'Cloud Masters Ltd.',
                                    achievement: 'Achieved 95% customer satisfaction',
                                    quote: 'Partnering with Wirecto through WBAPS gave us the competitive edge we needed.'
                                }
                            ].map((story, index) => (
                                <div key={index} className="bg-white rounded-xl p-6">
                                    <div className="text-5xl mb-4 text-primary">"</div>
                                    <p className="text-gray-600 italic mb-6">{story.quote}</p>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{story.name}</h4>
                                        <span className="text-sm text-primary font-semibold">{story.achievement}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Eligibility & Requirements */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Eligibility Criteria</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Minimum Requirements</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Registered business entity',
                                        'Minimum 2 years in operation',
                                        'Team of 5+ employees',
                                        'Basic technical infrastructure',
                                        'Clear business growth plan',
                                        'Commitment to program duration'
                                    ].map((requirement, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-primary font-bold">✓</span>
                                            </div>
                                            <span className="text-gray-600">{requirement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Desired Qualities</h4>
                                <ul className="space-y-3">
                                    {[
                                        'Innovation-driven mindset',
                                        'Strong customer focus',
                                        'Willingness to learn and adapt',
                                        'Growth-oriented approach',
                                        'Technical aptitude',
                                        'Market expansion plans'
                                    ].map((quality, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                                                <span className="text-accent font-bold">★</span>
                                            </div>
                                            <span className="text-gray-600">{quality}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Application Process */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Application Process</h3>

                        <div className="space-y-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Initial Application',
                                    description: 'Submit your business details and growth objectives through our online portal.'
                                },
                                {
                                    step: '02',
                                    title: 'Assessment Review',
                                    description: 'Our team reviews your application and conducts initial evaluation.'
                                },
                                {
                                    step: '03',
                                    title: 'Interview & Discussion',
                                    description: 'Participate in a detailed discussion about your business and program fit.'
                                },
                                {
                                    step: '04',
                                    title: 'Program Onboarding',
                                    description: 'Successful applicants begin the program with orientation and planning.'
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-6">
                                        {step.step}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Accelerate Your Business?</h2>
                        <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
                            Join the WBAPS program and unlock your business's full potential with expert guidance, comprehensive resources, and strategic support from Wirecto.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Apply Now
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary/10 transition-all"
                            >
                                Download Brochure
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all"
                            >
                                Schedule Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WBAPS;