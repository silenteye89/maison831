"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import type { Service } from "@/data/products";

interface Props {
  service: Service;
  cat: { id: string; label: string; labelKr: string; contentLabel: string } | undefined;
  related: Service[];
}

export default function ServiceDetailClient({ service, cat, related }: Props) {
  return (
    <div className="pt-16 lg:pt-0">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-8 pb-4">
        <nav className="text-[12px] text-oak/60 tracking-wider">
          <Link href="/" className="hover:text-brass transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{cat?.labelKr ?? service.category}</span>
          <span className="mx-2">/</span>
          <span className="text-dark-brown">{service.nameKr}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-cream">
              <img
                src={service.image}
                alt={service.nameKr}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-dark-brown/80 text-warm-white text-[10px] tracking-[0.1em] px-3 py-1.5 uppercase">
                {service.subCategory}
              </span>
              {service.isNew && (
                <span className="absolute top-4 right-4 bg-brass text-warm-white text-[10px] tracking-[0.1em] px-3 py-1.5">
                  NEW
                </span>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] tracking-[0.25em] text-brass uppercase mb-3">
              {cat?.label}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl text-dark-brown mb-2">
              {service.nameKr}
            </h1>
            <p className="text-[14px] text-oak/70 mb-4">{service.name}</p>
            <p className="font-serif text-2xl text-brass mb-8">
              {service.priceLabel}
            </p>

            <div className="border-t border-beige pt-6 mb-8">
              <p className="text-[14px] text-walnut/80 leading-relaxed">
                {service.descriptionKr}
              </p>
            </div>

            {/* Details */}
            <div className="mb-10">
              <h3 className="text-[11px] tracking-[0.15em] text-oak/60 uppercase mb-4">
                Details
              </h3>
              <ul className="space-y-2.5">
                {service.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14px] text-walnut/80"
                  >
                    <span className="w-1 h-1 rounded-full bg-brass mt-2 flex-none" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="inline-block bg-dark-brown text-warm-white px-8 py-3.5 text-[13px] tracking-[0.08em] hover:bg-walnut transition-colors duration-300"
              >
                문의하기
              </a>
              <Link
                href="/"
                className="inline-block border border-dark-brown text-dark-brown px-8 py-3.5 text-[13px] tracking-[0.08em] hover:bg-dark-brown hover:text-warm-white transition-colors duration-300"
              >
                목록으로
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related items */}
      {related.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24 border-t border-beige/50">
          <h2 className="text-[12px] tracking-[0.2em] text-dark-brown uppercase mb-8">
            Related {cat?.contentLabel}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
