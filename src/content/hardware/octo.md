---
name: OCTO
title: 20 L bubble-column photobioreactor
summary: A nominal 20 L glass carboy inside an octagonal printed cage, lit from eight directions and mixed by air alone.
group: reactor
stage: operating
scale: Nominal 20 L
cost:
order: 3
hero: octo-01-sistema-aceso.jpg
license: CERN-OHL-S-2.0 (hardware) · CC-BY-4.0 (documentation and data)
files: A v0.1 release is in draft (two-page design note, SVG/PNG figures, CAD geometry audit, original CAD, E0–E5 test plan, scripts, licences). It is not yet public and has no DOI.
specs:
  - { label: Vessel, value: "Glass carboy, nominal 20 L · intended working volume 20 L (not yet verified)" }
  - { label: Structure, value: "Octagonal · PLA segments (Bambu Lab A1) + PVC tubes, nominal 25 mm" }
  - { label: Segment (CAD), value: "Ø25.4 bore · Ø40 outside · envelope 174.017 × 63.120 × 45 mm" }
  - { label: Lighting, value: "8 SMD 4014 bars, 24 V, cool white, 500 mm — rated 14 W each, 112 W total" }
  - { label: Mixing, value: "Bubble column · air pump rated up to 80 L/min (pump capacity, not measured flow)" }
  - { label: Lid, value: "Moulded blue silicone (Redelease kit) · 2 gas ports" }
  - { label: Control, value: "Manual — will receive the Light_control node" }
  - { label: Organism, value: "Chlamydomonas reinhardtii · 5–7 d, some 15 d · continuous light, no temperature control" }
images:
  - file: octo-01-sistema-aceso.jpg
    credit: photo
    alt: Octagonal photobioreactor with a glass carboy lit by eight glowing LED bars
    caption: All eight bars on. Light enters from eight directions — the reason for the octagonal cage.
  - file: octo-02-bancada.jpg
    credit: photo
    alt: Complete photobioreactor assembly on a white bench with a power supply and an air pump
    caption: The full system, switched off — octagonal cage with a yellow printed base, blue silicone lid, an air filter on the outlet; the 24 V supply and dimmer on the left, the air pump on the right.
  - file: octo-03-tampa-silicone.jpg
    credit: photo
    alt: Blue cylindrical silicone lid with two holes on a bench next to a ruler
    caption: The moulded silicone lid with its two gas ports. The surface defects appeared on demoulding.
  - file: octo-04-montagem.png
    alt: Schematic elevation and plan of the reactor showing eight tubes and eight LED bars
    caption: Elevation and plan. Schematic figure, not to scale — do not use the proportions for fabrication.
  - file: octo-05-eletrica-gas.png
    alt: Block diagram of the electrical circuit and the air path through the reactor
    caption: Electrical circuit and gas circuit.
---

OCTO is a glass carboy of nominal 20 L inside an octagonal cage of 3D-printed PLA
segments and PVC tubes, with **eight LED bars** around it and a cast silicone lid.
Air enters at the bottom and the bubble column does the mixing — no stirrer and
nothing inside the liquid except the diffuser.

The octagonal geometry is not decoration: it puts light in from eight directions
instead of lighting one side and leaving the far side of the culture in the dark.
The segmented frame lets a broken piece be replaced without reprinting the cage.

The lid is moulded blue silicone with **two gas ports**, and that is the known
limitation of this version. There is no liquid port and no sampling port, so
sampling means opening it. Programmable intensity does not exist yet either;
switching is manual. Both are why OCTO is next in line for the Light_control
node.

The intended cultures are *Chlamydomonas reinhardtii* for 5–7 days, some for 15,
under continuous light with no temperature control.

## What hasn't been measured yet

Almost all of the characterization. Working volume and headspace have not been
verified — the 20 L is a target, not a measurement. Air flow in the circuit has not
been measured (the 80 L/min is the pump's rated capacity). Light uniformity around
the carboy has not been mapped, and **PPFD must be reported in µmol photons m⁻² s⁻¹
(400–700 nm)**, not in lux, which weights for human vision and does not apply here.

There is also a power item: eight bars add up to a rated 112 W, above the 100 W
supply used on SANDY. And a CAD item: the STL mesh has a nearly degenerate face
that must be reviewed before fabrication is released.

The autoclavability of the silicone is reported from the supplier and from use,
without a datasheet or documented cycle — **and that does not extend to the PLA or
to the full assembly.**

<!-- TODO(future): "montagem" — OCTO assembly gallery/video. Source has 161 files incl. four assembly videos (OCTO/img/). -->
<!-- TODO(authorship): author list/order and funder pending. -->
