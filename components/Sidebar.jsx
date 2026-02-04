import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuItems = [
  { iconSrc: '/icons/ic_home.png', label: 'Dashboard', href: '/' },
  { iconSrc: '/icons/ic_medical.png', label: 'Perspectives', href: '/perspectives' },
  { iconSrc: '/icons/ic_chart_bar_ine.png', label: 'Tracking', href: '/tracking' },
  { iconSrc: '/icons/ic_profile.png', label: 'Tasks', href: '/tasks' },
  { iconSrc: '/icons/ic_file.png', label: 'Documents', href: '/documents' },
  { iconSrc: '/icons/ic_chart_bar_ine.png', label: 'Reports', href: '/reports' },
  { iconSrc: '/icons/ic_user_multiple.png', label: 'Users & Roles', href: '/users' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-primary min-h-screen fixed left-0 top-0 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary-light relative" style={{ height: '60px' }}>
        <Image 
          src="/Tahwul.png" 
          alt="TAHWUL Logo" 
          width={100} 
          height={40}
          style={{ 
            width: '100px', 
            height: '40px',
            position: 'absolute',
            top: '10px',
            left: '23px',
            opacity: 1,
            transform: 'rotate(0deg)'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg
                transition-all duration-200 group
                ${isActive 
                  ? 'bg-primary-light text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-primary-light hover:text-white'
                }
              `}
            >
              <Image 
                src={item.iconSrc}
                alt={item.label}
                width={20}
                height={20}
                className={`
                  transition-transform duration-200
                  ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                `}
              />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-light">
        <div className="text-xs text-gray-400 text-center">
          © 2026 TAHWUL System
        </div>
      </div>
    </aside>
  );
}
