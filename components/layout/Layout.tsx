import Sidebar from './Sidebar';
import Header from './Header';
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--color-page-bg)]">
      <Sidebar />
      <Header />
      <main className="ml-20 sm:ml-56 lg:ml-64 pt-16 min-h-screen bg-[var(--color-page-bg)]">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
