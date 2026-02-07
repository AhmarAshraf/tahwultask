const statusStyles = {
  approved: "bg-green-50 text-green-700",
  completed: "bg-green-50 text-green-700",
  "in progress": "bg-yellow-50 text-yellow-700",
  "in review": "bg-yellow-50 text-yellow-700",
  "under review": "bg-blue-50 text-blue-700",
  "pending review": "bg-yellow-50 text-yellow-700",
  pending: "bg-gray-100 text-gray-600",
  rejected: "bg-red-50 text-red-600",
};

type StatusPillProps = {
  status: string;
  variant?: string;
  className?: string;
};

export default function StatusPill({ status, variant, className = "" }: StatusPillProps) {
  const key = (variant || status || "").toLowerCase();
  const style = statusStyles[key] || "bg-gray-100 text-gray-600";
  return (
    <span className={`status-badge ${style} ${className}`.trim()}>
      {status}
    </span>
  );
}
