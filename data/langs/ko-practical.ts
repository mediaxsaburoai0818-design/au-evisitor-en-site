import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 韓国語（/ko/）の入国後実用ページ（英語 data/pages-practical.ts の韓国語版・2026-10-12）。
 * ⚠️ 読者＝韓国旅券保持者。使うのは eVisitor ではなく ETA（subclass 601）。
 * ⚠️ 韓国は相互医療協定（RHCA）の対象外 → 医療ページは冒頭でそれを書く。
 * ⚠️ 数値は F 経由。事実は英語版と同一にする。
 */
const CHECKED = "2026년 10월 12일";
/** 2026-11-15 追加ページ（major-airports / public-transport）の確認日（英語 15 November 2026） */
const CHECKED_NOV = "2026년 11월 15일";
/** = F.seqFlatFare（"50 cent"）の韓国語表記 */
const SEQ_FLAT_FARE = "50센트";

export const koPractical: PracticalPack = {
  ui: { faq: "자주 묻는 질문", source: "출처", related: "관련 안내" },
  articles: [
    {
      slug: "arriving-in-australia",
      enSlug: "arriving-in-australia",
      title: "호주 도착 후 실용 가이드 — ETA 소지자를 위한 안내",
      description: "ETA 다음 단계: SmartGate·현금·세금 환급·의료·운전·긴급 상황을 공식 정보로 정리했습니다.",
      related: ["smartgate-australia", "money-and-tipping", "healthcare-for-visitors"],
      blocks: [
        {
          p: `ETA(subclass 601)가 해결해 주는 것은 한 가지입니다. 호주로 여행해 한 번에 최대 ${F.stayMonths}개월까지 머물 수 있는지 여부입니다. 공항에서 무슨 일이 있는지, 무엇을 가져갈 수 있는지, 어떻게 결제하는지, 문제가 생기면 어떻게 해야 하는지는 알려 주지 않습니다. 이 페이지들이 그 부분을 다룹니다. 각 페이지는 담당 호주 정부 기관의 정보로 확인했으며, 해당 기관 페이지로 연결됩니다.`,
        },
        { h2: "입국할 때" },
        { links: ["major-airports", "smartgate-australia", "border-questions", "biosecurity", "customs-allowances", "bringing-medicines", "australia-transit"] },
        { h2: "돈" },
        { links: ["money-and-tipping", "tourist-refund-scheme"] },
        { h2: "이동과 통신" },
        { links: ["public-transport", "driving-in-australia", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
        { h2: "건강과 안전" },
        { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
        { h2: "돌아오는 비행기" },
        { links: ["airport-security-liquids", "three-months-per-visit", "leaving-and-returning"] },
        {
          note: "호주에는 전국 공통 대중교통 제도가 없으며, 도시마다 교통카드와 요금 규칙이 다릅니다. 대중교통 페이지에서는 시드니, 퀸즐랜드 남동부, 퍼스를 다룹니다. 멜버른, 애들레이드 등 다른 도시는 방문하는 도시의 교통 당국 안내를 확인하십시오.",
        },
      ],
      faq: [
        {
          q: "ETA가 있으면 입국 후의 규칙은 신경 쓰지 않아도 되나요?",
          a: `아닙니다. ETA는 호주로 여행해 한 번에 최대 ${F.stayMonths}개월까지 머물 수 있는지를 정할 뿐입니다. 입국 심사, 반입 물품, 결제, 의료, 운전 등은 각각의 규칙을 따릅니다.`,
        },
        {
          q: "대중교통 이용 방법은 어디서 확인하나요?",
          a: "전국 공통 제도가 없으므로 방문하는 도시의 교통 당국에서 확인하십시오. 시드니는 Opal, 멜버른은 myki, 퀸즐랜드 남동부는 go card를 사용합니다.",
        },
      ],
      checked: CHECKED,
      practical: false,
    },
    {
      slug: "smartgate-australia",
      enSlug: "smartgate-australia",
      title: `호주 SmartGate: 이용 조건(${F.smartgateMinAge}세 이상)과 그래도 필요한 것`,
      description: `도착 SmartGate는 ${F.smartgateMinAge}세 이상, 모든 유효한 여권으로 시범 운영 중입니다. 종이 입국카드는 여전히 필요합니다.`,
      related: ["arriving-in-australia", "bringing-medicines", "airport-security-liquids"],
      blocks: [
        {
          p: "SmartGate는 호주국경군(Australian Border Force, ABF)이 호주의 주요 국제공항에서 운영하는 자동 출입국 심사대입니다. 도착 시 게이트가 여권을 읽고 얼굴 사진을 찍어 여권과 대조합니다. 대조에 성공하면 티켓이 출력되고 그대로 통과합니다.",
        },
        { h2: "도착 SmartGate를 이용할 수 있는 사람" },
        {
          ul: [
            "유효한 여권으로 여행하는 사람",
            `키가 ${F.smartgateMinHeight} 이상인 사람`,
            `만 ${F.smartgateMinAge}세 이상인 사람`,
            `${F.smartgateAccompanyUnder}세 미만은 부모 또는 법정 보호자와 동행해야 합니다`,
          ],
        },
        {
          p: "얼마 전까지는 전자여권(표지에 칩 마크가 있는 여권)이 필요했습니다. 현재 ABF는 모든 여권을 대상으로 도착 SmartGate를 시범 운영하고 있어, 칩이 없는 여권도 이용할 수 있을 수 있습니다. ABF는 국적 목록을 공개하지 않습니다. 위 조건은 여권과 여행자에 관한 것이지, 여권을 발급한 나라에 관한 것이 아닙니다.",
        },
        {
          note: "ETA와 SmartGate는 별개입니다. ETA는 탑승과 입국을 허용하는 비자이고, SmartGate는 여권을 확인하는 방법일 뿐입니다. 게이트를 이용한다고 비자 조건이 바뀌지는 않습니다.",
        },
        { h2: "입국카드(Incoming Passenger Card)는 여전히 필요합니다" },
        {
          p: "대부분의 승객은 종이 입국카드(Incoming Passenger Card, IPC)를 작성해야 합니다. 기내나 터미널에서 나누어 주며, 반드시 영어로 작성해야 합니다. ABF는 한국어·독일어·프랑스어·네덜란드어·이탈리아어·스페인어·중국어 등으로 번역된 견본 카드를 공개하고 있어 질문 내용을 이해하는 데 도움이 되지만, 제출하는 카드는 영어로 답해야 합니다.",
        },
        {
          p: "출구에서 SmartGate 티켓과 입국카드를 국경군 또는 검역 담당관에게 제출합니다. 디지털 방식인 Australia Travel Declaration은 ABF에 따르면(2026년 11월 15일 기준) 웹 양식이 웨스턴 시드니 국제공항에 도착하는 항공편에만 제공되며, 다른 호주 공항에 도착하는 경우에는 작성하지 말아야 합니다. 도착 공항에 대해서는 ABF 페이지를 확인하세요.",
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "화면 언어" },
        {
          p: `도착 SmartGate 화면은 영어이며, 그 외에 한국어·독일어·네덜란드어·프랑스어·이탈리아어·스페인어·중국어 간체와 번체 등 ${F.smartgateArrivalLanguages}개 언어를 선택할 수 있습니다. 출국 SmartGate 화면은 영어·일본어·한국어·중국어(보통화)입니다.`,
        },
        { h2: "호주를 떠날 때" },
        {
          p: "기계 판독이 가능한 유효한 여권을 가진 여행자는 누구나 출국 SmartGate를 이용할 수 있습니다. 다만 아기나 어린아이처럼 안내를 따르는 데 도움이 필요한 사람과 함께 여행하는 경우에는 이용할 수 없습니다.",
        },
        { source: { label: "호주국경군(Australian Border Force) — 도착 SmartGate 이용 대상", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "호주국경군(Australian Border Force) — 출국 SmartGate", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "호주국경군(Australian Border Force) — 입국카드(Incoming Passenger Card)", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "한국 여권으로 SmartGate를 이용할 수 있나요?",
          a: `ABF는 국적 목록을 공개하지 않습니다. 도착 SmartGate는 유효한 여권을 가진 만 ${F.smartgateMinAge}세 이상, 키 ${F.smartgateMinHeight} 이상의 여행자가 이용할 수 있으며, ABF는 모든 여권을 대상으로 시범 운영하고 있습니다.`,
        },
        {
          q: "SmartGate를 이용해도 입국카드가 필요한가요?",
          a: "네. 출구에서 SmartGate 티켓과 작성한 입국카드(Incoming Passenger Card)를 함께 제출합니다. 카드는 영어로 작성해야 합니다.",
        },
        {
          q: "5살 아이도 SmartGate를 이용할 수 있나요?",
          a: `아니요. 도착 SmartGate는 만 ${F.smartgateMinAge}세 이상이어야 합니다. 더 어린 자녀와 함께하는 가족은 심사관이 직접 심사합니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "airport-security-liquids",
      enSlug: "airport-security-liquids",
      title: `호주발 항공편의 액체류: ${F.lagsContainer} 규칙과 분말 제한`,
      description: `호주발 국제선 기내 액체류는 ${F.lagsContainer} 이하 용기에 담아 투명 봉투 하나에. 무기질 분말도 제한됩니다.`,
      related: ["tourist-refund-scheme", "bringing-medicines", "arriving-in-australia"],
      blocks: [
        {
          p: "호주는 국제선 기내 반입 수하물의 액체·에어로졸·젤과 일부 분말을 제한합니다. 위탁 수하물과 대부분의 국내선에는 이 제한이 적용되지 않습니다.",
        },
        { h2: "제한이 적용되는 경우" },
        {
          ul: [
            "국제선으로 호주를 출국할 때",
            "호주를 경유해 다른 나라로 환승할 때",
            "호주의 국제선 터미널에서 출발하는 항공편의 국내 구간",
            "호주행 항공편이 호주 도착 전 마지막으로 경유하는 곳에서 탑승할 때",
          ],
        },
        { h2: "액체·에어로졸·젤" },
        {
          ul: [
            `용기 하나당 ${F.lagsContainer}(또는 100 g) 이하여야 합니다. 내용물이 일부만 들어 있어도 더 큰 용기는 안 됩니다`,
            `모든 용기는 네 변의 합이 ${F.lagsBagPerimeterCm} cm 이하(예: 20 × 20 cm)인 투명하고 다시 밀봉할 수 있는 비닐봉투 하나에 들어가야 합니다`,
            "승객 1인당 봉투 하나입니다. 어린이 등 동반하는 사람의 봉투는 대신 들 수 있습니다",
            "에어로졸에는 뚜껑이나 잠금장치가 있어야 합니다",
          ],
        },
        {
          p: "스프레드류와 부드러운 식품도 액체·젤로 취급합니다. 공식 목록에는 베지마이트, 땅콩버터, 꿀, 요구르트가 들어 있습니다. 보안 검색대에서 자주 걸리는 기념품입니다.",
        },
        { h2: "분말" },
        {
          p: `소금, 소금 스크럽, 모래, 일부 탤컴파우더 같은 무기질 분말은 ${F.powderLimit} 이하 용기에 담아야 하며, 1인당 합계도 ${F.powderLimit}를 넘으면 안 됩니다. 분유, 커피, 단백질 파우더, 밀가루, 향신료, 설탕 같은 유기질 분말은 제한이 없습니다. 검색대에서 분말을 따로 꺼내 보여 달라는 요청을 받을 수 있습니다.`,
        },
        { h2: "예외" },
        {
          ul: [
            "적정량의 유아용품",
            "비행 중 필요한 처방약과 일반의약품 — 의사 소견서 등 증빙을 요구받을 수 있습니다",
            "의료기기와 의료 장비",
          ],
        },
        { h2: "면세품" },
        {
          p: "공항에서 산 면세 액체류는 포장된 상태 그대로의 밀봉된 훼손 방지 봉투에 구매 증빙과 함께 넣어 두어야 합니다.",
        },
        { source: { label: "호주 내무부(Department of Home Affairs, TravelSECURE) — 반입 가능·불가 물품", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "호주 국내선에도 액체류 제한이 있나요?",
          a: "대부분의 국내선에는 없습니다. 다만 국제선 터미널에서 출발하는 항공편의 국내 구간에는 적용됩니다.",
        },
        {
          q: "베지마이트 병을 기내에 가져갈 수 있나요?",
          a: `${F.lagsContainer} 이하 용기에 담아 액체류 봉투에 넣는 경우에만 가능합니다. 더 큰 병은 위탁 수하물로 보내십시오.`,
        },
        {
          q: "분유도 제한되나요?",
          a: "분말 분유는 유기질 분말이므로 제한이 없습니다. 적정량의 유아용품은 액체류 제한에서도 예외입니다.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "money-and-tipping",
      enSlug: "money-and-tipping",
      title: "호주의 돈: 현금, 카드 수수료, GST, 팁",
      description: `가격은 GST ${F.gstPercent}% 포함, 카드 수수료는 2026년 10월 1일부터 금지, 팁은 선택. ${F.cashReportThreshold} 이상 현금은 신고.`,
      related: ["tourist-refund-scheme", "phones-and-sim-cards", "public-holidays"],
      blocks: [
        {
          p: "호주의 통화는 호주 달러(AUD)입니다. 결제하기 전에 알아 두면 좋은 규칙이 몇 가지 있으며, 그중 하나는 아주 최근에 바뀌었습니다.",
        },
        { h2: "표시 가격에 세금이 포함되어 있습니다" },
        {
          p: `상품·서비스세(GST)는 ${F.gstPercent}%이며, 사업자는 이를 포함한 총액을 표시해야 합니다. 보이는 가격이 계산대에서 내는 금액입니다.`,
        },
        { h2: "카드 수수료 부과가 사라졌습니다" },
        {
          p: `2026년 10월 1일부터 사업자는 Visa, Mastercard, American Express, eftpos 카드(신용·체크·선불)로 결제할 때 수수료(surcharge)를 더 받을 수 없습니다. 그 전에는 많은 카페와 택시가 카드 결제에 일정 비율을 더 받았습니다. 지금 카드 수수료가 청구된다면 문제를 제기해 볼 만합니다.`,
        },
        {
          note: "주말·공휴일 할증은 별개이며 여전히 허용됩니다. 일부 카페와 레스토랑은 일요일과 공휴일에 할증을 붙입니다. 또한 한국의 카드사나 은행이 해외 결제 수수료를 받을 수 있는데, 이는 이용자와 카드사·은행 사이의 문제입니다.",
        },
        { h2: "팁" },
        {
          p: "호주 관광청(Tourism Australia)은 팁을 선택 사항이며 대부분의 장소에서 기대하지 않는다고 설명합니다. 고급 레스토랑에서는 좋은 서비스에 10% 정도를 주는 경우가 흔합니다. 카페나 택시에서 팁을 주지 않아도 실례가 되지 않습니다.",
        },
        { h2: `${F.cashReportThreshold} 이상의 현금은 신고해야 합니다` },
        {
          p: `호주로 가져오거나 가지고 나갈 수 있는 금액에 상한은 없습니다. 다만 현금과 여행자수표·수표·우편환 같은 증서를 통화와 관계없이 합계 ${F.cashReportThreshold} 이상 소지한 경우, 입국할 때와 출국할 때 신고해야 합니다.`,
        },
        {
          ul: [
            "세관을 통과하기 전에 AUSTRAC 온라인 양식으로 신고하고 접수증을 보관합니다",
            "온라인 양식을 사용할 수 없으면 국경군이나 경찰관에게 종이 양식을 받을 수 있습니다",
            "입국카드(Incoming Passenger Card)의 5번 질문도 같은 내용을 묻습니다",
            "신고는 무료입니다. 기준액 미만으로 맞추기 위해 일행끼리 현금을 나눠 갖는 것은 불법입니다",
          ],
        },
        { source: { label: "AUSTRAC(호주 거래보고분석센터) — 국경을 넘는 자금 이동", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC(호주 경쟁소비자위원회) — 카드 수수료", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "호주 관광청(Tourism Australia) — 호주 기본 정보", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `${F.cashReportThreshold}보다 많은 돈을 가지고 들어가면 불법인가요?`,
          a: `아닙니다. 상한은 없습니다. 현금과 이에 준하는 증서가 합계 ${F.cashReportThreshold} 이상이면 신고해야 한다는 것뿐입니다.`,
        },
        {
          q: "가게에서 아직도 카드 결제 수수료를 받을 수 있나요?",
          a: `2026년 10월 1일부터 Visa, Mastercard, American Express, eftpos 카드에는 받을 수 없습니다. 주말·공휴일 할증은 별개로 여전히 허용됩니다.`,
        },
        {
          q: "호주에서 팁을 줘야 하나요?",
          a: "선택 사항입니다. 고급 레스토랑에서는 10% 정도가 흔하지만, 그 외의 곳에서는 기대하지 않습니다.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "tourist-refund-scheme",
      enSlug: "tourist-refund-scheme",
      title: `Tourist Refund Scheme(TRS): 출국할 때 GST 돌려받기(${F.trsMinSpend} 이상)`,
      description: `출국 전 ${F.trsDays}일 이내 한 사업자에게서 ${F.trsMinSpend} 이상 구매, 물품 휴대, 출발 ${F.trsCutoffMinutes}분 전까지 공항에서 신청.`,
      related: ["money-and-tipping", "airport-security-liquids", "arriving-in-australia"],
      blocks: [
        {
          p: "여행자는 호주에서 사서 출국할 때 가지고 나가는 물품에 대해 GST와 와인에 붙는 와인균등세(WET)를 돌려받을 수 있습니다. 이 제도(Tourist Refund Scheme, TRS)는 호주국경군이 출국 당일 공항에서 운영합니다.",
        },
        { h2: "조건" },
        {
          ul: [
            `한 사업자(하나의 ABN)에게서 ${F.trsMinSpend} 이상(GST 포함)을 구매했을 것. 같은 사업자의 영수증 여러 장을 합쳐도 됩니다`,
            `호주를 떠나기 전 ${F.trsDays}일 이내에 구매했을 것`,
            "세금계산서(tax invoice) 원본이 있을 것. AUD 1,000 이상의 계산서에는 본인 이름이 적혀 있어야 합니다",
            "출국할 때 물품을 직접 가지고 나갈 것. 우편이나 화물로 보낸 물품은 안 됩니다",
          ],
        },
        { h2: "공항에서 신청하기" },
        {
          p: `출국 당일, 예정 출발 시각 최소 ${F.trsCutoffMinutes}분 전까지 TRS 창구에서 여권, 탑승권, 물품, 계산서 원본을 보여 줍니다. 혼잡한 시간대에는 줄이 그만큼 길 수 있으므로, ABF는 출발 ${F.trsArriveMinutes}분 전에 도착하라고 권합니다.`,
        },
        {
          ul: [
            "온라인, 출국일 이전, 국내선 공항에서는 신청할 수 없습니다",
            "현금으로는 환급되지 않습니다. 신용카드(Amex, Diners, JCB, Mastercard, UnionPay, Visa) 또는 호주 은행 계좌로 보통 60일 이내에 환급됩니다",
            "공식 TRS 앱에 정보와 계산서를 QR 코드로 저장해 두면 줄을 빨리 통과할 수 있습니다. 다만 창구에서 직접 신청하는 절차를 대신하지는 않습니다",
          ],
        },
        { h2: "환급받을 수 없는 것" },
        {
          ul: [
            "서비스 — 숙박, 투어, 택시, 렌터카",
            "호주에서 전부 또는 일부를 소비한 물품 — 음식, 음료, 향수, 건강보조식품 등",
            "알코올 도수 22% 미만 와인을 제외한 주류, 담배",
            "기프트카드와 상품권, 우편이나 화물로 보내는 물품",
          ],
        },
        { source: { label: "호주국경군(Australian Border Force) — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "호주국경군(Australian Border Force) — 환급 신청 방법", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `여러 가게의 영수증을 합쳐서 ${F.trsMinSpend}를 채울 수 있나요?`,
          a: `아니요. ${F.trsMinSpend}는 한 사업자(같은 ABN)에게서 써야 합니다. 다만 그 사업자의 계산서 여러 장으로 나뉘어 있어도 됩니다.`,
        },
        {
          q: "현금으로 환급받을 수 있나요?",
          a: "아니요. 신용카드 또는 호주 은행 계좌로 환급됩니다.",
        },
        {
          q: "언제까지 신청할 수 있나요?",
          a: `예정 출발 시각 최소 ${F.trsCutoffMinutes}분 전까지입니다. ABF는 출발 ${F.trsArriveMinutes}분 전에 TRS 창구에 도착하라고 권합니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "healthcare-for-visitors",
      enSlug: "healthcare-for-visitors",
      title: "호주 방문객의 의료 — 한국은 의료 협정 대상이 아닙니다",
      description: `한국은 호주와 상호 의료 협정이 없어 진료비 전액이 본인 부담입니다. 협정국 ${F.rhcaCountries}개국과의 차이를 정리했습니다.`,
      related: ["bringing-medicines", "emergency-and-safety", "arriving-in-australia"],
      blocks: [
        {
          p: "먼저 결론입니다. 대한민국은 호주와 상호 의료 협정(Reciprocal Health Care Agreement, RHCA)을 맺지 않았습니다. 한국 여권으로 방문하는 경우 병원, 구급차, 의사 진료 비용은 보험에 들지 않았다면 전액 본인이 부담합니다. 그래서 여행자보험이 중요합니다.",
        },
        {
          p: "호주의 공공 의료 제도인 Medicare(메디케어)는 거주자를 위한 것입니다. 방문객은 자기 치료비를 직접 냅니다. 예외는 호주와 RHCA를 맺은 나라의 방문객뿐입니다. 호주 내무부(Department of Home Affairs)는 방문 비자 안내(ETA 페이지 포함)에서 호주에서의 의료비는 전부 본인 책임이라고 분명히 밝히고, 건강보험 가입을 권장합니다.",
        },
        { h2: `협정을 맺은 ${F.rhcaCountries}개국` },
        {
          p: "벨기에, 핀란드, 아일랜드, 이탈리아, 몰타, 네덜란드, 뉴질랜드, 노르웨이, 슬로베니아, 스웨덴, 영국.",
        },
        {
          note: "독일, 프랑스, 스페인, 오스트리아, 스위스, 대한민국, 중국, 대만은 협정이 없습니다. 이들 나라에서 온 방문객은 보험에 가입하지 않았다면 병원, 구급차, 의사 진료 비용을 전액 부담합니다.",
        },
        { h2: "협정이 보장하는 것(협정국 방문객)" },
        {
          ul: [
            "의학적으로 필요한 병원 밖 진료(예: GP 진료)",
            "공립병원에서 공공 환자(public patient)로 받는 의학적으로 필요한 입원·외래 치료",
            "PBS(호주 의약품 급여 제도)에 따른 일부 처방약을 일반 요율로",
          ],
        },
        {
          p: "아일랜드(및 뉴질랜드) 방문객은 공립병원 치료와 PBS 의약품만 보장되며 GP 진료는 보장되지 않습니다. 이들은 Medicare에 등록하지 않고, 병원이나 약국 직원에게 협정에 따라 처리해 달라고 요청해야 합니다.",
        },
        { h2: "협정이 보장하지 않는 것" },
        {
          ul: [
            "공립·사립병원에서 사립 환자(private patient)로 받는 치료",
            "치료를 받을 목적으로 호주에 오는 경우",
            "의학적으로 필요하지 않은 모든 것",
          ],
        },
        { h2: "보장 기간(협정국 방문객)" },
        {
          ul: [
            "이탈리아·몰타: 도착일로부터 최대 6개월, 비자가 그보다 먼저 만료되면 비자 만료까지",
            "영국·아일랜드: 비자 만료까지",
            "네덜란드·벨기에·노르웨이·슬로베니아: 자국 보험, EHIC, 비자 중 가장 먼저 끝나는 날까지",
          ],
        },
        { h2: "Medicare 등록(협정국 방문객)" },
        {
          p: "협정국(아일랜드·뉴질랜드 제외) 방문객은 Medicare에 등록하고 노란색 Medicare 카드를 받습니다. 여권, 비자, 그리고 자국에서의 보장 증명(보통 EHIC, 영국 거주자는 GHIC, 또는 자국 건강보험증)이 필요합니다. 호주에 잠깐 머물고 치료가 필요 없다면 등록할 필요는 없습니다. 등록 전에 받은 치료도 등록 후 보장될 수 있습니다.",
        },
        { source: { label: "Services Australia(호주 서비스청) — 상호 의료 협정", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia(호주 서비스청) — 호주 방문", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "호주 내무부(Department of Home Affairs) — eVisitor(subclass 651) 안내: 건강보험", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "한국은 호주와 의료 협정이 있나요?",
          a: "없습니다. 대한민국은 호주와 상호 의료 협정(RHCA)을 맺지 않았습니다. 한국에서 오는 방문객은 의료비를 보장하는 여행자보험에 가입하는 것이 좋습니다.",
        },
        {
          q: "ETA로 갈 때 여행자보험은 의무인가요?",
          a: "호주 내무부는 가입을 권장하며, 호주에서의 의료비는 전부 본인 책임이라고 밝히고 있습니다. 본인의 비자 조건은 VEVO나 비자 승인 통지에서 확인하십시오.",
        },
        {
          q: "보험 없이 호주에서 병원에 가면 어떻게 되나요?",
          a: "협정국이 아닌 나라(대한민국 포함)의 방문객은 병원, 구급차, 의사 진료 비용을 전액 본인이 부담합니다.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "bringing-medicines",
      enSlug: "bringing-medicines",
      title: `호주에 약 가져가기: ${F.medicineSupplyMonths}개월분 규칙`,
      description: `본인용 최대 ${F.medicineSupplyMonths}개월분, 원래 포장, 처방전이나 의사 소견서 지참, 입국 시 신고. 반입 금지 약도 있습니다.`,
      related: ["healthcare-for-visitors", "airport-security-liquids", "smoking-vaping-and-alcohol"],
      blocks: [
        {
          p: "호주에서는 ‘여행자 예외(traveller's exemption)’에 따라, 조건을 지키면 허가 없이 본인이 쓸 약을 가지고 들어올 수 있습니다. 함께 여행하는 직계 가족의 약도 이 예외에 포함됩니다.",
        },
        { h2: "조건" },
        {
          ul: [
            `${F.medicineSupplyMonths}개월분을 넘지 않을 것`,
            "가능하면 약국 라벨이 붙은 원래 포장 그대로 가져갈 것",
            "처방전 또는 약 이름과 복용량이 적힌 의사 소견서를 지참할 것",
            "입국할 때 모든 약을 호주국경군에 신고할 것",
            "약을 다른 사람에게 주거나 팔지 말고, 남은 약은 출국할 때 가지고 나갈 것",
          ],
        },
        { h2: "강한 진통제, ADHD 약, 수면제" },
        {
          p: "호주 약물관리청(Office of Drug Control)에 따르면 모르핀, 옥시코돈, 메타돈, 메틸페니데이트, 애더럴(Adderall), 벤조디아제핀 계열 같은 처방약도 처방전이나 의사 소견서가 있으면 여행자 예외에 포함됩니다. 코데인이 들어 있는 약은 함량과 관계없이 처방전이나 의사 소견서가 필요합니다.",
        },
        { h2: "가져갈 수 없는 약" },
        {
          ul: [
            "미페프리스톤(RU486) 등 낙태 유도제",
            "요힘베(요힘빈)",
            "아미노페나존, 아미노피린, 디피론(메타미졸)",
            "아미그달린(레트릴)",
          ],
        },
        { h2: "약이 떨어졌을 때" },
        {
          p: "호주 의사(GP)에게 진료를 받고 호주 처방전을 받으십시오. 한국에서 약을 우편으로 받는 것은 제한됩니다. 전문의약품은 유효한 호주 처방전이 필요하고, 소포는 3개월분을 넘을 수 없으며, 규제 약물과 베이프는 아예 우편으로 보낼 수 없습니다.",
        },
        { source: { label: "TGA(호주 의약품청) — 약을 가지고 호주에 입국하기", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "Office of Drug Control(호주 약물관리청) — 약을 가지고 호주로 여행하기", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA(호주 의약품청) — 개인 수입 제도(Personal Importation Scheme)", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "호주에 약을 얼마나 가져갈 수 있나요?",
          a: `본인 또는 함께 여행하는 직계 가족이 쓸 약을 최대 ${F.medicineSupplyMonths}개월분까지 가져갈 수 있습니다.`,
        },
        {
          q: "ADHD 약을 가져가도 되나요?",
          a: "메틸페니데이트나 애더럴 같은 약은 처방전이나 의사 소견서를 지참하고 신고하면 여행자 예외에 포함됩니다.",
        },
        {
          q: "가족이 한국에서 약을 우편으로 보내 줄 수 있나요?",
          a: "엄격한 조건에서만 가능합니다. 전문의약품은 유효한 호주 처방전이 필요하고, 규제 약물은 우편으로 보낼 수 없습니다.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "smoking-vaping-and-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "호주의 흡연·베이프·음주 — 방문객이 놓치기 쉬운 규칙",
      description: `베이프는 약국에서만 판매, 치료용으로 ${F.vapeDevices}개까지 반입 가능. 음주 가능 나이는 ${F.legalAge}세, 실내 공공장소는 금연입니다.`,
      related: ["driving-in-australia", "bringing-medicines", "emergency-and-safety"],
      blocks: [
        {
          p: "호주는 베이프(전자담배)를 일반 소비재가 아니라 치료용품으로 규제합니다. 편의점에서 전자담배를 사는 데 익숙한 방문객은 특히 놀라는 부분입니다.",
        },
        { h2: "베이프(전자담배)" },
        {
          ul: [
            "베이프는 참여 약국에서만 판매됩니다. 담배 가게, 전자담배 가게, 편의점은 니코틴 유무와 관계없이 어떤 베이프도 팔 수 없습니다",
            `${F.legalAge}세 이상 성인은 주 법이 허용하는 경우 니코틴 20 mg/mL 이하 베이프를 처방전 없이 약국에서 살 수 있습니다. 신분증이 필요하고, 1개월분 한도가 있으며, 맛은 민트·멘톨·담배 맛만 가능합니다`,
            "처방전이 있어도 개인용으로 해외 웹사이트에서 베이프를 주문할 수 없습니다",
            "일부 주에서는 처방전 없이 니코틴 베이프를 소지하는 것 자체를 금지합니다",
          ],
        },
        { h2: "베이프를 가지고 입국할 때" },
        {
          p: `항공편이나 선박으로 입국하는 여행자는 베이프 최대 ${F.vapeDevices}개, 액세서리(카트리지·캡슐·팟) ${F.vapeAccessories}개, 베이프 액상 ${F.vapeLiquid}까지 가져올 수 있습니다. TGA의 표현으로는 여행자 본인, 또는 같은 항공편·선박으로 함께 오는 돌봄 대상자의 치료에 사용하기 위한 것이어야 합니다. 국경군 직원은 불법 수입이 의심되는 물품을 압수할 수 있습니다.`,
        },
        { h2: "흡연" },
        {
          p: `${F.legalAge}세 미만에게 담배를 파는 것은 불법입니다. 모든 주와 준주에서 실내 공공장소는 금연이며, 대중교통, 사무실, 쇼핑센터, 영화관, 공항 등이 포함됩니다. 식당 야외석, 해변, 놀이터 같은 실외 공간의 규칙은 주마다 다릅니다. 면세로 가져올 수 있는 담배의 양에도 제한이 있습니다.`,
        },
        { h2: "음주" },
        {
          ul: [
            `술을 사거나 주류 면허 업소에서 마시려면 ${F.legalAge}세 이상이어야 합니다`,
            "야외 음주가 가능한 장소는 주와 지방 의회가 정하며, 많은 공공장소가 금주 구역입니다",
            `음주운전 기준은 혈중알코올농도 ${F.bacLimit}이며, 연습 면허·임시 면허 운전자는 0입니다`,
          ],
        },
        { source: { label: "TGA(호주 의약품청) — 베이프: 개인을 위한 정보", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "Department of Health(호주 보건부) — 호주의 흡연·담배 관련 법", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "Department of Health(호주 보건부) — 호주의 음주 관련 법", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "호주 편의점에서 전자담배(베이프)를 살 수 있나요?",
          a: "아니요. 베이프는 참여 약국에서만 판매할 수 있습니다. 다른 소매점이 베이프를 파는 것은 불법입니다.",
        },
        {
          q: "베이프를 몇 개까지 가져갈 수 있나요?",
          a: `본인 또는 함께 여행하는 돌봄 대상자의 치료용으로 베이프 최대 ${F.vapeDevices}개, 액세서리 ${F.vapeAccessories}개, 액상 ${F.vapeLiquid}까지입니다.`,
        },
        {
          q: "호주에서 술을 마실 수 있는 나이는?",
          a: `${F.legalAge}세입니다. 술을 사거나 주류 면허 업소에서 마시려면 ${F.legalAge}세 이상이어야 합니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "emergency-and-safety",
      enSlug: "emergency-and-safety",
      title: `호주의 긴급 전화: ${F.emergency}, ${F.emergencyMobile} — 911은 연결되지 않습니다`,
      description: `경찰·소방·구급은 ${F.emergency}, 휴대전화는 ${F.emergencyMobile}도 가능. 911은 연결되지 않습니다. 비긴급 경찰 ${F.policeAssistance}. 통역 지원.`,
      related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-australia"],
      blocks: [
        {
          p: `Triple Zero(${F.emergency})는 생명이 위험하거나 시간이 급한 상황에서 경찰·소방·구급을 부르는 호주의 긴급 전화번호입니다. 유선전화, 휴대전화, 공중전화, 위성전화에서 무료로 걸 수 있습니다.`,
        },
        { h2: "번호" },
        {
          ul: [
            `${F.emergency} — 경찰, 소방, 구급`,
            `${F.emergencyMobile} — 휴대전화에서만 걸 수 있으며 같은 ${F.emergency} 서비스로 연결됩니다. ${F.emergency}보다 우선 연결되지는 않습니다`,
            `${F.policeAssistance} — 경찰 지원 전화(Police Assistance Line), 긴급하지 않은 경찰 업무용`,
            `${F.ses} — 주 긴급구조대(State Emergency Service), 생명이 위험하지 않은 홍수·폭풍·쓰나미 관련 도움`,
            `911로 걸지 마십시오 — 911 통화는 ${F.emergency}으로 전환되지 않습니다`,
          ],
        },
        { h2: "영어를 못하는 경우" },
        {
          p: `${F.emergency}에 전화해 “Police”, “Fire”, “Ambulance” 중 하나를 말하고 전화를 끊지 마십시오. 통역이 연결됩니다.`,
        },
        { h2: "휴대전화와 통신 범위" },
        {
          ul: [
            `내 통신망이 잡히지 않으면 휴대전화가 자동으로 다른 통신망을 이용해 ${F.emergency}에 연결합니다. SIM 카드가 없어도 마찬가지입니다`,
            `어떤 통신망도 잡히지 않는 곳에서는 휴대전화로 ${F.emergency}에 연결할 수 없습니다. 아웃백(내륙 오지)의 넓은 지역이 그렇습니다`,
            `${F.emergency}에는 문자 메시지로 연락할 수 없습니다`,
            "약 5초 안에 연결되지 않으면 끊고 다시 거십시오",
          ],
        },
        {
          note: `호주의 3G 통신망은 종료되었습니다. 3G 휴대전화와 일부 구형 4G 휴대전화, 특히 해외에서 산 휴대전화는 ${F.emergency}에 전화하지 못할 수 있습니다. 규제 기관은 ${F.emergency}에 직접 걸어서 시험하지 말고 통신사에 문의하라고 권합니다.`,
        },
        { source: { label: "Department of Infrastructure(호주 인프라부) — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA(호주 통신미디어청) — 3G 통신망 종료", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "호주에서 911이 되나요?",
          a: `아니요. 911 통화는 전환되지 않습니다. ${F.emergency}, 또는 휴대전화라면 ${F.emergencyMobile}로 거십시오.`,
        },
        {
          q: `호주 SIM 카드가 없어도 ${F.emergency}에 걸 수 있나요?`,
          a: `네, 어느 통신망이든 신호가 잡히면 가능합니다. 활성화된 SIM이 없어도 휴대전화가 이용 가능한 통신망으로 ${F.emergency}에 연결합니다.`,
        },
        {
          q: `${F.emergency}에 문자를 보낼 수 있나요?`,
          a: `아니요. ${F.emergency}에는 SMS로 연락할 수 없습니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "phones-and-sim-cards",
      enSlug: "phones-and-sim-cards",
      title: "호주의 휴대전화와 SIM 카드: 본인 확인과 3G 종료",
      description: "호주 선불 SIM 개통에는 본인 확인이 필요하며 본인 명의 여권으로 가능합니다. 휴대전화가 4G/5G에서 되는지 먼저 확인하세요.",
      related: ["emergency-and-safety", "power-plugs", "money-and-tipping"],
      blocks: [
        {
          p: "한국 요금제의 로밍을 쓰거나 호주 선불 SIM을 살 수 있습니다. 현지 SIM을 산다면 많은 나라와 다른 점이 두 가지 있습니다. 본인 확인과 3G 종료입니다.",
        },
        { h2: "본인 확인" },
        {
          p: "법에 따라 통신사는 선불 휴대전화 서비스를 개통할 때 이름, 생년월일, 주소를 받고 본인 확인을 해야 합니다. 본인 명의로 발급된 여권은 인정되는 서류 중 하나이며, 호주 여권일 필요는 없습니다. 서류는 유효기간이 지나지 않아야 합니다.",
        },
        {
          p: "통신사는 정부 서류 조회, 기존 계정, 카드 거래, 인증된 디지털 ID 서비스 같은 다른 방법으로도 본인 확인을 할 수 있습니다. 매장이나 온라인에서 구체적으로 어떻게 확인하는지는 통신사가 정합니다.",
        },
        { h2: "먼저 휴대전화를 확인하세요" },
        {
          p: "호주의 3G 통신망은 종료되었습니다. 3G 전용 휴대전화는 전혀 사용할 수 없고, 통화에 3G를 쓰는 일부 4G 휴대전화는 음성 통화나 긴급 전화를 걸 수 없습니다. 구형 4G 휴대전화와 해외에서 산 휴대전화가 가장 위험합니다. 통신사는 Triple Zero(000)에 걸 수 없다고 확인된 휴대전화를 개통해서는 안 됩니다.",
        },
        {
          ul: [
            "결제하기 전에 내 기종이 해당 통신사의 4G/5G 망에서 작동하고 VoLTE 통화를 지원하는지 통신사에 확인을 요청하세요",
            "000에 걸어서 긴급 전화를 시험하지 마세요",
          ],
        },
        {
          note: "선불 본인 확인 규칙은 2026년에 규제 기관(ACMA)이 재검토하고 있습니다. 본인 확인이 필요하고 여권이 인정된다는 기본 원칙은 여러 해 동안 적용되어 왔습니다.",
        },
        { source: { label: "ACMA(호주 통신미디어청) — 선불 휴대전화 본인 확인", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "Federal Register of Legislation(호주 연방 법령 등록부) — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA(호주 통신미디어청) — 3G 종료 후 휴대전화의 000 연결 보장", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "한국 여권으로 호주 SIM 카드를 살 수 있나요?",
          a: "네. 본인 명의로 발급된 여권은 선불 서비스 개통에 인정되는 신분 서류입니다. 유효기간이 지나지 않아야 합니다.",
        },
        {
          q: "한국에서 쓰던 휴대전화가 호주에서 되나요?",
          a: "최근 기종은 대부분 되지만 3G 통신망은 종료되었습니다. 구형 4G 휴대전화와 일부 해외 구매 휴대전화는 통화나 000 연결이 안 될 수 있으니 통신사에 기종 확인을 요청하세요.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "power-plugs",
      enSlug: "power-plugs",
      title: `호주의 전원 플러그: Type I 플러그와 ${F.voltage} ${F.frequency}`,
      description: `호주는 역V자 납작 핀 플러그(Type I)와 ${F.voltage}, ${F.frequency}를 씁니다. 한국의 둥근 핀 플러그는 어댑터가 필요합니다.`,
      related: ["phones-and-sim-cards", "money-and-tipping", "arriving-in-australia"],
      blocks: [
        {
          p: "호주의 콘센트에는 납작한 금속 핀 두 개가 역V자 모양을 이루는 플러그가 맞으며, 가운데에 세 번째 핀이 있는 경우도 있습니다. 호주 관광청은 이를 ‘Type 1’ 플러그라고 부르고, 국제적으로는 보통 Type I로 표기합니다. 한국·유럽·중국의 둥근 핀 플러그는 어댑터 없이는 맞지 않습니다.",
        },
        { h2: "전압" },
        {
          p: `전원은 ${F.voltage}, ${F.frequency}입니다(호주 관광청은 220–240 V 범위로도 안내합니다). 대부분의 휴대전화·노트북 충전기는 100–240 V 겸용이라 플러그 어댑터만 있으면 됩니다. 라벨을 확인하세요. 230 V가 범위에 들어 있지 않다면 어댑터가 아니라 변압기가 필요합니다.`,
        },
        { h2: "챙겨 갈 것" },
        {
          ul: [
            "Type I 플러그 어댑터 또는 멀티 어댑터",
            "230 V를 지원하지 않는 기기에 한해 변압기",
          ],
        },
        { source: { label: "호주 관광청(Tourism Australia) — 호주 여행에 유용한 팁", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "호주 관광청(Tourism Australia) — 호주 여행 짐 싸기 목록", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "호주에 가려면 어댑터가 필요한가요?",
          a: "플러그가 납작한 핀 두 개가 역V자인 호주형이 아니라면 필요합니다. 한국·유럽·중국의 둥근 핀 플러그는 어댑터가 필요합니다.",
        },
        {
          q: "변압기가 필요한가요?",
          a: `${F.voltage}를 지원하지 않는 기기에만 필요합니다. 100–240 V로 표시된 충전기는 어댑터만 있으면 됩니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "public-holidays",
      enSlug: "public-holidays",
      title: "호주의 공휴일 2026–2027: 주별 날짜",
      description: "공휴일은 주와 준주마다 따로 정합니다. 전국 공통 날짜와 주마다 다른 날짜, 여행에 미치는 영향을 정리했습니다.",
      related: ["money-and-tipping", "driving-in-australia", "arriving-in-australia"],
      blocks: [
        {
          p: "전국 단일 공휴일 목록은 없습니다. 각 주와 준주가 자체적으로 공휴일을 정하고, 공휴일이 주말과 겹칠 때 대체 휴일을 둘지도 각자 결정합니다. 아래 날짜는 연방 노동 규제 기관인 공정근로옴부즈맨(Fair Work Ombudsman)의 자료입니다.",
        },
        { h2: "2026년 남은 공휴일" },
        {
          ul: [
            "12월 25일(금) — 크리스마스(전국)",
            "12월 26일(토) — 박싱데이(남호주는 Proclamation Day 공휴일)",
            "12월 28일(월) — 대부분의 주와 준주에서 박싱데이 추가 공휴일. 태즈메이니아는 이 월요일이 박싱데이 자체입니다",
          ],
        },
        { h2: "2027년: 전국 공통 날짜" },
        {
          ul: [
            "1월 1일(금) — 새해 첫날",
            "1월 26일(화) — 오스트레일리아 데이",
            "3월 26일(금) — 성금요일(Good Friday)",
            "3월 29일(월) — 부활절 월요일(Easter Monday)",
            "12월 25일(토) — 크리스마스, 12월 27일(월) 추가 공휴일",
          ],
        },
        { h2: "2027년: 주마다 다른 날짜" },
        {
          ul: [
            "부활절 토요일(3월 27일)과 부활절 일요일(3월 28일)은 태즈메이니아 목록에 없고, 서호주는 부활절 토요일이 목록에 없습니다",
            "안작 데이(Anzac Day)는 4월 25일 일요일입니다. 뉴사우스웨일스와 서호주는 4월 26일 월요일을 추가하고, ACT·북부 준주·퀸즐랜드는 4월 26일 월요일에 쉽니다. 남호주·태즈메이니아·빅토리아는 일요일만입니다",
            "국왕 탄신일(King's Birthday)은 대부분의 주에서 6월 14일 월요일이지만, 서호주는 9월 27일 월요일, 퀸즐랜드는 10월 4일 월요일입니다",
            "노동절(Labour Day)은 3월(서호주·빅토리아·태즈메이니아)부터 5월(퀸즐랜드·북부 준주), 10월(뉴사우스웨일스·ACT·남호주)까지 다양합니다",
            "박싱데이는 12월 26일 일요일이며, 대부분 지역에서 12월 28일 화요일이 추가 공휴일입니다. 태즈메이니아는 12월 28일 화요일이 박싱데이입니다",
          ],
        },
        {
          note: "2027년 날짜는 공정근로옴부즈맨이 미리 공개한 것입니다. 빅토리아의 AFL 그랜드 파이널 전날 금요일은 아직 정해지지 않았습니다. 일부 지역·도시 한정 공휴일(예: 쇼 데이)은 여기에 싣지 않았습니다.",
        },
        { h2: "여행자에게 미치는 영향" },
        {
          p: "은행과 관공서는 문을 닫습니다. 도시에서는 많은 상점, 카페, 레스토랑이 영업하지만 공휴일 할증이 붙기도 합니다. 대중교통은 보통 단축 시간표로 운행합니다. 연휴와 12월~1월 여름 방학 기간은 국내 여행 성수기이므로 숙소와 렌터카를 일찍 예약하세요.",
        },
        { source: { label: "Fair Work Ombudsman(공정근로옴부즈맨) — 2026년 공휴일", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "Fair Work Ombudsman(공정근로옴부즈맨) — 2027년 공휴일", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "국왕 탄신일(King's Birthday)은 호주 전역에서 같은 날인가요?",
          a: "아니요. 대부분의 주는 6월 둘째 월요일이지만, 서호주는 9월 말, 퀸즐랜드는 10월 초입니다.",
        },
        {
          q: "박싱데이는 모든 지역에서 공휴일인가요?",
          a: "네. 다만 남호주는 Proclamation Day 공휴일이라고 부르며, 주말과 겹칠 때의 대체 휴일은 주마다 다릅니다.",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "driving-in-australia",
      enSlug: "driving-in-australia",
      title: "해외 면허로 호주에서 운전하기 — 주마다 규칙이 다릅니다",
      description: `규칙은 주마다 다릅니다. NSW는 해외 면허로 최대 ${F.driveNswMonths}개월, NT는 ${F.driveNtMonths}개월. 영어가 아닌 면허는 번역본이나 IDP 필요.`,
      related: ["public-holidays", "emergency-and-safety", "smoking-vaping-and-alcohol"],
      blocks: [
        {
          p: "호주는 좌측통행입니다. 회전교차로는 시계 방향으로 돌고, 오른쪽에서 오는 차에 양보합니다. 제한 속도는 km/h 단위로, 표지가 없으면 시가지에서 50 km/h, 그 밖의 도로는 보통 100 km/h, 일부 고속도로는 최대 110 km/h입니다.",
        },
        { h2: "면허는 주 소관입니다" },
        {
          p: "방문객에 대한 전국 단일 규칙은 없습니다. 방문객이 해외 면허로 얼마나 운전할 수 있는지, 무엇을 함께 지녀야 하는지는 각 주와 준주가 정합니다. 운전할 모든 주의 규칙을 확인하세요. 로드트립은 여러 주를 지날 수 있습니다.",
        },
        {
          ul: [
            `뉴사우스웨일스(NSW): 관광객과 단기 방문자는 유효한 해외 면허로 최대 ${F.driveNswMonths}개월 운전할 수 있습니다`,
            `빅토리아: 처음 도착한 때부터 계산해 빅토리아에서 거주·운전하는 기간이 ${F.driveNswMonths}개월 미만이면 가능합니다`,
            `북부 준주(NT): 방문객과 신규 거주자는 최대 ${F.driveNtMonths}개월`,
            "퀸즐랜드, 서호주, 남호주, 태즈메이니아, ACT: 방문객은 유효한 해외 면허로 운전할 수 있으며, 공식 페이지에 방문객의 고정 기한은 명시되어 있지 않습니다",
          ],
        },
        {
          note: "퀸즐랜드, NSW, 서호주, ACT에서 볼 수 있는 ‘3개월’ 기한은 호주 시민권자와 영주권·거주 비자 소지자에게 적용되는 것이며, 관광객에게 적용되는 것이 아닙니다.",
        },
        { h2: "면허증이 영어로 되어 있지 않다면" },
        {
          p: "면허증의 영어 번역본이나 국제운전면허증(IDP)을 면허증 원본과 함께 지니세요. 세부 사항은 주마다 다릅니다. 북부 준주는 출발 전에 IDP를 받거나 NT 공인 번역사의 공식 번역을 받으라고 안내하고, 퀸즐랜드는 인정되는 영어 번역본을 지니라고 안내합니다. IDP는 본국 면허증을 대신하지 않으므로 둘 다 지녀야 합니다.",
        },
        { h2: "출발 전에" },
        {
          ul: [
            "운전 중에는 항상 면허증을 지니세요",
            "면허증은 유효해야 하며, 운전하는 차종에 맞는 것이어야 합니다",
            `음주운전 기준은 혈중알코올농도 ${F.bacLimit}입니다`,
            "도시 간 거리가 멉니다. 주유와 휴식 지점을 미리 계획하세요",
          ],
        },
        { source: { label: "Transport for NSW(뉴사우스웨일스 교통부) — 해외에서 방문하는 경우", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads(빅토리아 도로청) — 해외 면허로 운전하기", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "Queensland Government(퀸즐랜드 주정부) — 해외 면허로 퀸즐랜드에서 운전하기", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "NT Government(북부 준주 정부) — 방문 운전자의 면허 규칙", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "호주 관광청(Tourism Australia) — 호주에서 운전하기", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "호주에서 국제운전면허증(IDP)이 필요한가요?",
          a: "면허증이 영어로 되어 있다면 일반적으로 필요 없습니다. 그렇지 않다면 영어 번역본이나 IDP를 면허증과 함께 지니세요. 정확한 규칙은 주에 따라 다릅니다.",
        },
        {
          q: "해외 면허로 얼마나 운전할 수 있나요?",
          a: `주마다 다릅니다. NSW는 최대 ${F.driveNswMonths}개월, 빅토리아는 거주 ${F.driveNswMonths}개월 미만, NT는 최대 ${F.driveNtMonths}개월입니다. 다른 주는 방문객의 고정 기한을 명시하지 않습니다.`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    /* ── 2026-11-15 追加（英語 major-airports / public-transport の韓国語版）。確認日は英語と同じ 15 November 2026 ── */
    {
      slug: "major-airports",
      enSlug: "major-airports",
      added: "2026-11-15",
      title: "시드니·멜버른·브리즈번 공항 도착 안내 — 공항 운영사가 밝힌 내용",
      description: "시드니, 멜버른, 브리즈번 국제선 터미널에서 시내로 가는 방법과 웨스턴 시드니 국제공항을 공항 운영사와 교통 당국의 정보로 정리했습니다.",
      related: ["public-transport", "smartgate-australia", "australia-entry-checklist", "arriving-in-australia"],
      blocks: [
        {
          p: "어느 공항에 내리든 국경 절차는 같습니다. 출입국 심사(SmartGate 또는 심사관), 수하물 수취, 검역과 세관 순서입니다. ABF는 SmartGate를 \"안면 인식 기술과 여권으로 신원을 확인하고 출입국 심사를 처리하는\" 게이트라고 설명합니다. 공항마다 다른 것은 시내로 가는 방법입니다. 이 페이지는 공항 운영사와 주 교통 당국이 공개한 내용만 다룹니다.",
        },
        { h2: "시드니(SYD)" },
        {
          ul: [
            "시드니 공항은 시드니 도심(CBD)에서 8 km 떨어져 있으며 기차, 버스, 택시, 승차 공유로 갈 수 있다고 밝히고 있습니다. 국제선은 T1 International을 이용합니다.",
            "기차역은 터미널 지하에 있습니다. T8 Airport & South Line은 매일 오전 5시부터 자정까지 운행합니다.",
            "공항역에서는 역을 소유한 민간 회사가 기차 요금과 별도로 역 이용료(station access fee)를 받습니다. 이 이용료는 Opal의 일일·주간·금요일/주말 요금 상한에 포함되지 않습니다.",
            `국내선 공항역과 국제선 공항역 사이의 역 이용료는 ${F.sydneyStationFeeDomIntl}에 기차 요금이 더해집니다. 국내선 터미널과 국제선 터미널 사이의 이동에 대해 뉴사우스웨일스 교통부(Transport for NSW)는 T8 기차나 420번 버스를 안내합니다.`,
            `공항역에서 Opal 카드를 사거나 충전할 때 최소 충전액은 ${F.opalAirportMinTopUp}입니다. 시드니 공항역에서는 Opal의 60분 환승 혜택이 적용되지 않습니다.`,
            "성인 요금은 별도 등록 없이 비접촉식 신용카드나 체크카드로 낼 수 있습니다.",
          ],
        },
        { source: { label: "Sydney Airport", url: "https://www.sydneyairport.com.au/" } },
        { source: { label: "Transport for NSW — Getting to and from Sydney Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-sydney-airport" } },
        { h2: "웨스턴 시드니 국제공항(WSI)" },
        {
          p: `뉴사우스웨일스 교통부는 공항 개항일을 2026년 10월 25일(일)로 안내하며, 현재 WSI로 가는 직통 기차는 없다고 밝히고 있습니다. 무료 버스인 WSI Link가 St Marys 역과 공항 사이를 ${F.wsiLinkEveryMinutes}분 간격으로 운행하며, 운행 시간은 일요일~목요일 오전 4시 30분부터 자정까지, 금요일과 토요일은 오전 4시 30분부터 새벽 1시까지입니다. 공항으로 가는 시드니 메트로 노선은 아직 공사 중이며, WSI에는 정액 택시 요금이 없습니다.`,
        },
        {
          p: "호주국경군(ABF)은 Australia Travel Declaration 웹 양식을 제공하며, 이 양식은 \"웨스턴 시드니 국제공항에 도착하는 항공편에만 제공된다\"고 밝히고, 다른 호주 공항에 도착하는 여행자에게는 작성하지 말라고 안내합니다.",
        },
        {
          note: "WSI의 현재 운영 상황은 공항 자체 사이트에서 확인하지 못했습니다. 여행 전에 항공사와 공항에 확인하십시오.",
        },
        { source: { label: "Transport for NSW — Getting to and from Western Sydney International Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-western-sydney-international-airport-wsi" } },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "멜버른(MEL)" },
        {
          ul: [
            "멜버른 공항은 정기 시내버스, SkyBus, 지역·전세 버스로 도심(CBD)과 그 너머까지 연결된다고 밝히고 있습니다.",
            "도심까지는 택시로 약 30분 거리라고 설명하며, 터미널 1, 2, 4의 지정 택시 승강장 밖에서 받는 택시 제안에는 응하지 말라고 안내합니다.",
          ],
        },
        { source: { label: "Melbourne Airport — Getting to and from the airport", url: "https://www.melbourneairport.com.au/getting-to-from-the-airport" } },
        { h2: "브리즈번(BNE)" },
        {
          ul: [
            "착륙 후 출입국 심사(SmartGate 또는 심사관)로 갑니다.",
            "모든 승객에게 출입국 심사 티켓(Passport Control ticket)이 발급되며, 터미널을 나가기 전에 검역·세관 담당관에게 보여 줍니다.",
            "브리즈번 공항은 특정 물품은 입국카드(Incoming Passenger Card)에 신고해야 하며, 신고하지 않으면 처벌을 받을 수 있다고 안내합니다.",
            "Airtrain을 타려면 엘리베이터로 3층에 올라가 터미널을 나온 뒤 다리를 건너 역으로 갑니다. 열차는 혼잡 시간대에 15분, 그 밖의 시간대에 30분 간격으로 운행합니다.",
            "택시는 2층 도착 도로의 승강장에서 24시간 운행합니다.",
          ],
        },
        { source: { label: "Brisbane Airport — International arrivals", url: "https://www.bne.com.au/passenger/passenger-information/international-arrivals" } },
        { source: { label: "Australian Border Force — SmartGates on arrival", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgates/arrivals" } },
        {
          note: "퍼스, 애들레이드, 케언스, 골드코스트, 다윈, 호바트, 캔버라는 공식 페이지를 확인하지 못해 다루지 않았습니다. 해당 공항 운영사의 사이트를 이용하십시오.",
        },
      ],
      checked: CHECKED_NOV,
      practical: true,
    },
    {
      slug: "public-transport",
      enSlug: "public-transport",
      added: "2026-11-15",
      title: "시드니·퀸즐랜드 남동부·퍼스의 대중교통: Opal, go card, SmartRider",
      description: "호주는 도시마다 요금 제도가 다릅니다. 시드니(Opal), 퀸즐랜드 남동부(go card), 퍼스(SmartRider)에서 방문객이 요금을 내는 방법을 공식 정보로 정리했습니다.",
      related: ["major-airports", "driving-in-australia", "money-and-tipping", "arriving-in-australia"],
      blocks: [
        {
          p: "호주에는 전국 공통 교통카드가 없습니다. 주마다 자체 제도와 규칙이 있으며, 한 도시의 카드는 다른 도시에서 쓸 수 없습니다. 이 페이지는 공식 페이지를 확인할 수 있었던 세 제도, 즉 시드니와 뉴사우스웨일스, 퀸즐랜드 남동부, 퍼스를 다룹니다.",
        },
        { h2: "시드니와 뉴사우스웨일스 — Opal" },
        {
          ul: [
            "Opal은 시드니, 블루마운틴, 센트럴코스트, 헌터, 일라와라 지역 대중교통의 승차권 제도입니다.",
            "Opal 카드, 또는 대부분의 요금 유형에서 비접촉식 신용카드·체크카드(American Express, Mastercard, Visa)로 탈 때와 내릴 때 단말기에 태그합니다. 한 번의 이동에는 같은 카드나 기기를 사용하십시오.",
            "비접촉식 카드로 내도 Opal과 같은 요금이며 같은 Opal 혜택을 받습니다.",
            "Opal 카드나 비접촉식 결제 수단이 없다면 Opal 1회권(single trip ticket)이 필요하며, 이는 메트로, 기차, 페리, 경전철에서만 살 수 있습니다.",
            "성인 요금은 한 번의 이동 중 교통수단을 갈아탈 때마다 $2가 할인되며, 비혼잡 시간대에는 요금이 30% 저렴합니다.",
            "지갑 안에서 카드끼리 겹치지 않게 하십시오. 뉴사우스웨일스 교통부는 카드 충돌(card clash)에 대해 경고합니다.",
          ],
        },
        {
          note: "시드니 공항역에서는 요금과 별도로 역 이용료가 붙습니다. 공항 페이지를 참고하십시오.",
        },
        { source: { label: "Transport for NSW — Opal", url: "https://transportnsw.info/tickets-fares/opal" } },
        { source: { label: "Transport for NSW — Fares", url: "https://transportnsw.info/tickets-fares/fares" } },
        { source: { label: "Transport for NSW — Contactless payments", url: "https://transportnsw.info/tickets-fares/contactless-payments" } },
        { h2: "퀸즐랜드 남동부 — go card(Translink)" },
        {
          ul: [
            `Translink는 모든 서비스의 요금이 거리나 결제 방법과 관계없이 ${SEQ_FLAT_FARE} 균일 요금이라고 밝히고 있습니다.`,
            "go card는 브리즈번 광역권, 입스위치, 모턴베이, 레드랜즈, 선샤인코스트, 골드코스트의 모든 Translink 버스, 기차(Airtrain 포함), 페리, 트램에서 쓸 수 있습니다. Airtrain에서는 Airtrain 요금이 적용됩니다.",
            "퀸즐랜드 남동부의 모든 기차, 트램, 페리, 버스에서 비접촉식 결제를 받습니다.",
            `탈 때나 내릴 때 태그를 잊으면 기본 요금 ${F.seqDefaultFare}가 부과될 수 있습니다.`,
            "Apple Pay, Samsung Pay, Google Pay는 연결된 실물 카드와 다른 결제 수단으로 취급되므로, 탈 때와 내릴 때 같은 것으로 태그하십시오.",
            "Translink는 벌금이나 위반 통지를 문자 메시지로 보내지 않는다고 밝히고 있습니다.",
          ],
        },
        { source: { label: "Translink — go card", url: "https://translink.com.au/tickets-and-fares/go-card" } },
        { source: { label: "Translink — Contactless payments", url: "https://translink.com.au/tickets-and-fares/contactless-payments" } },
        { h2: "퍼스 — SmartRider(Transperth)" },
        {
          ul: [
            "SmartRider는 Transperth의 재사용 가능한 교통카드입니다. 비접촉식 은행 카드도 표준 현금 요금으로 받으며, 비접촉식 결제에는 할인 요금(concession)이 적용되지 않습니다.",
            "Go Anywhere 요금으로 3시간 안에 노선망 어디든 이동할 수 있으며, SmartRider와 비접촉식 요금은 자동으로 이 금액을 상한으로 합니다.",
            "매주 일요일에는 SmartRider 소지자와 비접촉식으로 결제하는 승객의 이용이 무료입니다.",
            "Transperth 버스 기사는 현금을 받지 않습니다.",
            "Transperth는 공항선(Airport line)을 운행합니다.",
          ],
        },
        { source: { label: "Transperth — What is SmartRider", url: "https://www.transperth.wa.gov.au/SmartRider/What-is-SmartRider" } },
        { source: { label: "Transperth — Fares", url: "https://www.transperth.wa.gov.au/Tickets-Fares/Fares" } },
        {
          note: "멜버른(myki)과 애들레이드(metroCARD)는 공식 페이지를 읽을 수 없어 다루지 않았으며, 확인하지 못한 요금 금액도 싣지 않았습니다. 해당 교통 당국의 사이트에서 확인하십시오.",
        },
      ],
      checked: CHECKED_NOV,
      practical: true,
    },
  ],
};
