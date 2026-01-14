// ============================================
// 🏷️ SectionTitle Component
// 섹션 제목 컴포넌트
// ============================================

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
        <span className="text-emerald-400">.</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

export default SectionTitle;
