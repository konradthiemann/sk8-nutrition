/**
 * Central per-app configuration. This file (plus the accent block in
 * index.css) is what distinguishes the three SK8 apps from each other.
 */
export const appConfig = {
  /** Identifier sent with every telemetry batch. */
  id: "nutrition",
  name: "SK8 Ernährung",
  shortName: "Ernährung",
  description: "Ernährung, Hydration und Etiketten-Scan auf dem Weg zum Contest.",
  themeColor: "#b45309",
  backgroundColor: "#141210",
} as const;

export type AppId = typeof appConfig.id;
