import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  TrendingUp, 
  Calendar, 
  Eye, 
  BarChart3,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'Global Wheat Prices Show Upward Trend',
      summary: 'Recent market analysis indicates a significant upward trend in global wheat prices due to supply chain disruptions and increased demand from emerging markets.',
      category: 'agriculture',
      date: '2025-08-28',
      readTime: '3 min read',
      views: 1250,
      relevanceScore: 0.85,
      impactLevel: 'high',
      isAiGenerated: false,
      isFeatured: true
    },
    {
      id: 2,
      title: 'Electronics Manufacturing Shifts to Sustainable Practices',
      summary: 'Major electronics manufacturers are increasingly adopting sustainable practices in response to environmental concerns and regulatory requirements.',
      category: 'electronics',
      date: '2025-08-27',
      readTime: '4 min read',
      views: 980,
      relevanceScore: 0.78,
      impactLevel: 'medium',
      isAiGenerated: false,
      isFeatured: true
    },
    {
      id: 3,
      title: 'Fashion Industry Embraces Circular Economy',
      summary: 'The global fashion industry is undergoing a transformation towards circular economy principles, with major brands investing in recycling and sustainable materials.',
      category: 'fashion',
      date: '2025-08-26',
      readTime: '5 min read',
      views: 750,
      relevanceScore: 0.72,
      impactLevel: 'medium',
      isAiGenerated: false,
      isFeatured: false
    },
    {
      id: 4,
      title: 'AI-Powered Trade Analytics Show 15% Growth Potential',
      summary: 'New AI analysis reveals significant growth opportunities in international trade, with particular strength in Asia-Pacific markets.',
      category: 'market_analysis',
      date: '2025-08-25',
      readTime: '6 min read',
      views: 1500,
      relevanceScore: 0.92,
      impactLevel: 'high',
      isAiGenerated: true,
      isFeatured: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'market_analysis', label: 'Market Analysis' }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'agriculture': return 'bg-green-100 text-green-800';
      case 'electronics': return 'bg-blue-100 text-blue-800';
      case 'fashion': return 'bg-purple-100 text-purple-800';
      case 'market_analysis': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-4 w-4 mr-2" />
              Latest Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              News & Market Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with real-time market intelligence, industry news, and analysis 
              across agriculture, electronics, and fashion sectors.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search news and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="whitespace-nowrap"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Partner Signup Message for Deeper Analysis */}
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Need Deeper Market Analysis & AI-Powered Insights?
                </h3>
                <p className="text-gray-600 mb-4">
                  Get access to advanced AI market insights, predictive analytics, and real-time trade intelligence. 
                  Our partner portal provides comprehensive market analysis tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/partners">
                    <Button className="btn-primary">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Sign Up as Partner
                    </Button>
                  </Link>
                  <Link to="/partner-login">
                    <Button variant="outline">
                      Already a Partner? Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Australia-Specific Product Insights */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Australia Market Insights</h2>
              <p className="text-gray-600">Key insights for Australian trade opportunities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Agriculture Insight */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <Badge className="bg-green-100 text-green-800 w-fit mb-2">Agriculture</Badge>
                  <CardTitle className="text-lg">Australian Wheat Export Surge</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Export Growth</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="font-bold text-green-600">+18.5%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Strong demand from Asian markets driving record wheat exports from Australia, 
                      with premium quality commanding higher prices.
                    </p>
                    <div className="text-xs text-gray-500">
                      Key Markets: China, Indonesia, Japan
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Electronics Insight */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <Badge className="bg-blue-100 text-blue-800 w-fit mb-2">Electronics</Badge>
                  <CardTitle className="text-lg">Tech Component Imports Rise</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Import Growth</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-blue-500" />
                        <span className="font-bold text-blue-600">+12.3%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Australia's growing tech sector driving increased imports of semiconductors 
                      and advanced components, particularly from Taiwan and South Korea.
                    </p>
                    <div className="text-xs text-gray-500">
                      Key Sources: Taiwan, South Korea, Singapore
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Fashion Insight */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <Badge className="bg-purple-100 text-purple-800 w-fit mb-2">Fashion</Badge>
                  <CardTitle className="text-lg">Sustainable Fashion Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Market Growth</span>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4 text-purple-500" />
                        <span className="font-bold text-purple-600">+22.1%</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Australian consumers increasingly choosing sustainable fashion options, 
                      creating opportunities for eco-friendly textile imports and exports.
                    </p>
                    <div className="text-xs text-gray-500">
                      Focus: Organic cotton, recycled materials
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Badge variant="outline" className="text-sm">
              {filteredArticles.length} articles found
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="card-hover h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(article.category)}>
                      {article.category}
                    </Badge>
                    {article.isFeatured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="flex-1 text-sm leading-relaxed mb-4">
                    {article.summary}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Relevance: {Math.round(article.relevanceScore * 100)}%
                      </span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with Market Intelligence
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get AI-powered insights and market analysis delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="btn-primary">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

