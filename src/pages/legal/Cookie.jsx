// src/pages/legal/CookiePolicy.jsx
import React from 'react';

const Cookie = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-12">Last Updated: January 10, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">1. What Are Cookies</h2>
              <p className="text-gray-600">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">2. How We Use Cookies</h2>
              <p className="text-gray-600 mb-4">We use cookies for the following purposes:</p>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Essential Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Session cookies, authentication cookies
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Analytics Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Google Analytics cookies
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Functional Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies enable the website to provide enhanced functionality and personalization.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Language preference cookies, chat widget cookies
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Marketing Cookies</h3>
                <p className="text-gray-600 mb-2">
                  These cookies are used to track visitors across websites to display relevant advertisements.
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> Facebook Pixel, LinkedIn Insight Tag
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">3. Third-Party Cookies</h2>
              <p className="text-gray-600 mb-4">
                We also use third-party cookies from trusted partners for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                <li><strong>Facebook Pixel:</strong> To measure the effectiveness of our advertising</li>
                <li><strong>LinkedIn Insight Tag:</strong> For campaign analytics and retargeting</li>
                <li><strong>Hotjar:</strong> To understand user experience and improve our website</li>
                <li><strong>Cloudflare:</strong> For security and performance optimization</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">4. Cookie Duration</h2>
              <p className="text-gray-600 mb-4">
                Cookies can be either session cookies or persistent cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device until they expire or you delete them</li>
              </ul>
              <p className="text-gray-600">
                Most cookies we use are session cookies that expire when you close your browser. Some analytics and marketing cookies may persist for up to 2 years.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">5. Your Cookie Choices</h2>
              <p className="text-gray-600 mb-4">
                You have several options to control cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings preferences</li>
                <li><strong>Opt-Out Tools:</strong> You can use tools like the Digital Advertising Alliance's opt-out page</li>
                <li><strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature</li>
                <li><strong>Cookie Consent Banner:</strong> Use our cookie consent banner to manage preferences</li>
              </ul>
              <p className="text-gray-600">
                Please note that blocking some types of cookies may impact your experience of our website and the services we are able to offer.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">6. Updates to This Policy</h2>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. We will notify you of any material changes by posting the new policy on our website with a new effective date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">7. Contact Information</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-600 mb-2">If you have any questions about our Cookie Policy, please contact us:</p>
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

export default Cookie;