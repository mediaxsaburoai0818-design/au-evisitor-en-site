'use client'

import { usePathname } from "next/navigation"
import { FACTS as F } from "@/data/facts"
import { LANG_CODES } from "@/data/langs";
import Link from "next/link"

/** フッター。⚠️ 公式ではないことの明示は必須（誤認を避ける）。 */
export default function Footer() {
  // ⚠️ 言語ディレクトリ（/de/ /ko/ …）では、そのページ自身が現地語の免責を出している。
  //    ここで英語のフッターを重ねると、言語ページの末尾だけ英語になる（実際にそうなっていた）。
  const path = usePathname() || "/"
  const inLang = LANG_CODES.some((c) => path === `/${c}` || path.startsWith(`/${c}/`))
  if (inLang) return null

  return (
    <footer style={{ backgroundColor: "var(--color-navy-dark)" }} className="mt-0 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-bold" style={{ color: "#fff" }}>eVisitor Guide</p>
        <p className="mt-2 text-xs leading-relaxed" style={{ color: "rgba(255,255,255,.7)", maxWidth: "60ch", margin: "0.5rem auto 0" }}>
          This is an independent guide. It is not affiliated with the Australian Government or the
          Department of Home Affairs, and we do not submit applications. The eVisitor is free —
          always apply through the official website. Figures checked {F.updatedLabel}.
        </p>
        {/* 運営者情報・規約・入国後ガイドは全ページから辿れるようにする（トップからしか張られていなかった） */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
          <Link href="/arriving-in-australia/" style={{ color: "rgba(255,255,255,.85)" }}>After you land</Link>
          <Link href="/faq/" style={{ color: "rgba(255,255,255,.85)" }}>FAQ</Link>
          <Link href="/about/" style={{ color: "rgba(255,255,255,.85)" }}>About</Link>
          <Link href="/privacy/" style={{ color: "rgba(255,255,255,.85)" }}>Privacy</Link>
          <Link href="/terms/" style={{ color: "rgba(255,255,255,.85)" }}>Terms</Link>
        </div>
      </div>
    </footer>
  );
}
