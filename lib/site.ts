// Single source of truth for site-wide constants.
// The canonical host is the punycode form of מגדירצמחים.ישראל.
export const SITE_URL = "https://xn--6dbcmhbybd5eta.xn--4dbrk0ce";
export const SITE_DOMAIN_DISPLAY = "מגדירצמחים.ישראל";
export const SITE_NAME = "מגדיר צמחים פלוס";
export const KEYWORD = "מגדיר צמחים";

export const APP_STORE_ID = "6785250764";
export const APP_STORE_URL = `https://apps.apple.com/il/app/id${APP_STORE_ID}`;

export const AUTHOR_NAME = "דור פורת";
export const AUTHOR_NAME_EN = "Dor Porat";
export const AUTHOR_IMAGE = "/images/dor-porat.webp";

export const SOCIAL = [
  { name: "האתר האישי", url: "https://dorporat.com", icon: "globe" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dorp/", icon: "linkedin" },
  { name: "X (טוויטר)", url: "https://x.com/PoratDor", icon: "x" },
  { name: "YouTube", url: "https://www.youtube.com/@dorporat", icon: "youtube" },
] as const;

export const AUTHOR_LINKS = [
  ...SOCIAL.map((s) => s.url),
  "https://apps.porat.dev",
];

export const LEGAL = {
  privacy: "https://apps.porat.dev/magdir-tzmachim/privacy",
  terms: "https://apps.porat.dev/magdir-tzmachim/terms",
  support: "https://apps.porat.dev/magdir-tzmachim/support",
};
