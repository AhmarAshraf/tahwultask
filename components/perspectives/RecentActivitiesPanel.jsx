import { Clock } from "lucide-react";

export default function RecentActivitiesPanel({ activities }) {
  return (
    <div className="bg-white w-full min-h-[294px] rounded-[10px] border border-gray-200 p-6 card-shadow">
      <h3 className="typo-heading-16 mb-3 flex items-center">
        <Clock className="w-5 h-5 mr-2" />
        Recent Activities
      </h3>
      <div className="border-t border-gray-200"></div>
      <div className="mt-3 divide-y divide-gray-200">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-2 py-3"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
            <div className="flex-1">
              <p className="typo-activity-title-16">{activity.title}</p>
              <span className="typo-activity-time-12">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
