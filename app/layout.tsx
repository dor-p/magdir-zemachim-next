import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import {
  APP_STORE_ID,
  AUTHOR_NAME,
  AUTHOR_NAME_EN,
  AUTHOR_LINKS,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `מגדיר צמחים — זיהוי צמחים מתמונה בעברית | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "מגדיר צמחים בעברית לאייפון: מצלמים כל צמח ומזהים אותו בשניות — שם עברי ומדעי, הנחיות השקיה ואור, רעילות וטיפים לטיפול. הורדה חינם, 3 זיהויים ראשונים ללא תשלום.",
  applicationName: SITE_NAME,
  authors: [{ name: AUTHOR_NAME, url: `${SITE_URL}/about` }],
  creator: AUTHOR_NAME,
  keywords: [
    "מגדיר צמחים",
    "זיהוי צמחים",
    "זיהוי צמחים מתמונה",
    "מגדיר צמחים בעברית",
    "אפליקציית זיהוי צמחים",
    "צמחי בית",
    "צמחי בר בישראל",
  ],
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "/",
    siteName: SITE_NAME,
    title: `מגדיר צמחים — זיהוי צמחים מתמונה בעברית | ${SITE_NAME}`,
    description:
      "מצלמים כל צמח ומזהים אותו בשניות: שם עברי ומדעי, השקיה, אור ורעילות — הכול בעברית.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "מגדיר צמחים פלוס — זיהוי צמחים מתמונה בעברית",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `מגדיר צמחים — זיהוי צמחים מתמונה בעברית | ${SITE_NAME}`,
    description:
      "מצלמים כל צמח ומזהים אותו בשניות: שם עברי ומדעי, השקיה, אור ורעילות — הכול בעברית.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  itunes: {
    appId: APP_STORE_ID,
  },
};

export const viewport: Viewport = {
  themeColor: "#16382a",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: ["מגדיר צמחים", "מגדירצמחים.ישראל"],
  url: SITE_URL,
  inLanguage: "he",
  publisher: {
    "@type": "Person",
    name: AUTHOR_NAME,
    alternateName: AUTHOR_NAME_EN,
    url: `${SITE_URL}/about`,
    sameAs: AUTHOR_LINKS,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body>
        <JsonLd data={websiteJsonLd} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
