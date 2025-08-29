import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  Users, 
  Award, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Target,
  Eye,
  Heart
} from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'bzTradewave.au established in Australia' },
    { year: '2021', title: 'AI Integration', description: 'Launched AI-powered market insights platform' },
    { year: '2022', title: 'Global Expansion', description: 'Opened partner offices in Asia and Europe' },
    { year: '2023', title: 'Major Growth', description: 'Reached $15M+ in total trade volume' },
    { year: '2024', title: 'Innovation Leader', description: 'Recognized as leading AI-powered trade platform' },
    { year: '2025', title: 'Future Ready', description: 'Expanding into new markets and technologies' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery and client relationships.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with the highest ethical standards and transparent practices.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously innovate to provide cutting-edge solutions for global trade challenges.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships based on mutual trust and success.'
    }
  ];

  const locations = [
    { region: 'Australia', city: 'Sydney', role: 'Headquarters', established: '2020' },
    { region: 'Asia', city: 'Singapore', role: 'Regional Hub', established: '2022' },
    { region: 'China', city: 'Shanghai', role: 'Trade Center', established: '2022' },
    { region: 'Europe', city: 'London', role: 'European Office', established: '2023' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              Proudly Australian
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About bzTradewave.au
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a leading Australian-based international trade company specializing in 
              AI-powered solutions for agriculture, electronics, and fashion sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Operating across 4 continents with partner offices in key trade hubs
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>150+ Partners</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trusted by businesses worldwide for reliable trade solutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center card-hover">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>AI-Powered</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced artificial intelligence driving market insights and predictions
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To revolutionize international trade by providing seamless, AI-powered solutions 
                  that connect Australian businesses with global markets. We are committed to 
                  fostering sustainable trade relationships that drive economic growth and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the world's leading AI-powered international trade platform, 
                  enabling businesses of all sizes to participate in global commerce with 
                  confidence, efficiency, and unprecedented market intelligence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our business decisions and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover p-6">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small Australian startup to a global AI-powered trade platform.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <Badge variant="outline">{milestone.year}</Badge>
                        </div>
                        <CardTitle>{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{milestone.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full border-4 border-white shadow-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Presence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic locations enable us to provide comprehensive support across all major trade routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="text-center card-hover">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle>{location.region}</CardTitle>
                  <CardDescription className="text-lg font-medium">{location.city}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-2">{location.role}</Badge>
                  <p className="text-sm text-muted-foreground">Est. {location.established}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$17M+</div>
              <div className="text-muted-foreground">Total Trade Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Global Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

