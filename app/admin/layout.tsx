import { Sidebar } from '@/components/admin/Sidebar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="md:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}