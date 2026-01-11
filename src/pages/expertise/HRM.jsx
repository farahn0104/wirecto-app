import React from 'react';

const HRM = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">HRM Software</h1>
            <p className="text-xl opacity-90">Make Workforce Management Easier</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Your employees are the core of your business, and managing them should be smooth and efficient. Wirecto's HRM software is designed to transform the way you handle HR tasks, empowering your team and freeing up valuable time for strategic growth.
              </p>
              <p className="text-gray-600 text-lg">
                We understand that managing the employee lifecycle can be complex and challenging. That's why our HRM software is designed to support you at every stage.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/HRM-SOFTWARE.jpg" alt="HRM Software" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* Why Choose Wirecto's HRM Software */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto's HRM Software?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Centralized Employee Data: Access and manage all employee information in one secure location.',
                'Automated Processes: Eliminate repetitive tasks like payroll calculations and leave approvals.',
                'Employee Self-Service: Empower your workforce to update profiles and request leaves.',
                'Compliance Assurance: Stay updated on labor laws and ensure regulatory compliance.',
                'Scalable Solutions: Ideal for businesses of any size; our software grows with your needs.',
                'Integration Capabilities: Connect with other business systems seamlessly.'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    ✓
                  </div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Recruitment & Onboarding',
                  description: 'Simplify hiring with applicant tracking and digital onboarding.'
                },
                {
                  title: 'Payroll Management',
                  description: 'Automate salary calculations, tax deductions, and payslip generation.'
                },
                {
                  title: 'Attendance Tracking',
                  description: 'Monitor work hours, leave, and overtime with ease.'
                },
                {
                  title: 'Performance Management',
                  description: 'Set goals, conduct appraisals, and reward top performers.'
                },
                {
                  title: 'Training & Development',
                  description: 'Manage employee training programs and skill development.'
                },
                {
                  title: 'Analytics & Reporting',
                  description: 'Gain insights into workforce trends and optimize HR strategies.'
                },
                {
                  title: 'Benefits Administration',
                  description: 'Manage employee benefits, insurance, and retirement plans.'
                },
                {
                  title: 'Document Management',
                  description: 'Store and manage employee documents securely.'
                },
                {
                  title: 'Succession Planning',
                  description: 'Identify and develop future leaders within your organization.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRM;