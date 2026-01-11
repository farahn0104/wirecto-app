import React from 'react';

const EducationTraining = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Education & Training</h1>
                        <p className="text-xl opacity-90">Revolutionizing Learning with Innovative Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                Wirecto provides innovative technology to enhance learning, streamline administration, and support growth for educational institutions and corporate training programs.
                            </p>
                            <p className="text-gray-600 text-lg">
                                We help educational organizations stay competitive and efficient in today's digital learning environment.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/EDUCATION-TRAINING-2.jpg" alt="Education & Training" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Learning Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Revolutionizing Education with Innovative Solutions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: 'Learning Management Systems',
                                    description: 'Centralized platform for content delivery, tracking, and management.'
                                },
                                {
                                    title: 'E-Learning Solutions',
                                    description: 'Scalable platforms for online courses and professional development.'
                                },
                                {
                                    title: 'Virtual Classrooms',
                                    description: 'Interactive live learning environments with video lectures and collaboration tools.'
                                },
                                {
                                    title: 'Mobile Learning',
                                    description: 'Access learning materials on smartphones and tablets anytime, anywhere.'
                                },
                                {
                                    title: 'Gamification',
                                    description: 'Game-like elements to increase student engagement and retention.'
                                },
                                {
                                    title: 'Student Information Systems',
                                    description: 'Comprehensive management of student data and records.'
                                },
                                {
                                    title: 'School Management',
                                    description: 'Tools for timetable management, exam scheduling, and parent communication.'
                                },
                                {
                                    title: 'Collaboration Tools',
                                    description: 'Seamless communication between teachers, administrators, and students.'
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600 text-sm">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Empowering Students */}
                    <div className="mb-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Empowering Students with Tools for Success</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Personalized Learning Platforms',
                                'Career Development Tools',
                                'Assessment & Analytics',
                                'Skill Development Programs',
                                'Digital Portfolios',
                                'Online Certification'
                            ].map((tool, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent font-bold mr-4">
                                        🎓
                                    </div>
                                    <span className="text-lg">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EducationTraining;