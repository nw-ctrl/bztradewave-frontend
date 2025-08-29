import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  TrendingUp, 
  Calendar, 
  Eye, 
  Filter,
  Zap,
  BarChart3,
  Globe,
  AlertCircle
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

  const marketInsights = [
    {
      title: 'Q4 2025 Agriculture Export Forecast',
      category: 'agriculture',
      region: 'Asia-Pacific',
      projectedGrowth: 12.5,
      confidence: 0.87,
      keyFindings: ['Strong demand growth expected in Q4', 'Premium products showing highest growth potential'],
      recommendations: ['Focus on premium product lines', 'Strengthen partnerships in key markets']
    },
    {
      title: 'Electronics Component Price Analysis',
      category: 'electronics',
      region: 'Global',
      projectedGrowth: -8.3,
      confidence: 0.91,
      keyFindings: ['Component prices stabilizing after recent volatility', 'Supply chain improvements reducing costs'],
      recommendations: ['Lock in favorable pricing agreements', 'Diversify supplier base']
    },
    {
      title: 'Fashion Sustainability Trends',
      category: 'fashion',
      region: 'Europe',
      projectedGrowth: 15.2,
      confidence: 0.79,
      keyFindings: ['Consumers willing to pay premium for sustainable fashion', 'Regulatory requirements driving market changes'],
      recommendations: ['Invest in sustainable materials', 'Obtain relevant certifications']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'agriculture', label: 'Agriculture' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'market_analysis', label: 'Market Analysis' }
  ];

  const getImpactColor = (level) => {
    switch (level) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

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
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              News & Market Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed with real-time market intelligence, industry news, and AI-powered 
              analysis across agriculture, electronics, and fashion sectors.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search news and insights..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
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
          </div>
        </div>
      </section>

      {/* Market Insights Dashboard */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">AI Market Insights</h2>
            <Badge variant="outline" className="ai-glow">
              <BarChart3 className="h-4 w-4 mr-2" />
              Real-time Analysis
            </Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="market-insight-card card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(insight.category)}>
                      {insight.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Globe className="h-4 w-4" />
                      <span>{insight.region}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Projected Growth</span>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className={`h-4 w-4 ${insight.projectedGrowth > 0 ? 'text-green-500' : 'text-red-500'}`} />
                        <span className={`font-bold ${insight.projectedGrowth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {insight.projectedGrowth > 0 ? '+' : ''}{insight.projectedGrowth}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Confidence Level</span>
                      <span className="font-bold text-primary">{(insight.confidence * 100).toFixed(0)}%</span>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Findings</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {insight.keyFindings.map((finding, findingIndex) => (
                          <li key={findingIndex} className="flex items-start">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Latest News</h2>
            <div className="text-sm text-muted-foreground">
              {filteredArticles.length} articles found
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="news-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category.replace('_', ' ')}
                      </Badge>
                      {article.isAiGenerated && (
                        <Badge variant="outline" className="text-xs">
                          <Zap className="h-3 w-3 mr-1" />
                          AI Generated
                        </Badge>
                      )}
                      {article.isFeatured && (
                        <Badge variant="outline" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getImpactColor(article.impactLevel)}`} 
                         title={`${article.impactLevel} impact`} />
                  </div>
                  
                  <CardTitle className="text-xl leading-tight hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {article.summary}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
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
                    <div className="flex items-center space-x-2">
                      <span className="text-xs">Relevance: {(article.relevanceScore * 100).toFixed(0)}%</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated with Market Intelligence
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get AI-powered insights and market analysis delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
            <Button variant="secondary" className="whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;

