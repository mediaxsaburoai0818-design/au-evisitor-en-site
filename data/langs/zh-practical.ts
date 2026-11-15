import { FACTS as F } from "./_schema";
import type { PracticalPack } from "./_schema";

/**
 * 簡体字（/zh/）の入国後実用ページ（英語 data/pages-practical.ts の13ページに対応）。
 * 読者＝シンガポール・マレーシア等の旅券でETA（subclass 601）を使う人。
 * ⚠️ 中国本土旅券に必要なビザは書かない。
 * ⚠️ 医療: 中国・シンガポール・マレーシアは相互医療協定なし → 保険を先に書く。
 * ⚠️ 数値は F 経由。英語ページと事実を変えない。
 */

const CHECKED = "2026年10月12日";

export const zhPractical: PracticalPack = {
  ui: { faq: "常见问题", source: "出处", related: "相关内容" },
  articles: [
    {
      slug: "arriving-in-australia",
      enSlug: "arriving-in-australia",
      title: "抵达澳大利亚：ETA 持有人的入境后实用指南",
      description: "签证只管你能否登机。之后的 SmartGate、现金、退税、医疗、驾车和紧急情况，均按官方信息核对。",
      related: ["smartgate-australia", "money-and-tipping", "healthcare-for-visitors"],
      blocks: [
        {
          p: `ETA（subclass 601；欧洲护照则为 eVisitor）解决的只是一个问题：你能否前往澳大利亚，并且每次停留最长 ${F.stayMonths} 个月。至于在机场会遇到什么、可以携带什么、怎样付款、出了问题怎么办，签证都不会告诉你。下面这些页面就是为此而写，每一页都对照了负责该事项的澳大利亚政府机构，并附上链接。`,
        },
        { h2: "入境时" },
        { links: ["smartgate-australia", "bringing-medicines"] },
        { h2: "钱" },
        { links: ["money-and-tipping", "tourist-refund-scheme"] },
        { h2: "交通与通讯" },
        { links: ["driving-in-australia", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
        { h2: "健康与安全" },
        { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
        { h2: "回程" },
        { links: ["airport-security-liquids"] },
        {
          note: "我们没有单独写公共交通。澳大利亚没有全国统一的系统——每个城市各有自己的交通卡和票价规则（悉尼是 Opal，墨尔本是 myki，昆士兰东南部是 go card）。请查看你要去的城市的交通管理机构。",
        },
      ],
      checked: CHECKED,
      practical: false,
    },
    {
      slug: "smartgate-australia",
      enSlug: "smartgate-australia",
      title: `澳大利亚 SmartGate：谁可以使用（${F.smartgateMinAge} 岁以上），以及仍然需要什么`,
      description: `在 ABF 的试行中，${F.smartgateMinAge} 岁以上、持任何有效护照的旅客都可使用入境 SmartGate。纸质入境卡仍须填写。`,
      related: ["arriving-in-australia", "airport-security-liquids", "bringing-medicines"],
      blocks: [
        {
          p: "SmartGate 是澳大利亚边防部队（ABF）在澳大利亚主要国际机场设置的自动护照检查闸口。入境时，闸口读取你的护照、拍摄照片，并把你的面部与护照比对。比对成功后会打印一张票据，你就可以通过。",
        },
        { h2: "谁可以使用入境 SmartGate" },
        {
          ul: [
            "持有效护照旅行",
            `身高至少 ${F.smartgateMinHeight}`,
            `年满 ${F.smartgateMinAge} 岁`,
            `未满 ${F.smartgateAccompanyUnder} 岁的儿童必须由父母或法定监护人陪同`,
          ],
        },
        {
          p: "此前必须持电子护照（封面上有芯片标志）。ABF 目前正对所有护照试行入境 SmartGate，因此没有芯片的护照也可能可以使用。ABF 并未公布国籍名单：上述条件针对的是护照和旅客本身，而不是签发护照的国家。",
        },
        {
          note: "你的 ETA（或 eVisitor）和 SmartGate 是两回事。签证让你可以登机和入境；SmartGate 只是查验护照的方式。使用闸口不会改变你的签证条件。",
        },
        { h2: "仍然需要填写入境旅客卡（Incoming Passenger Card）" },
        {
          p: "大多数旅客必须填写纸质的入境旅客卡（Incoming Passenger Card，IPC）。卡片在飞机上或航站楼内发放，必须用英文填写。ABF 提供了译成多种语言的样卡——包括德语、法语、荷兰语、意大利语、西班牙语、韩语和中文——方便你理解问题，但你交上去的卡片要用英文作答。",
        },
        {
          p: "在出口处，把 SmartGate 票据和入境旅客卡一起交给边防或生物安全官员。电子版替代方式 Australia Travel Declaration：据 ABF（截至 2026 年 11 月 15 日），其网页表格仅适用于抵达西悉尼国际机场的航班；在其他澳大利亚机场入境的旅客不应填写。请按您的抵达机场查看 ABF 页面。",
        },
        { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
        { h2: "屏幕上的语言" },
        {
          p: `入境 SmartGate 的屏幕以英文为主，另有 ${F.smartgateArrivalLanguages} 种语言可选，包括德语、荷兰语、法语、意大利语、西班牙语、韩语以及简体和繁体中文。出境 SmartGate 的屏幕为英语、日语、韩语和普通话。`,
        },
        { h2: "离开澳大利亚时" },
        {
          p: "任何持有效机读护照的旅客都可以使用出境 SmartGate。如果你同行的人需要协助才能按指示操作（例如婴儿或幼童），则不能使用。",
        },
        { source: { label: "澳大利亚边防部队（Australian Border Force，ABF）— 谁可以使用入境 SmartGate", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
        { source: { label: "澳大利亚边防部队（ABF）— 出境 SmartGate", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
        { source: { label: "澳大利亚边防部队（ABF）— 入境旅客卡（Incoming Passenger Card）", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
      ],
      faq: [
        {
          q: "新加坡或马来西亚护照可以使用 SmartGate 吗？",
          a: `ABF 没有公布国籍名单。入境 SmartGate 面向持有效护照、年满 ${F.smartgateMinAge} 岁且身高至少 ${F.smartgateMinHeight} 的旅客，ABF 正在对所有护照试行。`,
        },
        {
          q: "使用 SmartGate 后还需要填入境旅客卡吗？",
          a: "需要。在出口处要把 SmartGate 票据和填好的入境旅客卡一起交上。卡片必须用英文填写。",
        },
        {
          q: "我 5 岁的孩子可以用 SmartGate 吗？",
          a: `不可以。入境 SmartGate 要求旅客年满 ${F.smartgateMinAge} 岁。带着更小孩子的家庭由官员人工办理。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "airport-security-liquids",
      enSlug: "airport-security-liquids",
      title: `从澳大利亚出发的航班携带液体：${F.lagsContainer} 规定与粉末限制`,
      description: `从澳大利亚出发的国际航班，液体、喷雾和凝胶须装在 ${F.lagsContainer} 以内的容器并放进一个透明袋。无机粉末也有限制。`,
      related: ["tourist-refund-scheme", "bringing-medicines", "arriving-in-australia"],
      blocks: [
        {
          p: "在国际航班上，澳大利亚限制手提行李中的液体、喷雾、凝胶和部分粉末。这些限制不适用于托运行李，也不适用于大多数国内航班。",
        },
        { h2: "什么时候适用" },
        {
          ul: [
            "乘国际航班离开澳大利亚时",
            "经澳大利亚从一个国家转机前往另一个国家时",
            "从澳大利亚国际航站楼出发的航班的国内航段",
            "在飞往澳大利亚之前的最后一个经停站登机时",
          ],
        },
        { h2: "液体、喷雾和凝胶" },
        {
          ul: [
            `每个容器不得超过 ${F.lagsContainer}（或 100 g）——容器更大的话，即使只装了一部分也不行`,
            `所有容器必须放进一个透明、可重复密封的塑料袋，袋子四边之和不超过 ${F.lagsBagPerimeterCm} cm（例如 20 × 20 cm）`,
            "每位旅客一个袋子；可以替同行需要照顾的人（包括儿童）携带他们的袋子",
            "喷雾必须有盖子或锁定装置",
          ],
        },
        {
          p: "涂抹酱和软质食品按液体或凝胶计算。官方清单列出了 Vegemite、花生酱、蜂蜜和酸奶——这些常被当作手信的东西，经常在安检口被拦下。",
        },
        { h2: "粉末" },
        {
          p: `无机粉末——例如盐、盐磨砂膏、沙子和部分爽身粉——必须装在 ${F.powderLimit} 以内的容器中，且每人总量不得超过 ${F.powderLimit}。有机粉末如婴儿奶粉、咖啡、蛋白粉、面粉、香料和糖没有限制。安检时可能会要求你把粉末单独拿出来。`,
        },
        { h2: "豁免" },
        {
          ul: [
            "合理数量的婴儿用品",
            "飞行途中需要的处方药和非处方药——可能需要出示证明，例如医生的信",
            "医疗器械和医疗设备",
          ],
        },
        { h2: "免税品" },
        {
          p: "在机场购买的免税液体必须保留在原本密封的防拆袋中，并附上购买凭证。",
        },
        { source: { label: "澳大利亚内政事务部（Department of Home Affairs，TravelSECURE）— 可以携带和不可以携带的物品", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
      ],
      faq: [
        {
          q: "澳大利亚国内航班也有液体限制吗？",
          a: "大多数国内航班没有。但从国际航站楼出发的航班的国内航段适用。",
        },
        {
          q: "可以把一罐 Vegemite 放在手提行李里吗？",
          a: `只有容器在 ${F.lagsContainer} 以内并放进液体袋里才行。更大的罐子请放进托运行李。`,
        },
        {
          q: "婴儿奶粉有限制吗？",
          a: "奶粉属于有机粉末，没有限制。合理数量的婴儿用品也不受液体限制。",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "money-and-tipping",
      enSlug: "money-and-tipping",
      title: "澳大利亚的钱：现金、刷卡附加费、GST 与小费",
      description: `标价含 ${F.gstPercent}% GST，自 2026年10月1日 起禁止刷卡附加费，小费随意。现金达 ${F.cashReportThreshold} 须申报。`,
      related: ["tourist-refund-scheme", "phones-and-sim-cards", "public-holidays"],
      blocks: [
        {
          p: "澳大利亚使用澳元（AUD）。付钱之前有几条规则值得了解——其中一条刚刚改变。",
        },
        { h2: "标价已含税" },
        {
          p: `商品及服务税（GST）为 ${F.gstPercent}%，商家必须标示含税的总价。你看到的价格就是结账时要付的价格。`,
        },
        { h2: "不再收取刷卡附加费" },
        {
          p: `自 2026年10月1日 起，商家不得再对使用 Visa、Mastercard、American Express 或 eftpos 卡（信用卡、借记卡或预付卡）的付款加收附加费。在此之前，许多咖啡馆和出租车会对刷卡加收一定百分比。如果现在仍被收取刷卡附加费，值得提出质疑。`,
        },
        {
          note: "周末和公众假期附加费是另一回事，目前仍然允许——有些咖啡馆和餐厅会在周日和公众假期加收。你自己的银行也可能收取境外交易手续费，那是你和银行之间的事。",
        },
        { h2: "小费" },
        {
          p: "澳大利亚旅游局（Tourism Australia）表示，小费是随意的，大多数地方并不期待。在高档餐厅，服务好时给 10% 左右很常见。在咖啡馆或出租车上不给小费，也不会冒犯任何人。",
        },
        { h2: `现金达 ${F.cashReportThreshold} 或以上必须申报` },
        {
          p: `携带进出澳大利亚的金额没有上限。但如果你携带的现金以及旅行支票、支票、汇票等票据——任何货币——合计价值达到 ${F.cashReportThreshold} 或以上，入境和出境时都必须申报。`,
        },
        {
          ul: [
            "在通过海关之前通过 AUSTRAC 的网上表格申报，并保留回执",
            "如果无法使用网上表格，可以向边防官员或警察索取纸质表格",
            "入境旅客卡（Incoming Passenger Card）的第 5 题问的是同一件事",
            "申报是免费的。为了不超过基准额而把现金分给几位旅客携带，是违法的",
          ],
        },
        { source: { label: "澳大利亚交易报告与分析中心（AUSTRAC）— 跨境携带资金", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
        { source: { label: "澳大利亚竞争与消费者委员会（ACCC）— 刷卡附加费", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
        { source: { label: "澳大利亚旅游局（Tourism Australia）— 澳大利亚基本信息", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
      ],
      faq: [
        {
          q: `携带超过 ${F.cashReportThreshold} 进入澳大利亚违法吗？`,
          a: `不违法，没有上限。只是现金及类似票据达到 ${F.cashReportThreshold} 或以上时必须申报，仅此而已。`,
        },
        {
          q: "商店还能对刷卡加收费用吗？",
          a: `自 2026年10月1日 起，使用 Visa、Mastercard、American Express 或 eftpos 卡不能再被加收。周末和公众假期附加费是另一回事，仍然允许。`,
        },
        {
          q: "在澳大利亚要给小费吗？",
          a: "随意。高档餐厅给 10% 左右很常见；其他地方一般不期待。",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "tourist-refund-scheme",
      enSlug: "tourist-refund-scheme",
      title: `旅客退税计划（TRS）：离开澳大利亚时退回 GST（${F.trsMinSpend} 起）`,
      description: `离境前 ${F.trsDays} 天内在同一商家消费 ${F.trsMinSpend} 以上、随身带走商品，在机场于起飞前至少 ${F.trsCutoffMinutes} 分钟申请。`,
      related: ["money-and-tipping", "airport-security-liquids", "smartgate-australia"],
      blocks: [
        {
          p: "旅客在澳大利亚购买并在离境时随身带走的商品，可以申请退回 GST——葡萄酒还可以退回葡萄酒平衡税（WET）。该计划由澳大利亚边防部队在你出发当天于机场办理。",
        },
        { h2: "条件" },
        {
          ul: [
            `在同一商家（同一个 ABN）消费 ${F.trsMinSpend} 或以上（含 GST）。可以是同一商家开出的多张发票`,
            `商品在离开澳大利亚前 ${F.trsDays} 天内购买`,
            "持有原始税务发票（tax invoice）。AUD 1,000 或以上的发票必须写有你的姓名",
            "离境时随身携带这些商品——不能邮寄或货运",
          ],
        },
        { h2: "在机场申请" },
        {
          p: `出发当天，在预定起飞时间前至少 ${F.trsCutoffMinutes} 分钟，到 TRS 柜台出示护照、登机牌、商品和原始发票。ABF 建议在起飞前 ${F.trsArriveMinutes} 分钟到达，因为繁忙时段排队可能需要这么久。`,
        },
        {
          ul: [
            "不能网上申请，不能在出发日之前申请，也不能在国内机场申请",
            "不退现金——退款打入信用卡（Amex、Diners、JCB、Mastercard、银联 UnionPay 或 Visa）或澳大利亚银行账户，通常在 60 天内到账",
            "官方 TRS 应用可以把你的资料和发票存成二维码，加快排队速度；但它不能取代现场申请",
          ],
        },
        { h2: "不能退税的项目" },
        {
          ul: [
            "服务——住宿、旅游团、出租车、租车",
            "在澳大利亚已全部或部分消耗的商品，包括食品、饮料、香水和保健品",
            "酒精度低于 22% 的葡萄酒以外的酒类，以及烟草",
            "礼品卡、代金券，以及邮寄或货运回家的商品",
          ],
        },
        { source: { label: "澳大利亚边防部队（ABF）— 旅客退税计划（Tourist Refund Scheme）", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
        { source: { label: "澳大利亚边防部队（ABF）— 如何申请", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
      ],
      faq: [
        {
          q: `可以把不同商店的收据加起来凑够 ${F.trsMinSpend} 吗？`,
          a: `不可以。${F.trsMinSpend} 必须在同一商家（同一个 ABN）消费，但可以分成该商家的多张发票。`,
        },
        {
          q: "可以领取现金退款吗？",
          a: "不可以。退款打入信用卡或澳大利亚银行账户。",
        },
        {
          q: "最晚什么时候申请？",
          a: `预定起飞时间前至少 ${F.trsCutoffMinutes} 分钟。ABF 建议在起飞前 ${F.trsArriveMinutes} 分钟到达 TRS 柜台。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "healthcare-for-visitors",
      enSlug: "healthcare-for-visitors",
      title: "澳大利亚访客的医疗：没有互惠医疗协议，就要靠保险",
      description: `中国、新加坡、马来西亚不在 ${F.rhcaCountries} 个互惠医疗协议国之列。医疗费用由本人承担，政府建议购买保险。`,
      related: ["bringing-medicines", "emergency-and-safety", "arriving-in-australia"],
      blocks: [
        {
          p: "澳大利亚的公共医疗制度 Medicare 是面向居民的。访客要自行支付医疗费用——除非本国与澳大利亚签有互惠医疗协议（Reciprocal Health Care Agreement，RHCA）。内政事务部在 eVisitor 页面上写得很直白：你在澳大利亚的所有医疗费用均由本人承担，并建议购买医疗保险；ETA 页面也有同样的保险建议。",
        },
        { h2: "先说结论：请带上保险" },
        {
          note: "中国、新加坡和马来西亚都没有与澳大利亚签订互惠医疗协议。来自这些国家的访客，如果没有保险，医院、救护车和医生的费用都要全额自付。",
        },
        {
          p: "同样没有协议的还有德国、法国、西班牙、奥地利、瑞士、韩国和台湾。",
        },
        { h2: `签有协议的 ${F.rhcaCountries} 个国家` },
        {
          p: "比利时、芬兰、爱尔兰、意大利、马耳他、荷兰、新西兰、挪威、斯洛文尼亚、瑞典和英国。",
        },
        { h2: "协议覆盖的范围" },
        {
          ul: [
            "医疗上必要的院外诊疗（例如看全科医生 GP）",
            "在公立医院以公立病人身份接受的医疗上必要的住院和门诊治疗",
            "按一般价格享受药品福利计划（PBS）下的部分处方药",
          ],
        },
        {
          p: "来自爱尔兰（和新西兰）的访客只覆盖公立医院治疗和 PBS 药品——不包括看全科医生。他们不登记 Medicare，需要请医院或药房工作人员按协议处理。",
        },
        { h2: "协议不覆盖的范围" },
        {
          ul: [
            "以私立病人身份接受的治疗，无论在公立还是私立医院",
            "以就医为目的前往澳大利亚",
            "任何医疗上并非必要的治疗",
          ],
        },
        { h2: "覆盖期限" },
        {
          ul: [
            "意大利和马耳他：自抵达起最长 6 个月，若签证更早到期则至签证到期",
            "英国和爱尔兰：至签证到期",
            "荷兰、比利时、挪威和斯洛文尼亚：至本国医疗保险、EHIC 或签证到期，以最早者为准",
          ],
        },
        { h2: "登记 Medicare" },
        {
          p: "来自协议国（爱尔兰和新西兰除外）的访客可登记 Medicare，并领取黄色的 Medicare 卡。需要护照、签证以及在本国的保障证明——通常是 EHIC（英国居民为 GHIC）或本国医疗保险卡。如果只是短暂停留且不需要治疗，就不必登记。登记前接受的治疗，在登记后仍可能获得覆盖。",
        },
        { source: { label: "澳大利亚服务局（Services Australia）— 互惠医疗协议", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
        { source: { label: "澳大利亚服务局（Services Australia）— 访问澳大利亚", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
        { source: { label: "澳大利亚内政事务部（Department of Home Affairs）— eVisitor（subclass 651）：医疗保险", url: F.officialUrl } },
      ],
      faq: [
        {
          q: "新加坡或马来西亚与澳大利亚有互惠医疗协议吗？",
          a: "没有。中国、新加坡和马来西亚都没有与澳大利亚签订互惠医疗协议。来自这些国家的访客应购买旅行医疗保险。",
        },
        {
          q: "持 ETA 必须买医疗保险吗？",
          a: "内政事务部建议购买，并说明你在澳大利亚的所有医疗费用均由本人承担。具体签证条件请在 VEVO 或签证批准通知中确认。",
        },
        {
          q: "看病可以用 Medicare 吗？",
          a: `Medicare 面向居民。只有来自 ${F.rhcaCountries} 个协议国的访客才能在协议范围内获得部分公共医疗；其他访客自行支付。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "bringing-medicines",
      enSlug: "bringing-medicines",
      title: `携带药品进入澳大利亚：${F.medicineSupplyMonths} 个月用量规定`,
      description: `自用最多 ${F.medicineSupplyMonths} 个月用量，尽量保留原包装，携带处方或医生信函，并须申报。部分药品禁止携带。`,
      related: ["healthcare-for-visitors", "smoking-vaping-and-alcohol", "airport-security-liquids"],
      blocks: [
        {
          p: "根据“旅客豁免”（traveller's exemption），旅客携带自用药品进入澳大利亚无需许可证——前提是遵守其条件。该豁免也适用于与你同行的直系亲属。",
        },
        { h2: "条件" },
        {
          ul: [
            `不超过 ${F.medicineSupplyMonths} 个月的用量`,
            "尽可能保留带有药房标签的原包装",
            "携带处方，或注明药品名称和剂量的医生信函",
            "入境时向澳大利亚边防部队申报所有药品",
            "不要把药品送给或卖给他人，离境时带走剩余药品",
          ],
        },
        { h2: "强效止痛药、ADHD 药物和安眠药" },
        {
          p: "药物管制办公室（Office of Drug Control）说明，吗啡、羟考酮、美沙酮、哌甲酯、Adderall 和苯二氮䓬类等处方药在旅客豁免范围内——前提是有处方或医生信函。任何含可待因的药品，无论含量多少，也需要处方或医生信函。",
        },
        { h2: "不能携带的药品" },
        {
          ul: [
            "米非司酮（RU486）等堕胎药",
            "育亨宾（yohimbine）",
            "氨基比林（aminophenazone、aminopyrine）、安乃近（dipyrone、metamizole）",
            "苦杏仁苷（amygdalin、laetrile）",
          ],
        },
        { h2: "药用完了怎么办" },
        {
          p: "去看澳大利亚的医生（全科医生 GP），开具澳大利亚处方。从国内邮寄药品受到限制：处方药需要有效的澳大利亚处方，每个包裹不得超过 3 个月用量，管制药品和电子烟则完全不能邮寄。",
        },
        { source: { label: "澳大利亚治疗用品管理局（TGA）— 携带药品入境澳大利亚", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
        { source: { label: "药物管制办公室（Office of Drug Control）— 携带药品前往澳大利亚", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
        { source: { label: "澳大利亚治疗用品管理局（TGA）— 个人进口计划（Personal Importation Scheme）", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
      ],
      faq: [
        {
          q: "可以带多少药品去澳大利亚？",
          a: `最多 ${F.medicineSupplyMonths} 个月的用量，供本人或同行的直系亲属使用。`,
        },
        {
          q: "可以带 ADHD 药物吗？",
          a: "哌甲酯和 Adderall 等药品在旅客豁免范围内，前提是携带处方或医生信函并申报。",
        },
        {
          q: "家人可以把药寄到澳大利亚给我吗？",
          a: "只能在严格条件下。处方药需要有效的澳大利亚处方，管制药品不能邮寄。",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "smoking-vaping-and-alcohol",
      enSlug: "smoking-vaping-and-alcohol",
      title: "澳大利亚的吸烟、电子烟和饮酒：访客容易忽略的规定",
      description: `电子烟只在药房出售；旅客可带 ${F.vapeDevices} 支供本人治疗使用。饮酒年龄为 ${F.legalAge} 岁，室内公共场所禁烟。`,
      related: ["bringing-medicines", "driving-in-australia", "emergency-and-safety"],
      blocks: [
        {
          p: "澳大利亚把电子烟作为治疗用品而不是普通消费品来管理。这让很多访客感到意外——尤其是习惯在便利店买电子烟的人。",
        },
        { h2: "电子烟" },
        {
          ul: [
            "电子烟只能由参与计划的药房出售。烟草店、电子烟店和便利店都不得出售任何电子烟，无论是否含尼古丁",
            `在州法律允许的情况下，年满 ${F.legalAge} 岁的成年人可能可以在药房免处方购买尼古丁浓度 20 mg/mL 或以下的电子烟——需出示身份证件，每次限一个月用量，口味仅限薄荷、薄荷醇或烟草味`,
            "即使有处方，也不能从海外网站订购电子烟自用",
            "部分州禁止在没有处方的情况下持有尼古丁电子烟",
          ],
        },
        { h2: "随身携带电子烟" },
        {
          p: `乘飞机或船抵达的旅客最多可携带 ${F.vapeDevices} 支电子烟、${F.vapeAccessories} 个配件（烟弹、胶囊或烟仓）和 ${F.vapeLiquid} 烟油。TGA 的表述是：这些物品必须用于旅客本人的治疗，或同一航班或船上由其照顾者的治疗。边防官员可以没收他们怀疑属于非法进口的物品。`,
        },
        { h2: "吸烟" },
        {
          p: `向未满 ${F.legalAge} 岁的人出售烟草是违法的。所有州和领地都禁止在室内公共场所吸烟——包括公共交通、办公室、购物中心、电影院和机场等。户外用餐区、海滩和游乐场等户外场所的规定因州而异。免税烟草的携带数量也有限制。`,
        },
        { h2: "饮酒" },
        {
          ul: [
            `购买酒类或在持牌场所饮酒必须年满 ${F.legalAge} 岁`,
            "在户外哪里可以喝酒由各州和地方政府规定——许多公共场所是禁酒区",
            `酒驾标准为血液酒精浓度 ${F.bacLimit}——学习驾驶者和试用期驾驶者为零`,
          ],
        },
        { source: { label: "澳大利亚治疗用品管理局（TGA）— 电子烟：给个人的信息", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
        { source: { label: "澳大利亚卫生部（Department of Health）— 澳大利亚的吸烟与烟草法律", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
        { source: { label: "澳大利亚卫生部（Department of Health）— 澳大利亚的酒类法律", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
      ],
      faq: [
        {
          q: "在澳大利亚的便利店能买到电子烟吗？",
          a: "不能。电子烟只能由参与计划的药房出售。其他零售商出售任何电子烟都是违法的。",
        },
        {
          q: "可以带多少电子烟去澳大利亚？",
          a: `最多 ${F.vapeDevices} 支电子烟、${F.vapeAccessories} 个配件和 ${F.vapeLiquid} 烟油，用于本人或同行受你照顾者的治疗。`,
        },
        {
          q: "澳大利亚的饮酒年龄是多少？",
          a: `${F.legalAge} 岁。购买酒类或在持牌场所饮酒必须年满 ${F.legalAge} 岁。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "emergency-and-safety",
      enSlug: "emergency-and-safety",
      title: `澳大利亚紧急电话：${F.emergency}、${F.emergencyMobile}——以及为什么 911 打不通`,
      description: `警察、消防、救护车拨 ${F.emergency}；手机也可拨 ${F.emergencyMobile}。911 不会转接。非紧急警务：${F.policeAssistance}。可安排口译。`,
      related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-australia"],
      blocks: [
        {
          p: `三个零（Triple Zero，${F.emergency}）是澳大利亚在危及生命或情况紧急时联系警察、消防和救护车的紧急电话。用固定电话、手机、公用电话或卫星电话拨打均免费。`,
        },
        { h2: "电话号码" },
        {
          ul: [
            `${F.emergency} — 警察、消防、救护车`,
            `${F.emergencyMobile} — 只能用手机拨打，接通的是同一个 ${F.emergency} 服务，并不比 ${F.emergency} 优先`,
            `${F.policeAssistance} — 警务协助热线（Police Assistance Line），用于非紧急的警务事项`,
            `${F.ses} — 州紧急服务署（State Emergency Service），用于不危及生命的洪水、风暴和海啸求助`,
            "不要拨 911——拨打 911 不会被转接到 000",
          ],
        },
        { h2: "如果你不会说英语" },
        {
          p: `拨打 ${F.emergency}，说出“police”（警察）、“fire”（消防）或“ambulance”（救护车），然后不要挂断。对方会安排翻译。`,
        },
        { h2: "手机与信号覆盖" },
        {
          ul: [
            `如果你的网络没有信号，手机会自动使用其他可用网络接通 ${F.emergency}——即使没有 SIM 卡`,
            `如果所有网络都没有覆盖，就无法用手机联系 ${F.emergency}。澳大利亚内陆的大片地区都没有信号`,
            `不能用短信联系 ${F.emergency}`,
            "如果约 5 秒内没有接通，请挂断后重拨",
          ],
        },
        {
          note: `澳大利亚的 3G 网络已经关闭。3G 手机和部分较旧的 4G 手机——尤其是在海外购买的手机——可能无法拨打 ${F.emergency}。监管机构建议不要通过拨打 ${F.emergency} 来测试，而是询问电信运营商。`,
        },
        { source: { label: "澳大利亚基础设施部（Department of Infrastructure）— 三个零（Triple Zero，000）", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
        { source: { label: "澳大利亚通信与媒体管理局（ACMA）— 3G 网络关闭", url: "https://www.acma.gov.au/3g-network-switch" } },
      ],
      faq: [
        {
          q: "在澳大利亚拨 911 有用吗？",
          a: `没有用。拨打 911 不会被转接。请拨 ${F.emergency}，或用手机拨 ${F.emergencyMobile}。`,
        },
        {
          q: `没有澳大利亚 SIM 卡能拨 ${F.emergency} 吗？`,
          a: `可以，只要有任何一家移动网络覆盖。拨打 ${F.emergency} 时，手机会连接任何可用网络，即使没有有效的 SIM 卡。`,
        },
        {
          q: `可以发短信给 ${F.emergency} 吗？`,
          a: `不可以。${F.emergency} 不能通过短信联系。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "phones-and-sim-cards",
      enSlug: "phones-and-sim-cards",
      title: "澳大利亚的手机和 SIM 卡：身份核验与 3G 关闭",
      description: "开通澳大利亚预付 SIM 卡需要核验身份，本人名下的护照即可。请先确认你的手机支持澳大利亚的 4G/5G。",
      related: ["emergency-and-safety", "power-plugs", "money-and-tipping"],
      blocks: [
        {
          p: "你可以使用国内套餐的漫游服务，也可以购买澳大利亚的预付 SIM 卡。如果购买当地 SIM 卡，有两点与许多国家不同：身份核验，以及 3G 的终结。",
        },
        { h2: "身份核验" },
        {
          p: "依照法律，电信运营商在开通预付移动服务时，必须收集你的姓名、出生日期和地址，并核验你的身份。本人名下签发的护照是认可的证件之一——不必是澳大利亚护照。证件不得过期。",
        },
        {
          p: "运营商也可以用其他方式核验身份，例如政府证件核验、已有账户、银行卡交易或经认证的数字身份（Digital ID）服务。具体某家运营商如何办理——在门店还是网上——由运营商自行决定。",
        },
        { h2: "先确认你的手机" },
        {
          p: "澳大利亚的 3G 网络已经关闭。只支持 3G 的手机已完全无法使用，部分依赖 3G 通话的 4G 手机无法进行语音通话，也无法联系紧急服务。较旧的 4G 手机和在海外购买的手机风险最高。运营商不得为其识别出无法拨打三个零（Triple Zero，000）的手机开通服务。",
        },
        {
          ul: [
            "付款前，请运营商确认你的机型可以在其 4G/5G 网络上使用并支持 VoLTE 通话",
            "不要通过拨打 000 来测试紧急呼叫",
          ],
        },
        {
          note: "监管机构 ACMA 将在 2026 年检讨预付卡的身份核验规则。基本要求——需要核验身份，护照可以使用——已经实行多年。",
        },
        { source: { label: "澳大利亚通信与媒体管理局（ACMA）— 预付手机的身份核验", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
        { source: { label: "澳大利亚联邦立法登记册（Federal Register of Legislation）— Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
        { source: { label: "澳大利亚通信与媒体管理局（ACMA）— 确保 3G 关闭后手机仍能拨打 000", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
      ],
      faq: [
        {
          q: "用外国护照可以买澳大利亚 SIM 卡吗？",
          a: "可以。本人名下签发的护照是开通预付服务时认可的身份证件。证件不得过期。",
        },
        {
          q: "我从国内带来的手机在澳大利亚能用吗？",
          a: "大多数较新的手机可以，但 3G 网络已经关闭。较旧的 4G 手机和部分在海外购买的手机可能无法通话或拨打 000——请让运营商检查你的机型。",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "power-plugs",
      enSlug: "power-plugs",
      title: `澳大利亚的电源插头：I 型插头与 ${F.voltage} ${F.frequency}`,
      description: `澳大利亚使用两片扁脚呈倒 V 字形的插头（I 型），电压 ${F.voltage}、${F.frequency}。插电前先看充电器标签。`,
      related: ["phones-and-sim-cards", "money-and-tipping", "arriving-in-australia"],
      blocks: [
        {
          p: "澳大利亚的插座使用两片扁平金属插脚呈倒 V 字形的插头，有时中间还有第三个插脚。澳大利亚旅游局称之为“Type 1”插头；国际上通常标为 I 型（Type I）。欧洲、韩国和中国的圆脚插头不使用转换插头是插不进去的。",
        },
        { h2: "电压" },
        {
          p: `电压为 ${F.voltage}、${F.frequency}（澳大利亚旅游局也给出 220–240 V 的范围）。大多数手机和笔记本电脑充电器标示 100–240 V，只用转换插头就能使用。请看标签：如果不覆盖 230 V，就需要变压器，而不只是转换插头。`,
        },
        { h2: "要带什么" },
        {
          ul: [
            "I 型转换插头，或多国通用转换插头",
            "只有不支持 230 V 的电器才需要变压器",
          ],
        },
        { source: { label: "澳大利亚旅游局（Tourism Australia）— 澳大利亚旅行实用贴士", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
        { source: { label: "澳大利亚旅游局（Tourism Australia）— 澳大利亚终极行李清单", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
      ],
      faq: [
        {
          q: "去澳大利亚需要转换插头吗？",
          a: "如果你的插头不是两片扁脚呈倒 V 字形的澳大利亚式插头，就需要。欧洲、韩国和中国的圆脚插头需要转换插头。",
        },
        {
          q: "需要变压器吗？",
          a: `只有不支持 ${F.voltage} 的电器才需要。标示 100–240 V 的充电器只用转换插头即可。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "public-holidays",
      enSlug: "public-holidays",
      title: "澳大利亚公众假期 2026–2027：各州日期",
      description: "公众假期由各州和领地自行制定。哪些日期全国相同，哪些不同，以及对你的行程有什么影响。",
      related: ["money-and-tipping", "driving-in-australia", "emergency-and-safety"],
      blocks: [
        {
          p: "澳大利亚没有统一的全国假期表。各州和领地自行制定公众假期，并自行决定假期逢周末时是否增设补假。以下日期来自联邦职场监管机构公平工作申诉专员署（Fair Work Ombudsman）。",
        },
        { h2: "2026 年余下的假期" },
        {
          ul: [
            "12月25日（周五）— 圣诞节（全国）",
            "12月26日（周六）— 节礼日（Boxing Day；南澳大利亚州为 Proclamation Day 假期）",
            "12月28日（周一）— 大多数州和领地为节礼日增设的公众假期；塔斯马尼亚州的节礼日本身就在这个周一",
          ],
        },
        { h2: "2027 年：全国相同的日期" },
        {
          ul: [
            "1月1日（周五）— 新年",
            "1月26日（周二）— 澳大利亚日（Australia Day）",
            "3月26日（周五）— 耶稣受难日（Good Friday）",
            "3月29日（周一）— 复活节星期一（Easter Monday）",
            "12月25日（周六）— 圣诞节，12月27日（周一）为增设的公众假期",
          ],
        },
        { h2: "2027 年：各州不同的日期" },
        {
          ul: [
            "复活节星期六（3月27日）和复活节星期日（3月28日）未列入塔斯马尼亚州；西澳大利亚州未列入复活节星期六",
            "澳新军团日（Anzac Day）为4月25日（周日）。新南威尔士州和西澳大利亚州增设4月26日（周一）；首都领地、北领地和昆士兰州在4月26日（周一）放假；南澳大利亚州、塔斯马尼亚州和维多利亚州只有周日当天",
            "国王诞辰（King's Birthday）在大多数州为6月14日（周一）——但西澳大利亚州为9月27日（周一），昆士兰州为10月4日（周一）",
            "劳动节（Labour Day）从3月（西澳大利亚州、维多利亚州、塔斯马尼亚州）到5月（昆士兰州、北领地）和10月（新南威尔士州、首都领地、南澳大利亚州）不等",
            "节礼日为12月26日（周日），大多数地方以12月28日（周二）为增设假期；塔斯马尼亚州的节礼日在12月28日（周二）",
          ],
        },
        {
          note: "2027 年的日期以公平工作申诉专员署事先公布的为准。维多利亚州 AFL 总决赛前一天（周五）的假期尚未确定。部分地区性或仅限城市的假期（例如农业展览日 show day）未列出。",
        },
        { h2: "对访客意味着什么" },
        {
          p: "银行和政府机构会关闭。在城市里，许多商店、咖啡馆和餐厅照常营业，有时账单上会加收公众假期附加费。公共交通通常按缩减的时刻表运行。长周末和圣诞至一月的暑假是本地出游高峰，请提早预订住宿和租车。",
        },
        { source: { label: "公平工作申诉专员署（Fair Work Ombudsman）— 2026 年公众假期", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
        { source: { label: "公平工作申诉专员署（Fair Work Ombudsman）— 2027 年公众假期", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
      ],
      faq: [
        {
          q: "国王诞辰在全澳大利亚是同一天吗？",
          a: "不是。大多数州在六月的第二个周一，但西澳大利亚州在九月下旬，昆士兰州在十月上旬。",
        },
        {
          q: "节礼日在各地都是公众假期吗？",
          a: "是的，不过南澳大利亚州称之为 Proclamation Day 假期；而且当它逢周末时，各州的补假日期不同。",
        },
      ],
      checked: CHECKED,
      practical: true,
    },
    {
      slug: "driving-in-australia",
      enSlug: "driving-in-australia",
      title: "持海外驾照在澳大利亚驾车：各州规定不同",
      description: `各州自定规则：新南威尔士州允许持海外驾照最长 ${F.driveNswMonths} 个月，北领地 ${F.driveNtMonths} 个月。非英文驾照需翻译件或 IDP。`,
      related: ["public-holidays", "emergency-and-safety", "smoking-vaping-and-alcohol"],
      blocks: [
        {
          p: "澳大利亚靠左行驶。环岛按顺时针方向行驶，并须让右侧来车先行。限速以公里/小时计：建成区内除另有标示外为 50 km/h，其他道路通常为 100 km/h，部分高速公路最高 110 km/h。",
        },
        { h2: "驾照由各州管理" },
        {
          p: "对访客没有统一的全国规定。各州和领地自行决定访客可以持海外驾照驾车多久，以及需要附带什么。请查看你将驾车经过的每一个州的规定——一趟自驾游可能会跨越好几个州。",
        },
        {
          ul: [
            `新南威尔士州（NSW）：游客和临时访客可持有效海外驾照驾车，最长 ${F.driveNswMonths} 个月`,
            `维多利亚州（VIC）：如果你在维多利亚州居住和驾车的时间少于 ${F.driveNswMonths} 个月（从首次抵达时算起），即可驾车`,
            `北领地（NT）：访客和新居民最长 ${F.driveNtMonths} 个月`,
            "昆士兰州、西澳大利亚州、南澳大利亚州、塔斯马尼亚州和首都领地（ACT）：访客可持有效海外驾照驾车；官方页面未写明访客的固定期限",
          ],
        },
        {
          note: "你可能在昆士兰州、新南威尔士州、西澳大利亚州和首都领地看到的三个月期限，适用于澳大利亚公民以及永久或居民签证持有人，而不是游客。",
        },
        { h2: "如果你的驾照不是英文的" },
        {
          p: "随身携带驾照的英文翻译件或国际驾照（International Driving Permit，IDP），并与驾照原件一起携带。细节各有不同：北领地要求出发前办好 IDP，或由北领地认可的翻译人员出具正式翻译件；昆士兰州要求携带认可的英文翻译件。IDP 永远不能取代你本国的驾照——两者都要带。",
        },
        { h2: "出发之前" },
        {
          ul: [
            "驾车时务必随身携带驾照",
            "驾照必须有效，且准驾车型与所驾车辆相符",
            `酒驾标准为血液酒精浓度 ${F.bacLimit}`,
            "城镇之间距离很远——请规划好加油和休息",
          ],
        },
        { source: { label: "新南威尔士州交通局（Transport for NSW）— 从海外来访", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
        { source: { label: "维多利亚州道路局（VicRoads）— 持海外驾照驾车", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
        { source: { label: "昆士兰州政府（Queensland Government）— 持海外驾照在昆士兰驾车", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
        { source: { label: "北领地政府（NT Government）— 访客驾车的驾照规定", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
        { source: { label: "澳大利亚旅游局（Tourism Australia）— 在澳大利亚驾车", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
      ],
      faq: [
        {
          q: "在澳大利亚需要国际驾照吗？",
          a: "如果你的驾照是英文的，一般不需要。如果不是，请携带英文翻译件或国际驾照（IDP），并与驾照原件一起带上。具体规定取决于各州。",
        },
        {
          q: "持海外驾照可以开多久？",
          a: `取决于州：新南威尔士州最长 ${F.driveNswMonths} 个月，维多利亚州为居住少于 ${F.driveNswMonths} 个月，北领地最长 ${F.driveNtMonths} 个月。其他州未写明访客的固定期限。`,
        },
      ],
      checked: CHECKED,
      practical: true,
    },
  ],
};
