import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  FileDown,
  Gauge,
  Github,
  Rss,
} from "lucide-react";
import { AWARDS, PROFILE, PROJECTS, PUBLICATIONS, SITE } from "../../data";
import { Button, Pending } from "../common";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// 숫자 카운트업 — 뷰포트 진입 시 1회
const Counter = ({ to, suffix }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

// 우측 성과 스냅샷 — 확정된 실데이터만 사용
const SNAPSHOT_CARDS = [
  {
    icon: BookOpen,
    chip: "bg-domain-research/12 text-domain-research",
    title: "KSII 국제 논문지 게재",
    sub: "An LLM-based Web Navigator (Guider)",
    offset: "lg:ml-10",
    floatDelay: 0,
  },
  {
    icon: Award,
    chip: "bg-domain-ml/12 text-domain-ml",
    title: "발표회 최우수상",
    sub: "DevOps 전문가 양성과정 · Guider",
    offset: "lg:ml-0",
    floatDelay: 0.8,
  },
  {
    icon: Gauge,
    chip: "bg-domain-web/12 text-domain-web",
    title: "과업 성공률 24% → 100%",
    sub: "Guider 사용자 50명 실험",
    offset: "lg:ml-16",
    floatDelay: 1.6,
  },
];

// 하단 마키 스트립에 흐르는 기술 아이콘
const MARQUEE_ICONS = [
  ["react", "React"],
  ["typescript", "TypeScript"],
  ["javascript", "JavaScript"],
  ["claude", "Claude"],
  ["openai", "OpenAI"],
  ["python", "Python"],
  ["spring", "Spring Boot"],
  ["fastapi", "FastAPI"],
  ["mysql", "MySQL"],
  ["postgresql", "PostgreSQL"],
  ["redis", "Redis"],
  ["tensorflow", "TensorFlow"],
  ["flutter", "Flutter"],
  ["aws", "AWS"],
  ["php", "PHP"],
  ["wordpress", "WordPress"],
  ["mediapipe", "MediaPipe"],
  ["chrome", "Chrome 확장"],
  ["git", "Git"],
  ["html5", "HTML5"],
] as const;

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const publicationCount = PUBLICATIONS.length;
  const awardCount = AWARDS.filter((a) => a.status === "confirmed").length;
  const projectCount = PROJECTS.length;

  const stats = [
    {
      value: publicationCount,
      suffix: "편",
      label: "논문 · 국제지 1편",
      color: "text-domain-research",
    },
    { value: awardCount, suffix: "건", label: "수상", color: "text-domain-ml" },
    {
      value: projectCount,
      suffix: "+",
      label: "프로젝트",
      color: "text-accent",
    },
    {
      value: 4,
      suffix: "년",
      label: "과대표 · 학생회장",
      color: "text-domain-web",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-line/60"
    >
      {/* 배경 — 유영하는 그라디언트 블롭 + 옅어지는 도트 그리드 */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, 30, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-accent/15 blur-3xl dark:bg-accent/10"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[18%] top-[30%] h-[360px] w-[360px] rounded-full bg-domain-ai/12 blur-3xl dark:bg-domain-ai/8"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-48 left-[-12%] h-[420px] w-[420px] rounded-full bg-domain-web/10 blur-3xl dark:bg-domain-web/8"
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--line) 1px, transparent 0)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 78%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 78%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-5xl items-center gap-14 px-5 pb-16 pt-20 sm:pt-24 lg:min-h-[calc(100vh-8.5rem)] lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
        {/* ===== 좌측: 텍스트 ===== */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="flex items-center gap-2 text-sm font-semibold text-muted"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            {PROFILE.education.school} {PROFILE.education.major}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-extrabold leading-[1.22] tracking-tight sm:text-5xl sm:leading-[1.2]"
          >
            <span className="text-accent">AI·LLM</span>의 가능성을
            <br />
            <span className="bg-linear-to-r from-accent to-domain-ai bg-clip-text text-transparent">
              사용자의 화면
            </span>
            까지 옮기는
            <br />
            개발자 {PROFILE.name}입니다
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-muted"
          >
            {PROFILE.intro}
          </motion.p>

          {/* 핵심 지표 — 카운트업 */}
          <motion.div
            variants={item}
            className="mt-8 grid w-fit grid-cols-4 gap-6 sm:gap-9"
          >
            {stats.map(({ value, suffix, label, color }) => (
              <div key={label}>
                <p
                  className={`text-[26px] font-extrabold leading-none tracking-tight sm:text-3xl ${color}`}
                >
                  <Counter to={value} suffix={suffix} />
                </p>
                <p className="mt-1.5 text-[11.5px] font-semibold text-muted">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button onClick={() => onNavigate("projects")}>
              프로젝트 보기 <ArrowRight size={15} />
            </Button>
            {SITE.resume.pdfPath ? (
              <Button variant="ghost" href={SITE.resume.pdfPath} external>
                <FileDown size={15} /> 이력서 다운로드
              </Button>
            ) : (
              <Pending label="이력서 PDF — 파일 전달 시 버튼 활성화" />
            )}
            {PROFILE.links.github && (
              <Button variant="ghost" href={PROFILE.links.github} external>
                <Github size={15} /> GitHub
              </Button>
            )}
            {PROFILE.links.blog && (
              <Button variant="ghost" href={PROFILE.links.blog} external>
                <Rss size={15} /> 블로그
              </Button>
            )}
          </motion.div>
        </motion.div>

        {/* ===== 우측: 성과 스냅샷 카드 ===== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="hidden flex-col gap-4 lg:flex"
        >
          {SNAPSHOT_CARDS.map(
            ({ icon: Icon, chip, title, sub, offset, floatDelay }) => (
              <motion.div key={title} variants={item} className={offset}>
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 5.5,
                    delay: floatDelay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-4 rounded-xl border border-line bg-surface/90 p-4 shadow-[0_10px_30px_rgba(38,34,26,0.07)] backdrop-blur-sm"
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${chip}`}
                  >
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-bold leading-snug">
                      {title}
                    </span>
                    <span className="mt-0.5 block text-[12.5px] text-muted">
                      {sub}
                    </span>
                  </span>
                </motion.div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>

      {/* 스크롤 안내 */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => onNavigate("about")}
        aria-label="아래로 스크롤"
        className="absolute bottom-[4.5rem] left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:block"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </motion.button>

      {/* ===== 기술 아이콘 마키 스트립 ===== */}
      <div className="relative border-t border-line/60 bg-surface/60 py-3.5 backdrop-blur-sm">
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee gap-9 hover:[animation-play-state:paused]">
            {[...MARQUEE_ICONS, ...MARQUEE_ICONS].map(([file, name], i) => (
              <span
                key={`${file}-${i}`}
                className="flex shrink-0 items-center gap-2 text-[12px] font-semibold text-muted"
              >
                <img
                  src={`/icons/${file}.svg`}
                  alt=""
                  loading="lazy"
                  className="h-5 w-5 object-contain"
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
