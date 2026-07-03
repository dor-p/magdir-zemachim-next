import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "מגדיר צמחים",
    description:
      "מגדיר צמחים בעברית: מצלמים כל צמח ומזהים אותו בשניות, כולל הנחיות השקיה, אור ורעילות.",
    lang: "he",
    dir: "rtl",
    start_url: "/",
    display: "browser",
    background_color: "#fafcfa",
    theme_color: "#16382a",
    icons: [
      {
        src: "/images/app-icon-256.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  };
}
