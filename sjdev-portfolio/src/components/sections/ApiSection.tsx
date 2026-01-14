// ============================================
// 🔌 ApiSection Component
// Swagger UI 스타일 API Specification 뷰어
// ============================================

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../common";
import { API_ENDPOINTS } from "../../constants/data";
import type { ApiEndpoint, ApiTag } from "../../types";

// HTTP 메서드별 스타일
const METHOD_STYLES = {
  GET: {
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/50",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  POST: {
    bg: "bg-blue-500/20",
    border: "border-blue-500/50",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  PUT: {
    bg: "bg-amber-500/20",
    border: "border-amber-500/50",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
  PATCH: {
    bg: "bg-purple-500/20",
    border: "border-purple-500/50",
    text: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  DELETE: {
    bg: "bg-red-500/20",
    border: "border-red-500/50",
    text: "text-red-400",
    glow: "shadow-red-500/20",
  },
};

// 태그 타입별 스타일
const TAG_STYLES = {
  optimization: {
    bg: "bg-emerald-500/20",
    text: "text-emerald-300",
    border: "border-emerald-500/30",
  },
  security: {
    bg: "bg-red-500/20",
    text: "text-red-300",
    border: "border-red-500/30",
  },
  cache: {
    bg: "bg-purple-500/20",
    text: "text-purple-300",
    border: "border-purple-500/30",
  },
  index: {
    bg: "bg-blue-500/20",
    text: "text-blue-300",
    border: "border-blue-500/30",
  },
  validation: {
    bg: "bg-amber-500/20",
    text: "text-amber-300",
    border: "border-amber-500/30",
  },
};

// 코드 하이라이팅 컴포넌트
const JsonViewer = ({ code, title }: { code: string; title: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 간단한 JSON 구문 하이라이팅
  const highlightJson = (json: string) => {
    return json
      .replace(
        /"([^"]+)":/g,
        '<span class="text-purple-400">"$1"</span>:'
      )
      .replace(
        /: "([^"]*)"/g,
        ': <span class="text-emerald-400">"$1"</span>'
      )
      .replace(
        /: (\d+)/g,
        ': <span class="text-amber-400">$1</span>'
      )
      .replace(
        /: (true|false)/g,
        ': <span class="text-blue-400">$1</span>'
      )
      .replace(
        /: (null)/g,
        ': <span class="text-slate-500">$1</span>'
      );
  };

  return (
    <div className="rounded-lg bg-slate-900/80 border border-slate-700/50 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
        <span className="text-xs font-medium text-slate-400">{title}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <span className="text-emerald-400">✓</span>
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <span>📋</span>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed scrollbar-thin">
        <code
          dangerouslySetInnerHTML={{ __html: highlightJson(code) }}
          className="text-slate-300"
        />
      </pre>
    </div>
  );
};

