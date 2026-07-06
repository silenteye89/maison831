"use client";

import { FadeIn, RevealText, ImageReveal } from "@/components/AnimationProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const founders = [
  {
    name: "Ari",
    role: "Founder · Creative Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    color: "#C4B59E",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    color: "#8B7355",
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
        <section className="pt-[160px] pb-[120px] md:pt-[200px] md:pb-[160px] px-6 md:px-12">
          <div className="max-w-[960px] mx-auto text-center">
            <FadeIn>
              <p className="text-[13px] tracking-[0.2em] uppercase text-stone/60 mb-12 md:mb-16">
                About Us
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[30px] sm:text-[36px] md:text-[44px] lg:text-[52px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.15] mb-10">
                The Founders
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-[16px] md:text-[17px] text-walnut font-light max-w-[520px] mx-auto leading-[1.8]">
                디자인과 기술, 두 가지 전문성이 만나
                <br />
                하나의 브랜드를 만들어갑니다.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Founders Profiles */}
        <section className="pb-[180px] md:pb-[240px] px-6 md:px-12">
          <div className="max-w-[960px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 lg:gap-24">
              {founders.map((founder, i) => (
                <FadeIn key={founder.name} delay={i * 0.2}>
                  <div>
                    {/* Photo */}
                    <ImageReveal className="mb-10 md:mb-12">
                      <div
                        className="aspect-[3/4] bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('${founder.image}')`,
                          backgroundColor: founder.color,
                        }}
                      />
                    </ImageReveal>

                    {/* Name & Role */}
                    <h2 className="font-serif text-[28px] md:text-[34px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.15] mb-3">
                      {founder.name}
                    </h2>
                    <p className="text-[13px] tracking-[0.15em] uppercase text-stone/50 mb-10">
                      {founder.role}
                    </p>

                    {/* Bio */}
                    <p className="text-[16px] leading-[1.8] text-walnut font-light mb-12 max-w-[420px]">
                      {founder.bio}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      {founder.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-3"
                        >
                          <span className="w-1 h-1 rounded-full bg-brass/40 shrink-0" />
                          <span className="text-[14px] text-walnut/70 font-light">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Design × Technology */}
        <section className="bg-ivory pt-[180px] pb-[200px] md:pt-[220px] md:pb-[260px] px-6 md:px-12">
          <div className="max-w-[960px] mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <FadeIn>
                <p className="text-[13px] tracking-[0.2em] uppercase text-stone/60 mb-12 md:mb-16">
                  Our Philosophy
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] text-dark-brown font-medium tracking-[-0.02em] leading-[1.2] mb-10">
                  Design × Technology
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 max-w-[800px] mx-auto">
              <FadeIn delay={0.2}>
                <div>
                  <div className="w-[40px] h-[1px] bg-brass/40 mb-8" />
                  <p className="text-[16px] md:text-[17px] leading-[1.8] text-walnut font-light">
                    Ari의 크리에이티브 감각과 Jun의 엔지니어링이 만나
                    단순한 웹사이트를 넘어, 브랜드를 경험하는 디지털 공간을
                    만듭니다. 기획부터 디자인, 개발까지 모든 과정을 직접 수행합니다.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div>
                  <div className="w-[40px] h-[1px] bg-brass/40 mb-8" />
                  <p className="text-[16px] md:text-[17px] leading-[1.8] text-walnut font-light">
                    유럽 빈티지 감성의 공간에서 커피를 마시며 클라이언트와
                    대화하고, 같은 공간에서 코드를 쓰고 디자인을 합니다.
                    공간을 운영하는 사람이기에, 브랜드가 가진 감성을
                    깊이 이해하고 설계할 수 있습니다.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* CTA */}
            <FadeIn delay={0.4} className="text-center mt-24 md:mt-32">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 text-[14px] tracking-[0.02em] font-normal bg-dark-brown text-ivory px-8 h-[48px] rounded-full hover:bg-brass hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out"
              >
                프로젝트 문의하기
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
