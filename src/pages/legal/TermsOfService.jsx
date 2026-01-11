// src/pages/legal/TermsOfService.jsx
import React from 'react';

const TermsOfService = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Effective Date: January 10, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Agreement to Terms</h2>
              <p className="text-gray-600">
                By accessing or using Wirecto Technologies Private Limited's services, website, or software products, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Wirecto Technologies provides software development, web design, mobile application development, cloud solutions, and digital marketing services. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Custom software development</li>
                <li>Website design and development</li>
                <li>Mobile application development</li>
                <li>Cloud computing solutions</li>
                <li>Digital marketing services</li>
                <li>IT consulting and support</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to circumvent any security measures</li>
                <li>Not resell or redistribute our services without permission</li>
                <li>Not use our services to transmit malicious code or spam</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                All intellectual property rights in our services, including but not limited to software, designs, trademarks, and content, are owned by Wirecto Technologies or our licensors. You are granted a limited, non-exclusive, non-transferable license to use our services as permitted by these terms.
              </p>
              <p className="text-gray-600">
                For custom development projects, intellectual property rights will be specified in individual project agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Projects are typically billed based on agreed milestones</li>
                <li>Subscription services are billed monthly or annually</li>
                <li>All payments are due within 15 days of invoice date</li>
                <li>Late payments may incur interest charges at 1.5% per month</li>
                <li>All prices are exclusive of applicable taxes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Service Level Agreement</h2>
              <p className="text-gray-600 mb-4">
                Our standard Service Level Agreement includes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Uptime Guarantee:</strong> 99.5% for cloud services</li>
                <li><strong>Response Time:</strong> 24 hours for general inquiries</li>
                <li><strong>Support Hours:</strong> 24/7 for critical issues</li>
                <li><strong>Bug Fixes:</strong> Priority based on severity</li>
              </ul>
              <p className="text-gray-600">
                Specific SLAs for individual projects will be detailed in project agreements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Limitation of Liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, Wirecto Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
              </p>
              <p className="text-gray-600">
                Upon termination, your right to use our services will immediately cease. If you wish to terminate your account, you may simply discontinue using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">9. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes shall be subject to the exclusive jurisdiction of the courts in New Delhi.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">10. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Contact Us</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-2">If you have any questions about these Terms, please contact us:</p>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> legal@wirecto.in</p>
                <p className="text-gray-600 mb-1"><strong>Address:</strong> C - 49, Triloki Colony, New Delhi, India - 03</p>
                <p className="text-gray-600"><strong>Phone:</strong> +91 9716670074</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;