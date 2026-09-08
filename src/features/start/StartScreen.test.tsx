import { screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderApp } from "@/test/renderApp";

describe("StartScreen", () => {
  beforeEach(() => {
    vi.setSystemTime(new Date(2026, 8, 7, 12, 0));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows the countdown with date and location", async () => {
    renderApp();

    expect(await screen.findByText("Noch 376 Tage bis zum Contest")).toBeInTheDocument();
    expect(screen.getByText("18. September 2027 · Braunschweig")).toBeInTheDocument();
  });

  it("shows one card per section, linking to its screen", async () => {
    renderApp();

    const cards = within(await screen.findByRole("region", { name: "Bereiche" }));
    expect(cards.getByRole("heading", { name: "Heute" })).toBeInTheDocument();
    expect(cards.getByRole("heading", { name: "Hydration" })).toBeInTheDocument();
    expect(cards.getByRole("heading", { name: "Etikett scannen" })).toBeInTheDocument();

    expect(cards.getByRole("link", { name: /Heute/ })).toHaveAttribute("href", "/today");
    expect(cards.getByRole("link", { name: /Hydration/ })).toHaveAttribute("href", "/hydration");
    expect(cards.getByRole("link", { name: /Etikett scannen/ })).toHaveAttribute("href", "/scan");
  });

  it("marks the section cards for interaction telemetry", async () => {
    renderApp();

    const cards = within(await screen.findByRole("region", { name: "Bereiche" }));
    expect(cards.getByRole("link", { name: /Heute/ })).toHaveAttribute("data-track", "start.today");
    expect(cards.getByRole("link", { name: /Hydration/ })).toHaveAttribute(
      "data-track",
      "start.hydration",
    );
    expect(cards.getByRole("link", { name: /Etikett scannen/ })).toHaveAttribute(
      "data-track",
      "start.scan",
    );
  });
});
