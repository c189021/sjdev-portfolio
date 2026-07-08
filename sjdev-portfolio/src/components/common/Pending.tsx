// 미확정 데이터 자리 표시 배지 — 실제 값이 채워지기 전까지 눈에 띄게 노출.
// 배포 전 collectPendingItems()가 비어야 하고, 이 배지도 화면에서 사라져야 한다.

interface PendingProps {
  label: string;
}

const Pending = ({ label }: PendingProps) => (
  <span className="inline-flex items-center gap-1 rounded-md border border-dashed border-amber-500/70 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-400">
    <span aria-hidden>⚠</span>
    {label}
  </span>
);

export default Pending;
