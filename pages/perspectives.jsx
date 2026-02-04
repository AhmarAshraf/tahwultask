"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import {
  ArrowLeft,
  File,
  FileSearch,
  FileClock,
  FileCheck,
  Clock,
  MessageSquare,
} from "lucide-react";
import { perspectivesData } from "../lib/mockData";

export default function Perspectives() {
  const [activeTab, setActiveTab] = useState("evidence");
  const perspective = perspectivesData[0];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending review":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">
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

        {/* Evidence Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              value: perspective.totalEvidence,
              label: "Total Evidence",
              Icon: File,
            },
            {
              value: perspective.underReview,
              label: "Under Review Evidence",
              Icon: FileSearch,
            },
            {
              value: perspective.inProgress,
              label: "In Progress Evidence",
              Icon: FileClock,
            },
            {
              value: perspective.completed,
              label: "Completed Evidence",
              Icon: FileCheck,
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border border-gray-200"
            >
              <div className="flex items-center gap-3">
                <card.Icon className="w-6 h-6 text-red-500" />
                <div className="flex flex-col">
                  <p className="text-[20px] font-bold text-gray-900 leading-none">
                    {card.value}
                  </p>
                  <p className="text-[14px] font-medium text-gray-500">
                    {card.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl card-shadow">
          <div className="px-6 pt-4">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setActiveTab("overview")}
                className={`
                  px-6 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    activeTab === "overview"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("evidence")}
                className={`
                  px-6 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    activeTab === "evidence"
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }
                `}
              >
                Evidence
              </button>
            </div>
          </div>
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="relative">
                  {/* Continuous vertical line */}
                  <div className="hidden lg:block absolute left-[220px] top-0 bottom-0 w-px bg-gray-200 ml-3"></div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start">
                      <div className="bg-gray-100 rounded-lg px-6 py-4 text-[15px] font-medium text-gray-700">
                        Objective
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-[15px] text-gray-700 leading-6">
                        {perspective.objective}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start">
                      <div className="bg-gray-100 rounded-lg px-6 py-4 text-[15px] font-medium text-gray-700">
                        Implementation Requirements
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-[15px] text-gray-700 leading-6 space-y-4">
                        {perspective.requirements.map((req, index) => (
                          <div key={index} className="space-y-2">
                            <p className="font-medium text-gray-800">
                              {req.title}
                            </p>
                            {req.items && (
                              <div className="space-y-1">
                                {req.items.map((item, idx) => (
                                  <p key={idx} className="text-gray-700">
                                    {item}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start">
                      <div className="bg-gray-100 rounded-lg px-6 py-4 text-[15px] font-medium text-gray-700">
                        Evidence Documents
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-[15px] text-gray-700 leading-6">
                        {perspective.evidenceDocuments}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start">
                      <div className="bg-gray-100 rounded-lg px-6 py-4 text-[15px] font-medium text-gray-700">
                        Related Regulations
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-[15px] text-gray-700 leading-6">
                        {perspective.relatedRegulations}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[220px,1fr] gap-6 items-start">
                      <div className="bg-gray-100 rounded-lg px-6 py-4 text-[15px] font-medium text-gray-700">
                        Scope
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 text-[15px] text-gray-700 leading-6">
                        {perspective.scope}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Leaders section outside the vertical line container */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-4 text-[15px]">
                    Leaders
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {perspective.leaders.map((leader, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3 shadow-sm"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-base">
                            {leader.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-[15px] text-gray-900">
                            {leader.name}
                          </p>
                          <p className="text-sm text-gray-500">{leader.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evidence" && (
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 rounded-lg">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 rounded-l-lg">
                          <div className="flex items-center gap-2">
                            <span>Document Number</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>Document Name</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>Document Lead</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>Document Preparer</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>Date</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <div className="flex items-center gap-2">
                            <span>Due Date</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 rounded-r-lg">
                          <div className="flex items-center gap-2">
                            <span>Status</span>
                            <img
                              src="/icons/ic_sort-az.png"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {perspective.evidence.map((doc, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <td className="py-5 px-4 text-sm text-gray-900">
                            {doc.docNumber}
                          </td>
                          <td className="py-5 px-4">
                            <span className="py-5 px-4 text-sm text-gray-900">
                              {doc.name}
                            </span>
                          </td>
                          <td className="py-5 px-4 text-sm text-gray-900">
                            {doc.lead}
                          </td>
                          <td className="py-5 px-4 text-sm text-gray-900">
                            {doc.preparer}
                          </td>
                          <td className="py-5 px-4 text-sm text-gray-600">
                            {doc.date}
                          </td>
                          <td className="py-5 px-4 text-sm text-gray-600">
                            {doc.dueDate}
                          </td>
                          <td className="py-5 px-4">
                            <span
                              className={`status-badge ${getStatusColor(doc.status)}`}
                            >
                              {doc.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {activeTab === "evidence" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Comments */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Comments
              </h3>
              <div className="space-y-4 mb-4">
                {perspective.comments.map((comment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-gray-600">
                        {comment.avatar}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {comment.author}
                        </span>
                        <span className="text-xs text-gray-500">
                          {comment.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors font-medium text-sm">
                Post Comment
              </button>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl p-6 card-shadow">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Recent Activities
              </h3>
              <div className="space-y-3">
                {perspective.recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 pb-3 border-b border-gray-100 last:border-0"
                  >
                    <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.title}</p>
                      <span className="text-xs text-gray-500">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