// API 태그 컴포넌트
const ApiTagBadge = ({ tag }: { tag: ApiTag }) => {
  const style = TAG_STYLES[tag.type];

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border ${style.bg} ${style.text} ${style.border}`}
    >
      {tag.type === "optimization" && "⚡"}
      {tag.type === "security" && "🔒"}
      {tag.type === "cache" && "💾"}
      {tag.type === "index" && "📊"}
      {tag.type === "validation" && "✅"}
      {tag.label}
    </span>
  );
};

// API 엔드포인트 카드 컴포넌트
const ApiEndpointCard = ({ endpoint }: { endpoint: ApiEndpoint }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const methodStyle = METHOD_STYLES[endpoint.method];

  return (
    <motion.div
      className={`rounded-xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
        isExpanded ? `shadow-lg ${methodStyle.glow}` : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      {/* Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-4 md:px-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 text-left hover:bg-slate-700/20 transition-colors"
      >
        {/* Method Badge */}
        <div
          className={`inline-flex items-center justify-center w-20 px-3 py-1.5 rounded-md font-bold text-sm ${methodStyle.bg} ${methodStyle.border} ${methodStyle.text} border shrink-0`}
        >
          {endpoint.method}
        </div>

        {/* Path */}
        <div className="flex-1 min-w-0">
          <code className="text-white font-mono text-sm md:text-base break-all">
            {endpoint.path}
          </code>
          <p className="text-slate-400 text-sm mt-1">{endpoint.summary}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {endpoint.tags.map((tag, idx) => (
            <ApiTagBadge key={idx} tag={tag} />
          ))}
        </div>

        {/* Expand Icon */}
        <motion.span
          className="text-slate-400 text-xl shrink-0"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 md:px-6 space-y-6 border-t border-slate-700/50 pt-6">
              {/* Description */}
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">
                  📝 Description
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {endpoint.description}
                </p>
              </div>

              {/* Parameters */}
              {endpoint.parameters && endpoint.parameters.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-slate-300 mb-3">
                    📥 Parameters
                  </h4>
                  <div className="rounded-lg border border-slate-700/50 overflow-hidden">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-800/50">
                        <tr className="text-left text-slate-400">
                          <th className="px-4 py-2 font-medium">Name</th>
                          <th className="px-4 py-2 font-medium">In</th>
                          <th className="px-4 py-2 font-medium">Type</th>
                          <th className="px-4 py-2 font-medium hidden md:table-cell">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700/50">
                        {endpoint.parameters.map((param, idx) => (
                          <tr key={idx} className="text-slate-300">
                            <td className="px-4 py-2 font-mono text-emerald-400">
                              {param.name}
                              {param.required && (
                                <span className="text-red-400 ml-1">*</span>
                              )}
                            </td>
                            <td className="px-4 py-2">
                              <span className="px-2 py-0.5 bg-slate-700/50 rounded text-xs">
                                {param.in}
                              </span>
                            </td>
                            <td className="px-4 py-2 text-blue-400 font-mono text-xs">
                              {param.type}
                            </td>
                            <td className="px-4 py-2 text-slate-400 hidden md:table-cell">
                              {param.description}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Request Body */}
              {endpoint.requestBody && (
                <div>
                  <h4 className="text-sm font-medium text-slate-300 mb-3">
                    📤 Request Body{" "}
                    <span className="text-slate-500 font-normal">
                      ({endpoint.requestBody.contentType})
                    </span>
                  </h4>
                  <JsonViewer
                    code={endpoint.requestBody.example}
                    title="Request Example"
                  />
                </div>
              )}

              {/* Response */}
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-3">
                  📥 Response{" "}
                  <span
                    className={`ml-2 px-2 py-0.5 rounded text-xs ${
                      endpoint.response.status === 200
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {endpoint.response.status}
                  </span>
                  <span className="text-slate-500 font-normal ml-2">
                    ({endpoint.response.contentType})
                  </span>
                </h4>
                <JsonViewer
                  code={endpoint.response.example}
                  title="Response Example"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// 서버 상태 인디케이터
const ServerStatus = () => (
  <motion.div
    className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
    </span>
    <span className="text-sm text-slate-300">
      API Server: <span className="text-emerald-400 font-medium">Online</span>
    </span>
    <span className="text-slate-500 text-xs">v1.0.0</span>
  </motion.div>
);

// 메서드별 필터 컴포넌트
const MethodFilter = ({
  activeMethod,
  onMethodChange,
}: {
  activeMethod: string | null;
  onMethodChange: (method: string | null) => void;
}) => {
  const methods = ["GET", "POST", "PUT", "DELETE"];

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onMethodChange(null)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
          activeMethod === null
            ? "bg-slate-600 text-white"
            : "bg-slate-800/50 text-slate-400 hover:text-white"
        }`}
      >
        All
      </button>
      {methods.map((method) => {
        const style = METHOD_STYLES[method as keyof typeof METHOD_STYLES];
        return (
          <button
            key={method}
            onClick={() => onMethodChange(method)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all border ${
              activeMethod === method
                ? `${style.bg} ${style.text} ${style.border}`
                : "bg-slate-800/50 text-slate-400 hover:text-white border-transparent"
            }`}
          >
            {method}
          </button>
        );
      })}
    </div>
  );
};

// 메인 ApiSection 컴포넌트
const ApiSection = () => {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  const filteredEndpoints = activeMethod
    ? API_ENDPOINTS.filter((ep) => ep.method === activeMethod)
    : API_ENDPOINTS;

  return (
    <SectionWrapper id="api" className="bg-slate-900/30">
      {/* Section Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          API Specification
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          RESTful API 설계와 백엔드 최적화 역량을 보여주는 API 명세서입니다
        </p>
        <ServerStatus />
      </motion.div>

      {/* API Documentation Header */}
      <motion.div
        className="mb-8 p-6 rounded-xl bg-slate-800/30 border border-slate-700/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <span className="text-2xl">📘</span>
              sjdev-portfolio API
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Base URL:{" "}
              <code className="text-emerald-400 bg-slate-900/50 px-2 py-0.5 rounded">
                https://api.sjdev-portfolio.com
              </code>
            </p>
          </div>
          <MethodFilter
            activeMethod={activeMethod}
            onMethodChange={setActiveMethod}
          />
        </div>
      </motion.div>

      {/* Tag Legend */}
      <motion.div
        className="mb-8 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <span className="text-sm text-slate-500">Backend Tags:</span>
        {Object.entries(TAG_STYLES).map(([type, style]) => (
          <span
            key={type}
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border ${style.bg} ${style.text} ${style.border}`}
          >
            {type === "optimization" && "⚡ Optimization"}
            {type === "security" && "🔒 Security"}
            {type === "cache" && "💾 Cache"}
            {type === "index" && "📊 Index"}
            {type === "validation" && "✅ Validation"}
          </span>
        ))}
      </motion.div>

      {/* API Endpoints List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {filteredEndpoints.map((endpoint, index) => (
            <motion.div
              key={endpoint.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <ApiEndpointCard endpoint={endpoint} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-sm text-slate-500">
          💡 각 API는{" "}
          <span className="text-emerald-400">JPA 최적화</span>,{" "}
          <span className="text-blue-400">인덱스 튜닝</span>,{" "}
          <span className="text-purple-400">캐싱 전략</span>이 적용되어 있습니다
        </p>
      </motion.div>
    </SectionWrapper>
  );
};

export default ApiSection;
