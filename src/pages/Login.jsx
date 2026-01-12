// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaFacebookF, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const loginForms = [
    {
      id: 'clouderp',
      name: 'Cloud ERP',
      description: 'Login to your Cloud ERP account',
      link: 'https://clouderp.wirecto.in/login'
    },
    {
      id: 'crm',
      name: 'CRM System',
      description: 'Access your customer relationship management',
      link: 'https://crm.wirecto.in'
    },
    {
      id: 'hrms',
      name: 'HRMS Portal',
      description: 'Human resource management system login',
      link: 'https://hrms.wirecto.in/Account/Login'
    },
    {
      id: 'erp',
      name: 'ERP System',
      description: 'Enterprise resource planning login',
      link: 'https://erp.wirecto.in'
    },
    {
      id: 'pos',
      name: 'POS System',
      description: 'Point of sale system login',
      link: 'https://retailpos.wirecto.in/login'
    },
    {
      id: 'school',
      name: 'School ERP',
      description: 'Educational institution management',
      link: 'https://school.wirecto.in'
    },
    {
      id: 'mlm',
      name: 'MLM System',
      description: 'Multi-level marketing portal',
      link: 'https://mlm.wirecto.in'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Login Forms */}
          <div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Product Login Portals
              </h1>
              <p className="text-gray-600">
                Access your Wirecto products and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loginForms.map((form) => (
                <Link
                  key={form.id}
                  to={form.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-accent/20"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white mr-4">
                      <FaUser />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {form.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {form.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-accent hover:text-primary font-semibold">
                    Login →
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Login/Register */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-4 font-semibold text-lg ${
                    activeTab === 'login'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-4 font-semibold text-lg ${
                    activeTab === 'register'
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Login Form */}
              {activeTab === 'login' && (
                <div>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaUser />
                        </div>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Password</label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <FaLock />
                        </div>
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="••••••••"
                          className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="w-4 h-4 text-accent rounded focus:ring-accent"
                        />
                        <span className="ml-2 text-gray-700">Remember me</span>
                      </label>
                      <Link href="/forgot-password" className="text-accent hover:text-primary font-semibold">
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                    >
                      Sign In
                    </button>
                  </form>

                  <div className="mt-8">
                    <div className="flex items-center my-6">
                      <div className="flex-1 border-t border-gray-300"></div>
                      <div className="px-4 text-gray-500">Or continue with</div>
                      <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <FaGoogle className="text-red-500 text-xl" />
                      </button>
                      <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <FaFacebookF className="text-blue-600 text-xl" />
                      </button>
                      <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <FaGithub className="text-gray-800 text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <div>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Email Address</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-2">Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Confirm Password</label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-accent rounded focus:ring-accent mt-1"
                        />
                        <span className="ml-2 text-gray-700">
                          I agree to the{' '}
                          <Link href="/terms" className="text-accent hover:text-primary">
                            Terms of Service
                          </Link>{' '}
                          and{' '}
                          <Link href="/privacy" className="text-accent hover:text-primary">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                    >
                      Create Account
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;