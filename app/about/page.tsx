import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStoreButton from "@/components/AppStoreButton";
import JsonLd from "@/components/JsonLd";
import SocialLinks from "@/components/SocialLinks";
import {
  AUTHOR_IMAGE,
  AUTHOR_NAME,
  AUTHOR_NAME_EN,
  AUTHOR_LINKS,
  LEGAL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const TITLE = `אודות ${AUTHOR_NAME} — היוצר של ${SITE_NAME}`;
const DESCRIPTION =
  "הכירו את דור פורת, מפתח תוכנה עם שנים רבות של ניסיון וחובב צמחים מושבע — האיש שמאחורי מגדיר צמחים פלוס, אפליקציית זיהוי הצמחים בעברית.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: "/about",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      { url: "/images/about-workspace.webp", width: 1280, height: 714 },
    ],
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: TITLE,
  url: `${SITE_URL}/about`,
  inLanguage: "he",
  mainEntity: {
    "@type": "Person",
    name: AUTHOR_NAME,
    alternateName: AUTHOR_NAME_EN,
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}${AUTHOR_IMAGE}`,
    sameAs: AUTHOR_LINKS,
    jobTitle: "מפתח תוכנה ויוצר אפליקציות",
    nationality: "IL",
    knowsAbout: [
      "פיתוח תוכנה",
      "פיתוח אפליקציות iOS",
      "בינה מלאכותית",
      "בוטניקה וזיהוי צמחים",
      "גידול צמחי בית",
    ],
    knowsLanguage: ["he", "en"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "בית", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "אודות",
      item: `${SITE_URL}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={profileJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="section">
        <div className="container">
          <nav className="breadcrumbs" aria-label="פירורי לחם">
            <ol>
              <li>
                <Link href="/">בית</Link>
              </li>
              <li>אודות</li>
            </ol>
          </nav>

          <div className="about-grid">
            <div>
              <span className="eyebrow">אודות</span>
              <h1
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  lineHeight: 1.25,
                  color: "var(--green-950)",
                  marginBottom: 16,
                }}
              >
                שלום, אני {AUTHOR_NAME} — מפתח תוכנה שמאוהב בצמחים
              </h1>
              <p style={{ marginBottom: 16 }}>
                אני מפתח תוכנה עם שנים רבות של ניסיון בבניית מוצרים דיגיטליים
                ואפליקציות — מהשורה הראשונה של הקוד ועד המוצר שעולה לחנות
                האפליקציות. במקביל, כבר שנים שאני מגדל, מזהה וחוקר צמחים:
                הבית שלי מלא עציצים, מדפי הספרים שלי מלאים מגדירים בוטניים,
                וכל טיול בארץ נגמר אצלי בברכיים על האדמה מול פרח שצריך לבדוק
                מה שמו.
              </p>
              <p style={{ marginBottom: 16 }}>
                {SITE_NAME} נולד בדיוק מהחיבור הזה. חיפשתי מגדיר צמחים רציני
                בעברית — כזה שמזהה במהירות, מדבר בשמות העבריים הנכונים, ונותן
                הנחיות טיפול אמיתיות — ולא מצאתי. אז בניתי אותו: אפליקציה
                שמשלבת את מודלי הבינה המלאכותית המתקדמים בעולם עם אהבה אמיתית
                לצומח הארץ-ישראלי, ועם ממשק עברי מלא שנבנה מימין לשמאל מהיום
                הראשון.
              </p>
              <p style={{ marginBottom: 16 }}>
                כל פרט באפליקציה עבר דרך הידיים שלי — מהדיוק הבוטני של
                התוצאות, דרך אזהרות הרעילות לילדים ולחיות מחמד, ועד "הגינה
                שלי" ששומרת כל צמח שזיהיתם. אני משתמש באפליקציה בעצמי, כל
                שבוע, על הצמחים שלי ובטיולים — וכל משוב ממשתמשים מגיע ישירות
                אליי.
              </p>
              <div className="badge-row">
                <span className="badge">שנים רבות של ניסיון בפיתוח</span>
                <span className="badge">יוצר אפליקציות iOS</span>
                <span className="badge">מגדל וחוקר צמחים</span>
                <span className="badge">פותח ומתוחזק בישראל</span>
              </div>
            </div>
            <div>
              <Image
                className="portrait"
                src={AUTHOR_IMAGE}
                alt={`${AUTHOR_NAME} — מפתח התוכנה שיצר את ${SITE_NAME}`}
                width={640}
                height={640}
                priority
                style={{ maxWidth: 380 }}
              />
              <SocialLinks />
              <Image
                src="/images/about-workspace.webp"
                alt="שולחן העבודה של דור פורת — קוד ומחשב לצד עציצים וספרי הגדרת צמחים"
                width={1280}
                height={714}
                style={{ marginTop: 24 }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">הגישה שלי</span>
            <h2>מה מנחה את הפיתוח של מגדיר צמחים פלוס</h2>
          </div>
          <div className="cards">
            <div className="card">
              <h3>עברית תחילה</h3>
              <p>
                לא תרגום של אפליקציה זרה: כל מסך, כל תוצאה וכל טיפ נכתבו
                בעברית, עם השמות העבריים המקובלים של הצמחים לצד השם המדעי.
              </p>
            </div>
            <div className="card">
              <h3>דיוק לפני הכול</h3>
              <p>
                זיהוי צמחים הוא גם עניין של בטיחות. לכן האפליקציה נשענת על
                מודלי הבינה המלאכותית החזקים ביותר, ומציגה תמיד גם את השם
                המדעי — כדי שתוכלו לאמת ולהעמיק בכל מקור.
              </p>
            </div>
            <div className="card">
              <h3>פרטיות ופשטות</h3>
              <p>
                בלי הרשמה, בלי חשבון ובלי איסוף מידע מיותר: התמונה משמשת
                לזיהוי, והגינה האישית שלכם נשמרת על המכשיר שלכם בלבד.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">יצירת קשר</span>
            <h2>שאלה? רעיון? מצאתם זיהוי לא מדויק?</h2>
            <p>
              אשמח לשמוע. אפשר לפנות אליי דרך{" "}
              <a href={LEGAL.support}>עמוד התמיכה</a>, וכל פנייה מגיעה ישירות
              אליי. מוזמנים גם לעיין ב
              <a href={LEGAL.privacy}>מדיניות הפרטיות</a> וב
              <a href={LEGAL.terms}>תנאי השימוש</a>.
            </p>
          </div>
          <div className="cta-band">
            <h2>רוצים לראות מה בניתי?</h2>
            <p>
              הורידו את {SITE_NAME} חינם — 3 הזיהויים הראשונים עליי.
            </p>
            <div className="hero-ctas">
              <AppStoreButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
