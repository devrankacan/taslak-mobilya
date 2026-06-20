"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";

export default function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-border rounded-full">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center text-lg"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Azalt"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-medium">{quantity}</span>
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center text-lg"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Artır"
        >
          +
        </button>
      </div>
      <button type="button" onClick={handleAdd} className="btn-primary flex-1">
        {added ? "Sepete Eklendi ✓" : "Sepete Ekle"}
      </button>
    </div>
  );
}
