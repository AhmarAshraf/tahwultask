import Image from 'next/image';

export default function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 card-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-[18px] font-semibold text-gray-900 leading-none">{value}</p>
          <p className="mt-2 text-[12px] text-gray-500">{title}</p>
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
