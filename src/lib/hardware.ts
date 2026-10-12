import type { ImageMetadata } from "astro";

const files = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/hardware/*.{jpg,jpeg,png,svg}",
  { eager: true },
);

export function hwImage(name?: string | null): ImageMetadata | undefined {
  if (!name) return undefined;
  return files[`/src/assets/hardware/${name}`]?.default;
}

export const stageLabel: Record<string, string> = {
  "in-use": "In use, with results",
  operating: "Built and operating",
  bench: "Firmware ready, bench-validated",
  "design-closed": "Design closed, awaiting assembly",
  preliminary: "Preliminary — flask only",
  future: "Future project",
};

export const groups = [
  {
    id: "reactor",
    title: "Photobioreactors, from 2 L to 20 L",
    lead: "Three reactors at three scales, sharing one light controller and one LED bar.",
  },
  {
    id: "control",
    title: "Control and measurement",
    lead: "The layer that sets the light and reads the culture without opening the reactor.",
  },
  {
    id: "instrument",
    title: "Benchtop instrument",
    lead: "A stand-alone tool already used in routine lab work.",
  },
] as const;
