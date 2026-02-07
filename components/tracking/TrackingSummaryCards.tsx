import { TrendingUp } from "lucide-react";
import Card from "../ui/Card";
import type { TrackingSummaryMetric } from "../../types/models";

const metricStyles = {
  blue: { bg: "bg-blue-100", text: "text-blue-600" },
  green: { bg: "bg-green-100", text: "text-green-600" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  gray: { bg: "bg-gray-100", text: "text-gray-600" },
};

const iconMap: Record<string, typeof TrendingUp> = {
  trend: TrendingUp,
};

type TrackingSummaryCardsProps = {
  metrics: TrackingSummaryMetric[];
};

export default function TrackingSummaryCards({ metrics }: TrackingSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => {
        const Icon = iconMap[metric.icon] || TrendingUp;
        const styles = metricStyles[metric.color] || metricStyles.gray;
        return (
          <Card
            key={index}
            className="p-6 hover:card-shadow-hover transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="typo-kpi-caption-14 mb-1">{metric.label}</p>
                <p className="typo-kpi-value-30">{metric.value}</p>
              </div>
              <div className={`w-12 h-12 ${styles.bg} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${styles.text}`} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
