// src/components/Home/Blog.jsx
import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'How to build a Website Design & Development',
    excerpt: 'Start by planning the structure and content of your website...',
    category: 'Web Design',
    image: '/img/blog-1.jpg',
    date: 'Aug 15, 2024',
    author: 'Sadre Alam',
    link: 'https://wirecto.blogspot.com/2024/08/how-to-build-website-design-step-by.html'
  },
  {
    id: 2,
    title: 'How to build a Software Development',
    excerpt: 'Design the software architecture and database structure...',
    category: 'Software Development',
    image: '/img/blog-2.jpg',
    date: 'Aug 10, 2024',
    author: 'Sadre Alam',
    link: 'https://wirecto.blogspot.com/2024/08/how-to-build-software-step-by-step.html'
  },
  {
    id: 3,
    title: 'How to build a Mobile Application',
    excerpt: 'Define the purpose and objectives of your mobile application...',
    category: 'Mobile Application',
    image: '/img/blog-3.jpg',
    date: 'Aug 5, 2024',
    author: 'Sadre Alam',
    link: 'https://wirecto.blogspot.com/2024/08/how-to-build-mobile-application-step-by.html'
  }
];

const Blog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h5 className="text-accent font-semibold uppercase tracking-wider mb-4">
            Latest Blog
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Read The Latest Articles from Our Blog Post
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and insights in software development and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={post.id * 100}
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center mr-6">
                    <FaCalendarAlt className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent hover:text-primary font-semibold group"
                >
                  Read More
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            View All Articles
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;