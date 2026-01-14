// ============================================
// � AboutSection Component
// Interactive System Terminal Style
// ============================================

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../common";
import { PERSONAL_INFO } from "../../constants/data";

// 터미널 커맨드 타입
interface TerminalLine {
  id: number;
  type: "command" | "output" | "success" | "info" | "error";
  content: string;
  delay?: number;
}

// 타이핑 애니메이션 컴포넌트
const TypeWriter = ({
  text,
  onComplete,
  speed = 50,
}: {
  text: string;
  onComplete?: () => void;
  speed?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayText, text, speed, onComplete]);

  return (
    <span>
      {displayText}
      {!isComplete && <span className="animate-pulse">_</span>}
    </span>
  );
};

// 깜빡이는 커서 컴포넌트
const BlinkingCursor = () => (
  <motion.span
    className="inline-block w-2.5 h-5 bg-emerald-400 ml-1"
    animate={{ opacity: [1, 0, 1] }}
    transition={{ duration: 1, repeat: Infinity }}
  />
);

// 터미널 라인 렌더러
const TerminalLineRenderer = ({
  line,
  isTyping,
  onTypeComplete,
}: {
  line: TerminalLine;
  isTyping: boolean;
  onTypeComplete?: () => void;
}) => {
  const getLineStyle = () => {
    switch (line.type) {
      case "command":
        return "text-emerald-400";
      case "success":
        return "text-emerald-400";
      case "info":
        return "text-blue-400";
      case "error":
        return "text-red-400";
      default:
        return "text-slate-300";
    }
  };

  const getPrefix = () => {
    switch (line.type) {
      case "command":
        return (
          <span className="text-slate-500">
            <span className="text-blue-400">sjdev</span>
            <span className="text-slate-600">@</span>
            <span className="text-purple-400">portfolio</span>
            <span className="text-slate-500"> ~ % </span>
          </span>
        );
      case "success":
        return <span className="text-emerald-400 font-bold">[SUCCESS] </span>;
      case "info":
        return <span className="text-blue-400">[INFO] </span>;
      case "error":
        return <span className="text-red-400">[ERROR] </span>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`font-mono text-sm md:text-base leading-relaxed ${getLineStyle()}`}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
    >
      {getPrefix()}
      {line.type === "command" && isTyping ? (
        <TypeWriter
          text={line.content}
          onComplete={onTypeComplete}
          speed={40}
        />
      ) : (
        <span>{line.content}</span>
      )}
    </motion.div>
  );
};

