import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { 
  Users, Calendar, MessageSquare, TrendingUp, 
  ArrowUpRight, ArrowDownRight, Search, Bell, Settings
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from './Logo';

const data = [
  { name: 'Jan', bookings: 40, inquiries: 24 },
  { name: 'Feb', bookings: 30, inquiries: 13 },
  { name: 'Mar', bookings: 20, inquiries: 98 },
  { name: 'Apr', bookings: 27, inquiries: 39 },
  { name: 'May', bookings: 18, inquiries: 48 },
  { name: 'Jun', bookings: 23, inquiries: 38 },
];

const seoData = [
  { name: 'Mon', traffic: 400 },
  { name: 'Tue', traffic: 300 },
  { name: 'Wed', traffic: 600 },
  { name: 'Thu', traffic: 800 },
  { name: 'Fri', traffic: 500 },
  { name: 'Sat', traffic: 200 },
  { name: 'Sun', traffic: 300 },
];

export function AdminDashboard() {
  return (
    <div className="p-8 bg-zinc-50 min-h-screen">
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <Logo variant="icon" className="w-12 h-12" />
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
            <p className="text-zinc-500">Welcome back, Antony. Here's what's happening today.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <Input placeholder="Search records..." className="pl-10 bg-white border-zinc-200 w-64" />
          </div>
          <Button variant="outline" size="icon" className="bg-white"><Bell className="w-4 h-4" /></Button>
          <Button variant="outline" size="icon" className="bg-white"><Settings className="w-4 h-4" /></Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Total Bookings" value="128" change="+12.5%" icon={Calendar} trend="up" />
        <StatCard title="New Inquiries" value="43" change="+8.2%" icon={MessageSquare} trend="up" />
        <StatCard title="Website Traffic" value="2.4k" change="-3.1%" icon={TrendingUp} trend="down" />
        <StatCard title="Active Clients" value="56" change="+4.3%" icon={Users} trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="border-zinc-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Booking Trends</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="bookings" fill="#294b9c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="inquiries" fill="#f9ac2c" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold">SEO Performance (Traffic)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={seoData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#294b9c" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#294b9c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#888' }} />
                <Tooltip />
                <Area type="monotone" dataKey="traffic" stroke="#294b9c" strokeWidth={3} fillOpacity={1} fill="url(#colorTraffic)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-zinc-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-bold">Recent Bookings</CardTitle>
            <Button variant="ghost" size="sm" className="text-brand-blue">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">John Doe</h4>
                      <p className="text-xs text-zinc-500">Banking & Financial Services • 2 hours ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                    <p className="text-xs text-zinc-400 mt-1">April 15, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-brand-blue text-white justify-start gap-3 py-6">
              <Calendar className="w-4 h-4" /> Schedule Consultation
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 py-6">
              <MessageSquare className="w-4 h-4" /> New Blog Post
            </Button>
            <Button variant="outline" className="w-full justify-start gap-3 py-6">
              <Users className="w-4 h-4" /> Add Team Member
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon, trend }: any) {
  return (
    <Card className="border-zinc-200 shadow-sm rounded-3xl overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-zinc-600">
            <Icon className="w-6 h-6" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-bold ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {change}
            {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          </div>
        </div>
        <h3 className="text-zinc-500 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-zinc-900">{value}</p>
      </CardContent>
    </Card>
  );
}
