"use client";

import Link from "next/link";
import type { Service } from "@/data/products";

interface ProductCardProps {
  item: Service;
  className?: string;
}

export default function ProductCard({ item, className = "" }: ProductCardProps) {
  return (
    <Link
      href={`/service/${item.id}`}
      className={`group block ${className}`}
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-3">
        <img
          src={item.image}
          alt={item.nameKr}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-dark-brown/80 text-warm-white text-[10px] tracking-[0.1em] px-3 py-1 uppercase">
          {item.subCategory}
        </span>
        {item.isNew && (
          <span className="absolute top-3 right-3 bg-brass text-warm-white text-[10px] tracking-[0.1em] px-2 py-1">
            NEW
          </span>
        )}
      </div>
      <div>
        <p className="text-[11px] tracking-[0.06em] text-oak/70 mb-0.5">
          {item.name}
        </p>
        <h3 className="text-[14px] font-medium text-dark-brown mb-1">
          {item.nameKr}
        </h3>
        <p className="text-[13px] text-brass">
          {item.priceLabel}
        </p>
      </div>
    </Link>
  );
}
