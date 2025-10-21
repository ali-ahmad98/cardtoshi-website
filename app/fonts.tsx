import localFont from "next/font/local";
import { Ubuntu, IBM_Plex_Mono } from "next/font/google";

// 🪄 Eudoxus Sans (Local)
const eudoxusSans = localFont({
  src: [
    {
      path: "../public/fonts/eudoxus-sans/EudoxusSans-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    { path: "../public/fonts/eudoxus-sans/EudoxusSans-Light.ttf", weight: "300", style: "normal" },
    {
      path: "../public/fonts/eudoxus-sans/EudoxusSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "../public/fonts/eudoxus-sans/EudoxusSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/eudoxus-sans/EudoxusSans-Bold.ttf", weight: "700", style: "normal" },
    {
      path: "../public/fonts/eudoxus-sans/EudoxusSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-eudoxus",
  display: "swap",
});

// 🪄 Gordita (Local)
const gorditaSans = localFont({
  src: [
    { path: "../public/fonts/gordita/Gordita-Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/gordita/Gordita-Light Italic.otf", weight: "300", style: "italic" },
    { path: "../public/fonts/gordita/Gordita-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/gordita/Gordita-Regular Italic.otf", weight: "400", style: "italic" },
    { path: "../public/fonts/gordita/Gordita-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/gordita/Gordita-Medium Italic.otf", weight: "500", style: "italic" },
    { path: "../public/fonts/gordita/Gordita-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/gordita/Gordita-Bold Italic.otf", weight: "700", style: "italic" },
    { path: "../public/fonts/gordita/Gordita-Black.otf", weight: "900", style: "normal" },
    { path: "../public/fonts/gordita/Gordita-Black Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-gordita",
  display: "swap",
});

// 🪄 Ubuntu (Google)
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

// 🪄 IBM Plex Mono (Google)
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm",
  display: "swap",
});

export { eudoxusSans, gorditaSans, ubuntu, ibmPlexMono };
