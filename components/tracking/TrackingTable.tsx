import { Calendar } from "lucide-react";
import Table from "../ui/Table";
import StatusPill from "../ui/StatusPill";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";
import type { TrackingRow } from "../../types/models";
import type { CSSProperties } from "react";

const progressStyles = {
  high: "bg-green-500",
  medium: "bg-yellow-500",
  low: "bg-orange-500",
};

const getProgressStyle = (progress: number) => {
  if (progress >= 80) return progressStyles.high;
  if (progress >= 50) return progressStyles.medium;
  return progressStyles.low;
};

type TrackingTableProps = {
  rows: TrackingRow[];
  isLoading?: boolean;
  onRowSelect?: (row: TrackingRow) => void;
  selectedId?: number;
  error?: string;
};

export default function TrackingTable({
  rows,
  isLoading = false,
  onRowSelect,
  selectedId,
  error = "",
}: TrackingTableProps) {
  const hasRows = Array.isArray(rows) && rows.length > 0;
  const hasError = Boolean(error);
  return (
    <Table>
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          {[
            "Criterion",
            "Category",
            "Progress",
            "Documents",
            "Status",
            "Owner",
            "Due Date",
            "Last Updated",
          ].map((label) => (
            <th
              key={label}
              className="text-left py-4 px-6 typo-table-head-14 text-gray-900"
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading &&
          Array.from({ length: 4 }).map((_, rowIndex) => (
            <tr key={`skeleton-${rowIndex}`} className="border-b border-gray-100 last:border-0">
              {Array.from({ length: 8 }).map((__, colIndex) => (
                <td key={`${rowIndex}-${colIndex}`} className="py-4 px-6">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
            </tr>
          ))}
        {!isLoading && !hasError && hasRows &&
          rows.map((item) => {
            const isSelected = selectedId === item.id;
            return (
              <tr
                key={item.id}
                className={`border-b border-gray-100 transition-colors ${
                  onRowSelect ? "cursor-pointer hover:bg-gray-50" : ""
                } ${isSelected ? "bg-gray-50" : ""}`}
                onClick={onRowSelect ? () => onRowSelect(item) : undefined}
                role={onRowSelect ? "button" : undefined}
                tabIndex={onRowSelect ? 0 : undefined}
                aria-selected={onRowSelect ? isSelected : undefined}
                onKeyDown={
                  onRowSelect
                    ? (event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          onRowSelect(item);
                        }
                      }
                    : undefined
                }
              >
                <td className="py-4 px-6">
                  <span className="typo-table-cell-medium-14 hover:text-accent-teal transition-colors">
                    {item.criterion}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="typo-table-cell-muted-14">{item.category}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 max-w-[100px]">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getProgressStyle(item.progress)} progress-animate`}
                          style={{ "--progress": `${item.progress}%` } as CSSProperties}
                        ></div>
                      </div>
                    </div>
                    <span className="typo-table-cell-medium-14">
                      {item.progress}%
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    <span className="typo-table-cell-medium-14">
                      {item.documents}
                    </span>
                    <span className="typo-table-meta-12">docs</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <StatusPill status={item.status} />
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[var(--color-avatar-fallback)] rounded-full flex items-center justify-center">
                      <span className="typo-initials-12 text-[var(--color-ink-2)]">
                        {item.owner.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <span className="typo-table-cell-14">{item.owner}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="typo-table-cell-muted-14">{item.dueDate}</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className="typo-table-meta-12">{item.lastUpdated}</span>
                </td>
              </tr>
            );
          })}
        {!isLoading && hasError && (
          <tr>
            <td colSpan={8} className="py-10">
              <EmptyState
                title="Unable to load tracking data"
                description={error}
              />
            </td>
          </tr>
        )}
        {!isLoading && !hasError && !hasRows && (
          <tr>
            <td colSpan={8} className="py-10">
              <EmptyState
                title="No tracking data"
                description="Try changing filters or add new criteria."
              />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
