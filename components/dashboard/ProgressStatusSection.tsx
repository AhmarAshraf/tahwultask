import ProgressCard from "./ProgressCard";
import type { ProgressStatusItem } from "../../types/models";

const legendItems = [
  { label: "Not Started", color: "bg-gray-400" },
  { label: "In Progress", color: "bg-orange-500" },
  { label: "Completed", color: "bg-green-500" },
  { label: "Partially Uploaded", color: "bg-primary" },
  { label: "Fully Uploaded", color: "bg-blue-600" },
  { label: "Delayed", color: "bg-red-500" },
];

type ProgressStatusSectionProps = {
  items: ProgressStatusItem[];
};

export default function ProgressStatusSection({ items }: ProgressStatusSectionProps) {
  return (
    <div className="card-base p-4 card-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
        <h2 className="typo-section-18">Progress Status</h2>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center space-x-2">
              <div className={`w-2.5 h-2.5 ${item.color} rounded-full`}></div>
              <span className="typo-legend-12">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-10 gap-4">
        {items.map((item) => (
          <ProgressCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
