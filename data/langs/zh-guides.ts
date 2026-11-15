import { FACTS as F } from "./_schema";
import type { Article } from "./_schema";
const DECISION = "几分钟到几天"; // = F.decisionTypical（表示用）

/**
 * 英語ページの横展開（2026-11-15）。英語の data/pages.ts にあって zh 版に無かった話題。
 * ⚠️ 読者＝シンガポール・マレーシア等の旅券（eVisitor 対象外 → ETA subclass 601・アプリ専用）。
 *    eVisitor の申請を勧めない。eVisitor 手続き固有のページは ETA 向けに書き直すか見送る。
 * ⚠️ 中国本土旅券は eVisitor・ETA どちらの一覧にも無い。ETA が使えると読める書き方をしない
 *    （「香港」は必ず「中国香港特别行政区护照」と書く）。
 * ⚠️ 数値は F（data/facts.ts）から入れる。本文に直接書かない。
 */
const CHECKED_1115 = "2026年11月15日";

const SRC_EVISITOR = { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" };
const SRC_ETA = { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" };
const SRC_DUTY_FREE = { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" };

export const zhGuides: Article[] = [
  {
    slug: "eligible-passports",
    enSlug: "eligible-passports",
    added: "2026-11-15",
    checked: CHECKED_1115,
    title: `哪些护照可以申请 eVisitor？欧洲 ${F.eligibleCountries} 国名单，以及新加坡等护照适用的 ETA`,
    description: `eVisitor 只面向欧洲 ${F.eligibleCountries} 个国家的公民。完整名单、不符合条件的英国护照类型，以及新加坡、马来西亚等护照适用的 ETA。`,
    related: ["eta-vs-evisitor", "transit", "eta-app-guide"],
    blocks: [
      {
        p: `能否申请 eVisitor（subclass 651）取决于您的国籍和所持护照，而不是居住地。澳大利亚内政事务部规定，申请人必须是 ${F.eligibleCountries} 个国家之一的公民，并持有该国的有效护照。新加坡、马来西亚等护照不在这份名单上。`,
      },
      { h2: `eVisitor 的 ${F.eligibleCountries} 个国家` },
      {
        p: "安道尔、奥地利、比利时、保加利亚、克罗地亚、塞浦路斯、捷克、丹麦、爱沙尼亚、芬兰、法国、德国、希腊、匈牙利、冰岛、爱尔兰、意大利、拉脱维亚、列支敦士登、立陶宛、卢森堡、马耳他、摩纳哥、荷兰、挪威、波兰、葡萄牙、罗马尼亚、圣马力诺共和国、斯洛伐克、斯洛文尼亚、西班牙、瑞典、瑞士、英国（英国公民）和梵蒂冈。",
      },
      { h2: "不符合条件的护照" },
      {
        ul: [
          "英国方面，只有英国公民（British Citizen）护照在名单上",
          "英国国民（海外）护照 BN(O)、英国属土公民、英国海外公民、英国受保护人士和英国臣民护照均不能使用",
          "非公民护照、身份证明书（certificate of identity）或 Titre de Voyage 等其他旅行证件均不能使用",
          "梵蒂冈方面，护照必须显示持有人为梵蒂冈（圣座）国民",
        ],
      },
      { h2: "新加坡、马来西亚等护照：ETA" },
      {
        p: `ETA（subclass 601）有自己的名单，共 ${F.etaEligibleCountries} 种护照，其中包括文莱、加拿大、中国香港特别行政区、日本、马来西亚、新加坡、韩国、台湾（不含公务或外交护照）、美国，以及英国国民（海外）护照 BN(O)。ETA 在官方应用内收取 ${F.etaFee} 的服务费。其他护照的持有人可能符合访客签证（subclass 600）的条件。`,
      },
      {
        note: "名单中的香港指中国香港特别行政区护照。不在上述两份名单中的护照，既不能申请 eVisitor，也不能申请 ETA。",
      },
      { h2: "同时在两份名单上的护照" },
      {
        p: `根据我们对两份官方名单的比对，有 ${F.bothListsCountries} 种护照同时出现在两份名单上；其余 ${F.eligibleCountries - F.bothListsCountries} 个 eVisitor 国家不在 ETA 名单上：保加利亚、克罗地亚、塞浦路斯、捷克、爱沙尼亚、匈牙利、拉脱维亚、立陶宛、波兰、罗马尼亚、斯洛伐克和斯洛文尼亚。对于同时在两份名单上的护照，ETA 页面写明欧洲护照持有人“可能符合” eVisitor 的条件，且申请 eVisitor 不收费。这一点主要与同时持有欧洲护照的双重国籍者有关。`,
      },
      { h2: "其他需要注意的情况" },
      {
        ul: [
          "澳大利亚公民即使同时持有符合条件的护照，也不能申请 eVisitor 或 ETA——他们入境澳大利亚不需要签证",
          "家庭出行时，每位成员都需要单独申请，包括登记在父母护照上的儿童",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "名单可能变动。申请前，请针对您实际出行所用的护照查看官方页面。",
      },
    ],
    faq: [
      {
        q: "我持英国国民（海外）护照 BN(O)，可以申请 eVisitor 吗？",
        a: "不可以。BN(O) 护照不适用 eVisitor，而是在 ETA（subclass 601）的名单上。",
      },
      {
        q: "我住在欧洲，但持新加坡护照，可以申请 eVisitor 吗？",
        a: "不可以。eVisitor 要求申请人是名单所列国家的公民并持有该国有效护照，居住地不会改变这一点。持新加坡护照应申请 ETA。",
      },
    ],
  },
  {
    slug: "eta-common-mistakes",
    enSlug: "common-mistakes",
    added: "2026-11-15",
    checked: CHECKED_1115,
    title: "申请澳大利亚 ETA 时应避免的错误——依据内政事务部的说明",
    description: "申请错了签证类别、护照信息不一致、换护照后沿用旧 ETA、获批前就订行程——内政事务部提醒过的问题，按 ETA 申请人的情况整理。",
    related: ["eta-passport-and-details", "eta-application-refused", "eta-app-guide", "eta-official-site"],
    blocks: [
      {
        p: "以下各点取自澳大利亚内政事务部的 ETA 页面和 eVisitor 页面，并按新加坡、马来西亚等 ETA 护照持有人的情况整理。",
      },
      { h2: "先确认签证类别" },
      {
        p: `内政事务部在 eVisitor 页面列出的检查项之一，是“您的护照来自 eVisitor 适用国家”。eVisitor 只面向欧洲 ${F.eligibleCountries} 个国家的护照。持新加坡等护照，应申请的是 ETA（subclass 601），而且只能在官方应用中申请。`,
      },
      { h2: "ETA 申请人须注意的三点" },
      {
        ul: [
          "ETA 的信息必须与护照完全一致；ETA 签发后，内政事务部无法更改这些信息",
          "换了新护照，原来的 ETA 即告终止，需要用新护照重新申请",
          "申请被转交（referral）后，在应用中再提交 ETA 申请，结果也是一样的",
        ],
      },
      { h2: "在错误的地点申请" },
      {
        p: "提交申请时和作出决定时，您都必须身在澳大利亚境外。",
      },
      { h2: "获批前就订行程" },
      {
        p: "内政事务部在 eVisitor 页面上提醒，在收到书面获批通知之前不要安排前往澳大利亚的行程。申请 ETA 时也一样：先确认结果，再购买不可退改的机票。",
      },
      { h2: "停留期间的错误" },
      {
        ul: [
          "工作：访客签证不是工作签证。不得为澳大利亚雇主从事有偿工作，工作或有工作意图都可能导致签证被取消",
          "停留时间长或入境频繁：下次入境时可能会被询问旅行目的，若被认定并非真正的访客，签证可能被取消",
          "签证失效后在没有其他签证的情况下继续停留：您将成为非法非公民（unlawful non-citizen），可能被遣送出境",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
    ],
  },
  {
    slug: "transit",
    enSlug: "transit",
    added: "2026-11-15",
    checked: CHECKED_1115,
    title: `经澳大利亚转机：${F.twovHours} 小时规则与过境签证`,
    description: `即使只是转机，也需要签证或许可。ETA 何时可以涵盖过境、${F.twovHours} 小时免签过境规则，以及 ${F.transitVisaHours} 小时过境签证。`,
    related: ["eligible-passports", "airport-security-liquids", "major-airports", "eta-vs-evisitor"],
    blocks: [
      {
        p: "澳大利亚内政事务部表示，所有非澳大利亚公民入境澳大利亚都需要签证或许可，包括短暂停留以及不离开机场的过境旅客。获得许可的途径有以下三种。",
      },
      { h2: "1. 您已持有 ETA（或其他澳大利亚签证）" },
      {
        p: "内政事务部将 eVisitor、ETA、访客签证和 APEC 商务旅行卡列为允许经澳大利亚过境的签证，而且这些签证还允许更长时间的停留。如果您的行程中有在澳大利亚中转的一段，有效的 ETA 即可涵盖。",
      },
      { h2: "2. 免签过境（TWOV）" },
      {
        p: "只有同时满足以下所有条件，才可以免签过境：",
      },
      {
        ul: [
          "乘飞机抵达澳大利亚",
          `持有已确认的机票，在抵达后 ${F.twovHours} 小时内乘飞机离开澳大利亚前往第三国`,
          "持有进入目的地国家的有效旅行证件",
          "在转乘下一航班之前，无需因任何原因办理入境手续或离开机场过境区",
          "所持护照的国家在 TWOV 名单上",
        ],
      },
      {
        p: "TWOV 名单涵盖的国家比 eVisitor 名单更多，但请在官方的 TWOV 名单中确认您所持的护照是否在列。内政事务部表示，相关信息不适用于无国籍人士和难民。",
      },
      { h2: "需要办理入境手续的情况" },
      {
        p: "内政事务部举出的常见情况包括：需要提取并转运行李，或下一航班从另一个航站楼出发——这时必须持有签证才能办理入境手续。内政事务部建议，如果仍不确定自己是否符合 TWOV 条件，可以考虑先申请签证以防万一。",
      },
      { h2: "3. 过境签证（subclass 771）" },
      {
        ul: [
          `用于经澳大利亚过境，时间不超过 ${F.transitVisaHours} 小时`,
          "免费",
          "每位旅客都需要单独申请，包括登记在父母护照上的婴儿",
          "提交申请时和作出决定时，您都必须身在澳大利亚境外",
        ],
      },
      {
        note: "内政事务部提醒：如果您已持有澳大利亚签证，再获批过境签证很可能会使原有签证终止。ETA 本身已经允许过境。",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "我在悉尼转机要等 10 小时，可以免签过境吗？",
        a: `不能按 TWOV 免签过境，因为 TWOV 要求在抵达后 ${F.twovHours} 小时内乘坐已确认的下一航班。您需要签证——如果您的护照适用 ETA，可以申请 ETA，或者申请过境签证（subclass 771）。`,
      },
      {
        q: "每个机场都有过境区吗？",
        a: "内政事务部发布了关于澳大利亚各机场过境设施的页面。请查看该页面，并向航空公司确认您将使用的机场。",
      },
    ],
  },
  {
    slug: "eta-official-site",
    enSlug: "official-site",
    added: "2026-11-15",
    checked: CHECKED_1115,
    title: "澳大利亚签证的官方渠道：ETA 官方应用与 ImmiAccount，以及如何防范诈骗",
    description: "ETA 只能在内政事务部发布的官方应用中申请；签证申请的官方网站是 ImmiAccount。官方地址，以及内政事务部发布的防诈骗提醒。",
    related: ["eta-app-guide", "eta-cost", "eta-status-check", "eta-common-mistakes"],
    blocks: [
      {
        p: "新加坡、马来西亚等护照持有人申请的 ETA（subclass 601），只能通过澳大利亚内政事务部发布的官方应用 Australian ETA 办理。网站方面，内政事务部称 ImmiAccount 是其移民门户，也是“申请澳大利亚签证时唯一应使用的官方网站”；eVisitor 等签证在 ImmiAccount 中申请。",
      },
      { h2: "官方地址" },
      {
        ul: [
          "签证信息：immi.homeaffairs.gov.au",
          "ImmiAccount 登录与申请：online.immi.gov.au",
          "Australian ETA 应用（仅限 ETA）：由澳大利亚内政事务部发布",
        ],
      },
      { h2: "官方渠道的费用" },
      {
        p: `ETA 没有签证申请费，但使用应用需支付不可退还的申请服务费 ${F.etaFee}。内政事务部写明“eVisitor 是免费的”，但 eVisitor 只面向欧洲 ${F.eligibleCountries} 个国家的护照。`,
      },
      { h2: "内政事务部的防诈骗提醒" },
      {
        ul: [
          "自称来自内政事务部、但发件地址不以 .gov.au 结尾的电子邮件是诈骗",
          "如果有人要求您另付一笔费用才能签发签证（有时称为“CIS 费”），请立即离开——澳大利亚政府签发签证不收取任何额外费用",
          "如果有人不让您在 ImmiAccount 中查看自己的申请，说明对方在向您隐瞒什么",
          "如果手上的批准信所对应的签证在 VEVO（Visa Entitlement Verification Online）中查不到，那很可能是伪造的",
          "内政事务部工作人员在电话中一定会表明身份，绝不会索要信用卡信息或密码",
          "只与澳大利亚政府的官方渠道打交道：内政事务部网站、澳大利亚生物识别信息采集中心，或您所在国家的澳大利亚高级专员公署、大使馆或领事馆",
        ],
      },
      { h2: "由他人协助申请时" },
      {
        p: "在 ETA 应用中，可以有人协助您申请，但协助者必须在您身边。ImmiAccount 账户可以由申请人本人、代表申请人的家人或帮忙申请的朋友设立。内政事务部指出，在澳大利亚，除注册移民代理或澳大利亚执业律师外，第三方提供有偿移民协助是违法的；即使申请由他人提交，核对签证条件仍是您自己的责任。",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
      {
        note: "本站是独立信息网站，不是政府网站。我们不受理申请，也不收取任何费用。",
      },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    enSlug: "travel-authorisations-compared",
    added: "2026-11-15",
    title: "需要哪一种电子旅行许可？澳大利亚 ETA、NZeTA、K-ETA、ESTA 等比较",
    description: "名称相似，规则却大不相同。各制度对应哪个目的地、费用多少，以及混淆它们会造成的错误。",
    related: ["eta-vs-evisitor", "eligible-passports", "eta-cost"],
    blocks: [
      {
        p: "从外表看，各国的电子旅行许可似乎可以互换，其实不然。每个国家都有自己的制度、自己的适用名单、自己的价格，对这份文件的定位也不同——有的是签证，有的则明确不是签证。",
      },
      {
        p: `本页帮您分清各种制度。就澳大利亚而言，新加坡、马来西亚等护照适用的是 ETA，费用为 ${F.etaFee}。`,
      },
      {
        note: "有一条规则处处适用：在政府自己的网站或官方应用中申请，任何代办机构都无法让结果更快出来。收费是官方数倍的网站，只是在替您填写同一份表格。",
      },
      { h2: "澳大利亚——eVisitor 或 ETA" },
      {
        p: `eVisitor（subclass 651）是签证，而且免费，但只面向欧洲 ${F.eligibleCountries} 个国家的护照。护照不在 eVisitor 名单上的旅客改用 ETA（subclass 601），费用为 ${F.etaFee}，在官方应用中申请。两者都允许每次停留最长 ${F.stayMonths} 个月，有效期 ${F.validMonths} 个月。`,
      },
      { h2: "新西兰——NZeTA" },
      {
        p: "面向免签护照的出行前许可，不是签证。费用分为两部分：申请费，以及另行收取的国际游客保护与旅游税，所以不同来源给出的总额会有差异。",
      },
      { h2: "韩国——K-ETA" },
      {
        p: "目前有许多国籍暂时免除 K-ETA，所以首先要弄清的是您是否需要申请，而不是如何申请。",
      },
      { h2: "英国——ETA" },
      {
        p: "适用于前往英国、泽西岛、根西岛和马恩岛、最长 6 个月的访问。GOV.UK 列明费用为 £20。通过官方服务申请。",
      },
      { source: { label: "GOV.UK — Apply for an electronic travel authorisation (ETA)", url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" } },
      { h2: "美国——ESTA，以及加拿大——eTA" },
      {
        p: "两国都为免签旅客设有类似制度。我们在此不列出费用，因为撰写本页时未能依据官方来源核实最新金额，而过时的价格比没有价格更糟。请直接查看官方网站——并且只看官方网站。",
      },
      {
        ul: [
          "美国：esta.cbp.dhs.gov",
          "加拿大：canada.ca（加拿大移民、难民及公民部）",
        ],
      },
      { h2: "真正让人多花钱的错误" },
      {
        ul: [
          "以为一种许可可以涵盖多国行程。每个目的地都是分开的，包括需要离开机场的中途停留。",
          "以为它是签证。有的是，有的不是，这一区别决定了您到达后可以做什么。",
          "以为标价就是全部费用。有些制度另收税费，或按申请方式收取不同金额。",
          "以为通过收费中介申请会更快。表格是同一份，决定也是同一个。",
        ],
      },
      { h2: "核对您自己的护照，而不是看摘要" },
      {
        p: "适用名单会变动，持有两本护照往往意味着两个不同的答案。上述每种制度都有官方的查询方式。请针对您实际出行所用的护照进行确认。",
      },
    ],
  },
  {
    slug: "border-questions",
    enSlug: "border-questions",
    added: "2026-11-15",
    title: "抵达澳大利亚时会被问什么",
    description: "移民、海关和生物安全是三项不同的检查，问的问题也不同。分清楚这三者，排队时间会短很多。",
    related: ["arriving-in-australia", "smartgate-australia", "bringing-medicines"],
    blocks: [
      {
        p: "入境旅客要通过的检查不是一项，而是三项。它们由不同机构负责，关注的事情也不同。用回答一项检查的方式去回答另一项检查的问题，正是让人耽误时间的原因。",
      },
      { h2: "1. 移民检查——您是不是真正的访客" },
      {
        ul: [
          "停留多久、住在哪里",
          "是否持有前往下一目的地或回程的机票",
          "旅行费用如何负担",
          "是否打算工作——持 ETA 不可以工作",
        ],
      },
      { h2: "2. 海关——是否需要缴税" },
      {
        p: `超出免税额的物品，以及达到申报基准额的现金，都必须申报。一般物品的免税额为：${F.customsAgeMin} 岁及以上 ${F.customsGoodsAllowance}（未满 ${F.customsAgeMin} 岁为 ${F.customsGoodsAllowanceMinor}）。`,
      },
      { h2: "3. 生物安全——行李里有什么" },
      {
        p: "这是最容易让没有准备的旅客出问题的检查。澳大利亚会询问食品、植物和动物制品，以及任何接触过泥土或淡水的物品。申报不会让您付出任何代价；不申报则可能让您失去签证。",
      },
      { h2: "入境旅客卡" },
      {
        p: "海关和生物安全方面的回答写在入境旅客卡（Incoming Passenger Card）上，需在降落前填好。请认真对待：这张卡是一份法律声明。官员如果在您的行李中发现未申报的物品，会把这张卡视为您曾声明“没有”的证据。",
      },
      { source: SRC_DUTY_FREE },
      {
        note: "不确定某样东西是否需要申报时，就勾选“是”，让官员来判断。申报的物品即使最后被认定可以带入，也不会受到处罚。",
      },
    ],
  },
  {
    slug: "biosecurity",
    enSlug: "biosecurity",
    added: "2026-11-15",
    title: "澳大利亚生物安全：需要申报什么，以及签证为什么可能被取消",
    description: `未申报生物安全物品，可能被处以最高 ${F.biosecurityPenaltyUnits} 个罚款单位的罚款；签证持有人还可能被取消签证，并在 ${F.visaCancelExclusionYears} 年内不得再申请。`,
    related: ["arriving-in-australia", "bringing-medicines", "smartgate-australia"],
    blocks: [
      {
        p: "澳大利亚是一个岛国，要保护本国的农业，因此生物安全规定非常严格，而且是在机场当场执行，而不是事后在办公室处理。把申报当作走形式的旅客，往往就是被查到的人。",
      },
      { h2: "罚款" },
      {
        p: `对未申报物品开出的违规通知，罚款最高可达 ${F.biosecurityPenaltyUnits} 个罚款单位。一个罚款单位对应的金额由法律规定，并会定期上调：澳大利亚农业、渔业和林业部的页面写明 ${F.biosecurityPenaltyUnits} 个单位为 ${F.biosecurityFineDaff}，而宣布 2023 年指数调整的部长公告则称同样的 ${F.biosecurityPenaltyUnits} 个单位为 ${F.biosecurityFineIndexed}。依赖这一数字之前，请先在官方页面上确认最新金额。`,
      },
      { h2: "对签证持有人来说，罚款还不是最严重的" },
      {
        p: `收到违规通知的旅客可能会被转交审查是否取消签证。签证一旦被取消，就会被安排搭乘最早的航班离开澳大利亚，并且在 ${F.visaCancelExclusionYears} 年内不得再次申请。`,
      },
      { h2: "实际被查出的物品" },
      {
        ul: [
          "任何食品——包括飞机上发的零食",
          "肉类、乳制品、蛋类、蜂蜜以及含有这些成分的任何东西",
          "新鲜水果和蔬菜、种子、坚果",
          "植物材料——木制品、编织品、花卉",
          "沾有泥土或植物残留的登山鞋、帐篷和运动装备",
          "在动物周围或淡水中使用过的任何物品",
        ],
      },
      { h2: "收拾行李之前" },
      {
        ul: [
          "在家里就把鞋子和装备上的泥土清理干净，而不是在排队时才处理",
          "降落前把食物吃掉或扔掉",
          "木制和编织的纪念品要申报——它们属于风险物品，而不只是工艺品",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "在生物安全检查点之前设有回收箱，使用是免费的。但如果您申报了“没有”之后又被查出带着这些物品，就不是免费的了。",
      },
    ],
  },
  {
    slug: "customs-allowances",
    enSlug: "customs-allowances",
    added: "2026-11-15",
    title: "澳大利亚入境免税额：一般物品、酒类、烟草",
    description: `成人可免税携带 ${F.customsGoodsAllowance} 的一般物品、${F.customsAlcoholLitres} 升酒类和 ${F.customsTobaccoGrams} 克烟草。超出部分必须申报。`,
    related: ["arriving-in-australia", "money-and-tipping", "tourist-refund-scheme", "smoking-vaping-and-alcohol"],
    blocks: [
      {
        p: "海关检查与生物安全检查是分开的。生物安全关心的是某件物品是否会给澳大利亚带来风险；海关关心的是这件物品是否需要缴纳关税和税款。通过了其中一项，仍可能在另一项被拦下。",
      },
      { h2: "免税额" },
      {
        ul: [
          `一般物品：${F.customsAgeMin} 岁及以上 ${F.customsGoodsAllowance}，未满 ${F.customsAgeMin} 岁 ${F.customsGoodsAllowanceMinor}`,
          `酒类：${F.customsAlcoholLitres} 升，限 ${F.customsAgeMin} 岁及以上`,
          `烟草：任何形式合计 ${F.customsTobaccoGrams} 克，外加一包已开封的，限 ${F.customsAgeMin} 岁及以上`,
        ],
      },
      { h2: "常见的误解" },
      {
        ul: [
          "入境途中购买的免税品同样计入免税额",
          "礼品也计算在内——看的是您携带物品的价值，而不是您为自己花了多少钱",
          "家庭成员之间未必能像想象中那样合并免税额；依赖这一点之前请先确认",
        ],
      },
      { h2: "超出免税额时" },
      {
        p: "请申报并提供购买凭证，以便计算应缴的关税和税款。超出免税额而不申报，可能导致罚款、起诉或签证被取消。申报只是缴纳应缴的款项而已。",
      },
      { source: SRC_DUTY_FREE },
      {
        note: `现金在入境时也有申报要求：现金以及旅行支票等票据合计价值达到 ${F.cashReportThreshold} 或以上，必须申报——申报方法见“澳大利亚的钱”页面。`,
      },
    ],
  },
  {
    slug: "eta-work-and-study",
    enSlug: "working-and-studying",
    added: "2026-11-15",
    title: `持 ETA 不可以做的事：工作，以及超过 ${F.studyMonths} 个月的学习`,
    description: `ETA 和 eVisitor 一样是访客签证，不允许为澳大利亚雇主工作，学习也以 ${F.studyMonths} 个月为限。`,
    related: ["arriving-in-australia", "healthcare-for-visitors", "eta-validity-and-stay"],
    blocks: [
      {
        p: `ETA 在应用里就能申请，结果也常常很快出来，于是有人把它当成可以在 ${F.stayMonths} 个月里随意行事的宽松许可。并非如此。ETA 是附带条件的访客签证，这些条件与 eVisitor 相同，而且会被严格执行。`,
      },
      { h2: "工作" },
      {
        p: "不可以为澳大利亚雇主工作。商务访问活动与工作是两回事：参加会议、洽谈或出席大会一般没有问题；由澳大利亚企业付酬去完成一项工作则不行。",
      },
      { h2: "为澳大利亚境外的雇主远程工作" },
      {
        p: "为您在海外的现有雇主远程工作属于灰色地带，取决于具体情况，不是信息网站可以替您下结论的事。如果您的行程取决于这个问题的答案，请在订行程之前向内政事务部确认。",
      },
      { h2: "学习" },
      {
        p: `学习以 ${F.studyMonths} 个月为上限。短期课程没有问题，一个学期则不行。更长时间的学习需要学生签证，并须在出发前申请。`,
      },
      { h2: "为什么这比看上去更重要" },
      {
        p: `违反签证条件可能导致签证被取消、被遣送出境，以及最长 ${F.visaCancelExclusionYears} 年的禁止申请期。弄错的代价不是罚款，而是无法再回来。`,
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
    ],
  },
  {
    slug: "eta-application-refused",
    enSlug: "if-your-application-is-refused",
    added: "2026-11-15",
    title: "ETA 申请没有获批时怎么办",
    description: "申请没有获批，接下来该做的事就不同了。应该检查什么、不该做什么，以及为什么马上重新申请通常不是好办法。",
    related: ["eta-common-mistakes", "eta-app-guide", "eligible-passports"],
    blocks: [
      {
        p: `多数 ETA 申请很快就会出结果（官方给出的一般范围是${DECISION}）。如果您的申请没有获批，在做任何事之前，最重要的是先弄清楚原因。`,
      },
      { h2: "不要直接重新申请" },
      {
        p: "再次提交同样的申请，通常只会得到同样的结果，反复申请也不会对您有帮助。内政事务部的 ETA 页面也指出：申请被转交（referral）后，在应用中再提交 ETA 申请，结果是一样的。请先仔细阅读收到的决定通知。",
      },
      { h2: "可能的原因" },
      {
        ul: [
          "护照不在 ETA 名单上——这种情况下，访客签证（subclass 600）可能才是正确的途径",
          "填写的信息与护照不完全一致。姓名、号码和日期都必须与护照上印的一致",
          "健康或品行方面的申报需要评估，无法自动作出决定",
        ],
      },
      { h2: "如果已经订了机票" },
      {
        p: "不要以为到了机场问题就能解决。没有有效签证，航空公司不会让您登机。在办理正确申请的同时，请联系航空公司更改日期。",
      },
      {
        note: `申请被拒与签证被取消是两回事。如果您已持有的签证被取消，今后申请时可能适用最长 ${F.visaCancelExclusionYears} 年的禁止申请期。`,
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
    ],
  },
  {
    slug: "eta-for-children",
    enSlug: "travelling-with-children",
    added: "2026-11-15",
    title: "儿童需要单独申请 ETA 吗？",
    description: "每位旅客都需要自己的签证，包括婴儿。儿童不在父母的 ETA 范围内，需要用孩子本人的护照在官方应用中单独申请。",
    related: ["arriving-in-australia", "smartgate-australia", "healthcare-for-visitors", "eta-app-guide"],
    blocks: [
      {
        p: "需要。ETA 与一本护照关联，所以每位家庭成员都需要自己的 ETA——包括坐在父母腿上的婴儿。",
      },
      { h2: "如何为孩子申请" },
      {
        p: `申请以孩子本人的名义、用孩子本人的护照提交，可以由父母或监护人代为操作。在官方应用中，使用同一部手机的家庭成员可以一起提交并付款；协助申请的人必须在申请人身边。与免费的 eVisitor 不同，孩子的 ETA 申请同样需要支付 ${F.etaFee} 的应用服务费。`,
      },
      { h2: "先检查护照" },
      {
        p: `儿童护照的有效期往往比成人短。护照若在 ETA 的 ${F.validMonths} 个月有效期内到期，日后常会带来麻烦，因为签证绑定在申请时使用的那本护照上——换了新护照，就需要重新申请 ETA。`,
      },
      { h2: "孩子与父母一方或其他人同行时" },
      {
        p: "入境时澳大利亚方面可能会询问监护同意的安排。携带未同行父母一方出具的同意书，以及相关监护权文件的复印件，并不是签证要求，但可以避免可以预见的耽搁。",
      },
      { source: SRC_ETA },
      { source: SRC_EVISITOR },
    ],
  },
  {
    slug: "what-is-evisitor",
    enSlug: "what-is-evisitor",
    added: "2026-11-15",
    title: "eVisitor（subclass 651）是什么？为什么新加坡等护照不能申请",
    description: "eVisitor 是以电子方式签发给欧洲适用护照持有人的免费访客签证。它涵盖什么、面向谁，以及新加坡等护照为什么需要改申请 ETA。",
    related: ["eta-vs-evisitor", "eligible-passports", "arriving-in-australia"],
    blocks: [
      {
        p: `eVisitor（subclass 651）是澳大利亚的访客签证，以电子方式签发并与护照关联。它免费，有效期 ${F.validMonths} 个月，每次入境最长可停留 ${F.stayMonths} 个月。但它只面向欧洲护照——新加坡、马来西亚等护照持有人不能申请。`,
      },
      { h2: "它是签证，不是旅行许可" },
      {
        p: "与新西兰的 NZeTA 不同，eVisitor 是真正的签证。护照上不会盖章或贴签——批准记录与护照关联，办理登机时以电子方式核查。",
      },
      { h2: "面向谁" },
      {
        ul: [
          `欧洲 ${F.eligibleCountries} 个国家的护照持有人：全体欧盟成员国，以及英国（仅限英国公民护照——英国国民（海外）护照 BN(O) 及其他类型的英国护照不适用）、冰岛、挪威、瑞士和几个微型国家`,
          "旅游、探亲访友和商务访问活动",
          "申请时和获批时都身在澳大利亚境外的旅客",
        ],
      },
      { h2: "不面向谁" },
      {
        p: `如果您的护照不在名单上——例如日本、美国、加拿大、新加坡、马来西亚或韩国——就不能申请 eVisitor。这些国籍的旅客应申请 ETA（subclass 601），费用为 ${F.etaFee}，在官方手机应用中申请。`,
      },
      {
        note: "判断标准是国籍，不是居住地。持非欧洲护照居住在欧洲，并不会因此符合条件。",
      },
    ],
  },
  {
    slug: "eta-three-months-per-visit",
    enSlug: "three-months-per-visit",
    added: "2026-11-15",
    title: `ETA 的“每次 ${F.stayMonths} 个月”到底怎么算`,
    description: `ETA 有效期 ${F.validMonths} 个月，但每次停留以 ${F.stayMonths} 个月为限。这是两个不同的数字，混为一谈是行程规划中容易犯的错误。`,
    related: ["arriving-in-australia", "public-holidays", "driving-in-australia", "eta-validity-and-stay"],
    blocks: [
      {
        p: `ETA 自签发之日起 ${F.validMonths} 个月内有效，期间可以多次入境。但它并不给您在澳大利亚连续停留 ${F.validMonths} 个月的权利。每一次访问都以 ${F.stayMonths} 个月为限。这一点与 eVisitor 相同。`,
      },
      { h2: "两个时钟，而不是一个" },
      {
        ul: [
          `签证有效期——${F.validMonths} 个月，从签发日起算，而不是从首次入境起算`,
          `每次停留——${F.stayMonths} 个月，从每次抵达起算`,
          "入境次数——有效期内可多次入境",
        ],
      },
      {
        p: `因此，一月签发的 ETA，无论用没用过，都会在次年一月到期。如果在十二月入境，仍可停留 ${F.stayMonths} 个月，但签证到期后就不能再次入境。`,
      },
      { h2: `这 ${F.stayMonths} 个月不包括的事` },
      {
        ul: [
          "为澳大利亚雇主工作",
          `超过 ${F.studyMonths} 个月的学习`,
          "保证入境——是否准许入境由边境官员决定",
        ],
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: "ETA 不能在澳大利亚境内重新申请来延长停留。如果一次需要停留超过三个月，请在出发前考虑访客签证（subclass 600）。",
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    enSlug: "leaving-and-returning",
    added: "2026-11-15",
    title: `离开澳大利亚再回来，会重新获得 ${F.stayMonths} 个月吗？`,
    description: `每次入境都会重新开始计算 ${F.stayMonths} 个月，但接连不断的访问会引起询问，边境官员也可以拒绝您入境。`,
    related: ["arriving-in-australia", "tourist-refund-scheme", "airport-security-liquids", "eta-three-months-per-visit"],
    blocks: [
      {
        p: `每次抵达都会开始一个最长 ${F.stayMonths} 个月的新停留期。所以在 ETA 有效期内，去一趟新西兰或巴厘岛再回来，确实会让每次停留的时钟重新开始。`,
      },
      { h2: "但它是访客签证" },
      {
        p: "ETA 和 eVisitor 一样，是以“您是来访问的”为前提签发的。一个人在十二个月里有九个月待在澳大利亚、每次只短暂离开，那就不是访问——而是持访客签证在澳大利亚生活。边境官员看的是您护照上的整体出入境记录，而不只是这一次入境。",
      },
      { h2: "再次入境时可能需要出示的东西" },
      {
        ul: [
          "前往下一目的地或回程的机票",
          "足以支付停留期间费用的资金",
          "您会回国的证明：工作、学业、租约、家庭",
          "这么快就再次入境的理由",
        ],
      },
      { h2: "如果被拒绝入境" },
      {
        p: "有效的签证是出行的许可，而不是入境的保证。如果官员不认为您是真正的访客，签证可能在边境被取消，您会被安排搭乘下一班可用航班返回。这一记录还会影响您今后的签证申请。",
      },
      { source: SRC_EVISITOR },
      { source: SRC_ETA },
      {
        note: `ETA 在签发 ${F.validMonths} 个月后到期，到期即不能再用。在有效期快结束时安排回程之前，请先确认签发日期。`,
      },
    ],
  },
  {
    slug: "eta-passport-and-details",
    enSlug: "passport-and-details",
    added: "2026-11-15",
    title: "ETA 只绑定一本护照——信息必须准确",
    description: "ETA 与申请时使用的护照关联。换了新护照、姓名不一致或拿错护照，都会在办理登机时被拦下。",
    related: ["eta-new-passport", "eta-common-mistakes", "eta-required-documents", "eta-app-guide"],
    blocks: [
      {
        p: "ETA 没有贴签，也不需要打印任何文件。它以记录的形式与一个护照号码关联，航空公司在办理登机时核查这条记录。如果您手上的护照不是记录里的那一本，这份 ETA 就等于不存在。",
      },
      { h2: "换了新护照，就要重新申请" },
      {
        p: `内政事务部的 ETA 页面写明：换了新护照，原来的 ETA 即告终止，需要用新护照重新申请。即使旧 ETA 仍在 ${F.validMonths} 个月有效期内也是如此。请在出发前用新护照在官方应用中重新申请。`,
      },
      { h2: "信息必须与护照完全一致" },
      {
        p: "在官方应用中，扫描护照会自动填入姓名、出生日期、护照号码等信息。提交前请逐项核对，因为 ETA 的信息必须与护照完全一致，而 ETA 签发后，内政事务部无法更改这些信息。",
      },
      {
        ul: [
          "姓名以护照机读区的写法为准，而不是您平时的写法",
          "护照号码逐个字符核对——0 与 O、1 与 I",
          "国籍以护照上显示的为准，而不是居住地",
        ],
      },
      { h2: "双重国籍者" },
      {
        p: "请持 ETA 所绑定的那本护照出行。拿错护照办理登机，就会出问题。",
      },
      { source: SRC_ETA },
      {
        note: `ETA 的应用服务费为 ${F.etaFee}。收费更高、声称代您提交 ETA 的网站是在加收自己的费用，并不是官方渠道。`,
      },
    ],
  },
  {
    slug: "eta-new-passport",
    enSlug: "new-passport-after-approval",
    added: "2026-11-15",
    title: "ETA 获批后换了新护照，怎么办？",
    description: "ETA 与申请时使用的护照关联。换了新护照，原来的 ETA 即告终止，需要用新护照在官方应用中重新申请。",
    related: ["eta-passport-and-details", "eta-app-guide", "eta-validity-and-stay"],
    blocks: [
      {
        p: "这种情况很常见：护照到期更新、遗失后补发，或因改名重新签发。对于 ETA 持有人来说，规则很明确。",
      },
      { h2: "实际会发生什么" },
      {
        p: "ETA 绑定在申请时使用的护照号码上。内政事务部的 ETA 页面写明：换了新护照，原来的 ETA 即告终止，需要重新申请。航空公司和边境系统核查的是您出示的护照。",
      },
      { h2: "该怎么做" },
      {
        ul: [
          "拿到新护照后，在出发前用新护照在官方应用中重新申请 ETA",
          `新的申请同样需要支付 ${F.etaFee} 的应用服务费`,
          "不要等到机场才处理——在时间充裕时办理，才不会耽误行程",
        ],
      },
      {
        note: "网上看到的“把新护照信息告知内政事务部即可”的做法，针对的是欧洲护照适用的 eVisitor，不适用于 ETA。",
      },
      { source: SRC_ETA },
    ],
  },
];
