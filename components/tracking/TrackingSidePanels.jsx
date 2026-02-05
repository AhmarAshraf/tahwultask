import { Users, Calendar, TrendingUp } from "lucide-react";

const alertStyles = {
  red: {
    bg: "bg-red-50",
    border: "border-red-200",
    dot: "bg-red-500",
    title: "text-red-800",
    text: "text-red-700",
  },
  yellow: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    dot: "bg-yellow-500",
    title: "text-yellow-800",
    text: "text-yellow-700",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
    title: "text-blue-800",
    text: "text-blue-700",
  },
};

export default function TrackingSidePanels({ team, deadlines, alerts }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl p-6 card-shadow">
        <h3 className="typo-heading-16 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-accent-teal" />
          Team Overview
        </h3>
        <div className="space-y-3">
          {team.map((member, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                  <span className="typo-initials-14 text-white">
                    {member.initials}
                  </span>
                </div>
                <div>
                  <p className="typo-table-cell-medium-14">{member.name}</p>
                  <p className="typo-table-meta-12">{member.criteria} criteria</p>
                </div>
              </div>
              <div className="text-right">
                <p className="typo-score-14">{member.score}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 card-shadow">
        <h3 className="typo-heading-16 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-orange-500" />
          Upcoming Deadlines
        </h3>
        <div className="space-y-3">
          {deadlines.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex-1">
                <p className="typo-table-cell-medium-14">{item.name}</p>
                <p className="typo-table-meta-12">{item.date}</p>
              </div>
              <div className={`px-2 py-1 rounded typo-pill-12 ${
                item.days <= 7 ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-700"
              }`}>
                {item.days}d
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 card-shadow">
        <h3 className="typo-heading-16 mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-red-500" />
          Risk Alerts
        </h3>
        <div className="space-y-3">
          {alerts.map((alert, index) => {
            const styles = alertStyles[alert.color] || alertStyles.red;
            return (
              <div key={index} className={`p-3 ${styles.bg} border ${styles.border} rounded-lg`}>
                <div className="flex items-start space-x-2">
                  <div className={`w-2 h-2 ${styles.dot} rounded-full mt-1.5 flex-shrink-0`}></div>
                  <div>
                    <p className={`typo-table-meta-12 ${styles.title} mb-1`}>
                      {alert.type} Priority
                    </p>
                    <p className={`typo-table-cell-14 ${styles.text}`}>{alert.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
