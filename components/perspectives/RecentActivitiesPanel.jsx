import { Clock } from "lucide-react";

export default function RecentActivitiesPanel({ activities }) {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h3 className="typo-heading-16 mb-4 flex items-center">
        <Clock className="w-5 h-5 mr-2" />
        Recent Activities
      </h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 pb-3 border-b border-gray-100 last:border-0"
          >
            <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="typo-activity-title-14">{activity.title}</p>
              <span className="typo-activity-time-12">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
