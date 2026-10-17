import type { Metadata } from "next";
import HomeChrome from "@/components/HomeChrome";
import { HOME_TOP, HOME_BOTTOM } from "@/lib/eta-home";
import "./eta-home.css";
import { FACTS as F, OG_IMAGES, SITE } from "@/data/facts";
import Link from "next/link";
import { LANGS, LANG_CODES } from "@/data/langs";
import { PAGES } from "@/data/pages";

/*
  ⚠️ 2026-10-17 デザインリニューアル（okina 選択：写真A シドニー港／右上B 切手「G'day! · $0」／配色A Harbour & Wattle）。
     正は ~/projects/evisitor-redesign/build。HOME_TOP / HOME_BOTTOM / eta-home.css / public/home は
     ~/projects/evisitor-redesign/gen-home.py が生成する（手で直さない）。ESTA（esta-hr.com）・カナダと同じ方式。
     上＝新デザイン（スライダー4枚）、中＝旧TOPの本文のうちデザインに無いもの（.xsec）、下＝CTA＋フッター。
     TOP では layout の Header/Footer は出さない（components/NotOnHome.tsx）。

  （以下は旧デザインのときのメモ）
  構成・UIは nz-eta-site（NZeTA）と揃えている。okinaの指摘済み事項は最初から反映:
    ・「」の角飾りは .feature-card だけ（料金表・FAQ・数値カードには付けない）
    ・見出しの罫線は見出しの「下」
    ・日付は "17 August 2026" 形式・数値ラベルは英語として自然な語に
    ・.reveal（スクロール出現）／.cta-sticky-bar（下から出る追従CTA）／.hero-zoom

  ⚠️ eVisitor固有で、NZeTAと決定的に違うのは2点。
     ①これは渡航認証ではなく**ビザ（subclass 651）**そのもの
     ②**申請料が無料**。対象は欧州36か国のパスポート保持者に限られ、
       それ以外の国（日本・米国・カナダ・シンガポール・韓国など）は
       ETA（subclass 601・AUD $20・アプリ専用）になる。
     「無料」だけを大きく出して対象を書かないと、対象外の読者を空振りさせる。
*/

export const metadata: Metadata = {
  title: {
    absolute: `eVisitor (subclass 651): the free Australian visa for European passports | eVisitor Guide 2026`,
  },
  description:
    `Australia's eVisitor (subclass 651) is free for ${F.eligibleCountries} European passports: valid ${F.validMonths} months, up to ${F.stayMonths} months per visit. Not eligible? You need the ${F.etaFee} ETA.`,
  alternates: {
    canonical: `${SITE}/`,
    // ⚠️ 言語版を足したら自動で増える（手書きしない）
    // hreflang 値は言語トップと揃えて htmlLang（zh-Hant 等）を使う
    languages: { en: `${SITE}/`, ...Object.fromEntries(LANG_CODES.map((c) => [LANGS[c].htmlLang, `${SITE}/${c}/`])), "x-default": `${SITE}/` },
  },
  openGraph: {
    title: "eVisitor (subclass 651): the free Australian visa for European passports",
    description: `Free of charge, valid ${F.validMonths} months, up to ${F.stayMonths} months per entry — and how it differs from the ${F.etaFee} ETA.`,
    locale: "en",
    type: "website",
    images: OG_IMAGES,
  },
};

const FEATURES = [
  {
    h: "It is a visa, not a travel authority",
    p: "The eVisitor is a full visitor visa (subclass 651) granted electronically. Nothing is stamped in your passport — the grant is recorded against it.",
  },
  {
    h: "European passports only",
    p: `Passport holders of ${F.eligibleCountries} European countries are eligible, including all EU members, the UK, Iceland, Norway and Switzerland. Other passports need the ETA instead.`,
  },
  {
    h: "Free — and only on the official site",
    p: "There is no application charge and no service fee. Any site asking you to pay for an eVisitor is charging for the form, not the visa.",
  },
];

