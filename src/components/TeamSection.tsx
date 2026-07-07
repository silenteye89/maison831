"use client";

import { AnimatedSection, AnimatedText } from "./AnimatedSection";

const members = [
  {
    name: "준",
    nameEn: "Jun",
    role: "Founder & Engineer",
    image: "/images/jun.png",
    description:
      "KAIST 출신 엔지니어. 기술과 감성의 경계를 넘나드는 프로덕트를 만듭니다. 웹·앱 개발부터 브랜드 전략까지, Maison831의 모든 기술적 비전을 이끕니다.",
  },
  {
    name: "아리",
    nameEn: "Ari",
    role: "Creative Director",
    image: "/images/ari.png",
    description:
      "공간과 경험을 디자인합니다. 빈티지 큐레이션, 원데이 클래스 기획, 브랜드 비주얼까지 Maison831의 감성적 방향을 설계합니다.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <AnimatedText as="p" className="text-[11px] tracking-[0.3em] text-brass uppercase mb-4 text-center">
          Our Team
        </AnimatedText>
        <AnimatedText as="h2" className="font-serif text-3xl md:text-4xl text-dark-brown text-center mb-16">
          사람이 만드는 브랜드
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {members.map((member, i) => (
            <AnimatedSection key={member.nameEn} delay={i * 0.15}>
              <div className="flex flex-col items-center text-center">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden mb-8 bg-cream border-2 border-beige/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[11px] tracking-[0.25em] text-brass uppercase mb-2">
                  {member.role}
                </p>
                <h3 className="font-serif text-2xl md:text-[28px] text-dark-brown mb-1">
                  {member.name}
                </h3>
                <p className="text-[13px] tracking-[0.05em] text-oak/60 mb-5">
                  {member.nameEn}
                </p>
                <p className="text-[14px] text-walnut/70 leading-[1.8] max-w-xs">
                  {member.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
