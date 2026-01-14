// ============================================
// 🦸 HeroSection Component
// 메인 히어로 섹션 - Framer Motion 애니메이션
// ============================================

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "../../constants/data";
import { Button } from "../common";

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

// 데이터 스트림 파티클 컴포넌트
const DataStream = () => {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-b from-emerald-400/60 to-blue-400/40"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
          }}
          initial={{ top: "-5%", opacity: 0 }}
          animate={{
            top: "105%",
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* 데이터 라인 스트림 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"
          style={{
            left: `${10 + i * 12}%`,
            height: "100px",
          }}
          initial={{ top: "-100px", opacity: 0 }}
          animate={{
            top: "100%",
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// 서버 노드 애니메이션
const ServerNode = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-sm bg-emerald-500/40 border border-emerald-500/60"
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [0, 1, 1, 0],
      opacity: [0, 0.8, 0.8, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

// Core Architecture 배지
const CoreArchitectureBadge = () => {
  const techStack = [
    { name: "Spring Boot", icon: "🍃", color: "emerald" },
    { name: "MySQL", icon: "🐬", color: "blue" },
    { name: "React", icon: "⚛️", color: "cyan" },
  ];

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {/* Core Architecture Title */}
      <motion.div
        className="flex items-center gap-2 text-sm text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="w-8 h-px bg-gradient-to-r from-transparent to-slate-600" />
        <span className="uppercase tracking-widest text-xs">
          Core Architecture
        </span>
        <span className="w-8 h-px bg-gradient-to-l from-transparent to-slate-600" />
      </motion.div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="group relative"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.5 + index * 0.15, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-medium text-slate-200">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RESTful API Badge */}
      <motion.div
        className="relative mt-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 rounded-2xl blur-2xl" />
        <div className="relative flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm">
          {/* API Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/30">
            <svg
              className="w-5 h-5 text-emerald-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">
              RESTful API 설계
            </span>
            <span className="text-xs text-slate-400">
              Swagger 기반 문서화 가능
            </span>
          </div>

          {/* Animated dots */}
          <div className="flex gap-1 ml-2">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  // 텍스트 애니메이션 variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[128px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[128px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Data Stream Animation */}
        <DataStream />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Server Nodes */}
        <div className="absolute top-1/3 left-[15%]">
          <ServerNode delay={0} />
        </div>
        <div className="absolute top-1/2 right-[20%]">
          <ServerNode delay={1} />
        </div>
        <div className="absolute bottom-1/3 left-[25%]">
          <ServerNode delay={2} />
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
          variants={itemVariants}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-sm text-slate-300">
            {PERSONAL_INFO.university} {PERSONAL_INFO.major}
          </span>
        </motion.div>

        {/* Main Heading - Sequential Text Animation */}
        <div className="mb-8">
          <motion.p
            className="text-lg md:text-xl text-slate-400 mb-4"
            variants={itemVariants}
          >
            사용자 경험(UX)을 넘어
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              데이터의 흐름
            </span>
            과 <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              시스템의 안정성
            </span>
            을 설계하는
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            <span className="text-slate-300">개발자,</span>
            <span className="relative">
              <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              />
            </span>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("projects")}
            rightIcon={
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            }
          >
            프로젝트 보기
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => onNavigate("contact")}
          >
            연락하기
          </Button>
        </motion.div>

        {/* Core Architecture Badges */}
        <CoreArchitectureBadge />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => onNavigate("about")}
          className="p-2 rounded-full text-slate-500 hover:text-emerald-400 transition-colors"
          aria-label="Scroll down"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
