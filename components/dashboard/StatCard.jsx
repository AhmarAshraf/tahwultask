import Image from 'next/image';

export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl px-5 py-4 min-h-[92px] card-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="typo-stat-value-18">{value}</p>
          <p className="mt-2 typo-stat-label-12">{title}</p>
        </div>
        {icon && (
          <div className="relative w-7 h-7 mt-1">
            <Image src={icon} alt="" fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}
