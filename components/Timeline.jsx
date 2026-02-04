export default function Timeline({ data }) {
  const total = data.length;
  const completedCount = data.filter((item) => item.status === 'completed').length;
  const progressPercent = total > 1 ? ((completedCount - 1) / (total - 1)) * 100 : 0;

  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <div className="flex items-center justify-between mb-8">
        <h3 className="typo-heading-16">Project Timeline</h3>
        <div className="relative">
          <select className="text-sm border border-gray-300 rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none">
            <option>2026</option>
            <option>2025</option>
          </select>
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="relative px-6">
        {/* Track row */}
        <div className="relative h-12 w-[1103.94px] max-w-full mx-auto">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[16px] rounded-[10px] bg-[#F5F8FB]"></div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-[16px] w-full rounded-[10px]">
            <div
              className="h-full rounded-[6px] bg-green-500"
              style={{ width: `${Math.max(0, progressPercent)}%` }}
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
        <div className="mt-4 flex justify-between w-[1103.94px] max-w-full mx-auto">
          {data.map((item) => (
            <div key={`${item.id}-label`} className="text-center px-3" style={{ flex: 1 }}>
              <p className="typo-date-14 mb-1 whitespace-nowrap">
                {item.date}
              </p>
              <p className="typo-subtitle-14 whitespace-nowrap">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
