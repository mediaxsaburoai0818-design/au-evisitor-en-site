import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";
const DECISION = "幾分鐘到幾天"; // = F.decisionTypical（表示用）

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって zh-tw 版に無かった話題。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ 読者＝台湾パスポート保持者＝ETA（subclass 601）。eVisitor の申請を勧めない。
 *    英語の eVisitor 手順ページは ETA 向けに書き換えたものだけを載せる。
 */
const CHECKED = "2026年11月15日";

export const zhTwGuides: Article[] = [
  {
    slug: "eta-eligible-passports",
    enSlug: "eligible-passports",
    added: "2026-11-15",
    checked: CHECKED,
    title: `哪些護照適用 eVisitor？${F.eligibleCountries} 國名單，以及台灣護照為什麼走 ETA`,
    description: `eVisitor 只開放給歐洲 ${F.eligibleCountries} 國的公民。完整名單、不適用的英國護照類型，以及台灣護照所屬的 ETA（subclass 601）名單。`,
    related: ["eta-vs-evisitor", "taiwan-passport-australia-visa", "eta-transit", "eta-app-guide"],
    blocks: [
      {
        p: `先說結論：台灣護照不在 eVisitor（subclass 651）的名單上，而是在 ETA（subclass 601）的名單上。eVisitor 的資格取決於您的國籍與所持護照，而不是居住地。澳洲內政部（Department of Home Affairs）表示，申請人必須是 ${F.eligibleCountries} 個國家之一的公民，並持有該國的有效護照。`,
      },
      { h2: `eVisitor 的 ${F.eligibleCountries} 個國家` },
      {
        p: "安道爾、奧地利、比利時、保加利亞、克羅埃西亞、賽普勒斯、捷克、丹麥、愛沙尼亞、芬蘭、法國、德國、希臘、匈牙利、冰島、愛爾蘭、義大利、拉脫維亞、列支敦斯登、立陶宛、盧森堡、馬爾他、摩納哥、荷蘭、挪威、波蘭、葡萄牙、羅馬尼亞、聖馬利諾共和國、斯洛伐克、斯洛維尼亞、西班牙、瑞典、瑞士、英國（僅限英國公民 British Citizen 護照）與梵蒂岡。",
      },
      { h2: "不適用 eVisitor 的護照" },
      {
        ul: [
          "英國只有英國公民（British Citizen）護照列在名單上",
          "英國國民（海外）護照 BN(O)、英國屬土公民（British Dependent Territories Citizen）、英國海外公民（British Overseas Citizen）、英國受保護人（British Protected Person）與英國臣民（British Subject）護照都不能使用",
          "非公民護照、身分證明書（certificate of identity）或 Titre de Voyage 等其他旅行文件都不能使用",
          "梵蒂岡的護照必須載明持有人為梵蒂岡（教廷）國民",
        ],
      },
      { h2: "台灣護照適用的 ETA 名單" },
      {
        p: `ETA（subclass 601）有自己的名單，共 ${F.etaEligibleCountries} 種護照。其中包括汶萊、加拿大、香港（中國香港特別行政區）、日本、馬來西亞、新加坡、韓國、台灣（公務護照或外交護照除外）、美國，以及英國國民（海外）BN(O) 護照等。ETA 的費用是 ${F.etaFee}，屬於使用官方 App 的服務費。兩份名單都不在其上的護照，可能可以申請訪客簽證（subclass 600）。`,
      },
      {
        note: "持台灣公務護照或外交護照的人不在 ETA 的適用範圍內，請改查其他簽證。",
      },
      { h2: "同時列在兩份名單上的護照" },
      {
        p: `依我們比對兩份官方名單的結果，有 ${F.bothListsCountries} 種護照同時出現在兩份名單上。其餘 ${F.eligibleCountries - F.bothListsCountries} 個 eVisitor 國家不在 ETA 名單上：保加利亞、克羅埃西亞、賽普勒斯、捷克、愛沙尼亞、匈牙利、拉脫維亞、立陶宛、波蘭、羅馬尼亞、斯洛伐克與斯洛維尼亞。對於兩份名單都有的護照，ETA 的說明頁寫的是歐洲護照持有人「可能符合」eVisitor 資格，且申請 eVisitor 不收費。這一點與台灣護照無關，但若您另持歐洲國家的護照，值得留意。`,
      },
      { h2: "其他需要注意的情形" },
      {
        ul: [
          "澳洲公民即使另持名單上的護照，也不能申請 eVisitor 或 ETA——入境澳洲不需要簽證",
          "全家出遊時，每位成員都需要各自的申請，包括登記在父母護照上的兒童",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "名單可能變動。申請前，請以您實際要持用的那一本護照，到官方頁面確認。",
      },
    ],
    faq: [
      {
        q: "持英國國民（海外）BN(O) 護照，可以申請 eVisitor 嗎？",
        a: "不行。BN(O) 護照被排除在 eVisitor 之外，而是列在 ETA（subclass 601）的名單上。",
      },
      {
        q: "我住在歐洲，但持台灣護照，可以申請 eVisitor 嗎？",
        a: "不行。eVisitor 要求申請人是名單上國家的公民，並持有該國的有效護照，居住地不會改變這一點。台灣護照請申請 ETA。",
      },
    ],
  },
  {
    slug: "eta-transit",
    enSlug: "transit",
    added: "2026-11-15",
    checked: CHECKED,
    title: `經澳洲轉機：${F.twovHours} 小時規則與過境簽證（subclass 771）`,
    description: `即使只是轉機，也需要簽證或許可。持 ETA 時的情形、${F.twovHours} 小時免簽過境的條件，以及 ${F.transitVisaHours} 小時的過境簽證。`,
    related: ["eta-eligible-passports", "airport-security-liquids", "major-airports", "eta-vs-evisitor"],
    blocks: [
      {
        p: "澳洲內政部表示，所有非澳洲公民入境澳洲都需要簽證或許可，包括短暫停留的旅客，以及不離開機場、只在過境區轉機的旅客。取得這項許可的方式有三種。",
      },
      { h2: "1. 已持有 ETA（或符合申請資格）" },
      {
        p: "內政部把 eVisitor、ETA、訪客簽證（Visitor visa）與 APEC 商務旅行卡列為可以經澳洲過境的簽證，而且這些簽證也允許較長的停留。如果您的行程包含在澳洲轉機，持台灣護照取得的 ETA 就能涵蓋。",
      },
      { h2: "2. 免簽證過境（TWOV）" },
      {
        p: "只有在以下條件全部符合時，才可以不持簽證過境：",
      },
      {
        ul: [
          "搭乘飛機抵達澳洲",
          `持有已確認的機票，會在抵達後 ${F.twovHours} 小時內搭機離開澳洲、前往第三國`,
          "持有可進入目的地國家的有效旅行證件",
          "在搭乘下一班飛機之前，不需要因任何理由辦理入境查驗或離開機場的過境區",
          "所持護照的國家列在 TWOV 名單上",
        ],
      },
      {
        p: "依我們比對兩份官方名單的結果，eVisitor 名單上的國家全都在 TWOV 名單上，而 TWOV 名單還涵蓋其他國家。台灣護照是否適用，請以內政部的 TWOV 名單為準。內政部也表示，這些資訊不適用於無國籍人士與難民。",
      },
      { h2: "必須辦理入境查驗的情況" },
      {
        p: "內政部舉出的常見例子是：需要領取並重新託運行李，以及下一班飛機要從不同的航廈出發。辦理入境查驗就必須持有簽證。內政部建議，若仍無法確定自己是否符合 TWOV，可以考慮先申請簽證以防萬一。",
      },
      { h2: "3. 過境簽證（subclass 771）" },
      {
        ul: [
          `適用於經澳洲過境、且不超過 ${F.transitVisaHours} 小時的情形`,
          "免費",
          "每位旅客都需要各自申請，包括登記在父母護照上的嬰兒",
          "申請時與審核結果做出時，都必須人在澳洲境外",
        ],
      },
      {
        note: "內政部提醒：若您已持有澳洲簽證，取得過境簽證很可能會讓原本的簽證失效。ETA 本身就允許過境，持有 ETA 時不需要另外申請。",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "在雪梨轉機要等 10 小時，可以免簽證過境嗎？",
        a: `不適用 TWOV，因為 TWOV 要求在抵達後 ${F.twovHours} 小時內搭上已確認的下一班飛機。您需要簽證——台灣護照可申請 ETA，或申請過境簽證（subclass 771）。`,
      },
      {
        q: "每個機場都有過境區嗎？",
        a: "內政部有公布澳洲各機場過境設施的說明頁。請就您要使用的機場，查看該頁並向航空公司確認。",
      },
    ],
  },
  {
    slug: "eta-official-site",
    enSlug: "official-site",
    added: "2026-11-15",
    checked: CHECKED,
    title: "澳洲簽證的官方管道：ETA 官方 App、ImmiAccount 與詐騙辨識",
    description: "台灣護照申請 ETA 只能用內政部的官方 App；其他簽證則在 ImmiAccount 申請。官方網址，以及內政部公布的詐騙警訊。",
    related: ["eta-app-guide", "eta-cost", "eta-status-check", "eta-common-mistakes"],
    blocks: [
      {
        p: "澳洲內政部（Department of Home Affairs）把 ImmiAccount 稱為其移民入口網站，也是「申請澳洲簽證時唯一應使用的官方網站」。不過，台灣護照持有人要申請的 ETA（subclass 601）不在網站上辦理，而是必須使用內政部發行的官方 App（Australian ETA）。若無法使用 App，內政部表示可以透過 ImmiAccount 申請其他合適的簽證。",
      },
      { h2: "官方網址與 App" },
      {
        ul: [
          "簽證資訊：immi.homeaffairs.gov.au",
          "ImmiAccount 登入與申請：online.immi.gov.au",
          "Australian ETA App（僅限 ETA）：發行者為澳洲內政部（Department of Home Affairs）",
        ],
      },
      { h2: "官方管道的費用" },
      {
        p: `ETA 沒有簽證申請費，但使用官方 App 須支付 ${F.etaFee} 的申請服務費，且不予退還。除此之外，官方沒有其他費用。`,
      },
      { h2: "內政部公布的詐騙警訊" },
      {
        ul: [
          "自稱來自澳洲內政部、但寄件地址不是以 .gov.au 結尾的電子郵件，就是詐騙",
          "若有人要求您為了核發簽證另付費用（有時稱為「CIS charge」），請立即離開——澳洲政府不會為了核發簽證收取額外費用",
          "若有人不讓您在 ImmiAccount 查看自己的申請，代表對方有事隱瞞",
          "在 VEVO（Visa Entitlement Verification Online）查不到的簽證核發信，很可能是偽造的",
          "內政部人員打電話時一定會表明身分，而且絕不會詢問信用卡資料或密碼",
          "只透過澳洲政府的官方管道辦理：內政部網站、澳洲生物特徵採集中心（Australian Biometric Collection Centres），或您所在國家的澳洲高級專員公署、大使館或領事館",
        ],
      },
      { h2: "請別人代為申請時" },
      {
        p: "ImmiAccount 可以由申請人本人、代表申請人的家人，或協助申請的朋友建立。內政部表示，在澳洲，除非是登記的移民代理人（registered migration agent）或澳洲執業律師，第三方收費提供移民協助是違法的；而且即使由他人送出申請，您仍須自行確認簽證的條件。ETA 的部分，內政部表示可以有人協助您在 App 上申請，但協助者必須實際在您身邊。",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "本站為獨立資訊網站，並非政府網站。我們不受理申請，也不收取任何費用。",
      },
    ],
  },
  {
    slug: "customs-allowances",
    enSlug: "customs-allowances",
    added: "2026-11-15",
    title: "澳洲入境免稅額度：一般商品、酒類與菸草",
    description: `成年人可免稅攜帶 ${F.customsGoodsAllowance} 的一般商品、${F.customsAlcoholLitres} 公升酒類與 ${F.customsTobaccoGrams} 公克菸草。超過額度就必須申報。`,
    related: ["arriving-in-australia", "money-and-tipping", "tourist-refund-scheme", "smoking-vaping-and-alcohol"],
    blocks: [
      {
        p: "海關（customs）與生物安全（biosecurity）是兩道不同的檢查。生物安全看的是物品會不會對澳洲構成風險；海關看的是這件物品是否須繳納關稅與稅金。通過其中一道，仍可能在另一道被攔下。",
      },
      { h2: "免稅額度" },
      {
        ul: [
          `一般商品：年滿 ${F.customsAgeMin} 歲為 ${F.customsGoodsAllowance}，未滿 ${F.customsAgeMin} 歲為 ${F.customsGoodsAllowanceMinor}`,
          `酒類：${F.customsAlcoholLitres} 公升，限年滿 ${F.customsAgeMin} 歲`,
          `菸草：任何形式合計 ${F.customsTobaccoGrams} 公克，另加一包已開封的菸，限年滿 ${F.customsAgeMin} 歲`,
        ],
      },
      { h2: "常見的誤解" },
      {
        ul: [
          "入境途中購買的免稅品，同樣計入免稅額度",
          "禮物也要計入——看的是您攜帶物品的價值，而不是您為自己付了多少錢",
          "家人之間未必能如想像般合併額度；依賴這一點之前請先確認",
        ],
      },
      { h2: "超過額度時" },
      {
        p: "請申報並出示購買證明，以便計算應繳的關稅與稅金。未申報超過免稅額度的物品，可能遭到罰款、起訴，或被取消簽證。申報只是繳納應繳的金額而已。",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: `現金在邊境也有申報規定：現金及旅行支票等票據合計價值達 ${F.cashReportThreshold} 以上，就必須申報——申報方式請見「澳洲的錢」那一頁。`,
      },
    ],
  },
  {
    slug: "eta-if-refused",
    enSlug: "if-your-application-is-refused",
    added: "2026-11-15",
    title: "ETA 申請沒有通過時，該怎麼辦？",
    description: "沒有通過會改變您接下來該做的事。該確認什麼、不該做什麼，以及為什麼立刻重新申請通常不是好方法。",
    related: ["eta-common-mistakes", "eta-app-guide", "eta-status-check", "eta-vs-evisitor"],
    blocks: [
      {
        p: `大多數申請會在${DECISION}內有結果。如果您的 ETA 沒有通過，最重要的是在採取任何行動之前，先弄清楚原因。`,
      },
      { h2: "不要直接重新申請" },
      {
        p: "以相同內容再送一次，通常會得到相同的結果，反覆申請的紀錄對您也沒有幫助。內政部的 ETA 說明頁也指出：申請被轉介（referral）之後，再用 App 送出 ETA 申請，只會得到相同的結果。請先仔細看清楚通知的內容。",
      },
      { h2: "常見的原因" },
      {
        ul: [
          "護照不在 ETA 的名單上——例如台灣的公務護照或外交護照不在 ETA 的適用範圍內。這種情況下，訪客簽證（subclass 600）可能才是正確的途徑",
          "填寫的資料與護照不完全一致。姓名、號碼與日期都必須與護照上印的相同",
          "健康或品行方面的申報需要人工審查，無法自動做出決定",
        ],
      },
      { h2: "已經訂好機票時" },
      {
        p: "不要以為到了機場就能解決而照常出發。沒有有效的簽證，航空公司不會讓您登機。在辦妥正確的申請之前，請先向航空公司洽詢更改日期。",
      },
      {
        note: `申請沒有通過與簽證被取消是兩回事。若是已持有的簽證被取消，日後的申請可能適用最長 ${F.visaCancelExclusionYears} 年的禁止期間。`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    enSlug: "travel-authorisations-compared",
    added: "2026-11-15",
    title: "該申請哪一種電子旅行許可？NZeTA、澳洲 ETA、K-ETA、ESTA 等一次比較",
    description: "名稱相似，規則卻大不相同。各制度適用於哪個目的地、費用多少，以及混淆時常犯的錯誤。",
    related: ["eta-vs-evisitor", "eta-cost", "eta-official-site"],
    blocks: [
      {
        p: "從外觀看，各國的電子旅行許可好像都差不多，其實不然。每個國家都有自己的制度、自己的適用名單、自己的價格，連「這份文件到底是什麼」的定義都不同——有些是簽證，有些則明確表示不是簽證。",
      },
      {
        p: `本頁整理各制度的對應關係。前往澳洲時，台灣護照適用的是 ETA（subclass 601），費用 ${F.etaFee}。`,
      },
      {
        note: "有一條規則到哪裡都適用：在政府自己的網站或 App 申請，沒有任何代辦業者能讓結果更快出來。收費是官方數倍的網站，填的是同一份表格。",
      },
      { h2: "澳洲——eVisitor 或 ETA" },
      {
        p: `eVisitor（subclass 651）是簽證，而且免費（${F.fee}），但只開放給 eVisitor 名單上的護照。台灣護照不在名單上，要改用 ETA（subclass 601），費用 ${F.etaFee}，須透過官方 App 申請。兩者都允許每次最多停留 ${F.stayMonths} 個月，效期都是 ${F.validMonths} 個月。`,
      },
      { h2: "紐西蘭——NZeTA" },
      {
        p: "這是給免簽證護照持有人的出發前旅行許可，不是簽證。費用分成兩部分：申請費，以及另外收取的國際旅客保育及觀光稅，因此各處引用的總額會不一樣。",
      },
      { h2: "韓國——K-ETA" },
      {
        p: "目前有許多國籍暫時免除 K-ETA，所以第一個問題是您到底需不需要，而不是怎麼申請。",
      },
      { h2: "英國——ETA" },
      {
        p: "適用於前往英國、澤西島、根西島與曼島、最長 6 個月的造訪。GOV.UK 標示的費用為 £20，透過官方服務申請。",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "美國——ESTA，以及加拿大——eTA" },
      {
        p: "兩國都為免簽證旅客設有類似的制度。本頁不列出它們的費用，因為撰寫時我們無法對照官方資料確認目前的金額，而過時的價格比沒有價格更糟。請直接查看官方網站——而且只看官方網站。",
      },
      {
        ul: [
          "美國：esta.cbp.dhs.gov",
          "加拿大：canada.ca（加拿大移民、難民及公民部 IRCC）",
        ],
      },
      { h2: "真正讓人多花錢的錯誤" },
      {
        ul: [
          "以為一份許可就能涵蓋多國行程。每個目的地都是分開的，轉機時若會離開機場也一樣。",
          "以為它就是簽證。有些是，有些不是，而這個差別決定了您抵達後能做什麼。",
          "以為標價就是全部。有些制度另外加收稅費，或依申請方式不同而收取不同金額。",
          "以為透過付費代辦會比較快。表格相同，審核也相同。",
        ],
      },
      { h2: "看您自己的護照，而不是別人的整理" },
      {
        p: "適用名單會變動，持有兩本護照時，答案也常常不同。上面每個制度都有官方的查詢方式，請以您實際要持用的那一本護照查詢。",
      },
    ],
  },
  /* ── 2026-11-15 追加分その2（コーディネーター指示: 束ねページ・FAQ一行は「網羅」と数えない）── */
  {
    slug: "eta-three-months-per-visit",
    enSlug: "three-months-per-visit",
    added: "2026-11-15",
    title: `ETA 的「每次 ${F.stayMonths} 個月」實際上怎麼算`,
    description: `ETA 效期 ${F.validMonths} 個月，但每次停留以 ${F.stayMonths} 個月為上限。這兩個數字是分開計算的，混為一談是規劃行程時常見的錯誤。`,
    related: ["arriving-in-australia", "public-holidays", "driving-in-australia"],
    blocks: [
      {
        p: `ETA（subclass 601）自核發日起 ${F.validMonths} 個月內有效，期間內可以多次入境。但它不代表您可以連續在澳洲待 ${F.validMonths} 個月——每一次的停留都以 ${F.stayMonths} 個月為上限。`,
      },
      { h2: "兩個時鐘，而不是一個" },
      {
        ul: [
          `簽證效期——${F.validMonths} 個月，從核發日起算，不是從第一次入境起算`,
          `每次停留——${F.stayMonths} 個月，從每一次抵達起算`,
          "入境次數——效期內可多次入境",
        ],
      },
      {
        p: `所以 1 月核發的簽證，不論有沒有使用，都會在隔年 1 月到期。如果您在 12 月入境，仍然可以停留 ${F.stayMonths} 個月，但簽證到期後就不能再入境。`,
      },
      { h2: `這 ${F.stayMonths} 個月不包括的事` },
      {
        ul: [
          "受僱於澳洲雇主工作",
          `超過 ${F.studyMonths} 個月的進修`,
          "保證入境——是否准許入境由邊境人員決定",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `人在澳洲境內重新申請，並不是延長停留的方法。若一次需要停留超過 ${F.stayMonths} 個月，請在出發前查看訪客簽證（subclass 600）。`,
      },
    ],
  },
  {
    slug: "eta-leaving-and-returning",
    enSlug: "leaving-and-returning",
    added: "2026-11-15",
    title: `離開澳洲再回來，可以重新計算 ${F.stayMonths} 個月嗎？`,
    description: `每次入境都會重新開始計算 ${F.stayMonths} 個月，但連續短暫出入境會引來詢問，邊境人員也可以拒絕入境。`,
    related: ["arriving-in-australia", "tourist-refund-scheme", "airport-security-liquids"],
    blocks: [
      {
        p: `每一次抵達都會開始新的、最長 ${F.stayMonths} 個月的停留期間。所以在 ETA 仍有效時去一趟紐西蘭或峇里島再回來，確實會讓每次停留的計算重新開始。`,
      },
      { h2: "但這是訪客簽證" },
      {
        p: `ETA 是以「您是來訪」為前提核發的。一年 ${F.validMonths} 個月中有 9 個月待在澳洲、每次只短暫離開的人，並不是在造訪，而是持訪客簽證住在澳洲。邊境人員看的是您護照上整體的出入境模式，而不只是這一次入境。`,
      },
      { h2: "再次入境時可能被要求出示的東西" },
      {
        ul: [
          "離境或回程機票",
          "足以支應停留期間生活的資金",
          "您會回國的證明：工作、學業、租約、家人",
          "這麼快又回來的理由",
        ],
      },
      { h2: "如果被拒絕入境" },
      {
        p: "有效的簽證是讓您可以前往澳洲的許可，不是入境的保證。如果邊境人員不認為您是真正的訪客，簽證可能在邊境被取消，您也可能被安排搭下一班可用的班機離開。這筆紀錄會跟著您，影響日後的申請。",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `ETA 一到期就不能再用——也就是核發後 ${F.validMonths} 個月。若要在這段期間快結束時安排再次來澳，訂票前請先確認核發日期。`,
      },
    ],
  },
  {
    slug: "border-questions",
    enSlug: "border-questions",
    added: "2026-11-15",
    title: "抵達澳洲時會被問什麼",
    description: "入境查驗、海關與生物安全是三道不同的檢查，各自問不同的問題。分清楚哪一道問什麼，排隊就會快很多。",
    related: ["arriving-in-australia", "smartgate-australia", "bringing-medicines"],
    blocks: [
      {
        p: "入境旅客要通過的不是一道、而是三道檢查。它們由不同的單位負責，關心的事情也不同。拿錯誤的答案回答錯誤的那一道，正是讓人卡住的原因。",
      },
      { h2: "1. 入境查驗——您是不是真正的訪客" },
      {
        ul: [
          "停留多久、住在哪裡",
          "是否持有離境或回程機票",
          "旅費從哪裡來",
          "是否打算工作——持 ETA 不可以工作",
        ],
      },
      { h2: "2. 海關——是否須繳關稅" },
      {
        p: `超過免稅額度的物品，以及達到申報基準的現金，都必須申報。一般商品的免稅額度，年滿 ${F.customsAgeMin} 歲為 ${F.customsGoodsAllowance}（未滿 ${F.customsAgeMin} 歲為 ${F.customsGoodsAllowanceMinor}）。`,
      },
      { h2: "3. 生物安全——行李裡有什麼" },
      {
        p: "沒有準備的旅客，最常在這一道被攔下。澳洲會詢問食品、植物與動物製品，以及任何接觸過泥土或淡水的物品。申報不會讓您損失什麼；不申報則可能讓您失去簽證。",
      },
      { h2: "入境旅客卡（Incoming Passenger Card）" },
      {
        p: "海關與生物安全的回答，要寫在降落前填好的入境旅客卡上。請認真填寫：這張卡是具法律效力的申報，若人員在您的行李中發現未申報的物品，這張卡就會被當作您聲稱沒有攜帶的證據。",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: "不確定某樣東西要不要申報時，就勾「是」，讓人員判斷。申報了結果發現可以攜帶的物品，不會受到任何處罰。",
      },
    ],
  },
  {
    slug: "biosecurity",
    enSlug: "biosecurity",
    added: "2026-11-15",
    title: "澳洲生物安全：該申報什麼，以及為什麼簽證可能被取消",
    description: `未申報生物安全物品，罰款最高可達 ${F.biosecurityPenaltyUnits} 個罰款單位；對簽證持有人而言，還可能被取消簽證並禁止入境 ${F.visaCancelExclusionYears} 年。`,
    related: ["arriving-in-australia", "bringing-medicines", "smartgate-australia"],
    blocks: [
      {
        p: "澳洲是一座想要保護自身農業的島嶼，因此生物安全規定非常嚴格，而且是在機場現場執行，不是事後在辦公室處理。把申報當成形式的旅客，正是會被抓到的人。",
      },
      { h2: "罰則" },
      {
        p: `未申報物品的違規通知（infringement notice），罰款最高可達 ${F.biosecurityPenaltyUnits} 個罰款單位（penalty units）。⚠️ 每個罰款單位的金額由法律訂定，並會定期調升：主管機關的頁面寫的是 ${F.biosecurityPenaltyUnits} 個單位為 ${F.biosecurityFineDaff}，而宣布 2023 年調整的部長新聞稿則把同樣 ${F.biosecurityPenaltyUnits} 個單位算為 ${F.biosecurityFineIndexed}。依賴這個數字之前，請先到官方頁面確認目前的金額。`,
      },
      { h2: "對簽證持有人來說，罰款還不是最糟的" },
      {
        p: `收到違規通知的旅客，可能被移交審查是否取消簽證。簽證被取消，就會被安排搭最早可用的班機離開澳洲，並在 ${F.visaCancelExclusionYears} 年的禁止期間內不能再申請。`,
      },
      { h2: "實際上會被查到的東西" },
      {
        ul: [
          "任何食品——包括飛機上發的點心",
          "肉類、乳製品、蛋、蜂蜜，以及含有這些成分的東西",
          "新鮮蔬果、種子、堅果",
          "植物材料——木製品、編織品、花",
          "沾有泥土或植物的登山鞋、帳篷與運動用品",
          "在動物周圍或淡水中使用過的任何物品",
        ],
      },
      { h2: "打包之前" },
      {
        ul: [
          "在家裡就把鞋子與裝備上的泥土清乾淨，而不是在排隊時才處理",
          "降落前把食物吃完或丟掉",
          "木製與編織的紀念品要申報——它們是風險物品，不是普通的小玩意",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "生物安全檢查點之前設有棄置箱，使用免費。申報「沒有」之後才被查到物品，就不是免費的了。",
      },
    ],
  },
  {
    slug: "eta-work-and-study",
    enSlug: "working-and-studying",
    added: "2026-11-15",
    title: `持 ETA 不能做的事：工作，以及超過 ${F.studyMonths} 個月的進修`,
    description: `ETA 是訪客簽證。不允許受僱於澳洲雇主，進修最長 ${F.studyMonths} 個月。`,
    related: ["arriving-in-australia", "healthcare-for-visitors", "eta-validity-and-stay"],
    blocks: [
      {
        p: `ETA 用手機就能申請、而且很快就有結果，有些人因此把它當成可以在 ${F.stayMonths} 個月內隨意做任何事的輕鬆許可。並不是這樣。它是附帶條件的訪客簽證，而這些條件會被確實執行。`,
      },
      { h2: "工作" },
      {
        p: "您不可以受僱於澳洲雇主。商務訪問與工作是兩回事：參加會議、洽商或出席研討會，一般沒有問題；由澳洲企業付錢請您做一份工作，則不行。",
      },
      { h2: "為海外雇主遠距工作" },
      {
        p: "替您在海外（例如台灣）原本的雇主遠距工作，屬於灰色地帶，要看具體情況而定，不是資訊網站可以替您下結論的。如果您的行程取決於這個答案，訂票前請先向澳洲內政部確認。",
      },
      { h2: "進修" },
      {
        p: `進修以 ${F.studyMonths} 個月為上限。短期課程可以，一整個學期則不行。較長期的就學需要學生簽證，且須在出發前申請。`,
      },
      { h2: "為什麼這比看起來更重要" },
      {
        p: `違反簽證條件可能導致簽證被取消、被遣送出境，以及最長 ${F.visaCancelExclusionYears} 年的禁止期間。弄錯的代價不是罰款，而是無法再回來。`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "eta-travelling-with-children",
    enSlug: "travelling-with-children",
    added: "2026-11-15",
    title: "孩子也需要自己的 ETA 嗎？",
    description: "每位旅客都需要自己的簽證，嬰兒也不例外。孩子不包含在父母的 ETA 裡，要以孩子本人的護照申請。",
    related: ["arriving-in-australia", "smartgate-australia", "healthcare-for-visitors"],
    blocks: [
      {
        p: "需要。ETA 與一本護照連結，所以每位家庭成員都需要自己的 ETA——包括坐在父母腿上搭機的嬰兒。",
      },
      { h2: "如何替孩子申請" },
      {
        p: "以孩子本人的名字、使用孩子本人的護照申請。內政部表示，在同一支手機上申請的家人，可以一起送出並一起付款；也可以有人協助申請，但協助者必須實際在申請人身邊。",
      },
      { h2: "先確認護照" },
      {
        p: `兒童護照的效期往往比成人短。護照若在 ETA ${F.validMonths} 個月的效期內到期，日後常會造成麻煩，因為簽證是綁定在核發時所用的那本護照上。`,
      },
      { h2: "孩子只跟父母其中一方、或跟其他人出遊時" },
      {
        p: "澳洲在邊境可能會詢問同意安排。攜帶未同行父母簽署的同意書，以及任何監護權相關文件的影本，雖然不是簽證要求，但可以避免可預期的延誤。",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
  {
    slug: "eta-passport-and-details",
    enSlug: "passport-and-details",
    added: "2026-11-15",
    title: "ETA 綁定在一本護照上——資料務必正確",
    description: "ETA 與申請時使用的護照連結。換發護照、姓名不一致或用錯國籍的護照，都會讓您在報到櫃台被擋下。",
    related: ["eta-common-mistakes", "eta-new-passport", "eta-app-guide"],
    blocks: [
      {
        p: "ETA 沒有貼紙，也沒有需要列印的文件。它是連結在護照號碼上的一筆紀錄，航空公司在您報到時會查詢這筆紀錄。如果您手上的護照不是紀錄上的那一本，簽證就等於不存在。",
      },
      { h2: "換了新護照，就要重新申請" },
      {
        p: "內政部的 ETA 說明頁指出：換發新護照後，原本的 ETA 就會失效，必須重新申請。即使原本的 ETA 還在效期內也一樣。請在出發前以新護照重新申請。",
      },
      { h2: "資料必須與護照完全一致" },
      {
        p: "內政部表示，ETA 上的資料必須與護照完全相符，而且 ETA 核發之後，內政部無法更改這些資料。官方 App 會讀取護照來預先填入資料，但若有您自己修改或輸入的欄位，請逐項核對：",
      },
      {
        ul: [
          "姓名以護照機器可讀區（MRZ）的寫法為準，而不是您平常的寫法",
          "護照號碼逐字核對——數字 0 與字母 O、數字 1 與字母 I",
          "國籍以護照上的記載為準，而不是居住地",
        ],
      },
      { h2: "持有雙重國籍時" },
      {
        p: "請持用 ETA 所綁定的那一本護照出行。另外持有其他國籍不會讓您失去資格，但在報到時出示錯誤的護照就會出問題。",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: `ETA 的官方費用是 ${F.etaFee} 的 App 服務費。收費比這更高、說要替您送出申請的網站，是在官方費用上加收自己利潤的第三方，不是官方管道。`,
      },
    ],
  },
  {
    slug: "eta-new-passport",
    enSlug: "new-passport-after-approval",
    added: "2026-11-15",
    title: "ETA 核准後換了新護照，該怎麼辦？",
    description: "ETA 綁定在核發時使用的護照上。內政部表示，換發新護照後原本的 ETA 就會失效，必須以新護照重新申請。",
    related: ["eta-passport-and-details", "eta-common-mistakes", "eta-app-guide"],
    blocks: [
      {
        p: "護照到期換發、遺失後補發，或因改名而重新核發——這些情況下，常有人不確定原本的 ETA 還能不能用。答案是：ETA 不會自動轉移到新護照上。",
      },
      { h2: "實際上會發生什麼" },
      {
        p: "ETA 綁定在核發時使用的護照號碼上，航空公司與邊境系統查驗的是您出示的那本護照。內政部的 ETA 說明頁指出，換了新護照，原本的 ETA 就會失效，必須重新申請。",
      },
      { h2: "該怎麼做" },
      {
        ul: [
          "拿到新護照後，用官方 App 以新護照重新申請 ETA",
          `重新申請同樣需要支付 ${F.etaFee} 的 App 服務費`,
          "不要以為帶著舊護照、用原本的 ETA 就能出發",
        ],
      },
      {
        note: "新護照一拿到就處理，不要拖到機場。時間充裕時這只是例行手續，時間不夠時就會變成大問題。",
      },
      {
        note: "這一點與 eVisitor 不同。網路上若看到「換護照後通知內政部即可、不要重新申請」的說明，那是 eVisitor 的規定，不適用於台灣護照所持的 ETA。",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: F.officialUrl } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
    ],
  },
];
