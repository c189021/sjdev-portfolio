// ============================================
// 🛠️ SkillsSection Component
// 도메인별 전문성 기반 스킬 섹션
// ============================================

import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle } from "../common";
import { SKILL_GROUPS } from "../../constants/data";
import { cn } from "../../utils/helpers";
import type { SkillGroup } from "../../types";

// 스킬 그룹 카드 컴포넌트
const SkillGroupCard = ({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) => {
  const colorVariants = {
    emerald: {
      bg: "from-emerald-500/10 to-emerald-600/5",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      icon: "bg-emerald-500/20 text-emerald-400",
      bar: "bg-emerald-500",
      title: "text-emerald-400",
    },
    blue: {
      bg: "from-blue-500/10 to-blue-600/5",
      border: "border-blue-500/20 hover:border-blue-500/40",
      icon: "bg-blue-500/20 text-blue-400",
      bar: "bg-blue-500",
      title: "text-blue-400",
    },
    purple: {
      bg: "from-purple-500/10 to-purple-600/5",
      border: "border-purple-500/20 hover:border-purple-500/40",
      icon: "bg-purple-500/20 text-purple-400",
      bar: "bg-purple-500",
      title: "text-purple-400",
    },
    orange: {
      bg: "from-orange-500/10 to-orange-600/5",
      border: "border-orange-500/20 hover:border-orange-500/40",
      icon: "bg-orange-500/20 text-orange-400",
      bar: "bg-orange-500",
      title: "text-orange-400",
    },
  };

  const colors = colorVariants[group.color];

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border bg-linear-to-br backdrop-blur-sm p-6 lg:p-8 transition-all duration-300",
        colors.bg,
        colors.border
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <motion.div
          className={cn(
            "shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl",
            colors.icon
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {group.icon}
        </motion.div>
        <div>
          <h3 className={cn("text-xl font-bold mb-1", colors.title)}>
            {group.title}
          </h3>
          <p className="text-sm text-slate-400">{group.description}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {group.skills.map((skill, skillIndex) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.15 + skillIndex * 0.1,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">{skill.name}</span>
                {skill.detail && (
                  <span className="text-xs text-slate-500 hidden sm:inline">
                    • {skill.detail}
                  </span>
                )}
              </div>
              <span className="text-xs font-mono text-slate-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 bg-slate-800/50 rounded-full overflow-hidden">
              <motion.div
                className={cn("h-full rounded-full", colors.bar)}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.15 + skillIndex * 0.1,
                  ease: "easeOut",
                }}
              />
            </div>

            {/* Detail on Mobile */}
            {skill.detail && (
              <p className="text-xs text-slate-500 mt-1 sm:hidden">
                {skill.detail}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative Corner */}
      <div
        className={cn(
          "absolute top-0 right-0 w-24 h-24 rounded-bl-[100px] opacity-20",
          `bg-linear-to-br ${colors.bg}`
        )}
      />
    </motion.div>
  );
};

// 추가 기술 배지 컴포넌트
const AdditionalSkills = () => {
  const additionalSkills = [
    "REST API",
    "JPA",
    "Hibernate",
    "JWT",
    "OAuth2",
    "HTML/CSS",
    "JavaScript",
    "Vite",
    "Framer Motion",
    "Figma",
  ];

  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Also Familiar With
        </h3>
        <div className="flex-1 h-px bg-slate-800" />
      </div>

      <div className="flex flex-wrap gap-2">
        {additionalSkills.map((skill, index) => (
          <motion.span
            key={skill}
            className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-300 transition-colors cursor-default"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.03 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-slate-900/20">
      <SectionTitle
        title="Skills"
        subtitle="도메인별 전문성을 바탕으로 꾸준히 성장하고 있습니다"
      />

      {/* Skill Groups Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, index) => (
          <SkillGroupCard key={group.id} group={group} index={index} />
        ))}
      </div>

      {/* Additional Skills */}
      <AdditionalSkills />
    </SectionWrapper>
  );
};

export default SkillsSection;
