import { Link } from 'react-router-dom';
import { Award, Users, Target, Zap, ChevronRight } from 'lucide-react';
import Button from '../components/common/Button';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Happy Customers', value: '10,000+' },
    { label: 'Products Sold', value: '50,000+' },
    { label: 'Cities Covered', value: '100+' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in manufacturing and quality control to deliver superior products.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Their success is our success.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Continuously improving and innovating to meet the evolving needs of modern agriculture.'
    },
    {
      icon: Zap,
      title: 'Reliability',
      description: 'Dependable products and services that farmers can trust season after season.'
    }
  ];

  const team = [
    {
      name: 'Rajinder Singh',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Amit Patel',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sunita Verma',
      role: 'Head of Customer Success',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Gear Grow</h1>
            <p className="text-xl mb-8 text-gray-100">
              Empowering farmers with innovative agricultural machinery since 2009. 
              We're committed to revolutionizing farming through quality, innovation, and service.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" variant="primary" className="bg-white text-primary-600 hover:bg-gray-100">
                  Get in Touch
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2009, Gear Grow began with a simple mission: to provide farmers with 
                  reliable, high-quality agricultural machinery that makes their work easier and more productive.
                </p>
                <p>
                  What started as a small workshop in Punjab has grown into one of India's most trusted 
                  names in agricultural equipment. Our journey has been driven by our commitment to innovation, 
                  quality, and above all, the success of our farming community.
                </p>
                <p>
                  Today, we serve over 10,000 farmers across India, offering a comprehensive range of 
                  rotavator products, tractor attachments, and spare parts. Each product is designed with 
                  the real needs of farmers in mind, tested rigorously, and backed by our unwavering support.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg"
                alt="Our manufacturing facility"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Gear Grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals working together to serve you better
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who trust Gear Grow for their agricultural machinery needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop">
              <Button size="lg" variant="primary" className="bg-white text-primary-600 hover:bg-gray-100">
                Browse Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;