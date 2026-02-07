import { File, FileSearch, FileClock, FileCheck } from "lucide-react";

const cards = [
  { key: "totalEvidence", label: "Total Evidence", Icon: File },
  { key: "underReview", label: "Under Review Evidence", Icon: FileSearch },
  { key: "inProgress", label: "In Progress Evidence", Icon: FileClock },
  { key: "completed", label: "Completed Evidence", Icon: FileCheck },
];

export default function EvidenceSummaryCards({ perspective }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className="card-base p-4 card-shadow transition-shadow hover:card-shadow-hover"
        >
          <div className="flex items-center gap-3">
            <card.Icon className="w-6 h-6 text-red-500" />
            <div className="flex flex-col">
              <p className="typo-summary-value-20">{perspective[card.key]}</p>
              <p className="typo-summary-label-14 mt-1">{card.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
