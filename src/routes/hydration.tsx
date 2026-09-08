import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/app.sections";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const Route = createFileRoute("/hydration")({
  component: () => <PlaceholderScreen section={getSection("/hydration")} />,
});