const STEPS = [
  {
    h: "Check your passport is eligible",
    p: `The eVisitor covers ${F.eligibleCountries} European countries. If yours is not on the list — for example Japan, the United States, Canada, Singapore or South Korea — you need the ${F.etaFee} ETA (subclass 601), which is applied for in a mobile app.`,
  },
  {
    h: "Apply online from outside Australia",
    p: "Applications are made through the Department of Home Affairs website with an ImmiAccount. You must be outside Australia when you apply and when the visa is granted.",
  },
  {
    h: "Answer the health and character questions",
    p: "You declare your health and any criminal history. Straightforward applications are decided automatically; a declaration that needs assessment is what usually causes delays.",
  },
  {
    h: "Wait for the grant email",
    p: `Many applications are decided in ${F.decisionTypical}, but there is no guaranteed turnaround. Apply before booking anything non-refundable, and keep the grant notice with your travel documents.`,
  },
];

const FAQ = [
  {
    q: "Is the eVisitor really free?",
    a: "Yes. The Department of Home Affairs charges nothing for an eVisitor (subclass 651) — no visa application charge and no service fee. Commercial sites that quote a price are charging for filling in the form on your behalf, which is not required.",
  },
  {
    q: `What if my passport is not one of the ${F.eligibleCountries} eligible countries?`,
    a: `Then the eVisitor is not available to you. Passport holders from countries such as Japan, the United States, Canada, Singapore, Malaysia and South Korea apply for the ETA (subclass 601) instead, which has an ${F.etaFee} service charge and is applied for through the official mobile app. If neither applies to you, the Visitor visa (subclass 600) is the paid alternative.`,
  },
  {
    q: "How long can I stay in Australia?",
    a: `Up to ${F.stayMonths} months per entry. The visa itself is valid for ${F.validMonths} months from the date it is granted and allows unlimited entries during that period, so you may return as often as you like as long as each stay is within the ${F.stayMonths}-month limit.`,
  },
  {
    q: "Can I work on an eVisitor?",
    a: "No. You may not work for an Australian employer. Business visitor activities — meetings, negotiations, conferences — are allowed, and you may study or train for up to three months, but paid work is not permitted.",
  },
  {
    q: "Can I apply while I am already in Australia?",
    a: "No. You must be outside Australia both when you apply and when the visa is granted. If you are already in the country and want to stay longer, you need to apply for a different visa.",
  },
  {
    q: "Does the eVisitor guarantee entry to Australia?",
    a: "No. It permits you to travel to Australia, but the decision to let you enter is made by the Australian Border Force officer on arrival.",
  },
  {
    q: "Do children need their own eVisitor?",
    a: "Yes. Every traveller needs their own visa, including infants, and each must hold an eligible passport in their own name.",
  },
];

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  // 言語メニュー（data/langs に言語を足せば自動で増える）と確認日は facts / langs から差し込む
  const langItems =
    `<li><a href="/" hreflang="en">English</a></li>` +
    LANG_CODES.map((c) => `<li><a href="/${c}/" hreflang="${LANGS[c].htmlLang}">${LANGS[c].label}</a></li>`).join("");
  const top = HOME_TOP.replace("<!--LANGS-->", langItems);
  const bottom = HOME_BOTTOM.replace("<!--UPDATED-->", F.updatedLabel);
  const readMore = PAGES.filter((p) => !p.practical && !["privacy", "terms", "about"].includes(p.slug));

  return (
    <div className="etahome" data-c="A" data-pat="1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700;800&family=Shrikhand&family=Oswald:wght@600&display=swap" rel="stylesheet" precedence="default" />
      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: top }} />

      {/* ── 3つの要点＋対象と料金（eVisitor固有の要点）── */}
      <section id="which-visa" className="section xsec xsec-alt">
        <div className="container">
          <span className="eyebrow">Which visa applies?</span>
          <h2>Which visa applies to your passport?</h2>
          <p className="xlead">
            &ldquo;Free&rdquo; only applies to the eVisitor, and the eVisitor only applies to European passports.
            This is the single thing most travellers get wrong.
          </p>
          <div className="xcards x3">
            {FEATURES.map((f) => (
              <div key={f.h} className="xcard">
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>
          <div className="xtable-wrap">
            <table className="xtable">
              <thead>
                <tr>
                  <th>Your passport</th>
                  <th>Visa</th>
                  <th>Cost</th>
                  <th>How you apply</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Your passport">EU, UK, Iceland, Norway, Switzerland and other European countries ({F.eligibleCountries} in total)</td>
                  <td data-label="Visa">eVisitor (subclass 651)</td>
                  <td data-label="Cost" className="xfree">{F.fee}</td>
                  <td data-label="How you apply">Home Affairs website (ImmiAccount)</td>
                </tr>
                <tr>
                  <td data-label="Your passport">Japan, United States, Canada, Singapore, Malaysia, South Korea and others</td>
                  <td data-label="Visa">ETA (subclass 601)</td>
                  <td data-label="Cost"><strong>{F.etaFee}</strong></td>
                  <td data-label="How you apply">Official mobile app only</td>
                </tr>
                <tr>
                  <td data-label="Your passport">Not eligible for either</td>
                  <td data-label="Visa">Visitor visa (subclass 600)</td>
                  <td data-label="Cost"><strong>Paid — see official site</strong></td>
                  <td data-label="How you apply">Home Affairs website</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="xnote">
            The ETA cannot be applied for on the Home Affairs website — it is granted through the official app, which
            reads the chip in your passport. The eVisitor is the opposite: there is no app, only the website. Checked{" "}
            {F.updatedLabel}.
          </p>
        </div>
      </section>

      {/* ── 申請手順（詳細）── */}
      <section className="section xsec">
        <div className="container">
          <span className="eyebrow">Step by step</span>
          <h2>How to apply</h2>
          <div className="xcards x2">
            {STEPS.map((s, i) => (
              <div key={s.h} className="xcard">
                <span className="eyebrow">Step {i + 1}</span>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── できること・できないこと ── */}
      <section className="section xsec xsec-alt">
        <div className="container">
          <span className="eyebrow">Conditions</span>
          <h2>What you may and may not do</h2>
          <div className="xcards x2">
            <div className="xcard">
              <h3>Allowed</h3>
              <ul className="xlist">
                <li>Tourism, visiting family and friends</li>
                <li>Business visitor activities: meetings, negotiations, conferences</li>
                <li>Study or training for up to {F.studyMonths} months</li>
                <li>Leaving and re-entering as often as you like while the visa is valid</li>
              </ul>
            </div>
            <div className="xcard">
              <h3>Not allowed</h3>
              <ul className="xlist">
                <li>Working for an Australian employer</li>
                <li>Staying more than {F.stayMonths} months on a single entry</li>
                <li>Applying while you are already in Australia</li>
                <li>Selling goods or services to the public</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section xsec">
        <div className="container xnarrow">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently asked questions</h2>
          <div className="xfaq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="xplus" aria-hidden="true">+</span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq/" className="textlink xmore">
            All questions <span className="arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── 下層ページへの導線 ── */}
      <section id="read-more" className="section xsec xsec-alt">
        <div className="container">
          <span className="eyebrow">Guide</span>
          <h2>Read more about the eVisitor</h2>
          <div className="xcards x3">
            {readMore.map((p) => (
              <Link key={p.slug} href={`/${p.slug}/`} className="xcard xlink">
                <div className="xrow">
                  <div>
                    <h3>{p.nav}</h3>
                    <p>{p.description}</p>
                  </div>
                  <span className="xgo" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="main-wrap" dangerouslySetInnerHTML={{ __html: bottom }} />
      <HomeChrome />
    </div>
  );
}
