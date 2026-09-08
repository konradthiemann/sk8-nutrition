import { Droplets, House, type LucideIcon, ScanLine, Utensils } from "lucide-react";
import type { FileRouteTypes } from "@/routeTree.gen";

export interface AppSection {
  to: FileRouteTypes["to"];
  /** Short label for the bottom navigation. */
  label: string;
  /** Screen title (heading, start-screen card). */
  title: string;
  description: string;
  icon: LucideIcon;
  /** data-track value of the start-screen card. */
  track: string;
}

/** The app's feature areas – shown as cards on the start screen. */
export const sections: readonly AppSection[] = [
  {
    to: "/today",
    label: "Heute",
    title: "Heute",
    description:
      "Mahlzeiten und Makros von heute auf einen Blick – schnell loggen, ehrlich bleiben.",
    icon: Utensils,
    track: "start.today",
  },
  {
    to: "/hydration",
    label: "Hydration",
    title: "Hydration",
    description: "Wie viel hast du heute getrunken? Ziel im Blick, Glas für Glas.",
    icon: Droplets,
    track: "start.hydration",
  },
  {
    to: "/scan",
    label: "Scannen",
    title: "Etikett scannen",
    description: "Nährwerttabelle abfotografieren und direkt als Mahlzeit übernehmen.",
    icon: ScanLine,
    track: "start.scan",
  },
];

/** Bottom navigation: start plus all sections. */
export const navItems: readonly Pick<AppSection, "to" | "label" | "icon">[] = [
  { to: "/", label: "Start", icon: House },
  ...sections,
];

export function getSection(to: AppSection["to"]): AppSection {
  const section = sections.find((entry) => entry.to === to);
  if (section === undefined) {
    throw new Error(`Unknown section: ${to}`);
  }
  return section;
}
