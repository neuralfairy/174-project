import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage = () => {
  const posts = [
    {
      title: 'The Complete Guide to Email Validation in 2025',
      excerpt: 'Learn everything you need to know about email validation, from basic syntax checking to advanced deliverability analysis.',
      author: 'Sarah Johnson',
      date: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Best Practices',
      image: 'email-validation'
    },
    {
      title: 'How Invalid Emails Are Costing Your Business Money',
      excerpt: 'Discover the hidden costs of invalid email addresses and how proper validation can dramatically improve your ROI.',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'ROI Analysis',
      image: 'cost-analysis'
    },
    {
      title: 'API Integration Best Practices for Email Validation',
      excerpt: 'Step-by-step guide to integrating email validation APIs into your applications with code examples and troubleshooting tips.',
      author: 'David Kim',
      date: 'January 8, 2025',
      readTime: '12 min read',
      category: 'Technical',
      image: 'api-integration'
    },
    {
      title: 'Avoiding Spam Traps: A Data Quality Essential',
      excerpt: 'Learn how to identify and avoid spam traps that can damage your sender reputation and email deliverability.',
      author: 'Amanda Rodriguez',
      date: 'January 5, 2025',
      readTime: '7 min read',
      category: 'Data Quality',
      image: 'spam-traps'
    },
    {
      title: 'GDPR Compliance and Email Validation',
      excerpt: 'Understanding data protection regulations and how to validate emails while maintaining GDPR compliance.',
      author: 'Sarah Johnson',
      date: 'January 2, 2025',
      readTime: '9 min read',
      category: 'Compliance',
      image: 'gdpr-compliance'
    },
    {
      title: 'Real-Time vs Batch Validation: Which is Right for You?',
      excerpt: 'Compare different validation approaches and determine the best strategy for your business needs and use cases.',
      author: 'Michael Chen',
      date: 'December 28, 2024',
      readTime: '5 min read',
      category: 'Strategy',
      image: 'validation-types'
    }
  ];

  const categories = [
    'All Posts',
    'Best Practices',
    'Technical',
    'Data Quality',
    'ROI Analysis',
    'Compliance',
    'Strategy'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-blue-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Email Validation
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                {' '}Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stay ahead with the latest trends, best practices, and expert insights in email validation and data quality management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
              >
                Download Free Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://salescentri.com/resources/tutorials-webinars"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200"
              >
                Watch Webinars
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-4">
                  Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-6">
                    <User className="h-4 w-4 mr-2" />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center mr-6">
                    <Calendar className="h-4 w-4 mr-2" />
                    {posts[0].date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {posts[0].readTime}
                  </div>
                </div>
                
                <a
                  href="https://salescentri.com/resources/case-studies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">EV</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Validation Guide</h3>
                  <p className="text-gray-600 text-sm">Comprehensive 2025 guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">Expert insights and practical guidance for email validation success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold">{post.image.charAt(0).toUpperCase()}</span>
                    </div>
                    <span className="text-sm text-gray-600">{post.category}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="inline-flex items-center px-2 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-medium mb-3">
                    {post.category}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <a
                    href="https://salescentri.com/resources/case-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/resources/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-200"
            >
              View All Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get the latest email validation insights, best practices, and industry trends delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                Subscribe
              </a>
            </div>
            <p className="text-teal-200 text-sm mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600">Explore our comprehensive library of validation resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">WP</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Whitepapers & eBooks</h3>
              <p className="text-gray-600">
                In-depth research and comprehensive guides on email validation best practices.
              </p>
            </a>

            <a
              href="https://salescentri.com/resources/tutorials-webinars"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">WB</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Webinars & Tutorials</h3>
              <p className="text-gray-600">
                Learn from experts through our video tutorials and live webinar sessions.
              </p>
            </a>

            <a
              href="https://salescentri.com/resources/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600">
                Real success stories showing how companies improved their email performance.
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;