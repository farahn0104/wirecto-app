import React from 'react';

const Python = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Python Development</h1>
                        <p className="text-xl opacity-90">Empowering Innovation with Python Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the ever-evolving landscape of software development, Python has emerged as a standout programming language, prized for its versatility and power.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Its clean and readable syntax makes it an attractive choice for developers ranging from newcomers to seasoned professionals, enabling it to adapt seamlessly across different sectors.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/python.jpeg" alt="Python Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Python */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Python?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Simplicity and Readability',
                                    description: 'Python\'s clean syntax and intuitive structure make it easy to write and maintain, reducing development time and costs.'
                                },
                                {
                                    title: 'Versatility Across Domains',
                                    description: 'From web development to data analysis, AI, machine learning, and automation, Python caters to diverse needs.'
                                },
                                {
                                    title: 'Extensive Libraries and Frameworks',
                                    description: 'Python boasts an ecosystem of powerful libraries and frameworks like Django, Flask, Pandas, and TensorFlow.'
                                },
                                {
                                    title: 'Cross-Platform Compatibility',
                                    description: 'Python applications can run seamlessly across various operating systems, ensuring maximum reach and usability.'
                                },
                                {
                                    title: 'Thriving Community Support',
                                    description: 'With a vast and active global community, Python developers have access to continuous support and resources.'
                                },
                                {
                                    title: 'Rapid Prototyping',
                                    description: 'Quickly build and test ideas with Python\'s straightforward syntax and extensive libraries.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="bg-gradient-to-br from-yellow-50 to-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                                    <p className="text-gray-600">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Python Services We Offer */}
                    <div className="mb-16 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Python Services We Offer at Wirecto</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Web Development: Build scalable, secure web applications using Django and Flask.',
                                'AI and Machine Learning: Create predictive models, chatbots, and intelligent systems.',
                                'Data Analysis and Visualization: Turn raw data into actionable insights with Pandas and Matplotlib.',
                                'Custom Automation: Streamline repetitive tasks and enhance productivity.',
                                'API Development and Integration: Design and implement robust APIs.',
                                'Scripting and Workflow Optimization: Simplify workflows with Python scripts.',
                                'Desktop Applications: Build cross-platform desktop applications.',
                                'Scientific Computing: Develop applications for research and scientific analysis.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-yellow-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Python Frameworks & Libraries */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Python Frameworks & Libraries</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Django', 'Flask', 'FastAPI', 'Pyramid',
                                'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn',
                                'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
                                'OpenCV', 'NLTK', 'BeautifulSoup', 'Selenium'
                            ].map((framework, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                                    <span className="font-medium text-gray-700">{framework}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Python;