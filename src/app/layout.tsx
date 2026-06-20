import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { getSettings } from "@/lib/settings";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lonca Mobilya | Zanaatla Şekillenen Ev Tasarımları",
  description:
    "Lonca Mobilya ile oturma grubu, yemek odası, yatak odası ve daha fazlasında zarif, dayanıklı ve modern mobilyalar keşfedin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { colors } = getSettings();

  const themeVars = `:root{
    --background: ${colors.cream};
    --foreground: ${colors.walnut};
    --color-cream: ${colors.cream};
    --color-cream-dark: ${colors.creamDark};
    --color-walnut: ${colors.walnut};
    --color-walnut-soft: ${colors.walnutSoft};
    --color-terracotta: ${colors.terracotta};
    --color-terracotta-dark: ${colors.terracottaDark};
    --color-olive: ${colors.olive};
    --color-olive-dark: ${colors.oliveDark};
    --color-border: ${colors.border};
  }`;

  return (
    <html
      lang="tr"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Yönetim panelinden değiştirilen marka renkleri burada uygulanır */}
        <style id="theme-vars" dangerouslySetInnerHTML={{ __html: themeVars }} />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-walnut font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
