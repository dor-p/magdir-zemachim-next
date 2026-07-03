import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStoreButton from "@/components/AppStoreButton";
import JsonLd from "@/components/JsonLd";
import {
  APP_STORE_URL,
  AUTHOR_NAME,
  AUTHOR_NAME_EN,
  AUTHOR_LINKS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faq = [
  {
    q: "מה זה מגדיר צמחים?",
    a: "מגדיר צמחים הוא כלי לזיהוי צמחים לפי המאפיינים שלהם. פעם זה היה ספר עב כרס עם מפתחות הגדרה; היום מגדיר צמחים דיגיטלי כמו מגדיר צמחים פלוס מזהה את הצמח מתמונה אחת בעזרת בינה מלאכותית, ומחזיר את שם הצמח בעברית יחד עם כל המידע החשוב לטיפול בו.",
  },
  {
    q: "איך מגדיר צמחים פלוס מזהה את הצמח?",
    a: "מצלמים את הצמח (או בוחרים תמונה מהגלריה), והאפליקציה מנתחת את התמונה באמצעות מודל בינה מלאכותית מתקדם. תוך שניות מתקבל זיהוי הכולל שם עברי, שם מדעי, משפחה בוטנית, תיאור, הנחיות השקיה ואור, מידע על רעילות וטיפים לטיפול.",
  },
  {
    q: "האם האפליקציה חינמית?",
    a: "ההורדה חינם, ו-3 הזיהויים הראשונים ניתנים ללא תשלום. לאחר מכן מנוי חודשי בעלות 10 ש\"ח לחודש פותח זיהויים ללא הגבלה ואת כל פרטי הטיפול בכל צמח. את המנוי אפשר לבטל בכל עת דרך הגדרות ה-Apple ID.",
  },
  {
    q: "אילו צמחים אפשר לזהות?",
    a: "האפליקציה מזהה צמחי בית (מונסטרה, סנסיווריה, פוטוס, סוקולנטים ועוד), צמחי גינה ונוי, עצים, פרחים וגם צמחי בר ארץ-ישראליים כמו כלנית, רקפת וחצב. אפשר לזהות צמח מכל מקום בעולם.",
  },
  {
    q: "האם אפשר לדעת אם צמח רעיל?",
    a: "כן. כל תוצאת זיהוי כוללת מידע על רעילות לבני אדם ולחיות מחמד — חשוב במיוחד להורים לילדים קטנים ולבעלי כלבים וחתולים.",
  },
  {
    q: "על אילו מכשירים האפליקציה עובדת?",
    a: "מגדיר צמחים פלוס זמינה לאייפון עם iOS 17 ומעלה, להורדה מה-App Store. האפליקציה כולה בעברית, מימין לשמאל.",
  },
];

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SITE_NAME,
  alternateName: "מגדיר צמחים",
  description:
    "מגדיר צמחים בעברית לאייפון: מצלמים כל צמח ומזהים אותו בשניות — שם עברי ומדעי, הנחיות השקיה ואור, רעילות וטיפים לטיפול.",
  operatingSystem: "iOS 17.0 ומעלה",
  applicationCategory: "LifestyleApplication",
  inLanguage: "he",
  url: SITE_URL,
  installUrl: APP_STORE_URL,
  screenshot: [
    `${SITE_URL}/images/marketing-home.webp`,
    `${SITE_URL}/images/marketing-result.webp`,
    `${SITE_URL}/images/marketing-garden.webp`,
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "ILS",
    description: "הורדה חינם עם 3 זיהויים ללא תשלום; מנוי פרימיום 10 ש\"ח לחודש",
  },
  author: {
    "@type": "Person",
    name: AUTHOR_NAME,
    alternateName: AUTHOR_NAME_EN,
    url: `${SITE_URL}/about`,
    sameAs: AUTHOR_LINKS,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function FeatureIcon({ path }: { path: string }) {
  return (
    <span className="icon" aria-hidden="true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={path} />
      </svg>
    </span>
  );
}

const features = [
  {
    icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5v5l3 3",
    title: "זיהוי צמחים בשניות",
    text: "מצלמים תמונה אחת ומקבלים זיהוי מיידי: שם עברי, שם מדעי ומשפחה בוטנית — בלי לדפדף במגדירים עבי כרס.",
  },
  {
    icon: "M12 3c-4 4-7 7.5-7 11a7 7 0 0 0 14 0c0-3.5-3-7-7-11z",
    title: "הנחיות השקיה מדויקות",
    text: "לכל צמח מוצג בדיוק כמה מים הוא צריך ובאיזו תדירות, כדי שלא תטביעו את הסוקולנט ולא תייבשו את הפוטוס.",
  },
  {
    icon: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",
    title: "דרישות אור לכל צמח",
    text: "שמש מלאה, אור מסונן או צל — האפליקציה מסבירה איפה למקם כל צמח בבית או בגינה כדי שישגשג.",
  },
  {
    icon: "M12 3 2 21h20L12 3zm0 6v5m0 3v.5",
    title: "התראת רעילות",
    text: "מידע ברור על רעילות לבני אדם ולחיות מחמד בכל תוצאת זיהוי — שקט נפשי להורים ולבעלי כלבים וחתולים.",
  },
  {
    icon: "M4 20s2-9 8-9 8 9 8 9M12 11V4m0 0-3 3m3-3 3 3",
    title: "הגינה שלי",
    text: "כל צמח שזיהיתם נשמר אוטומטית לגינה אישית באפליקציה, כך שהמידע המלא זמין לכם תמיד, גם בלי לזהות מחדש.",
  },
  {
    icon: "M5 8h14M5 8a2 2 0 1 0 0-4h14a2 2 0 1 1 0 4M5 8v12h14V8",
    title: "עברית מלאה, מימין לשמאל",
    text: "מגדיר הצמחים היחיד שנבנה עברית-תחילה: כל התוצאות, ההנחיות והממשק בעברית טבעית — לא תרגום מכונה.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={appJsonLd} />
      <JsonLd data={faqJsonLd} />

      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">{SITE_NAME} לאייפון</span>
            <h1>
              מגדיר צמחים בעברית —
              <br />
              מצלמים צמח ויודעים הכול
            </h1>
            <p className="lead">
              נתקלתם בצמח ואין לכם מושג מה הוא? מגדיר צמחים פלוס מזהה כל צמח
              מתמונה אחת: שם עברי ומדעי, הנחיות השקיה ואור, רעילות וטיפים
              לטיפול — הכול בעברית, תוך שניות.
            </p>
            <div className="hero-ctas">
              <AppStoreButton />
              <a className="btn-secondary" href="#how">
                איך זה עובד?
              </a>
            </div>
            <p className="hero-note">
              הורדה חינם · 3 זיהויים ראשונים ללא תשלום · iOS 17 ומעלה
            </p>
          </div>
          <div className="hero-phone">
            <Image
              src="/images/marketing-home.webp"
              alt="מסך הבית של אפליקציית מגדיר צמחים פלוס — זיהוי כל צמח בשנייה"
              width={720}
              height={1558}
              priority
            />
          </div>
        </div>
      </section>

      <section className="section" id="video">
        <div className="container video-wrap">
          <div className="video-frame">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/images/marketing-home.webp"
              aria-label="סרטון הדגמה של אפליקציית מגדיר צמחים פלוס"
            >
              <source
                src="/video/magdir-tzmachim-demo.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">ההדגמה</span>
            <h2>מגדיר הצמחים בפעולה</h2>
            <p>
              כך נראה זיהוי צמח אמיתי באפליקציה: מצלמים, מקבלים את שם הצמח
              והמידע המלא עליו, והצמח נשמר אוטומטית לגינה האישית שלכם. בלי
              הרשמה ובלי טפסים — פותחים ומצלמים.
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" id="how">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">שלושה צעדים</span>
            <h2>איך עובד מגדיר צמחים פלוס?</h2>
            <p>
              תהליך הזיהוי פשוט במכוון: בלי חשבונות, בלי הגדרות — מהצילום ועד
              התשובה עוברות שניות בודדות.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <Image
                src="/images/screen-home.webp"
                alt="שלב ראשון במגדיר הצמחים — צילום הצמח או בחירת תמונה מהגלריה"
                width={640}
                height={1384}
              />
              <span className="num">1</span>
              <h3>מצלמים את הצמח</h3>
              <p>
                מכוונים את המצלמה לעלים או לפרח, או בוחרים תמונה קיימת
                מהגלריה.
              </p>
            </div>
            <div className="step">
              <Image
                src="/images/screen-result.webp"
                alt="שלב שני — תוצאת זיהוי הצמח עם שם עברי, שם מדעי ומידע מלא"
                width={640}
                height={1384}
              />
              <span className="num">2</span>
              <h3>מקבלים זיהוי מלא</h3>
              <p>
                שם עברי ומדעי, משפחה, תיאור, השקיה, אור, רעילות וטיפים — הכול
                בעברית.
              </p>
            </div>
            <div className="step">
              <Image
                src="/images/screen-garden.webp"
                alt="שלב שלישי — הצמח נשמר בגינה האישית שלכם באפליקציית מגדיר צמחים פלוס"
                width={640}
                height={1384}
              />
              <span className="num">3</span>
              <h3>שומרים בגינה שלי</h3>
              <p>
                כל זיהוי נשמר אוטומטית, כך שתמיד תדעו מה גדל אצלכם בבית ואיך
                לטפל בו.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">היכולות</span>
            <h2>כל מה שמגדיר צמחים טוב צריך לדעת</h2>
            <p>
              לא רק שם הצמח — מגדיר צמחים פלוס נותן לכם את כל המידע שצריך כדי
              שהצמח גם יישאר בחיים.
            </p>
          </div>
          <div className="cards">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <FeatureIcon path={f.icon} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" id="guide-teaser">
        <div className="container video-wrap">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">מתעמקים</span>
            <h2>המדריך המלא למגדיר צמחים</h2>
            <p>
              רוצים להבין איך זיהוי צמחים באמת עובד? כתבנו מדריך מקיף: ההבדל
              בין מגדיר צמחים מסורתי לאפליקציה, אילו צמחים אפשר לזהות בישראל,
              ואיך לצלם נכון כדי לקבל זיהוי מדויק.
            </p>
            <div className="hero-ctas">
              <Link className="btn-secondary" href="/guide">
                לקריאת המדריך המלא
              </Link>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <Link href="/guide">
              <Image
                src="/images/guide-hero.webp"
                alt="שדה כלניות בדרום הארץ — צמחי בר שמגדיר צמחים פלוס מזהה"
                width={1280}
                height={714}
                style={{ borderRadius: 16, boxShadow: "var(--shadow)" }}
              />
            </Link>
          </figure>
        </div>
      </section>

      <section className="section" id="about-teaser">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">מי מאחורי האפליקציה</span>
            <h2>נבנה על ידי מפתח שבאמת אוהב צמחים</h2>
            <p>
              מגדיר צמחים פלוס פותח בישראל על ידי {AUTHOR_NAME} — מפתח תוכנה
              עם שנים רבות של ניסיון, שמגדל, מזהה וחוקר צמחים כתחביב מושרש.
              האפליקציה נולדה מצורך אמיתי: מגדיר צמחים רציני, בעברית, שנעים
              להשתמש בו.{" "}
              <Link href="/about">להכיר את הסיפור המלא</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="faq" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">שאלות נפוצות</span>
            <h2>שאלות ותשובות על מגדיר צמחים</h2>
          </div>
          <div className="faq">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <h2>הצמח הבא שתפגשו כבר לא יהיה זר</h2>
            <p>
              הורידו את מגדיר צמחים פלוס חינם ונסו 3 זיהויים ללא תשלום — שם,
              השקיה, אור ורעילות לכל צמח, בעברית.
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
