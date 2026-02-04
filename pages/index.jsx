'use client';

import Layout from '../components/Layout';
import StatCard from '../components/StatCard';
import Timeline from '../components/Timeline';
import ProgressCard from '../components/ProgressCard';
import PerformanceChart from '../components/PerformanceChart';
import ComplianceScore from '../components/ComplianceScore';
import TopPerformers from '../components/TopPerformers';
import RecentActivities from '../components/RecentActivities';
import AuditReadiness from '../components/AuditReadiness';

import {
  summaryStats,
  timelineData,
  progressStatus,
  performanceData,
  topPerformers,
  recentActivities,
  auditReadiness
} from '../lib/mockData';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Page Header */}
        <div className="mb-2"></div>

        {/* Timeline */}
        <Timeline data={timelineData} />
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {summaryStats.map((stat) => (
            <StatCard key={stat.id} {...stat} />
          ))}
        </div>


        {/* Progress Status */}
        <div className="bg-white border border-gray-200 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">Progress Status</h2>
            <div className="flex items-center space-x-4 text-[12px]">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                <span className="text-gray-600">Not Started</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
                <span className="text-gray-600">In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-[#1E3A5F] rounded-full"></div>
                <span className="text-gray-600">Partially Uploaded</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                <span className="text-gray-600">Fully Uploaded</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <span className="text-gray-600">Delayed</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-4">
            {progressStatus.map((item) => (
              <ProgressCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Upper Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ComplianceScore percentage={65} />
          <TopPerformers performers={topPerformers} />
          <RecentActivities activities={recentActivities} />
        </div>

        {/* Lower Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PerformanceChart data={performanceData} />
          </div>
          <div className="lg:col-span-1">
            <AuditReadiness data={auditReadiness} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
