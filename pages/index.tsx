'use client';

import Layout from '../components/layout/Layout';
import StatCard from '../components/dashboard/StatCard';
import Timeline from '../components/dashboard/Timeline';
import ProgressStatusSection from '../components/dashboard/ProgressStatusSection';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import ComplianceScore from '../components/dashboard/ComplianceScore';
import TopPerformers from '../components/dashboard/TopPerformers';
import RecentActivities from '../components/dashboard/RecentActivities';
import AuditReadiness from '../components/dashboard/AuditReadiness';

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


        <ProgressStatusSection items={progressStatus} />

        {/* Upper Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ComplianceScore percentage={65} />
          <TopPerformers performers={topPerformers} />
          <RecentActivities activities={recentActivities} />
        </div>

        {/* Lower Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 h-full">
            <PerformanceChart data={performanceData} />
          </div>
          <div className="lg:col-span-1 h-full">
            <AuditReadiness data={auditReadiness} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
