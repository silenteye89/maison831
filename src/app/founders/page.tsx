"use client";

import { FadeIn, ImageReveal } from "@/components/AnimationProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Ari",
    role: "Founder · Creative Director",
    image: "/images/ari.jpeg",
    bio: "6년간의 대기업 HR 경험을 바탕으로 사람과 브랜드를 잇는 공간을 설계합니다. 디자인, 브랜딩, 공간 스타일링까지 Maison 831의 모든 크리에이티브를 총괄합니다.",
    skills: [
      "6+ Years in Corporate HR",
      "Web & App Development",
      "Brand Strategy",
      "Space Styling",
      "Vintage Curation",
      "Workshop Planning",
    ],
  },
  {
    name: "Jun",
    role: "Founder · Software Engineer",
    image: "/images/jun.jpeg",
    bio: "KAIST 졸업 후 백엔드 서버 개발자로 커리어를 시작했습니다. 기술의 깊이와 디자인의 섬세함을 동시에 추구하며, Maison 831의 모든 기술적 기반을 책임집니다.",
    skills: [
      "KAIST Graduate",
      "Backend Server Developer",
      "Web & App Development",
      "System Architecture",
      "Cloud Infrastructure",
      "AI Integration",
    ],
  },
];

export default function FoundersPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-[200px] pb-[100px] md:pt-[240px] md:pb-[120px] px-6 md:px-12">
          <div className="max-w-[720px] mx-auto text-center">
            <FadeIn>
              <p className="text-[13px] tracking-[0.2em] uppercase text-stone/50 mb-16 md:mb-20">
                About Us
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.1] mb-12">
                The Founders
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[16px] md:text-[17px] text-walnut font-light max-w-[400px] mx-auto leading-[1.8]">
                디자인과 기술, 두 가지 전문성이 만나
                하나의 브랜드를 만들어갑니다.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Founder Profiles - one at a time, full width */}
        {founders.map((founder, i) => (
          <section
            key={founder.name}
            className={`${i === 0 ? "pt-[120px]" : "pt-[160px]"} pb-[160px] md:pb-[200px] px-6 md:px-12`}
          >
            <div className="max-w-[900px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-start">
                {/* Illustration */}
                <FadeIn delay={0.1} className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <ImageReveal>
                    <div className="bg-[#F5F0E8] flex items-center justify-center p-8 md:p-12">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full max-w-[320px] mx-auto"
                      />
                    </div>
                  </ImageReveal>
                </FadeIn>

                {/* Info */}
                <FadeIn delay={0.3} className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="lg:pt-8">
                    <h2 className="font-serif text-[36px] md:text-[44px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.1] mb-4">
                      {founder.name}
                    </h2>

                    <p className="text-[13px] tracking-[0.2em] uppercase text-stone/45 mb-16">
                      {founder.role}
                    </p>

                    <p className="text-[16px] md:text-[17px] leading-[1.85] text-walnut font-light mb-16 max-w-[400px]">
                      {founder.bio}
                    </p>

                    <div className="w-[32px] h-[1px] bg-stone/25 mb-10" />

                    <div className="space-y-4">
                      {founder.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-4">
                          <span className="w-[3px] h-[3px] rounded-full bg-brass/40 shrink-0" />
                          <span className="text-[14px] text-walnut/60 font-light tracking-[0.01em]">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        ))}

        {/* Divider */}
        <div className="flex justify-center py-8">
          <div className="w-[1px] h-20 bg-stone/15" />
        </div>

        {/* Design × Technology */}
        <section className="bg-ivory pt-[180px] pb-[220px] md:pt-[220px] md:pb-[280px] px-6 md:px-12">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-24 md:mb-32">
              <FadeIn>
                <p className="text-[13px] tracking-[0.2em] uppercase text-stone/50 mb-16 md:mb-20">
                  Our Philosophy
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[40px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.15]">
                  Design × Technology
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16">
              <FadeIn delay={0.2}>
                <div>
                  <div className="w-[32px] h-[1px] bg-brass/30 mb-10" />
                  <p className="text-[16px] md:text-[17px] leading-[1.85] text-walnut font-light">
                    Ari의 크리에이티브 감각과 Jun의 엔지니어링이 만나
                    단순한 웹사이트를 넘어, 브랜드를 경험하는 디지털 공간을
                    만듭니다. 기획부터 디자인, 개발까지 모든 과정을 직접 수행합니다.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.35}>
                <div>
                  <div className="w-[32px] h-[1px] bg-brass/30 mb-10" />
                  <p className="text-[16px] md:text-[17px] leading-[1.85] text-walnut font-light">
                    유럽 빈티지 감성의 공간에서 커피를 마시며 클라이언트와
                    대화하고, 같은 공간에서 코드를 쓰고 디자인을 합니다.
                    공간을 운영하는 사람이기에, 브랜드가 가진 감성을
                    깊이 이해하고 설계할 수 있습니다.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* CTA */}
            <FadeIn delay={0.4} className="text-center mt-28 md:mt-36">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-normal bg-dark-brown text-ivory px-8 h-[48px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
              >
                프로젝트 문의하기
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
