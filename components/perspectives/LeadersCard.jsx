export default function LeadersCard({ leaders }) {
  return (
    <div className="card-base p-4 card-shadow transition-shadow hover:card-shadow-hover">
      <h3 className="typo-overview-title-15 mb-4">Leaders</h3>
      <div className="flex flex-wrap gap-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 shadow-sm"
          >
            {leader.avatar ? (
              <img
                src={leader.avatar}
                alt={leader.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-gradient-to-br from-accent-teal to-blue-600 rounded-full flex items-center justify-center">
                <span className="typo-initials-14 text-white">
                  {leader.name.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="typo-leader-name-15">{leader.name}</p>
              <p className="typo-leader-role-14">{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
