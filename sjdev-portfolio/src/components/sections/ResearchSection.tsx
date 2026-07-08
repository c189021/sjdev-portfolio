import { useState } from "react";
import { BookOpen, FileText, Trophy } from "lucide-react";
import type { Award } from "../../types/content";
import { AWARDS, PUBLICATIONS } from "../../data";
import { Button, Card, Modal, Pending, Reveal, SectionShell } from "../common";
import ProjectLinkChip from "./ProjectLinkChip";

const ResearchSection = () => {
  // 상장 이미지 뷰어 — imageUrl이 있는 수상만 클릭 가능
  const [viewerAward, setViewerAward] = useState<Award | null>(null);

  const confirmedAwards = AWARDS.filter((a) => a.status === "confirmed");

  return (
    <SectionShell
      id="research"
      eyebrow="Research & Awards"
      title="논문 · 수상"
      description="만든 것을 실험과 논문으로 검증한 기록입니다."
      className="bg-sunken/40"
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ===== 논문 (로즈) ===== */}
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-muted">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-domain-research/12 text-domain-research">
              <BookOpen size={14} />
            </span>
            논문 {PUBLICATIONS.length}편
          </p>
          <div className="mt-4 space-y-4">
            {PUBLICATIONS.map((pub, index) => (
              <Reveal key={pub.id} delay={index * 0.07}>
                <Card className="flex h-full flex-col gap-3 border-l-[3px] border-l-domain-research/60">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {pub.venueType === "international-journal" ? (
                      <span className="inline-flex items-center rounded-full bg-linear-to-r from-domain-research to-domain-ai px-2.5 py-0.5 text-[11px] font-bold text-white">
                        국제 논문지
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-domain-research/10 px-2.5 py-0.5 text-[11px] font-bold text-domain-research">
                        국내 학술대회
                      </span>
                    )}
                    {pub.award && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-domain-ml/12 px-2.5 py-0.5 text-[11px] font-bold text-domain-ml">
                        <Trophy size={11} /> {pub.award}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[15px] font-bold leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-[12.5px] text-muted">
                    {pub.venue}
                    {" · "}
                    {pub.date ?? <Pending label="게재 시기 확인" />}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
                    {pub.projectId && (
                      <ProjectLinkChip projectId={pub.projectId} />
                    )}
                    {pub.pdfUrl ? (
                      <Button variant="ghost" size="sm" href={pub.pdfUrl} external>
                        <FileText size={13} /> 논문 보기
                      </Button>
                    ) : (
                      <Pending label="논문 PDF/링크 대기" />
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ===== 수상 (앰버) — 상장 실물 썸네일 ===== */}
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-muted">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-domain-ml/12 text-domain-ml">
              <Trophy size={14} />
            </span>
            수상 {confirmedAwards.length}건
            <span className="text-xs font-medium text-muted/70">
              카드를 누르면 상장 원본이 열립니다
            </span>
          </p>
          <div className="mt-4 space-y-3">
            {confirmedAwards.map((award, index) => (
              <Reveal key={award.id} delay={index * 0.06}>
                <Card
                  hover={award.imageUrl !== null}
                  onClick={
                    award.imageUrl ? () => setViewerAward(award) : undefined
                  }
                  className="group flex items-center gap-3.5 p-3.5"
                >
                  {award.imageUrl ? (
                    <span className="relative h-16 w-12 shrink-0 overflow-hidden rounded-md border border-line bg-white">
                      <img
                        src={award.imageUrl}
                        alt={`${award.title} 상장`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>
                  ) : (
                    <span className="grid h-16 w-12 shrink-0 place-items-center rounded-md bg-domain-ml/12 text-domain-ml">
                      <Trophy size={18} />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold leading-snug">
                      {award.title}
                    </p>
                    <p className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted">
                      {award.issuer ?? <Pending label="주최 기관" />}
                      <span aria-hidden>·</span>
                      {award.date ?? <Pending label="연도" />}
                    </p>
                    {award.projectId && (
                      <div className="mt-1.5">
                        <ProjectLinkChip projectId={award.projectId} />
                      </div>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ===== 상장 이미지 뷰어 ===== */}
      <Modal
        open={viewerAward !== null}
        onClose={() => setViewerAward(null)}
        className="max-w-3xl"
      >
        {viewerAward?.imageUrl && (
          <div className="p-4">
            <img
              src={viewerAward.imageUrl}
              alt={`${viewerAward.title} 상장`}
              className="w-full rounded-lg"
            />
            <p className="mt-3 text-center text-sm font-semibold">
              {viewerAward.title}
            </p>
          </div>
        )}
      </Modal>
    </SectionShell>
  );
};

export default ResearchSection;
