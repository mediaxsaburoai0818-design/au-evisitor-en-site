import type { LangContent, PracticalPack } from "./_schema";
import { dePractical } from "./de-practical";
import { nlPractical } from "./nl-practical";
import { frPractical } from "./fr-practical";
import { itPractical } from "./it-practical";
import { esPractical } from "./es-practical";
import { koPractical } from "./ko-practical";
import { zhPractical } from "./zh-practical";
import { zhTwPractical } from "./zh-tw-practical";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { nl } from "./nl";
import { ko } from "./ko";
import { zh } from "./zh";
import { zhTw } from "./zh-tw";

/**
 * 言語ディレクトリの登録簿。
 * ⚠️ 英語はルート（/）で配信しているのでここには入れない。
 *    hreflang では en = SITE のルートを指す。
 * ⚠️ 対象／対象外で主張が真逆になる。ここを取り違えると読者を誤った申請に誘導する。
 *    対象（欧州36か国・無料のeVisitor）… de / nl / fr / it / es
 *    対象外（有料のETA 601が必要）……… ko / zh / zh-tw
 *    ⚠️ es はスペイン国籍向け。中南米のスペイン語圏はeVisitorの対象外なので、
 *       比較表と記事で subclass 600 へ誘導している（文面を削らないこと）。
 */
/** 入国後の実用ページ（ETA横展開バッチ3・2026-10-12）を各言語の articles の末尾に合流させる */
function withPractical(t: LangContent, pack: PracticalPack): LangContent {
  return { ...t, articles: [...t.articles, ...pack.articles], practicalUi: pack.ui };
}

export const LANGS: Record<string, LangContent> = {
  de: withPractical(de, dePractical),
  nl: withPractical(nl, nlPractical),
  fr: withPractical(fr, frPractical),
  it: withPractical(it, itPractical),
  es: withPractical(es, esPractical),
  ko: withPractical(ko, koPractical),
  zh: withPractical(zh, zhPractical),
  "zh-tw": withPractical(zhTw, zhTwPractical),
};
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
