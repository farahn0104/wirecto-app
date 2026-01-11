// src/pages/legal/PrivacyPolicy.jsx
import React from 'react';

const Privacy = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 10, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Wirecto Technologies Private Limited. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. Data We Collect</h2>
              <p className="text-gray-600 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website</li>
                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services</li>
                <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. How We Use Your Data</h2>
              <p className="text-gray-600 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>To register you as a new customer</li>
                <li>To process and deliver your order including managing payments, fees and charges</li>
                <li>To manage our relationship with you which will include notifying you about changes to our terms or privacy policy</li>
                <li>To administer and protect our business and this website</li>
                <li>To deliver relevant website content and advertisements to you</li>
                <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
              <p className="text-gray-600">
                We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
              </p>
              <p className="text-gray-600">
                To determine the appropriate retention period for personal data, we consider the amount, nature and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, the purposes for which we process your personal data and whether we can achieve those purposes through other means, and the applicable legal, regulatory, tax, accounting or other requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Your Legal Rights</h2>
              <p className="text-gray-600 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Request access</strong> to your personal data</li>
                <li><strong>Request correction</strong> of your personal data</li>
                <li><strong>Request erasure</strong> of your personal data</li>
                <li><strong>Object to processing</strong> of your personal data</li>
                <li><strong>Request restriction</strong> of processing your personal data</li>
                <li><strong>Request transfer</strong> of your personal data</li>
                <li><strong>Right to withdraw consent</strong></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Third-Party Links</h2>
              <p className="text-gray-600">
                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">8. Contact Information</h2>
              <p className="text-gray-600 mb-2">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-1"><strong>Email:</strong> privacy@wirecto.in</p>
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

export default Privacy;