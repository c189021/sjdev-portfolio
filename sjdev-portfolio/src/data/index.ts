export { PROFILE } from "./profile";
export { PROJECTS, FEATURED_PROJECT_IDS } from "./projects";
export { PUBLICATIONS } from "./publications";
export { AWARDS } from "./awards";
export { ACTIVITIES } from "./activities";
export { SKILL_CATEGORIES } from "./skills";
export { CERTIFICATIONS } from "./certifications";
export {
  SITE,
  NAV_SECTIONS,
  DOMAIN_LABELS,
  KIND_LABELS,
  STATUS_LABELS,
} from "./site";

import { PROFILE } from "./profile";
import { PROJECTS } from "./projects";
import { PUBLICATIONS } from "./publications";
import { AWARDS } from "./awards";
import { ACTIVITIES } from "./activities";
import { CERTIFICATIONS } from "./certifications";
import { SITE } from "./site";

export interface PendingItem {
  source: string; // "프로젝트: Guider"
  todo: string;
}

/** 전체 데이터의 미확정(todo) 항목을 한 곳에 모은다 — "받아야 할 정보" 목록의 원천 */
export function collectPendingItems(): PendingItem[] {
  const items: PendingItem[] = [];
  const push = (source: string, todos: string[]) => {
    for (const todo of todos) items.push({ source, todo });
  };

  push("프로필", PROFILE.todos);
  push("사이트 설정", SITE.todos);
  for (const p of PROJECTS) push(`프로젝트: ${p.title}`, p.todos);
  for (const p of PUBLICATIONS) push(`논문: ${p.venue}`, p.todos);
  for (const a of AWARDS) push(`수상: ${a.title}`, a.todos);
  for (const a of ACTIVITIES) push(`활동: ${a.title}`, a.todos);
  for (const c of CERTIFICATIONS) push(`자격증: ${c.name}`, c.todos);

  return items;
}
