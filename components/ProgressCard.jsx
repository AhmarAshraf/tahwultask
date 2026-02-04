const statusStyles = {
  completed: 'bg-green-500 text-white',
  'in-progress': 'bg-orange-500 text-white',
  pending: 'bg-red-500 text-white',
  'not-started': 'bg-gray-400 text-white',
  'partially-uploaded': 'bg-[#1E3A5F] text-white',
  'fully-uploaded': 'bg-blue-600 text-white',
  delayed: 'bg-red-500 text-white'
};

function formatPercent(value) {
  const rounded = Math.round(value * 100) / 100;
  if (rounded === 100) return '100%';
  return `${rounded.toFixed(2)}%`;
}

export default function ProgressCard({ item }) {
  const stepsFor = (subItem) => {
    if (Array.isArray(subItem.steps) && subItem.steps.length > 0) {
      return subItem.steps;
    }
    return [1, 2, 3];
  };

  const normalizeSteps = (subItem) => {
    const steps = stepsFor(subItem);
    return steps.map((step, index) => {
      if (typeof step === 'object' && step !== null) {
        return {
          number: step.number ?? step.step ?? index + 1,
          status: step.status ?? subItem.status
        };
      }
      return { number: step, status: subItem.status };
    });
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-3">
      {/* Header pill */}
      <div className="bg-primary rounded-lg px-3 py-3 text-white text-center shadow-sm">
        <p className="text-[12px] font-bold leading-4 text-center capitalize">{item.name}</p>
        <div className="mt-2 inline-flex items-center justify-center rounded-full bg-[#2B4064] px-3 py-1">
          <span className="text-[12px] font-bold leading-4">{formatPercent(item.progress)}</span>
        </div>
      </div>

      {/* Sub sections */}
      <div className="mt-3 space-y-3">
        {item.subItems.map((subItem, index) => (
          <div key={index} className="bg-[#F7FAFC] border border-[#E4EAF2] rounded-lg px-3 py-2">
            <p className="text-[10px] font-normal leading-4 text-center capitalize text-[#6B7A90] mb-2">
              {subItem.name}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {normalizeSteps(subItem).map((step) => (
                <div
                  key={step.number}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold leading-4 ${
                    statusStyles[step.status] || statusStyles['not-started']
                  }`}
                >
                  {step.number}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
