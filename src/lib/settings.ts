import fs from "fs";
import path from "path";

export type SiteColors = {
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

export type SiteSettings = {
  logoUrl: string | null;
  siteName: string;
  colors: SiteColors;
};

const SETTINGS_PATH = path.join(process.cwd(), "data", "site-settings.json");

export const DEFAULT_SETTINGS: SiteSettings = {
  logoUrl: null,
  siteName: "Lonca Mobilya",
  colors: {
    cream: "#FAF7F2",
    creamDark: "#F1EBE1",
    walnut: "#2B2420",
    walnutSoft: "#6B6259",
    terracotta: "#9C4B2E",
    terracottaDark: "#7E3B22",
    olive: "#4B5842",
    oliveDark: "#3A4534",
    border: "#E5DED4",
  },
};

export function getSettings(): SiteSettings {
  try {
    const raw = fs.readFileSync(SETTINGS_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      colors: { ...DEFAULT_SETTINGS.colors, ...parsed.colors },
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(update: Partial<SiteSettings>): SiteSettings {
  const current = getSettings();
  const next: SiteSettings = {
    ...current,
    ...update,
    colors: { ...current.colors, ...update.colors },
  };
  fs.mkdirSync(path.dirname(SETTINGS_PATH), { recursive: true });
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(next, null, 2));
  return next;
}
