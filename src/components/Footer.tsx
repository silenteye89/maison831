import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark-brown text-stone py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="block mb-4">
              <span className="font-serif text-xl tracking-[0.15em] text-warm-white">
                MAISON831
              </span>
            </Link>
            <p className="text-[10px] tracking-[0.2em] uppercase text-stone/60 mb-4">
              Tech meets Aesthetic
            </p>
            <p className="text-[13px] text-stone/70 leading-relaxed max-w-xs">
              카이스트 출신 엔지니어의 기술력과 유럽 감성의 미학이 어우러지는
              큐레이션 라이프스타일 스튜디오.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] text-warm-white uppercase mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#web" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  웹 & 앱 개발
                </a>
              </li>
              <li>
                <a href="#space" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  공간 대여
                </a>
              </li>
              <li>
                <a href="#class" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  원데이 클래스
                </a>
              </li>
              <li>
                <a href="#vintage" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  빈티지 컬렉션
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] text-warm-white uppercase mb-4">
              Information
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#showroom" className="text-[13px] text-stone/70 hover:text-brass transition-colors">
                  쇼룸 안내
                </a>
              </li>
              <li>
                <span className="text-[13px] text-stone/70">이용약관</span>
              </li>
              <li>
                <span className="text-[13px] text-stone/70">개인정보처리방침</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[0.15em] text-warm-white uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2">
              <li className="text-[13px] text-stone/70">hello@maison831.com</li>
              <li className="text-[13px] text-stone/70">010-8687-2129</li>
              <li>
                <a
                  href="https://instagram.com/maison831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-stone/70 hover:text-brass transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://pf.kakao.com/maison831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-stone/70 hover:text-brass transition-colors"
                >
                  KakaoTalk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-stone/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-stone/40 tracking-wider">
            &copy; 2026 Maison831. All rights reserved.
          </p>
          <p className="text-[11px] text-stone/40 tracking-wider">
            경기 성남시 수정구 고등로 3 현대지식산업센터 성남고등 8층 831호 | 사업자등록번호 000-00-00000
          </p>
        </div>
      </div>
    </footer>
  );
}
