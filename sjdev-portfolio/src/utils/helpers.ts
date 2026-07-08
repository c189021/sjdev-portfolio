import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** 클래스네임 조건부 결합 + Tailwind 충돌 병합 */
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

/** 모달 열림 시 배경 스크롤 잠금/해제 */
export const lockScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const unlockScroll = (): void => {
  document.body.style.overflow = "";
};
