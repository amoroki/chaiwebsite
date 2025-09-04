import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import { Mail, Phone, Globe, Calendar, Package, TrendingUp } from "lucide-react";
import { api } from "../utils/api";

interface Inquiry {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Analytics {
  stats: {
    totalInquiries: number;
    totalSampleRequests: number;
    totalLeads: number;
  };
  countryBreakdown: Record<string, number>;
}

export function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [inquiriesResponse, analyticsResponse] = await Promise.all([
        api.getInquiries(),
        api.getAnalytics()
      ]);

      if (inquiriesResponse.inquiries) {
        setInquiries(inquiriesResponse.inquiries);
      }
      
      if (analyticsResponse.stats) {
        setAnalytics(analyticsResponse);
      }

      setError('');
    } catch (error) {
      setError('Failed to load data. Please refresh the page.');
      console.error('Dashboard data loading error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (inquiryId: string, newStatus: string) => {
    try {
      const response = await api.updateInquiryStatus(inquiryId, newStatus);
      if (response.success) {
        setInquiries(prev => prev.map(inquiry => 
          inquiry.id === inquiryId 
            ? { ...inquiry, status: newStatus, updatedAt: new Date().toISOString() }
            : inquiry
        ));
      }
    } catch (error) {
      console.error('Error updating inquiry status:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'quoted': return 'bg-purple-100 text-purple-800';
      case 'closed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">ChaiTrade Kenya - Admin Dashboard</h1>
        <Button onClick={loadData} variant="outline" size="sm">
          Refresh Data
        </Button>
      </div>

      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {/* Analytics Cards */}
      {analytics && (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Inquiries</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.stats.totalInquiries}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sample Requests</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.stats.totalSampleRequests}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{analytics.stats.totalLeads}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Country Breakdown */}
      {analytics && Object.keys(analytics.countryBreakdown).length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Inquiries by Region</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(analytics.countryBreakdown).map(([country, count]) => (
                <div key={country} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="capitalize">{country}</span>
                  <Badge variant="outline">{count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Inquiries Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Inquiries</CardTitle>
        </CardHeader>
        <CardContent>
          {inquiries.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No inquiries yet. They will appear here when submitted.
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <div key={inquiry.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{inquiry.firstName} {inquiry.lastName}</h3>
                      <p className="text-sm text-gray-600">{inquiry.company}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={getStatusColor(inquiry.status)}>
                        {inquiry.status}
                      </Badge>
                      <Select 
                        value={inquiry.status} 
                        onValueChange={(value) => updateInquiryStatus(inquiry.id, value)}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="contacted">Contacted</SelectItem>
                          <SelectItem value="quoted">Quoted</SelectItem>
                          <SelectItem value="closed">Closed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <a href={`mailto:${inquiry.email}`} className="text-blue-600 hover:underline">
                        {inquiry.email}
                      </a>
                    </div>
                    {inquiry.phone && (
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{inquiry.phone}</span>
                      </div>
                    )}
                    {inquiry.country && (
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="capitalize">{inquiry.country}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{new Date(inquiry.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {inquiry.interest && (
                    <div>
                      <span className="text-sm font-medium">Interest: </span>
                      <span className="text-sm capitalize">{inquiry.interest}</span>
                    </div>
                  )}
                  
                  {inquiry.message && (
                    <div>
                      <span className="text-sm font-medium">Message: </span>
                      <p className="text-sm text-gray-600 mt-1">{inquiry.message}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}