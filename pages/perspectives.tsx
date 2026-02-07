"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import EvidenceSummaryCards from "../components/perspectives/EvidenceSummaryCards";
import OverviewTab from "../components/perspectives/OverviewTab";
import EvidenceTable from "../components/perspectives/EvidenceTable";
import CommentsPanel from "../components/perspectives/CommentsPanel";
import RecentActivitiesPanel from "../components/perspectives/RecentActivitiesPanel";
import LeadersCard from "../components/perspectives/LeadersCard";
import PillTabs from "../components/ui/PillTabs";
import Chip from "../components/ui/Chip";
import { perspectivesData } from "../lib/mockData";

export default function Perspectives() {
  const [activeTab, setActiveTab] = useState<"overview" | "evidence">("evidence");
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
          <span className="typo-breadcrumb-16">
            Digital Transformation Strategic Planning
          </span>
        </div>

        {/* Header */}
        <div className="card-base p-6 card-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <Chip className="mb-3">{perspective.category}</Chip>
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
                    stroke="var(--color-border)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="var(--color-accent-green)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    pathLength="100"
                    strokeDasharray="100"
                    className="gauge-animate"
                    style={{ "--gauge-offset": `${100 - perspective.progress}` } as CSSProperties}
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
        <div className="card-base card-shadow p-6">
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
