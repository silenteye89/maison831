"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-warm-white overflow-hidden">
      {/* Background decorative 831 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span className="font-serif text-[20rem] md:text-[28rem] text-beige/30 font-light leading-none">
          831
        </span>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with stats overlay */}
          <AnimatedSection>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1100&fit=crop&q=80"
                alt="Maison831 Studio Interior"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-dark-brown/90 backdrop-blur-sm p-6 md:p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-serif text-3xl text-brass mb-1">4</p>
                    <p className="text-[11px] tracking-[0.12em] text-stone uppercase">
                      Business Areas
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-brass mb-1">KAIST</p>
                    <p className="text-[11px] tracking-[0.12em] text-stone uppercase">
                      Engineer-Led
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: About text */}
          <div className="lg:pl-4">
            <AnimatedText as="p" className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4" delay={0.1}>
              About Us
            </AnimatedText>
            <AnimatedText as="h2" className="font-serif text-3xl md:text-4xl text-dark-brown mb-8" delay={0.2}>
              일과 취향이
              <br />
              만나는 공간
            </AnimatedText>
            <AnimatedSection delay={0.3}>
              <div className="border-l-2 border-brass/40 pl-6 space-y-4">
                <p className="text-[15px] text-walnut/80 leading-relaxed">
                  메종 831은 KAIST 출신 엔지니어가 직접 디자인하고 개발하는 프리미엄
                  웹사이트 제작부터, 유럽 감성의 공간대여, 원데이 클래스,
                  빈티지 컬렉션까지 운영하는 큐레이션 라이프스타일 스튜디오입니다.
                </p>
                <p className="text-[15px] text-walnut/80 leading-relaxed">
                  &apos;기술과 감성의 조화&apos;를 모토로, 모든 프로젝트에 엔지니어링의
                  정밀함과 유럽 미학의 따뜻함을 담아냅니다. 4m&times;11m의 숲뷰
                  스튜디오에서 미장벽, 앤틱 가구, 오크 원목이 만들어내는 특별한
                  경험을 선사합니다.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
