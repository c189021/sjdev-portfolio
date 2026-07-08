# 박성진 포트폴리오 (박성진.com)

홍익대학교 소프트웨어융합학과 박성진의 개인 포트폴리오 웹사이트입니다.
AI·LLM/웹 프로젝트 10개, 논문 3편(국제 논문지 게재 1편 포함), 수상·활동 이력을 담고 있습니다.

## 기술 스택

- **React 19 + TypeScript + Vite 7** — 원페이지 스크롤 구조 (라우터 없음)
- **Tailwind CSS v4** — `src/index.css`의 시맨틱 토큰(`@theme inline`)으로 라이트(웜 아이보리+코발트)/다크(웜 차콜) 테마
- **framer-motion** — 등장·스크롤 리빌·플로팅 애니메이션
- **lucide-react** — 아이콘

## 구조

```
src/
  data/        # 모든 콘텐츠(프로젝트·논문·수상·활동·스킬·자격증) — 코드와 분리된 단일 데이터 소스
  types/       # 콘텐츠 타입 정의
  components/
    common/    # SectionShell·Card·Button·Badge·Chip·Tag·Modal·Pending·Reveal
    layout/    # Header(테마 토글·모바일 메뉴) / Footer
    sections/  # Hero·About·Projects·Research·Activities·Skills·Contact
  hooks/       # useScrollSection, useTheme
```

- 콘텐츠 수정은 `src/data/`만 고치면 됩니다. 컴포넌트는 데이터를 렌더링만 합니다.
- 미확정 정보는 값 대신 각 항목의 `todos`에 기록되고 화면에 ⚠ 배지로 표시됩니다
  (`collectPendingItems()`로 전체 집계).
- 프로젝트 상세는 `#project=<id>` 해시 딥링크로 직접 열 수 있습니다.

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 타입체크 + 프로덕션 빌드
npm run lint     # ESLint
```

## 배포

`main` 브랜치 푸시 → GitHub Actions(`.github/workflows/deploy.yml`) → GitHub Pages → 박성진.com
