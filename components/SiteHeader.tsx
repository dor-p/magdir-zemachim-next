import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, SITE_NAME } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            src="/images/app-icon-256.png"
            alt={`הלוגו של ${SITE_NAME} — אפליקציית מגדיר צמחים בעברית`}
            width={36}
            height={36}
          />
          {SITE_NAME}
        </Link>
        <nav className="site-nav" aria-label="ניווט ראשי">
          <Link href="/">בית</Link>
          <Link href="/guide">המדריך למגדיר צמחים</Link>
          <Link href="/about">אודות</Link>
          <a className="nav-cta" href={APP_STORE_URL} rel="noopener">
            הורדה חינם
          </a>
        </nav>
      </div>
    </header>
  );
}
