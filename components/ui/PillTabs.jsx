export default function PillTabs({ tabs, activeTab, onChange, className = "" }) {
  return (
    <div className={`inline-flex rounded-lg bg-gray-100 p-1 ${className}`.trim()}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-2 rounded-md typo-table-cell-medium-14 transition-colors ${
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
