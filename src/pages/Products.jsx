import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wheat, Cpu, Shirt, TrendingUp, Star, ArrowRight, Download, Upload, Globe, Truck, Shield, Award } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: Wheat,
      title: 'Agriculture',
      description: 'Premium agricultural products from Australia',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      products: [
        'Premium Wheat & Grains',
        'Organic Beef & Livestock',
        'Dairy Products',
        'Fresh Produce',
        'Wine & Beverages'
      ],
      importServices: [
        'Quality Inspection & Certification',
        'Cold Chain Logistics',
        'Customs Clearance',
        'Regulatory Compliance'
      ],
      exportServices: [
        'Market Entry Strategy',
        'Distribution Network',
        'Brand Positioning',
        'Local Partnership'
      ],
      stats: {
        volume: '$2.4M',
        growth: '+12%',
        markets: '15+ Countries'
      }
    },
    {
      icon: Cpu,
      title: 'Electronics',
      description: 'Cutting-edge technology solutions',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      products: [
        'Semiconductors & Components',
        'Consumer Electronics',
        'Industrial Equipment',
        'IoT Devices',
        'Renewable Energy Tech'
      ],
      importServices: [
        'Technical Specification Review',
        'Compliance Testing',
        'Supply Chain Optimization',
        'Warranty Management'
      ],
      exportServices: [
        'Technology Transfer',
        'Local Manufacturing',
        'Technical Support',
        'After-sales Service'
      ],
      stats: {
        volume: '$8.9M',
        growth: '+8%',
        markets: '20+ Countries'
      }
    },
    {
      icon: Shirt,
      title: 'Fashion',
      description: 'Sustainable fashion and textiles',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      products: [
        'Sustainable Textiles',
        'Fashion Apparel',
        'Luxury Accessories',
        'Footwear',
        'Home Textiles'
      ],
      importServices: [
        'Ethical Sourcing Verification',
        'Quality Control',
        'Trend Analysis',
        'Seasonal Planning'
      ],
      exportServices: [
        'Brand Development',
        'Retail Network',
        'Fashion Shows & Events',
        'Influencer Partnerships'
      ],
      stats: {
        volume: '$5.7M',
        growth: '+15%',
        markets: '12+ Countries'
      }
    }
  ];

  const tradeServices = [
    {
      icon: Download,
      title: 'Import Services',
      description: 'Comprehensive import solutions for global sourcing',
      features: [
        'Supplier Verification & Due Diligence',
        'Quality Assurance & Inspection',
        'Logistics & Freight Management',
        'Customs Clearance & Documentation',
        'Risk Management & Insurance',
        'Payment & Finance Solutions'
      ]
    },
    {
      icon: Upload,
      title: 'Export Services',
      description: 'End-to-end export support for market expansion',
      features: [
        'Market Research & Entry Strategy',
        'Regulatory Compliance & Certification',
        'Distribution Channel Development',
        'Marketing & Brand Positioning',
        'Local Partnership Facilitation',
        'After-sales Support Network'
      ]
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive international presence and partnerships',
      features: [
        'Partner Offices in 25+ Countries',
        'Local Market Expertise',
        'Cultural & Language Support',
        'Government Relations',
        'Trade Mission Coordination',
        '24/7 Global Support'
      ]
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensuring secure and compliant trade operations',
      features: [
        'International Trade Regulations',
        'Product Safety Standards',
        'Environmental Compliance',
        'Anti-counterfeiting Measures',
        'Data Protection & Privacy',
        'Financial Security & Auditing'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Products & Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Comprehensive trade solutions across agriculture, electronics, and fashion sectors 
            with full import and export support.
          </p>
          <Badge variant="secondary" className="bg-green-500 text-white text-lg px-4 py-2">
            <TrendingUp className="h-5 w-5 mr-2" />
            Now Live & Available
          </Badge>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of products with full import and export capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {productCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Category Header */}
                  <div className={`${category.bgColor} p-8 flex flex-col justify-center`}>
                    <category.icon className={`h-16 w-16 ${category.color} mb-4`} />
                    <h3 className="text-2xl font-bold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground mb-6">{category.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Trade Volume:</span>
                        <span className="font-semibold">{category.stats.volume}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Growth:</span>
                        <span className="font-semibold text-green-600">{category.stats.growth}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Markets:</span>
                        <span className="font-semibold">{category.stats.markets}</span>
                      </div>
                    </div>

                    <Button className="btn-primary w-full">
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {/* Import Services */}
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Download className="h-6 w-6 text-blue-600 mr-2" />
                      <h4 className="text-lg font-semibold">Import Services</h4>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-medium mb-3">Available Products:</h5>
                      <ul className="space-y-2">
                        {category.products.map((product, productIndex) => (
                          <li key={productIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Import Support:</h5>
                      <ul className="space-y-2">
                        {category.importServices.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-3 h-3 text-blue-600 mr-2" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Export Services */}
                  <div className="p-8 bg-gray-50">
                    <div className="flex items-center mb-4">
                      <Upload className="h-6 w-6 text-green-600 mr-2" />
                      <h4 className="text-lg font-semibold">Export Services</h4>
                    </div>
                    
                    <div className="mb-6">
                      <h5 className="font-medium mb-3">Market Opportunities:</h5>
                      <ul className="space-y-2">
                        {category.products.slice(0, 3).map((product, productIndex) => (
                          <li key={productIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-3" />
                            {product} Export
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-medium mb-3">Export Support:</h5>
                      <ul className="space-y-2">
                        {category.exportServices.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center text-sm text-muted-foreground">
                            <Award className="w-3 h-3 text-green-600 mr-2" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Services */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Trade Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end support for all your international trade needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tradeServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <service.icon className={`h-12 w-12 mb-4 ${
                    service.title.includes('Import') ? 'text-blue-600' :
                    service.title.includes('Export') ? 'text-green-600' :
                    service.title.includes('Global') ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mr-3 mt-2 ${
                          service.title.includes('Import') ? 'bg-blue-600' :
                          service.title.includes('Export') ? 'bg-green-600' :
                          service.title.includes('Global') ? 'bg-purple-600' :
                          'bg-orange-600'
                        }`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get in touch with our experts to discuss your import and export requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Truck className="mr-2 h-5 w-5" />
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Globe className="mr-2 h-5 w-5" />
              Explore Markets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

