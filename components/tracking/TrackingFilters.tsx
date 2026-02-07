import { Search, Filter, Download } from "lucide-react";
import Button from "../ui/Button";

const filterButtons = [
  { id: "all", label: "All" },
  { id: "completed", label: "Completed" },
  { id: "in-progress", label: "In Progress" },
];

type FilterId = "all" | "completed" | "in-progress";

type TrackingFiltersProps = {
  selectedFilter: FilterId;
  onFilterChange?: (id: FilterId) => void;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
};

export default function TrackingFilters({
  selectedFilter,
  onFilterChange = () => {},
  searchQuery = "",
  onSearchChange = () => {},
}: TrackingFiltersProps) {
  return (
    <div className="card-base p-4 card-shadow transition-shadow hover:card-shadow-hover">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              aria-label="Search criteria"
              placeholder="Search criteria..."
              value={searchQuery}
              onChange={(event) => onSearchChange(event.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg typo-table-cell-14 focus-ring"
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => onFilterChange(button.id)}
              className={`px-4 py-2 rounded-lg typo-table-cell-medium-14 transition-colors focus-ring active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${
                selectedFilter === button.id
                  ? "bg-accent-teal text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              type="button"
            >
              {button.label}
            </button>
          ))}
          <button
            className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors focus-ring active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="More filters"
            type="button"
          >
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
          <Button variant="primary" size="md" className="gap-2">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
