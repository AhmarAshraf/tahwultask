import { Calendar } from "lucide-react";

const statusStyles = {
  Completed: "bg-green-100 text-green-800",
  "In Progress": "bg-yellow-100 text-yellow-800",
  "Under Review": "bg-blue-100 text-blue-800",
  Pending: "bg-gray-100 text-gray-800",
};

const progressStyles = {
  high: "bg-green-500",
  medium: "bg-yellow-500",
  low: "bg-orange-500",
};

const getProgressStyle = (progress) => {
  if (progress >= 80) return progressStyles.high;
  if (progress >= 50) return progressStyles.medium;
  return progressStyles.low;
};

export default function TrackingTable({ rows }) {
  return (
    <div className="bg-white rounded-xl card-shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
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
            {rows.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
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
                          className={`h-full ${getProgressStyle(item.progress)} transition-all duration-300`}
                          style={{ width: `${item.progress}%` }}
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
                  <span className={`status-badge ${statusStyles[item.status] || statusStyles.Pending}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                      <span className="typo-initials-12 text-white">
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
