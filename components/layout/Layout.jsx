import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <Sidebar />
      <Header />
      <main className="ml-64 pt-16 min-h-screen bg-[#F7F9FC]">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
