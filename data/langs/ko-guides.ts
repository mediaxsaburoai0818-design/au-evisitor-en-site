import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって ko 版に無かった話題。
 * ⚠️ 読者＝韓国旅券保持者。韓国旅券は eVisitor の対象外 → 全ページ ETA（subclass 601・公式アプリ）前提で書く。
 *    英語の eVisitor 手続きページ（how-to-apply / status-check 等）は既存の ETA ページ（eta-app-guide / eta-status-check）が受け持つ。
 *    ⚠️ new-passport-after-approval は eVisitor（内務省に届け出・再申請しない）と ETA（新旅券＝ETA失効・再申請）で規則が逆。
 *       ko 版（eta-new-passport）は ETA の規則で書いている。eVisitor の届け出手順を書き足さないこと。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 */
const CHECKED_NOV = "2026년 11월 15일";

export const koGuides: Article[] = [
  {
    slug: "what-is-evisitor",
    enSlug: "what-is-evisitor",
    added: "2026-11-15",
    title: "eVisitor(subclass 651)란? — 한국 여권은 대상이 아닌 호주의 무료 방문 비자",
    description: "eVisitor는 유럽 대상국 여권 소지자에게 전자적으로 발급되는 정식 방문 비자입니다. 무엇인지, 왜 한국 여권은 ETA를 신청해야 하는지 정리했습니다.",
    related: ["eta-vs-evisitor", "eligible-passports", "arriving-in-australia"],
    blocks: [
      {
        p: `eVisitor(subclass 651)는 전자적으로 발급되어 여권에 연결되는 호주의 방문 비자입니다. 비용은 무료이고, ${F.validMonths}개월간 유효하며, 1회 입국당 최대 ${F.stayMonths}개월까지 머무를 수 있습니다. 다만 유럽 대상국 여권 전용이며, 한국 여권은 대상이 아닙니다.`,
      },
      { h2: "여행 허가가 아니라 비자입니다" },
      {
        p: "뉴질랜드의 NZeTA와 달리 eVisitor는 정식 비자입니다. 여권에 도장을 찍지 않고, 허가 기록이 여권에 연결되어 체크인할 때 전자적으로 확인됩니다.",
      },
      { h2: "대상" },
      {
        ul: [
          `유럽 ${F.eligibleCountries}개국 여권 소지자: EU 회원국 전체와 영국(British Citizen 여권만 해당하며, British National (Overseas) 등 다른 종류의 영국 여권은 대상이 아닙니다), 아이슬란드, 노르웨이, 스위스, 그리고 몇몇 소국`,
          "관광, 가족·친지 방문, 상용 방문 활동",
          "신청할 때와 비자가 발급될 때 호주 밖에 있는 여행자",
        ],
      },
      { h2: "한국 여권은 대상이 아닙니다" },
      {
        p: `여권이 목록에 없다면, 예를 들어 일본, 미국, 캐나다, 싱가포르, 말레이시아, 대한민국이라면 eVisitor를 받을 수 없습니다. 이들 국적은 ETA(subclass 601)를 신청하며, 비용은 ${F.etaFee}이고 공식 모바일 앱에서 신청합니다.`,
      },
      {
        note: "자격 기준은 거주지가 아니라 국적입니다. 유럽에 살고 있더라도 한국 여권이라면 eVisitor 대상이 되지 않습니다.",
      },
    ],
  },
  {
    slug: "border-questions",
    enSlug: "border-questions",
    added: "2026-11-15",
    title: "호주에 도착하면 무엇을 묻나요? — 출입국·세관·검역 세 가지 심사",
    description: "출입국 심사, 세관, 검역은 서로 다른 기관이 다른 질문을 하는 별개의 심사입니다. 각각을 구분하면 줄이 훨씬 짧아집니다.",
    related: ["arriving-in-australia", "smartgate-australia", "bringing-medicines", "australia-entry-checklist"],
    blocks: [
      {
        p: "도착한 승객은 한 번이 아니라 세 번의 심사를 거칩니다. 담당 기관이 다르고 확인하는 것도 다릅니다. 엉뚱한 심사의 질문에 엉뚱한 답을 하는 것이 시간을 잡아먹는 원인입니다.",
      },
      { h2: "1. 출입국 심사 — 진정한 방문자인가" },
      {
        ul: [
          "얼마나, 어디에 머무르는지",
          "다음 목적지나 돌아가는 항공권이 있는지",
          "여행 경비를 어떻게 마련하는지",
          "일할 생각이 있는지 — ETA로는 일할 수 없습니다",
        ],
      },
      { h2: "2. 세관 — 관세를 내야 하는가" },
      {
        p: `면세 한도를 넘는 물품과 신고 기준액 이상의 현금은 신고해야 합니다. 일반 물품의 면세 한도는 ${F.customsAgeMin}세 이상 ${F.customsGoodsAllowance}(그보다 어리면 ${F.customsGoodsAllowanceMinor})입니다.`,
      },
      { h2: "3. 검역 — 가방에 무엇이 있는가" },
      {
        p: "준비하지 않은 여행자가 걸리는 것이 이 심사입니다. 호주는 음식, 식물·동물성 물품, 그리고 흙이나 민물에 닿았던 물건에 대해 묻습니다. 신고하는 데는 비용이 들지 않지만, 신고하지 않으면 비자를 잃을 수 있습니다.",
      },
      { h2: "입국카드(Incoming Passenger Card)" },
      {
        p: "세관과 검역에 대한 답은 착륙 전에 작성하는 입국카드로 합니다. 가볍게 여기지 마십시오. 입국카드는 법적 신고서이며, 가방에서 신고하지 않은 물품이 나오면 담당관은 그 카드를 ‘없다고 답했다’는 증거로 봅니다.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: "신고해야 하는지 확실하지 않다면 ‘예’에 표시하고 담당관의 판단에 맡기십시오. 결과적으로 반입이 허용되는 물품을 신고했다고 해서 불이익은 없습니다.",
      },
    ],
  },
  {
    slug: "working-and-studying",
    enSlug: "working-and-studying",
    added: "2026-11-15",
    title: `ETA로 할 수 없는 것: 취업과 ${F.studyMonths}개월을 넘는 공부`,
    description: `ETA는 방문 비자입니다. 호주 고용주 밑에서 일할 수 없고, 공부는 ${F.studyMonths}개월까지로 제한됩니다. 원격 근무와 위반 시의 결과도 정리했습니다.`,
    related: ["arriving-in-australia", "healthcare-for-visitors", "eta-faq"],
    blocks: [
      {
        p: `ETA는 앱으로 빠르게 받을 수 있다 보니 ${F.stayMonths}개월 동안 무엇이든 할 수 있는 가벼운 허가처럼 여겨지기도 합니다. 그렇지 않습니다. 조건이 붙은 방문 비자이며, 그 조건은 실제로 적용됩니다.`,
      },
      { h2: "일" },
      {
        p: "호주 고용주 밑에서 일할 수 없습니다. 상용 방문 활동은 일하는 것과 다릅니다. 회의 참석, 협상, 컨퍼런스 참가는 일반적으로 괜찮지만, 호주 기업에서 돈을 받고 업무를 하는 것은 안 됩니다.",
      },
      { h2: "해외 고용주를 위한 원격 근무" },
      {
        p: "한국 등 호주 밖의 기존 고용주를 위해 원격으로 일하는 것은 구체적인 상황에 따라 달라지는 회색 지대이며, 비교·정보 사이트가 대신 판단할 문제가 아닙니다. 여행 계획이 그 답에 달려 있다면 예약하기 전에 호주 내무부에 확인하십시오.",
      },
      { h2: "공부" },
      {
        p: `공부는 ${F.studyMonths}개월까지입니다. 단기 과정은 괜찮지만 한 학기는 안 됩니다. 더 긴 공부에는 학생 비자가 필요하며, 출국 전에 신청해야 합니다.`,
      },
      { h2: "생각보다 중요한 이유" },
      {
        p: `비자 조건을 위반하면 비자 취소, 강제 퇴거, 그리고 최대 ${F.visaCancelExclusionYears}년의 제한 기간으로 이어질 수 있습니다. 잘못했을 때의 대가는 벌금이 아니라 다시 돌아올 수 없게 되는 것입니다.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "three-months-per-visit",
    enSlug: "three-months-per-visit",
    added: "2026-11-15",
    title: `ETA의 ‘1회 ${F.stayMonths}개월’ 제한은 실제로 어떻게 적용되나`,
    description: `ETA는 ${F.validMonths}개월간 유효하지만 한 번의 방문은 ${F.stayMonths}개월까지입니다. 두 숫자는 별개이며, 둘을 섞으면 일정 계획이 틀어집니다.`,
    related: ["arriving-in-australia", "public-holidays", "driving-in-australia", "eta-validity-and-stay"],
    blocks: [
      {
        p: `ETA는 발급일로부터 ${F.validMonths}개월간 유효하며, 그 기간에는 몇 번이든 입국할 수 있습니다. 하지만 호주에 ${F.validMonths}개월 동안 연속으로 머물 수 있다는 뜻은 아닙니다. 한 번의 방문은 ${F.stayMonths}개월까지로 제한됩니다.`,
      },
      { h2: "시계는 하나가 아니라 둘입니다" },
      {
        ul: [
          `비자 유효기간 — ${F.validMonths}개월, 첫 입국일이 아니라 발급일부터 계산`,
          `1회 체류 — ${F.stayMonths}개월, 매번 도착한 날부터 계산`,
          "입국 횟수 — 비자가 유효한 동안 여러 번",
        ],
      },
      {
        p: `따라서 1월에 발급된 비자는 사용 여부와 관계없이 다음 해 1월에 만료됩니다. 12월에 도착하면 ${F.stayMonths}개월까지 머무를 수는 있지만, 비자가 만료된 뒤에는 다시 입국할 수 없습니다.`,
      },
      { h2: `${F.stayMonths}개월에 포함되지 않는 것` },
      {
        ul: [
          "호주 고용주 밑에서 일하는 것",
          `${F.studyMonths}개월을 넘는 공부`,
          "입국이 보장된다는 기대 — 국경에서 담당관이 판단합니다",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `호주 안에서 다시 신청해 기간을 늘리는 방식은 통하지 않습니다. 한 번에 ${F.stayMonths}개월보다 오래 머물러야 한다면 출국 전에 방문 비자(Visitor visa, subclass 600)를 검토하십시오.`,
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    enSlug: "leaving-and-returning",
    added: "2026-11-15",
    title: `호주를 나갔다가 다시 들어오면 ${F.stayMonths}개월이 새로 시작되나요?`,
    description: `입국할 때마다 ${F.stayMonths}개월이 새로 시작되지만, 짧은 간격의 반복 방문은 질문을 받게 되고 국경 담당관이 입국을 거부할 수도 있습니다.`,
    related: ["arriving-in-australia", "tourist-refund-scheme", "airport-security-liquids", "three-months-per-visit"],
    blocks: [
      {
        p: `입국할 때마다 최대 ${F.stayMonths}개월의 기간이 새로 시작됩니다. 따라서 ETA가 유효한 동안 뉴질랜드나 발리에 다녀오면 1회 체류 기간은 다시 시작됩니다.`,
      },
      { h2: "하지만 방문 비자입니다" },
      {
        p: "ETA는 방문한다는 전제로 발급됩니다. 열두 달 중 아홉 달을 호주에서 보내며 매번 잠깐씩만 나가는 사람은 방문자가 아니라 방문 비자로 호주에 사는 사람입니다. 국경 담당관은 이번 입국만이 아니라 여권 전체의 출입국 패턴을 봅니다.",
      },
      { h2: "다시 입국할 때 보여 달라고 할 수 있는 것" },
      {
        ul: [
          "다음 목적지나 돌아가는 항공권",
          "체류 기간 동안의 경비",
          "귀국할 이유를 보여 주는 증거: 직장, 학업, 임대 계약, 가족",
          "이렇게 빨리 다시 오는 이유",
        ],
      },
      { h2: "입국이 거부되면" },
      {
        p: "유효한 비자는 여행할 수 있는 허가일 뿐 입국을 보장하지 않습니다. 진정한 방문자라고 담당관이 납득하지 않으면 국경에서 비자가 취소되고 가장 빠른 항공편으로 돌려보내질 수 있습니다. 그 기록은 이후의 신청에도 따라다닙니다.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `ETA는 만료되는 순간, 즉 발급일로부터 ${F.validMonths}개월이 지나면 효력을 잃습니다. 그 기간 끝 무렵에 재방문을 예약한다면 먼저 발급일을 확인하십시오.`,
      },
    ],
  },
  {
    slug: "eta-passport-details",
    enSlug: "passport-and-details",
    added: "2026-11-15",
    title: "ETA는 여권 하나에 연결됩니다 — 정보를 정확히 입력하세요",
    description: "ETA는 신청할 때 사용한 여권에 연결됩니다. 새 여권, 여권과 다른 이름, 다른 국적의 여권은 모두 체크인에서 문제가 됩니다.",
    related: ["eta-common-mistakes", "eta-new-passport", "eta-app-guide", "eta-validity-and-stay"],
    blocks: [
      {
        p: "스티커도, 중요한 출력물도 없습니다. ETA는 여권 번호에 연결된 기록으로만 존재하며, 항공사는 체크인할 때 그 기록을 확인합니다. 손에 든 여권이 기록 속 여권과 다르면 ETA는 없는 것과 마찬가지입니다.",
      },
      { h2: "새 여권에는 새 신청이 필요합니다" },
      {
        p: `여권을 갱신하면 기존 ETA는 ${F.validMonths}개월의 유효기간이 남아 있더라도 새 여권으로 옮겨지지 않습니다. 내무부는 새 여권을 받으면 ETA가 효력을 잃으며 새로 신청해야 한다고 안내합니다. 여행 전에 새 여권으로 다시 신청하십시오.`,
      },
      { h2: "여권에 인쇄된 그대로 입력하세요" },
      {
        ul: [
          "이름은 평소 쓰는 방식이 아니라 여권 하단의 기계 판독 영역(MRZ)에 적힌 대로",
          "여권 번호는 한 글자씩 확인 — 숫자 0과 영문 O, 숫자 1과 영문 I",
          "국적은 사는 곳이 아니라 여권에 표시된 대로",
        ],
      },
      {
        p: "공식 앱은 여권을 스캔해 이름, 생년월일, 여권 번호 등을 미리 채웁니다. 내무부는 ETA의 정보가 여권과 정확히 일치해야 하며, ETA가 발급된 뒤에는 내무부가 정보를 고칠 수 없다고 안내합니다. 제출하기 전에 화면의 내용을 여권과 대조하십시오.",
      },
      { h2: "복수 국적자" },
      {
        p: "ETA가 연결된 여권으로 여행하십시오. 체크인할 때 다른 여권을 제시하면 문제가 됩니다.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `ETA의 정부 측 비용은 앱 서비스 수수료 ${F.etaFee}입니다. 그보다 많은 금액을 받고 ETA를 대신 신청해 주는 사이트는 자체 수수료를 더하는 제3자이며, 공식 창구가 아닙니다.`,
      },
    ],
  },
  {
    slug: "eta-new-passport",
    enSlug: "new-passport-after-approval",
    added: "2026-11-15",
    title: "ETA 승인 후 새 여권을 받았다면 — 다시 신청해야 합니다",
    description: "ETA는 발급 기준이 된 여권에 연결됩니다. 갱신·분실·재발급으로 새 여권을 받으면 기존 ETA는 효력을 잃으므로, 새 여권으로 다시 신청해야 합니다.",
    related: ["eta-passport-details", "eta-validity-and-stay", "eta-app-guide", "eta-common-mistakes"],
    blocks: [
      {
        p: "여권을 갱신하거나, 분실 후 재발급받거나, 이름이 바뀌어 새로 발급받는 일은 흔합니다. 이때 ETA가 새 여권으로 자동으로 옮겨 가지는 않습니다.",
      },
      { h2: "ETA의 규칙" },
      {
        p: "호주 내무부의 ETA 안내에 따르면 새 여권을 받으면 ETA는 효력을 잃으며, 새로 신청해야 합니다. 항공사와 국경 시스템은 실제로 제시한 여권을 확인하므로, 새 여권으로 ETA를 받지 않은 채 출발하면 체크인에서 막힙니다.",
      },
      { h2: "해야 할 일" },
      {
        ul: [
          "새 여권을 받으면 공식 앱에서 새 여권으로 ETA를 다시 신청합니다",
          "여권 칩 읽기와 얼굴 사진 촬영 등 처음과 같은 절차를 거칩니다",
          "출발 직전이 아니라 새 여권을 받는 대로 바로 신청하십시오",
        ],
      },
      {
        note: "새 여권을 내무부에 알리면 기존 비자를 계속 쓸 수 있다는 것은 유럽 여권용 eVisitor의 절차입니다. 한국 여권의 ETA에는 해당하지 않으므로, 새 여권으로 다시 신청하십시오.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "eligible-passports",
    enSlug: "eligible-passports",
    added: "2026-11-15",
    checked: CHECKED_NOV,
    title: `호주 eVisitor·ETA 대상 여권 — 한국 여권은 ETA(${F.etaFee}) 대상입니다`,
    description: `eVisitor는 유럽 ${F.eligibleCountries}개국 국민 전용이고, 한국 여권은 ETA(subclass 601) 대상 ${F.etaEligibleCountries}개 여권에 속합니다. 두 공식 목록과 대상이 아닌 여권을 정리했습니다.`,
    related: ["eta-vs-evisitor", "australia-transit", "eta-app-guide", "eta-cost"],
    blocks: [
      {
        p: `호주의 eVisitor(subclass 651)를 받을 수 있는지는 사는 곳이 아니라 국적과 가지고 있는 여권으로 정해집니다. 호주 내무부(Department of Home Affairs)는 ${F.eligibleCountries}개국 중 한 나라의 국민이면서 그 나라의 유효한 여권을 가지고 있어야 한다고 밝히고 있습니다. 대한민국은 이 목록에 없습니다.`,
      },
      { h2: "한국 여권은 ETA 목록에 있습니다" },
      {
        p: `ETA(subclass 601)에는 별도의 대상 여권 목록(${F.etaEligibleCountries}개)이 있으며, 대한민국은 여기에 포함됩니다. 이 밖에 브루나이, 캐나다, 홍콩(중국 특별행정구), 일본, 말레이시아, 싱가포르, 대만(관용·외교 여권 제외), 미국, 영국 BN(O)(British National (Overseas)) 여권 등이 ETA 목록에 있습니다. ETA는 앱 서비스 수수료로 ${F.etaFee}를 냅니다. 두 목록 어디에도 해당하지 않는 여권 소지자는 방문 비자(subclass 600) 대상이 될 수 있습니다.`,
      },
      { h2: `참고: eVisitor 대상 ${F.eligibleCountries}개국` },
      {
        p: "일행 중에 유럽 국적자가 있을 때 참고하십시오. 안도라, 오스트리아, 벨기에, 불가리아, 크로아티아, 키프로스, 체코, 덴마크, 에스토니아, 핀란드, 프랑스, 독일, 그리스, 헝가리, 아이슬란드, 아일랜드, 이탈리아, 라트비아, 리히텐슈타인, 리투아니아, 룩셈부르크, 몰타, 모나코, 네덜란드, 노르웨이, 폴란드, 포르투갈, 루마니아, 산마리노 공화국, 슬로바키아, 슬로베니아, 스페인, 스웨덴, 스위스, 영국(British Citizen), 바티칸 시국.",
      },
      { h2: "eVisitor에 쓸 수 없는 여권" },
      {
        ul: [
          "영국은 British Citizen 여권만 목록에 있습니다",
          "British National (Overseas)(BN(O)), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person, British Subject 여권은 사용할 수 없습니다",
          "비시민 여권, 신분증명서(certificate of identity), Titre de Voyage 같은 그 밖의 여행 문서는 사용할 수 없습니다",
          "바티칸 시국은 여권에 바티칸 시국(교황청) 국민임이 표시되어 있어야 합니다",
        ],
      },
      { h2: "두 목록에 모두 있는 여권" },
      {
        p: `본 사이트가 두 공식 목록을 비교한 바로는 ${F.bothListsCountries}개 여권이 양쪽에 모두 올라 있습니다. 나머지 ${F.eligibleCountries - F.bothListsCountries}개 eVisitor 대상국(불가리아, 크로아티아, 키프로스, 체코, 에스토니아, 헝가리, 라트비아, 리투아니아, 폴란드, 루마니아, 슬로바키아, 슬로베니아)은 ETA 목록에 없습니다. 양쪽에 모두 있는 여권에 대해 ETA 페이지는 유럽 여권 소지자가 eVisitor 대상이 "될 수 있으며(may be eligible)" eVisitor는 신청 비용이 없다고 안내합니다. 한국 여권은 이 경우에 해당하지 않습니다.`,
      },
      { h2: "그 밖에 알아 둘 점" },
      {
        p: "호주 시민은 다른 대상 여권을 함께 가지고 있더라도 eVisitor나 ETA를 신청할 수 없습니다. 호주에 입국할 때 비자가 필요 없기 때문입니다.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "목록은 바뀔 수 있습니다. 신청하기 전에 실제로 여행할 때 사용할 여권을 기준으로 공식 페이지를 확인하십시오.",
      },
    ],
    faq: [
      {
        q: "한국 여권으로 eVisitor를 받을 수 있나요?",
        a: `아니요. 대한민국은 eVisitor 대상 ${F.eligibleCountries}개국에 없습니다. 한국은 ETA(subclass 601) 목록에 있으므로 공식 앱에서 ETA를 신청합니다.`,
      },
      {
        q: "유럽에 살고 있으면 한국 여권으로도 eVisitor 대상이 되나요?",
        a: "아니요. eVisitor는 목록에 있는 나라의 국적과 그 나라의 유효한 여권이 있어야 합니다. 사는 곳은 자격과 관계가 없습니다.",
      },
    ],
  },
  {
    slug: "eta-common-mistakes",
    enSlug: "common-mistakes",
    added: "2026-11-15",
    checked: CHECKED_NOV,
    title: "호주 ETA 신청에서 피해야 할 실수 — 내무부 안내를 바탕으로",
    description: "한국 여권으로 eVisitor를 신청하는 실수, 여권과 다른 ETA 정보, 새 여권, 심사 회부 후 재신청 등 호주 내무부가 경고하는 점을 정리했습니다.",
    related: ["eta-validity-and-stay", "if-refused", "eta-app-guide", "official-site"],
    blocks: [
      {
        p: "ETA 신청은 절차가 단순해서 서두르기 쉽습니다. 아래는 호주 내무부(Department of Home Affairs)의 ETA 안내와 eVisitor 안내에 실린 주의 사항 가운데 한국 여권 소지자에게 해당하는 것을 정리한 것입니다.",
      },
      { h2: "먼저 확인할 점: 신청하는 비자가 맞는지" },
      {
        p: "내무부는 eVisitor 신청 전에 여권이 eVisitor 대상국의 것인지 확인하라고 안내합니다. 한국 여권은 eVisitor 대상이 아닙니다. ‘무료’라는 정보만 보고 내무부 웹사이트(ImmiAccount)에서 eVisitor를 신청하지 마십시오. 한국 여권 소지자가 신청할 것은 공식 앱의 ETA(subclass 601)입니다.",
      },
      { h2: "ETA 신청에서 내무부가 강조하는 세 가지" },
      {
        ul: [
          "ETA의 정보는 여권과 정확히 일치해야 합니다. ETA가 발급된 뒤에는 내무부가 정보를 고칠 수 없습니다",
          "새 여권을 받으면 기존 ETA는 효력을 잃으며, 새 여권으로 다시 신청해야 합니다",
          "심사 회부(referral)가 된 뒤 앱에서 ETA를 다시 신청해도 같은 결과가 나옵니다",
        ],
      },
      { h2: "체류 중의 실수" },
      {
        ul: [
          "일하기: ETA는 취업 비자가 아닙니다. 호주 고용주 밑에서 일할 수 없습니다",
          "짧은 출국을 반복하며 오래 머무르기: 다음 입국 때 여행 목적에 대한 질문을 받을 수 있으며, 진정한 방문자가 아니라고 판단되면 비자가 취소될 수 있습니다",
          "비자가 끝난 뒤 다른 비자 없이 머무르기: 불법 체류자(unlawful non-citizen)가 되어 강제 퇴거될 수 있습니다",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "여권이 바뀐 경우 ETA는 정보 변경이 아니라 새로 신청해야 합니다. 연락처 변경 등 그 밖의 절차는 공식 ETA 페이지에서 확인하십시오.",
      },
    ],
  },
  {
    slug: "australia-transit",
    enSlug: "transit",
    added: "2026-11-15",
    checked: CHECKED_NOV,
    title: `호주 환승: ${F.twovHours}시간 규칙과 환승 비자 — ETA 소지자를 위한 안내`,
    description: `호주에서 환승만 해도 비자나 허가가 필요합니다. ETA로 환승할 수 있는 경우, ${F.twovHours}시간 무비자 환승(TWOV) 조건, ${F.transitVisaHours}시간 환승 비자를 정리했습니다.`,
    related: ["eligible-passports", "airport-security-liquids", "major-airports", "eta-vs-evisitor"],
    blocks: [
      {
        p: "호주 내무부(Department of Home Affairs)는 짧게 머무르거나 공항을 나가지 않고 환승만 하는 경우를 포함해, 호주 시민이 아닌 모든 사람은 호주에 들어가려면 비자나 허가가 필요하다고 밝히고 있습니다. 허가를 얻는 방법은 세 가지입니다.",
      },
      { h2: "1. ETA를 가지고 있는 경우" },
      {
        p: "내무부는 호주 환승을 허용하는 비자로 eVisitor, ETA, 방문 비자(Visitor visa), APEC 비즈니스 여행 카드(ABTC)를 들고 있으며, 이들로는 더 오래 머무를 수도 있습니다. 한국 여권 소지자가 유효한 ETA를 가지고 있다면 호주 경유도 그 ETA로 해결됩니다.",
      },
      { h2: "2. 무비자 환승(TWOV)" },
      { p: "다음 조건을 모두 충족하는 경우에만 비자 없이 환승할 수 있습니다." },
      {
        ul: [
          "항공편으로 호주에 도착할 것",
          `도착 후 ${F.twovHours}시간 이내에 항공편으로 호주를 떠나 제3국으로 가는 확정된 항공권이 있을 것`,
          "가는 나라에 입국할 수 있는 유효한 여행 문서가 있을 것",
          "다음 항공편까지 어떤 이유로든 입국 심사를 받거나 공항 환승 구역을 나갈 필요가 없을 것",
          "TWOV 목록에 있는 나라의 여권을 가지고 있을 것",
        ],
      },
      {
        p: "본 사이트가 두 공식 목록을 비교한 바로는 eVisitor 대상국은 모두 TWOV 목록에도 있으며, TWOV 목록에는 그 밖의 나라도 포함됩니다. 대한민국 여권이 TWOV 대상인지는 아래 출처의 내무부 목록에서 직접 확인하십시오. 내무부는 이 안내가 무국적자와 난민에게는 적용되지 않는다고 밝히고 있습니다.",
      },
      { h2: "입국 심사를 받아야 하는 경우" },
      {
        p: "내무부는 수하물을 찾아 다시 부치는 경우와 다른 터미널에서 다음 항공편을 타는 경우를 입국 심사가 필요한 흔한 예로 들며, 그때는 비자가 있어야 합니다. 또한 TWOV 대상인지 여전히 확실하지 않다면 만일에 대비해 비자 신청을 고려하라고 권합니다.",
      },
      { h2: "3. 환승 비자(Transit visa, subclass 771)" },
      {
        ul: [
          `${F.transitVisaHours}시간 이내의 호주 환승용입니다`,
          "무료입니다",
          "부모 여권에 함께 올라 있는 아기를 포함해 여행자마다 따로 신청해야 합니다",
          "신청할 때와 결정이 내려질 때 모두 호주 밖에 있어야 합니다",
        ],
      },
      {
        note: "내무부는 이미 호주 비자를 가지고 있는 사람이 환승 비자를 받으면 기존 비자가 종료될 가능성이 높다고 경고합니다. ETA로 이미 환승할 수 있습니다.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "시드니에서 연결편까지 10시간입니다. 비자 없이 환승할 수 있나요?",
        a: `TWOV로는 안 됩니다. TWOV는 도착 후 ${F.twovHours}시간 이내에 확정된 다음 항공편이 있어야 합니다. 비자가 필요하며, 한국 여권이라면 ETA 또는 환승 비자(subclass 771)입니다.`,
      },
      {
        q: "공항마다 환승 구역이 있나요?",
        a: "내무부가 호주 공항의 환승 시설에 대한 페이지를 공개하고 있습니다. 이용할 공항에 대해 그 페이지와 항공사에 확인하십시오.",
      },
    ],
  },
  {
    slug: "official-site",
    enSlug: "official-site",
    added: "2026-11-15",
    checked: CHECKED_NOV,
    title: "호주 ETA·비자의 공식 창구 — 공식 앱과 ImmiAccount 구별법, 사기 주의",
    description: "한국 여권의 ETA는 호주 내무부가 배포한 공식 앱에서 신청합니다. 공식 주소와 내무부가 공개한 비자 사기 경고를 정리했습니다.",
    related: ["eta-app-guide", "eta-cost", "eta-status-check", "eta-common-mistakes"],
    blocks: [
      {
        p: "호주 내무부(Department of Home Affairs)는 ImmiAccount를 이민 포털이자 \"호주 비자를 신청할 때 이용해야 하는 유일한 공식 웹사이트\"라고 설명합니다. 다만 한국 여권 소지자가 신청하는 ETA(subclass 601)는 웹사이트가 아니라 내무부가 배포하는 공식 앱(Australian ETA)에서 신청합니다. ImmiAccount에 있는 eVisitor 신청 양식은 유럽 여권 소지자를 위한 것입니다.",
      },
      { h2: "공식 주소" },
      {
        ul: [
          "Australian ETA 앱(ETA 전용): Department of Home Affairs가 배포",
          "비자 정보: immi.homeaffairs.gov.au",
          "ImmiAccount 로그인과 신청(ETA 이외의 비자): online.immi.gov.au",
        ],
      },
      { h2: "공식 경로의 비용" },
      {
        p: `ETA에는 비자 신청 비용(visa application charge)이 없지만, 앱 이용에 대해 환불되지 않는 신청 서비스 수수료 ${F.etaFee}가 부과됩니다. 공식 앱 밖에서 그보다 많은 금액을 요구한다면 중개 업체에 돈을 내는 것입니다.`,
      },
      { h2: "내무부의 사기 경고" },
      {
        ul: [
          "내무부를 사칭하는 이메일의 주소가 .gov.au로 끝나지 않는다면 사기입니다",
          "비자를 발급받으려면 추가 수수료(‘CIS charge’라고 부르기도 함)를 내야 한다고 하면 응하지 마십시오. 호주 정부는 비자 발급에 추가 수수료를 받지 않습니다",
          "내 신청 내용을 ImmiAccount에서 확인하지 못하게 하는 사람은 무언가를 숨기고 있습니다",
          "VEVO(Visa Entitlement Verification Online)에서 확인되지 않는 비자의 승인 통지서는 가짜일 가능성이 높습니다",
          "내무부 직원은 전화에서 항상 신분을 밝히며, 신용카드 정보나 비밀번호를 묻지 않습니다",
          "호주 정부의 공식 채널만 이용하십시오. 내무부 웹사이트, 호주 생체정보 수집 센터(Australian Biometric Collection Centre), 또는 거주국의 호주 고등판무관실·대사관·영사관입니다",
        ],
      },
      { h2: "다른 사람이 대신 신청하는 경우" },
      {
        p: "내무부는 호주에서 등록 이민 대리인(registered migration agent)이나 호주 변호사가 아닌 제3자가 유료로 이민 관련 도움을 제공하는 것은 불법이며, 다른 사람이 신청서를 제출하더라도 비자 조건을 확인할 책임은 본인에게 있다고 밝히고 있습니다. ETA 앱으로 신청할 때는 다른 사람이 도와줄 수 있지만, 그 사람은 신청자와 실제로 함께 있어야 합니다.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "이 사이트는 독립 정보 사이트이며 정부 웹사이트가 아닙니다. 신청이나 결제를 받지 않습니다.",
      },
    ],
  },
  {
    slug: "biosecurity",
    enSlug: "biosecurity",
    added: "2026-11-15",
    title: "호주 검역(바이오시큐리티): 신고해야 할 것과 비자가 취소될 수 있는 이유",
    description: `신고하지 않은 검역 대상 물품에는 최대 ${F.biosecurityPenaltyUnits} 벌금 단위의 위반 통지가 나올 수 있고, 비자 소지자는 비자 취소와 ${F.visaCancelExclusionYears}년간의 재신청 제한으로 이어질 수 있습니다.`,
    related: ["arriving-in-australia", "bringing-medicines", "smartgate-australia", "australia-entry-checklist"],
    blocks: [
      {
        p: "호주는 지켜야 할 농업을 가진 섬나라여서 검역 규칙이 엄격하고, 단속은 나중에 사무실이 아니라 공항에서 이루어집니다. 신고서를 형식적인 절차로 여기는 여행자가 적발됩니다.",
      },
      { h2: "벌금" },
      {
        p: `신고하지 않은 물품에 대한 위반 통지(infringement notice)는 최대 ${F.biosecurityPenaltyUnits} 벌금 단위(penalty unit)까지 부과될 수 있습니다. 벌금 단위 하나의 금액은 법으로 정해지며 주기적으로 인상됩니다. 농림수산부 페이지는 ${F.biosecurityPenaltyUnits} 단위를 ${F.biosecurityFineDaff}로 안내하지만, 2023년 물가 연동 인상을 알린 장관 발표는 같은 ${F.biosecurityPenaltyUnits} 단위를 ${F.biosecurityFineIndexed}로 밝혔습니다. 이 금액을 근거로 삼기 전에 공식 페이지에서 현재 금액을 확인하십시오.`,
      },
      { h2: "ETA를 포함한 비자 소지자에게는 벌금보다 더 큰 문제가 있습니다" },
      {
        p: `위반 통지를 받은 여행자는 비자 취소 검토 대상으로 회부될 수 있습니다. 비자가 취소되면 가장 빠른 항공편으로 호주에서 퇴거되고, ${F.visaCancelExclusionYears}년 동안 다시 신청할 수 없습니다.`,
      },
      { h2: "실제로 적발되는 것" },
      {
        ul: [
          "모든 종류의 음식 — 기내에서 나눠 준 간식도 포함",
          "육류, 유제품, 계란, 꿀과 이를 포함한 모든 것",
          "생과일과 채소, 씨앗, 견과류",
          "식물성 재료 — 목제품, 짚·풀로 엮은 제품, 꽃",
          "흙이나 식물이 묻은 등산화, 텐트, 스포츠 용품",
          "동물 주변이나 민물에서 사용한 모든 것",
        ],
      },
      { h2: "짐을 싸기 전에" },
      {
        ul: [
          "신발과 장비의 흙은 공항 줄에서가 아니라 집에서 털어 내십시오",
          "음식은 착륙 전에 먹거나 버리십시오",
          "나무나 짚·풀로 엮은 기념품은 신고하십시오. 단순한 기념품이 아니라 위험 물품으로 취급됩니다",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "검역 지점 앞에 폐기함이 있습니다. 이용은 무료입니다. ‘없음’이라고 신고한 뒤 그 물품이 발견되면 그렇지 않습니다.",
      },
    ],
  },
  {
    slug: "customs-allowances",
    enSlug: "customs-allowances",
    added: "2026-11-15",
    title: "호주 면세 한도: 일반 물품·주류·담배",
    description: `${F.customsAgeMin}세 이상은 일반 물품 ${F.customsGoodsAllowance}, 주류 ${F.customsAlcoholLitres}리터, 담배 ${F.customsTobaccoGrams}그램까지 면세로 가져올 수 있습니다. 이를 넘으면 신고해야 합니다.`,
    related: ["arriving-in-australia", "money-and-tipping", "tourist-refund-scheme", "smoking-vaping-and-alcohol"],
    blocks: [
      {
        p: "세관은 검역과는 별개의 심사입니다. 검역은 물품이 호주에 위험한지를, 세관은 그 물품에 관세와 세금을 내야 하는지를 봅니다. 한쪽을 통과해도 다른 쪽에서 멈출 수 있습니다.",
      },
      { h2: "면세 한도" },
      {
        ul: [
          `일반 물품: ${F.customsAgeMin}세 이상 ${F.customsGoodsAllowance}, ${F.customsAgeMin}세 미만 ${F.customsGoodsAllowanceMinor}`,
          `주류: ${F.customsAlcoholLitres}리터(${F.customsAgeMin}세 이상)`,
          `담배: 형태와 관계없이 ${F.customsTobaccoGrams}그램과 개봉한 한 갑(${F.customsAgeMin}세 이상)`,
        ],
      },
      { h2: "흔히 잘못 아는 것" },
      {
        ul: [
          "들어오는 길에 산 면세품도 면세 한도에 포함됩니다",
          "선물도 포함됩니다. 기준은 본인이 쓰려고 산 것인지가 아니라 가지고 있는 물품의 가치입니다",
          "가족이 면세 한도를 생각하는 방식대로 합칠 수 있는 것은 아닙니다. 그렇게 할 계획이라면 미리 확인하십시오",
        ],
      },
      { h2: "한도를 넘는 경우" },
      {
        p: "신고하고 구매 증빙을 제시하면 관세와 세금이 계산됩니다. 면세 한도를 넘는 물품을 신고하지 않으면 벌금, 기소, 비자 취소로 이어질 수 있습니다. 신고는 낼 것을 내는 절차일 뿐입니다.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: `현금도 국경에서 신고 의무가 있습니다. 현금과 여행자수표 같은 증서가 합계 ${F.cashReportThreshold} 이상이면 신고해야 합니다. 방법은 돈 관련 페이지를 참고하십시오.`,
      },
    ],
  },
  {
    slug: "eta-children",
    enSlug: "travelling-with-children",
    added: "2026-11-15",
    title: "아이도 ETA가 따로 필요한가요? — 가족 여행 때 확인할 점",
    description: "유아를 포함해 모든 여행자에게 각자의 ETA가 필요합니다. 아이 명의로 신청하는 방법, 아이 여권의 유효기간, 동의서에 대해 정리했습니다.",
    related: ["arriving-in-australia", "smartgate-australia", "healthcare-for-visitors", "eta-app-guide"],
    blocks: [
      {
        p: "네. ETA는 여권 하나에 연결되므로, 부모 무릎에 앉아 가는 아기를 포함해 가족 모두에게 각자의 ETA가 필요합니다.",
      },
      { h2: "아이 몫을 신청하는 방법" },
      {
        p: "신청은 아이 본인의 이름으로, 아이 본인의 여권을 사용해 합니다. 부모나 보호자가 대신 진행할 수 있습니다. 공식 앱에서는 같은 기기로 신청하는 가족이 한꺼번에 제출하고 결제할 수 있으며, 다른 사람이 신청을 도울 때는 신청자와 실제로 함께 있어야 합니다.",
      },
      { h2: "먼저 여권을 확인하세요" },
      {
        p: `아이 여권은 어른 여권보다 유효기간이 짧게 발급되는 경우가 많습니다. ETA는 발급 기준이 된 여권에 묶여 있기 때문에, ${F.validMonths}개월의 유효기간 중에 만료되는 여권은 나중에 문제가 되기 쉽습니다.`,
      },
      { h2: "아이가 한쪽 부모나 다른 사람과 여행하는 경우" },
      {
        p: "호주 국경에서 동의 관계에 대해 질문을 받을 수 있습니다. 함께 가지 않는 부모의 동의서와 양육권 관련 서류 사본을 지니는 것은 비자 요건은 아니지만, 예상되는 지연을 막아 줍니다.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "if-refused",
    enSlug: "if-your-application-is-refused",
    added: "2026-11-15",
    title: "호주 비자 신청이 승인되지 않았을 때 — 한국 여권 소지자가 확인할 점",
    description: "eVisitor를 잘못 신청했거나 ETA가 승인되지 않았을 때 무엇을 확인하고 무엇을 하지 말아야 하는지, 바로 다시 신청하면 안 되는 이유를 정리했습니다.",
    related: ["eta-common-mistakes", "eligible-passports", "eta-app-guide", "eta-vs-evisitor"],
    blocks: [
      {
        p: "신청 결과가 거절로 나왔다면, 다른 행동을 하기 전에 이유부터 파악하는 것이 중요합니다. 결정 통지에는 그 이유가 적혀 있습니다.",
      },
      { h2: "한국 여권으로 eVisitor를 신청했다면" },
      {
        p: "내무부 안내에 따르면 여권이 eVisitor 대상 목록에 없는 경우에는 ETA나 방문 비자(Visitor visa)가 맞는 경로일 수 있습니다. 한국 여권은 eVisitor 대상이 아니므로, 공식 앱에서 ETA(subclass 601)를 신청하십시오.",
      },
      { h2: "같은 신청을 그대로 다시 하지 마십시오" },
      {
        p: "같은 내용으로 다시 신청하면 대개 같은 결과가 나오며, 신청을 반복한 기록은 도움이 되지 않습니다. ETA도 마찬가지로, 내무부는 심사 회부(referral)가 된 뒤 앱에서 다시 신청해도 같은 결과가 나온다고 안내합니다.",
      },
      { h2: "자주 있는 이유" },
      {
        ul: [
          "입력한 정보가 여권과 정확히 일치하지 않았습니다. 이름, 번호, 날짜는 여권에 인쇄된 그대로 입력해야 합니다",
          "건강이나 범죄 경력에 관한 신고 사항 때문에 자동 결정이 아니라 심사가 필요해졌습니다",
        ],
      },
      { h2: "이미 항공권이 있다면" },
      {
        p: "공항에서 해결될 것이라 믿고 출발하지 마십시오. 유효한 비자가 없으면 탑승할 수 없습니다. 올바른 신청을 준비하는 동안 항공사에 날짜 변경을 문의하십시오.",
      },
      {
        note: `거절과 취소는 다릅니다. 이미 가지고 있는 비자가 취소되면, 이후 신청에 최대 ${F.visaCancelExclusionYears}년의 제한 기간이 적용될 수 있습니다.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    enSlug: "travel-authorisations-compared",
    added: "2026-11-15",
    title: "어떤 전자 여행 허가가 필요할까? 호주 ETA·eVisitor·NZeTA·K-ETA·ESTA 비교",
    description: "이름은 비슷해도 규칙은 전혀 다릅니다. 어느 나라에 어떤 제도가 적용되는지, 비용은 어떤지, 혼동하면 생기는 실수를 정리했습니다.",
    related: ["eta-vs-evisitor", "eligible-passports", "eta-cost"],
    blocks: [
      {
        p: "전자 여행 허가는 겉으로 보면 다 비슷해 보이지만 그렇지 않습니다. 나라마다 자체 제도를 운영하며, 대상 목록도, 비용도, 그 문서가 무엇인지에 대한 정의도 다릅니다. 비자인 것도 있고, 비자가 아니라고 명시한 것도 있습니다.",
      },
      {
        p: `이 페이지는 무엇이 무엇인지를 정리한 지도입니다. 호주의 경우 한국 여권 소지자에게 해당하는 제도는 ETA(subclass 601)이며, 비용은 ${F.etaFee}입니다.`,
      },
      {
        note: "어디서나 통하는 원칙이 하나 있습니다. 신청은 정부의 공식 창구에서 하며, 어떤 대행사도 결정을 앞당길 수 없습니다. 공식 비용의 몇 배를 받는 사이트는 같은 양식을 대신 작성해 줄 뿐입니다.",
      },
      { h2: "호주 — eVisitor 또는 ETA" },
      {
        p: `eVisitor(subclass 651)는 비자이며 무료입니다. 다만 유럽 여권 전용이라 한국 여권은 대상이 아닙니다. eVisitor 목록에 없는 여권의 여행자는 ETA(subclass 601)를 이용하며, 비용은 ${F.etaFee}이고 공식 앱에서 신청합니다. 두 비자 모두 1회 최대 ${F.stayMonths}개월 체류할 수 있고 ${F.validMonths}개월간 유효합니다.`,
      },
      { h2: "뉴질랜드 — NZeTA" },
      {
        p: "비자 면제 여권을 위한 사전 여행 허가로, 비자가 아닙니다. 비용은 신청 수수료와 별도의 자연보호·관광 부담금 두 부분으로 되어 있어, 출처마다 안내하는 합계가 다릅니다.",
      },
      { h2: "대한민국 — K-ETA" },
      {
        p: "한국을 방문하는 외국인을 위한 제도입니다. 현재 많은 국적이 일시적으로 K-ETA를 면제받고 있으므로, 외국인 일행이 있다면 신청 방법보다 먼저 K-ETA가 필요한지부터 확인하는 것이 순서입니다.",
      },
      { h2: "영국 — ETA" },
      {
        p: "영국, 저지, 건지, 맨섬을 최대 6개월 방문하는 경우에 적용됩니다. GOV.UK는 비용을 £20로 안내합니다. 공식 서비스에서 신청합니다.",
      },
      {
        source: {
          label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
          url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
        },
      },
      { h2: "미국 — ESTA, 캐나다 — eTA" },
      {
        p: "두 나라 모두 비자 면제 여행자를 위한 비슷한 제도를 운영합니다. 이 페이지를 작성할 때 현재 금액을 공식 출처에서 확인하지 못했기 때문에 비용은 싣지 않았습니다. 오래된 금액은 없는 것보다 나쁩니다. 공식 사이트에서, 반드시 공식 사이트에서만 직접 확인하십시오.",
      },
      {
        ul: [
          "미국: esta.cbp.dhs.gov",
          "캐나다: canada.ca(캐나다 이민난민시민권부, IRCC)",
        ],
      },
      { h2: "실제로 돈을 날리게 되는 실수" },
      {
        ul: [
          "허가 하나로 여러 나라 여행이 해결된다고 생각하는 것. 목적지마다 따로이며, 공항 밖으로 나가는 경유지도 마찬가지입니다.",
          "비자라고 생각하는 것. 비자인 것도 있고 아닌 것도 있으며, 그 차이가 현지에서 할 수 있는 일을 정합니다.",
          "안내된 금액이 전부라고 생각하는 것. 별도의 부담금을 더하거나 신청 방법에 따라 금액이 달라지는 제도도 있습니다.",
          "유료 대행을 거치면 더 빠르다고 믿는 것. 같은 양식, 같은 결정입니다.",
        ],
      },
      { h2: "요약이 아니라 내 여권으로 확인하세요" },
      {
        p: "대상 목록은 바뀌며, 여권이 두 개라면 답도 두 가지인 경우가 많습니다. 위의 모든 제도는 공식 확인 방법을 공개하고 있습니다. 실제로 여행할 때 사용할 여권으로 확인하십시오.",
      },
    ],
  },
];
