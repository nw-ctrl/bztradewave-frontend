import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  Users, 
  FileText, 
  TrendingUp, 
  Shield, 
  Settings,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  MessageSquare,
  Upload,
  Download,
  Search,
  Filter,
  MoreHorizontal,
  UserCheck,
  AlertTriangle,
  Activity,
  Globe,
  DollarSign
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated || isAuthenticated !== 'true') {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminUser');
    navigate('/admin-login');
  };

  // Sample data
  const partnerApplications = [
    {
      id: 1,
      companyName: 'Global Trade Solutions',
      contactName: 'John Smith',
      email: 'john@globaltrade.com',
      country: 'Singapore',
      businessType: 'Import/Export Company',
      status: 'pending',
      submittedDate: '2025-08-28',
      revenue: '$5M - $10M'
    },
    {
      id: 2,
      companyName: 'Tech Innovations Ltd',
      contactName: 'Sarah Johnson',
      email: 'sarah@techinnovations.com',
      country: 'United Kingdom',
      businessType: 'Technology Services',
      status: 'approved',
      submittedDate: '2025-08-25',
      revenue: '$10M - $50M'
    },
    {
      id: 3,
      companyName: 'Fashion Forward Co',
      contactName: 'Mike Chen',
      email: 'mike@fashionforward.com',
      country: 'China',
      businessType: 'Fashion/Textiles',
      status: 'rejected',
      submittedDate: '2025-08-20',
      revenue: '$1M - $5M'
    }
  ];

  const activePartners = [
    {
      id: 1,
      name: 'Global Trade Solutions',
      email: 'john@globaltrade.com',
      country: 'Singapore',
      joinDate: '2025-07-15',
      tradeVolume: '$2.4M',
      status: 'active',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Tech Innovations Ltd',
      email: 'sarah@techinnovations.com',
      country: 'United Kingdom',
      joinDate: '2025-06-20',
      tradeVolume: '$1.8M',
      status: 'active',
      lastActivity: '1 day ago'
    }
  ];

  const systemStats = [
    { label: 'Total Partners', value: '150', change: '+12', icon: Users, color: 'text-blue-600' },
    { label: 'Pending Applications', value: '8', change: '+3', icon: Clock, color: 'text-yellow-600' },
    { label: 'Total Trade Volume', value: '$17M', change: '+15%', icon: DollarSign, color: 'text-green-600' },
    { label: 'Active Countries', value: '25', change: '+2', icon: Globe, color: 'text-purple-600' }
  ];

  const tradeVolumeData = [
    { month: 'Jan', volume: 12000 },
    { month: 'Feb', volume: 15000 },
    { month: 'Mar', volume: 18000 },
    { month: 'Apr', volume: 16000 },
    { month: 'May', volume: 20000 },
    { month: 'Jun', volume: 22000 }
  ];

  const partnersByRegion = [
    { name: 'Asia-Pacific', value: 45, color: '#3B82F6' },
    { name: 'Europe', value: 30, color: '#10B981' },
    { name: 'North America', value: 15, color: '#F59E0B' },
    { name: 'Others', value: 10, color: '#8B5CF6' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprovePartner = (id) => {
    alert(`Partner application ${id} approved!`);
  };

  const handleRejectPartner = (id) => {
    alert(`Partner application ${id} rejected!`);
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm text-green-600">{stat.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Platform Trade Volume</CardTitle>
            <CardDescription>Monthly trade volume across all partners</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={tradeVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="volume" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Partners by Region</CardTitle>
            <CardDescription>Geographic distribution of active partners</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={partnersByRegion}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {partnersByRegion.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent System Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">New partner approved: Tech Innovations Ltd</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Market report Q4 2025 uploaded</p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">3 new partnership applications pending review</p>
                <p className="text-xs text-muted-foreground">6 hours ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPartnerApplications = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Partner Applications</CardTitle>
              <CardDescription>Review and manage partnership applications</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Input placeholder="Search applications..." className="w-64" />
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {partnerApplications.map((application) => (
              <Card key={application.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{application.companyName}</h3>
                      <p className="text-sm text-muted-foreground">
                        {application.contactName} • {application.email}
                      </p>
                    </div>
                    <Badge className={getStatusColor(application.status)}>
                      {application.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Country</p>
                      <p className="text-sm font-medium">{application.country}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Business Type</p>
                      <p className="text-sm font-medium">{application.businessType}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                      <p className="text-sm font-medium">{application.revenue}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Submitted</p>
                      <p className="text-sm font-medium">
                        {new Date(application.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {application.status === 'pending' && (
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApprovePartner(application.id)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => handleRejectPartner(application.id)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderActivePartners = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Active Partners</CardTitle>
              <CardDescription>Manage existing partner relationships</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Input placeholder="Search partners..." className="w-64" />
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activePartners.map((partner) => (
              <Card key={partner.id} className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{partner.name}</h3>
                      <p className="text-sm text-muted-foreground">{partner.email}</p>
                    </div>
                    <Badge className={getStatusColor(partner.status)}>
                      {partner.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Country</p>
                      <p className="text-sm font-medium">{partner.country}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Join Date</p>
                      <p className="text-sm font-medium">
                        {new Date(partner.joinDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Trade Volume</p>
                      <p className="text-sm font-medium">{partner.tradeVolume}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Last Activity</p>
                      <p className="text-sm font-medium">{partner.lastActivity}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                    <Button size="sm" variant="outline">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Document Management</CardTitle>
              <CardDescription>Upload and manage shared documents</CardDescription>
            </div>
            <Button className="btn-primary">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-red-500" />
                <div>
                  <p className="font-medium">Q4 2025 Market Report</p>
                  <p className="text-sm text-muted-foreground">PDF • 2.4 MB • Uploaded today</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  Share
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="font-medium">Partnership Guidelines</p>
                  <p className="text-sm text-muted-foreground">PDF • 1.8 MB • Updated 2 days ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  Share
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-green-500" />
                <div>
                  <p className="font-medium">Compliance Checklist</p>
                  <p className="text-sm text-muted-foreground">PDF • 950 KB • Updated 1 week ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  Share
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAIInsights = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Customer Analytics</CardTitle>
          <CardDescription>Automated insights about active customers across all industries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="ai-glow">
              <CardHeader>
                <CardTitle className="text-lg">Agriculture Sector</CardTitle>
                <Badge variant="secondary">15 Active Customers</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>High-value customers</span>
                    <span className="font-medium">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth potential</span>
                    <span className="text-green-600 font-medium">+18%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk level</span>
                    <span className="text-green-600 font-medium">Low</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      AI recommends focusing on premium grain exports to Asia-Pacific region.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ai-glow">
              <CardHeader>
                <CardTitle className="text-lg">Electronics Sector</CardTitle>
                <Badge variant="secondary">22 Active Customers</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>High-value customers</span>
                    <span className="font-medium">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth potential</span>
                    <span className="text-blue-600 font-medium">+12%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk level</span>
                    <span className="text-yellow-600 font-medium">Medium</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Supply chain stabilization creating new opportunities in component trading.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="ai-glow">
              <CardHeader>
                <CardTitle className="text-lg">Fashion Sector</CardTitle>
                <Badge variant="secondary">18 Active Customers</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>High-value customers</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Growth potential</span>
                    <span className="text-green-600 font-medium">+25%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Risk level</span>
                    <span className="text-green-600 font-medium">Low</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Sustainable fashion trend driving premium pricing and demand growth.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Automated Customer Activity Summary</CardTitle>
          <CardDescription>AI-generated insights updated in real-time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-blue-900">High Activity Alert</h4>
                <Badge variant="outline" className="text-blue-600">Real-time</Badge>
              </div>
              <p className="text-sm text-blue-800">
                Electronics sector showing 35% increase in trade inquiries over the past 48 hours. 
                Recommend prioritizing customer outreach in this sector.
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-green-900">Growth Opportunity</h4>
                <Badge variant="outline" className="text-green-600">AI Insight</Badge>
              </div>
              <p className="text-sm text-green-800">
                3 agriculture customers showing expansion signals. AI predicts 40% revenue increase 
                potential with targeted premium product offerings.
              </p>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-yellow-900">Attention Required</h4>
                <Badge variant="outline" className="text-yellow-600">Action Needed</Badge>
              </div>
              <p className="text-sm text-yellow-800">
                2 fashion sector customers showing decreased activity. Recommend proactive 
                engagement to maintain relationship strength.
              </p>
            </div>
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
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage partners, applications, and system operations</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="ai-glow">
              <Shield className="h-4 w-4 mr-2" />
              Admin Access
            </Badge>
            <Button variant="outline" onClick={handleLogout}>
              <Shield className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg border">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'applications', label: 'Applications', icon: Clock },
            { id: 'partners', label: 'Active Partners', icon: Users },
            { id: 'documents', label: 'Documents', icon: FileText },
            { id: 'ai-insights', label: 'AI Insights', icon: TrendingUp },
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
          {activeTab === 'applications' && renderPartnerApplications()}
          {activeTab === 'partners' && renderActivePartners()}
          {activeTab === 'documents' && renderDocuments()}
          {activeTab === 'ai-insights' && renderAIInsights()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

