import { FACTS as F } from "@/data/facts";

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
  | { source: { label: string; url: string } };

export type Page = {
  slug: string;
  title: string;
  nav: string;
  description: string;
  blocks: Block[];
};

export const PAGES: Page[] = [
  {
    slug: "what-is-evisitor",
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
          `Passport holders of ${F.eligibleCountries} European countries: all EU member states plus the UK, Iceland, Norway, Switzerland and several microstates`,
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
      { h2: "A new passport means a new application" },
      {
        p: "The grant is recorded against one passport. Renewing your passport, changing your name, or travelling on a second nationality all require a fresh application — which, being free, is not a problem.",
      },
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
      { p: "Apply again with the new passport. It is free, so there is no cost to doing so." },
    ],
  },
  {
    slug: "three-months-per-visit",
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
    nav: "Leaving and returning",
    title: "Does leaving Australia and coming back give you a fresh three months?",
    description:
      "Technically each entry restarts the three-month clock. In practice, a pattern of back-to-back visits attracts questions, and the border officer can refuse entry.",
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
    nav: "Biosecurity",
    title: "Australian biosecurity: what to declare, and why a visa can be cancelled",
    description:
      "Failing to declare biosecurity goods can bring an infringement notice of up to twelve penalty units, and for visa holders it can mean cancellation and a three-year exclusion.",
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
        note: "Currency also has a reporting requirement at the border. If you are carrying a large amount of cash or bearer instruments, check the current threshold on the ABF site before you fly.",
      },
    ],
  },
  {
    slug: "working-and-studying",
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
      "The eVisitor is linked electronically to the passport you applied with. A renewed passport, a mismatched name, or the wrong nationality on the form all stop you at check-in.",
    blocks: [
      {
        p: "There is no sticker and no printout that matters. The eVisitor exists as a record linked to a passport number, and the airline checks that record when you check in. If the passport in your hand is not the one in the record, the visa might as well not exist.",
      },
      { h2: "A new passport means a new application" },
      {
        p: `If you renew your passport, your existing eVisitor does not move across, even though it may still be within its ${F.validMonths} months. Apply again with the new document before you travel. It is ${F.feeLabel.toLowerCase()}, so there is no cost reason to delay.`,
      },
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
      "A refusal is not the end of the trip, but it changes what you must do next. What to check, what not to do, and why reapplying immediately is usually the wrong move.",
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
          `Tell the Department of Home Affairs about the new passport before you travel.`,
          `Do not apply for a second eVisitor to "replace" the first — that is not how the change is handled.`,
          `Carry the old passport if you still have it and it is not cancelled in a way that prevents this.`,
        ],
      },
      { note: `Do this as soon as the new passport arrives, not at the airport. Updating details is routine when there is time and a problem when there is not.` },
      {
        source: {
          label: "Department of Home Affairs — eVisitor (subclass 651)",
          url: F.officialUrl,
        },
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

export const PAGE_SLUGS = PAGES.map((p) => p.slug);
