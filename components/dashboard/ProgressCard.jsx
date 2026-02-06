const statusStyles = {
  completed: 'bg-green-500 text-white',
  'in-progress': 'bg-orange-500 text-white',
  pending: 'bg-red-500 text-white',
  'not-started': 'bg-gray-400 text-white',
  'partially-uploaded': 'bg-primary text-white',
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
        <p className="typo-progress-title-12 text-white">{item.name}</p>
        <div className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-pill-dark)] px-3 py-1">
          <span className="typo-progress-percent-12 text-white">{formatPercent(item.progress)}</span>
        </div>
      </div>

      {/* Sub sections */}
      <div className="mt-3 space-y-3">
        {item.subItems.map((subItem, index) => (
          <div key={index} className="bg-[var(--color-surface-soft)] border border-[var(--color-border-soft)] rounded-lg px-3 py-2">
            <p className="typo-progress-subtitle-10 mb-2">
              {subItem.name}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {normalizeSteps(subItem).map((step) => (
                <div
                  key={step.number}
                  className={`w-6 h-6 rounded-full flex items-center justify-center typo-progress-step-12 ${
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
