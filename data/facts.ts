/**
 * eVisitor（subclass 651・オーストラリア）の事実。ページ側に数値を直書きしない。
 *
 * ⚠️ 数値は必ず一次情報で裏を取ってから変える（immi.homeaffairs.gov.au）。
 * ⚠️ NZeTAと決定的に違う点が2つある。書き分けを崩さないこと。
 *    ①eVisitorは「渡航認証」ではなく**ビザ（subclass 651）**そのもの
 *    ②**申請料が無料**（サービス料も無い）。有料なのは対象外の人が使う
 *      ETA（subclass 601・AUD $20・アプリ専用）や Visitor visa（subclass 600）
 *    → 「無料」と「有料の別ビザ」を混ぜると、対象外の読者に誤った期待を持たせる。
 */
export const FACTS = {
  /** 申請料。無料であることが最大の要点 */
  fee: "AUD $0",
  feeLabel: "Free of charge",
  /** 対象外の人が使う代替ビザ（比較表で使う） */
  etaFee: "AUD $20",
  eligibleCountries: 36,
  validMonths: 12,
  stayMonths: 3,
  studyMonths: 3,
  decisionTypical: "minutes to a few days",

  /* ── 入国・滞在の実務（2026-09-08 公式で裏取り。出典は各ページに明記する） ──
     ⚠️ 罰則と免税枠は間違えると読者に実害が出る。必ず一次情報を確認してから変えること。 */

  /** 生物検疫（DAFF）: 申告漏れの反則金は「ペナルティユニット」で定義される。
   *  ⚠️ 1ユニットの金額は法改正で改定されるため、**豪ドル額を断定しない**。
   *     DAFFのページは12ユニット=$2,664（2021年基準）と記載、
   *     2023年の改定を伝える大臣リリースは12ユニット=$3,300としている。
   *     → 両方を出典付きで併記し、最新額は公式で確認するよう促す。 */
  biosecurityPenaltyUnits: 12,
  biosecurityFineDaff: "A$2,664",
  biosecurityFineIndexed: "A$3,300",
  /** ビザ取消の可能性と、その後の再申請禁止期間 */
  visaCancelExclusionYears: 3,

  /** 税関（ABF）の免税枠。18歳以上 */
  customsGoodsAllowance: "A$900",
  customsGoodsAllowanceMinor: "A$450",
  customsAlcoholLitres: 2.25,
  customsTobaccoGrams: 25,
  customsAgeMin: 18,
  updated: "2026-08-17",
  updatedLabel: "17 August 2026",
  /** 申請先。公式以外に窓口は無いので、CTAは全部ここを指す */
  officialUrl:
    "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
} as const;

/** canonical・OG・sitemap で使う本番URL（2026-08-17 okina取得）。 */
export const SITE = "https://evisitor-online.com";
