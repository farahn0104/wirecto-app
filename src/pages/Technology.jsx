// src/pages/Technology.jsx
import React, { useState } from 'react';
import { 
  FaMicrosoft, FaJava, FaPhp, FaPython, 
  FaReact, FaNodeJs, FaAngular,
  FaJsSquare, FaEthereum, FaAws, FaGoogle,
  FaBolt, FaServer, FaDatabase, FaCloud
} from 'react-icons/fa';
import { SiDotnet, SiTypescript, SiFlutter } from 'react-icons/si';

const Technology = () => {
  const [selectedStack, setSelectedStack] = useState('frontend');

  const technologies = {
    frontend: [
      {
        name: 'React.js',
        icon: <FaReact />,
        description: 'Library for building user interfaces',
        proficiency: 'Expert',
        color: 'from-blue-400 to-cyan-500',
        projects: 450
      },
      {
        name: 'Angular',
        icon: <FaAngular />,
        description: 'Platform for building web applications',
        proficiency: 'Advanced',
        color: 'from-red-500 to-pink-600',
        projects: 280
      },
      {
        name: 'Vue.js',
        icon: <FaReact />,
        description: 'Progressive JavaScript framework',
        proficiency: 'Advanced',
        color: 'from-green-500 to-emerald-600',
        projects: 320
      },
      {
        name: 'Next.js',
        icon: <FaReact />,
        description: 'React framework for production',
        proficiency: 'Expert',
        color: 'from-gray-800 to-gray-900',
        projects: 380
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
        description: 'Typed JavaScript at any scale',
        proficiency: 'Expert',
        color: 'from-blue-600 to-blue-700',
        projects: 520
      }
    ],
    backend: [
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
        description: 'JavaScript runtime built on Chrome V8',
        proficiency: 'Expert',
        color: 'from-green-600 to-green-700',
        projects: 620
      },
      {
        name: '.NET',
        icon: <SiDotnet />,
        description: 'Free, cross-platform, open-source framework',
        proficiency: 'Expert',
        color: 'from-purple-600 to-purple-700',
        projects: 480
      },
      {
        name: 'Java',
        icon: <FaJava />,
        description: 'Object-oriented programming language',
        proficiency: 'Advanced',
        color: 'from-red-600 to-orange-600',
        projects: 390
      },
      {
        name: 'Python',
        icon: <FaPython />,
        description: 'High-level programming language',
        proficiency: 'Expert',
        color: 'from-yellow-500 to-blue-500',
        projects: 550
      },
      {
        name: 'PHP',
        icon: <FaPhp />,
        description: 'Server-side scripting language',
        proficiency: 'Advanced',
        color: 'from-purple-500 to-indigo-600',
        projects: 410
      }
    ],
    mobile: [
      {
        name: 'React Native',
        icon: <FaReact />,
        description: 'Framework for building native apps',
        proficiency: 'Expert',
        color: 'from-blue-400 to-cyan-500',
        projects: 340
      },
      {
        name: 'Flutter',
        icon: <SiFlutter />,
        description: 'UI toolkit for natively compiled apps',
        proficiency: 'Advanced',
        color: 'from-blue-500 to-cyan-600',
        projects: 290
      },
      {
        name: 'Swift',
        icon: <FaApple />,
        description: 'Powerful programming language for iOS',
        proficiency: 'Advanced',
        color: 'from-orange-500 to-red-600',
        projects: 220
      },
      {
        name: 'Kotlin',
        icon: <FaAndroid />,
        description: 'Modern programming language for Android',
        proficiency: 'Advanced',
        color: 'from-purple-500 to-indigo-600',
        projects: 260
      }
    ],
    database: [
      {
        name: 'MongoDB',
        icon: <FaDatabase />,
        description: 'NoSQL document database',
        proficiency: 'Expert',
        color: 'from-green-500 to-green-600',
        projects: 480
      },
      {
        name: 'PostgreSQL',
        icon: <FaDatabase />,
        description: 'Advanced open-source database',
        proficiency: 'Expert',
        color: 'from-blue-500 to-blue-600',
        projects: 420
      },
      {
        name: 'MySQL',
        icon: <FaDatabase />,
        description: 'Open-source relational database',
        proficiency: 'Expert',
        color: 'from-blue-600 to-blue-700',
        projects: 510
      },
      {
        name: 'Redis',
        icon: <FaDatabase />,
        description: 'In-memory data structure store',
        proficiency: 'Advanced',
        color: 'from-red-500 to-red-600',
        projects: 380
      }
    ],
    cloud: [
      {
        name: 'AWS',
        icon: <FaAws />,
        description: 'Amazon Web Services',
        proficiency: 'Expert',
        color: 'from-orange-500 to-yellow-600',
        projects: 520
      },
      {
        name: 'Azure',
        icon: <FaMicrosoft />,
        description: 'Microsoft cloud platform',
        proficiency: 'Advanced',
        color: 'from-blue-500 to-blue-600',
        projects: 410
      },
      {
        name: 'Google Cloud',
        icon: <FaGoogle />,
        description: 'Google cloud platform',
        proficiency: 'Advanced',
        color: 'from-blue-400 to-blue-500',
        projects: 380
      },
      {
        name: 'Docker',
        icon: <FaCloud />,
        description: 'Containerization platform',
        proficiency: 'Expert',
        color: 'from-blue-500 to-cyan-600',
        projects: 450
      }
    ]
  };

  const stacks = [
    { id: 'frontend', name: 'Frontend', count: technologies.frontend.length },
    { id: 'backend', name: 'Backend', count: technologies.backend.length },
    { id: 'mobile', name: 'Mobile', count: technologies.mobile.length },
    { id: 'database', name: 'Database', count: technologies.database.length },
    { id: 'cloud', name: 'Cloud & DevOps', count: technologies.cloud.length }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Technology Stack</h1>
            <p className="text-xl opacity-90">
              Cutting-edge technologies powering innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Navigation */}
      <section className="py-8 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {stacks.map(stack => (
              <button
                key={stack.id}
                onClick={() => setSelectedStack(stack.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedStack === stack.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {stack.name}
                <span className="ml-2 text-sm opacity-75">({stack.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies[selectedStack].map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl bg-gradient-to-br ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <div className="text-right">
                      <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-2">
                        {tech.proficiency}
                      </div>
                      <div className="text-2xl font-bold text-primary">
                        {tech.projects}+
                      </div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {tech.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-8">
                    {tech.description}
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Experience Level</span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 ${
                              star <= (tech.proficiency === 'Expert' ? 5 : 4)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Technology Comparison
          </h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Technology</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Best For</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Performance</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Scalability</th>
                    <th className="py-4 px-6 text-left text-gray-700 font-semibold">Learning Curve</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'React.js', best: 'SPAs, Interactive UIs', performance: 'High', scalability: 'High', learning: 'Moderate' },
                    { name: 'Node.js', best: 'Real-time Apps, APIs', performance: 'High', scalability: 'High', learning: 'Easy' },
                    { name: '.NET Core', best: 'Enterprise Apps', performance: 'Very High', scalability: 'High', learning: 'Moderate' },
                    { name: 'Python', best: 'AI/ML, Data Science', performance: 'Moderate', scalability: 'High', learning: 'Easy' },
                    { name: 'React Native', best: 'Cross-platform Mobile', performance: 'High', scalability: 'Moderate', learning: 'Easy' }
                  ].map((tech, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-6 font-semibold text-gray-800">{tech.name}</td>
                      <td className="py-4 px-6 text-gray-600">{tech.best}</td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                tech.performance === 'Very High' ? 'bg-green-500 w-full' :
                                tech.performance === 'High' ? 'bg-green-400 w-3/4' :
                                'bg-yellow-400 w-2/4'
                              }`}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                tech.scalability === 'High' ? 'bg-green-500 w-full' :
                                'bg-yellow-400 w-2/3'
                              }`}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                tech.learning === 'Easy' ? 'bg-green-500 w-1/3' :
                                tech.learning === 'Moderate' ? 'bg-yellow-400 w-2/3' :
                                'bg-red-400 w-full'
                              }`}
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Not Sure Which Technology to Choose?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Our technology experts will help you choose the right stack for your project
              based on your requirements, budget, and scalability needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg"
              >
                Get Technology Consultation
              </a>
              <a
                href="/solutions"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg"
              >
                View Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Add missing icons
const FaApple = () => <span></span>;
const FaAndroid = () => <span>🤖</span>;

export default Technology;