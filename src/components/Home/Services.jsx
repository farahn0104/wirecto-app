// src/components/Home/Services.jsx
import React from 'react';
import {
    FaShieldAlt,
    FaChartPie,
    FaCode,
    FaMobileAlt,
    FaSearch,
    FaCloud,
    FaUsersCog,
    FaAward,
    FaPaintBrush,
    FaProjectDiagram,
    FaServer,
    FaCheckCircle,
    FaShareAlt,
    FaSyncAlt,
    FaBullhorn,
    FaHeadset,
    FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: <FaShieldAlt />,
            title: 'Cyber Security',
            description: 'Implementing measures to protect data, systems, and networks from unauthorized access, threats, and vulnerabilities.',
            link: '/solutions/cyber-security'
        },
        {
            icon: <FaChartPie />,
            title: 'Data Analytics',
            description: 'Extracting insights from large volumes of data, building data-driven models, and developing business intelligence solutions.',
            link: '/solutions/data-analytics'
        },
        {
            icon: <FaCode />,
            title: 'Web Development',
            description: 'Building interactive and scalable web applications using latest technologies and frameworks.',
            link: '/solutions/web-development'
        },
        {
            icon: <FaMobileAlt />,
            title: 'Apps Development',
            description: 'Creating mobile applications for iOS and Android platforms using modern technologies.',
            link: '/solutions/mobile-apps'
        },
        {
            icon: <FaSearch />,
            title: 'SEO Optimization',
            description: 'SEO involves various strategies and techniques to optimize website structure and online presence.',
            link: '/solutions/seo'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Custom Software',
            description: 'Designing, developing, and deploying software solutions tailored to specific needs of clients.',
            link: '/solutions/custom-software'
        },
        {
            icon: <FaChartPie />,
            title: 'Enterprise Software',
            description: 'Developing large-scale software systems to automate and streamline business processes.',
            link: '/solutions/enterprise-software'
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Services',
            description: 'Implementing cloud-based infrastructure, storage, and computing solutions.',
            link: '/solutions/cloud-services'
        },
        {
            icon: <FaUsersCog />,
            title: 'IT Consulting',
            description: 'Providing expert advice and guidance on IT strategies and digital transformation.',
            link: '/solutions/it-consulting'
        },
        {
            icon: <FaPaintBrush />,
            title: 'UX/UI Design',
            description: 'Creating intuitive and visually appealing user interfaces ensuring smooth user experience.',
            link: '/solutions/ui-ux-design'
        },
        {
            icon: <FaProjectDiagram />,
            title: 'IT Project Management',
            description: 'Overseeing planning, execution, and successful delivery of IT projects.',
            link: '/solutions/project-management'
        },
        {
            icon: <FaServer />,
            title: 'IT Infrastructure',
            description: 'Managing network infrastructure, servers, storage systems ensuring high availability.',
            link: '/solutions/it-infrastructure'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Software Testing',
            description: 'Conducting comprehensive testing of software applications for functionality and security.',
            link: '/solutions/software-testing'
        },
        {
            icon: <FaShareAlt />,
            title: 'API Development',
            description: 'Integrating software applications and developing APIs for seamless data exchange.',
            link: '/solutions/api-development'
        },
        {
            icon: <FaSyncAlt />,
            title: 'Software Upgrades',
            description: 'Assisting clients in upgrading software systems and migrating to new platforms.',
            link: '/solutions/software-upgrades'
        },
        {
            icon: <FaBullhorn />,
            title: 'Digital Marketing',
            description: 'Promoting business through digital channels using various strategies and techniques.',
            link: '/solutions/digital-marketing'
        },
        {
            icon: <FaHeadset />,
            title: 'IT Support',
            description: 'Offering ongoing technical support, troubleshooting, and software maintenance services.',
            link: '/solutions/it-support'
        },
        {
            icon: <FaGlobe />,
            title: 'Domain & Hosting',
            description: 'Comprehensive domain and hosting service with range of solutions for online presence.',
            link: '/solutions/hosting'
        }
    ];

    return (
        <section className="py-10 bg-gray-50" data-aos="fade-up">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
                        Our Services
                    </h5>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Custom IT Solutions for Your Successful Business
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We provide comprehensive IT solutions to help your business thrive in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {service.description}
                            </p>
                            <Link
                                to={service.link}
                                className="inline-flex items-center text-accent hover:text-primary font-semibold group"
                            >
                                Learn More
                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center" data-aos="fade-up">
                    <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
                        <p className="text-lg mb-8 opacity-90">
                            Contact us for tailored IT solutions that perfectly match your business requirements.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;