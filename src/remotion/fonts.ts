import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

let cachedSans: string | null = null;
let cachedMono: string | null = null;

export const getSansFont = (): string => {
  if (!cachedSans) {
    try {
      cachedSans = loadInter("normal", {
        weights: ["400", "500", "600", "700"],
        subsets: ["latin"],
      }).fontFamily;
    } catch {
      cachedSans = "sans-serif";
    }
  }
  return cachedSans;
};

export const getMonoFont = (): string => {
  if (!cachedMono) {
    try {
      cachedMono = loadJetBrainsMono("normal", {
        weights: ["400", "500", "600", "700"],
        subsets: ["latin"],
      }).fontFamily;
    } catch {
      cachedMono = "monospace";
    }
  }
  return cachedMono;
};
