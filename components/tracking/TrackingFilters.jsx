import { Search, Filter, Download } from "lucide-react";

const filterButtons = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
];

export default function TrackingFilters({ selectedFilter, onFilterChange }) {
  return (
    <div className="bg-white rounded-xl p-4 card-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search criteria..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg typo-table-cell-14 focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => onFilterChange(button.id)}
              className={`px-4 py-2 rounded-lg typo-table-cell-medium-14 transition-colors ${
                selectedFilter === button.id
                  ? "bg-accent-teal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {button.label}
            </button>
          ))}
          <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center space-x-2 typo-table-cell-medium-14">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>
    </div>
  );
}
