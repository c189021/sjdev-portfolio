// ============================================
// 📁 ProjectsSection Component
// Bento Grid 스타일 프로젝트 섹션
// ============================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionTitle, Badge } from "../common";
import { PROJECTS } from "../../constants/data";
import type { Project, TechnicalAchievement } from "../../types";
import { cn } from "../../utils/helpers";

// 기술적 성과 카드 컴포넌트
const AchievementCard = ({
  achievement,
}: {
  achievement: TechnicalAchievement;
}) => {
  const categoryColors = {
    performance: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    backend: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
    database: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    frontend: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  };

  return (
    <motion.div
      className={cn(
        "p-4 rounded-xl bg-linear-to-br border backdrop-blur-sm",
        categoryColors[achievement.category]
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl">{achievement.icon}</span>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-white mb-1">
            {achievement.title}
          </h4>
          <p className="text-xs text-slate-400 mb-2 line-clamp-2">
            {achievement.description}
          </p>
          {achievement.metric && (
            <div className="inline-flex items-center px-2 py-1 rounded-md bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-emerald-400">
                {achievement.metric}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ERD 플레이스홀더 카드
const ERDCard = ({ project }: { project: Project }) => (
  <motion.div
    className="relative h-full rounded-xl border border-slate-700/50 bg-slate-900/50 overflow-hidden group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    {/* Header */}
    <div className="absolute top-0 left-0 right-0 p-3 bg-linear-to-b from-slate-800/90 to-transparent z-10">
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
        <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">
          {project.title} - Database Schema
        </span>
      </div>
    </div>

    {/* ERD Placeholder */}
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="w-full h-full border-2 border-dashed border-slate-700/50 rounded-lg flex flex-col items-center justify-center gap-3 group-hover:border-blue-500/30 transition-colors">
        {/* ERD 다이어그램 시각화 */}
        <div className="flex items-center gap-4">
          {/* 테이블 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-12 rounded bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <span className="text-[10px] text-blue-300">Users</span>
            </div>
          </div>

          {/* 연결선 */}
          <div className="flex items-center gap-1">
            <div className="w-6 h-px bg-slate-600" />
            <div className="w-2 h-2 rounded-full border border-slate-600" />
          </div>

          {/* 테이블 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-12 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <span className="text-[10px] text-emerald-300">Posts</span>
            </div>
          </div>

          {/* 연결선 */}
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full border border-slate-600" />
            <div className="w-6 h-px bg-slate-600" />
          </div>

          {/* 테이블 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-12 rounded bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <span className="text-[10px] text-purple-300">Comments</span>
            </div>
          </div>
        </div>

        <span className="text-xs text-slate-500 mt-2">ERD 이미지 영역</span>
      </div>
    </div>

    {/* Hover Glow */}
    <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </motion.div>
);

// Solution Overlay 컴포넌트
const SolutionOverlay = ({
  project,
  isVisible,
}: {
  project: Project;
  isVisible: boolean;
}) => {
  if (!project.solutionOverlay) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-0 bg-navy-950/95 backdrop-blur-md z-20 p-6 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-4">
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-xs">🔥</span>
                </span>
                <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                  Challenge
                </span>
              </div>
              <p className="text-sm text-slate-300">
                {project.solutionOverlay.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-xs">💡</span>
                </span>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Solution
                </span>
              </div>
              <p className="text-sm text-slate-300">
                {project.solutionOverlay.solution}
              </p>
            </div>

            {/* Result */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xs">📈</span>
                </span>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Result
                </span>
              </div>
              <p className="text-sm text-slate-300">
                {project.solutionOverlay.result}
              </p>
            </div>
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <span className="text-xs text-slate-500">
              마우스를 떼면 닫힙니다
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 메인 프로젝트 카드 컴포넌트
const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const isLarge = project.gridSize === "large";
  const isMedium = project.gridSize === "medium";

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border border-slate-800/50 bg-slate-900/30 backdrop-blur-sm overflow-hidden group",
        isLarge && "lg:col-span-2 lg:row-span-2",
        isMedium && "lg:col-span-1 lg:row-span-2"
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
    >
      {/* Solution Overlay */}
      <SolutionOverlay project={project} isVisible={showOverlay} />

      {/* Main Content */}
      <div className={cn("p-6 h-full flex flex-col", isLarge && "lg:p-8")}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge variant="emerald">{project.role}</Badge>
              <span className="text-xs text-slate-500">{project.duration}</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Links */}
          <div className="flex gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-slate-800/50 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements Grid - Bento Style */}
        {project.achievements && project.achievements.length > 0 && (
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Technical Achievements
              </span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div
              className={cn(
                "grid gap-3",
                isLarge ? "grid-cols-1 lg:grid-cols-3" : "grid-cols-1"
              )}
            >
              {project.achievements.map((achievement, i) => (
                <AchievementCard key={i} achievement={achievement} />
              ))}
            </div>
          </div>
        )}

        {/* Hover Hint */}
        {project.solutionOverlay && (
          <motion.div
            className="mt-4 pt-4 border-t border-slate-800/50 flex items-center justify-center gap-2 text-xs text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <span>Hover to see how I solved the challenge</span>
          </motion.div>
        )}
      </div>

      {/* Border Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/20 transition-colors duration-300 pointer-events-none" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const otherProjects = PROJECTS.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" fullHeight={false}>
      <SectionTitle
        title="Projects"
        subtitle="기술적 깊이와 문제 해결 과정을 담은 프로젝트들입니다"
      />

      {/* Bento Grid for Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Main Project - Large */}
        {featuredProjects[0] && (
          <ProjectCard project={featuredProjects[0]} index={0} />
        )}

        {/* ERD Card - Pairs with main project */}
        {featuredProjects[0]?.erdImage !== undefined && (
          <motion.div
            className="lg:col-span-1 lg:row-span-1 min-h-75"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ERDCard project={featuredProjects[0]} />
          </motion.div>
        )}

        {/* Secondary Projects */}
        {featuredProjects.slice(1).map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index + 1} />
        ))}
      </div>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <>
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white">Other Projects</h3>
            <div className="flex-1 h-px bg-slate-800" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
