// src/pages/about/TeamMembers.jsx
import React, { useState } from 'react';
import {
  FaLinkedin, FaTwitter, FaGithub, FaEnvelope,
  FaCode, FaPaintBrush, FaCloud, FaMobileAlt,
  FaChartLine, FaShieldAlt, FaServer, FaUsers
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Team from '../../components/Home/Team';

const TeamMembers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Teams', count: 0 },
    { id: 'development', name: 'Development', count: 65 },
    { id: 'design', name: 'Design', count: 20 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 25 },
    { id: 'ai', name: 'AI/ML', count: 15 },
    { id: 'qa', name: 'Quality Assurance', count: 18 },
    { id: 'management', name: 'Project Management', count: 12 },
    { id: 'support', name: 'Customer Support', count: 25 }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Farhan Ansari',
      role: 'Full Stack Developer',
      department: 'development',
      experience: '1 years',
      expertise: ['React', 'Node.js'],
      bio: 'Specializes in building scalable web applications.',
      icon: <FaCode />
    },
    {
      id: 2,
      name: 'Faisal Khan',
      role: 'Frontend Developer',
      department: 'development',
      experience: '1 years',
      expertise: ['Next.js', 'JavaScript'],
      bio: 'Creates intuitive user experiences for complex applications.',
      icon: <FaPaintBrush />
    },
    {
      id: 3,
      name: 'Rahul Verma',
      role: 'Cloud Architect',
      department: 'cloud',
      experience: '7 years',
      expertise: ['AWS', 'Docker', 'Kubernetes'],
      bio: 'Expert in designing cloud-native solutions.',
      icon: <FaCloud />
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Mobile Developer',
      department: 'development',
      experience: '5 years',
      expertise: ['React Native', 'Flutter', 'iOS'],
      bio: 'Builds cross-platform mobile applications.',
      icon: <FaMobileAlt />
    },
    {
      id: 5,
      name: 'Sanjay Kumar',
      role: 'Data Scientist',
      department: 'ai',
      experience: '6 years',
      expertise: ['Python', 'TensorFlow', 'MLOps'],
      bio: 'Develops machine learning models for business insights.',
      icon: <FaChartLine />
    },
    {
      id: 6,
      name: 'Anjali Singh',
      role: 'Security Specialist',
      department: 'cloud',
      experience: '7 years',
      expertise: ['Cybersecurity', 'Pen Testing', 'Compliance'],
      bio: 'Ensures application security and data protection.',
      icon: <FaShieldAlt />
    },
    {
      id: 7,
      name: 'Vikram Reddy',
      role: 'DevOps Engineer',
      department: 'cloud',
      experience: '5 years',
      expertise: ['CI/CD', 'Terraform', 'Ansible'],
      bio: 'Automates infrastructure and deployment pipelines.',
      icon: <FaServer />
    },
    {
      id: 8,
      name: 'Meera Nair',
      role: 'Project Manager',
      department: 'management',
      experience: '8 years',
      expertise: ['Agile', 'Scrum', 'Client Relations'],
      bio: 'Leads complex technology projects to successful delivery.',
      icon: <FaUsers />
    },
    {
      id: 9,
      name: 'Arjun Kapoor',
      role: 'Full Stack Developer',
      department: 'development',
      experience: '4 years',
      expertise: ['.NET', 'React', 'SQL Server'],
      bio: 'Builds enterprise-grade full-stack applications.',
      icon: <FaCode />
    },
    {
      id: 10,
      name: 'Sonia Desai',
      role: 'QA Lead',
      department: 'qa',
      experience: '6 years',
      expertise: ['Automation', 'Performance Testing', 'Selenium'],
      bio: 'Ensures software quality and reliability.',
      icon: <FaShieldAlt />
    },
    {
      id: 11,
      name: 'Rohan Mehra',
      role: 'AI Engineer',
      department: 'ai',
      experience: '5 years',
      expertise: ['NLP', 'Computer Vision', 'PyTorch'],
      bio: 'Develops AI solutions for complex problems.',
      icon: <FaChartLine />
    },
    {
      id: 12,
      name: 'Pooja Joshi',
      role: 'Support Manager',
      department: 'support',
      experience: '5 years',
      expertise: ['Customer Service', 'Technical Support', 'Training'],
      bio: 'Leads customer support and success initiatives.',
      icon: <FaUsers />
    }
  ];

  const filteredMembers = selectedDepartment === 'all'
    ? teamMembers
    : teamMembers.filter(member => member.department === selectedDepartment);

  return (
    <div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Team Members</h1>
            <p className="text-xl opacity-90">
              150+ experts dedicated to delivering exceptional technology solutions
            </p>
          </div>
        </div>

      </section>
      <Team />

      {/* Team Stats */}
      <section className="border py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Team Members' },
              { value: '25+', label: 'Countries Represented' },
              { value: '11+', label: 'Avg. Years Experience' },
              { value: '95%', label: 'Certification Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {departments.map(dept => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedDepartment === dept.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {dept.name}
                {dept.count > 0 && (
                  <span className="ml-2 text-sm opacity-75">({dept.count})</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-5">
        <div className="text-center ">
          <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
            Expert Team
          </h5>
          <h2 className=" text-4xl md:text-5xl font-bold text-gray-800">
            Some Of Our hardworking employees of our company.
          </h2>
        </div>
      </div>

      {/* Team Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map(member => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-3xl mr-6">
                        {member.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {member.name}
                        </h3>
                        <div className="text-accent font-semibold mb-1">
                          {member.role}
                        </div>
                        <div className="text-sm text-gray-500">
                          {member.experience} experience
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-2">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-6 border-t border-gray-100">
                    <Link to={'https://www.linkedin.com/in/farhan-ansari-bb8947182//'} target='_blank' className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <FaLinkedin />
                    </Link>
                    <Link to={'/'} target='_blank' className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <FaTwitter />
                    </Link>
                    <Link to={'https://github.com/farahn0104'} target='_blank' className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <FaGithub />
                    </Link>
                    <Link to={'mdfarhankic85@gmail.com'} target='_blank' className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                      <FaEnvelope />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">Our Team Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Continuous Learning',
                  description: 'Regular training sessions and certification programs'
                },
                {
                  title: 'Collaboration',
                  description: 'Cross-functional teams and knowledge sharing'
                },
                {
                  title: 'Innovation Time',
                  description: 'Dedicated time for exploring new technologies'
                }
              ].map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="opacity-90">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals to join our growing team.
            </p>
            <Link
              to="/careers"
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transition-all"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;