// 메인 터미널 컴포넌트
const SystemTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isTypingCommand, setIsTypingCommand] = useState(false);
  const [showFinalCursor, setShowFinalCursor] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  // 터미널 스크립트 정의
  const terminalScript: TerminalLine[] = [
    { id: 1, type: "command", content: "whoami", delay: 500 },
    { id: 2, type: "output", content: "", delay: 100 },
    {
      id: 3,
      type: "success",
      content: `${PERSONAL_INFO.name} (${PERSONAL_INFO.nameEn})`,
      delay: 50,
    },
    {
      id: 4,
      type: "output",
      content: `📍 ${PERSONAL_INFO.university} ${PERSONAL_INFO.major}`,
      delay: 100,
    },
    { id: 5, type: "output", content: `💼 ${PERSONAL_INFO.title}`, delay: 100 },
    { id: 6, type: "output", content: "", delay: 200 },

    { id: 7, type: "command", content: "cat core_values.txt", delay: 800 },
    { id: 8, type: "output", content: "", delay: 100 },
    { id: 9, type: "info", content: "Loading core values...", delay: 50 },
    {
      id: 10,
      type: "output",
      content: "┌─────────────────────────────────────────┐",
      delay: 100,
    },
    {
      id: 11,
      type: "output",
      content: "│  🎯 사용자 경험(UX)을 최우선으로       │",
      delay: 100,
    },
    {
      id: 12,
      type: "output",
      content: "│  🔒 데이터 무결성을 최우선으로 합니다  │",
      delay: 100,
    },
    {
      id: 13,
      type: "output",
      content: "│  📐 Clean Code & 유지보수성 추구       │",
      delay: 100,
    },
    {
      id: 14,
      type: "output",
      content: "│  🚀 끊임없는 학습과 성장               │",
      delay: 100,
    },
    {
      id: 15,
      type: "output",
      content: "└─────────────────────────────────────────┘",
      delay: 100,
    },
    {
      id: 16,
      type: "success",
      content: "Core values loaded successfully",
      delay: 200,
    },
    { id: 17, type: "output", content: "", delay: 300 },

    { id: 18, type: "command", content: "fetch --skills", delay: 800 },
    { id: 19, type: "output", content: "", delay: 100 },
    { id: 20, type: "info", content: "Fetching tech stack...", delay: 50 },
    { id: 21, type: "output", content: "", delay: 100 },
    {
      id: 22,
      type: "output",
      content: "  Backend:   🍃 Spring Boot  ☕ Java  🐬 MySQL",
      delay: 150,
    },
    {
      id: 23,
      type: "output",
      content: "  Frontend:  ⚛️  React  📘 TypeScript  🎨 Tailwind",
      delay: 150,
    },
    {
      id: 24,
      type: "output",
      content: "  Tools:     📝 Swagger  🔧 Postman  📦 Git",
      delay: 150,
    },
    { id: 25, type: "output", content: "", delay: 100 },
    {
      id: 26,
      type: "success",
      content: "Skills fetched: 9 technologies loaded",
      delay: 200,
    },
    { id: 27, type: "output", content: "", delay: 300 },

    { id: 28, type: "command", content: "echo $MISSION", delay: 800 },
    { id: 29, type: "output", content: "", delay: 100 },
    {
      id: 30,
      type: "output",
      content: '"프론트엔드의 섬세함과 백엔드의 견고함을 겸비한',
      delay: 100,
    },
    {
      id: 31,
      type: "output",
      content: ' 풀스택 개발자로 성장하는 것"',
      delay: 100,
    },
    { id: 32, type: "output", content: "", delay: 200 },
    {
      id: 33,
      type: "success",
      content: "Mission statement displayed",
      delay: 100,
    },
  ];

  // 터미널 스크립트 실행
  useEffect(() => {
    if (currentLineIndex >= terminalScript.length) {
      setShowFinalCursor(true);
      return;
    }

    const currentLine = terminalScript[currentLineIndex];
    const delay = currentLine.delay || 100;

    if (currentLine.type === "command") {
      // 커맨드는 타이핑 애니메이션으로
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setIsTypingCommand(true);
      }, delay);
      return () => clearTimeout(timeout);
    } else {
      // 일반 출력은 바로 표시
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex]);

  // 타이핑 완료 핸들러
  const handleTypeComplete = () => {
    setIsTypingCommand(false);
    setCurrentLineIndex((prev) => prev + 1);
  };

  // 스크롤 자동 이동
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Terminal Window */}
      <div className="rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl shadow-black/20">
        {/* Terminal Header - macOS Style */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/90 border-b border-slate-700/50">
          {/* Traffic Lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
          </div>

          {/* Terminal Title */}
          <div className="flex-1 text-center">
            <span className="text-xs text-slate-500 font-medium">
              sjdev@portfolio — zsh — 80×24
            </span>
          </div>

          {/* Spacer for symmetry */}
          <div className="w-14" />
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="bg-slate-900/95 backdrop-blur-sm p-4 md:p-6 h-100 md:h-112 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
        >
          {/* Welcome Message */}
          <motion.div
            className="mb-4 pb-4 border-b border-slate-800/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-slate-500 font-mono text-xs md:text-sm">
              <p>
                Last login: {new Date().toLocaleDateString("ko-KR")} on ttys001
              </p>
              <p className="text-emerald-500/70">
                Welcome to sjdev-portfolio v1.0.0
              </p>
            </div>
          </motion.div>

          {/* Terminal Lines */}
          <div className="space-y-1">
            <AnimatePresence>
              {visibleLines.map((line, index) => (
                <TerminalLineRenderer
                  key={line.id}
                  line={line}
                  isTyping={
                    isTypingCommand && index === visibleLines.length - 1
                  }
                  onTypeComplete={handleTypeComplete}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Final Cursor */}
          {showFinalCursor && (
            <motion.div
              className="mt-2 font-mono text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <span className="text-slate-500">
                <span className="text-blue-400">sjdev</span>
                <span className="text-slate-600">@</span>
                <span className="text-purple-400">portfolio</span>
                <span className="text-slate-500"> ~ % </span>
              </span>
              <BlinkingCursor />
            </motion.div>
          )}
        </div>
      </div>

      {/* Hint Text */}
      <motion.p
        className="text-center text-sm text-slate-500 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        💡 터미널 스타일로 저를 소개합니다
      </motion.p>
    </motion.div>
  );
};

// 메인 AboutSection 컴포넌트
const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="bg-slate-900/20">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          System Terminal
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          인터랙티브한 터미널 인터페이스로 저를 소개합니다
        </p>
      </motion.div>

      {/* Terminal Component */}
      <SystemTerminal />
    </SectionWrapper>
  );
};

export default AboutSection;
