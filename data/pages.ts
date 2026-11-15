import { FACTS as F } from "@/data/facts";
import { PRACTICAL } from "@/data/pages-practical";

/**
 * 英語（ルート）の下層ページ。uketa（eta-se.com）の言語ディレクトリと同じ13本構成に合わせる。
 *   トップ（app/page.tsx）＋ここに定義する12本 = 13ページ
 *
 * ⚠️ 数値は必ず F（data/facts.ts）から入れる。本文に直接書かない。
 * ⚠️ eVisitor固有の要点を各ページで外さないこと:
 *      申請料は無料／対象は欧州36か国のみ／対象外はETA(601)・AUD$20・アプリ専用／
 *      これは渡航認証ではなく**ビザ**（subclass 651）／豪州国内からは申請できない
 */
export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { note: string }
  /** 出典リンク。数値・罰則を書いたページには必ず添える（読者が一次情報を辿れるように） */
  | { source: { label: string; url: string } }
  /** 同じ言語のページへのカード一覧（ハブページ用）。スラッグで指定し、タイトル・説明は相手ページから引く */
  | { links: string[] };

export type Faq = { q: string; a: string };

export type Page = {
  slug: string;
  title: string;
  nav: string;
  description: string;
  blocks: Block[];
  /** 本文下の関連カードに優先して出すスラッグ。足りない分は一覧の前後で埋める（全ページに被リンクが回るように） */
  related?: string[];
  /** よくある質問。本文の後に表示し、FAQPage 構造化データも出す */
  faq?: Faq[];
  /** このページを公式で確認した日（表示用）。無ければ FACTS.updatedLabel */
  checked?: string;
  /** 入国後の実用ページ（ハブ以外）。トップの一覧には出さず、ハブと関連カードから辿らせる */
  practical?: boolean;
};

/**
 * 関連カードの選び方（英語・各言語で共通）。
 * ⚠️ 以前は全ページが「一覧の先頭6本」を出していたため、後ろのページはトップからしか張られていなかった。
 *    明示した related → 一覧で自分の次から順に、で6本にする。
 */
export function pickRelated<T extends { slug: string }>(all: T[], self: string, related: string[] = [], n = 6): T[] {
  const i = all.findIndex((p) => p.slug === self);
  const ring = i < 0 ? all : [...all.slice(i + 1), ...all.slice(0, i)];
  const first = related.map((s) => all.find((p) => p.slug === s)).filter((p): p is T => !!p && p.slug !== self);
  return [...first, ...ring.filter((p) => p.slug !== self && !first.includes(p))].slice(0, n);
}

