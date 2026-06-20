import Link from "next/link";
import AdminLogoutButton from "@/components/AdminLogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream-dark">
      <header className="bg-walnut text-cream">
        <div className="container-page flex items-center justify-between py-4">
          <Link href="/admin" className="font-display text-xl tracking-wide">
            Yönetim Paneli
          </Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" target="_blank" className="hover:text-terracotta transition-colors">
              Siteyi Gör
            </Link>
            <AdminLogoutButton />
          </nav>
        </div>
      </header>
      <main className="container-page py-10">{children}</main>
    </div>
  );
}
