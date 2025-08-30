import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight,
  Building,
  Mail,
  Phone,
  MapPin,
  User,
  Briefcase
} from 'lucide-react';

const Partners = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    annualRevenue: '',
    experience: '',
    interests: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://bztrade.onrender.com';
      
      const response = await fetch(`${API_BASE_URL}/api/auth/partner/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          company_name: formData.companyName,
          contact_name: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          business_type: formData.businessType,
          annual_revenue: formData.annualRevenue,
          experience: formData.experience,
          interests: formData.interests,
          message: formData.message
        })
      });

      const result = await response.json();
      
      if (response.ok) {
        alert('Thank you for your partnership application! We will review your submission and contact you within 48 hours.');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          businessType: '',
          annualRevenue: '',
          experience: '',
          interests: '',
          message: ''
        });
      } else {
        alert(`Error: ${result.error || 'Failed to submit application. Please try again.'}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit application. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Globe,
      title: 'Global Network Access',
      description: 'Connect with our extensive network of international partners across Asia, Europe, and Australia.'
    },
    {
      icon: TrendingUp,
      title: 'AI-Powered Insights',
      description: 'Access exclusive market intelligence and predictive analytics to optimize your trade operations.'
    },
    {
      icon: Shield,
      title: 'Secure Transactions',
      description: 'Benefit from our enterprise-grade security and compliance with international trade regulations.'
    },
    {
      icon: Award,
      title: 'Premium Support',
      description: 'Receive dedicated support from our expert team and priority access to new opportunities.'
    }
  ];

  const partnerTypes = [
    {
      title: 'Trade Partners',
      description: 'Import/export businesses looking to expand their global reach',
      features: ['Market access', 'Trade financing', 'Logistics support', 'Regulatory guidance'],
      minRequirement: '$1M+ annual revenue'
    },
    {
      title: 'Technology Partners',
      description: 'Tech companies providing complementary solutions',
      features: ['API integration', 'Co-marketing', 'Technical support', 'Joint development'],
      minRequirement: 'Proven technology stack'
    },
    {
      title: 'Regional Partners',
      description: 'Local representatives in key markets',
      features: ['Local market expertise', 'Customer support', 'Sales representation', 'Cultural guidance'],
      minRequirement: 'Local market presence'
    }
  ];

  const partnerStats = [
    { value: '150+', label: 'Active Partners' },
    { value: '25+', label: 'Countries' },
    { value: '$17M+', label: 'Trade Volume' },
    { value: '99.8%', label: 'Satisfaction Rate' }
  ];

  const businessTypes = [
    'Import/Export Company',
    'Manufacturing',
    'Agriculture',
    'Electronics',
    'Fashion/Textiles',
    'Technology Services',
    'Logistics/Shipping',
    'Financial Services',
    'Other'
  ];

  const revenueRanges = [
    'Under $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M - $10M',
    '$10M - $50M',
    '$50M+'
  ];

  const experienceRanges = [
    'Less than 1 year',
    '1-3 years',
    '3-5 years',
    '5-10 years',
    '10+ years'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Users className="h-4 w-4 mr-2" />
              Partnership Program
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Become a Partner
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our global network of partners and unlock new opportunities in international trade 
              with AI-powered insights and comprehensive support.
            </p>
          </div>

          {/* Partner Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partnerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the advantages of partnering with bzTradewave.au and how we can help 
              accelerate your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the partnership model that best fits your business goals and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="partner-portal-card">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t">
                      <Badge variant="outline" className="text-xs">
                        Min. Requirement: {type.minRequirement}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Apply for Partnership
            </h2>
            <p className="text-xl text-muted-foreground">
              Complete the form below to start your partnership application process.
            </p>
          </div>

          <Card className="contact-form">
            <CardHeader>
              <CardTitle className="text-2xl">Partnership Application</CardTitle>
              <CardDescription>
                Please provide detailed information about your business and partnership interests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                    Company Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName" className="flex items-center space-x-2">
                        <Building className="h-4 w-4" />
                        <span>Company Name *</span>
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactName" className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>Contact Person *</span>
                      </Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        type="text"
                        placeholder="Primary contact name"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="business@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+61 xxx xxx xxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>Country/Region *</span>
                    </Label>
                    <Input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Country where your business is located"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                {/* Business Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground border-b pb-2">
                    Business Details
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type *</Label>
                      <Select onValueChange={(value) => handleSelectChange('businessType', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          {businessTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="annualRevenue">Annual Revenue *</Label>
                      <Select onValueChange={(value) => handleSelectChange('annualRevenue', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select revenue range" />
                        </SelectTrigger>
                        <SelectContent>
                          {revenueRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">International Trade Experience *</Label>
                    <Select onValueChange={(value) => handleSelectChange('experience', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        {experienceRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interests" className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4" />
                      <span>Areas of Interest</span>
                    </Label>
                    <Input
                      id="interests"
                      name="interests"
                      type="text"
                      placeholder="e.g., Agriculture, Electronics, Fashion"
                      value={formData.interests}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your business goals, partnership expectations, or any specific requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    * Required fields. We'll review your application within 48 hours.
                  </p>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="loading-spinner" />
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Existing Partners Login */}
      <section className="section-padding hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Already a Partner?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Access your partner dashboard for exclusive insights, documents, and direct communication with our team.
          </p>
          <Link to="/partner-login">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Partner Login
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;

