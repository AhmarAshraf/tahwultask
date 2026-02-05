import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const menuItems = [
  { iconSrc: '/icons/home.png', label: 'Dashboard', href: '/' },
  { iconSrc: '/icons/file.png', label: 'Perspectives', href: '/perspectives' },
  { iconSrc: '/icons/chart_bar_ine.png', label: 'Tracking', href: '/tracking' },
  { iconSrc: '/icons/profile.png', label: 'Tasks', href: '/tasks' },
  { iconSrc: '/icons/file.png', label: 'Documents', href: '/documents' },
  { iconSrc: '/icons/chart_bar_ine.png', label: 'Reports', href: '/reports' },
  { iconSrc: '/icons/user_multiple.png', label: 'Users & Roles', href: '/users' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 sm:w-56 lg:w-64 bg-primary min-h-screen fixed left-0 top-0 text-white flex flex-col">
      {/* Logo */}
      <div className="h-16 px-3 sm:px-6 border-b border-primary-light flex items-center justify-center sm:justify-start">
        <Image
          src="/Tahwul.png"
          alt="TAHWUL Logo"
          width={100}
          height={40}
          className="w-10 h-10 sm:w-[100px] sm:h-[40px]"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 sm:px-3 py-6 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center justify-center sm:justify-start gap-0 sm:gap-3 px-3 sm:px-4 py-3 rounded-lg
                transition-all duration-200 group
                ${isActive 
                  ? 'sidebar-link-active sidebar-link-bg shadow-lg' 
                  : 'sidebar-link hover:bg-primary-light hover:text-white'
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
                  ${isActive ? 'scale-110 sidebar-icon-active' : 'sidebar-icon group-hover:scale-110'}
                `}
              />
              <span
                className={`hidden sm:inline typo-sidebar-14 ${
                  isActive ? 'sidebar-link-active' : 'sidebar-link'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-primary-light">
        <div className="hidden sm:block typo-meta-12 text-center">
          © 2026 TAHWUL System
        </div>
      </div>
    </aside>
  );
}
