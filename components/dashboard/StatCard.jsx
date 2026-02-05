import Image from 'next/image';

export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 card-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
      <p className="typo-stat-value-18">{value}</p>
      <p className="mt-2 typo-stat-label-12">{title}</p>
        </div>
        {icon && (
          <div className="relative w-6 h-6">
            <Image src={icon} alt="" fill className="object-contain" />
          </div>
        )}
      </div>
    </div>
  );
}
