import React from 'react';

const SchoolCollege = () => {
  return (
    <div>
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">School & College Management</h1>
            <p className="text-xl opacity-90">Transform Education with Smart Management Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                Education is transforming profoundly, and your institution has the opportunity to embrace this change. Wirecto's school and college management software empowers educators, administrators, and students to unlock their full potential.
              </p>
              <p className="text-gray-600 text-lg">
                Our comprehensive solution streamlines operations, enhances communication, and ignites innovation in your educational environment. Take the bold leap toward excellence—choose Wirecto and inspire the future of education.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/SCHOOL.-COLLOGE-SOFTWARE.jpg" alt="School & College Management" className="w-full h-96 object-cover" />
            </div>
          </div>

          {/* What Makes Wirecto the Perfect Choice */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What Makes Wirecto the Perfect Choice?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Centralized Management',
                  description: 'Easily manage admissions, attendance, exams, and results—all from a single platform.'
                },
                {
                  title: 'Smart Communication',
                  description: 'Enhance the connection between teachers, students, and parents through instant notifications.'
                },
                {
                  title: 'Student-Centric Features',
                  description: 'Provide students with online access to study materials, assignments, and performance tracking.'
                },
                {
                  title: 'Customizable Solutions',
                  description: 'Designed to meet the specific needs of schools, colleges, and universities.'
                },
                {
                  title: 'Data Security',
                  description: 'Your institution’s data is safeguarded with advanced security measures.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Online Admission Portal',
                  description: 'Streamline the enrollment process with digital forms and automated processing.'
                },
                {
                  title: 'Classroom Management',
                  description: 'Efficiently schedule classes, manage timetables, and monitor teacher performance.'
                },
                {
                  title: 'Financial Oversight',
                  description: 'Easily manage fees, payroll, and financial reports.'
                },
                {
                  title: 'Analytics & Reports',
                  description: 'Obtain actionable insights into both academic and administrative performance.'
                },
                {
                  title: 'Library Management',
                  description: 'Digital catalog, issue-return tracking, and fine management.'
                },
                {
                  title: 'Hostel Management',
                  description: 'Complete management of hostel facilities and student accommodations.'
                },
                {
                  title: 'Transport Management',
                  description: 'Route planning, vehicle tracking, and transport fee management.'
                },
                {
                  title: 'Mobile App Integration',
                  description: 'Parents and students can access information on mobile devices.'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{feature.title}</h3>
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

export default SchoolCollege;