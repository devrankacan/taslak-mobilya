"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SiteColors = {
  cream: string;
  creamDark: string;
  walnut: string;
  walnutSoft: string;
  terracotta: string;
  terracottaDark: string;
  olive: string;
  oliveDark: string;
  border: string;
};

type SiteSettings = {
  logoUrl: string | null;
  siteName: string;
  colors: SiteColors;
};

const COLOR_LABELS: { key: keyof SiteColors; label: string }[] = [
  { key: "cream", label: "Krem (Zemin)" },
  { key: "creamDark", label: "Krem (Koyu)" },
  { key: "walnut", label: "Ceviz (Yazı)" },
  { key: "walnutSoft", label: "Ceviz (Soft)" },
  { key: "terracotta", label: "Terracotta" },
  { key: "terracottaDark", label: "Terracotta (Koyu)" },
  { key: "olive", label: "Zeytin Yeşili" },
  { key: "oliveDark", label: "Zeytin (Koyu)" },
  { key: "border", label: "Kenarlık" },
];

export default function AdminDashboardPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [siteName, setSiteName] = useState("");
  const [colors, setColors] = useState<SiteColors | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((res) => res.json())
      .then((data: SiteSettings) => {
        setSettings(data);
        setSiteName(data.siteName);
        setColors(data.colors);
      });
  }, []);

  const handleSaveSettings = async () => {
    setSaving(true);
    setMessage("");
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ siteName, colors }),
    });
    setSaving(false);
    if (res.ok) {
      const updated = await res.json();
      setSettings(updated);
      setMessage("Ayarlar kaydedildi.");
    } else {
      setMessage("Kaydedilirken bir hata oluştu.");
    }
  };

  const handleUploadLogo = async () => {
    if (!logoFile) return;
    setUploading(true);
    setMessage("");
    const formData = new FormData();
    formData.append("logo", logoFile);
    const res = await fetch("/api/admin/logo", { method: "POST", body: formData });
    setUploading(false);
    if (res.ok) {
      const updated = await res.json();
      setSettings(updated);
      setLogoFile(null);
      setMessage("Logo güncellendi.");
    } else {
      const data = await res.json().catch(() => ({}));
      setMessage(data.error || "Logo yüklenirken bir hata oluştu.");
    }
  };

  if (!settings || !colors) {
    return <p className="text-walnut-soft">Yükleniyor...</p>;
  }

  return (
    <div className="max-w-3xl space-y-10">
      <div>
        <h1 className="font-display text-3xl text-walnut mb-2">Site Ayarları</h1>
        <p className="text-sm text-walnut-soft">
          Logo, site adı ve marka renklerini buradan yönetebilirsiniz.
        </p>
      </div>

      {message && (
        <p className="text-sm bg-cream border border-border rounded-xl px-4 py-3 text-walnut">
          {message}
        </p>
      )}

      <section className="bg-white border border-border rounded-2xl p-6">
        <h2 className="font-display text-xl text-walnut mb-4">Logo</h2>
        <div className="flex items-center gap-6">
          <div className="w-32 h-20 rounded-xl border border-border flex items-center justify-center bg-cream overflow-hidden">
            {settings.logoUrl ? (
              <Image
                src={settings.logoUrl}
                alt="Logo"
                width={128}
                height={80}
                className="object-contain w-full h-full"
              />
            ) : (
              <span className="text-xs text-walnut-soft">Logo yok</span>
            )}
          </div>
          <div className="flex-1">
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp,image/svg+xml"
              onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
              className="block text-sm text-walnut-soft mb-3"
            />
            <button
              onClick={handleUploadLogo}
              disabled={!logoFile || uploading}
              className="btn-primary"
            >
              {uploading ? "Yükleniyor..." : "Logoyu Yükle"}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white border border-border rounded-2xl p-6">
        <h2 className="font-display text-xl text-walnut mb-4">Site Adı</h2>
        <input
          type="text"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm outline-none focus:border-terracotta"
        />
      </section>

      <section className="bg-white border border-border rounded-2xl p-6">
        <h2 className="font-display text-xl text-walnut mb-4">Marka Renkleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COLOR_LABELS.map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between gap-3">
              <span className="text-sm text-walnut">{label}</span>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={colors[key]}
                  onChange={(e) =>
                    setColors({ ...colors, [key]: e.target.value })
                  }
                  className="w-9 h-9 rounded-lg border border-border cursor-pointer"
                />
                <input
                  type="text"
                  value={colors[key]}
                  onChange={(e) =>
                    setColors({ ...colors, [key]: e.target.value })
                  }
                  className="w-24 rounded-lg border border-border bg-cream px-2 py-1.5 text-xs outline-none focus:border-terracotta"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <button onClick={handleSaveSettings} disabled={saving} className="btn-primary">
        {saving ? "Kaydediliyor..." : "Ayarları Kaydet"}
      </button>
    </div>
  );
}
