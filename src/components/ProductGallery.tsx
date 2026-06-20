"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  name,
  images,
  colors,
  discount,
}: {
  name: string;
  images: string[];
  colors: string[];
  discount: number | null;
}) {
  const [selectedColor, setSelectedColor] = useState<string | null>(colors[0] ?? null);

  return (
    <div className="grid gap-4">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-dark">
        <Image
          src={images[0]}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
        {selectedColor && (
          <div
            className="absolute inset-0 transition-colors duration-300"
            style={{ backgroundColor: selectedColor, mixBlendMode: "multiply", opacity: 0.32 }}
            aria-hidden="true"
          />
        )}
        {discount && (
          <span className="absolute top-4 left-4 bg-terracotta text-white text-xs font-semibold px-3 py-1 rounded-full">
            %{discount} indirim
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((img) => (
            <div
              key={img}
              className="relative aspect-square rounded-xl overflow-hidden bg-cream-dark"
            >
              <Image src={img} alt={name} fill sizes="200px" className="object-cover" />
              {selectedColor && (
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: selectedColor, mixBlendMode: "multiply", opacity: 0.32 }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {colors.length > 0 && (
        <div>
          <p className="text-sm font-medium text-walnut mb-2">Renk Seçenekleri</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                aria-label={`${color} rengini seç`}
                aria-pressed={selectedColor === color}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  selectedColor === color
                    ? "border-terracotta scale-110"
                    : "border-border hover:scale-105"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
