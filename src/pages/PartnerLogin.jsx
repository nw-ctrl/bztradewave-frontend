import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield, 
  Users,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

const PartnerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      rememberMe: checked
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      
      // Demo credentials for testing
      if (formData.email === 'partner@example.com' && formData.password === 'demo123') {
        // Successful login
        localStorage.setItem('partnerAuth', JSON.stringify({
          email: formData.email,
          loginTime: new Date().toISOString(),
          rememberMe: formData.rememberMe
        }));
        navigate('/partner-dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }, 2000);
  };

  const features = [
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Enterprise-grade security for your business data'
    },
    {
      icon: Users,
      title: 'Direct Communication',
      description: 'Connect directly with our admin team'
    },
    {
      icon: ArrowRight,
      title: 'Market Insights',
      description: 'Access deeper AI-powered market analysis'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <div className="order-2 lg:order-1">
              <Card className="contact-form max-w-md mx-auto lg:mx-0">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mx-auto mb-4 w-fit">
                    <Lock className="h-4 w-4 mr-2" />
                    Partner Portal
                  </Badge>
                  <CardTitle className="text-2xl">Welcome Back</CardTitle>
                  <CardDescription>
                    Sign in to access your partner dashboard and exclusive resources.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-red-700">{error}</span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>Email Address</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="partner@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="flex items-center space-x-2">
                        <Lock className="h-4 w-4" />
                        <span>Password</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          className="w-full pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="rememberMe"
                          checked={formData.rememberMe}
                          onCheckedChange={handleCheckboxChange}
                        />
                        <Label htmlFor="rememberMe" className="text-sm">
                          Remember me
                        </Label>
                      </div>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full btn-primary"
                    >
                      {isLoading ? (
                        <div className="loading-spinner" />
                      ) : (
                        <>
                          Sign In
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground">
                        Don't have a partner account?{' '}
                        <Link to="/partners" className="text-primary hover:underline font-medium">
                          Apply for Partnership
                        </Link>
                      </p>
                    </div>
                  </form>

                  {/* Demo Credentials */}
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="text-sm font-medium text-blue-900 mb-2">Demo Credentials:</h4>
                    <div className="text-xs text-blue-700 space-y-1">
                      <div>Email: partner@example.com</div>
                      <div>Password: demo123</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Features */}
            <div className="order-1 lg:order-2">
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Partner Portal
                </h1>
                <p className="text-xl text-muted-foreground">
                  Access exclusive partner resources, deeper market insights, and direct 
                  communication with our admin team.
                </p>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What's Inside the Portal?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Advanced AI market insights and predictions
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Direct messaging with admin team
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Document sharing and collaboration tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Exclusive partnership opportunities
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    Real-time trade notifications
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Help?
          </h2>
          <p className="text-muted-foreground mb-6">
            If you're having trouble accessing your account or need technical support, 
            our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="outline">
                Contact Support
              </Button>
            </Link>
            <Button variant="ghost">
              View Help Documentation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerLogin;

