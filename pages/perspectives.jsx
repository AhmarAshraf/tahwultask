"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import EvidenceSummaryCards from "../components/perspectives/EvidenceSummaryCards";
import OverviewTab from "../components/perspectives/OverviewTab";
import EvidenceTable from "../components/perspectives/EvidenceTable";
import CommentsPanel from "../components/perspectives/CommentsPanel";
import RecentActivitiesPanel from "../components/perspectives/RecentActivitiesPanel";
import LeadersCard from "../components/perspectives/LeadersCard";
import PillTabs from "../components/ui/PillTabs";
import { perspectivesData } from "../lib/mockData";

export default function Perspectives() {
  const [activeTab, setActiveTab] = useState("evidence");
  const perspective = perspectivesData[0];

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <img src="/icons/back.png" alt="Back" className="w-4 h-4" />
          </Link>
          <span className="typo-table-cell-medium-14">
            Digital Transformation Strategic Planning
          </span>
        </div>

        {/* Header */}
        <div className="bg-white rounded-xl p-6 card-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white typo-chip-12 mb-3">
                {perspective.category}
              </div>
              <h1 className="typo-title-16 mb-2">{perspective.name}</h1>
              <p className="typo-desc-14">{perspective.description}</p>
            </div>
            <div className="ml-6">
              <div className="w-24 h-24 relative">
                <svg className="transform -rotate-90 w-24 h-24">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#e2e8f0"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#16a34a"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={251.2}
                    strokeDashoffset={0}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="typo-score-14">{perspective.progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <EvidenceSummaryCards perspective={perspective} />

        {/* Tabs */}
        <div className="px-1">
          <PillTabs
            tabs={[
              { id: "overview", label: "Overview" },
              { id: "evidence", label: "Evidence" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl card-shadow p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <OverviewTab perspective={perspective} />
            </div>
          )}

          {activeTab === "evidence" && (
            <EvidenceTable rows={perspective.evidence} />
          )}
        </div>

        {activeTab === "evidence" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CommentsPanel comments={perspective.comments} />
            <RecentActivitiesPanel activities={perspective.recentActivities} />
          </div>
        )}
        {/* Leaders card outside the tab content card - only show on overview tab */}
        {activeTab === "overview" && (
          <div className="mt-6">
            <LeadersCard leaders={perspective.leaders} />
          </div>
        )}
      </div>
    </Layout>
  );
}
