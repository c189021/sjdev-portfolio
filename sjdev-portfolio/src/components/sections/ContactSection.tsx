import { useState } from "react";
import { Check, Copy, FileDown, Github, Mail, Rss } from "lucide-react";
import { PROFILE, SITE } from "../../data";
import { SectionShell } from "../common";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = PROFILE.contact.email;

  const copyEmail = async () => {
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 접근이 막힌 환경에서는 메일 클라이언트로 대체
      window.location.href = `mailto:${email}`;
    }
  };

  const ghostBtn =
    "inline-flex items-center gap-1.5 rounded-lg border border-white/35 px-3.5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-white/10";

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="연락하기"
      description="함께 일해 보고 싶거나 프로젝트가 궁금하시다면 언제든 연락 주세요."
      className="border-b-0"
    >
      {/* 그라디언트 패널 — 테마와 무관하게 항상 선명한 코발트→바이올렛 */}
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl bg-linear-to-br from-[#1d4ed8] to-[#7c3aed] p-8 text-center sm:p-10">
        {/* 장식 블롭 + 도트 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-14 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
            <Mail size={22} />
          </span>
          <p className="mt-5 text-lg font-extrabold tracking-tight text-white sm:text-xl">
            {email ?? "이메일 준비 중"}
          </p>
          <p className="mt-2 text-sm text-white/75">
            이메일을 남겨 주시면 확인 후 답장드리겠습니다.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-accent shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              {copied ? (
                <>
                  <Check size={15} /> 복사됨
                </>
              ) : (
                <>
                  <Copy size={15} /> 이메일 복사
                </>
              )}
            </button>
            {email && (
              <a href={`mailto:${email}`} className={ghostBtn}>
                <Mail size={14} /> 메일 보내기
              </a>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {PROFILE.links.github && (
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className={ghostBtn}
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {PROFILE.links.blog && (
              <a
                href={PROFILE.links.blog}
                target="_blank"
                rel="noreferrer"
                className={ghostBtn}
              >
                <Rss size={14} /> 블로그
              </a>
            )}
            {SITE.resume.pdfPath && (
              <a
                href={SITE.resume.pdfPath}
                target="_blank"
                rel="noreferrer"
                className={ghostBtn}
              >
                <FileDown size={14} /> 이력서 다운로드
              </a>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default ContactSection;
