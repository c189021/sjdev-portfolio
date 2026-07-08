import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { cn, lockScroll, unlockScroll } from "../../utils/helpers";

// 공통 모달 — 프로젝트 상세(4-D), 상장 이미지 뷰어(4-E)에서 사용
// Esc / 배경 클릭으로 닫기, 열려 있는 동안 배경 스크롤 잠금

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** 패널 폭·스타일 조정 (예: 이미지 뷰어는 max-w-3xl) */
  className?: string;
}

const Modal = ({ open, onClose, children, className }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    lockScroll();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      unlockScroll();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* 배경 스크림 */}
      <div
        className="absolute inset-0 animate-[fade-in_0.15s_ease-out] bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* 패널 */}
      <div className="relative z-10 w-full max-w-2xl animate-[fade-in-up_0.22s_ease-out]">
        <button
          onClick={onClose}
          aria-label="닫기"
          className="absolute -top-2.5 right-3 z-20 rounded-lg border border-line bg-surface p-1.5 text-muted shadow-sm transition-colors hover:text-ink"
        >
          <X size={16} />
        </button>
        <div
          className={cn(
            "max-h-[85vh] overflow-y-auto rounded-2xl border border-line bg-canvas shadow-2xl",
            className
          )}
        >
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
