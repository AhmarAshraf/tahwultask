export default function RecentActivities({ activities, className = "" }) {
  return (
    <div className={`bg-white rounded-xl max-h-[294px] p-6 card-shadow ${className}`.trim()}>
      <h2 className="typo-title-16">Recent Activities</h2>
      <div className="mt-4 border-t border-gray-200"></div>

      <div className="mt-4 space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-gray-200 pb-4 last:border-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 min-w-0 flex-1">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></span>
                <p className="typo-activity-title-16 break-all">{activity.title}</p>
              </div>
              <span className="typo-meta-12 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
