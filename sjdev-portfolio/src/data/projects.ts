import type { Project } from "../types/content";

// 순서 = 화면 노출 순서 (featured 3개 → 나머지)
export const PROJECTS: Project[] = [
  // ============================================
  // 1. Guider — LLM 웹 내비게이터
  // ============================================
  {
    id: "guider",
    title: "Guider",
    subtitle: "LLM 웹 내비게이터",
    tagline:
      "사이트에 상관없이 자연어 질문을 '어디를 클릭해야 하는지'로 변환해 화면에 직접 표시하는 LLM 웹 내비게이션 크롬 확장 프로그램",
    summary:
      "전자상거래·금융·공공·의료 등 메뉴가 복잡한 사이트에서 사용자(특히 고령층)가 정보를 못 찾는 문제를 해결합니다. 내장 챗봇(단일 사이트 한정)·범용 AI(화면 맥락을 못 읽음)·자동화 에이전트(대신 클릭해 학습 효과 상실)의 한계를 넘어, 대신 눌러주지 않고 '경로만 안내'해 사용자 통제와 학습 효과를 유지합니다. 크롬 확장이라 어떤 HTML 사이트에서도 동작합니다.",
    period: "2026.04 – 2026.05",
    status: "completed",
    kind: "team",
    domains: ["ai-llm", "web"],
    featured: true,
    techStack: [
      "Chrome Extension",
      "JavaScript",
      "Claude Sonnet 4.5",
      "DOM 분석",
      "Redis",
      "Shadow DOM",
    ],
    team: { size: 2, members: "박성호·박성진" },
    myRole:
      "DOM 추출·클라이언트 검증 파트 담당 (클릭 요소 수집·가시성 필터링·휴리스틱 스코어링, LLM 응답 실존 요소 재검증)",
    implementation: [
      {
        title: "DOM 추출",
        description:
          "클릭 가능 요소(a·button·input) 수집 → 가시성 필터링 → 휴리스틱 스코어링(신청·발급 등 CTA 가점, 검색·로그인 우회 감점) → 민감 요소 제거. LLM 전송 토큰을 대폭 축소.",
      },
      {
        title: "LLM 의미 추론",
        description:
          "필터링된 요소를 Claude Sonnet 4.5에 전달하고, 규칙(직접 매칭·메뉴/CTA 우선) 시스템 프롬프트로 클릭 경로를 JSON으로 도출. '전입신고'→'주민등록 전입신고' 같은 구어체-공식용어 매칭. Redis로 도메인 캐싱.",
      },
      {
        title: "클라이언트 검증",
        description:
          "LLM 응답의 요소가 실제 화면에 존재하는지 재확인해 환각(hallucination)에 의한 오안내를 차단.",
      },
      {
        title: "시각적 하이라이팅",
        description:
          "Shadow DOM 오버레이(펄스·번호·화살표)로 경로를 표시하고, MutationObserver로 페이지 변화를 감지해 다음 단계로 자동 진행.",
      },
    ],
    problemSolving: [
      {
        problem: "LLM 환각으로 존재하지 않는 버튼을 안내",
        approach: "클라이언트단 DOM 재검증으로 실존·가시 요소만 하이라이팅",
      },
      {
        problem: "페이지 DOM이 커서 토큰·비용·속도 문제 발생",
        approach: "휴리스틱 사전 필터링으로 핵심 후보만 LLM에 전달",
      },
    ],
    outcomes: [
      {
        kind: "metric",
        text: "추론 정확도 80% (단순 질의 90% / 다단계 70%)",
      },
      {
        kind: "metric",
        text: "사용자 50명 실험 — 과업 완료 시간 79% 단축",
        metric: {
          label: "완료 시간",
          before: "5분 30초",
          after: "1분 10초",
          delta: "-79%",
        },
      },
      {
        kind: "metric",
        text: "사용자 50명 실험 — 과업 성공률 24%→100%",
        metric: { label: "성공률", before: "24%", after: "100%" },
      },
      {
        kind: "metric",
        text: "사용자 50명 실험 — 오클릭 94% 감소",
        metric: {
          label: "오클릭 횟수",
          before: "6.5회",
          after: "0.4회",
          delta: "-94%",
        },
      },
      {
        kind: "metric",
        text: "사용자 50명 실험 — 만족도 2.4→4.6",
        metric: { label: "만족도 (5점 척도)", before: "2.4", after: "4.6" },
      },
      {
        kind: "award",
        text: "DevOps 전문가 양성과정 발표회 최우수상",
        refId: "award-devops",
      },
      {
        kind: "publication",
        text: "KSII 한국인터넷정보학회 국제 논문지 게재",
        refId: "pub-guider",
      },
    ],
    links: { github: null, paper: "/papers/guider-ksii.pdf" },
    media: {
      thumbnail: "/projects/guider/screenshot-1.png",
      images: [
        "/projects/guider/screenshot-1.png",
        "/projects/guider/screenshot-2.png",
      ],
      video: "/projects/guider/demo.mp4",
    },
    todos: ["확인 필요: GitHub 저장소 주소 (나중에 제공 예정)"],
  },

  // ============================================
  // 2. Otto — 멀티모달 AI 감정 객관화 플랫폼
  // ============================================
  {
    id: "otto",
    title: "Otto",
    subtitle: "멀티모달 AI 감정 객관화 플랫폼",
    tagline:
      "음성·표정·텍스트를 개인 기준선 대비 변화량(Δ)으로 분석하고, 그 결과를 3인칭 숏폼 아바타 영상으로 재구성해 '자기 거리두기'를 유도하는 디지털 헬스케어 플랫폼",
    summary:
      "국내 우울증 환자 100만 명 이상, 그중 70~80%가 자기 정서 상태를 정확히 인식하지 못하는 '정서적 객관화의 부재' 문제에서 출발했습니다. 이모티콘·텍스트 위주 기록 앱의 주관적 편향을 넘어, 심리학의 '자기 거리두기(Self-distancing)' 개념을 기술로 구현합니다. 하루의 감정을 멀티모달로 분석해 사용자 페르소나가 투영된 아바타 영상으로 만들어 제3자 시점에서 관찰하게 합니다. 한이음 드림업 산학 프로젝트로도 진행 중입니다.",
    period: "2026.03 – 2026.09",
    status: "in-progress",
    kind: "team",
    domains: ["ai-llm", "ml-data"],
    featured: true,
    techStack: [
      "MediaPipe",
      "librosa",
      "Whisper",
      "KoBERT",
      "GPT-4o",
      "TTV (Runway/LivePortrait)",
      "Flutter",
      "FastAPI",
      "PostgreSQL/PostGIS",
      "ChromaDB",
    ],
    team: { size: 5, members: "김다경·박성진·정재영·차한규·김병서" },
    myRole:
      "멀티모달 분석 모듈 담당 (3모달 특성 추출·베이스라인-Δ 분석·부조화 감지 구현)",
    implementation: [
      {
        title: "베이스라인 캘리브레이션",
        description:
          "첫 사용 시 1분 중립 대화로 평소 상태를 샘플링하고 Big Five를 보정 계수로 반영. 절대값이 아닌 개인 기준선 대비 Δ로 분석.",
      },
      {
        title: "3모달 분석",
        description:
          "안면(MediaPipe FaceMesh — FACS AU + 잠재 표정 검출) / 음성(librosa — F0·RMS·발화속도·jitter·shimmer의 z-score) / 텍스트(Whisper STT → KoBERT + GPT-4o).",
      },
      {
        title: "모달리티 간 부조화 감지",
        description:
          "'괜찮다'고 말해도 음성·표정 Δ가 부정 방향이면 인지부조화 신호로 보고, SFT 상담이 역질문을 던지도록 트리거.",
      },
      {
        title: "숏폼 아바타 영상",
        description:
          "하루 감정 흐름을 LLM이 3인칭 시나리오로 변환 → TTV(Runway/LivePortrait + Stable Video Diffusion)로 30~60초 영상 합성.",
      },
      {
        title: "SFT 상담 모듈",
        description:
          "AI Hub 감정 말뭉치·K-EmoDB·CBT 사례로 파인튜닝(감정 라벨링/인지 재구성/행동 지침).",
      },
    ],
    problemSolving: [
      {
        problem: "감정 절대값의 개인차로 인한 오인식",
        approach: "베이스라인 대비 Δ 상대 분석으로 해결",
      },
      {
        problem: "민감 생체 데이터의 프라이버시 우려",
        approach:
          "원본 영상·음성은 단말에서 특성 벡터로 변환 후 즉시 폐기, 서버에는 비식별 Δ만 저장",
      },
      {
        problem: "자해 위험 신호에 대한 안전 대응",
        approach: "자해 위험 신호 감지 시 임상 자원을 안내하는 가드레일 내장",
      },
    ],
    outcomes: [
      {
        kind: "award",
        text: "대한전자공학회 하계학술대회 우수학생논문상 (2026.6)",
        refId: "award-otto",
      },
      { kind: "publication", text: "논문 게재", refId: "pub-otto" },
      {
        kind: "etc",
        text: "임상(PHQ-9·PSS)·행동·객관화 지표의 3중 평가 체계 설계",
      },
    ],
    links: { github: null, paper: "/papers/otto-kiiee.pdf" },
    todos: [
      "확인 필요: GitHub 저장소 주소 (나중에 제공 예정)",
      "대기: 프로젝트 스크린샷·시연 자료",
    ],
  },

  // ============================================
  // 3. Refactory — LLM vs 인간 코드 품질 비교 분석
  // ============================================
  {
    id: "refactory",
    title: "Refactory",
    subtitle: "LLM vs 인간 코드 품질 비교 분석",
    tagline:
      "동일 요구사항으로 유료 LLM 3종과 인간 개발자가 만든 코드를, 자체 제작한 분석 웹앱으로 정량 비교한 소프트웨어공학 연구",
    summary:
      "LLM이 '동작하는 코드'를 넘어 구조적 품질·유지보수성을 갖추는지 객관적으로 검증했습니다. 순환복잡도(CC)·객체결합도(CBO)·라인수(LOC) 기반 '품질 게이트'를 제안하고, 개발자 역할을 단순 작성자(Coder)에서 AI 산출물을 검증하는 아키텍트(Validator & Architect)로 재정의합니다.",
    period: "2026.03 – 2026.04",
    status: "completed",
    kind: "team",
    domains: ["research", "ai-llm", "web"],
    featured: true,
    techStack: ["React", "JavaScript", "정적분석 (CC·CBO·LOC)"],
    team: { size: 2, members: "박성호·박성진" },
    myRole:
      "자체 코드 품질 분석 웹앱 개발 담당 (CC·CBO·LOC 자동 추출·비교 도구 구현)",
    implementation: [
      {
        title: "실험 설계",
        description:
          "React/JS로 동일한 To-Do List 앱을 ToDoist 기준 UI·4개 요구사항으로 명세. 유료 LLM 3종(ChatGPT·Gemini·Claude)과 전공 학부생에게 동일 프롬프트 제공.",
      },
      {
        title: "자체 코드 품질 분석 웹앱",
        description: "CC·CBO·LOC를 자동 추출·비교하는 분석 도구를 직접 개발.",
      },
    ],
    problemSolving: [
      {
        problem:
          "LLM은 컴포넌트 분리·모듈화·생산성에서 우위지만 오버엔지니어링(Claude 868줄) 발생, 인간은 3개 파일에 로직을 몰아 CC 7.15·CBO 3.9의 '스파게티 코드' 징후 — 어느 쪽도 단일 지표로는 품질을 보장할 수 없음",
        approach: "CC·CBO 기반 정량 '품질 게이트'의 필요성을 실증",
        result: "단일 지표가 아닌 복합 정량 게이트가 필수임을 데이터로 입증",
      },
    ],
    outcomes: [
      {
        kind: "publication",
        text: "ASK 한국정보처리학회 논문 게재",
        refId: "pub-refactory",
      },
      {
        kind: "etc",
        text: "개발자 역할을 'Validator & Architect'로 재정의하는 관점 제안",
      },
    ],
    links: { github: null, paper: "/papers/refactory-ask.pdf" },
    todos: [
      "확인 필요: GitHub 저장소·분석 웹앱 주소 (나중에 제공 예정)",
      "대기: 프로젝트 스크린샷 자료",
    ],
  },

  // ============================================
  // 4. 지역난방 열수요 예측 — 날씨 빅데이터 융합 ML
  // ============================================
  {
    id: "heat-demand",
    title: "지역난방 열수요 예측",
    subtitle: "날씨 빅데이터 융합 시계열 ML",
    tagline:
      "실시간 기상 데이터와 과거 열수요를 결합해 향후 24시간 지역난방 열수요를 예측, 과소·과다 공급을 막고 에너지 효율을 최적화하는 시계열 ML 프로젝트",
    summary:
      "지역난방 시스템의 시간대별·계절별 열수요 예측 부정확은 에너지 낭비와 비용·환경 부담을 키웁니다. 기상청 날씨마루(bd.kma.go.kr)의 열수요·기상관측·객관분석 자료를 융합해 향후 24시간 열수요를 예측, 공급 효율을 극대화하고 과소·과다 공급을 방지합니다.",
    period: "2025.04 – 2025.05",
    status: "completed",
    kind: "team",
    domains: ["ml-data"],
    featured: false,
    techStack: ["Python", "LSTM", "TensorFlow/Keras", "시계열 예측"],
    team: { size: 2 },
    myRole: "데이터 전처리·모델 학습 담당",
    implementation: [
      {
        title: "데이터 설계",
        description:
          "입력 X = 기상(기온·습도·풍속·일사량) + 시간 변수(시간대·계절) + 직전 24시간 열수요 / 출력 Y = 시간대별 예측 열수요.",
      },
      {
        title: "전처리",
        description: "Min-Max 정규화, 결측치 선형 보간.",
      },
      {
        title: "모델링",
        description:
          "LSTM으로 과거 24시간을 입력받아 다음 24시간을 예측 (TensorFlow/Keras).",
      },
      { title: "평가", description: "RMSE, MAE 지표로 성능 평가." },
    ],
    problemSolving: [],
    outcomes: [],
    links: { github: null },
    todos: ["확인 필요: GitHub 저장소 주소 (나중에 제공 예정)"],
  },

  // ============================================
  // 5. 낙상방지 웹 애플리케이션
  // ============================================
  {
    id: "fall-prevention",
    title: "낙상방지 웹 애플리케이션",
    subtitle: "실시간 낙상 감지·알림 시스템",
    tagline:
      "카메라 영상에서 추출한 스켈레톤(관절) 정보로 노인의 움직임을 실시간 분석해 낙상을 감지하고, 보호자·관리자에게 즉시 알림을 보내는 웹 애플리케이션",
    summary:
      "고령자 낙상은 발견이 늦으면 큰 사고로 이어집니다. 영상 기반 스켈레톤 인식 모델로 움직임을 실시간 분석해 낙상을 감지하고 이상 상황을 즉시 알림으로 전달, 대응 시간을 단축하는 것을 목표로 한 데이터베이스 팀 프로젝트입니다.",
    period: "2025.09 – 2025.11",
    status: "completed",
    kind: "team",
    domains: ["web"],
    featured: false,
    techStack: ["Spring Boot", "React", "Python", "MySQL"],
    team: { size: 4 },
    myRole: "백엔드(Spring Boot) API·DB 설계 담당",
    implementation: [
      {
        title: "실시간 모니터링",
        description:
          "카메라 영상에서 스켈레톤(관절 좌표)을 추출해 움직임 패턴을 분석, 낙상 여부를 판별하는 로직 구현 (Python).",
      },
      {
        title: "백엔드",
        description: "Spring Boot REST API로 감지 이벤트 처리·데이터 관리.",
      },
      {
        title: "DB 설계",
        description:
          "사용자·움직임 로그·낙상 이벤트·알림 이력 테이블 및 조회 쿼리 설계 (MySQL).",
      },
      {
        title: "프론트엔드",
        description: "React 실시간 모니터링 대시보드·알림 UI.",
      },
    ],
    problemSolving: [
      {
        problem: "정상 움직임과 낙상을 구분하지 못해 오탐(false positive)이 잦음",
        approach: "임계값·패턴 조건을 조정해 오탐률 감소",
      },
    ],
    outcomes: [],
    links: { github: null },
    todos: [
      "확인 필요: DB 스키마(ERD) 자료 유무 — 있으면 상세에 강점으로 추가",
      "대기: 프로젝트 스크린샷·시연 자료",
    ],
  },

  // ============================================
  // 6. 시니어 디지털 교육 웹 애플리케이션
  // ============================================
  {
    id: "senior-edu",
    title: "시니어 디지털 교육 웹",
    subtitle: "고령자 디지털 리터러시 교육 플랫폼",
    tagline:
      "노인이 전화·문자·카메라 등 스마트폰 앱 사용법을 익히도록 돕는 디지털 리터러시 교육 웹 애플리케이션",
    summary:
      "디지털 소외 계층인 고령자가 전화·문자·카메라 등 필수 앱 사용에 겪는 어려움을 해결하기 위해, 주요 앱 사용법을 단계별로 학습하는 교육용 웹 애플리케이션을 개발했습니다. 메타버스 융합SW아카데미 5기 수료작입니다.",
    period: "2025.02 – 2025.05",
    status: "completed",
    kind: "team",
    domains: ["web"],
    featured: false,
    techStack: ["React", "Spring Boot", "MySQL"],
    team: { size: 4 },
    myRole: "프론트엔드(React) UI·학습 콘텐츠 화면 구현 담당",
    implementation: [
      {
        title: "프론트엔드",
        description:
          "React로 큰 글씨·단순 동선 등 고령자 접근성을 고려한 화면 구성.",
      },
      {
        title: "백엔드",
        description: "Spring Boot REST API로 학습 콘텐츠·진도 관리.",
      },
      {
        title: "데이터베이스",
        description: "MySQL로 사용자·콘텐츠·진도 데이터 관리.",
      },
      {
        title: "학습 기능",
        description:
          "전화·문자·카메라 등 앱별 사용법을 교육 후 직접 따라 해보는 실습형으로 단계별 제공.",
      },
    ],
    problemSolving: [
      {
        problem: "고령 사용자가 복잡한 UI에서 이탈",
        approach: "버튼·글씨 크기 확대, 화면당 정보량 축소로 개선",
      },
    ],
    outcomes: [{ kind: "etc", text: "메타버스 융합SW아카데미 5기 수료작" }],
    links: { github: null },
    todos: [
      "확인 필요: 시연·평가 결과 유무",
      "확인 필요: GitHub 저장소 주소 (나중에 제공 예정)",
      "대기: 프로젝트 스크린샷 자료",
    ],
  },

  // ============================================
  // 7. 서울대 이차전지연구소 워드프레스 플러그인 (외주)
  // ============================================
  {
    id: "snu-wordpress",
    title: "서울대 이차전지연구소 플러그인",
    subtitle: "맞춤형 워드프레스 플러그인 (외주)",
    tagline:
      "서울대학교 이차전지연구소 워드프레스 사이트에 좌석 예약·이용 현황 확인 기능을 추가한 맞춤형 플러그인 개발 — 실제 클라이언트 대상 외주 프로젝트",
    summary:
      "서울대학교 이차전지연구소의 요구에 맞춰 기존 워드프레스 사이트에 좌석 예약 및 이용 현황을 확인할 수 있는 커스텀 플러그인을 개발했습니다. 프론트엔드(JavaScript) 인터랙션 구현을 담당했으며, 실제 클라이언트에 정식 납품되어 운영 중입니다.",
    period: "2025.01 – 2025.02",
    status: "completed",
    kind: "freelance",
    domains: ["web"],
    featured: false,
    techStack: ["WordPress", "PHP", "JavaScript"],
    team: { size: null },
    myRole: "프론트엔드(JavaScript) 인터랙션 구현 담당 (좌석 예약·이용 현황 기능)",
    implementation: [
      {
        title: "플러그인 개발",
        description: "PHP로 워드프레스 훅·API 기반 커스텀 플러그인 구현.",
      },
      {
        title: "좌석 예약·이용 현황 기능",
        description:
          "JavaScript 기반 프론트 인터랙션으로 좌석 예약·이용 현황 확인 기능 구현.",
      },
    ],
    problemSolving: [],
    outcomes: [
      {
        kind: "etc",
        text: "실제 클라이언트(서울대학교 연구소)에 정식 납품, 현재 운영 중",
      },
    ],
    links: {},
    todos: [
      "확인 필요: DB·관리자 페이지 연동 여부",
      "확인 필요: 문제 해결 경험 — 초안: '기존 테마와 충돌 없이 기능 확장 → 훅 기반 독립 플러그인화' (사실 확인 후 반영)",
    ],
  },

  // ============================================
  // 8. 졸업요건·학점 관리 웹 애플리케이션 [예정]
  // ============================================
  {
    id: "grad-tracker",
    title: "졸업요건·학점 관리 웹",
    subtitle: "개인 사이드 프로젝트 (기획 중)",
    tagline:
      "졸업 요건 충족 여부를 확인하고 학기별 학점을 관리하는 웹 애플리케이션",
    summary:
      "학생이 졸업 요건(전공·교양 이수 학점 등) 충족 여부를 한눈에 확인하고 학점을 관리하도록 돕는 개인 사이드 프로젝트. 현재 기획 단계로, 제작 예정입니다.",
    period: null,
    status: "planned",
    kind: "personal",
    domains: ["web"],
    featured: false,
    techStack: ["React"],
    team: { size: 1 },
    myRole: "개인 프로젝트 (기획·개발 전체)",
    implementation: [],
    problemSolving: [],
    outcomes: [],
    links: {},
    todos: [
      "예정: 개발 착수 후 핵심 구현·문제 해결·성과 채우기 (완성 전까지 '예정' 배지 노출)",
    ],
  },

  // ============================================
  // 9. N.O.D.E 팀 포트폴리오 웹사이트
  // ============================================
  {
    id: "node-portfolio",
    title: "N.O.D.E 팀 포트폴리오",
    subtitle: "동아리 팀 포트폴리오 웹사이트",
    tagline:
      "자기주도학습 개발 동아리 N.O.D.E(Network Of Developer Evolution)에서 팀원 프로젝트를 전시하기 위해 기획·개발·배포한 팀 포트폴리오 웹사이트",
    summary:
      "동아리 팀원 각자의 프로젝트를 한곳에 전시하는 포트폴리오 웹사이트를 실전 개발 경험을 목표로 구축했습니다. 기획부터 프론트·백엔드 구현, AWS 배포까지 웹 개발 전체 라이프사이클을 직접 경험한 팀 프로젝트입니다.",
    period: "2025.03 – 2025.05",
    status: "completed",
    kind: "team",
    domains: ["web"],
    featured: false,
    techStack: ["React", "HTML", "CSS", "JavaScript", "PHP", "AWS"],
    team: { size: 4 },
    myRole: "프론트엔드 구현·AWS 배포 담당",
    implementation: [
      {
        title: "프론트엔드",
        description:
          "React·HTML·CSS·JavaScript로 팀원 프로젝트 전시 페이지·반응형 레이아웃 구현.",
      },
      {
        title: "백엔드",
        description: "PHP로 팀원별 프로젝트 목록 데이터 처리·관리.",
      },
      { title: "배포", description: "AWS에 실제 배포·운영." },
    ],
    problemSolving: [],
    outcomes: [
      {
        kind: "award",
        text: "우수동아리 상장 수상 (2025-1학기, 홍익대학교 총장) — 이 웹사이트 결과물로 수상",
        refId: "award-node",
      },
      { kind: "etc", text: "AWS 실제 배포·운영" },
    ],
    links: { site: "https://nodefolio.co.kr", github: null },
    todos: [
      "확인 필요: 문제 해결 경험 — 초안: '여러 팀원 프로젝트 데이터를 일관된 형식으로 전시하는 구조 설계' (사실 확인 후 반영)",
      "확인 필요: GitHub 저장소 주소 (나중에 제공 예정)",
      "대기: 프로젝트 스크린샷 자료",
    ],
  },

  // ============================================
  // 10. 메타버스 아카데미 홈페이지 제작·운영
  // ============================================
  {
    id: "metaverse-academy",
    title: "메타버스 아카데미 홈페이지",
    subtitle: "웹사이트 제작·운영·유지보수 (교내 근로)",
    tagline:
      "교육과정 소개·수강 신청·공지사항을 중심으로 한 메타버스 아카데미 홈페이지를 제작하고, 디자인 개편·기능 추가·유지보수로 안정적 서비스를 제공한 웹 제작·운영 프로젝트",
    summary:
      "메타버스 아카데미의 교육과정 소개·수강 신청·공지사항 기능을 중심으로 홈페이지를 제작하고, 이후 지속적인 디자인 개편·기능 추가·유지보수를 수행했습니다. 단발성 개발이 아니라 실제 운영되는 서비스를 안정적으로 유지·개선하는 근로 프로젝트입니다.",
    period: "2025.12 – 2026.12",
    status: "in-progress",
    kind: "work",
    domains: ["web"],
    featured: false,
    techStack: ["React", "PHP", "AWS", "Linux"],
    team: { size: null },
    myRole: "사이트 제작·서버 운영·유지보수 담당",
    implementation: [
      {
        title: "홈페이지 제작",
        description: "교육과정 소개·수강 신청·공지사항 기능 구현.",
      },
      {
        title: "디자인 개편",
        description: "사용성 개선을 위한 UI 리뉴얼.",
      },
      {
        title: "기능 추가·유지보수",
        description: "운영 중 요구사항 반영·버그 대응.",
      },
      {
        title: "서버 관리",
        description: "AWS·Linux 환경에서 서비스 안정성 유지를 위한 서버 운영·모니터링.",
      },
    ],
    problemSolving: [],
    outcomes: [
      {
        kind: "etc",
        text: "실제 운영 서비스의 제작·운영·유지보수 경험 (웹 라이프사이클 전체)",
      },
    ],
    links: { site: null },
    media: {
      thumbnail: "/projects/metaverse/screenshot-1.png",
      images: ["/projects/metaverse/screenshot-1.png"],
    },
    todos: [
      "확인 필요: 디자인 개편의 구체 변경 내용",
      "확인 필요: 사이트 URL 공개 가능 여부",
    ],
  },
];

export const FEATURED_PROJECT_IDS = ["guider", "otto", "refactory"] as const;
