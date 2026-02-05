import Image from 'next/image';
import { Search, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 right-0 left-20 sm:left-56 lg:left-64 z-10">
      <div className="h-full px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Search */}
        <div className="flex-1 max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg transition-colors hover:bg-gray-100">
            <Image
              src="/icons/bell.png"
              alt="Notifications"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
            <Image
              src="/avatars/mohammad_profile.png"
              alt="Mohamed"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="hidden sm:flex items-center space-x-2">
              <span className="typo-table-cell-medium-14">Mohammed</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
