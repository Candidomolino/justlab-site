---
name: SANDY
title: Hanging-bag photobioreactor, 1–2 L
summary: The smallest and easiest to reproduce of the three reactors — a disposable HDPE bag on a printed ring, run clean but not axenic.
group: reactor
stage: operating
scale: 1–2 L working volume
order: 1
hero: sandy-01-montagem.jpg
license: CERN-OHL-S-2.0 (hardware) · CC-BY-4.0 (documentation and data)
files: Design note v2 is written (Markdown/DOCX/PDF), with the Bag_PBRv2 CAD (Fusion 360 / STEP) and the LED clip. It is not yet public and has no DOI.
specs:
  - { label: Vessel, value: "Disposable HDPE bag · 1–2 L working volume" }
  - { label: Top plate, value: "3D-printed · 220 × 220 × 45 mm · Ø95 mm inner clamping ring" }
  - { label: Legs, value: "Ø30 mm PVC tube · axes at 175 mm" }
  - { label: Lighting, value: "4 SMD 4014 bars, 24 V, 14 W, 500 mm, cool white — the same bar as the other two reactors" }
  - { label: Mixing, value: "Silicone-tube sparger" }
  - { label: Asepsis, value: "Clean, not axenic — brewery-style sanitation, documented" }
images:
  - file: sandy-01-montagem.jpg
    credit: photo
    alt: Brown PVC legs with a white top plate and a plastic bag hanging below it
    caption: The assembled reactor. The bag hangs from the green ring in the top plate; the silicone tube running to the bottom is the sparger. The white sensor on the leg logs temperature and humidity.
  - file: sandy-02-montagem-cotas.svg
    alt: Technical drawing of the reactor in front view and plan view, dimensioned in millimetres
    caption: "Front view and plan of the top plate. Dimensions in millimetres from the Bag_PBRv2 CAD model; L_LED and H_total are shown by symbol because they still require measurement. Redrawn to show the current 24 V SMD 4014 LED bars."
---

SANDY is the smallest of the three reactors and the simplest to reproduce: a
**disposable HDPE bag** hanging from a ring in a 3D-printed top plate, standing on
four PVC pipe legs. No glass vessel, no expensive part — the container is
disposable and what is reused is the structure.

Four rigid LED bars on clips attached to the legs light the central axis. Mixing is
by a silicone-tube sparger at the bottom of the bag.

This is the reactor where the group gave up sterility on purpose. Operation is
**clean but not axenic**, with brewery-style sanitation. That is a stated design
decision, not an oversight, and it is what makes SANDY the candidate to leave the
bench.

## What hasn't been measured yet

The dimensions marked by symbol in the drawing — `L_LED` and `H_total` — still
depend on measurement.

<!-- TODO(figure): sandy-03-eletrico.png (electrical schematic, Portuguese) still shows the OLD 12 V supply and 12 V bars. Hold until redrawn for the 24 V SMD 4014 bar and Light_control. -->
<!-- NOTE(figure): sandy-02 was redrawn as an English SVG with the 24 V SMD 4014 bar label. Re-export from the CAD/script when convenient so the outlines are CAD-derived. -->
<!-- TODO(authorship): author list/order and funder pending. SANDY files live outside the HARDWARE folder (shared folder "IC - BARBARA"). -->
