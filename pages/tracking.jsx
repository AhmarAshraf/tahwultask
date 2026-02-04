'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { ArrowLeft, Search, Filter, Download, Calendar, Users, TrendingUp } from 'lucide-react';

export default function Tracking() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const trackingData = [
    {
      id: 1,
      criterion: 'Digital Transformation Strategic Planning',
      category: 'Strategy & Planning',
      progress: 100,
      documents: 4,
      status: 'Completed',
      owner: 'Ahmed Al-Ali',
      dueDate: '2025-08-01',
      lastUpdated: '2 hours ago'
    },
    {
      id: 2,
      criterion: 'Leadership Development',
      category: 'Organization & People',
      progress: 75,
      documents: 3,
      status: 'In Progress',
      owner: 'Sarah Al-Khaled',
      dueDate: '2025-09-15',
      lastUpdated: '1 day ago'
    },
    {
      id: 3,
      criterion: 'Risk Management Framework',
      category: 'Business Continuity',
      progress: 90,
      documents: 5,
      status: 'Under Review',
      owner: 'Mohammad Al-Mansour',
      dueDate: '2025-08-20',
      lastUpdated: '3 hours ago'
    },
    {
      id: 4,
      criterion: 'Cloud Infrastructure',
      category: 'Information Technology',
      progress: 60,
      documents: 6,
      status: 'In Progress',
      owner: 'Fatima Hassan',
      dueDate: '2025-10-01',
      lastUpdated: '5 hours ago'
    },
    {
      id: 5,
      criterion: 'Data Governance Policy',
      category: 'Government Data',
      progress: 85,
      documents: 4,
      status: 'Under Review',
      owner: 'Omar Abdullah',
      dueDate: '2025-08-25',
      lastUpdated: '1 hour ago'
    }
  ];

  const summaryMetrics = [
    { label: 'Total Criteria', value: '95', icon: TrendingUp, color: 'blue' },
    { label: 'Completed', value: '52', icon: TrendingUp, color: 'green' },
    { label: 'In Progress', value: '28', icon: TrendingUp, color: 'yellow' },
    { label: 'Pending', value: '15', icon: TrendingUp, color: 'gray' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">Criteria Tracking</span>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white">
          <h1 className="text-3xl font-display font-bold mb-2">Criteria Tracking Dashboard</h1>
          <p className="text-blue-100">Monitor and track the progress of all digital transformation criteria</p>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {summaryMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-5 card-shadow hover:card-shadow-hover transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                  </div>
                  <div className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 text-${metric.color}-600`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filters and Actions */}
        <div className="bg-white rounded-xl p-4 card-shadow">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search criteria..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'all'
                    ? 'bg-accent-teal text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFilter('completed')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'completed'
                    ? 'bg-accent-teal text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setSelectedFilter('in-progress')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedFilter === 'in-progress'
                    ? 'bg-accent-teal text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                In Progress
              </button>
              <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Export</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tracking Table */}
        <div className="bg-white rounded-xl card-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Criterion</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Progress</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Documents</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Owner</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Due Date</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {trackingData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer">
                    <td className="py-4 px-6">
                      <span className="text-sm font-medium text-gray-900 hover:text-accent-teal transition-colors">
                        {item.criterion}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600">{item.category}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 max-w-[100px]">
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getProgressColor(item.progress)} transition-all duration-300`}
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium text-gray-900">{item.documents}</span>
                        <span className="text-xs text-gray-500">docs</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`status-badge ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">
                            {item.owner.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-gray-900">{item.owner}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{item.dueDate}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-500">{item.lastUpdated}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Team Overview */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-accent-teal" />
              Team Overview
            </h3>
            <div className="space-y-3">
              {['Ahmed Al-Ali', 'Sarah Al-Khaled', 'Mohammad Al-Mansour', 'Fatima Hassan'].map((name, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{name}</p>
                      <p className="text-xs text-gray-600">{Math.floor(Math.random() * 5) + 2} criteria</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{Math.floor(Math.random() * 30) + 70}%</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-orange-500" />
              Upcoming Deadlines
            </h3>
            <div className="space-y-3">
              {[
                { name: 'Digital Transformation Plan', date: 'Aug 1, 2025', days: 3 },
                { name: 'KPI Framework', date: 'Aug 15, 2025', days: 17 },
                { name: 'Risk Management', date: 'Aug 20, 2025', days: 22 },
                { name: 'Cloud Migration', date: 'Sep 1, 2025', days: 34 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.date}</p>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                    item.days <= 7 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.days}d
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Alerts */}
          <div className="bg-white rounded-xl p-6 card-shadow">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
              Risk Alerts
            </h3>
            <div className="space-y-3">
              {[
                { type: 'High', message: '3 criteria behind schedule', color: 'red' },
                { type: 'Medium', message: '5 documents pending review', color: 'yellow' },
                { type: 'Low', message: '2 team members at capacity', color: 'blue' }
              ].map((alert, index) => (
                <div key={index} className={`p-3 bg-${alert.color}-50 border border-${alert.color}-200 rounded-lg`}>
                  <div className="flex items-start space-x-2">
                    <div className={`w-2 h-2 bg-${alert.color}-500 rounded-full mt-1.5 flex-shrink-0`}></div>
                    <div>
                      <p className={`text-xs font-medium text-${alert.color}-800 mb-1`}>{alert.type} Priority</p>
                      <p className={`text-sm text-${alert.color}-700`}>{alert.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}