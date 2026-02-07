export default function Timeline({ data }) {
  const total = data.length;
  const completedCount = data.filter((item) => item.status === 'completed').length;
  const progressPercent = total > 1 ? ((completedCount - 1) / (total - 1)) * 100 : 0;

  return (
    <div className="card-base p-6 card-shadow transition-shadow hover:card-shadow-hover">
      <div className="flex items-center justify-between mb-6">
        <h3 className="typo-heading-16">Project Timeline</h3>
        <div className="relative">
        <select
            aria-label="Select year"
            className="typo-table-cell-14 border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus-ring appearance-none"
          >
            <option>2026</option>
            <option>2025</option>
          </select>
          <svg
            className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="relative">
        {/* Track row */}
        <div className="relative h-12 w-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[16px] rounded-[10px] bg-[var(--color-timeline-track)]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[16px] w-full rounded-[10px]">
            <div
              className="h-full rounded-[6px] bg-green-500 progress-animate"
              style={{ '--progress': `${Math.max(0, progressPercent)}%` }}
            ></div>
          </div>

          <div className="relative flex justify-between h-full">
            {data.map((item) => {
              const isCompleted = item.status === 'completed';
              return (
                <div key={item.id} className="flex items-center justify-center" style={{ flex: 1 }}>
                  <div
                    className={`w-3 h-3 rounded-full z-10 ${
                      isCompleted ? 'bg-white' : 'bg-red-500'
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Labels */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-3 text-center">
          {data.map((item) => (
            <div key={`${item.id}-label`} className="px-2">
              <p className="typo-date-14 mb-1">
                {item.date}
              </p>
              <p className="typo-subtitle-14">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
