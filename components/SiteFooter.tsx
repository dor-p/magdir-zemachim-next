import Link from "next/link";
import Image from "next/image";
import {
  APP_STORE_URL,
  AUTHOR_NAME,
  LEGAL,
  SITE_DOMAIN_DISPLAY,
  SITE_NAME,
} from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <p className="brandline">
              <Image
                src="/images/app-icon-256.png"
                alt=""
                width={32}
                height={32}
                style={{ borderRadius: 8 }}
              />
              {SITE_NAME}
            </p>
            <p>
              מגדיר צמחים בעברית לאייפון: מצלמים כל צמח ומקבלים זיהוי מיידי עם
              שם עברי ומדעי, הנחיות השקיה ואור ומידע על רעילות. פותח בישראל על
              ידי {AUTHOR_NAME}.
            </p>
          </div>
          <div>
            <h3>ניווט</h3>
            <Link href="/">בית</Link>
            <Link href="/guide">המדריך למגדיר צמחים</Link>
            <Link href="/about">אודות</Link>
            <a href={APP_STORE_URL} rel="noopener">
              הורדה ב-App Store
            </a>
          </div>
          <div>
            <h3>מידע ותמיכה</h3>
            <a href={LEGAL.privacy}>מדיניות פרטיות</a>
            <a href={LEGAL.terms}>תנאי שימוש</a>
            <a href={LEGAL.support}>תמיכה ויצירת קשר</a>
          </div>
        </div>
        <p className="fineprint">
          {SITE_DOMAIN_DISPLAY} · © {new Date().getFullYear()} {AUTHOR_NAME}.
          כל הזכויות שמורות. Apple ו-App Store הם סימנים מסחריים של Apple Inc.
        </p>
      </div>
    </footer>
  );
}
