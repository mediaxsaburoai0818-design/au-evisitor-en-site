import { FACTS as F } from "@/data/facts";
import type { Page } from "@/data/pages";

/**
 * 入国後の実用ページ（ETA横展開バッチ3・2026-10-12）。
 * UK ETAサイトの17テーマのうち、オーストラリアの公式情報で成立したものだけ。
 * ファクトと採否表＝~/projects/au-entry-facts-2026-10-12.md（出典URL・確認日つき）
 *
 * ⚠️ UK版の訳ではない。AU固有の点を外さない:
 *    到着SmartGateは7歳以上・全旅券で試行中（国籍リストは無い）／紙の入国カード(IPC)は今も必須 ／
 *    現金は「上限」ではなく AUD10,000 以上で申告義務 ／ 2026-10-01からカード手数料の上乗せ禁止 ／
 *    TRSはGSTとWETが戻る・空港で出発30分前まで ／ 運転は州ごとに違う（一律の期間を書かない） ／
 *    祝日は州ごとに違う（全国共通の法定リストは無い） ／ 相互医療協定は11か国（独仏西・韓中台は無し）／
 *    ベイプは薬局でしか売っていない
 * ⚠️ 確認できなかったこと（到着SmartGateの全空港・現金不申告の罰金額・QLD/WA/SA/TAS/ACTの運転期間・
 *    救急車の料金・eVisitorの保険加入条件8501・ベイプ持込の処方箋要否・SIM登録で使える住所）は書かない。
 * ⚠️ 数値は F 経由。
 */

export const HUB_SLUG = "arriving-in-australia";

/** 2026-10-12 に公式で確認したページ群（表示の確認日） */
const CHECKED = "12 October 2026";

