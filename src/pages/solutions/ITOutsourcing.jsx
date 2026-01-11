import React from 'react';

const ITOutsourcing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">IT Outsourcing</h1>
            <p className="text-xl opacity-90">
              Expert IT Outsourcing Solutions to Drive Your Business Forward
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-gray-600 text-lg mb-6">
                In the dynamic business environment of today, organizations are always looking for ways to enhance efficiency, lower operational costs, and tap into specialized knowledge. IT outsourcing has emerged as a powerful strategy for businesses aiming to grow rapidly and stay ahead of the competition.
              </p>
              <p className="text-gray-600 text-lg">
                At Wirecto, we offer tailored IT outsourcing services designed to help you achieve your business goals, enhance operational efficiency, and innovate without the need for large in-house teams.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/img/service-4.jpg" 
                alt="IT Outsourcing Services" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* What is IT Outsourcing */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What is IT Outsourcing?</h2>
            <p className="text-gray-600 text-lg mb-6">
              IT outsourcing involves entrusting your company's IT responsibilities or entire IT operations to an external service provider. This can include everything from software development, network management, system maintenance, cloud services, cybersecurity, and more.
            </p>
            <p className="text-gray-600 text-lg">
              By outsourcing your IT needs, you can tap into the expertise of specialized professionals without the overhead costs of hiring a full-time internal team.
            </p>
          </div>

          {/* Why Choose IT Outsourcing */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose IT Outsourcing for Your Business?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Outsourcing IT functions can provide numerous benefits to businesses of all sizes. Here are some reasons why IT outsourcing is a smart choice:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cost Savings',
                  description: 'One of the primary reasons businesses choose IT outsourcing is to reduce operational costs. By outsourcing, you eliminate the need for hiring, training, and retaining an in-house IT team, which can be expensive.'
                },
                {
                  title: 'Access to Expertise',
                  description: 'Outsourcing allows you to work with a team of experienced IT professionals who are experts in their field. This gives you access to the latest technologies, tools, and best practices.'
                },
                {
                  title: 'Expansion and Versatility',
                  description: 'As your business progresses, its IT demands will grow, and outsourcing offers the flexibility to modify resources to meet those changing needs.'
                },
                {
                  title: 'Concentrate on Key Business Areas',
                  description: 'Outsourcing your IT requirements allows your team to dedicate more time to critical aspects of your business, like marketing, sales, and customer support.'
                },
                {
                  title: 'Risk Management',
                  description: 'Managing IT risks, such as cybersecurity threats, data breaches, or system failures, can be overwhelming. By outsourcing IT services to a trusted provider, you can ensure that your systems are secure and compliant.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our IT Outsourcing Services */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our IT Outsourcing Services</h2>
            <p className="text-gray-600 text-lg mb-8">
              At Wirecto, we offer a wide range of IT outsourcing services that cater to businesses across various industries. Our services are designed to streamline your operations, enhance productivity, and provide the expertise needed to stay ahead of the competition.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Custom Software Solutions',
                  description: 'We provide comprehensive software development services, covering everything from conceptualization and design to development, testing, and ongoing maintenance.'
                },
                {
                  title: 'Managed IT Services',
                  description: 'We handle all aspects of your IT infrastructure, including monitoring, troubleshooting, and maintenance.'
                },
                {
                  title: 'Cloud Computing',
                  description: 'Transitioning to the cloud can improve collaboration, scalability, and security. Our cloud solutions are designed to meet your unique needs.'
                },
                {
                  title: 'Cybersecurity Services',
                  description: 'We provide comprehensive security solutions to protect your sensitive data from threats and breaches.'
                },
                {
                  title: 'IT Consulting',
                  description: 'We offer strategic IT consulting to help you navigate complex technological decisions.'
                },
                {
                  title: 'Helpdesk Support',
                  description: 'Our outsourced IT support provides fast, reliable solutions to your technical issues 24/7.'
                }
              ].map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Wirecto */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Wirecto for IT Outsourcing?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Customized Solutions',
                  description: 'We recognize that each business has its own distinct needs. Our IT outsourcing solutions are customized to meet the specific needs and challenges of your organization.'
                },
                {
                  title: 'Experienced Team',
                  description: 'Our team consists of highly skilled IT professionals with years of experience in various domains.'
                },
                {
                  title: 'Cutting-Edge Technology',
                  description: 'At Wirecto, we stay on top of the latest IT trends and technologies to provide innovative solutions.'
                },
                {
                  title: 'Cost Efficiency',
                  description: 'Our IT outsourcing services are designed to help you reduce costs while maintaining high-quality service.'
                },
                {
                  title: 'Commitment to Quality',
                  description: 'We are dedicated to delivering top-notch services that meet your expectations.'
                }
              ].map((reason, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Let Us Help You Achieve IT Excellence</h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Outsourcing your IT functions to Wirecto means partnering with a trusted service provider that is committed to delivering high-quality, cost-effective solutions. We collaborate with you to gain a deep understanding of your objectives, providing adaptable and scalable IT outsourcing solutions tailored to meet your specific needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITOutsourcing;