import { createFileRoute } from "@tanstack/react-router";
import { getSection } from "@/app.sections";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const Route = createFileRoute("/scan")({
  component: () => <PlaceholderScreen section={getSection("/scan")} />,
});