const CORE: Page[] = [
  {
    slug: "what-is-evisitor",
    related: ["arriving-in-australia", "eligible-passports"],
    nav: "What is the eVisitor",
    title: "What is the eVisitor (subclass 651)? Australia's free visitor visa explained",
    description:
      "The eVisitor is a full visitor visa granted electronically to holders of eligible European passports. What it covers and how it differs from the ETA.",
    blocks: [
      {
        p: `The eVisitor (subclass 651) is a visitor visa for Australia, granted electronically and linked to your passport. It is free of charge, valid ${F.validMonths} months, and allows stays of up to ${F.stayMonths} months per entry.`,
      },
      { h2: "It is a visa, not a travel authority" },
      {
        p: "Unlike New Zealand's NZeTA, the eVisitor is an actual visa. Nothing is stamped in your passport — the grant is recorded against it and checked electronically when you check in.",
      },
      { h2: "Who it is for" },
      {
        ul: [
          `Passport holders of ${F.eligibleCountries} European countries: all EU member states plus the UK (British Citizen passports only — British National (Overseas) and other British passport types are not eligible), Iceland, Norway, Switzerland and several microstates`,
          "Tourism, visiting family and friends, and business visitor activities",
          "Travellers who are outside Australia when they apply and when the visa is granted",
        ],
      },
      { h2: "Who it is not for" },
      {
        p: `If your passport is not on the list — for example Japan, the United States, Canada, Singapore, Malaysia or South Korea — the eVisitor is not available. Those nationalities apply for the ETA (subclass 601), which costs ${F.etaFee} and is applied for in the official mobile app.`,
      },
      {
        note: "The eligibility test is nationality, not residence. Living in Europe on a non-European passport does not make you eligible.",
      },
    ],
  },
  {
    slug: "how-to-apply",
    related: ["official-site", "common-mistakes", "australian-eta-app"],
    nav: "How to apply",
    title: "How to apply for an eVisitor: the official process step by step",
    description:
      "Applications are made free of charge through ImmiAccount on the Department of Home Affairs website. The order of the steps and the mistakes that cause delays.",
    blocks: [
      {
        p: "There is one official channel: the Department of Home Affairs website, using an account called ImmiAccount. There is no app for the eVisitor, and no fee.",
      },
      { h2: "1. Create an ImmiAccount" },
      {
        p: "Use an email address you will still have access to while travelling — the grant notice is sent there.",
      },
      { h2: "2. Complete the application" },
      {
        ul: [
          "Passport details exactly as printed, including any hyphens or accents",
          "Your intended travel dates and purpose",
          "Health questions, including tuberculosis and any planned treatment in Australia",
          "Character questions, including criminal convictions",
        ],
      },
      { h2: "3. Submit from outside Australia" },
      {
        p: "You must be outside Australia both when you apply and when the visa is granted. An application lodged while you are in the country cannot result in an eVisitor.",
      },
      { h2: "4. Wait for the grant notice" },
      {
        p: `Straightforward applications are often decided automatically in ${F.decisionTypical}. Save the grant notice with your travel documents even though airlines check the visa electronically.`,
      },
      {
        note: "Commercial sites charge to complete this same form. The visa itself is free, and using an agent does not make a decision come faster.",
      },
    ],
  },
  {
    slug: "cost",
    nav: "Cost",
    title: "How much does an eVisitor cost? Nothing — and what the ETA costs instead",
    description:
      `The Australian government charges ${F.fee} for the eVisitor: no visa application charge and no service fee. The ETA for other passports costs ${F.etaFee}.`,
    blocks: [
      {
        p: `The eVisitor has no application charge at all. The figure quoted by the Department of Home Affairs is ${F.fee}, and there is no separate service fee on top.`,
      },
      { h2: "What the alternatives cost" },
      {
        ul: [
          `eVisitor (subclass 651): ${F.fee} — European passports`,
          `ETA (subclass 601): ${F.etaFee} — Japan, USA, Canada, Singapore, Malaysia, South Korea and others`,
          "Visitor visa (subclass 600): a paid visa for those eligible for neither",
        ],
      },
      { h2: "Why sites quote a price for a free visa" },
      {
        p: "Commercial services charge for filling in the government form on your behalf. That is a service fee, not a visa fee. Nothing they submit differs from what you can submit yourself.",
      },
      {
        note: `Checked ${F.updatedLabel}. If you are asked to pay for an eVisitor on a site that is not immi.homeaffairs.gov.au, you are paying an intermediary.`,
      },
    ],
  },
  {
    slug: "required-documents",
    nav: "What you need",
    title: "What you need to apply for an eVisitor",
    description:
      "A valid European passport, an email address and about fifteen minutes. No photo, no payment, no documents to upload for most applicants.",
    blocks: [
      {
        p: "The eVisitor application is unusually light. Most applicants upload nothing at all.",
      },
      { h2: "What is required" },
      {
        ul: [
          "A valid passport from one of the eligible countries",
          "An email address you can access while travelling",
          "Answers to the health and character questions",
        ],
      },
      { h2: "What is not required" },
      {
        ul: [
          "No photograph — unlike the NZeTA and the Australian ETA",
          "No payment details, because there is no fee",
          "No proof of funds or itinerary at the application stage",
        ],
      },
      { h2: "When more may be asked" },
      {
        p: "If a health or character answer needs assessment, the department may request supporting documents such as a medical report or police certificate. That is what turns a same-day decision into a wait of weeks.",
      },
      {
        note: "Carry evidence of onward travel and funds for the border, even though the application does not ask for them.",
      },
    ],
  },
  {
    slug: "processing-time",
    nav: "Processing time",
    title: `How long does an eVisitor take? Usually ${F.decisionTypical}`,
    description:
      "Most eVisitor applications are decided automatically within a day. What causes an application to take weeks instead.",
    blocks: [
      {
        p: `Applications with no health or character issues are frequently decided automatically — often in ${F.decisionTypical}. There is no service standard that guarantees it.`,
      },
      { h2: "What causes a longer wait" },
      {
        ul: [
          "A health declaration that requires assessment",
          "A declared criminal conviction",
          "Details that do not match the passport",
          "A previous visa refusal or cancellation",
        ],
      },
      { h2: "How far ahead to apply" },
      {
        p: `The visa is valid ${F.validMonths} months from grant, so applying early costs nothing — but note that the clock starts at grant, not at travel. Applying a few weeks before departure is the usual balance.`,
      },
      {
        note: "There is no paid priority processing for the eVisitor. Sites offering it are selling a form-filling service.",
      },
    ],
  },
  {
    slug: "validity",
    nav: "Validity",
    title: `How long is an eVisitor valid? ${F.validMonths} months, unlimited entries`,
    description:
      `An eVisitor lasts ${F.validMonths} months from the date of grant, or until your passport expires, and allows as many entries as you like within that period.`,
    blocks: [
      {
        p: `The visa is valid for ${F.validMonths} months from the date it is granted — not from your first entry — or until the passport it is linked to expires, whichever comes first.`,
      },
      { h2: "Unlimited entries" },
      {
        p: `Within the validity period you may enter Australia as often as you like, provided each stay is within the ${F.stayMonths}-month limit.`,
      },
      { h2: "If you get a new passport" },
      {
        p: "The grant is recorded against one passport. If you get a new passport while the eVisitor is still valid, update your passport details in ImmiAccount. Home Affairs says it links the new passport to your existing visa within 3 business days, so a fresh eVisitor application is not needed. The ETA (subclass 601) is different: it cannot be transferred, and a new passport means a new ETA.",
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
      { h2: "Timing a long trip" },
      {
        p: `If you plan to travel late in the year, apply close to departure so that more of the ${F.validMonths} months remains available for return visits.`,
      },
    ],
  },
  {
    slug: "length-of-stay",
    nav: "Length of stay",
    title: "How long can you stay in Australia on an eVisitor?",
    description:
      `Up to ${F.stayMonths} months per entry, with conditions: no work for an Australian employer and study limited to ${F.studyMonths} months.`,
    blocks: [
      {
        p: `Each entry allows a stay of up to ${F.stayMonths} months. The visa itself lasts ${F.validMonths} months, so several visits of up to ${F.stayMonths} months each are possible.`,
      },
      { h2: "Conditions attached to the stay" },
      {
        ul: [
          "No work for an Australian employer",
          "No selling goods or services to the public",
          `Study or training limited to ${F.studyMonths} months`,
          "Business visitor activities — meetings, negotiations, conferences — are allowed",
        ],
      },
      { h2: "Leaving and returning" },
      {
        p: `Leaving Australia and returning starts a new period of up to ${F.stayMonths} months. Doing this repeatedly to live in Australia in effect is visible to the Australian Border Force and can lead to questions or refusal of entry.`,
      },
      {
        note: "The eVisitor cannot be extended from inside Australia. Staying longer requires a different visa, generally applied for from outside the country.",
      },
    ],
  },
  {
    slug: "status-check",
    nav: "Check your status",
    title: "How to check your eVisitor status with VEVO",
    description:
      "Where the grant notice is sent, how to check an existing visa through VEVO, and what to do if the email never arrives.",
    blocks: [
      {
        p: "The decision arrives by email at the address used in the application, and the grant is also visible in your ImmiAccount.",
      },
      { h2: "Checking an existing visa" },
      {
        p: "Australia provides a free service called VEVO (Visa Entitlement Verification Online) that shows the conditions and expiry of a visa linked to your passport. It is run by the Department of Home Affairs and costs nothing.",
      },
      { h2: "If the grant notice has not arrived" },
      {
        ul: [
          "Check spam and promotions folders",
          "Sign in to ImmiAccount — the status is shown there regardless of email",
          "Confirm the email address you entered had no typo",
          "Only then contact the department; resubmitting creates a duplicate application",
        ],
      },
      {
        note: "Enter passport details only on immi.homeaffairs.gov.au. Third-party 'status check' sites have no access to the visa record.",
      },
    ],
  },
  {
    slug: "faq",
    related: ["arriving-in-australia"],
    nav: "FAQ",
    title: "eVisitor (subclass 651): frequently asked questions",
    description: "Short answers to the questions travellers ask most about Australia's free visitor visa.",
    blocks: [
      { h2: "Is the eVisitor really free?" },
      { p: `Yes — ${F.fee}. There is no visa application charge and no service fee from the government.` },
      { h2: "My passport is not European. What do I need?" },
      { p: `The ETA (subclass 601), which costs ${F.etaFee} and is applied for through the official mobile app, not the website.` },
      { h2: "Can I apply while I am in Australia?" },
      { p: "No. You must be outside Australia when you apply and when the visa is granted." },
      { h2: "Can I work?" },
      { p: "No employment with an Australian employer. Business visitor activities are allowed." },
      { h2: "Do children need their own eVisitor?" },
      { p: "Yes — every traveller, including infants, on their own eligible passport." },
      { h2: "Does the eVisitor guarantee entry?" },
      { p: "No. The Australian Border Force officer decides on arrival." },
      { h2: "What if I get a new passport?" },
      { p: "Update your passport details in ImmiAccount (Update details → Change of passport details). Home Affairs links the new passport to your existing eVisitor within 3 business days. Only ETA (subclass 601) holders need to apply again with the new passport." },
    ],
  },
  {
    slug: "three-months-per-visit",
    related: ["arriving-in-australia", "public-holidays", "driving-in-australia"],
    nav: "Three months per visit",
    title: "How the three-month limit on an eVisitor actually works",
    description:
      "The eVisitor lasts twelve months, but each visit is capped at three months. The two numbers are separate, and mixing them up is the most common planning error.",
    blocks: [
      {
        p: `An eVisitor is valid for ${F.validMonths} months from the date it is granted, and it allows as many entries as you like during that period. What it does not give you is ${F.validMonths} months of continuous time in Australia. Each individual visit is limited to ${F.stayMonths} months.`,
      },
      { h2: "Two clocks, not one" },
      {
        ul: [
          `Visa validity — ${F.validMonths} months, counted from the grant date, not from your first entry`,
          `Stay per visit — ${F.stayMonths} months, counted from each arrival`,
          "Entries — multiple, for as long as the visa is valid",
        ],
      },
      {
        p: `So a visa granted in January expires the following January regardless of whether you used it. Arrive in December and you may still stay ${F.stayMonths} months, but you cannot re-enter after the visa expires.`,
      },
      { h2: "What the three months does not cover" },
      {
        ul: [
          "Work for an Australian employer",
          `Study beyond ${F.studyMonths} months`,
          "Any expectation of entry — the officer at the border decides",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      {
        note: "Applying again from inside Australia is not how the eVisitor works. If you need longer than three months in one go, look at a Visitor visa (subclass 600) before you travel.",
      },
    ],
  },
  {
    slug: "leaving-and-returning",
    related: ["arriving-in-australia", "tourist-refund-scheme", "airport-security-liquids"],
    nav: "Leaving and returning",
    title: "Does leaving Australia and coming back give you a fresh three months?",
    description:
      "Each entry restarts the three-month clock, but back-to-back visits attract questions, and the border officer can refuse entry.",
    blocks: [
      {
        p: `Each arrival starts a new period of up to ${F.stayMonths} months, so a trip to New Zealand or Bali and back does reset the per-visit clock while your visa is still valid.`,
      },
      { h2: "But the visa is a visitor visa" },
      {
        p: "The eVisitor is granted on the basis that you are visiting. Someone who spends nine of twelve months in Australia, leaving only briefly each time, is not visiting — they are living there on a visitor visa. Border officers look at the pattern across your passport, not just the current entry.",
      },
      { h2: "What you may be asked to show on re-entry" },
      {
        ul: [
          "An onward or return ticket",
          "Funds to support yourself for the stay",
          "Evidence that you are going home: work, study, a lease, family",
          "A reason for returning so soon",
        ],
      },
      { h2: "If entry is refused" },
      {
        p: "A valid visa is permission to travel, not a guarantee of entry. If an officer is not satisfied that you are a genuine visitor, the visa can be cancelled at the border and you can be sent back on the next available flight. That record then follows you into future applications.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      {
        note: `Your eVisitor stops working the moment it expires — ${F.validMonths} months after it was granted. Check the grant date before booking a return trip near the end of that window.`,
      },
    ],
  },
  {
    slug: "border-questions",
    related: ["arriving-in-australia", "smartgate-australia", "bringing-medicines"],
    nav: "At the border",
    title: "What you are asked when you arrive in Australia",
    description:
      "Immigration, customs and biosecurity are three separate checks with different questions. Knowing which is which makes the queue much shorter.",
    blocks: [
      {
        p: "Arriving passengers pass three checks, not one. They are run by different agencies and they care about different things. Answering the wrong one's question with the wrong answer is what slows people down.",
      },
      { h2: "1. Immigration — are you a genuine visitor" },
      {
        ul: [
          "How long you are staying and where",
          "Whether you have an onward or return ticket",
          "How you are funding the trip",
          "Whether you intend to work — you may not, on this visa",
        ],
      },
      { h2: "2. Customs — do you owe duty" },
      {
        p: `You must declare goods above the duty free concession, and currency at or above the reporting threshold. The concession is ${F.customsGoodsAllowance} of general goods if you are ${F.customsAgeMin} or over (${F.customsGoodsAllowanceMinor} if you are younger).`,
      },
      { h2: "3. Biosecurity — what is in your bag" },
      {
        p: "This is the check that catches unprepared travellers. Australia asks about food, plant and animal material, and anything that has been in contact with soil or fresh water. Declaring costs you nothing; not declaring can cost you the visa.",
      },
      { h2: "The Incoming Passenger Card" },
      {
        p: "Your customs and biosecurity answers are given on the Incoming Passenger Card, which you complete before you land. Take it seriously: the card is a legal declaration, and an officer finding an undeclared item in your bag treats the card as evidence that you said you had nothing.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: "If you are unsure whether something needs declaring, tick yes and let the officer decide. There is no penalty for declaring an item that turns out to be allowed.",
      },
    ],
  },
  {
    slug: "biosecurity",
    related: ["arriving-in-australia", "bringing-medicines", "smartgate-australia"],
    nav: "Biosecurity",
    title: "Australian biosecurity: what to declare, and why a visa can be cancelled",
    description:
      "Undeclared biosecurity goods can bring a fine of up to twelve penalty units — and for visa holders, cancellation and a three-year exclusion.",
    blocks: [
      {
        p: "Australia is an island with agriculture it wants to protect, so its biosecurity rules are strict and they are enforced at the airport, not in an office afterwards. Travellers who treat the declaration as a formality are the ones who get caught.",
      },
      { h2: "The penalty" },
      {
        p: `An infringement notice for undeclared goods can be up to ${F.biosecurityPenaltyUnits} penalty units. ⚠️ The dollar value of a penalty unit is set in law and is periodically increased: the department's page states ${F.biosecurityFineDaff} for ${F.biosecurityPenaltyUnits} units, while the ministerial announcement of the 2023 indexation put the same ${F.biosecurityPenaltyUnits} units at ${F.biosecurityFineIndexed}. Check the current figure on the official page before relying on it.`,
      },
      { h2: "For visa holders, the fine is not the worst part" },
      {
        p: `Travellers issued an infringement notice may be referred for visa cancellation. A cancelled visa means removal from Australia on the earliest available flight, and an exclusion period of ${F.visaCancelExclusionYears} years before you can apply again.`,
      },
      { h2: "What is actually caught" },
      {
        ul: [
          "Food of any kind — including snacks handed out on the plane",
          "Meat, dairy, eggs, honey and anything containing them",
          "Fresh fruit and vegetables, seeds, nuts",
          "Plant material — wooden items, woven goods, flowers",
          "Hiking boots, tents and sports gear with soil or plant matter on them",
          "Anything used around animals or in fresh water",
        ],
      },
      { h2: "Before you pack" },
      {
        ul: [
          "Clean soil off boots and equipment at home, not in the queue",
          "Eat or bin food before you land",
          "Declare wooden and woven souvenirs — they are risk goods, not curios",
        ],
      },
      { source: { label: "Department of Agriculture, Fisheries and Forestry — Infringement notices at the airport", url: "https://www.agriculture.gov.au/biosecurity-trade/policy/legislation/compliance/infringement-notice-scheme/infringement-notices-at-the-airport" } },
      {
        note: "Bins are provided before the biosecurity point. Using one is free. Being found with the item after you have declared 'no' is not.",
      },
    ],
  },
  {
    slug: "customs-allowances",
    related: ["arriving-in-australia", "money-and-tipping", "tourist-refund-scheme", "smoking-vaping-and-alcohol"],
    nav: "Customs allowances",
    title: "Australian duty free concessions: goods, alcohol, tobacco",
    description:
      `Adults may bring ${F.customsGoodsAllowance} of general goods, ${F.customsAlcoholLitres} litres of alcohol and ${F.customsTobaccoGrams} grams of tobacco duty free. Above that, you must declare.`,
    blocks: [
      {
        p: "Customs is a separate check from biosecurity. Biosecurity asks whether an item is a risk to Australia; customs asks whether duty and tax are owed on it. You can clear one and be stopped by the other.",
      },
      { h2: "The concessions" },
      {
        ul: [
          `General goods: ${F.customsGoodsAllowance} if you are ${F.customsAgeMin} or over, ${F.customsGoodsAllowanceMinor} if you are under ${F.customsAgeMin}`,
          `Alcohol: ${F.customsAlcoholLitres} litres, ${F.customsAgeMin} and over`,
          `Tobacco: ${F.customsTobaccoGrams} grams in any form, plus one open packet, ${F.customsAgeMin} and over`,
        ],
      },
      { h2: "Things people get wrong" },
      {
        ul: [
          "Duty free bought on the way in still counts towards the concession",
          "Gifts count — it is the value of what you are carrying, not what you paid for yourself",
          "Families cannot always pool concessions the way they assume; check before you rely on it",
        ],
      },
      { h2: "If you are over the limit" },
      {
        p: "Declare it and provide proof of purchase so duty and tax can be worked out. Failing to declare goods above the concession can result in penalties, prosecution, or cancellation of your visa. Declaring simply means paying what is owed.",
      },
      { source: { label: "Australian Border Force / Home Affairs — Duty free concessions", url: "https://www.abf.gov.au/entering-and-leaving-australia/duty-free" } },
      {
        note: `Currency also has a reporting requirement at the border: cash and instruments such as traveller's cheques worth ${F.cashReportThreshold} or more in total must be declared — see the money page for how.`,
      },
    ],
  },
  {
    slug: "working-and-studying",
    related: ["arriving-in-australia", "healthcare-for-visitors"],
    nav: "Work and study",
    title: "What you may not do on an eVisitor: work, and study beyond three months",
    description:
      `The eVisitor is a visitor visa. It does not permit work for an Australian employer, and study is limited to ${F.studyMonths} months.`,
    blocks: [
      {
        p: `Because the eVisitor is ${F.feeLabel.toLowerCase()} and granted quickly, people sometimes treat it as a light-touch permission to do whatever they like for ${F.stayMonths} months. It is not. It is a visitor visa with conditions, and the conditions are enforced.`,
      },
      { h2: "Work" },
      {
        p: "You may not work for an Australian employer. Business visitor activities are a different thing from working: attending meetings, negotiating, or going to a conference is generally fine; being paid by an Australian business to do a job is not.",
      },
      { h2: "Remote work for an employer outside Australia" },
      {
        p: "Working remotely for your existing employer overseas is a grey area that depends on the specifics, and it is not something a comparison site should rule on for you. If your trip depends on the answer, check with the Department of Home Affairs before you book.",
      },
      { h2: "Study" },
      {
        p: `Study is capped at ${F.studyMonths} months. A short course is fine; a semester is not. Longer study needs a student visa, applied for before you travel.`,
      },
      { h2: "Why this matters more than it looks" },
      {
        p: `Breaching a visa condition can lead to cancellation, removal, and an exclusion period of up to ${F.visaCancelExclusionYears} years. The cost of getting this wrong is not the fine — it is being unable to return.`,
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
    ],
  },
  {
    slug: "passport-and-details",
    nav: "Passport and details",
    title: "Your eVisitor is attached to one passport — get the details right",
    description:
      "The eVisitor is linked to the passport you applied with. A renewed passport that has not been updated with Home Affairs, a mismatched name or the wrong nationality can all stop you at check-in.",
    blocks: [
      {
        p: "There is no sticker and no printout that matters. The eVisitor exists as a record linked to a passport number, and the airline checks that record when you check in. If the passport in your hand is not the one in the record, the visa might as well not exist.",
      },
      { h2: "A new passport must be linked before you travel" },
      {
        p: `If you renew your passport, your existing eVisitor does not move across by itself, even though it may still be within its ${F.validMonths} months. Update your passport details in ImmiAccount before you travel; Home Affairs says it links the new passport to your existing visa within 3 business days (14 days if you have to use the New Passport Details web form instead).`,
      },
      { source: { label: "Department of Home Affairs — You have a new passport", url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details" } },
      { h2: "Enter your details exactly as printed" },
      {
        ul: [
          "Names as they appear in the machine-readable zone, not as you normally write them",
          "Accented or non-Latin characters transliterated the way the passport does it",
          "Passport number checked character by character — 0 and O, 1 and I",
          "Nationality as shown on the passport, not where you live",
        ],
      },
      { h2: "Dual nationals" },
      {
        p: "Travel on the passport your eVisitor is attached to. Holding a second nationality that is not eligible for the eVisitor does not disqualify you, but presenting the wrong passport at check-in does.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      {
        note: `Applying costs ${F.fee}. Any site charging a fee to submit an eVisitor for you is a third party adding its own margin, not an official channel.`,
      },
    ],
  },
  {
    slug: "evisitor-or-eta",
    related: ["eligible-passports", "australian-eta-app", "transit"],
    nav: "eVisitor or ETA?",
    title: `eVisitor or ETA? The free visa and the ${F.etaFee} one, and who gets which`,
    description:
      `eVisitor (subclass 651) is free. The ETA (subclass 601) costs ${F.etaFee}. Which one applies is decided by your passport, not by preference.`,
    blocks: [
      {
        p: `Travellers often assume these are two routes to the same thing and pick whichever looks easier. They are not interchangeable. Your passport decides which one you are eligible for, and applying for the wrong one wastes both time and, in the case of the ETA, money.`,
      },
      { h2: "eVisitor (subclass 651)" },
      {
        ul: [
          `Free of charge. There is no application fee and no service fee.`,
          `Open to passport holders from ${F.eligibleCountries} eligible countries, largely European.`,
          `Applied for online, through the Department of Home Affairs.`,
        ],
      },
      { h2: `ETA (subclass 601)` },
      {
        ul: [
          `Costs ${F.etaFee}, charged as a service fee.`,
          `Applied for through the official mobile app, not the website.`,
          `Covers a different list of passports — including several that eVisitor does not.`,
        ],
      },
      { h2: "What is the same" },
      {
        p: `Both allow visits of up to ${F.stayMonths} months at a time and stay valid for ${F.validMonths} months. Both are electronically linked to your passport, so there is nothing to print or carry. Neither lets you work.`,
      },
      { note: `If you hold two passports, check both. It is common for one to qualify for the free eVisitor while the other only qualifies for the paid ETA.` },
      {
        source: {
          label: "Department of Home Affairs — eVisitor (subclass 651)",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "if-your-application-is-refused",
    nav: "If refused",
    title: "What happens if your eVisitor application is refused?",
    description:
      "A refusal changes what you must do next. What to check, what not to do, and why reapplying immediately is usually the wrong move.",
    blocks: [
      {
        p: `Most eVisitor applications are decided in ${F.decisionTypical}. If yours comes back refused, the important thing is to understand why before you do anything else.`,
      },
      { h2: "Do not simply reapply" },
      {
        p: `Submitting the same application again will usually produce the same result, and a pattern of repeated applications does not help you. Read the decision, which states the reason.`,
      },
      { h2: "Common reasons" },
      {
        ul: [
          `The passport is not on the eVisitor list — in that case the ETA or a Visitor visa may be the right route instead.`,
          `Details did not match the passport exactly. Names, numbers and dates must be entered as printed.`,
          `A declaration about health or character required assessment rather than an automatic decision.`,
        ],
      },
      { h2: "If you already have flights" },
      {
        p: `Do not travel on the assumption that it will be resolved at the airport. Without a valid visa you will not be boarded. Contact the airline about changing dates while you sort out the correct application.`,
      },
      { note: `A refusal is not the same as a cancellation. If a visa you already hold is cancelled, an exclusion period of up to ${F.visaCancelExclusionYears} years can apply to future applications.` },
      {
        source: {
          label: "Department of Home Affairs — eVisitor (subclass 651)",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "travelling-with-children",
    related: ["arriving-in-australia", "smartgate-australia", "healthcare-for-visitors"],
    nav: "Children",
    title: "Do children need their own eVisitor?",
    description:
      "Every traveller needs their own visa, including infants. Children are not covered by a parent's eVisitor, and the application is made the same way.",
    blocks: [
      {
        p: `Yes. An eVisitor is linked to one passport, so every member of the family needs their own — including a baby travelling on a parent's lap.`,
      },
      { h2: "How to apply for a child" },
      {
        p: `The application is made in the child's own name, using the child's own passport. A parent or guardian can complete it on their behalf. The visa is free for children as well; there is no separate fee.`,
      },
      { h2: "Check the passport first" },
      {
        p: `Children's passports are often issued for shorter periods than adults'. A passport that expires during the ${F.validMonths}-month validity is a common cause of trouble later, because the visa is tied to the passport it was granted against.`,
      },
      { h2: "If a child travels with one parent or with someone else" },
      {
        p: `Australia may ask about consent arrangements at the border. Carrying a letter of consent from the non-travelling parent, and a copy of any custody documentation, is not a visa requirement but it removes a predictable delay.`,
      },
      {
        source: {
          label: "Department of Home Affairs — eVisitor (subclass 651)",
          url: F.officialUrl,
        },
      },
    ],
  },
  {
    slug: "new-passport-after-approval",
    nav: "New passport",
    title: "You got a new passport after your eVisitor was approved. Now what?",
    description:
      "The visa is linked to the passport it was granted against. Renewing or replacing that passport does not cancel the visa, but you must tell the Department.",
    blocks: [
      {
        p: `This comes up constantly — the passport is renewed, replaced after loss, or reissued after a name change, and the traveller assumes the visa is gone. It is not, but it does not follow the new passport by itself either.`,
      },
      { h2: "What actually happens" },
      {
        p: `The eVisitor stays attached to the passport number it was granted against. Airlines and border systems check the passport you present. If that passport is new, the link has to be updated first.`,
      },
      { h2: "What to do" },
      {
        ul: [
          `Log in to ImmiAccount and open your eVisitor application.`,
          `Select Update details, then Change of passport details.`,
          `Enter the new passport details and the reason for the change, then submit.`,
          `Home Affairs says it links the new passport to your existing visa within 3 business days.`,
        ],
      },
      { p: `If the change cannot be made in ImmiAccount — for example, you cannot import your application, or the date of birth on the passport has changed — Home Affairs directs you to the New Passport Details web form, which takes up to 14 days.` },
      { note: `Do this as soon as the new passport arrives, not at the airport. This applies to the eVisitor. An ETA (subclass 601) cannot be transferred to a new passport — ETA holders apply for a new ETA.` },
      {
        source: {
          label: "Department of Home Affairs — You have a new passport (last updated 9/10/2026)",
          url: "https://immi.homeaffairs.gov.au/change-in-situation/passport-details",
        },
      },
    ],
  },
  /* ── 2026-11-15 追加（ファクト＝~/projects/eta-expansion-20261115/facts-au.md §1〜§5）。
        ⚠️ 両方の一覧に載る旅券について「どちらを使わなければならない」とは書かない（公式は "may be eligible" だけ）。
        ⚠️ eVisitor をアプリで申請できる、と読める書き方をしない（アプリは ETA 専用）。 ── */
  {
    slug: "eligible-passports",
    checked: "15 November 2026",
    related: ["evisitor-or-eta", "what-is-evisitor", "transit", "australian-eta-app"],
    nav: "Eligible passports",
    title: `Which passports can get an eVisitor? The ${F.eligibleCountries} countries, and who uses the ETA`,
    description: `The eVisitor is open to citizens of ${F.eligibleCountries} European countries. The full list, the British passports that do not qualify, and how it compares with the ETA.`,
    blocks: [
      {
        p: `Eligibility for the eVisitor (subclass 651) depends on your citizenship and the passport you hold, not on where you live. The Department of Home Affairs says you must be a citizen of, and hold a valid passport from, one of ${F.eligibleCountries} countries.`,
      },
      { h2: `The ${F.eligibleCountries} eVisitor countries` },
      {
        p: "Andorra, Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, the Netherlands, Norway, Poland, Portugal, Romania, the Republic of San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, the United Kingdom (British Citizen) and Vatican City.",
      },
      { h2: "Passports that do not qualify" },
      {
        ul: [
          "For the United Kingdom, only British Citizen passports are on the list",
          "British National (Overseas), British Dependent Territories Citizen, British Overseas Citizen, British Protected Person and British Subject passports cannot be used",
          "A non-citizen passport, a certificate of identity or another travel document such as a Titre de Voyage cannot be used",
          "For Vatican City, the passport must show that you are a national of the Vatican City (Holy See)",
        ],
      },
      { h2: "If your passport is not on the list" },
      {
        p: `The ETA (subclass 601) has its own list of ${F.etaEligibleCountries} passports. It includes, among others, Brunei, Canada, Hong Kong (SAR of China), Japan, Malaysia, Singapore, South Korea, Taiwan (excluding official or diplomatic passports), the United States and United Kingdom — British National (Overseas). The ETA costs ${F.etaFee} as an app service fee. Other passport holders may be eligible for a Visitor visa (subclass 600).`,
      },
      { h2: "Passports on both lists" },
      {
        p: `By our comparison of the two official lists, ${F.bothListsCountries} passports appear on both. The other ${F.eligibleCountries - F.bothListsCountries} eVisitor countries are not on the ETA list: Bulgaria, Croatia, Cyprus, the Czech Republic, Estonia, Hungary, Latvia, Lithuania, Poland, Romania, Slovakia and Slovenia. For passports on both lists, the ETA page states that European passport holders "may be eligible" for the eVisitor and that there is no charge to apply for it.`,
      },
      { h2: "Situations where Home Affairs points elsewhere" },
      {
        ul: [
          "A criminal conviction in any country: Home Affairs says to apply for a Visitor visa (subclass 600) instead, and that arriving on an eVisitor with a conviction may lead to refused entry",
          "Training at a childcare centre, studying to be a doctor, dentist, nurse or paramedic, or entering health care or hospital environments: apply for the Visitor visa (subclass 600) and complete the health checks",
          "Australian citizens cannot apply for an eVisitor or an ETA, even if they also hold an eligible passport — they do not need a visa to enter Australia",
          "Families: each member needs a separate application, including children listed on a parent's passport",
        ],
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "The lists can change. Check the official page for the passport you will actually travel on before you apply.",
      },
    ],
    faq: [
      {
        q: "I have a British National (Overseas) passport. Can I get an eVisitor?",
        a: "No. BN(O) passports are excluded from the eVisitor. The BN(O) passport is on the ETA (subclass 601) list instead.",
      },
      {
        q: "I live in Germany but hold a non-European passport. Am I eligible?",
        a: "No. The eVisitor requires citizenship of, and a valid passport from, one of the listed countries. Where you live does not change this.",
      },
    ],
  },
  {
    slug: "common-mistakes",
    checked: "15 November 2026",
    related: ["passport-and-details", "if-your-application-is-refused", "how-to-apply", "official-site"],
    nav: "Common mistakes",
    title: "eVisitor mistakes to avoid, in the Department of Home Affairs' own words",
    description: "Misspelt names, the wrong date format, applying from inside Australia, booking before the grant — the eVisitor errors Home Affairs warns about.",
    blocks: [
      {
        p: "The eVisitor is free and usually quick, which makes it easy to rush. The Department of Home Affairs lists the points to check. Each one below is taken from its eVisitor page.",
      },
      { h2: "Before you submit" },
      {
        ul: [
          "Your name is spelt as it appears in your passport, including your middle name, and has not been auto-corrected by your device",
          "Your passport is from one of the countries eligible for the eVisitor",
          "Your date of birth is entered in dd/mm/yy format",
          "Your email address is entered correctly",
        ],
      },
      {
        p: "Home Affairs warns that if a visa is granted with incorrect information, you may experience delays or be refused entry to Australia.",
      },
      { h2: "Applying from the wrong place" },
      {
        p: "You must be outside Australia when you apply, and outside Australia when the decision is made.",
      },
      { h2: "Booking before the grant" },
      {
        p: "Home Affairs says not to arrange travel to Australia until it has told you in writing that the visa has been granted.",
      },
      { h2: "Waiting for an email that is not coming" },
      {
        p: "If no email arrives within 12 hours of applying, check your application status in ImmiAccount.",
      },
      { h2: "Leaving out a conviction" },
      {
        p: "If you have a criminal conviction in any country, Home Affairs says to apply for a Visitor visa (subclass 600) instead. If you still apply for an eVisitor, you must declare all criminal conduct and answer every question truthfully.",
      },
      { h2: "Mistakes during the stay" },
      {
        ul: [
          "Working: the eVisitor is not a work visa. Paid work for an Australian employer is not allowed, and working or intending to work can lead to cancellation",
          "Assuming a round-trip cruise resets your stay: Home Affairs says it does not",
          "Long or frequent stays: you may be asked about your travel purpose on your next arrival, and the visa may be cancelled if you are found not to be a genuine visitor",
          "Staying after the visa ceases without another visa: you become an unlawful non-citizen and may be removed",
        ],
      },
      { h2: "If you are actually applying for the ETA" },
      {
        p: "Holders of ETA passports should note three points from the ETA page: the ETA details must exactly match the passport, and Home Affairs cannot change them once the ETA is issued; a new passport ends the ETA and requires a new application; and after a referral, submitting further ETA applications in the app gives the same result.",
      },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      {
        note: "If your phone number, email, address or passport changes after you apply, the eVisitor page asks you to tell the Department. Follow the steps on that page.",
      },
    ],
  },
  {
    slug: "transit",
    checked: "15 November 2026",
    related: ["eligible-passports", "airport-security-liquids", "major-airports", "evisitor-or-eta"],
    nav: "Transit",
    title: `Transiting through Australia: the ${F.twovHours}-hour rule and the Transit visa`,
    description: `Even in transit you need a visa or permission. When an eVisitor covers it, the ${F.twovHours}-hour visa-free transit rule, and the ${F.transitVisaHours}-hour Transit visa.`,
    blocks: [
      {
        p: "The Department of Home Affairs states that all non-citizens need a visa or permission to enter Australia, including those staying for a short time or transiting without leaving the airport. There are three ways that permission can come about.",
      },
      { h2: "1. You already hold an eVisitor (or are eligible for one)" },
      {
        p: "Home Affairs lists the eVisitor, the ETA, the Visitor visa and the APEC Business Travel Card among the visas that permit transit through Australia, and they also allow a longer stay. If your trip includes a stopover in Australia, an eVisitor covers it.",
      },
      { h2: "2. Transit without a visa (TWOV)" },
      {
        p: "You may transit without a visa only if all of the following apply:",
      },
      {
        ul: [
          "You arrive in Australia by aircraft",
          `You have a confirmed ticket to leave Australia for a third country by aircraft within ${F.twovHours} hours of arriving`,
          "You have a valid travel document to enter the country you are going to",
          "You do not need to clear immigration or leave the airport transit lounge for any reason before your onward flight",
          "You hold a passport from a country on the TWOV list",
        ],
      },
      {
        p: "By our comparison of the two official lists, every country on the eVisitor list is also on the TWOV list, which covers other countries too. Home Affairs states that the information does not apply to stateless persons and refugees.",
      },
      { h2: "When you have to clear immigration" },
      {
        p: "Home Affairs gives collecting and transferring baggage, and boarding an onward flight from a different terminal, as common reasons for needing to clear immigration — and you must have a visa to do that. It advises that if you are still not sure whether you are TWOV eligible, you should consider applying for a visa just in case.",
      },
      { h2: `3. Transit visa (subclass 771)` },
      {
        ul: [
          `For transit through Australia for no longer than ${F.transitVisaHours} hours`,
          "Free of charge",
          "A separate application is needed for each traveller, including babies on a parent's passport",
          "You must be outside Australia when you apply and when the decision is made",
        ],
      },
      {
        note: "Home Affairs warns that if you already hold a visa to Australia, being granted a Transit visa will likely end your other visa. An eVisitor already permits transit.",
      },
      { source: { label: "Department of Home Affairs — Transit visa (subclass 771)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771" } },
      { source: { label: "Department of Home Affairs — Travellers eligible to transit without a visa", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/travellers-eligible-to-transit-without-visa" } },
      { source: { label: "Department of Home Affairs — Transit facilities at Australian airports", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/transit-771/transit-facilities-at-australian-airports" } },
    ],
    faq: [
      {
        q: "My connection in Sydney is 10 hours. Can I transit without a visa?",
        a: `Not under TWOV, which requires a confirmed onward flight within ${F.twovHours} hours of arriving. You need a visa — an eVisitor if your passport is eligible, or a Transit visa (subclass 771).`,
      },
      {
        q: "Does each airport have a transit area?",
        a: "Home Affairs publishes a page on transit facilities at Australian airports. Check it, and your airline, for the airport you will use.",
      },
    ],
  },
  {
    slug: "australian-eta-app",
    checked: "15 November 2026",
    related: ["evisitor-or-eta", "how-to-apply", "official-site", "eligible-passports"],
    nav: "Is there an app?",
    title: "Is there an eVisitor app? No — the Australian ETA app is for the ETA only",
    description: `The eVisitor is applied for online in ImmiAccount. The Australian ETA app is for the ETA (subclass 601) only and has a ${F.etaFee} service fee.`,
    blocks: [
      {
        p: "There is no app for the eVisitor. Home Affairs' eVisitor guide tells you to apply online, through ImmiAccount, and to check your application status there. The government app you may see in the app stores — the Australian ETA app — is for a different visa: the Electronic Travel Authority (subclass 601).",
      },
      { h2: "Who must use the Australian ETA app" },
      {
        p: `Home Affairs states that you must use the Australian ETA app to apply for an ETA if you hold an ETA-eligible passport. There is no visa application charge for the ETA, but there is a non-refundable application service fee of ${F.etaFee} for using the app. If you cannot use the app, Home Affairs says you can apply for another suitable visa through ImmiAccount, and that European passport holders may be eligible for an eVisitor, which has no application charge.`,
      },
      { h2: "About the app" },
      {
        ul: [
          "Publisher: Department of Home Affairs (shown as the seller on the App Store)",
          "Download is free from the Apple App Store and Google Play; the App Store lists iOS 17.6 or later",
          "You need a phone with a camera, NFC turned on, location services turned on, a valid email address and a payment method for the service fee",
        ],
      },
      { h2: "What you do in the app" },
      {
        ul: [
          "Scan your passport to pre-fill your name, date of birth, passport number and other details",
          "Take a live photo of yourself on the same phone; the photo is captured automatically when the oval on screen turns green",
          "Answer the questions, pay the service fee and submit",
          "Families applying on the same device can submit and pay at the same time",
          "Someone can help you apply, but they must be physically with you",
          "The app's \"Visa check\" function shows the status of your application",
        ],
      },
      { source: { label: "Department of Home Affairs — Electronic Travel Authority (subclass 601)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/electronic-travel-authority-601" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      { source: { label: "Department of Home Affairs — ETA and AIA video guides", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/eta-and-aia-video-guides" } },
      { source: { label: "App Store — AustralianETA", url: "https://apps.apple.com/au/app/australianeta/id1527982364" } },
      { source: { label: "Google Play — AustralianETA", url: "https://play.google.com/store/apps/details?id=au.gov.homeaffairs.eta" } },
      {
        note: `If your passport is on the eVisitor list, you do not need the app. Apply in ImmiAccount, where the eVisitor costs ${F.fee}.`,
      },
    ],
  },
  {
    slug: "official-site",
    checked: "15 November 2026",
    related: ["how-to-apply", "cost", "status-check", "common-mistakes"],
    nav: "Official site",
    title: "The official eVisitor site is ImmiAccount: how to recognise it and avoid scams",
    description: "Home Affairs calls ImmiAccount the only official website for Australian visa applications. The official addresses and the scam warnings it publishes.",
    blocks: [
      {
        p: "The Department of Home Affairs describes ImmiAccount as its immigration portal and \"the only official website to use when applying for an Australian visa\". The eVisitor application form is in ImmiAccount.",
      },
      { h2: "The official addresses" },
      {
        ul: [
          "eVisitor information: immi.homeaffairs.gov.au",
          "ImmiAccount sign-in and applications: online.immi.gov.au",
          "The Australian ETA app (for the ETA only): published by the Department of Home Affairs",
        ],
      },
      { h2: "What the official route costs" },
      {
        p: `Home Affairs states: "The eVisitor is free." There is no application charge to pay on the official site.`,
      },
      { h2: "Scam warnings from Home Affairs" },
      {
        ul: [
          "An email claiming to be from the Department of Home Affairs whose address does not end in .gov.au is a scam",
          "If someone asks for an extra fee to have your visa issued (sometimes called a \"CIS charge\"), walk away — the Australian Government does not charge extra fees to issue visas",
          "If someone refuses to let you check your application in ImmiAccount, they are hiding something from you",
          "A grant letter for a visa you cannot find in VEVO (Visa Entitlement Verification Online) is probably fake",
          "Home Affairs staff always identify themselves on the phone and never ask for credit card details or passwords",
          "Deal only with official Australian Government channels: the Home Affairs website, Australian Biometric Collection Centres, or the Australian High Commission, Embassy or Consulate in your country",
        ],
      },
      { h2: "If someone else applies for you" },
      {
        p: "An ImmiAccount can be set up by the applicant, a family member acting for the applicant, or a friend helping with the application. Home Affairs states that in Australia it is illegal for a third party to provide paid immigration assistance unless they are a registered migration agent or an Australian legal practitioner, and that you remain responsible for checking the conditions of the visa even if someone else submits the application.",
      },
      { source: { label: "Department of Home Affairs — How to avoid being scammed", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams/what-you-need-to-know" } },
      { source: { label: "Department of Home Affairs — Visa scams", url: "https://immi.homeaffairs.gov.au/help-support/visa-scams" } },
      { source: { label: "Department of Home Affairs — Applying online in ImmiAccount", url: "https://immi.homeaffairs.gov.au/help-support/applying-online-or-on-paper/online" } },
      { source: { label: "Department of Home Affairs — Who can help with your application", url: "https://immi.homeaffairs.gov.au/help-support/who-can-help-with-your-application/overview" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/evisitor-651" } },
      {
        note: "This site is an independent guide, not a government website. We do not take applications or payments.",
      },
    ],
  },
  {
    slug: "travel-authorisations-compared",
    nav: "Which one do I need?",
    title: "Which travel authorisation do you need? NZeTA, eVisitor, K-ETA, ESTA and the others compared",
    description:
      "Similar names, very different rules. Which scheme applies to which destination, what each costs, and the mistakes that come from mixing them up.",
    blocks: [
      {
        p: `Electronic travel authorisations look interchangeable from the outside. They are not. Each country runs its own scheme, with its own eligibility list, its own price, and its own idea of what the document even is — some are visas, some explicitly are not.`,
      },
      {
        p: `This page is a map of which is which. For Australia, the scheme is the eVisitor, and it is free of charge.`,
      },
      { note: `One rule holds everywhere: you apply on the government's own site, and no agency can make a decision arrive faster. Sites charging several times the official fee are filling in the same form for you.` },
          {
            h2: "Australia — eVisitor or ETA",
          },
          {
            p: `eVisitor (subclass 651) is a visa and it is ${F.feeLabel.toLowerCase()}. Travellers whose passports are not on the eVisitor list use the ETA (subclass 601) instead, which costs ${F.etaFee} and is applied for in the official app. Both allow visits of up to ${F.stayMonths} months and last ${F.validMonths} months.`,
          },
          { h2: "New Zealand — NZeTA" },
          {
            p: `A pre-travel authorisation for visa-waiver passports, not a visa. The cost is in two parts: an application fee and a separate conservation and tourism levy, which is why quoted totals differ between sources.`,
          },
          { h2: "South Korea — K-ETA" },
          {
            p: `⚠️ Many nationalities are temporarily exempt from the K-ETA at present, so the first question is whether you need one at all rather than how to apply.`,
          },
          { h2: "United Kingdom — ETA" },
          {
            p: `Covers visits of up to 6 months to the UK, Jersey, Guernsey and the Isle of Man. GOV.UK states the cost as £20. Applied for through the official service.`,
          },
          {
            source: {
              label: "GOV.UK — Apply for an electronic travel authorisation (ETA)",
              url: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
            },
          },
          { h2: "United States — ESTA, and Canada — eTA" },
          {
            p: `Both run comparable schemes for visa-waiver travellers. We are not quoting their fees here, because we could not confirm the current figures against the official sources while writing this page, and an out-of-date price is worse than none. Check the official sites directly — and only the official sites.`,
          },
          {
            ul: [
              "United States: esta.cbp.dhs.gov",
              "Canada: canada.ca (Immigration, Refugees and Citizenship Canada)",
            ],
          },
          { h2: "The mistakes that actually cost people money" },
          {
            ul: [
              "Assuming one authorisation covers a multi-country trip. Each destination is separate, including a stopover where you leave the airport.",
              "Assuming it is a visa. Some are, some are not, and the difference decides what you may do once you are there.",
              "Assuming the price is the price. Several schemes add a separate levy or charge a different amount depending on how you apply.",
              "Applying through a paid intermediary in the belief it is faster. It is the same form and the same decision.",
            ],
          },
          { h2: "Check your own passport, not a summary" },
          {
            p: `Eligibility lists change, and holding two passports often means two different answers. Every scheme above publishes an official checker. Use it for the passport you will actually travel on.`,
          },
    ],
  },
  {
    slug: "about",
    nav: "About this guide",
    title: "About this guide",
    description: "Who runs this independent guide to Australia's eVisitor visa, and what we do not do.",
    blocks: [
      { h2: "An independent guide" },
      {
        p: "This site explains the Australian eVisitor visa in plain English. It is not a government website and is not affiliated with the Department of Home Affairs. Published by MediaX Co., Ltd. (Japan). Contact: webmaster@mediax.biz",
      },
      { h2: "What we do not do" },
      {
        ul: [
          "We do not submit applications or accept fees",
          "We do not collect passport details",
          "We do not provide legal or immigration advice",
        ],
      },
      { h2: "How the figures are checked" },
      {
        p: `Eligibility, validity and conditions are taken from the Department of Home Affairs' published information and are stated as of ${F.updatedLabel}. Rules change; the official site is always the authority.`,
      },
    ],
  },
  {
    slug: "privacy",
    nav: "Privacy",
    title: "Privacy policy",
    description: "What data this site processes, why, and the rights you have.",
    blocks: [
      { h2: "In short" },
      {
        p: "This is a static information site. There is no registration, nothing is sold, and we never ask for passport details. Personal data is processed only as far as running the site technically requires.",
      },
      { h2: "Server logs" },
      {
        p: "The site is served through Cloudflare Pages, which logs technical details such as IP address, time, requested address and browser information to keep the site available and defend against attacks.",
      },
      { h2: "Cookies and analytics" },
      {
        p: "We set no advertising cookies and embed no third-party tracking scripts. If audience measurement is added later, this page will say so first.",
      },
      { h2: "Your rights" },
      {
        ul: [
          "Access, correction and erasure of personal data",
          "Restriction of processing and objection",
          "Complaint to a supervisory authority",
        ],
      },
      { p: "For privacy enquiries, contact webmaster@mediax.biz." },
    ],
  },
  {
    slug: "terms",
    nav: "Terms",
    title: "Terms of use",
    description: "The conditions that apply when you use the information on this site.",
    blocks: [
      { h2: "Purpose" },
      {
        p: "The content of this site is general information about the Australian eVisitor visa. It is not legal or immigration advice and creates no advisory relationship.",
      },
      { h2: "We do not process applications" },
      {
        p: "We are neither an agency nor a government body. Applications are made only through the Department of Home Affairs website. We receive no applications, fees or passport data.",
      },
      { h2: "Liability" },
      {
        p: "We take care to keep the information accurate and current but cannot guarantee that it is complete or error-free. Liability is limited to intent and gross negligence.",
      },
      { h2: "Copyright" },
      {
        p: "The text and design of this site are protected by copyright. Reproducing whole pages is not permitted; short quotations with a source and link are welcome.",
      },
    ],
  },
];

/** 実用ページは about/privacy/terms の手前に差し込む（一覧の並び＝関連カードの巡回順） */
const LEGAL = ["about", "privacy", "terms"];
export const PAGES: Page[] = [
  ...CORE.filter((p) => !LEGAL.includes(p.slug)),
  ...PRACTICAL,
  ...CORE.filter((p) => LEGAL.includes(p.slug)),
];

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
