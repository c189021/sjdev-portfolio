import {
  BadgeCheck,
  ChevronDown,
  Globe,
  GraduationCap,
  School,
} from "lucide-react";
import type { Activity, ActivityTrack } from "../../types/content";
import { ACTIVITIES, CERTIFICATIONS } from "../../data";
import { Badge, Card, Pending, Reveal, SectionShell, Tag } from "../common";
import ProjectLinkChip from "./ProjectLinkChip";

// 트랙별 고유색 — 교내=코발트 / 대외=틸 / 교육=앰버
const TRACKS: {
  key: ActivityTrack;
  label: string;
  icon: typeof School;
  chip: string;
  dot: string;
}[] = [
  {
    key: "campus",
    label: "교내 활동",
    icon: School,
    chip: "bg-accent-soft text-accent",
    dot: "border-accent",
  },
  {
    key: "external",
    label: "대외 활동",
    icon: Globe,
    chip: "bg-domain-web/12 text-domain-web",
    dot: "border-domain-web",
  },
  {
    key: "education",
    label: "교육 수료",
    icon: GraduationCap,
    chip: "bg-domain-ml/12 text-domain-ml",
    dot: "border-domain-ml",
  },
];

const ActivityItem = ({
  activity,
  dot,
}: {
  activity: Activity;
  dot: string;
}) => (
  <li className="relative">
    <span
      className={`absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full border-2 bg-canvas ${dot}`}
    />
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-sm font-bold leading-snug">{activity.title}</p>
      {activity.status === "ongoing" && <Tag variant="soft">진행 중</Tag>}
    </div>
    <p className="mt-1 flex flex-wrap items-center gap-1.5 text-xs text-muted">
      {activity.organization && <span>{activity.organization}</span>}
      {activity.organization && <span aria-hidden>·</span>}
      {activity.period ?? <Pending label="기간 확인" />}
    </p>
    {activity.description && (
      <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
        {activity.description}
      </p>
    )}
    {activity.bullets && (
      <details className="group mt-1.5">
        <summary className="flex cursor-pointer list-none items-center gap-1 text-[12px] font-bold text-accent [&::-webkit-details-marker]:hidden">
          연구 내용 {activity.bullets.length}가지
          <ChevronDown
            size={13}
            className="transition-transform group-open:rotate-180"
          />
        </summary>
        <ul className="mt-2 space-y-1.5">
          {activity.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-[12.5px] leading-relaxed text-muted"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted/60" />
              {bullet}
            </li>
          ))}
        </ul>
      </details>
    )}
    {activity.relatedProjectIds && activity.relatedProjectIds.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-1.5">
        {activity.relatedProjectIds.map((projectId) => (
          <ProjectLinkChip key={projectId} projectId={projectId} />
        ))}
      </div>
    )}
  </li>
);

const ActivitiesSection = () => {
  const acquiredCerts = CERTIFICATIONS.filter((c) => c.status === "acquired");
  const plannedCerts = CERTIFICATIONS.filter((c) => c.status === "planned");

  return (
    <SectionShell
      id="activities"
      eyebrow="Activities"
      title="활동"
      description="팀을 이끌고, 연구를 보조하고, 교육과정을 수료한 기록입니다."
    >
      <div className="grid gap-12 lg:grid-cols-3 lg:gap-8">
        {TRACKS.map(({ key, label, icon: Icon, chip, dot }, trackIndex) => {
          // 미착수(planned) 항목은 시작 전까지 노출하지 않는다
          const items = ACTIVITIES.filter(
            (a) => a.track === key && a.status !== "planned"
          );
          return (
            <Reveal key={key} delay={trackIndex * 0.08}>
              <div>
                <p className="flex items-center gap-2 text-sm font-bold text-muted">
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-lg ${chip}`}
                  >
                    <Icon size={14} />
                  </span>
                  {label}
                  <span className="text-xs font-medium text-muted/70">
                    {items.length}
                  </span>
                </p>
                <ol className="mt-5 space-y-7 border-l border-line pl-6">
                  {items.map((activity) => (
                    <ActivityItem
                      key={activity.id}
                      activity={activity}
                      dot={dot}
                    />
                  ))}
                </ol>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* ===== 자격증 (Skills 섹션에서 이동) ===== */}
      <Reveal className="mt-14">
        <p className="flex items-center gap-2 text-sm font-bold text-muted">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-domain-ml/12 text-domain-ml">
            <BadgeCheck size={14} />
          </span>
          자격증
        </p>
        <div className="mt-4 space-y-4">
          {acquiredCerts.map((cert) => (
            <Card
              key={cert.id}
              className="flex flex-wrap items-center gap-3 p-4"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-domain-ml/12 text-domain-ml">
                <BadgeCheck size={16} />
              </span>
              <span className="text-sm font-bold">{cert.name}</span>
              <Badge>보유</Badge>
              <span className="text-xs text-muted">
                {cert.issuer && cert.date ? (
                  `${cert.issuer} · ${cert.date}`
                ) : (
                  <Pending label="발급 기관·취득일 확인" />
                )}
              </span>
            </Card>
          ))}
          {plannedCerts.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted">
                취득 준비 중 — 취득 확정 시 위 목록으로 이동합니다
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {plannedCerts.map((cert) => (
                  <Tag key={cert.id}>{cert.name}</Tag>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default ActivitiesSection;
