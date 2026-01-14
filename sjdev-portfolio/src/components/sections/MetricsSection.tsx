// ============================================
// 📊 MetricsSection Component
// Engineering Metrics - 성능 최적화 성과 시각화
// ============================================

import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle } from "../common";
import { PERFORMANCE_COMPARISONS, METRIC_CARDS } from "../../constants/data";
import { cn } from "../../utils/helpers";
import type { PerformanceComparison, MetricCard } from "../../types";

// ============================================
// 📈 Performance Bar Chart Component
// ============================================

const PerformanceBarChart = () => {
  const maxValue = Math.max(
    ...PERFORMANCE_COMPARISONS.flatMap((c) => [c.before, c.after])
  );

  return (
    <motion.div
      className="relative rounded-2xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-xl p-6 lg:p-8 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      {/* Header */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
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
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              Performance Optimization
            </h3>
            <p className="text-sm text-slate-400">
              MySQL 인덱스 & 쿼리 최적화 결과
            </p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="relative space-y-8">
        {PERFORMANCE_COMPARISONS.map((comparison, index) => (
          <BarChartItem
            key={comparison.label}
            comparison={comparison}
            maxValue={maxValue}
            index={index}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="relative flex items-center justify-center gap-8 mt-8 pt-6 border-t border-slate-800/50">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-slate-600" />
          <span className="text-sm text-slate-400">Before</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-500" />
          <span className="text-sm text-slate-400">After</span>
        </div>
      </div>
    </motion.div>
  );
};

// 개별 바 차트 아이템
const BarChartItem = ({
  comparison,
  maxValue,
  index,
}: {
  comparison: PerformanceComparison;
  maxValue: number;
  index: number;
}) => {
  const beforeWidth = (comparison.before / maxValue) * 100;
  const afterWidth = (comparison.after / maxValue) * 100;

  return (
    <div className="space-y-3">
      {/* Label */}
      <div className="flex items-center justify-between">
        <span className="font-medium text-white">{comparison.label}</span>
        <span className="text-sm font-semibold text-emerald-400">
          {comparison.improvement}
        </span>
      </div>

      {/* Bars */}
      <div className="space-y-2">
        {/* Before Bar */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-xs text-slate-500 text-right">Before</span>
          <div className="flex-1 h-6 bg-slate-800/50 rounded-lg overflow-hidden">
            <motion.div
              className="h-full bg-slate-600 rounded-lg flex items-center justify-end px-2"
              initial={{ width: 0 }}
              whileInView={{ width: `${beforeWidth}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <span className="text-xs font-mono text-slate-300">
                {comparison.before}
                {comparison.unit}
              </span>
            </motion.div>
          </div>
        </div>

        {/* After Bar */}
        <div className="flex items-center gap-3">
          <span className="w-12 text-xs text-slate-500 text-right">After</span>
          <div className="flex-1 h-6 bg-slate-800/50 rounded-lg overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-emerald-500 to-emerald-400 rounded-lg flex items-center justify-end px-2 shadow-lg shadow-emerald-500/20"
              initial={{ width: 0 }}
              whileInView={{ width: `${afterWidth}%` }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2 + 0.1,
                ease: "easeOut",
              }}
            >
              <span className="text-xs font-mono text-white font-semibold">
                {comparison.after}
                {comparison.unit}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================
// 💳 Metric Card Component
// ============================================

const MetricCardItem = ({
  metric,
  index,
}: {
  metric: MetricCard;
  index: number;
}) => {
  const colorVariants = {
    emerald: {
      bg: "from-emerald-500/10 to-emerald-600/5",
      border: "border-emerald-500/20 hover:border-emerald-500/40",
      icon: "bg-emerald-500/20 text-emerald-400",
      value: "text-emerald-400",
      glow: "shadow-emerald-500/20",
    },
    blue: {
      bg: "from-blue-500/10 to-blue-600/5",
      border: "border-blue-500/20 hover:border-blue-500/40",
      icon: "bg-blue-500/20 text-blue-400",
      value: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
    purple: {
      bg: "from-purple-500/10 to-purple-600/5",
      border: "border-purple-500/20 hover:border-purple-500/40",
      icon: "bg-purple-500/20 text-purple-400",
      value: "text-purple-400",
      glow: "shadow-purple-500/20",
    },
    orange: {
      bg: "from-orange-500/10 to-orange-600/5",
      border: "border-orange-500/20 hover:border-orange-500/40",
      icon: "bg-orange-500/20 text-orange-400",
      value: "text-orange-400",
      glow: "shadow-orange-500/20",
    },
  };

  const colors = colorVariants[metric.color];

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-300 group",
        colors.border
      )}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
    >
      {/* Glassmorphism Background */}
      <div
        className={cn("absolute inset-0 bg-linear-to-br opacity-50", colors.bg)}
      />

      {/* Content */}
      <div className="relative p-6">
        {/* Icon */}
        <motion.div
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4",
            colors.icon
          )}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {metric.icon}
        </motion.div>

        {/* Value */}
        <div className="mb-2">
          <motion.span
            className={cn("text-4xl font-bold", colors.value)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          >
            {metric.value}
          </motion.span>
          {metric.unit && (
            <span className="text-xl text-slate-400 ml-1">{metric.unit}</span>
          )}
        </div>

        {/* Title & Description */}
        <h4 className="font-semibold text-white mb-1">{metric.title}</h4>
        <p className="text-sm text-slate-400">{metric.description}</p>

        {/* Animated Border Glow */}
        <div
          className={cn(
            "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
            `shadow-lg ${colors.glow}`
          )}
        />
      </div>

      {/* Corner Decoration */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
    </motion.div>
  );
};

// ============================================
// 🏆 Achievement Highlight
// ============================================

const AchievementHighlight = () => (
  <motion.div
    className="relative rounded-2xl border border-emerald-500/20 bg-slate-900/30 backdrop-blur-xl p-6 lg:p-8 overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.4 }}
  >
    {/* Background Gradient */}
    <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

    {/* Content */}
    <div className="relative flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
      {/* Icon */}
      <motion.div
        className="shrink-0 w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-3xl">🏆</span>
      </motion.div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">
          성능 최적화를 통한 사용자 경험 개선
        </h3>
        <p className="text-slate-400">
          MySQL 인덱스 튜닝과 N+1 쿼리 해결로{" "}
          <span className="text-emerald-400 font-semibold">
            평균 응답 시간 80% 단축
          </span>
          을 달성했습니다. 체계적인 성능 모니터링과 지속적인 최적화를 통해
          안정적인 서비스를 제공합니다.
        </p>
      </div>

      {/* Stats */}
      <div className="shrink-0 flex md:flex-col gap-4 md:gap-2 text-center">
        <div>
          <div className="text-2xl font-bold text-emerald-400">5x</div>
          <div className="text-xs text-slate-500">속도 향상</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">0</div>
          <div className="text-xs text-slate-500">다운타임</div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ============================================
// 🎯 Main MetricsSection Component
// ============================================

const MetricsSection = () => {
  return (
    <SectionWrapper id="metrics" className="bg-slate-900/20">
      <SectionTitle
        title="Engineering Metrics"
        subtitle="데이터로 증명하는 최적화 성과"
      />

      {/* Main Grid Layout */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Performance Bar Chart */}
        <PerformanceBarChart />

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 gap-4">
          {METRIC_CARDS.map((metric, index) => (
            <MetricCardItem key={metric.id} metric={metric} index={index} />
          ))}
        </div>
      </div>

      {/* Achievement Highlight */}
      <AchievementHighlight />
    </SectionWrapper>
  );
};

export default MetricsSection;
