---
name: BULBO
title: Reactor-agnostic monitoring module
summary: A closed-loop module beside the reactor that watches what a microalgal culture is doing — pH, temperature, conductivity, density — without ever opening it.
group: control
areas: [bioprocess]
stage: future
scale: From a 100 mL flask to a 100 L bag
cost: Target about R$ 2,000 (instead of tens of thousands)
order: 6
hero: bulbo-01-airlock-seringa.jpg
authors: João Vitor Dutra Molino — DEBIQ, EEL-USP
license: Open licence (to be set with the first release)
files: Decision log, build plan, bill of materials, a 23 KB design description, illustrations, lid-mould plan, pinout and firmware are in the group's repository. Nothing is fabricated and nothing is public.
specs:
  - { label: Architecture, value: "Closed loop beside the reactor — it does not culture, it only observes" }
  - { label: Chamber, value: "140 mL · pH, temperature, conductivity, stirrer · bubble trap" }
  - { label: Optical cell, value: "5–6 mm path · 730 and 850 nm · TSL2591 with reference channel" }
  - { label: Microscopy, value: "Flow microscope on a secondary branch (phase 2) · ~4×, 4–5 µm resolution" }
  - { label: Logging, value: "ESP32 · SD card + database" }
  - { label: Range, value: "100 mL flask to 100 L bag — the same module" }
  - { label: Target cost, value: "About R$ 2,000" }
images:
  - file: bulbo-01-airlock-seringa.jpg
    credit: photo
    alt: A graduated 50 mL plastic syringe connected to silicone tubing and a filter on a bench
    caption: Prototype bubble trap made from a 50 mL syringe, silicone tubing and a syringe filter. The final chamber replaces this part.
  - file: bulbo-02-esquema-eletronico.svg
    alt: Electronic diagram of the monitoring module
    caption: Electronic schematic of the node.
---

BULBO is the most ambitious of the seven projects and the only one with no finished
part yet. It measures **what a microalgal culture is doing, continuously, without
opening it.**

It is a sterile chamber in a closed loop beside the photobioreactor. Culture is
drawn from the reactor, passes through the chamber and an optical cell, and returns.
The chamber carries pH, temperature and conductivity probes and doubles as a bubble
trap; the optical cell reads cell density by transmission at **two near-infrared
wavelengths**. An ESP32 logs everything to a card and a database, and a flow
microscope on a secondary branch photographs the cells.

The decision that defines the project is that **BULBO does not culture anything.**
No grow light, no aeration. The culture lives in the reactor; BULBO only looks. That
is what lets the same module serve a 100 mL flask and a 100 L bag — three orders of
magnitude — and why it can be developed on the bench and then taken out unchanged.

The argument is not the sensors, which are all common. It is that the set costs
around **R$ 2,000 instead of tens of thousands**, and comes with schematics,
firmware, CAD, calibration data and documented failure modes under an open licence.

BULBO is the instrumentation layer of project RAIO, which proposes sixteen
instrumented 100 L bags for decentralized production of microalgal biostimulants. It
is being built first on the bench, because replicating an unvalidated design sixteen
times is an expensive mistake.

**It inherits three predecessors, and what is most useful is their failures.** A
benchtop photobioreactor (Marchesan, UFABC, 2023) showed that an RGB colour sensor
does *not* measure biomass — the green channel tracks chlorophyll, not OD750, and
pigment content per cell varies with light history. Hence infrared with a reference
channel and a dark reading. The same work left an unexplained **0.5 pH-unit offset**
against the benchtop meter; RAIO's criterion is ±0.1, and closing that gap is
BULBO's hardest requirement. And a low-cost turbidostat (UC San Diego, 2022) proved
the data path works end to end — and showed exactly where a working prototype falls
short of an instrument.

## Known limitations

Two come from the published specification of the flow microscope adopted. At
4–5 µm resolution, *Chlamydomonas* (~10 µm) is imaged well, but ***Chlorella*, at
3–5 µm, is at the limit** and registers as a dot, without morphology. And the
source publication documents pump and flow rate but not exposure time — which, by
the arithmetic, means the module has to photograph *stationary* fluid between
advances, not moving fluid.

The third is pH: the ±0.1 criterion has not yet been demonstrated, and the direct
predecessor stopped at ±0.5 with the cause unidentified.

<!-- TODO(license): confirm licence before first release (other projects: CERN-OHL-S-2.0 / CC-BY-4.0). -->
