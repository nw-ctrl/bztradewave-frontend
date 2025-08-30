import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  TrendingUp,
  Globe,
  Zap,
  Shield,
  BarChart3,
  Wheat,
  Cpu,
  Shirt,
  Users,
  Award,
  MapPin
} from 'lucide-react';

// Import images
import heroImage from '../assets/GHADKBQlVZ1M.jpg'; // Shipping containers
import agricultureImage from '../assets/pJ10iIhYSzge.png'; // Agriculture data
import electronicsImage from '../assets/VUr2A8wPFwwN.jpg'; // Electronics manufacturing
import fashionImage from '../assets/8P4AL2Ghvf9K.jpg'; // Fashion/wool clothing
import aiImage from '../assets/G5TfqwtUzyKQ.jpg'; // AI business technology

const Home = () => {
  const stats = [
    { value: '$2.4M', label: 'Agriculture Exports', icon: Wheat, color: 'text-green-600' },
    { value: '$8.9M', label: 'Electronics Trade', icon: Cpu, color: 'text-blue-600' },
    { value: '$5.7M', label: 'Fashion Imports', icon: Shirt, color: 'text-purple-600' },
    { value: '150+', label: 'Global Partners', icon: Users, color: 'text-orange-600' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Insights',
      description: 'Real-time market intelligence and predictive analytics to optimize your trade operations.',
      color: 'text-blue-600'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partner offices across Asia, China, Europe, and Australia for comprehensive support.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Trusted & Secure',
      description: 'Enterprise-grade security and compliance with international trade regulations.',
      color: 'text-red-600'
    },
    {
      icon: BarChart3,
      title: 'Market Analytics',
      description: 'Advanced data visualization and trend analysis for informed decision making.',
      color: 'text-purple-600'
    }
  ];

  const productCategories = [
    {
      title: 'Agriculture',
      description: 'Premium agricultural products from Australia with organic certification and sustainable farming practices.',
      image: agricultureImage,
      features: ['Organic Certification', 'Quality Assurance', 'Global Distribution', 'Sustainable Practices'],
      growth: '+12%'
    },
    {
      title: 'Electronics',
      description: 'Cutting-edge technology solutions and electronic components with comprehensive technical support.',
      image: electronicsImage,
      features: ['Latest Technology', 'Technical Support', 'Bulk Orders', 'Innovation Partners'],
      growth: '+8%'
    },
    {
      title: 'Fashion',
      description: 'Fashion-forward clothing and garments with sustainable materials and ethical production methods.',
      image: fashionImage,
      features: ['Sustainable Materials', 'Ethical Production', 'Custom Orders', 'Fashion Trends'],
      growth: '+15%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <MapPin className="h-4 w-4 mr-2" />
              Proudly from Australia
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Global Trade,
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              We facilitate seamless international trade with cutting-edge technology and dedicated support 
              across agriculture, electronics, and fashion sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="hero-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stats-card p-3 md:p-4 rounded-lg text-center">
                <stat.icon className={`h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-lg md:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About bzTradewave.au
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Australia-based with global reach, we connect businesses worldwide through 
              innovative trade solutions and AI-powered market insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center card-hover">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To revolutionize international trade by providing seamless, AI-powered solutions 
                  that connect Australian businesses with global markets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Presence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  With partner offices across Asia, China, Europe, and Australia, we offer 
                  comprehensive support for your international trade needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Innovation First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Leveraging cutting-edge AI technology to provide real-time market insights 
                  and optimize your trade operations for maximum efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Lines
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of products across three key sectors, each backed 
              by AI-driven market insights and quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="product-category-card overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-green-500 text-white">
                      {category.growth}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {category.title}
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features - Moved to Partner Login */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Market Insights
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                For deeper analysis and AI-powered news, please sign up as a partner.
              </p>
              
              <div className="mt-8">
                <Link to="/partner-login">
                  <Button className="btn-primary">
                    View Partner Insights
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aiImage} 
                alt="AI Technology"
                className="rounded-lg shadow-2xl ai-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Australia-Specific Insights */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Australia-Specific Insights
          </h2>
          <div className="prose prose-lg mx-auto">
            <p>Here are some recent market insights specific to Australia:</p>
            <ul>
              <li><strong>Agriculture:</strong> Recent droughts in New South Wales and Queensland have impacted wheat and barley yields, leading to a projected 15% decrease in exports for the upcoming season. However, strong demand from Southeast Asian markets for Australian beef and lamb is expected to offset some agricultural losses.</li>
              <li><strong>Electronics:</strong> The Australian consumer electronics market is experiencing a surge in demand for smart home devices, with a 20% increase in sales compared to the previous year. Local manufacturers are focusing on developing energy-efficient and AI-powered devices to meet this growing demand.</li>
              <li><strong>Fashion:</strong> Sustainable and ethical fashion brands are gaining significant traction in the Australian market, with a 30% rise in consumer preference for eco-friendly apparel. This trend is driving local designers to incorporate recycled materials and ethical production practices into their collections.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trade Operations?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our network of global partners and experience the future of international trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/partners">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Become a Partner
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


