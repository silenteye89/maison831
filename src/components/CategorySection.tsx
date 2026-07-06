"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, AnimatedText } from "./AnimatedSection";
import ProductCard from "./ProductCard";
import { services, categories } from "@/data/products";

const categoryHero: Record<string, { image: string; description: string }> = {
  web: {
    image: "/images/portfolio-2.jpg",
    description:
      "KAIST 출신 엔지니어가 직접 디자인하고 개발합니다. 단순한 홈페이지가 아닌, 비즈니스 성장을 이끄는 디지털 솔루션을 제공합니다.",
  },
  space: {
    image: "/images/space-3.jpg",
    description:
      "4m×11m의 숲뷰 유럽 감성 스튜디오. 미장벽, 앤틱 가구, 오크 원목 바닥이 어우러진 공간에서 특별한 순간을 만들어 보세요.",
  },
  class: {
    image: "/images/whisky.jpg",
    description:
      "위스키 테이스팅부터 보태니컬 드로잉까지. 취향을 탐험하고 새로운 영감을 발견하는 원데이 클래스를 진행합니다.",
  },
  vintage: {
    image: "/images/vintage.jpg",
    description:
      "유럽 각지에서 직접 큐레이션해 온 빈티지 의류, 앤틱 가구, 소품 컬렉션. 세월이 만든 아름다움을 소유해 보세요.",
  },
};

export default function CategorySection() {
  const [activeTab, setActiveTab] = useState<string>("web");

  const filteredItems = services.filter((s) => s.category === activeTab);
  const hero = categoryHero[activeTab];
  const activeCat = categories.find((c) => c.id === activeTab);

  return (
    <section id="categories" className="py-24 md:py-32 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <AnimatedText
          as="p"
          className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center"
        >
          Explore by Category
        </AnimatedText>
        <AnimatedText
          as="h2"
          className="font-serif text-3xl md:text-4xl text-dark-brown text-center mb-12"
          delay={0.1}
        >
          카테고리별 탐색
        </AnimatedText>

        {/* Tabs */}
        <AnimatedSection delay={0.2}>
          <div className="flex justify-center gap-1 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 text-[13px] tracking-[0.06em] transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-dark-brown text-warm-white"
                    : "bg-cream/60 text-walnut hover:bg-beige/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {/* Hero area */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={hero.image}
                  alt={activeCat?.labelKr}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[10px] tracking-[0.25em] text-brass uppercase mb-3">
                  {activeCat?.label}
                </p>
                <h3 className="font-serif text-2xl md:text-3xl text-dark-brown mb-4">
                  {activeCat?.labelKr}
                </h3>
                <p className="text-[14px] text-walnut/80 leading-relaxed mb-6">
                  {hero.description}
                </p>
                <p className="text-[12px] tracking-[0.1em] text-oak/60 uppercase">
                  {activeCat?.contentLabel} &middot; {filteredItems.length}개
                </p>
              </div>
            </div>

            {/* Item Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
