import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
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
