"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Upload, Eye, Download, Trash2 } from "lucide-react";
import Layout from "../components/layout/Layout";
import PillTabs from "../components/ui/PillTabs";
import RecentActivities from "../components/dashboard/RecentActivities";
import CommentsPanel from "../components/perspectives/CommentsPanel";
import Button from "../components/ui/Button";
import StatusPill from "../components/ui/StatusPill";
import { useToast } from "../components/ui/Toast";
import TrackingFilters from "../components/tracking/TrackingFilters";
import TrackingTable from "../components/tracking/TrackingTable";
import {
  perspectivesData,
  trackingData,
} from "../lib/mockData";

export default function Tracking() {
  const [activeTab, setActiveTab] = useState("documents");
  const perspective = perspectivesData[0];
  const { pushToast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRow, setSelectedRow] = useState(trackingData[0]);

  const filteredRows = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filteredByStatus = trackingData.filter((row) => {
      if (selectedFilter === "completed") return row.status === "Completed";
      if (selectedFilter === "in-progress") return row.status === "In Progress";
      return true;
    });
    if (!query) return filteredByStatus;
    return filteredByStatus.filter((row) =>
      `${row.criterion} ${row.category}`.toLowerCase().includes(query)
    );
  }, [searchQuery, selectedFilter]);

  const evidenceDocuments = [
    {
      name: "Digital_Transformation_Plan.Pdf",
      uploadedBy: "Ahmed Khaled",
      date: "2025-08-01",
      status: "Approved",
    },
    {
      name: "KPI_Framework.Xlsx",
      uploadedBy: "Mona Hamed",
      date: "2025-08-01",
      status: "In Review",
    },
    {
      name: "Roadmap_Version1.Docx",
      uploadedBy: "Rami AlSharif",
      date: "2025-08-01",
      status: "Pending",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-2 text-gray-600">
          <ArrowLeft className="w-4 h-4" />
          <span className="typo-section-18 text-gray-900">Standards Tracking</span>
        </div>

        <div className="card-base p-6 card-shadow">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h2 className="typo-title-16">
                Strategic Planning For Digital Transformation
              </h2>
              <p className="typo-desc-14 mt-1">
                Perspective: {perspective.category}
              </p>
            </div>
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-orange-50 text-orange-600 text-[12px] font-medium">
              In Progress
            </span>
          </div>

          <div className="mt-4">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full progress-animate"
                style={{ "--progress": "97.78%" }}
              ></div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="typo-table-meta-12 text-gray-500">Overall Progress</span>
              <span className="typo-table-meta-12 text-gray-500">97.78%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <PillTabs
            tabs={[
              { id: "documents", label: "Documents" },
              { id: "details", label: "Details" },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
          <Button
            variant="primary"
            size="md"
            onClick={() =>
              pushToast({
                title: "Upload started",
                description: "Your document is being uploaded.",
              })
            }
          >
            <Upload className="w-4 h-4" />
            Upload New Document
          </Button>
        </div>

        {activeTab === "documents" && (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <div className="space-y-6">
              <div className="card-base card-shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="typo-heading-16">Evidence Documents</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        {[
                          "Document Name",
                          "Uploaded By",
                          "Date",
                          "Status",
                          "Action",
                        ].map((label, index) => (
                          <th
                            key={label}
                            className={`text-left py-3 px-6 typo-table-head-14 text-gray-700 ${
                              index === 0 ? "rounded-l-lg" : ""
                            } ${index === 4 ? "rounded-r-lg" : ""}`}
                          >
                            <span className="inline-flex items-center gap-2">
                              {label}
                              {label !== "Action" && (
                                <img
                                  src="/icons/sort-az.png"
                                  alt=""
                                  className="w-3 h-3 opacity-70"
                                />
                              )}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {evidenceDocuments.map((doc, index) => (
                        <tr
                          key={`${doc.name}-${index}`}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <td className="py-4 px-6">
                            <span className="typo-docname-14">{doc.name}</span>
                          </td>
                          <td className="py-4 px-6 typo-table-cell-14">
                            {doc.uploadedBy}
                          </td>
                          <td className="py-4 px-6 typo-table-cell-muted-14">
                            {doc.date}
                          </td>
                          <td className="py-4 px-6">
                            <StatusPill status={doc.status} />
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <button
                                className="text-red-500 hover:text-red-600 focus-ring rounded"
                                aria-label={`Delete ${doc.name}`}
                                type="button"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                              <button
                                className="text-blue-600 hover:text-blue-700 focus-ring rounded"
                                aria-label={`Download ${doc.name}`}
                                type="button"
                              >
                                <Download className="w-4 h-4" />
                              </button>
                              <button
                                className="text-gray-500 hover:text-gray-700 focus-ring rounded"
                                aria-label={`View ${doc.name}`}
                                type="button"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <CommentsPanel comments={perspective.comments} showIcon={false} />
            </div>

            <RecentActivities
              activities={perspective.recentActivities}
              variant="compact"
            />
          </div>
        )}

        {activeTab === "details" && (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <div className="space-y-4">
              <TrackingFilters
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
              <TrackingTable
                rows={filteredRows}
                onRowSelect={setSelectedRow}
                selectedId={selectedRow?.id}
              />
            </div>
            <div className="card-base p-6 card-shadow h-fit">
              <h3 className="typo-heading-16 mb-4">Criterion Details</h3>
              {selectedRow ? (
                <div className="space-y-4">
                  <div>
                    <p className="typo-table-cell-medium-14">Criterion</p>
                    <p className="typo-desc-14 mt-1">{selectedRow.criterion}</p>
                  </div>
                  <div>
                    <p className="typo-table-cell-medium-14">Category</p>
                    <p className="typo-desc-14 mt-1">{selectedRow.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="typo-table-cell-medium-14">Status</p>
                    <StatusPill status={selectedRow.status} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="typo-table-cell-medium-14">Owner</p>
                    <span className="typo-table-cell-14">{selectedRow.owner}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="typo-table-cell-medium-14">Due Date</p>
                    <span className="typo-table-cell-muted-14">{selectedRow.dueDate}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <p className="typo-table-meta-12 text-gray-500">
                      Last updated {selectedRow.lastUpdated}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="typo-desc-14">Select a row to see details.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
