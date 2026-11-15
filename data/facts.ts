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
  /* ── 入国後の実用ページ（2026-10-12 公式で裏取り。ファクト＝~/projects/au-entry-facts-2026-10-12.md） ── */
  /** 到着SmartGate: 7歳以上・身長1.1m以上・16歳未満は保護者同伴（ABF） */
  smartgateMinAge: 7,
  smartgateMinHeight: "1.1 m",
  smartgateAccompanyUnder: 16,
  /** 到着SmartGate画面の言語数（英語以外） */
  smartgateArrivalLanguages: 22,
  /** 国際線の機内持込液体物（Home Affairs TravelSECURE） */
  lagsContainer: "100 mL",
  lagsBagPerimeterCm: 80,
  powderLimit: "350 mL / 350 g",
  /** 現金等の申告基準（AUSTRAC）。上限ではなく申告義務の基準額 */
  cashReportThreshold: "AUD 10,000",
  /** GST（ATO）。表示価格に含まれる */
  gstPercent: 10,
  /** カード手数料（サーチャージ）上乗せ禁止の開始日（RBA/ACCC） */
  surchargeBanFrom: "1 October 2026",
  /** Tourist Refund Scheme（ABF） */
  trsMinSpend: "AUD 300",
  trsDays: 60,
  trsCutoffMinutes: 30,
  trsArriveMinutes: 90,
  /** 電源（Tourism Australia） */
  voltage: "230 V",
  frequency: "50 Hz",
  /** 運転: 州ごとに違う。期間を明記している州だけ（NSW・VIC=6か月、NT=3か月） */
  driveNswMonths: 6,
  driveNtMonths: 3,
  /** 相互医療協定（Services Australia）の締結国数。独仏西・韓中台は対象外 */
  rhcaCountries: 11,
  /** 薬の持込（TGA traveller's exemption）: 自分または同行の家族用・3か月分まで */
  medicineSupplyMonths: 3,
  /** ベイプの持込（TGA traveller's exemption） */
  vapeDevices: 2,
  vapeAccessories: 20,
  vapeLiquid: "200 mL",
  /** 飲酒・たばこ販売の年齢（health.gov.au）、酒気帯びの基準（BAC） */
  legalAge: 18,
  bacLimit: "0.05",
  /** 緊急・非緊急の番号（infrastructure.gov.au / Triple Zero） */
  emergency: "000",
  emergencyMobile: "112",
  policeAssistance: "131 444",
  ses: "132 500",
  /* ── 2026-11-15 追加ページ（対象旅券・乗継・アプリ・公式サイト・空港・公共交通）。
        ファクト＝~/projects/eta-expansion-20261115/facts-au.md（出典URL・確認日つき） ── */
  /** ETA（601）の対象旅券の数（Home Affairs の一覧を 2026-11-15 に数えた値） */
  etaEligibleCountries: 34,
  /** eVisitor・ETA の両方の一覧に載っている旅券の数（2つの公式一覧を突き合わせた値） */
  bothListsCountries: 24,
  /** ビザなし乗継（TWOV）: 到着から8時間以内に第三国行きの便に乗ること */
  twovHours: 8,
  /** Transit visa（subclass 771）: 72時間以内の乗継・無料 */
  transitVisaHours: 72,
  /** シドニー空港駅の駅利用料（国内線駅⇔国際線駅の区間・運賃とは別）と、空港駅でのOpalチャージ最低額（TfNSW） */
  sydneyStationFeeDomIntl: "$5.20",
  opalAirportMinTopUp: "$35",
  /** 南東クイーンズランド（Translink）の均一運賃と、タッチ忘れの既定運賃 */
  seqFlatFare: "50 cent",
  seqDefaultFare: "$2.50",
  /** WSI Link（St Marys駅⇔WSI空港の無料バス）の運行間隔（TfNSW） */
  wsiLinkEveryMinutes: 30,
  updated: "2026-08-17",
  updatedLabel: "17 August 2026",
  /** 申請先。公式以外に窓口は無いので、CTAは全部ここを指す */
  officialUrl:
    "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651",
} as const;

/** canonical・OG・sitemap で使う本番URL（2026-08-17 okina取得）。 */
export const SITE = "https://evisitor-online.com";

/** og:image（全ページ共通・ヒーロー画像 1920×901）。公開前チェックで全ページに必須 */
export const OG_IMAGES = [{ url: `${SITE}/images/hero-au.jpg`, width: 1920, height: 901 }];
