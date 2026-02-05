export default function TopPerformers({ performers }) {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h2 className="typo-section-18 mb-4">Top Performing Perspective Leaders</h2>

      <div className="mt-4 space-y-4">
        {performers.map((performer, index) => (
          <div
            key={performer.id}
            className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#E0E8ED] flex-shrink-0">
                {performer.avatar ? (
                  <img
                    src={performer.avatar}
                    alt={performer.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center typo-avatar-initials-14">
                    {performer.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="typo-name-16">{performer.name}</p>
                <p className="typo-desc-16">{performer.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="typo-score-16">{performer.score}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
