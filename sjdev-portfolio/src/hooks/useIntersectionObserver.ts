// ============================================
// 🪝 useIntersectionObserver Hook
// 요소 가시성 감지 (애니메이션 트리거용)
// ============================================

import { useEffect, useRef, useState, RefObject } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn<T extends Element> {
  ref: RefObject<T>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export const useIntersectionObserver = <T extends Element = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  freezeOnceVisible = true,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn<T> => {
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const frozen = isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = ref.current;

    // IntersectionObserver 지원 확인
    if (!node || typeof IntersectionObserver === "undefined") return;

    // 이미 보인 상태면 관찰 중지
    if (frozen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, frozen]);

  return { ref, isIntersecting, entry };
};

export default useIntersectionObserver;
