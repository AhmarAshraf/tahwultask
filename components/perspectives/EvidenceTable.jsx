import { useMemo, useState } from "react";
import Table from "../ui/Table";
import StatusPill from "../ui/StatusPill";
import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";

const columns = [
  { key: "docNumber", label: "Document Number" },
  { key: "name", label: "Document Name" },
  { key: "lead", label: "Document Lead" },
  { key: "preparer", label: "Document Preparer" },
  { key: "date", label: "Date", type: "date" },
  { key: "dueDate", label: "Due Date", type: "date" },
  { key: "status", label: "Status" },
];

export default function EvidenceTable({ rows, isLoading = false, error = "" }) {
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedRows = useMemo(() => {
    if (!sortConfig.key) return rows;
    const column = columns.find((col) => col.key === sortConfig.key);
    const dir = sortConfig.direction === "asc" ? 1 : -1;
    const copy = [...rows];
    copy.sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];
      if (column?.type === "date") {
        const aTime = aVal ? new Date(aVal).getTime() : 0;
        const bTime = bVal ? new Date(bVal).getTime() : 0;
        return (aTime - bTime) * dir;
      }
      return String(aVal ?? "").localeCompare(String(bVal ?? ""), undefined, {
        numeric: true,
        sensitivity: "base",
      }) * dir;
    });
    return copy;
  }, [rows, sortConfig]);

  const hasRows = Array.isArray(sortedRows) && sortedRows.length > 0;
  const hasError = Boolean(error);

  return (
    <Table>
      <thead className="bg-gray-50">
        <tr>
          {columns.map((col, index) => (
            <th
              key={col.key}
              className={`text-left py-3 px-4 typo-table-head-14 ${
                index === 0 ? "rounded-l-lg" : ""
              } ${index === columns.length - 1 ? "rounded-r-lg" : ""}`}
            >
              <button
                type="button"
                onClick={() => handleSort(col.key)}
                className="flex items-center gap-2 select-none focus-ring rounded disabled:opacity-60 disabled:cursor-not-allowed"
                aria-label={`Sort by ${col.label}`}
                aria-sort={
                  sortConfig.key === col.key
                    ? sortConfig.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : "none"
                }
              >
                <span className={sortConfig.key === col.key ? "text-[var(--color-ink)]" : ""}>
                  {col.label}
                </span>
                <img
                  src="/icons/sort-az.png"
                  alt=""
                  className={`w-[12px] h-[12px] transition-transform ${
                    sortConfig.key === col.key && sortConfig.direction === "desc"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading &&
          Array.from({ length: 3 }).map((_, rowIndex) => (
            <tr key={`skeleton-${rowIndex}`} className="border-b border-gray-100 last:border-0">
              {columns.map((col) => (
                <td key={`${rowIndex}-${col.key}`} className="py-4 px-4">
                  <Skeleton className="h-4 w-full" />
                </td>
              ))}
            </tr>
          ))}
        {!isLoading && !hasError && hasRows &&
          sortedRows.map((doc, index) => (
            <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <td className="py-4 px-4 typo-table-cell-14">
                {doc.docNumber}
              </td>
              <td className="py-4 px-4">
                <span className="typo-docname-14">{doc.name}</span>
              </td>
              <td className="py-4 px-4 typo-table-cell-14">
                {doc.lead}
              </td>
              <td className="py-4 px-4 typo-table-cell-14">
                {doc.preparer}
              </td>
              <td className="py-4 px-4 typo-table-cell-muted-14">
                {doc.date}
              </td>
              <td className="py-4 px-4 typo-table-cell-muted-14">
                {doc.dueDate}
              </td>
              <td className="py-4 px-4">
                <StatusPill status={doc.status} />
              </td>
            </tr>
          ))}
        {!isLoading && hasError && (
          <tr>
            <td colSpan={columns.length} className="py-8">
              <EmptyState
                title="Unable to load evidence"
                description={error}
              />
            </td>
          </tr>
        )}
        {!isLoading && !hasError && !hasRows && (
          <tr>
            <td colSpan={columns.length} className="py-8">
              <EmptyState
                title="No evidence documents"
                description="Upload a document to get started."
              />
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
