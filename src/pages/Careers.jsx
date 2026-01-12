// src/pages/Careers.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMoneyBillWave, FaUsers } from 'react-icons/fa';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior React Developer',
      department: 'development',
      location: 'Remote / Delhi',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹8-15 LPA',
      description: 'We are looking for an experienced React Developer to join our team.',
      requirements: [
        'Strong experience with React.js and Next.js',
        'Proficiency in JavaScript, TypeScript',
        'Experience with state management (Redux/MobX)',
        'Knowledge of modern frontend build tools'
      ]
    },
    {
      id: 2,
      title: '.NET Core Developer',
      department: 'development',
      location: 'Delhi',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹6-12 LPA',
      description: 'Looking for .NET developers to work on enterprise applications.',
      requirements: [
        'Experience with .NET Core and C#',
        'Knowledge of Entity Framework',
        'Understanding of REST APIs',
        'Experience with SQL Server'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹5-10 LPA',
      description: 'Creative UI/UX designer for web and mobile applications.',
      requirements: [
        'Proficiency in Figma, Adobe XD',
        'Strong portfolio of design projects',
        'Understanding of user-centered design',
        'Experience with design systems'
      ]
    },
    {
      id: 4,
      title: 'Digital Marketing Manager',
      department: 'marketing',
      location: 'Delhi',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹7-12 LPA',
      description: 'Drive digital marketing strategies and campaigns.',
      requirements: [
        'Experience with SEO, SEM, SMM',
        'Knowledge of Google Analytics',
        'Content marketing experience',
        'Campaign management skills'
      ]
    },
    {
      id: 5,
      title: 'Business Development Executive',
      department: 'sales',
      location: 'Delhi / Mumbai',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹4-8 LPA + Incentives',
      description: 'Generate leads and close deals for IT services.',
      requirements: [
        'Excellent communication skills',
        'Experience in IT sales',
        'Lead generation expertise',
        'Client relationship management'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'development',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-14 LPA',
      description: 'Manage cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Experience with AWS/Azure',
        'Knowledge of Docker, Kubernetes',
        'CI/CD pipeline management',
        'Infrastructure as Code'
      ]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobOpenings.length },
    { id: 'development', name: 'Development', count: jobOpenings.filter(job => job.department === 'development').length },
    { id: 'design', name: 'Design', count: jobOpenings.filter(job => job.department === 'design').length },
    { id: 'marketing', name: 'Marketing', count: jobOpenings.filter(job => job.department === 'marketing').length },
    { id: 'sales', name: 'Sales', count: jobOpenings.filter(job => job.department === 'sales').length }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: <FaMoneyBillWave />,
      title: 'Competitive Salary',
      description: 'Industry-standard salary with regular appraisals'
    },
    {
      icon: <FaBriefcase />,
      title: 'Remote Work Options',
      description: 'Flexible work from home opportunities'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Learning & Development',
      description: 'Sponsored certifications and training programs'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Work-Life Balance',
      description: 'Flexible timings and generous leave policy'
    },
    {
      icon: <FaUsers />,
      title: 'Great Culture',
      description: 'Collaborative environment and team activities'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Multiple Locations',
      description: 'Opportunities across different locations'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90">
              Build your career with a company that values innovation and growth
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Filter by Department
                </h3>
                <div className="space-y-3">
                  {departments.map(dept => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        selectedDepartment === dept.id
                          ? 'bg-accent text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{dept.name}</span>
                        <span className={`text-sm ${
                          selectedDepartment === dept.id ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          ({dept.count})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Current Openings
              </h2>
              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
                  >
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 mb-4">
                            <div className="flex items-center text-gray-600">
                              <FaMapMarkerAlt className="mr-2" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FaBriefcase className="mr-2" />
                              {job.type}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FaGraduationCap className="mr-2" />
                              {job.experience}
                            </div>
                            <div className="flex items-center text-gray-600">
                              <FaMoneyBillWave className="mr-2" />
                              {job.salary}
                            </div>
                          </div>
                        </div>
                        <button className="md:ml-4 mt-4 md:mt-0 bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all">
                          Apply Now
                        </button>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        {job.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-3">Requirements:</h4>
                        <ul className=" space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              <span className="text-gray-600">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100">
                        <div className="flex flex-wrap justify-between items-center">
                          <span className="text-sm text-gray-500">
                            Posted 2 days ago
                          </span>
                          <div className="flex space-x-4">
                            <button className="text-accent hover:text-primary font-semibold">
                              Save Job
                            </button>
                            <button className="text-accent hover:text-primary font-semibold">
                              Share
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-white">
              <h2 className="text-4xl font-bold mb-6">Apply Now</h2>
              <p className="text-xl opacity-90 mb-8">
                Send us your resume and we'll get back to you soon.
              </p>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white">
                      <option value="" className=''>Select Position</option>
                      {jobOpenings.map(job => (
                        <option className='text-black '  key={job.id} value={job.id}>{job.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="LinkedIn Profile (Optional)"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Cover Letter (Optional)"
                    rows="4"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                  ></textarea>
                </div>
                <div>
                  <label className="block mb-3">Upload Resume</label>
                  <div className="border-2 border-dashed border-white/30 rounded-xl p-8 text-center hover:border-white/50 transition-colors cursor-pointer">
                    <input type="file" className="hidden" id="resume" />
                    <label htmlFor="resume" className="cursor-pointer">
                      <div className="text-4xl mb-4">📄</div>
                      <div className="text-lg mb-2">Drop your resume here or click to browse</div>
                      <div className="text-sm opacity-75">PDF, DOC, DOCX up to 5MB</div>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-gray-100 py-4 px-6 rounded-xl font-semibold text-lg transition-all"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;