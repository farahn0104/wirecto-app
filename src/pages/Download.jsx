// src/pages/Download.jsx
import React, { useState } from 'react';
import { FaDownload, FaWindows, FaApple, FaLinux, FaAndroid, FaMobileAlt, FaDesktop, FaCloudDownloadAlt } from 'react-icons/fa';

const Download = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const downloads = [
    {
      id: 1,
      category: 'desktop',
      name: 'Wirecto ERP',
      version: 'v2.5.1',
      size: '125 MB',
      platform: 'Windows',
      icon: <FaWindows />,
      description: 'Enterprise resource planning software for Windows',
      downloadUrl: 'https://wirecto.in/downloads/erp-setup.exe',
      requirements: 'Windows 10/11, 4GB RAM, 2GB Free Space'
    },
    {
      id: 2,
      category: 'desktop',
      name: 'Wirecto POS',
      version: 'v1.8.3',
      size: '85 MB',
      platform: 'Windows',
      icon: <FaWindows />,
      description: 'Point of sale system for retail businesses',
      downloadUrl: 'https://wirecto.in/downloads/pos-setup.exe',
      requirements: 'Windows 10/11, 2GB RAM, 1GB Free Space'
    },
    {
      id: 3,
      category: 'mobile',
      name: 'Wirecto CRM Mobile',
      version: 'v3.2.0',
      size: '45 MB',
      platform: 'Android',
      icon: <FaAndroid />,
      description: 'Mobile CRM for sales teams on the go',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.wirecto.crm',
      requirements: 'Android 8.0+, 2GB RAM'
    },
    {
      id: 4,
      category: 'mobile',
      name: 'Wirecto HRMS App',
      version: 'v2.1.5',
      size: '38 MB',
      platform: 'iOS',
      icon: <FaApple />,
      description: 'HR management mobile application',
      downloadUrl: 'https://apps.apple.com/app/wirecto-hrms/id123456789',
      requirements: 'iOS 13.0+, iPhone 8 or later'
    },
    {
      id: 5,
      category: 'desktop',
      name: 'Wirecto Billing Software',
      version: 'v1.5.2',
      size: '95 MB',
      platform: 'macOS',
      icon: <FaApple />,
      description: 'Professional billing software for macOS',
      downloadUrl: 'https://wirecto.in/downloads/billing-mac.dmg',
      requirements: 'macOS 10.15+, 4GB RAM'
    },
    {
      id: 6,
      category: 'desktop',
      name: 'Wirecto Cloud Client',
      version: 'v4.0.1',
      size: '65 MB',
      platform: 'Linux',
      icon: <FaLinux />,
      description: 'Cloud client for Linux systems',
      downloadUrl: 'https://wirecto.in/downloads/cloud-client-linux.deb',
      requirements: 'Ubuntu 20.04+, 2GB RAM'
    },
    {
      id: 7,
      category: 'mobile',
      name: 'Wirecto Field Service',
      version: 'v2.0.3',
      size: '52 MB',
      platform: 'Android',
      icon: <FaAndroid />,
      description: 'Field service management mobile app',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.wirecto.fieldservice',
      requirements: 'Android 9.0+, 3GB RAM'
    },
    {
      id: 8,
      category: 'tools',
      name: 'Database Migration Tool',
      version: 'v1.3.7',
      size: '75 MB',
      platform: 'Windows',
      icon: <FaWindows />,
      description: 'Tool for migrating databases to Wirecto systems',
      downloadUrl: 'https://wirecto.in/downloads/db-migration.exe',
      requirements: 'Windows 10+, 8GB RAM, .NET Framework 4.8'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Downloads', count: downloads.length },
    { id: 'desktop', name: 'Desktop Applications', count: downloads.filter(d => d.category === 'desktop').length },
    { id: 'mobile', name: 'Mobile Applications', count: downloads.filter(d => d.category === 'mobile').length },
    { id: 'tools', name: 'Tools & Utilities', count: downloads.filter(d => d.category === 'tools').length }
  ];

  const platforms = [
    { id: 'windows', name: 'Windows', icon: <FaWindows />, count: downloads.filter(d => d.platform === 'Windows').length },
    { id: 'android', name: 'Android', icon: <FaAndroid />, count: downloads.filter(d => d.platform === 'Android').length },
    { id: 'ios', name: 'iOS', icon: <FaApple />, count: downloads.filter(d => d.platform === 'iOS').length },
    { id: 'macos', name: 'macOS', icon: <FaApple />, count: downloads.filter(d => d.platform === 'macOS').length },
    { id: 'linux', name: 'Linux', icon: <FaLinux />, count: downloads.filter(d => d.platform === 'Linux').length }
  ];

  const filteredDownloads = selectedCategory === 'all'
    ? downloads
    : downloads.filter(download => download.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Downloads</h1>
            <p className="text-xl opacity-90">
              Download our software, apps, and tools
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white sticky top-0 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDownloads.map(download => (
              <div
                key={download.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white text-2xl mr-4">
                        {download.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {download.name}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className="mr-4">v{download.version}</span>
                          <span>{download.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {download.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">System Requirements:</h4>
                    <p className="text-sm text-gray-600">{download.requirements}</p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center text-gray-600">
                      <FaCloudDownloadAlt className="mr-2" />
                      <span className="text-sm">Last updated: 2 days ago</span>
                    </div>
                    <a
                      href={download.downloadUrl}
                      download
                      className="flex items-center bg-gradient-to-r from-primary to-accent text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      <FaDownload className="mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Platform Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {platforms.map(platform => (
              <div
                key={platform.id}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl text-gray-700 mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {platform.name}
                </h3>
                <div className="text-sm text-gray-600">
                  {platform.count} applications
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Download FAQ
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Are the downloads free?',
                  a: 'Yes, all our software downloads are free to use with basic features. Premium features require subscription.'
                },
                {
                  q: 'Do I need an account to download?',
                  a: 'Most downloads don\'t require an account. Some enterprise software may require registration.'
                },
                {
                  q: 'How do I install the software?',
                  a: 'Download the installer and run it. Follow the on-screen instructions for installation.'
                },
                {
                  q: 'Is there a mobile version?',
                  a: 'Yes, many of our products have mobile apps available on Google Play Store and Apple App Store.'
                },
                {
                  q: 'How do I update to the latest version?',
                  a: 'Most software includes auto-update functionality. You can also download updates from this page.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Download;