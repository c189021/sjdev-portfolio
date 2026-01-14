// ============================================
// 📜 ExperienceSection Component
// 경험/경력 섹션
// ============================================

import { SectionWrapper, SectionTitle, Card, Badge } from "../common";
import { EXPERIENCES } from "../../constants/data";
import type { Experience } from "../../types";

const ExperienceSection = () => {
  const getTypeColor = (type: Experience["type"]) => {
    const colors = {
      education: "emerald",
      work: "blue",
      activity: "purple",
    } as const;
    return colors[type];
  };

  const getTypeLabel = (type: Experience["type"]) => {
    const labels = {
      education: "학력",
      work: "경력",
      activity: "활동",
    };
    return labels[type];
  };

  const getTypeIcon = (type: Experience["type"]) => {
    const icons = {
      education: "🎓",
      work: "💼",
      activity: "🏃",
    };
    return icons[type];
  };

  return (
    <SectionWrapper id="experience" className="bg-slate-900/20">
      <SectionTitle title="Experience" subtitle="저의 학습 여정과 경험입니다" />

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-emerald-500/50 via-blue-500/50 to-transparent transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-linear-to-r from-emerald-500 to-blue-500 transform -translate-x-1.5 md:-translate-x-1/2 ring-4 ring-navy-950" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />

              {/* Content Card */}
              <div className="ml-8 md:ml-0 md:w-1/2">
                <Card glow>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                      <Badge variant={getTypeColor(exp.type)}>
                        {getTypeLabel(exp.type)}
                      </Badge>
                    </div>
                    <span className="text-sm text-slate-500">{exp.period}</span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-emerald-400 font-medium mb-4">
                    {exp.organization}
                  </p>

                  {/* Description */}
                  <p className="text-slate-400 mb-4">{exp.description}</p>

                  {/* Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
