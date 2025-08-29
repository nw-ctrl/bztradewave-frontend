import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import aiService from '../services/aiService';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  TrendingUp, 
  MessageSquare, 
  FileText, 
  Bell, 
  Download,
  Upload,
  User,
  LogOut,
  Calendar,
  DollarSign,
  Globe,
  Activity,
  Send,
  Paperclip
} from 'lucide-react';

const PartnerDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [message, setMessage] = useState('');
  const [aiRecommendations, setAiRecommendations] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const authData = localStorage.getItem('partnerAuth');
    if (!authData) {
      navigate('/partner-login');
      return;
    }

    try {
      const userData = JSON.parse(authData);
      setUser(userData);
      loadAIContent(userData);
    } catch (error) {
      console.error('Error parsing auth data:', error);
      navigate('/partner-login');
    }
  }, [navigate]);

  const loadAIContent = async (userData) => {
    setIsLoadingAI(true);
    try {
      // Get personalized recommendations
      const userProfile = {
        industry: userData.industry || 'General',
        experience: userData.experience || 'Intermediate',
        regions: userData.regions || 'Asia-Pacific',
        business_size: userData.business_size || 'Medium'
      };
      
      const recommendations = await aiService.getTradeRecommendations(userProfile);
      setAiRecommendations(recommendations);

      // Get market insights for user's industry
      const insights = await aiService.getMarketInsights(userData.industry || 'general');
      setAiInsights(aiService.formatInsightsForDisplay(insights));
    } catch (error) {
      console.error('Failed to load AI content:', error);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('partnerAuth');
    navigate('/partner-login');
  };

  const handleSendMessage = () => {
    // Simulate sending message
    alert('Message sent to admin successfully!');
    setMessage('');
  };

  if (!user) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mb-4" />
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  // Sample data for charts
  const tradeVolumeData = [
    { month: 'Jan', volume: 45000 },
    { month: 'Feb', volume: 52000 },
    { month: 'Mar', volume: 48000 },
    { month: 'Apr', volume: 61000 },
    { month: 'May', volume: 55000 },
    { month: 'Jun', volume: 67000 },
  ];

  const marketTrendsData = [
    { month: 'Jan', agriculture: 4000, electronics: 2400, fashion: 2400 },
    { month: 'Feb', agriculture: 3000, electronics: 1398, fashion: 2210 },
    { month: 'Mar', agriculture: 2000, electronics: 9800, fashion: 2290 },
    { month: 'Apr', agriculture: 2780, electronics: 3908, fashion: 2000 },
    { month: 'May', agriculture: 1890, electronics: 4800, fashion: 2181 },
    { month: 'Jun', agriculture: 2390, electronics: 3800, fashion: 2500 },
  ];

  const categoryDistribution = [
    { name: 'Agriculture', value: 35, color: '#10B981' },
    { name: 'Electronics', value: 45, color: '#3B82F6' },
    { name: 'Fashion', value: 20, color: '#8B5CF6' },
  ];

  const recentActivities = [
    { id: 1, type: 'trade', message: 'New trade opportunity in Electronics sector', time: '2 hours ago' },
    { id: 2, type: 'message', message: 'Admin response to your inquiry', time: '4 hours ago' },
    { id: 3, type: 'document', message: 'Market report Q4 2025 available', time: '1 day ago' },
    { id: 4, type: 'alert', message: 'Price alert: Wheat futures up 5%', time: '2 days ago' },
  ];

  const documents = [
    { id: 1, name: 'Q4 2025 Market Report', type: 'PDF', size: '2.4 MB', date: '2025-08-28' },
    { id: 2, name: 'Partnership Agreement', type: 'PDF', size: '1.2 MB', date: '2025-08-25' },
    { id: 3, name: 'Trade Guidelines', type: 'PDF', size: '890 KB', date: '2025-08-20' },
    { id: 4, name: 'Compliance Checklist', type: 'PDF', size: '650 KB', date: '2025-08-15' },
  ];

  const notifications = [
    { id: 1, title: 'New Market Opportunity', message: 'Electronics demand surge in European markets', priority: 'high', time: '1 hour ago' },
    { id: 2, title: 'Document Update', message: 'Q4 market report has been updated', priority: 'medium', time: '3 hours ago' },
    { id: 3, title: 'Price Alert', message: 'Agriculture commodity prices showing upward trend', priority: 'low', time: '6 hours ago' },
  ];

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Trade Volume</p>
                <p className="text-2xl font-bold">$2.4M</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600">+12.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Deals</p>
                <p className="text-2xl font-bold">24</p>
              </div>
              <Activity className="h-8 w-8 text-blue-600" />
            </div>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-4 w-4 text-blue-600 mr-1" />
              <span className="text-sm text-blue-600">+8.2%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Global Reach</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm text-muted-foreground">Countries</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                <p className="text-2xl font-bold">98.5%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm text-green-600">Excellent</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Trade Volume Trend</CardTitle>
            <CardDescription>Monthly trade volume over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tradeVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="volume" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Distribution</CardTitle>
            <CardDescription>Trade volume by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>Latest updates and notifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderInsights = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Market Insights</CardTitle>
          <CardDescription>Advanced analytics and predictions for your business</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={marketTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="agriculture" stroke="#10B981" strokeWidth={2} />
              <Line type="monotone" dataKey="electronics" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="fashion" stroke="#8B5CF6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="ai-glow">
          <CardHeader>
            <CardTitle className="text-lg">Agriculture Forecast</CardTitle>
            <Badge variant="secondary">High Confidence</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              AI predicts 15% growth in agriculture exports to Asia-Pacific region over next quarter.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Wheat</span>
                <span className="text-green-600">+18%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Beef</span>
                <span className="text-green-600">+12%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Dairy</span>
                <span className="text-green-600">+8%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="ai-glow">
          <CardHeader>
            <CardTitle className="text-lg">Electronics Trends</CardTitle>
            <Badge variant="secondary">Medium Confidence</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Component prices stabilizing after recent volatility. Supply chain improvements expected.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Semiconductors</span>
                <span className="text-blue-600">Stable</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Consumer Electronics</span>
                <span className="text-green-600">+5%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Components</span>
                <span className="text-red-600">-3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="ai-glow">
          <CardHeader>
            <CardTitle className="text-lg">Fashion Outlook</CardTitle>
            <Badge variant="secondary">High Confidence</Badge>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Sustainable fashion showing strong growth. Premium materials in high demand.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Organic Cotton</span>
                <span className="text-green-600">+22%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Wool Products</span>
                <span className="text-green-600">+15%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Synthetic</span>
                <span className="text-red-600">-8%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCommunication = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Direct Communication with Admin</CardTitle>
          <CardDescription>Send messages and receive responses from our admin team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Textarea
              placeholder="Type your message to the admin team..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="resize-none"
            />
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4 mr-2" />
                Attach File
              </Button>
              <Button onClick={handleSendMessage} className="btn-primary">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-blue-900">Admin Team</span>
                <span className="text-sm text-blue-600">2 hours ago</span>
              </div>
              <p className="text-sm text-blue-800">
                Thank you for your inquiry about the European market expansion. We've prepared 
                a detailed analysis and will schedule a call to discuss the opportunities.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-700">You</span>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
              <p className="text-sm text-gray-600">
                I'm interested in exploring opportunities in the European fashion market. 
                Could you provide insights on current trends and potential partners?
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-green-900">Admin Team</span>
                <span className="text-sm text-green-600">3 days ago</span>
              </div>
              <p className="text-sm text-green-800">
                Welcome to the partner portal! We're excited to work with you. Please don't 
                hesitate to reach out if you have any questions or need assistance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Document Library</CardTitle>
          <CardDescription>Access and share documents with the admin team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-6">
            <Input placeholder="Search documents..." className="max-w-sm" />
            <Button className="btn-primary">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-3">
                  <FileText className="h-8 w-8 text-red-500" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • {doc.size} • {new Date(doc.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Stay updated with important alerts and updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                <Bell className={`h-5 w-5 mt-0.5 ${
                  notification.priority === 'high' ? 'text-red-500' :
                  notification.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'
                }`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{notification.title}</h4>
                    <Badge variant={
                      notification.priority === 'high' ? 'destructive' :
                      notification.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {notification.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Partner Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {user.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg border">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart },
            { id: 'insights', label: 'AI Insights', icon: TrendingUp },
            { id: 'communication', label: 'Messages', icon: MessageSquare },
            { id: 'documents', label: 'Documents', icon: FileText },
            { id: 'notifications', label: 'Notifications', icon: Bell },
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? 'default' : 'ghost'}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center space-x-2"
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </Button>
          ))}
        </div>

        {/* Content */}
        <div>
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'insights' && renderInsights()}
          {activeTab === 'communication' && renderCommunication()}
          {activeTab === 'documents' && renderDocuments()}
          {activeTab === 'notifications' && renderNotifications()}
        </div>
      </div>
    </div>
  );
};

export default PartnerDashboard;

