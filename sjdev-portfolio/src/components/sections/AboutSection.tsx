// ============================================
// 👤 AboutSection Component
// 자기소개 섹션
// ============================================

import { SectionWrapper, SectionTitle, Card } from "../common";
import { PERSONAL_INFO } from "../../constants/data";

const AboutSection = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "학력",
      description: `${PERSONAL_INFO.university} ${PERSONAL_INFO.major}`,
    },
    {
      icon: "💻",
      title: "관심 분야",
      description: "Full-Stack Web Development",
    },
    {
      icon: "🚀",
      title: "목표",
      description: "사용자 중심의 서비스 개발",
    },
    {
      icon: "📚",
      title: "학습 철학",
      description: "끊임없는 성장과 도전",
    },
  ];

  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="프론트엔드와 백엔드를 아우르는 풀스택 개발자를 꿈꾸고 있습니다"
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Profile Image / Avatar Area */}
        <div className="relative flex justify-center">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur-2xl opacity-20 animate-pulse" />

            {/* Avatar Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 overflow-hidden">
              {/* Placeholder Avatar */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-500/10 to-blue-500/10">
                <span className="text-8xl md:text-9xl">👨‍💻</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <div
                className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="space-y-6">
          <div className="prose prose-invert">
            <p className="text-slate-300 text-lg leading-relaxed">
              안녕하세요! 저는{" "}
              <span className="text-emerald-400 font-medium">
                {PERSONAL_INFO.university} {PERSONAL_INFO.major}
              </span>
              에 재학 중인 개발자 지망생입니다.
            </p>
            <p className="text-slate-400 leading-relaxed">
              최근{" "}
              <span className="text-blue-400 font-medium">
                React, Spring Boot, MySQL
              </span>
              을 결합한 풀스택 프로젝트를 성공적으로 마쳤습니다. 프론트엔드의
              섬세한 UI/UX 디자인부터 백엔드의 논리적인 데이터 구조 설계까지,
              전체 개발 사이클을 경험하며 성장하고 있습니다.
            </p>
            <p className="text-slate-400 leading-relaxed">
              사용자 경험을 최우선으로 생각하며, 깔끔하고 유지보수가 용이한
              코드를 작성하기 위해 항상 노력합니다.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {highlights.map((item, index) => (
              <Card key={index} className="p-4" glow>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400">
                      {item.title}
                    </h4>
                    <p className="text-white font-medium text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
