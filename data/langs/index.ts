import type { LangContent } from "./_schema";
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
export const LANGS: Record<string, LangContent> = { de, nl, fr, it, es, ko, zh, "zh-tw": zhTw };
export const LANG_CODES = Object.keys(LANGS);
export type { LangContent };
