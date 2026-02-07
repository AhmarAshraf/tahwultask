type TabItem = {
  id: string;
  label: string;
  disabled?: boolean;
};

type PillTabsProps = {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
};

export default function PillTabs({ tabs, activeTab, onChange, className = "" }: PillTabsProps) {
  return (
    <div className={`inline-flex rounded-lg bg-gray-100 p-1 ${className}`.trim()}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-2 rounded-md typo-table-cell-medium-14 transition-all focus-ring active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed ${
              isActive
                ? "bg-white text-gray-900 shadow-sm scale-[1.02]"
                : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
            }`}
            disabled={tab.disabled}
            type="button"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
