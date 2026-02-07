import EmptyState from "../ui/EmptyState";
import Skeleton from "../ui/Skeleton";

export default function RecentActivities({
  activities,
  className = "",
  variant = "default",
  isLoading = false,
  emptyMessage = "No recent activity yet.",
}) {
  const variants = {
    default: {
      list: "mt-4 space-y-4",
      item: "border-b border-gray-200 pb-4 last:border-0 hover:bg-gray-50 transition-colors",
    },
    compact: {
      list: "mt-3 space-y-3",
      item: "border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 transition-colors",
    },
  };
  const current = variants[variant] || variants.default;
  const hasItems = Array.isArray(activities) && activities.length > 0;
  return (
    <div className={`card-base min-h-[294px] p-6 card-shadow transition-shadow hover:card-shadow-hover ${className}`.trim()}>
      <h2 className="typo-title-16">Recent Activities</h2>
      <div className="mt-4 border-t border-gray-200"></div>

      <div className={current.list}>
        {isLoading &&
          Array.from({ length: 3 }).map((_, index) => (
            <div key={`skeleton-${index}`} className={current.item}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gray-200 flex-shrink-0"></span>
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          ))}
        {!isLoading && hasItems &&
          activities.map((activity) => (
            <div key={activity.id} className={current.item}>
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
        {!isLoading && !hasItems && (
          <EmptyState
            title="No recent activity"
            description={emptyMessage}
          />
        )}
      </div>
    </div>
  );
}
