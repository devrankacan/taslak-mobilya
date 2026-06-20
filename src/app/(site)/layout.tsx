import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CartDrawer from "@/components/CartDrawer";
import { getSettings } from "@/lib/settings";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = getSettings();

  return (
    <>
      <Header logoUrl={settings.logoUrl} siteName={settings.siteName} />
      <main className="flex-1">{children}</main>
      <Footer siteName={settings.siteName} />
      <WhatsAppButton />
      <CartDrawer />
    </>
  );
}
