import { writeFileSync, mkdirSync } from "fs";

const COLORS = {
  cream: "#FAF7F2",
  creamDark: "#F1EBE1",
  walnut: "#2B2420",
  walnutSoft: "#6B6259",
  terracotta: "#9C4B2E",
  olive: "#4B5842",
  border: "#E5DED4",
};

function wrap(w, h, blobs, icon) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="${COLORS.creamDark}"/>
  ${blobs}
  ${icon}
</svg>`;
}

function blob(cx, cy, r, color, opacity = 0.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

const stroke = `stroke="${COLORS.walnut}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"`;

const icons = {
  sofa: (cx, cy, s) => `
    <g transform="translate(${cx - 90 * s},${cy - 60 * s}) scale(${s})">
      <path d="M10 70 L10 50 Q10 38 22 38 L158 38 Q170 38 170 50 L170 70" ${stroke}/>
      <rect x="0" y="70" width="180" height="34" rx="10" ${stroke}/>
      <rect x="-8" y="78" width="20" height="40" rx="6" ${stroke}/>
      <rect x="168" y="78" width="20" height="40" rx="6" ${stroke}/>
      <line x1="10" y1="104" x2="10" y2="120" ${stroke}/>
      <line x1="170" y1="104" x2="170" y2="120" ${stroke}/>
    </g>`,
  dining: (cx, cy, s) => `
    <g transform="translate(${cx - 90 * s},${cy - 70 * s}) scale(${s})">
      <ellipse cx="90" cy="40" rx="90" ry="14" ${stroke}/>
      <line x1="20" y1="46" x2="10" y2="100" ${stroke}/>
      <line x1="160" y1="46" x2="170" y2="100" ${stroke}/>
      <path d="M40 80 L40 130 M70 80 L70 130 M40 90 L70 90" ${stroke}/>
      <path d="M110 80 L110 130 M140 80 L140 130 M110 90 L140 90" ${stroke}/>
    </g>`,
  bed: (cx, cy, s) => `
    <g transform="translate(${cx - 95 * s},${cy - 55 * s}) scale(${s})">
      <rect x="0" y="20" width="30" height="70" rx="6" ${stroke}/>
      <rect x="30" y="50" width="160" height="40" rx="8" ${stroke}/>
      <line x1="0" y1="90" x2="0" y2="110" ${stroke}/>
      <line x1="190" y1="90" x2="190" y2="110" ${stroke}/>
      <path d="M40 50 Q40 38 55 38 L175 38 Q190 38 190 50" ${stroke}/>
    </g>`,
  desk: (cx, cy, s) => `
    <g transform="translate(${cx - 85 * s},${cy - 60 * s}) scale(${s})">
      <rect x="0" y="30" width="170" height="14" rx="4" ${stroke}/>
      <line x1="10" y1="44" x2="10" y2="110" ${stroke}/>
      <line x1="160" y1="44" x2="160" y2="110" ${stroke}/>
      <path d="M60 60 Q90 60 90 90 L90 120" ${stroke}/>
      <ellipse cx="90" cy="126" rx="22" ry="6" ${stroke}/>
    </g>`,
  lamp: (cx, cy, s) => `
    <g transform="translate(${cx - 40 * s},${cy - 80 * s}) scale(${s})">
      <path d="M10 0 L70 0 L55 40 L25 40 Z" ${stroke}/>
      <line x1="40" y1="40" x2="40" y2="130" ${stroke}/>
      <ellipse cx="40" cy="150" rx="35" ry="8" ${stroke}/>
    </g>`,
  bunk: (cx, cy, s) => `
    <g transform="translate(${cx - 90 * s},${cy - 70 * s}) scale(${s})">
      <rect x="0" y="0" width="170" height="24" rx="6" ${stroke}/>
      <rect x="0" y="60" width="170" height="24" rx="6" ${stroke}/>
      <line x1="6" y1="0" x2="6" y2="120" ${stroke}/>
      <line x1="164" y1="0" x2="164" y2="120" ${stroke}/>
    </g>`,
};

mkdirSync("public/images", { recursive: true });

const categoryIcons = {
  "oturma-grubu": "sofa",
  "yemek-odasi": "dining",
  "yatak-odasi": "bed",
  "genc-odasi": "bunk",
  "calisma-odasi": "desk",
  "aydinlatma-dekor": "lamp",
};

for (const [slug, iconKey] of Object.entries(categoryIcons)) {
  const svg = wrap(
    900,
    900,
    blob(680, 220, 280, COLORS.terracotta, 0.12) +
      blob(180, 720, 260, COLORS.olive, 0.14),
    icons[iconKey](450, 450, 2.4)
  );
  writeFileSync(`public/images/category-${slug}.svg`, svg);
}

// Hero (wide)
writeFileSync(
  "public/images/hero-livingroom.svg",
  wrap(
    1200,
    1400,
    blob(950, 280, 380, COLORS.terracotta, 0.14) +
      blob(220, 1150, 360, COLORS.olive, 0.16),
    icons.sofa(600, 700, 3.6)
  )
);

// About images
writeFileSync(
  "public/images/about-banner.svg",
  wrap(
    1600,
    900,
    blob(1300, 200, 340, COLORS.olive, 0.18) + blob(250, 750, 300, COLORS.terracotta, 0.14),
    icons.desk(800, 450, 3)
  )
);
writeFileSync(
  "public/images/about-square.svg",
  wrap(
    1000,
    1000,
    blob(780, 220, 280, COLORS.terracotta, 0.14) + blob(200, 800, 280, COLORS.olive, 0.16),
    icons.dining(500, 500, 2.6)
  )
);

// Product images reuse category icon with slight variation (different blob layout) for a touch of variety
const productIconVariants = {
  "verona-kose-koltuk-takimi": ["sofa", "sofa"],
  "milano-3lu-kanepe": ["sofa", "sofa"],
  "luna-berjer": ["sofa"],
  "ada-yemek-masasi-takimi": ["dining", "dining"],
  "vento-bar-sandalyesi": ["dining"],
  "norden-yatak-odasi-takimi": ["bed", "bed"],
  "mira-baza-basliklik": ["bed"],
  "kibris-genc-odasi": ["bunk"],
  "fora-calisma-masasi": ["desk"],
  "ergo-ofis-koltugu": ["desk"],
  "salina-lambader": ["lamp"],
  "tarz-hali-200x300": ["lamp"],
};

for (const [slug, iconKeys] of Object.entries(productIconVariants)) {
  iconKeys.forEach((iconKey, i) => {
    const flip = i % 2 === 1;
    const svg = wrap(
      1200,
      900,
      blob(flip ? 250 : 950, flip ? 200 : 250, 300, COLORS.terracotta, 0.13) +
        blob(flip ? 950 : 250, flip ? 700 : 680, 280, COLORS.olive, 0.15),
      icons[iconKey](600, 450, 3)
    );
    writeFileSync(`public/images/product-${slug}-${i + 1}.svg`, svg);
  });
}

console.log("done");
