// ============================================
// 🛠️ SkillsSection Component
// 기술 스택 섹션
// ============================================

import { useState } from "react";
import { SectionWrapper, SectionTitle, Card, Badge } from "../common";
import {
  TECH_STACKS,
  SKILL_CATEGORY_LABELS,
  PROFICIENCY_LABELS,
} from "../../constants/data";
import { cn } from "../../utils/helpers";
import type { TechStack } from "../../types";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    TechStack["category"] | "all"
  >("all");

  const categories = ["all", ...Object.keys(SKILL_CATEGORY_LABELS)] as const;

  const filteredSkills =
    selectedCategory === "all"
      ? TECH_STACKS
      : TECH_STACKS.filter((skill) => skill.category === selectedCategory);

  const getProficiencyColor = (proficiency: TechStack["proficiency"]) => {
    const colors = {
      expert: "bg-emerald-500",
      advanced: "bg-blue-500",
      intermediate: "bg-yellow-500",
      learning: "bg-purple-500",
    };
    return colors[proficiency];
  };

  const getProficiencyWidth = (proficiency: TechStack["proficiency"]) => {
    const widths = {
      expert: "w-full",
      advanced: "w-4/5",
      intermediate: "w-3/5",
      learning: "w-2/5",
    };
    return widths[proficiency];
  };

  return (
    <SectionWrapper id="skills" className="bg-slate-900/20">
      <SectionTitle
        title="Skills"
        subtitle="꾸준한 학습을 통해 성장하고 있는 기술 스택입니다"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              selectedCategory === category
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:text-white hover:bg-slate-700/50"
            )}
          >
            {category === "all" ? "All" : SKILL_CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <Card key={skill.name} className="group" glow>
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white truncate">
                    {skill.name}
                  </h3>
                  <Badge
                    variant={
                      skill.proficiency === "expert"
                        ? "emerald"
                        : skill.proficiency === "advanced"
                        ? "blue"
                        : "default"
                    }
                    size="sm"
                  >
                    {PROFICIENCY_LABELS[skill.proficiency]}
                  </Badge>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      getProficiencyColor(skill.proficiency),
                      getProficiencyWidth(skill.proficiency)
                    )}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-slate-500">
        {Object.entries(PROFICIENCY_LABELS).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className={cn(
                "w-3 h-3 rounded-full",
                getProficiencyColor(key as TechStack["proficiency"])
              )}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