const RAW: Page[] = [
  {
    slug: HUB_SLUG,
    nav: "After you land",
    title: "Arriving in Australia: a practical guide for eVisitor and ETA holders",
    description: "Your visa gets you on the plane. What comes after — SmartGate, cash, tax refunds, healthcare, driving, emergencies — checked against official sources.",
    related: ["border-questions", "biosecurity", "customs-allowances"],
    blocks: [
      {
        p: `The eVisitor (or the ETA, if your passport is not on the eVisitor list) settles one question: whether you may travel to Australia and stay for up to ${F.stayMonths} months at a time. It does not tell you what happens at the airport, what you can carry, how to pay, or what to do if something goes wrong. These pages do. Each one is checked against the Australian government body responsible and links to it.`,
      },
      { h2: "At the border" },
      { links: ["major-airports", "smartgate-australia", "border-questions", "biosecurity", "customs-allowances", "bringing-medicines", "transit"] },
      { h2: "Money" },
      { links: ["money-and-tipping", "tourist-refund-scheme"] },
      { h2: "Getting around and staying connected" },
      { links: ["public-transport", "driving-in-australia", "phones-and-sim-cards", "power-plugs", "public-holidays"] },
      { h2: "Health and safety" },
      { links: ["healthcare-for-visitors", "emergency-and-safety", "smoking-vaping-and-alcohol"] },
      { h2: "Flying home" },
      { links: ["airport-security-liquids", "three-months-per-visit", "leaving-and-returning"] },
      {
        note: "There is no national public transport system — each city runs its own card and fare rules. Our public transport page covers Sydney, South East Queensland and Perth. For Melbourne, Adelaide and other cities, check the transport authority of the city you are visiting.",
      },
    ],
  },
  {
    slug: "smartgate-australia",
    nav: "SmartGate on arrival",
    title: `SmartGate in Australia: who can use it (age ${F.smartgateMinAge}+) and what you still need`,
    description: `Arrival SmartGates take travellers aged ${F.smartgateMinAge}+ on any valid passport during an ABF trial. The paper Incoming Passenger Card is still required.`,
    related: [HUB_SLUG, "border-questions", "biosecurity", "travelling-with-children"],
    blocks: [
      {
        p: `SmartGates are the automated passport-control gates run by the Australian Border Force (ABF) at Australia's major international airports. On arrival, the gate reads your passport, takes a photo, and matches your face to it. If it succeeds, it prints a ticket and you walk through.`,
      },
      { h2: "Who can use arrival SmartGates" },
      {
        ul: [
          "You are travelling on a valid passport",
          `You are at least ${F.smartgateMinHeight} tall`,
          `You are at least ${F.smartgateMinAge} years of age`,
          `Children under ${F.smartgateAccompanyUnder} must be accompanied by a parent or legal guardian`,
        ],
      },
      {
        p: `Until recently you needed an ePassport (the chip symbol on the cover). The ABF is now trialling arrival SmartGates for all passports, so a non-chip passport may work too. The ABF does not publish a list of nationalities: the criteria above are about the passport and the traveller, not the country that issued it.`,
      },
      {
        note: `Your eVisitor or ETA and the SmartGate are separate things. The visa lets you board and enter; the SmartGate is simply how your passport is checked. Using the gate does not change your visa conditions.`,
      },
      { h2: "The Incoming Passenger Card still applies" },
      {
        p: `Most passengers must complete a paper Incoming Passenger Card (IPC). It is handed out on the plane or in the terminal and must be completed in English. The ABF publishes translated sample cards — including German, French, Dutch, Italian, Spanish, Korean and Chinese — so you can understand the questions, but the card you hand in is answered in English.`,
      },
      {
        p: `At the exit, you give your SmartGate ticket and your Incoming Passenger Card to a Border Force or biosecurity officer. A digital alternative (the Australia Travel Declaration) exists only as a pilot, for invited passengers on selected Qantas flights into Brisbane, Sydney and Melbourne via the Qantas app. Everyone else uses the paper card.`,
      },
      { h2: "Languages on the screens" },
      {
        p: `Arrival SmartGate screens are in English, with ${F.smartgateArrivalLanguages} other languages to choose from, including German, Dutch, French, Italian, Spanish, Korean and both simplified and traditional Chinese. Departure SmartGate screens are in English, Japanese, Korean and Mandarin.`,
      },
      { h2: "Leaving Australia" },
      {
        p: `Any traveller with a valid machine-readable passport can use the departure SmartGates. You cannot use them if you are travelling with someone who needs help to follow the instructions, such as a baby or small child.`,
      },
      { source: { label: "Australian Border Force — Who can use arrival SmartGates", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/arrivals/who-can-use-smartgates" } },
      { source: { label: "Australian Border Force — Departure SmartGates", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgate/departures" } },
      { source: { label: "Australian Border Force — Incoming Passenger Card", url: "https://www.abf.gov.au/entering-and-leaving-australia/crossing-the-border/at-the-border/incoming-passenger-card-(ipc)" } },
    ],
    faq: [
      {
        q: "Can German, Korean or Chinese passport holders use SmartGate?",
        a: `The ABF does not publish a nationality list. Arrival SmartGates are open to travellers on a valid passport who are at least ${F.smartgateMinAge} years old and ${F.smartgateMinHeight} tall, and the ABF is trialling the gates for all passports.`,
      },
      {
        q: "Do I still need the Incoming Passenger Card if I use SmartGate?",
        a: "Yes. You hand in your SmartGate ticket together with the completed Incoming Passenger Card at the exit. The card must be filled in in English.",
      },
      {
        q: "Can my 5-year-old use SmartGate?",
        a: `No. Arrival SmartGates require travellers to be at least ${F.smartgateMinAge} years old. Families with younger children are processed by an officer.`,
      },
    ],
  },
  {
    slug: "airport-security-liquids",
    nav: "Liquids in hand luggage",
    title: `Liquids on flights from Australia: the ${F.lagsContainer} rule and the powder limit`,
    description: `On international flights from Australia, liquids, aerosols and gels must be in ${F.lagsContainer} containers in one clear bag. Inorganic powders are limited too.`,
    related: ["tourist-refund-scheme", "bringing-medicines", HUB_SLUG],
    blocks: [
      {
        p: `Australia restricts liquids, aerosols, gels and certain powders in your carry-on bag on international flights. The limits do not apply to checked baggage or to most domestic flights.`,
      },
      { h2: "When the limits apply" },
      {
        ul: [
          "When you depart Australia on an international flight",
          "When you transit through Australia from one country to another",
          "On the domestic leg of a flight that departs from an Australian international terminal",
          "Before you board an inbound flight at its last stop before Australia",
        ],
      },
      { h2: "Liquids, aerosols and gels" },
      {
        ul: [
          `Each container must be ${F.lagsContainer} (or 100 g) or less — a larger container is not allowed even if it is only partly full`,
          `All containers must fit in one transparent, re-sealable plastic bag whose four sides add up to no more than ${F.lagsBagPerimeterCm} cm (for example 20 × 20 cm)`,
          "One bag per passenger; you can carry bags for people in your care, including children",
          "Aerosols must have a cap or locking device",
        ],
      },
      {
        p: `Spreads and soft foods count as liquids or gels. The official list includes Vegemite, peanut butter, honey and yoghurt — souvenirs that catch people out at the screening point.`,
      },
      { h2: "Powders" },
      {
        p: `Inorganic powders — such as salt, salt scrubs, sand and some talcum powders — must be in containers of ${F.powderLimit} or less, and the total per person must not exceed ${F.powderLimit}. Organic powders such as baby formula, coffee, protein powder, flour, spices and sugar have no limit. You may be asked to present powders separately at screening.`,
      },
      { h2: "Exemptions" },
      {
        ul: [
          "Reasonable amounts of baby products",
          "Prescription and non-prescription medicines needed during the flight — you may need to show proof, such as a doctor's letter",
          "Medical devices and medical equipment",
        ],
      },
      { h2: "Duty free" },
      {
        p: `Duty free liquids bought at the airport must stay in the sealed, tamper-evident bag they were packed in, together with the proof of purchase.`,
      },
      { source: { label: "Department of Home Affairs (TravelSECURE) — What you can and can't bring", url: "https://www.homeaffairs.gov.au/about-us/what-we-do/travelsecure/security-screening-at-airports/what-you-can-and-cant-bring" } },
    ],
    faq: [
      {
        q: "Do the liquid limits apply on domestic flights in Australia?",
        a: "Not on most domestic flights. They do apply on the domestic leg of a flight that departs from an international terminal.",
      },
      {
        q: "Can I take a jar of Vegemite in my hand luggage?",
        a: `Only in a container of ${F.lagsContainer} or less inside your liquids bag. Larger jars belong in checked baggage.`,
      },
      {
        q: "Is baby formula limited?",
        a: "Powdered baby formula is an organic powder and has no limit. Reasonable amounts of baby products are exempt from the liquid limits.",
      },
    ],
  },
  {
    slug: "money-and-tipping",
    nav: "Money, cards and tipping",
    title: "Money in Australia: cash, card surcharges, GST and tipping",
    description: `Prices include ${F.gstPercent}% GST, card surcharges are banned from ${F.surchargeBanFrom}, and tipping is optional. Cash of ${F.cashReportThreshold}+ must be declared.`,
    related: ["tourist-refund-scheme", "customs-allowances", "phones-and-sim-cards"],
    blocks: [
      {
        p: `Australia uses the Australian dollar (AUD). A few rules are worth knowing before you pay for anything — one of them changed very recently.`,
      },
      { h2: "The price on the tag includes tax" },
      {
        p: `Goods and services tax (GST) is ${F.gstPercent}%, and businesses must display a total price that includes it. What you see is what you pay at the till.`,
      },
      { h2: "No more card surcharges" },
      {
        p: `From ${F.surchargeBanFrom}, businesses can no longer add a surcharge for payments made with Visa, Mastercard, American Express or eftpos cards — credit, debit or prepaid. Before that date, many cafés and taxis added a percentage for card payments. If you are charged a card surcharge now, it is worth questioning.`,
      },
      {
        note: "Weekend and public holiday surcharges are a separate thing and are still allowed — some cafés and restaurants add one on Sundays and public holidays. Your own bank may also charge a foreign transaction fee; that is between you and your bank.",
      },
      { h2: "Tipping" },
      {
        p: `Tourism Australia describes tipping as optional and not expected in most places. In upmarket restaurants, around 10% for good service is common. You will not cause offence by not tipping in a café or a taxi.`,
      },
      { h2: `Cash of ${F.cashReportThreshold} or more must be declared` },
      {
        p: `There is no limit on how much money you can bring into or take out of Australia. But if you carry cash and instruments such as traveller's cheques, cheques or money orders — in any currency — with a combined value of ${F.cashReportThreshold} or more, you must declare it when you arrive and when you leave.`,
      },
      {
        ul: [
          "Declare online on the AUSTRAC form before you pass through customs, and keep the receipt",
          "A paper form is available from a Border Force or police officer if you cannot use the online form",
          "Question 5 on the Incoming Passenger Card asks the same thing",
          "Declaring is free. Splitting cash between travellers to stay under the threshold is illegal",
        ],
      },
      { source: { label: "AUSTRAC — Moving money across international borders", url: "https://www.austrac.gov.au/individuals/moving-money-across-international-borders" } },
      { source: { label: "ACCC — Card surcharges", url: "https://www.accc.gov.au/consumers/pricing/card-surcharges" } },
      { source: { label: "Tourism Australia — Key facts about Australia", url: "https://www.australia.com/en/facts-and-planning/about-australia/key-facts-about-australia.html" } },
    ],
    faq: [
      {
        q: "Is it illegal to bring more than AUD 10,000 into Australia?",
        a: `No. There is no limit. Amounts of ${F.cashReportThreshold} or more in cash and similar instruments must be declared, that is all.`,
      },
      {
        q: "Can shops still charge extra for paying by card?",
        a: `Not for Visa, Mastercard, American Express or eftpos cards from ${F.surchargeBanFrom}. Weekend and public holiday surcharges are a separate matter and are still allowed.`,
      },
      {
        q: "Should I tip in Australia?",
        a: "It is optional. Around 10% in upmarket restaurants is common; elsewhere it is not expected.",
      },
    ],
  },
  {
    slug: "tourist-refund-scheme",
    nav: "Tax refund (TRS)",
    title: `Tourist Refund Scheme: getting GST back when you leave Australia (${F.trsMinSpend}+ rule)`,
    description: `Spend ${F.trsMinSpend}+ with one business within ${F.trsDays} days of leaving, carry the goods, and claim at the airport at least ${F.trsCutoffMinutes} minutes before departure.`,
    related: ["money-and-tipping", "airport-security-liquids", "customs-allowances"],
    blocks: [
      {
        p: `Visitors can claim back the GST — and the wine equalisation tax (WET) on wine — on goods they buy in Australia and take with them when they leave. It is run by the Australian Border Force at the airport on your day of departure.`,
      },
      { h2: "The conditions" },
      {
        ul: [
          `You spent ${F.trsMinSpend} or more (including GST) with one business — one ABN. That can be several invoices from the same business`,
          `You bought the goods within ${F.trsDays} days before you leave Australia`,
          "You have the original tax invoices. Invoices of AUD 1,000 or more must show your name",
          "You carry the goods with you when you leave — they cannot be posted or freighted",
        ],
      },
      { h2: "Claiming at the airport" },
      {
        p: `Show your passport, boarding pass, the goods and the original invoices at the TRS facility on the day you depart, at least ${F.trsCutoffMinutes} minutes before your scheduled departure. The ABF advises getting there ${F.trsArriveMinutes} minutes before departure, because queues can be that long at busy times.`,
      },
      {
        ul: [
          "You cannot claim online, before your day of departure, or at a domestic airport",
          "There is no cash refund — refunds go to a credit card (Amex, Diners, JCB, Mastercard, UnionPay or Visa) or an Australian bank account, usually within 60 days",
          "The official TRS app stores your details and invoices as a QR code to speed up the queue; it does not replace the in-person claim",
        ],
      },
      { h2: "What you cannot claim" },
      {
        ul: [
          "Services — accommodation, tours, taxis, car rental",
          "Goods wholly or partly consumed in Australia, including food, drink, perfume and supplements",
          "Alcohol other than wine below 22% alcohol, and tobacco",
          "Gift cards and vouchers, and goods you post or freight home",
        ],
      },
      { source: { label: "Australian Border Force — Tourist Refund Scheme", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme" } },
      { source: { label: "Australian Border Force — Making the claim", url: "https://www.abf.gov.au/entering-and-leaving-australia/tourist-refund-scheme/making-the-claim" } },
    ],
    faq: [
      {
        q: "Can I combine receipts from different shops to reach AUD 300?",
        a: `No. The ${F.trsMinSpend} must be spent with one business (the same ABN), although it can be spread over several invoices from that business.`,
      },
      {
        q: "Can I claim the refund in cash?",
        a: "No. Refunds are paid to a credit card or an Australian bank account.",
      },
      {
        q: "How late can I claim?",
        a: `At least ${F.trsCutoffMinutes} minutes before your scheduled departure. The ABF recommends arriving at the TRS facility ${F.trsArriveMinutes} minutes before departure.`,
      },
    ],
  },
  {
    slug: "healthcare-for-visitors",
    nav: "Healthcare",
    title: `Healthcare for visitors to Australia: Medicare agreements with ${F.rhcaCountries} countries, and everyone else`,
    description: `Visitors from ${F.rhcaCountries} countries, including Italy, the Netherlands and the UK, get some public care. Germany, France, Spain, Korea, China and Taiwan are not covered.`,
    related: ["bringing-medicines", "emergency-and-safety", HUB_SLUG],
    blocks: [
      {
        p: `Australia's public health system, Medicare, is for residents. Visitors pay for their own treatment — unless their country has a Reciprocal Health Care Agreement (RHCA) with Australia. The Department of Home Affairs puts it plainly on the eVisitor page: you are personally liable for all your healthcare costs in Australia, and it recommends health insurance.`,
      },
      { h2: `The ${F.rhcaCountries} agreement countries` },
      {
        p: "Belgium, Finland, Ireland, Italy, Malta, the Netherlands, New Zealand, Norway, Slovenia, Sweden and the United Kingdom.",
      },
      {
        note: "Germany, France, Spain, Austria, Switzerland, South Korea, China and Taiwan have no agreement. Visitors from those countries pay the full cost of any hospital, ambulance or doctor fees unless they are insured.",
      },
      { h2: "What the agreement covers" },
      {
        ul: [
          "Medically necessary care out of hospital (for example a GP visit)",
          "Medically necessary care as a public patient in a public hospital, inpatient and outpatient",
          "Some prescription medicines under the PBS at the general rate",
        ],
      },
      {
        p: "Visitors from Ireland (and New Zealand) are covered for public hospital care and PBS medicines only — not GP visits. They do not enrol in Medicare and must ask hospital or pharmacy staff to treat them under the agreement.",
      },
      { h2: "What it does not cover" },
      {
        ul: [
          "Treatment as a private patient, in a public or a private hospital",
          "Travelling to Australia in order to get medical treatment",
          "Anything that is not medically necessary",
        ],
      },
      { h2: "How long cover lasts" },
      {
        ul: [
          "Italy and Malta: up to 6 months from arrival, or until the visa expires if sooner",
          "United Kingdom and Ireland: until the visa expires",
          "Netherlands, Belgium, Norway and Slovenia: until your national insurance, your EHIC or your visa expires — whichever is first",
        ],
      },
      { h2: "Enrolling in Medicare" },
      {
        p: "Visitors from agreement countries (other than Ireland and New Zealand) enrol in Medicare and receive a yellow Medicare card. You need your passport, your visa, and proof of cover at home — usually your EHIC (or a GHIC for UK residents) or national health insurance card. If you are only in Australia briefly and do not need treatment, there is no need to enrol. Treatment received before you enrol may still be covered once you do.",
      },
      { source: { label: "Services Australia — Reciprocal Health Care Agreements", url: "https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements" } },
      { source: { label: "Services Australia — Visiting Australia", url: "https://www.servicesaustralia.gov.au/visiting-australia" } },
      { source: { label: "Department of Home Affairs — eVisitor (subclass 651): health insurance", url: F.officialUrl } },
    ],
    faq: [
      {
        q: "Does Germany have a health care agreement with Australia?",
        a: "No. Germany, France and Spain have no Reciprocal Health Care Agreement with Australia. Visitors from those countries should take out travel health insurance.",
      },
      {
        q: "Is health insurance mandatory for the eVisitor?",
        a: "The Department of Home Affairs recommends it and states that you are personally liable for all your healthcare costs in Australia. Check your own visa conditions in VEVO or your grant letter.",
      },
      {
        q: "I am Italian. How long am I covered?",
        a: "Up to 6 months from the day you arrive, or until your visa expires if that is sooner. You need to enrol in Medicare to claim GP visits.",
      },
    ],
  },
  {
    slug: "bringing-medicines",
    nav: "Bringing medicines",
    title: `Bringing medicines into Australia: the ${F.medicineSupplyMonths}-month rule`,
    description: `Up to ${F.medicineSupplyMonths} months' supply for your own use, in original packaging, with a prescription or doctor's letter — and declared. Some medicines are banned.`,
    related: ["healthcare-for-visitors", "biosecurity", "airport-security-liquids"],
    blocks: [
      {
        p: `Australia lets travellers bring medicines for their own use without a permit under the "traveller's exemption" — as long as they follow its conditions. The exemption also covers an immediate family member travelling with you.`,
      },
      { h2: "The conditions" },
      {
        ul: [
          `Bring no more than a ${F.medicineSupplyMonths}-month supply`,
          "Keep medicines in their original packaging with the pharmacy label, if possible",
          "Carry the prescription or a letter from your doctor stating the name of the medicine and the dosage",
          "Declare all medication to the Australian Border Force when you arrive",
          "Do not give or sell your medicines to anyone else, and take leftovers with you when you leave",
        ],
      },
      { h2: "Strong painkillers, ADHD medication and sleeping pills" },
      {
        p: "The Office of Drug Control states that prescription medicines such as morphine, oxycodone, methadone, methylphenidate, Adderall and benzodiazepines are covered by the traveller's exemption — with a prescription or doctor's letter. Any medicine containing codeine, of any strength, also needs a prescription or doctor's letter.",
      },
      { h2: "Medicines you cannot bring" },
      {
        ul: [
          "Abortifacients such as mifepristone (RU486)",
          "Yohimbe (yohimbine)",
          "Aminophenazone, aminopyrine, dipyrone (metamizole)",
          "Amygdalin (laetrile)",
        ],
      },
      { h2: "If you run out" },
      {
        p: "See an Australian doctor (a GP) for an Australian prescription. Having medicine posted from home is restricted: prescription-only medicines need a valid Australian prescription, the parcel cannot exceed a 3-month supply, and controlled medicines and vapes cannot be posted at all.",
      },
      { source: { label: "Therapeutic Goods Administration — Entering Australia with medicines", url: "https://www.tga.gov.au/resources/consumer-information-and-resources/travelling-medicines-and-medical-devices/entering-australia" } },
      { source: { label: "Office of Drug Control — Travelling to Australia with medicines", url: "https://www.odc.gov.au/travellers/travelling-or-australia-medicines-and-medical-devices" } },
      { source: { label: "TGA — Personal Importation Scheme", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/access-pathways/personal-importation-scheme" } },
    ],
    faq: [
      {
        q: "How much medicine can I bring to Australia?",
        a: `Up to a ${F.medicineSupplyMonths}-month supply for your own use, or for an immediate family member travelling with you.`,
      },
      {
        q: "Can I bring my ADHD medication?",
        a: "Medicines such as methylphenidate and Adderall are covered by the traveller's exemption, provided you carry a prescription or a doctor's letter and declare them.",
      },
      {
        q: "Can my family post my medicine to me in Australia?",
        a: "Only under strict conditions. Prescription-only medicines need a valid Australian prescription, and controlled medicines cannot be posted.",
      },
    ],
  },
  {
    slug: "smoking-vaping-and-alcohol",
    nav: "Smoking, vaping, alcohol",
    title: "Smoking, vaping and alcohol in Australia: the rules visitors miss",
    description: `Vapes are sold only in pharmacies; travellers may bring ${F.vapeDevices} for their own treatment. The drinking age is ${F.legalAge}, and smoking is banned in enclosed public places.`,
    related: ["customs-allowances", "driving-in-australia", "bringing-medicines"],
    blocks: [
      {
        p: `Australia regulates vapes as therapeutic goods, not as consumer products. That surprises many visitors — especially those used to buying vapes in convenience stores at home.`,
      },
      { h2: "Vapes" },
      {
        ul: [
          "Vapes are sold only by participating pharmacies. Tobacconists, vape shops and convenience stores may not sell any vape, with or without nicotine",
          `Adults aged ${F.legalAge} and over may be able to buy vapes with nicotine of 20 mg/mL or less in a pharmacy without a prescription, where state law allows — with ID, a one-month supply limit, and only mint, menthol or tobacco flavours`,
          "You cannot order vapes from overseas websites for personal use, even with a prescription",
          "Some states prohibit possessing nicotine vapes without a prescription",
        ],
      },
      { h2: "Bringing vapes with you" },
      {
        p: `Travellers arriving by air or sea may bring up to ${F.vapeDevices} vapes, ${F.vapeAccessories} accessories (cartridges, capsules or pods) and ${F.vapeLiquid} of vape liquid. The TGA's wording is that they must be for use in the treatment of the traveller, or of someone they care for on the same flight or ship. Border Force officers can seize goods they suspect are unlawful imports.`,
      },
      { h2: "Smoking" },
      {
        p: `It is illegal to sell tobacco to anyone under ${F.legalAge}. Smoking is banned in enclosed public places in every state and territory — public transport, offices, shopping centres, cinemas and airports among them. Rules for outdoor areas such as dining areas, beaches and playgrounds differ by state. Duty-free tobacco is limited; see the customs allowances page.`,
      },
      { h2: "Alcohol" },
      {
        ul: [
          `You must be ${F.legalAge} or older to buy alcohol or to drink in a licensed venue`,
          "Where you may drink outdoors is set by states and local councils — many public places are alcohol-free zones",
          `The drink-driving limit is a blood alcohol concentration of ${F.bacLimit} — and zero for learner and provisional drivers`,
        ],
      },
      { source: { label: "TGA — Vapes: information for individuals", url: "https://www.tga.gov.au/products/unapproved-therapeutic-goods/therapeutic-vaping-goods/vaping-hub/vapes-information-individuals-and-patients" } },
      { source: { label: "Department of Health — Smoking and tobacco laws in Australia", url: "https://www.health.gov.au/topics/smoking-vaping-and-tobacco/about-smoking/laws-in-australia" } },
      { source: { label: "Department of Health — Alcohol laws in Australia", url: "https://www.health.gov.au/topics/alcohol/about-alcohol/alcohol-laws-in-australia" } },
    ],
    faq: [
      {
        q: "Can I buy a vape at a convenience store in Australia?",
        a: "No. Vapes may be sold only by participating pharmacies. It is illegal for other retailers to sell any vape.",
      },
      {
        q: "How many vapes can I bring to Australia?",
        a: `Up to ${F.vapeDevices} vapes, ${F.vapeAccessories} accessories and ${F.vapeLiquid} of liquid, for use in your own treatment or that of someone in your care travelling with you.`,
      },
      {
        q: "What is the drinking age in Australia?",
        a: `${F.legalAge}. You must be ${F.legalAge} or older to buy alcohol or drink in a licensed venue.`,
      },
    ],
  },
  {
    slug: "emergency-and-safety",
    nav: "Emergency numbers",
    title: `Emergency numbers in Australia: ${F.emergency}, ${F.emergencyMobile} — and why 911 does not work`,
    description: `Call ${F.emergency} for police, fire or ambulance; ${F.emergencyMobile} works from mobiles. 911 is not redirected. Non-urgent police: ${F.policeAssistance}. An interpreter is arranged if needed.`,
    related: ["healthcare-for-visitors", "phones-and-sim-cards", "driving-in-australia"],
    blocks: [
      {
        p: `Triple Zero (${F.emergency}) is Australia's emergency number for police, fire and ambulance in life-threatening or time-critical situations. Calls are free, from a landline, a mobile, a payphone or a satellite phone.`,
      },
      { h2: "The numbers" },
      {
        ul: [
          `${F.emergency} — police, fire, ambulance`,
          `${F.emergencyMobile} — works from mobile phones only and connects to the same ${F.emergency} service. It has no priority over ${F.emergency}`,
          `${F.policeAssistance} — Police Assistance Line, for non-urgent police matters`,
          `${F.ses} — State Emergency Service, for flood, storm and tsunami help that is not life-threatening`,
          "Do not dial 911 — calls to 911 are not redirected to 000",
        ],
      },
      { h2: "If you do not speak English" },
      {
        p: `Call ${F.emergency}, say "police", "fire" or "ambulance", and stay on the line. A translator will be arranged.`,
      },
      { h2: "Mobile phones and coverage" },
      {
        ul: [
          `If your network has no signal, your phone automatically uses another available network to reach ${F.emergency} — even without a SIM card`,
          `If there is no coverage on any network, you cannot reach ${F.emergency} by mobile. Large parts of outback Australia have none`,
          `${F.emergency} cannot be contacted by text message`,
          "If a call does not connect within about 5 seconds, hang up and try again",
        ],
      },
      {
        note: `Australia's 3G networks have been switched off. 3G phones and some older 4G phones — especially phones bought overseas — may be unable to call ${F.emergency}. The regulator advises not to test this by calling ${F.emergency}; ask the mobile provider instead.`,
      },
      { source: { label: "Department of Infrastructure — Triple Zero (000)", url: "https://www.infrastructure.gov.au/media-communications/phone/triple-zero" } },
      { source: { label: "ACMA — 3G network switch-off", url: "https://www.acma.gov.au/3g-network-switch" } },
    ],
    faq: [
      {
        q: "Does 911 work in Australia?",
        a: `No. Calls to 911 are not redirected. Dial ${F.emergency}, or ${F.emergencyMobile} from a mobile phone.`,
      },
      {
        q: "Can I call 000 without an Australian SIM card?",
        a: `Yes, as long as there is coverage on some mobile network. Your phone connects to any available network for ${F.emergency}, even without an active SIM.`,
      },
      {
        q: "Can I text 000?",
        a: `No. ${F.emergency} cannot be contacted by SMS.`,
      },
    ],
  },
  {
    slug: "phones-and-sim-cards",
    nav: "Phones and SIM cards",
    title: "Phones and SIM cards in Australia: ID checks and the 3G switch-off",
    description: "Activating an Australian prepaid SIM requires an ID check — a passport in your name is accepted. Check your phone works on Australian 4G/5G first.",
    related: ["emergency-and-safety", "power-plugs", "money-and-tipping"],
    blocks: [
      {
        p: "You can use roaming on your home plan, or buy an Australian prepaid SIM. If you buy a local SIM, two things are different from many other countries: the identity check, and the end of 3G.",
      },
      { h2: "The identity check" },
      {
        p: "By law, telcos must collect your name, date of birth and address and check your identity when you activate a prepaid mobile service. A passport issued in your name is one of the accepted documents — it does not have to be an Australian passport. The document must not have expired.",
      },
      {
        p: "Telcos can also verify identity by other methods, such as a government document check, an existing account, a card transaction or an accredited Digital ID service. How a particular provider does it — in store or online — is up to the provider.",
      },
      { h2: "Check your phone first" },
      {
        p: "Australia's 3G networks have been switched off. 3G-only phones no longer work at all, and some 4G phones that rely on 3G for calls cannot make voice calls or reach emergency services. Older 4G phones and phones bought overseas are the most at risk. Telcos must not connect a phone that they identify as unable to call Triple Zero (000).",
      },
      {
        ul: [
          "Ask the provider to confirm your model works on its 4G/5G network and supports VoLTE calling before you pay",
          "Do not test emergency calling by dialling 000",
        ],
      },
      {
        note: "The prepaid ID rules are under review by the regulator (ACMA) in 2026. The basics — an ID check, with a passport accepted — have applied for years.",
      },
      { source: { label: "ACMA — ID checks for prepaid mobiles", url: "https://www.acma.gov.au/id-checks-prepaid-mobiles" } },
      { source: { label: "Federal Register of Legislation — Identity Checks for Prepaid Mobile Carriage Services Determination 2017", url: "https://www.legislation.gov.au/F2017L00399/latest/text" } },
      { source: { label: "ACMA — Ensuring mobiles can reach 000 after the 3G shutdown", url: "https://www.acma.gov.au/ensuring-mobiles-can-reach-000-after-3g-shutdown" } },
    ],
    faq: [
      {
        q: "Can I buy an Australian SIM card with a foreign passport?",
        a: "Yes. A passport issued in your name is an accepted identity document for activating a prepaid service. It must not have expired.",
      },
      {
        q: "Will my phone from home work in Australia?",
        a: "Most recent phones do, but 3G networks have closed. Older 4G phones and some phones bought overseas may not be able to make calls or reach 000 — ask the provider to check your model.",
      },
    ],
  },
  {
    slug: "power-plugs",
    nav: "Plugs and voltage",
    title: `Power plugs in Australia: the Type I plug and ${F.voltage} ${F.frequency}`,
    description: `Australia uses a plug with two flat pins in an inverted V (Type I) and ${F.voltage}, ${F.frequency}. Check your charger's label before you plug in.`,
    related: ["phones-and-sim-cards", "money-and-tipping", HUB_SLUG],
    blocks: [
      {
        p: `Australian sockets take a plug with two flat metal pins forming an inverted V, sometimes with a third pin in the centre. Tourism Australia calls it the "Type 1" plug; internationally it is usually labelled Type I. European, Korean and Chinese round-pin plugs do not fit without an adapter.`,
      },
      { h2: "Voltage" },
      {
        p: `The supply is ${F.voltage}, ${F.frequency} (Tourism Australia also gives the range 220–240 V). Most phone and laptop chargers are rated 100–240 V and work with a plug adapter alone. Check the label: if it does not cover 230 V, you need a voltage transformer, not just an adapter.`,
      },
      { h2: "What to pack" },
      {
        ul: [
          "A Type I plug adapter, or a multi-country adapter",
          "A transformer only for devices that are not rated for 230 V",
        ],
      },
      { source: { label: "Tourism Australia — Useful tips for travelling to Australia", url: "https://www.australia.com/en-us/facts-and-planning/about-australia/useful-tips.html" } },
      { source: { label: "Tourism Australia — Ultimate Australia packing list", url: "https://www.australia.com/en/facts-and-planning/planning-tools/ultimate-australia-packing-list.html" } },
    ],
    faq: [
      {
        q: "Do I need an adapter for Australia?",
        a: "Yes, if your plugs are not the Australian type with two flat pins in an inverted V. European, Korean and Chinese round-pin plugs need an adapter.",
      },
      {
        q: "Do I need a voltage converter?",
        a: `Only for devices not rated for ${F.voltage}. Chargers labelled 100–240 V work with an adapter alone.`,
      },
    ],
  },
  {
    slug: "public-holidays",
    nav: "Public holidays",
    title: "Public holidays in Australia 2026–2027: dates by state",
    description: "Each state and territory sets its own public holidays. The dates that apply everywhere, the ones that differ, and what it means for your trip.",
    related: ["money-and-tipping", "driving-in-australia", "three-months-per-visit"],
    blocks: [
      {
        p: `There is no single national list. Each state and territory sets its own public holidays and decides whether to add a substitute day when one falls on a weekend. The dates below are from the Fair Work Ombudsman, the federal workplace regulator.`,
      },
      { h2: "Remaining holidays in 2026" },
      {
        ul: [
          "Fri 25 December — Christmas Day (everywhere)",
          "Sat 26 December — Boxing Day (South Australia: Proclamation Day holiday)",
          "Mon 28 December — additional public holiday for Boxing Day in most states and territories; in Tasmania, Boxing Day itself is on this Monday",
        ],
      },
      { h2: "2027: the dates that apply everywhere" },
      {
        ul: [
          "Fri 1 January — New Year's Day",
          "Tue 26 January — Australia Day",
          "Fri 26 March — Good Friday",
          "Mon 29 March — Easter Monday",
          "Sat 25 December — Christmas Day, with Mon 27 December as an additional public holiday",
        ],
      },
      { h2: "2027: where states differ" },
      {
        ul: [
          "Easter Saturday (27 March) and Easter Sunday (28 March) are not listed for Tasmania; Western Australia does not list Easter Saturday",
          "Anzac Day falls on Sunday 25 April. NSW and WA add Monday 26 April; the ACT, NT and Queensland hold it on Monday 26 April; SA, Tasmania and Victoria keep the Sunday only",
          "King's Birthday is Monday 14 June in most states — but Monday 27 September in Western Australia and Monday 4 October in Queensland",
          "Labour Day ranges from March (WA, Victoria, Tasmania) to May (Queensland, NT) and October (NSW, ACT, SA)",
          "Boxing Day is Sunday 26 December with Tuesday 28 December as an additional day in most places; in Tasmania, Boxing Day is on Tuesday 28 December",
        ],
      },
      {
        note: "The 2027 dates are as published in advance by the Fair Work Ombudsman. Victoria's Friday before the AFL Grand Final is not yet fixed. Some regional and city-only holidays (for example show days) are not listed here.",
      },
      { h2: "What it means for a visitor" },
      {
        p: "Banks and government offices close. In cities many shops, cafés and restaurants stay open, sometimes with a public holiday surcharge on the bill. Public transport usually runs to a reduced timetable. Long weekends and the Christmas–January summer holidays are peak domestic travel periods, so book accommodation and car hire early.",
      },
      { source: { label: "Fair Work Ombudsman — 2026 public holidays", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2026-public-holidays" } },
      { source: { label: "Fair Work Ombudsman — 2027 public holidays", url: "https://www.fairwork.gov.au/employment-conditions/public-holidays/2027-public-holidays" } },
    ],
    faq: [
      {
        q: "Is King's Birthday on the same day across Australia?",
        a: "No. Most states hold it on the second Monday in June, but Western Australia holds it in late September and Queensland in early October.",
      },
      {
        q: "Is Boxing Day a public holiday everywhere?",
        a: "Yes, though South Australia calls it the Proclamation Day holiday, and when it falls on a weekend the substitute day differs between states.",
      },
    ],
  },
  {
    slug: "driving-in-australia",
    nav: "Driving",
    title: "Driving in Australia on an overseas licence: the rules differ by state",
    description: `Each state sets its own rules: NSW allows up to ${F.driveNswMonths} months on an overseas licence, the NT ${F.driveNtMonths}. Non-English licences need a translation or an IDP.`,
    related: ["public-holidays", "emergency-and-safety", "smoking-vaping-and-alcohol"],
    blocks: [
      {
        p: `Australia drives on the left. Roundabouts run clockwise and you give way to the right. Speed limits are in kilometres per hour: 50 km/h in built-up areas unless signposted, usually 100 km/h on other roads and up to 110 km/h on some highways.`,
      },
      { h2: "Licensing is a state matter" },
      {
        p: "There is no single national rule for visitors. Each state and territory decides how long a visitor may drive on an overseas licence and what has to go with it. Check the rules for every state you will drive in — a road trip can cross several.",
      },
      {
        ul: [
          `New South Wales: tourists and temporary visitors may drive on a current overseas licence for up to ${F.driveNswMonths} months`,
          `Victoria: allowed if you will live and drive in Victoria for less than ${F.driveNswMonths} months, counted from when you first arrived`,
          `Northern Territory: up to ${F.driveNtMonths} months for visitors and new residents`,
          "Queensland, Western Australia, South Australia, Tasmania and the ACT: visitors may drive on a current overseas licence; the official pages do not state a fixed time limit for visitors",
        ],
      },
      {
        note: "Three-month limits you may read about in Queensland, NSW, WA and the ACT apply to Australian citizens and permanent or resident visa holders, not to tourists.",
      },
      { h2: "If your licence is not in English" },
      {
        p: "Carry an English translation of your licence or an International Driving Permit (IDP) together with the licence itself. The details differ: the Northern Territory says to get an IDP before you travel, or an official translation from an authorised NT translator; Queensland says to carry a recognised English translation. An IDP never replaces your home licence — carry both.",
      },
      { h2: "Before you set off" },
      {
        ul: [
          "Always carry your licence while driving",
          "Your licence must be current and for the type of vehicle you are driving",
          `The drink-driving limit is a blood alcohol concentration of ${F.bacLimit}`,
          "Distances between towns are long — plan fuel stops and rest breaks",
        ],
      },
      { source: { label: "Transport for NSW — Visiting from overseas", url: "https://www.nsw.gov.au/driving-boating-and-transport/driving-nsw/driver-and-rider-licences/visiting-or-moving-to-nsw/visiting-from-overseas-or-interstate" } },
      { source: { label: "VicRoads — Driving with your overseas licence", url: "https://www.vicroads.vic.gov.au/licences/convert-your-licence/driving-with-your-overseas-licence" } },
      { source: { label: "Queensland Government — Driving in Queensland with an overseas licence", url: "https://www.qld.gov.au/transport/licensing/driver-licensing/overseas/driving" } },
      { source: { label: "NT Government — Driver licence rules for visiting drivers", url: "https://nt.gov.au/driving/licence/new-nt-residents-and-visitors/driver-licence-rules-for-new-nt-residents-and-visiting-drivers" } },
      { source: { label: "Tourism Australia — Driving in Australia", url: "https://www.australia.com/en/facts-and-planning/getting-around/driving-in-australia.html" } },
    ],
    faq: [
      {
        q: "Do I need an International Driving Permit in Australia?",
        a: "If your licence is in English, generally no. If it is not, carry an English translation or an IDP together with your licence. The exact rule depends on the state.",
      },
      {
        q: "How long can I drive on my overseas licence?",
        a: `It depends on the state: up to ${F.driveNswMonths} months in NSW, less than ${F.driveNswMonths} months of residence in Victoria, up to ${F.driveNtMonths} months in the NT. Other states do not state a fixed limit for visitors.`,
      },
    ],
  },
  /* ── 2026-11-15 追加（facts-au.md §6・§7）。⚠️ パース・アデレードの空港、メルボルンの myki、
        SkyBus・Airtrain の運賃、Opal の上限額、WSI が実際に開港したかは確認できていないので書かない ── */
  {
    slug: "major-airports",
    checked: "15 November 2026",
    nav: "Major airports",
    title: "Arriving at Sydney, Melbourne and Brisbane airports: what the operators say",
    description: "Getting from the international terminal into Sydney, Melbourne and Brisbane, plus Western Sydney International, from airport operators and transport bodies.",
    related: ["public-transport", "smartgate-australia", "border-questions", HUB_SLUG],
    blocks: [
      {
        p: `Whichever airport you land at, the border steps are the same: passport control (a SmartGate or an officer), then baggage, then biosecurity and customs. The ABF describes SmartGates as gates that "use facial recognition technology and your passport to check your identity and process you through Passport Control." What differs between airports is the way into the city. This page covers only what the airport operators and state transport authorities publish.`,
      },
      { h2: "Sydney (SYD)" },
      {
        ul: [
          "Sydney Airport states that it is located 8 km from the Sydney CBD and is accessible by train, bus, taxi and rideshare. International flights use T1 International.",
          "The train stations are underneath the terminals. T8 Airport & South Line services run every day between 5am and midnight.",
          "A station access fee is charged on top of the train fare at the airport stations, by the company that privately owns them. It is not included in Opal daily, weekly or Friday/weekend caps.",
          `Between the domestic and international airport stations the access fee is ${F.sydneyStationFeeDomIntl} plus the train fare. To move between the domestic and international terminals, Transport for NSW points to the T8 train or the route 420 bus.`,
          `If you buy or top up an Opal card at an airport station, the minimum top-up is ${F.opalAirportMinTopUp}. The Opal 60-minute transfer does not apply at Sydney Airport stations.`,
          "Adult fares can be paid with a contactless credit or debit card with no set-up.",
        ],
      },
      { source: { label: "Sydney Airport", url: "https://www.sydneyairport.com.au/" } },
      { source: { label: "Transport for NSW — Getting to and from Sydney Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-sydney-airport" } },
      { h2: "Western Sydney International (WSI)" },
      {
        p: `Transport for NSW gives the airport's opening date as Sunday 25 October 2026. It states that there are currently no direct train services to WSI. The fare-free WSI Link bus runs between St Marys Station and the airport every ${F.wsiLinkEveryMinutes} minutes, from 4:30am to midnight Sunday to Thursday and from 4:30am to 1am on Friday and Saturday. The Sydney Metro line to the airport is still under construction, and there are no fixed taxi fares at WSI.`,
      },
      {
        p: `The Australian Border Force offers an Australia Travel Declaration web form that it says is "only available for flights arriving at Western Sydney International Airport", and it asks travellers arriving at any other Australian airport not to complete it.`,
      },
      {
        note: "We could not confirm current operations at WSI from the airport's own site. Check with your airline and the airport before you travel.",
      },
      { source: { label: "Transport for NSW — Getting to and from Western Sydney International Airport", url: "https://transportnsw.info/travel-info/airport-travel/getting-to-from-western-sydney-international-airport-wsi" } },
      { source: { label: "Australian Border Force — Australia Travel Declaration", url: "https://www.abf.gov.au/entering-and-leaving-australia/australia-travel-declaration" } },
      { h2: "Melbourne (MEL)" },
      {
        ul: [
          "Melbourne Airport states that it is connected to the CBD and beyond by regular public bus services, SkyBus and regional and charter buses.",
          "It describes the CBD as approximately a 30-minute taxi fare away, and advises against accepting any taxi offer outside the designated taxi ranks at Terminals 1, 2 and 4.",
        ],
      },
      { source: { label: "Melbourne Airport — Getting to and from the airport", url: "https://www.melbourneairport.com.au/getting-to-from-the-airport" } },
      { h2: "Brisbane (BNE)" },
      {
        ul: [
          "After landing you go to immigration and passport control, either a SmartGate or an officer.",
          "Every passenger is issued a Passport Control ticket, which you show to Biosecurity and Customs officers before leaving the terminal.",
          "Brisbane Airport reminds arrivals that certain items must be declared on the Incoming Passenger Card and that penalties may apply for failing to do so.",
          "For the Airtrain, take the lift to level 3, leave the terminal and cross the bridge to the station. Trains run every 15 minutes at peak times and every 30 minutes off-peak.",
          "Taxis run 24/7 from the rank on the Level 2 arrivals roadway.",
        ],
      },
      { source: { label: "Brisbane Airport — International arrivals", url: "https://www.bne.com.au/passenger/passenger-information/international-arrivals" } },
      { source: { label: "Australian Border Force — SmartGates on arrival", url: "https://www.abf.gov.au/entering-and-leaving-australia/smartgates/arrivals" } },
      {
        note: "Perth, Adelaide, Cairns, Gold Coast, Darwin, Hobart and Canberra are not covered here because we could not check their official pages. Use the airport operator's own site.",
      },
    ],
  },
  {
    slug: "public-transport",
    checked: "15 November 2026",
    nav: "Public transport",
    title: "Public transport in Sydney, South East Queensland and Perth: Opal, go card, SmartRider",
    description: `Each Australian city runs its own fare system. How visitors pay in Sydney (Opal), South East Queensland (go card) and Perth (SmartRider), from official sources.`,
    related: ["major-airports", "driving-in-australia", "money-and-tipping", HUB_SLUG],
    blocks: [
      {
        p: "There is no national public transport card in Australia. Each state runs its own system with its own rules, and a card from one city does not work in another. This page covers the three systems whose official pages we could check: Sydney and NSW, South East Queensland and Perth.",
      },
      { h2: "Sydney and NSW — Opal" },
      {
        ul: [
          "Opal is the ticketing system for public transport in Sydney, the Blue Mountains, the Central Coast, the Hunter and the Illawarra.",
          "You tap on and tap off with an Opal card, or with a contactless credit or debit card (American Express, Mastercard, Visa) for most fare types. Use the same card or device for the whole trip.",
          "Paying by contactless card costs the same Opal fare and gives the same Opal benefits.",
          "Without an Opal card or contactless payment you need an Opal single trip ticket, which is only available for metro, train, ferry and light rail.",
          "Adult fares get a $2 discount for each transfer between modes within one journey, and fares are 30% cheaper in off-peak times.",
          "Keep cards apart in your wallet: Transport for NSW warns about card clash.",
        ],
      },
      {
        note: `At Sydney Airport's stations a separate station access fee applies on top of the fare — see the airports page.`,
      },
      { source: { label: "Transport for NSW — Opal", url: "https://transportnsw.info/tickets-fares/opal" } },
      { source: { label: "Transport for NSW — Fares", url: "https://transportnsw.info/tickets-fares/fares" } },
      { source: { label: "Transport for NSW — Contactless payments", url: "https://transportnsw.info/tickets-fares/contactless-payments" } },
      { h2: "South East Queensland — go card (Translink)" },
      {
        ul: [
          `Translink states that fares are a ${F.seqFlatFare} flat rate across all its services, regardless of distance or how you pay.`,
          "The go card works on all Translink bus, train (including Airtrain), ferry and tram services in greater Brisbane, Ipswich, Moreton Bay, Redlands, the Sunshine Coast and the Gold Coast. On the Airtrain, Airtrain fares are charged.",
          "Contactless payment is accepted on all trains, trams, ferries and buses in South East Queensland.",
          `If you forget to tap on or off, you may be charged a default fare of ${F.seqDefaultFare}.`,
          "Apple Pay, Samsung Pay and Google Pay count as different payment methods from the physical card behind them, so tap on and off with the same one.",
          "Translink says it will never send penalty notices or fines by text message.",
        ],
      },
      { source: { label: "Translink — go card", url: "https://translink.com.au/tickets-and-fares/go-card" } },
      { source: { label: "Translink — Contactless payments", url: "https://translink.com.au/tickets-and-fares/contactless-payments" } },
      { h2: "Perth — SmartRider (Transperth)" },
      {
        ul: [
          "SmartRider is Transperth's reusable smart card. Contactless bank cards are also accepted, at the standard cash rate; concession fares do not apply to contactless payments.",
          "The Go Anywhere fare covers travel anywhere on the network within three hours, and SmartRider and contactless fares are capped at that amount automatically.",
          "Every Sunday, travel is free for SmartRider holders and for passengers paying by contactless.",
          "Bus drivers do not handle cash on Transperth buses.",
          "Transperth runs an Airport line.",
        ],
      },
      { source: { label: "Transperth — What is SmartRider", url: "https://www.transperth.wa.gov.au/SmartRider/What-is-SmartRider" } },
      { source: { label: "Transperth — Fares", url: "https://www.transperth.wa.gov.au/Tickets-Fares/Fares" } },
      {
        note: "Not covered: Melbourne (myki) and Adelaide (metroCARD), because we could not read the official pages, and fare amounts we could not confirm. Check the transport authority's own site for those.",
      },
    ],
  },
];

export const PRACTICAL: Page[] = RAW.map((p) => ({ ...p, checked: p.checked ?? CHECKED, practical: p.slug !== HUB_SLUG }));
