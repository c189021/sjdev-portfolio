import { motion } from "framer-motion";
import type { ReactNode } from "react";

// 스크롤 진입 시 나타나는 공통 리빌 래퍼 — 섹션 콘텐츠에 두루 사용

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const Reveal = ({ children, delay = 0, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default Reveal;
