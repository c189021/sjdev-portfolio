// ============================================
// 🔧 Utility Helper Functions
// ============================================

/**
 * 클래스네임 조건부 결합
 */
export const cn = (
  ...classes: (string | boolean | undefined | null)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

/**
 * 이메일 유효성 검사
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * 숫자에 콤마 추가
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString("ko-KR");
};

/**
 * 문자열 자르기 (말줄임표 추가)
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

/**
 * 스크롤 잠금/해제
 */
export const lockScroll = (): void => {
  document.body.style.overflow = "hidden";
};

export const unlockScroll = (): void => {
  document.body.style.overflow = "";
};

/**
 * 딜레이 함수 (Promise)
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 디바운스 함수
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
};

/**
 * 쓰로틀 함수
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 외부 링크 여부 확인
 */
export const isExternalLink = (url: string): boolean => {
  return url.startsWith("http://") || url.startsWith("https://");
};

/**
 * 랜덤 ID 생성
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};
