import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Layers,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import { PROFILE, PROJECTS, SKILL_CATEGORIES } from "../../data";
import { Card, Chip, Reveal, SectionShell } from "../common";

// 키워드 카드 — 각자 고유색, 설명은 한 줄로
const KEYWORDS = [
  {
    icon: Sparkles,
    chip: "bg-domain-ai/12 text-domain-ai",
    title: "AI · LLM",
    description: "LLM 내비게이션·멀티모달 감정 분석을 동작하는 제품으로.",
  },
  {
    icon: Layers,
    chip: "bg-domain-web/12 text-domain-web",
    title: "웹 풀사이클",
    description: "기획부터 프론트·백엔드·배포·운영까지 전 주기 직접 경험.",
  },
  {
    icon: BookOpen,
    chip: "bg-domain-research/12 text-domain-research",
    title: "연구 · 논문",
    description: "실험으로 검증해 논문 3편(국제 논문지 1편)으로 기록.",
  },
  {
    icon: Users,
    chip: "bg-accent-soft text-accent",
    title: "리더십",
    description: "학생회장 · 4개 학년도 과대표.",
  },
];

// 스킬 카테고리별 강조색 (아이콘 없는 스킬의 모노그램 칩 + 호버 링)
const CATEGORY_STYLE: Record<string, { mono: string; ring: string }> = {
  "ai-llm": { mono: "bg-domain-ai/12 text-domain-ai", ring: "hover:border-domain-ai/50" },
  frontend: { mono: "bg-accent-soft text-accent", ring: "hover:border-accent/50" },
  backend: { mono: "bg-domain-web/12 text-domain-web", ring: "hover:border-domain-web/50" },
  "data-ml": { mono: "bg-domain-ml/12 text-domain-ml", ring: "hover:border-domain-ml/50" },
  "db-infra": { mono: "bg-domain-research/12 text-domain-research", ring: "hover:border-domain-research/50" },
};

const AboutSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  // 클릭 팝오버 — 여러 프로젝트가 쓰는 스택에서 프로젝트를 골라 연다
  const [openSkillKey, setOpenSkillKey] = useState<string | null>(null);

  useEffect(() => {
    if (!openSkillKey) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (!(e.target as HTMLElement).closest("[data-skill-pop]")) {
        setOpenSkillKey(null);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenSkillKey(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openSkillKey]);

  const tiles = SKILL_CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({ ...skill, categoryId: category.id }))
  ).filter((t) => activeCategory === "all" || t.categoryId === activeCategory);

  const openProject = (projectId: string) => {
    // 해시 딥링크 → ProjectsSection의 hashchange 리스너가 모달을 연다
    window.location.assign(`#project=${projectId}`);
    setOpenSkillKey(null);
  };

  return (
    <SectionShell id="about" eyebrow="About" title="소개">
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* 소개 문단 */}
        <Reveal>
          <div className="space-y-4 text-[15.5px] leading-relaxed">
            <p className="text-[17px] font-semibold leading-relaxed">
              {PROFILE.bio[0]}
            </p>
            {PROFILE.bio.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        {/* 키워드 카드 2×2 */}
        <div className="grid gap-4 sm:grid-cols-2">
          {KEYWORDS.map(({ icon: Icon, chip, title, description }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <Card className="h-full">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-lg ${chip}`}
                >
                  <Icon size={17} />
                </span>
                <h3 className="mt-3.5 text-[15px] font-extrabold">{title}</h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ===== 기술 스택 ===== */}
      <Reveal className="mt-16">
        <p className="flex items-center gap-2 text-sm font-bold text-muted">
          <Wrench size={15} /> 기술 스택
          <span className="text-xs font-medium text-muted/70">
            아이콘을 누르면 실제 사용한 프로젝트로 이동합니다
          </span>
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip
            active={activeCategory === "all"}
            onClick={() => {
              setActiveCategory("all");
              setOpenSkillKey(null);
            }}
          >
            전체
          </Chip>
          {SKILL_CATEGORIES.map((category) => (
            <Chip
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setOpenSkillKey(null);
              }}
            >
              {category.label}
            </Chip>
          ))}
        </div>

        <div
          key={activeCategory}
          className="mt-5 grid animate-fade-in-up grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
        >
          {tiles.map((skill) => {
            const style = CATEGORY_STYLE[skill.categoryId];
            const key = `${skill.categoryId}-${skill.name}`;
            const projects = skill.projectIds
              .map((id) => PROJECTS.find((p) => p.id === id))
              .filter((p): p is NonNullable<typeof p> => Boolean(p));
            const isOpen = openSkillKey === key;

            const handleTileClick = () => {
              // 1개 → 바로 상세 모달, 여러 개(또는 노트만) → 팝오버
              if (projects.length === 1) {
                openProject(projects[0].id);
              } else if (projects.length > 1 || skill.note) {
                setOpenSkillKey(isOpen ? null : key);
              }
            };

            return (
              <div key={key} data-skill-pop className="group relative">
                <button
                  onClick={handleTileClick}
                  className={`relative flex w-full flex-col items-center gap-2 rounded-xl border border-line bg-surface p-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_22px_rgba(38,34,26,0.08)] ${style.ring}`}
                >
                  {projects.length > 1 && (
                    <span
                      className={`absolute right-1.5 top-1.5 grid h-4 min-w-4 place-items-center rounded-full px-1 text-[9.5px] font-extrabold ${style.mono}`}
                    >
                      {projects.length}
                    </span>
                  )}
                  {skill.icon ? (
                    <img
                      src={`/icons/${skill.icon}`}
                      alt=""
                      loading="lazy"
                      className="h-8 w-8 object-contain"
                    />
                  ) : (
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-lg text-[13px] font-extrabold ${style.mono}`}
                    >
                      {skill.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                  <span className="text-center text-[11.5px] font-semibold leading-tight">
                    {skill.name}
                  </span>
                </button>

                {/* 근거 툴팁 — 프로젝트명 한 줄에 하나씩, 단어 단위 줄바꿈 */}
                {!isOpen && (projects.length > 0 || skill.note) && (
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 hidden w-max max-w-60 -translate-x-1/2 break-keep rounded-lg bg-ink px-3 py-2 text-left text-[11px] font-medium leading-relaxed text-canvas shadow-lg group-hover:block">
                    {projects.length > 0 ? (
                      <>
                        <span className="mb-0.5 block text-[10px] font-bold uppercase tracking-wide text-canvas/60">
                          사용한 프로젝트
                        </span>
                        {projects.map((p) => (
                          <span key={p.id} className="block">
                            · {p.title}
                          </span>
                        ))}
                      </>
                    ) : (
                      skill.note
                    )}
                  </span>
                )}

                {/* 클릭 팝오버 — 프로젝트 선택 메뉴 */}
                {isOpen && (
                  <div className="absolute bottom-full left-1/2 z-30 mb-2 w-52 -translate-x-1/2 animate-fade-in-up rounded-xl border border-line bg-surface p-1.5 shadow-xl">
                    {projects.length > 0 ? (
                      <>
                        <p className="px-2 pb-1 pt-1.5 text-[10.5px] font-bold uppercase tracking-wide text-muted">
                          사용한 프로젝트
                        </p>
                        {projects.map((p) => (
                          <button
                            key={p.id}
                            onClick={() => openProject(p.id)}
                            className="flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-[12.5px] font-semibold transition-colors hover:bg-sunken"
                          >
                            <span className="break-keep">{p.title}</span>
                            <ArrowUpRight
                              size={12}
                              className="shrink-0 text-muted"
                            />
                          </button>
                        ))}
                      </>
                    ) : (
                      <p className="break-keep px-2 py-1.5 text-[12px] leading-relaxed text-muted">
                        {skill.note}
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default AboutSection;
