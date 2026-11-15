import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 繁体字（/zh-tw/）の入国後実用ページ（ETA横展開バッチ3・2026-10-12）。
 * 読者＝台湾パスポート保持者（ETA subclass 601）。英語版 data/pages-practical.ts と事実は同一。
 * ⚠️ 台湾は相互医療協定（RHCA）の対象外 → 医療ページは保険を先頭に。
 * ⚠️ 数値は F 経由。スラッグは英語と同じ。
 */
export const zhTwPractical: PracticalPack = {
  ui: { faq: "常見問題", source: "資料來源", related: "相關頁面" },
  articles: [
    {
      slug: "arriving-in-australia",
      enSlug: "arriving-in-australia",
      title: "抵達澳洲之後：ETA 持有人的實用指南",
      description:
        "簽證只決定你能不能入境。SmartGate、現金、退稅、醫療、開車與緊急狀況，依澳洲官方資料逐項整理。",
      blocks: [
        {
          p: `台灣護照持有人使用的 ETA（subclass 601）只回答一件事：你能不能前往澳洲，並且每次最多停留 ${F.stayMonths} 個月。至於在機場會遇到什麼、可以帶什麼、怎麼付款、出事時該怎麼辦，簽證本身並不會告訴你。以下各頁就是在補這一塊，每一頁都對照了負責的澳洲政府單位，並附上連結。`,
        },
        { h2: "入境關口" },
        { links: ["smartgate-australia", "bringing-medicines"] },
        { h2: "錢的事" },
        { links: ["money-and-tipping", "tourist-refund-scheme"] },
        { h2: "交通與聯絡" },
        { links: ["driving-in-australia", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
        { h2: "健康與安全" },
        { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
        { h2: "搭機回國" },
        { links: ["airport-security-liquids"] },
        {
          note: "我們沒有寫的主題：大眾運輸。澳洲沒有全國統一的制度，每個城市都有自己的交通卡與票價規則（雪梨是 Opal、墨爾本是 myki、昆士蘭東南部是 go card）。請查詢你要前往城市的交通主管機關。",
        },
      ],
      related: ["smartgate-australia", "money-and-tipping", "healthcare-for-visitors"],
      faq: [
        {
          q: "拿到 ETA 之後，入境時還需要準備什麼？",
          a: "仍然要填寫紙本的入境旅客卡（Incoming Passenger Card），而且必須用英文填寫。使用 SmartGate 也一樣，詳見 SmartGate 那一頁。",
        },
        {
          q: "這些頁面的資料從哪裡來？",
          a: "每一頁都對照了負責該主題的澳洲政府單位（例如澳洲邊境部隊、Services Australia、TGA），並在頁尾列出資料來源連結。",
        },
      ],
      checked: "2026年10月12日",
      practical: false,
    },
    {
      slug: "smartgate-australia",
      enSlug: "smartgate-australia",
      title: `澳洲 SmartGate 自動通關：誰能用（${F.smartgateMinAge} 歲以上）、還需要什麼`,
      description: `澳洲邊境部隊試行中，入境 SmartGate 開放 ${F.smartgateMinAge} 歲以上、持有效護照的旅客使用。紙本入境旅客卡仍然必填。`,
      blocks: [
        {
          p: "SmartGate 是澳洲邊境部隊（Australian Border Force，ABF）在澳洲主要國際機場設置的自動查驗閘門。入境時，閘門會讀取護照、拍攝照片並比對臉部；比對成功就會印出一張票卡，你就可以通過。",
        },
        { h2: "哪些人可以使用入境 SmartGate" },
        {
          ul: [
            "持有有效護照",
            `身高至少 ${F.smartgateMinHeight}`,
            `年滿 ${F.smartgateMinAge} 歲`,
            `未滿 ${F.smartgateAccompanyUnder} 歲的兒童必須由父母或法定監護人陪同`,
          ],
        },
        {
          p: "過去必須持有晶片護照（封面有晶片標誌）才能使用。ABF 目前正在試行讓所有護照都能使用入境 SmartGate，所以沒有晶片的護照也可能可以通過。ABF 並沒有公布國籍名單：上面的條件看的是護照與旅客本身，而不是核發護照的國家。",
        },
        {
          note: "ETA 與 SmartGate 是兩回事。簽證決定你能不能登機和入境；SmartGate 只是查驗護照的方式。使用閘門不會改變你的簽證條件。",
        },
        { h2: "入境旅客卡（Incoming Passenger Card）仍然要填" },
        {
          p: "大多數旅客都必須填寫紙本的入境旅客卡（Incoming Passenger Card，IPC）。卡片會在機上或航廈內發放，而且必須用英文填寫。ABF 有公布翻譯版的範本（包含中文、韓文、德文、法文、荷蘭文、義大利文、西班牙文），可以用來看懂題目，但實際繳交的卡片要用英文作答。",
        },
        {
          p: "在出口處，把 SmartGate 印出的票卡和入境旅客卡一起交給邊境部隊或生物安全人員。數位版 Australia Travel Declaration：依 ABF 說明（截至 2026 年 11 月 15 日），其網頁表單僅適用於抵達西雪梨國際機場的航班；在其他澳洲機場入境者不應填寫。請依您的抵達機場查看 ABF 頁面。",
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "螢幕的語言" },
        {
          p: `入境 SmartGate 的螢幕以英文為主，另外可選 ${F.smartgateArrivalLanguages} 種語言，其中包含簡體中文與繁體中文，以及韓文、德文、荷蘭文、法文、義大利文、西班牙文。出境 SmartGate 的螢幕則有英文、日文、韓文與中文（普通話）。`,
        },
        { h2: "離開澳洲時" },
        {
          p: "持有效機器可讀護照的旅客都可以使用出境 SmartGate。但如果同行者需要協助才能依照指示操作（例如嬰兒或年幼兒童），就不能使用。",
        },
        { source: { label: "澳洲邊境部隊（Australian Border Force）— 誰可以使用入境 SmartGate", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "澳洲邊境部隊（Australian Border Force）— 出境 SmartGate", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "澳洲邊境部隊（Australian Border Force）— 入境旅客卡（Incoming Passenger Card）", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      related: ["arriving-in-australia", "bringing-medicines", "airport-security-liquids"],
      faq: [
        {
          q: "台灣護照可以使用 SmartGate 嗎？",
          a: `ABF 沒有公布國籍名單。入境 SmartGate 開放給持有效護照、年滿 ${F.smartgateMinAge} 歲且身高至少 ${F.smartgateMinHeight} 的旅客，ABF 也正在試行讓所有護照都能使用。`,
        },
        {
          q: "用了 SmartGate，還需要填入境旅客卡嗎？",
          a: "需要。出口處要把 SmartGate 票卡和填好的入境旅客卡一起交出。卡片必須用英文填寫。",
        },
        {
          q: "5 歲的孩子可以走 SmartGate 嗎？",
          a: `不行。入境 SmartGate 要求旅客年滿 ${F.smartgateMinAge} 歲。帶著更小孩子的家庭會由查驗人員人工辦理。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "airport-security-liquids",
      enSlug: "airport-security-liquids",
      title: `從澳洲搭機的液體規定：${F.lagsContainer} 原則與粉末限制`,
      description: `從澳洲搭國際線時，手提行李的液體、噴霧、凝膠須裝在 ${F.lagsContainer} 以下的容器並放入一個透明袋。無機粉末也有限制。`,
      blocks: [
        {
          p: "澳洲對國際線手提行李中的液體、噴霧、凝膠及部分粉末有限制。託運行李與大多數國內線不受這些限制。",
        },
        { h2: "什麼時候適用" },
        {
          ul: [
            "搭國際線離開澳洲時",
            "經澳洲轉機前往其他國家時",
            "從澳洲國際航廈出發的航班之國內段",
            "在飛往澳洲航班的最後一個停靠點登機前",
          ],
        },
        { h2: "液體、噴霧與凝膠" },
        {
          ul: [
            `每個容器須為 ${F.lagsContainer}（或 100 g）以下——容器較大時，即使只裝了一部分也不行`,
            `所有容器須放進一個透明、可重複密封的塑膠袋，袋子四邊長度合計不超過 ${F.lagsBagPerimeterCm} cm（例如 20 × 20 cm）`,
            "每位旅客一袋；可以替你照顧的人（包括兒童）攜帶他們的袋子",
            "噴霧罐必須有蓋子或鎖定裝置",
          ],
        },
        {
          p: "抹醬和軟質食品也算液體或凝膠。官方清單列出了 Vegemite、花生醬、蜂蜜和優格——這些伴手禮常常在安檢時被攔下。",
        },
        { h2: "粉末" },
        {
          p: `無機粉末——例如鹽、鹽浴磨砂、沙子及部分爽身粉——每個容器須為 ${F.powderLimit} 以下，每人合計也不得超過 ${F.powderLimit}。有機粉末如嬰兒奶粉、咖啡、蛋白粉、麵粉、香料和糖則沒有限制。安檢時可能會要求你把粉末另外拿出來。`,
        },
        { h2: "例外" },
        {
          ul: [
            "合理數量的嬰兒用品",
            "飛行途中需要的處方藥與非處方藥——可能需要出示證明，例如醫師信函",
            "醫療器材與醫療設備",
          ],
        },
        { h2: "免稅品" },
        {
          p: "在機場購買的免稅液體，必須留在原本封好、可辨識是否被拆開的袋子裡，並附上購買證明。",
        },
        { source: { label: "澳洲內政部（Department of Home Affairs，TravelSECURE）— 可攜帶與不可攜帶的物品", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      related: ["tourist-refund-scheme", "bringing-medicines", "arriving-in-australia"],
      faq: [
        {
          q: "澳洲國內線也有液體限制嗎？",
          a: "大多數國內線沒有。但從國際航廈出發的航班之國內段仍然適用。",
        },
        {
          q: "Vegemite 可以放手提行李嗎？",
          a: `只能是 ${F.lagsContainer} 以下的容器，並放在液體袋裡。較大的罐子請放託運行李。`,
        },
        {
          q: "嬰兒奶粉有限制嗎？",
          a: "奶粉屬於有機粉末，沒有限制。合理數量的嬰兒用品也不受液體限制。",
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "money-and-tipping",
      enSlug: "money-and-tipping",
      title: "澳洲的錢：現金、刷卡手續費、GST 與小費",
      description: `標價已含 ${F.gstPercent}% GST，自 2026年10月1日 起禁止加收刷卡手續費，小費隨意。現金 ${F.cashReportThreshold} 以上須申報。`,
      blocks: [
        {
          p: "澳洲使用澳幣（AUD）。付錢之前有幾條規則值得先知道——其中一條才剛改。",
        },
        { h2: "標價已經含稅" },
        {
          p: `商品及服務稅（GST）為 ${F.gstPercent}%，商家必須標示含稅的總價。你看到的價格就是結帳時要付的金額。`,
        },
        { h2: "不能再加收刷卡手續費" },
        {
          p: `自 2026年10月1日 起，商家不得再對使用 Visa、Mastercard、American Express 或 eftpos 卡（信用卡、簽帳金融卡或預付卡）的付款加收手續費。在那之前，許多咖啡店和計程車會對刷卡加收一定比例。如果現在被收了刷卡手續費，值得提出疑問。`,
        },
        {
          note: "週末與國定假日附加費是另一回事，目前仍然允許——有些咖啡店和餐廳會在週日與國定假日加收。你自己的發卡銀行也可能收取海外交易手續費，那是你和銀行之間的事。",
        },
        { h2: "小費" },
        {
          p: "澳洲旅遊局（Tourism Australia）表示小費是隨意的，在大多數場合不會被期待。在較高級的餐廳，服務好時給約 10% 是常見的做法。在咖啡店或計程車上不給小費，也不會失禮。",
        },
        { h2: `現金 ${F.cashReportThreshold} 以上必須申報` },
        {
          p: `攜帶進出澳洲的金額沒有上限。但若你攜帶的現金及旅行支票、支票、匯票等票據——不論幣別——合計價值達 ${F.cashReportThreshold} 以上，入境和出境時都必須申報。`,
        },
        {
          ul: [
            "在通過海關前於 AUSTRAC 的線上表單申報，並保留收據",
            "無法使用線上表單時，可向邊境部隊人員或警察索取紙本表單",
            "入境旅客卡第 5 題問的也是同一件事",
            "申報免費。為了不超過基準而把現金分給同行者攜帶是違法的",
          ],
        },
        { source: { label: "AUSTRAC（澳洲交易報告與分析中心）— 跨境攜帶金錢", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "ACCC（澳洲競爭及消費者委員會）— 刷卡手續費", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "澳洲旅遊局（Tourism Australia）— 澳洲基本資訊", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      related: ["tourist-refund-scheme", "phones-and-sim-cards", "public-holidays"],
      faq: [
        {
          q: "帶超過 AUD 10,000 進澳洲是違法的嗎？",
          a: `不是。沒有上限。現金及類似票據合計 ${F.cashReportThreshold} 以上必須申報，如此而已。`,
        },
        {
          q: "店家還能對刷卡加收費用嗎？",
          a: `自 2026年10月1日 起，Visa、Mastercard、American Express 與 eftpos 卡都不行。週末與國定假日附加費是另一回事，目前仍然允許。`,
        },
        {
          q: "在澳洲要給小費嗎？",
          a: "隨意。較高級的餐廳給約 10% 很常見；其他場合通常不會被期待。",
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "tourist-refund-scheme",
      enSlug: "tourist-refund-scheme",
      title: `澳洲旅客退稅（TRS）：離境時退回 GST（${F.trsMinSpend} 以上）`,
      description: `離境前 ${F.trsDays} 天內在同一商家消費 ${F.trsMinSpend} 以上、隨身帶走商品，並在出發前至少 ${F.trsCutoffMinutes} 分鐘於機場申請。`,
      blocks: [
        {
          p: "旅客在澳洲購買、並於離境時隨身帶走的商品，可以申請退回 GST——葡萄酒還可以退回葡萄酒平衡稅（WET）。這項制度稱為 Tourist Refund Scheme（TRS），由澳洲邊境部隊在你離境當天於機場辦理。",
        },
        { h2: "條件" },
        {
          ul: [
            `在同一家商家（同一個 ABN）消費 ${F.trsMinSpend} 以上（含 GST）。可以是同一商家的多張發票`,
            `商品是在離開澳洲前 ${F.trsDays} 天內購買的`,
            "持有稅務發票正本。金額 AUD 1,000 以上的發票必須載明你的姓名",
            "離境時隨身攜帶商品——不能郵寄或貨運",
          ],
        },
        { h2: "在機場申請" },
        {
          p: `離境當天，在預定起飛時間至少 ${F.trsCutoffMinutes} 分鐘前，到 TRS 櫃台出示護照、登機證、商品和發票正本。ABF 建議在起飛前 ${F.trsArriveMinutes} 分鐘就到，因為尖峰時段排隊可能要這麼久。`,
        },
        {
          ul: [
            "不能線上申請、不能在離境日之前申請，也不能在國內線機場申請",
            "不退現金——退款會匯到信用卡（Amex、Diners、JCB、Mastercard、銀聯 UnionPay 或 Visa）或澳洲銀行帳戶，通常在 60 天內",
            "官方 TRS App 可以把你的資料和發票存成 QR code，加快排隊速度；但它不能取代現場申請",
          ],
        },
        { h2: "不能退稅的項目" },
        {
          ul: [
            "服務——住宿、旅遊行程、計程車、租車",
            "在澳洲境內已全部或部分使用的商品，包括食品、飲料、香水和保健食品",
            "酒精濃度 22% 以下葡萄酒以外的酒類，以及菸草",
            "禮物卡和禮券，以及郵寄或貨運回國的商品",
          ],
        },
        { source: { label: "澳洲邊境部隊（Australian Border Force）— Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "澳洲邊境部隊（Australian Border Force）— 如何申請退稅", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      related: ["money-and-tipping", "airport-security-liquids", "arriving-in-australia"],
      faq: [
        {
          q: "可以把不同店家的收據合起來湊到 AUD 300 嗎？",
          a: `不行。${F.trsMinSpend} 必須是在同一家商家（同一個 ABN）消費，但可以分成該商家的多張發票。`,
        },
        {
          q: "可以領現金退稅嗎？",
          a: "不行。退款會匯到信用卡或澳洲銀行帳戶。",
        },
        {
          q: "最晚什麼時候要申請？",
          a: `預定起飛時間至少 ${F.trsCutoffMinutes} 分鐘前。ABF 建議在起飛前 ${F.trsArriveMinutes} 分鐘就到 TRS 櫃台。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "healthcare-for-visitors",
      enSlug: "healthcare-for-visitors",
      title: "在澳洲看病：台灣旅客請先投保旅遊醫療險",
      description: `台灣與澳洲沒有醫療互惠協定，醫療費用須全額自付，官方建議投保。協定國僅 ${F.rhcaCountries} 國。`,
      blocks: [
        {
          p: "先講結論：台灣與澳洲之間沒有相互醫療協定（Reciprocal Health Care Agreement，RHCA）。台灣旅客在澳洲看醫生、住院或搭救護車，費用都要全額自付，除非你有保險。澳洲內政部（Department of Home Affairs）在 eVisitor 與 ETA 的說明頁上都寫得很清楚：你在澳洲的所有醫療費用須由個人負擔，並建議投保健康保險。",
        },
        { h2: "出發前先確認保險" },
        {
          ul: [
            "出發前先投保涵蓋澳洲的旅遊醫療保險",
            "內政部建議投保；你自己的簽證條件，請以 VEVO 或核發通知為準",
            "沒有保險時，醫院、救護車與醫師的費用都要全額自付",
          ],
        },
        { h2: "澳洲的公立醫療（Medicare）是給居民的" },
        {
          p: `澳洲的公立醫療制度 Medicare 是為居民設計的。旅客的醫療費用原則上自付，只有來自與澳洲簽有 RHCA 的國家的旅客例外。簽約國只有 ${F.rhcaCountries} 個：比利時、芬蘭、愛爾蘭、義大利、馬爾他、荷蘭、紐西蘭、挪威、斯洛維尼亞、瑞典與英國。`,
        },
        {
          note: "台灣、韓國、中國，以及德國、法國、西班牙、奧地利、瑞士都沒有簽署協定。來自這些國家的旅客，若沒有保險，醫院、救護車與醫師的費用都要全額自付。",
        },
        { h2: "協定涵蓋的範圍（供參考）" },
        {
          p: "以下只適用於簽約國旅客，台灣護照不適用，列出來是為了讓你理解制度。",
        },
        {
          ul: [
            "醫療上必要的院外診療（例如家庭醫師 GP 看診）",
            "以公費病人身分在公立醫院接受醫療上必要的住院與門診",
            "以一般價格取得 PBS（藥品補助計畫）的部分處方藥",
          ],
        },
        {
          p: "愛爾蘭（及紐西蘭）旅客只涵蓋公立醫院與 PBS 藥品，不含 GP 看診。他們不需登記 Medicare，而是要請醫院或藥局人員依協定處理。",
        },
        { h2: "協定不涵蓋的部分" },
        {
          ul: [
            "以自費病人身分在公立或私立醫院接受治療",
            "為了就醫而前往澳洲",
            "醫療上非必要的項目",
          ],
        },
        { h2: "協定的有效期間" },
        {
          ul: [
            "義大利與馬爾他：自入境起最長 6 個月，若簽證較早到期則至簽證到期為止",
            "英國與愛爾蘭：至簽證到期為止",
            "荷蘭、比利時、挪威與斯洛維尼亞：至本國保險、EHIC 或簽證到期為止，以最早者為準",
          ],
        },
        { h2: "登記 Medicare" },
        {
          p: "簽約國（愛爾蘭與紐西蘭除外）的旅客可登記 Medicare，並領取黃色的 Medicare 卡。需要護照、簽證，以及在本國有保險的證明——通常是 EHIC（英國居民為 GHIC）或本國健康保險卡。如果只是短暫停留且不需要就醫，就不必登記。登記前接受的治療，登記後仍可能獲得給付。",
        },
        { source: { label: "Services Australia — 相互醫療協定（Reciprocal Health Care Agreements）", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "Services Australia — 到澳洲旅遊（Visiting Australia）", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "澳洲內政部（Department of Home Affairs）— eVisitor（subclass 651）：健康保險", url: F.officialUrl } },
      ],
      related: ["bringing-medicines", "emergency-and-safety", "arriving-in-australia"],
      faq: [
        {
          q: "台灣和澳洲有醫療互惠協定嗎？",
          a: "沒有。台灣與澳洲之間沒有相互醫療協定（RHCA），台灣旅客應投保旅遊醫療保險。",
        },
        {
          q: "申請 ETA 一定要有保險嗎？",
          a: "澳洲內政部建議投保，並表明你在澳洲的所有醫療費用須由個人負擔。你自己的簽證條件，請以 VEVO 或核發通知為準。",
        },
        {
          q: "哪些國家的旅客可以使用 Medicare？",
          a: `只有與澳洲簽有協定的 ${F.rhcaCountries} 個國家：比利時、芬蘭、愛爾蘭、義大利、馬爾他、荷蘭、紐西蘭、挪威、斯洛維尼亞、瑞典與英國，而且範圍有限。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "bringing-medicines",
      enSlug: "bringing-medicines",
      title: `攜帶藥品入境澳洲：${F.medicineSupplyMonths} 個月份量原則`,
      description: `自用藥最多 ${F.medicineSupplyMonths} 個月份量，保留原包裝、附處方箋或醫師信函，並在入境時申報。部分藥品禁止攜帶。`,
      blocks: [
        {
          p: "澳洲依「旅客豁免」（traveller's exemption）規定，允許旅客不需許可證即可攜帶自用藥品入境——前提是遵守相關條件。同行的直系家屬所用的藥品也適用。",
        },
        { h2: "條件" },
        {
          ul: [
            `不超過 ${F.medicineSupplyMonths} 個月的份量`,
            "盡可能保留原包裝與藥局標籤",
            "攜帶處方箋，或載明藥名與劑量的醫師信函",
            "入境時向澳洲邊境部隊申報所有藥品",
            "不得把藥品轉送或賣給他人，剩下的藥離境時要帶走",
          ],
        },
        { h2: "強效止痛藥、ADHD 藥物與安眠藥" },
        {
          p: "澳洲藥物管制署（Office of Drug Control）表示，嗎啡、羥考酮（oxycodone）、美沙冬（methadone）、methylphenidate、Adderall 及苯二氮平類（benzodiazepines）等處方藥，只要有處方箋或醫師信函，都在旅客豁免範圍內。任何含可待因（codeine）的藥品，不論劑量多寡，也都需要處方箋或醫師信函。",
        },
        { h2: "不能攜帶的藥品" },
        {
          ul: [
            "墮胎藥，例如 mifepristone（RU486）",
            "育亨賓（Yohimbe／yohimbine）",
            "Aminophenazone、aminopyrine、dipyrone（metamizole）",
            "苦杏仁苷（amygdalin／laetrile）",
          ],
        },
        { h2: "藥吃完了怎麼辦" },
        {
          p: "請到澳洲的醫師（GP）看診，取得澳洲處方箋。從國內寄藥過來有嚴格限制：處方藥需要有效的澳洲處方箋，每個包裹不得超過 3 個月份量，管制藥品與電子菸則完全不能郵寄。",
        },
        { source: { label: "澳洲藥物管理局（Therapeutic Goods Administration，TGA）— 攜帶藥品入境澳洲", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "澳洲藥物管制署（Office of Drug Control）— 攜帶藥品前往澳洲", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "TGA — 個人進口計畫（Personal Importation Scheme）", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      related: ["healthcare-for-visitors", "airport-security-liquids", "smoking-vaping-and-alcohol"],
      faq: [
        {
          q: "可以帶多少藥到澳洲？",
          a: `最多 ${F.medicineSupplyMonths} 個月份量，限自用或同行直系家屬使用。`,
        },
        {
          q: "可以帶 ADHD 藥物嗎？",
          a: "methylphenidate、Adderall 等藥物在旅客豁免範圍內，條件是攜帶處方箋或醫師信函並申報。",
        },
        {
          q: "家人可以從台灣把藥寄到澳洲給我嗎？",
          a: "只能在嚴格條件下。處方藥需要有效的澳洲處方箋，管制藥品則不能郵寄。",
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "smoking-vaping-and-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "澳洲的菸、電子菸與酒：旅客容易忽略的規定",
      description: `電子菸只在藥局販售，旅客可攜帶 ${F.vapeDevices} 支供自身治療。飲酒年齡 ${F.legalAge} 歲，室內公共場所禁菸。`,
      blocks: [
        {
          p: "澳洲把電子菸當作醫療用品（therapeutic goods）管理，而不是一般消費品。這讓很多旅客感到意外。",
        },
        { h2: "電子菸" },
        {
          ul: [
            "電子菸只能由參與的藥局販售。菸草店、電子菸專賣店和便利商店都不得販售任何電子菸，不論是否含尼古丁",
            `${F.legalAge} 歲以上的成年人，在州法允許的情況下，可能可以不需處方箋在藥局購買尼古丁濃度 20 mg/mL 以下的電子菸——須出示證件、每次以一個月份量為限，且只有薄荷、薄荷醇或菸草口味`,
            "即使有處方箋，也不能為了自用從海外網站訂購電子菸",
            "部分州禁止在沒有處方箋的情況下持有含尼古丁的電子菸",
          ],
        },
        { h2: "攜帶電子菸入境" },
        {
          p: `搭機或搭船入境的旅客，最多可攜帶 ${F.vapeDevices} 支電子菸、${F.vapeAccessories} 個配件（菸彈、膠囊或 pod）以及 ${F.vapeLiquid} 的煙油。TGA 的說法是，這些必須是用於旅客本人的治療，或同一航班、船班上由其照顧之人的治療。邊境部隊人員若懷疑是非法進口，可以沒收。`,
        },
        { h2: "吸菸" },
        {
          p: `販售菸草給未滿 ${F.legalAge} 歲者是違法的。所有州與領地都禁止在室內公共場所吸菸——大眾運輸、辦公室、購物中心、電影院和機場都包括在內。戶外用餐區、海灘、遊樂場等戶外場所的規定則依州而不同。免稅菸草的數量也有限制。`,
        },
        { h2: "酒" },
        {
          ul: [
            `必須年滿 ${F.legalAge} 歲才能購買酒類或在有執照的場所飲酒`,
            "可以在哪些戶外地點喝酒由各州與地方政府決定——許多公共場所是禁酒區",
            `酒駕標準是血液酒精濃度 ${F.bacLimit}——學習駕照與暫時駕照的駕駛人則是零`,
          ],
        },
        { source: { label: "TGA（澳洲藥物管理局）— 電子菸：給個人的資訊", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "澳洲衛生部（Department of Health）— 澳洲的吸菸與菸草法規", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "澳洲衛生部（Department of Health）— 澳洲的酒類法規", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      related: ["bringing-medicines", "driving-in-australia", "emergency-and-safety"],
      faq: [
        {
          q: "在澳洲的便利商店買得到電子菸嗎？",
          a: "買不到。電子菸只能由參與的藥局販售，其他零售商販售任何電子菸都是違法的。",
        },
        {
          q: "可以帶幾支電子菸到澳洲？",
          a: `最多 ${F.vapeDevices} 支電子菸、${F.vapeAccessories} 個配件與 ${F.vapeLiquid} 煙油，限用於你本人或同行受你照顧之人的治療。`,
        },
        {
          q: "澳洲幾歲可以喝酒？",
          a: `${F.legalAge} 歲。必須年滿 ${F.legalAge} 歲才能購買酒類或在有執照的場所飲酒。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "emergency-and-safety",
      enSlug: "emergency-and-safety",
      title: `澳洲緊急電話：${F.emergency}、${F.emergencyMobile}，以及為什麼 911 打不通`,
      description: `報警、消防、救護請撥 ${F.emergency}，手機也可撥 ${F.emergencyMobile}。911 不會轉接。非緊急報案 ${F.policeAssistance}。不會英文也會安排口譯。`,
      blocks: [
        {
          p: `Triple Zero（${F.emergency}）是澳洲的緊急電話，在危及生命或分秒必爭的情況下可聯絡警察、消防與救護。市話、手機、公共電話或衛星電話撥打都免費。`,
        },
        { h2: "電話號碼" },
        {
          ul: [
            `${F.emergency}——警察、消防、救護`,
            `${F.emergencyMobile}——僅限手機撥打，會接到同一個 ${F.emergency} 服務，並不比 ${F.emergency} 優先`,
            `${F.policeAssistance}——警察協助專線（Police Assistance Line），處理非緊急的警務事項`,
            `${F.ses}——州緊急服務署（State Emergency Service），處理未危及生命的水災、風暴與海嘯求助`,
            "不要撥 911——撥打 911 不會被轉接到 000",
          ],
        },
        { h2: "不會說英文時" },
        {
          p: `撥打 ${F.emergency}，說「police」（警察）、「fire」（消防）或「ambulance」（救護車），然後不要掛斷。對方會安排口譯。`,
        },
        { h2: "手機與訊號" },
        {
          ul: [
            `如果你的電信網路沒有訊號，手機會自動使用其他可用的網路撥打 ${F.emergency}——即使沒有 SIM 卡也可以`,
            `如果所有網路都沒有訊號，就無法用手機撥打 ${F.emergency}。澳洲內陸有大片地區完全沒有訊號`,
            `無法用簡訊聯絡 ${F.emergency}`,
            "如果約 5 秒內沒有接通，請掛斷再撥一次",
          ],
        },
        {
          note: `澳洲的 3G 網路已經關閉。3G 手機及部分較舊的 4G 手機——尤其是在海外購買的手機——可能無法撥打 ${F.emergency}。主管機關建議不要以實際撥打 ${F.emergency} 的方式測試，而是向電信業者詢問。`,
        },
        { source: { label: "澳洲基礎建設部（Department of Infrastructure）— Triple Zero（000）", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "ACMA（澳洲通訊及媒體管理局）— 3G 網路關閉", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-australia"],
      faq: [
        {
          q: "在澳洲撥 911 有用嗎？",
          a: `沒有用。撥打 911 不會被轉接。請撥 ${F.emergency}，用手機也可以撥 ${F.emergencyMobile}。`,
        },
        {
          q: "沒有澳洲 SIM 卡可以撥 000 嗎？",
          a: `可以，只要有任何一家電信網路的訊號。即使沒有可用的 SIM 卡，手機也會連上可用的網路撥打 ${F.emergency}。`,
        },
        {
          q: "可以傳簡訊給 000 嗎？",
          a: `不行。無法用簡訊聯絡 ${F.emergency}。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "phones-and-sim-cards",
      enSlug: "phones-and-sim-cards",
      title: "在澳洲用手機與 SIM 卡：身分查核與 3G 關閉",
      description:
        "開通澳洲預付 SIM 卡須查核身分，本人名義的護照即可。購買前先確認手機能用澳洲的 4G/5G 網路。",
      blocks: [
        {
          p: "你可以用台灣門號的國際漫遊，也可以買澳洲的預付 SIM 卡。如果買當地 SIM 卡，有兩點和許多國家不同：身分查核，以及 3G 已經停用。",
        },
        { h2: "身分查核" },
        {
          p: "依法律規定，電信業者在開通預付行動服務時，必須蒐集你的姓名、出生日期和地址，並查核身分。以你本人名義核發的護照是可接受的證件之一——不必是澳洲護照。證件必須在有效期限內。",
        },
        {
          p: "電信業者也可以用其他方式查核身分，例如政府證件核對、既有帳戶、刷卡交易或經認證的數位身分（Digital ID）服務。各業者實際怎麼做——在門市或線上——由業者自行決定。",
        },
        { h2: "先確認你的手機" },
        {
          p: "澳洲的 3G 網路已經關閉。只支援 3G 的手機完全無法使用，部分依賴 3G 通話的 4G 手機也無法撥打語音電話或聯絡緊急服務。較舊的 4G 手機和在海外購買的手機風險最高。電信業者不得為其判定無法撥打 Triple Zero（000）的手機開通服務。",
        },
        {
          ul: [
            "付款前，請業者確認你的機型能使用其 4G/5G 網路並支援 VoLTE 通話",
            "不要以撥打 000 的方式測試緊急通話",
          ],
        },
        {
          note: "主管機關（ACMA）將在 2026 年檢討預付卡的身分查核規定。不過基本原則——必須查核身分、護照可以使用——已經實施多年。",
        },
        { source: { label: "ACMA（澳洲通訊及媒體管理局）— 預付手機的身分查核", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "澳洲聯邦法規登錄（Federal Register of Legislation）— Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "ACMA — 確保 3G 關閉後手機仍能撥打 000", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      related: ["emergency-and-safety", "power-plugs", "money-and-tipping"],
      faq: [
        {
          q: "用台灣護照可以買澳洲的 SIM 卡嗎？",
          a: "可以。以你本人名義核發的護照，是開通預付服務時可接受的身分證件。證件必須在有效期限內。",
        },
        {
          q: "我在台灣用的手機到澳洲能用嗎？",
          a: "大多數較新的手機可以，但 3G 網路已經關閉。較舊的 4G 手機及部分在海外購買的手機可能無法通話或撥打 000——請業者幫你確認機型。",
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "power-plugs",
      enSlug: "power-plugs",
      title: `澳洲的插頭與電壓：Type I 插頭、${F.voltage} ${F.frequency}`,
      description: `澳洲使用兩支扁腳呈倒 V 字形的插頭（Type I），電壓 ${F.voltage}、${F.frequency}。插電前先看充電器的標示。`,
      blocks: [
        {
          p: "澳洲的插座使用兩支扁平金屬腳呈倒 V 字形（八字形）的插頭，有時中間還有第三支腳。澳洲旅遊局稱之為「Type 1」插頭，國際上通常標示為 Type I。插頭形狀不同的話，沒有轉接頭就插不進去。",
        },
        { h2: "電壓" },
        {
          p: `供電為 ${F.voltage}、${F.frequency}（澳洲旅遊局也列出 220–240 V 的範圍）。大多數手機和筆電充電器標示 100–240 V，只要轉接頭就能用。請看標示：若未涵蓋 230 V，就需要變壓器，光有轉接頭不夠。`,
        },
        { h2: "要準備什麼" },
        {
          ul: [
            "Type I 轉接頭，或多國通用轉接頭",
            "只有不支援 230 V 的電器才需要變壓器",
          ],
        },
        { source: { label: "澳洲旅遊局（Tourism Australia）— 澳洲旅遊實用提示", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "澳洲旅遊局（Tourism Australia）— 澳洲行李打包清單", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      related: ["phones-and-sim-cards", "money-and-tipping", "arriving-in-australia"],
      faq: [
        {
          q: "去澳洲需要轉接頭嗎？",
          a: "如果你的插頭不是澳洲這種兩支扁腳呈倒 V 字形的款式，就需要。",
        },
        {
          q: "需要變壓器嗎？",
          a: `只有不支援 ${F.voltage} 的電器才需要。標示 100–240 V 的充電器只要轉接頭就能用。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "public-holidays",
      enSlug: "public-holidays",
      title: "澳洲國定假日 2026–2027：各州日期一覽",
      description:
        "澳洲的國定假日由各州與領地自行制定。全國相同的日子、各州不同的日子，以及對旅程的影響。",
      blocks: [
        {
          p: "澳洲沒有單一的全國假日清單。各州與領地自行制定國定假日，並自行決定假日遇到週末時是否補假。以下日期來自聯邦職場主管機關公平工作監察署（Fair Work Ombudsman）。",
        },
        { h2: "2026 年剩餘的假日" },
        {
          ul: [
            "12 月 25 日（五）——聖誕節（全國）",
            "12 月 26 日（六）——節禮日 Boxing Day（南澳為 Proclamation Day 假日）",
            "12 月 28 日（一）——大多數州與領地的節禮日補假；塔斯馬尼亞則是節禮日本身訂在這一天",
          ],
        },
        { h2: "2027 年：全國相同的日子" },
        {
          ul: [
            "1 月 1 日（五）——元旦",
            "1 月 26 日（二）——澳洲國慶日（Australia Day）",
            "3 月 26 日（五）——耶穌受難日（Good Friday）",
            "3 月 29 日（一）——復活節星期一（Easter Monday）",
            "12 月 25 日（六）——聖誕節，12 月 27 日（一）另外補假",
          ],
        },
        { h2: "2027 年：各州不同的日子" },
        {
          ul: [
            "復活節星期六（3 月 27 日）與復活節星期日（3 月 28 日）在塔斯馬尼亞未列為假日；西澳未列復活節星期六",
            "澳紐軍團紀念日（Anzac Day）落在 4 月 25 日（日）。新南威爾斯與西澳另於 4 月 26 日（一）補假；首都特區、北領地與昆士蘭改在 4 月 26 日（一）放假；南澳、塔斯馬尼亞與維多利亞只有週日當天",
            "國王生日（King's Birthday）在大多數州是 6 月 14 日（一）——但西澳是 9 月 27 日（一），昆士蘭是 10 月 4 日（一）",
            "勞動節（Labour Day）從 3 月（西澳、維多利亞、塔斯馬尼亞）、5 月（昆士蘭、北領地）到 10 月（新南威爾斯、首都特區、南澳）都有",
            "節禮日為 12 月 26 日（日），大多數地方另於 12 月 28 日（二）補假；塔斯馬尼亞的節禮日則訂在 12 月 28 日（二）",
          ],
        },
        {
          note: "2027 年的日期為公平工作監察署事先公布的內容。維多利亞的 AFL 總決賽前一天（週五）尚未確定。部分僅限特定地區或城市的假日（例如 show day）未列入。",
        },
        { h2: "對旅客的影響" },
        {
          p: "銀行和政府機關會休息。在城市裡，許多商店、咖啡店和餐廳照常營業，但有時帳單會加收國定假日附加費。大眾運輸通常以減班時刻表行駛。連假以及聖誕節到 1 月的暑假是澳洲國內旅遊旺季，住宿和租車請提早預訂。",
        },
        { source: { label: "公平工作監察署（Fair Work Ombudsman）— 2026 年國定假日", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "公平工作監察署（Fair Work Ombudsman）— 2027 年國定假日", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      related: ["money-and-tipping", "driving-in-australia", "arriving-in-australia"],
      faq: [
        {
          q: "國王生日全澳洲都是同一天嗎？",
          a: "不是。大多數州訂在 6 月的第二個星期一，但西澳在 9 月下旬，昆士蘭在 10 月上旬。",
        },
        {
          q: "節禮日在全國都是國定假日嗎？",
          a: "是的，不過南澳稱為 Proclamation Day 假日；而且遇到週末時，各州的補假日不同。",
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
    {
      slug: "driving-in-australia",
      enSlug: "driving-in-australia",
      title: "持外國駕照在澳洲開車：各州規定不同",
      description: `各州自訂規則：新南威爾斯最長 ${F.driveNswMonths} 個月、北領地 ${F.driveNtMonths} 個月。非英文駕照須附英文翻譯或國際駕照。`,
      blocks: [
        {
          p: "澳洲靠左行駛。圓環以順時針方向行進，並禮讓右方來車。速限以每小時公里計：市區若無標示為 50 km/h，其他道路通常為 100 km/h，部分高速公路最高 110 km/h。",
        },
        { h2: "駕照由各州管理" },
        {
          p: "澳洲對旅客沒有單一的全國規定。旅客持外國駕照可以開多久、需要附帶什麼文件，由各州與領地自行決定。請確認你會開車經過的每一個州的規定——一趟公路旅行可能跨越好幾州。",
        },
        {
          ul: [
            `新南威爾斯：觀光客與短期訪客可持有效的外國駕照開車，最長 ${F.driveNswMonths} 個月`,
            `維多利亞：若你在維多利亞居住並開車的期間未滿 ${F.driveNswMonths} 個月（自首次抵達起算），即可開車`,
            `北領地：訪客與新居民最長 ${F.driveNtMonths} 個月`,
            "昆士蘭、西澳、南澳、塔斯馬尼亞與首都特區：訪客可持有效的外國駕照開車；官方網頁未載明訪客的固定期限",
          ],
        },
        {
          note: "你可能會在昆士蘭、新南威爾斯、西澳與首都特區看到「3 個月」的期限，那是針對澳洲公民與永久居民或居民簽證持有人的規定，不適用於觀光客。",
        },
        { h2: "駕照不是英文時" },
        {
          p: "請連同駕照本身，一起攜帶駕照的英文翻譯或國際駕照（International Driving Permit，IDP）。細節因州而異：北領地要求出發前先辦好國際駕照，或取得北領地認可譯者的正式翻譯；昆士蘭則要求攜帶認可的英文翻譯。國際駕照絕不能取代你本國的駕照——兩者都要帶。",
        },
        { h2: "出發前" },
        {
          ul: [
            "開車時務必隨身攜帶駕照",
            "駕照必須在有效期限內，且適用於你所駕駛的車種",
            `酒駕標準是血液酒精濃度 ${F.bacLimit}`,
            "城鎮之間的距離很長——請規劃好加油與休息的地點",
          ],
        },
        { source: { label: "新南威爾斯州交通局（Transport for NSW）— 從海外來訪", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "VicRoads（維多利亞州）— 持外國駕照開車", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "昆士蘭州政府（Queensland Government）— 持外國駕照在昆士蘭開車", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "北領地政府（NT Government）— 訪客駕駛的駕照規定", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "澳洲旅遊局（Tourism Australia）— 在澳洲開車", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      related: ["public-holidays", "emergency-and-safety", "smoking-vaping-and-alcohol"],
      faq: [
        {
          q: "在澳洲開車需要國際駕照嗎？",
          a: "如果駕照是英文的，一般不需要。如果不是，請連同駕照一起攜帶英文翻譯或國際駕照（IDP）。確切規定依州而定。",
        },
        {
          q: "持外國駕照可以在澳洲開多久？",
          a: `依州而定：新南威爾斯最長 ${F.driveNswMonths} 個月，維多利亞為居住未滿 ${F.driveNswMonths} 個月，北領地最長 ${F.driveNtMonths} 個月。其他州未載明訪客的固定期限。`,
        },
      ],
      checked: "2026年10月12日",
      practical: true,
    },
  ],
};
