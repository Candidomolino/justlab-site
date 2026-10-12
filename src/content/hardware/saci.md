---
name: SACI
title: Open Printed Centrifugation System
summary: A 3D-printed benchtop microcentrifuge for six microtubes — R$ 77 in materials against R$ 5,500 for the commercial reference unit.
group: instrument
stage: in-use
scale: Benchtop · six 1.5–2.0 mL tubes
cost: "R$ 77 in materials (commercial reference: R$ 5,500)"
order: 1
hero: saci-01-tampa-logo.jpg
license: CERN-OHL-S-2.0 (hardware) · CC-BY-4.0 (documentation and data)
files: A v0.1 release is being prepared (design note, dimensioned drawings, CAD, parametric parts, clarification and miniprep data, scripts). It is not yet public and has no DOI.
specs:
  - { label: Body, value: "Ø115.00 × 80.00 mm · 12.50 mm wall · extruded PLA" }
  - { label: Rotor chamber, value: "Ø90.00 × 60 mm" }
  - { label: Rotor, value: "Ø70.00 × 27.0 mm · six wells at 60°, R15.50 mm, 30° from vertical" }
  - { label: Lid, value: "Ø115.00 × 12 mm · pin hinge Ø3.50 mm, with latch" }
  - { label: Motor, value: "12 V DC, RS-385/RS-390 class · no PWM controller" }
  - { label: Safety, value: "Lid limit switch wired in series with the motor" }
  - { label: Printed mass, value: "690 g of PLA at 100 % infill (556.9 cm³)" }
  - { label: Material cost, value: "R$ 77.00" }
images:
  - file: saci-01-tampa-logo.jpg
    credit: photo
    alt: Round pink plastic lid with a raised purple logo, seen from above
    caption: The printed lid with the group's logo in relief. Hinge and latch are printed in one piece; the central slot gives access to the latch.
  - file: saci-02-corpo-lateral.jpg
    credit: photo
    alt: Cylindrical pink plastic body with its lid closed, seen from the side
    caption: Side view with the lid closed. The 12.5 mm wall shows in the thickness of the rim.
  - file: saci-03-unidade-montada.jpg
    credit: photo
    alt: Orange 3D-printed cylindrical microcentrifuge, assembled and closed
    caption: A complete unit in orange PLA, closed and latched. The metal rod on the left is the hinge pin.
  - file: saci-04-montagem.png
    lang: pt
    alt: Sectioned technical drawing of the microcentrifuge with dimensions in millimetres
    caption: "Axial section and plan view, dimensioned in millimetres. Outlines come from slicing the CAD mesh, not from a photograph. Blue: commercial component. Purple: rotor. Red: dimension still to be determined."
  - file: saci-05-eletrico.png
    lang: pt
    alt: Wiring diagram with a 12 V supply, two switches in series and a DC motor
    caption: Electrical schematic. The lid limit switch is in series with the motor — it is the interlock.
  - file: saci-06-pellet-miniprep.jpg
    credit: photo
    alt: A 1.5 mL microtube held between two fingers with a white pellet at the bottom
    caption: Pellet from a plasmid-DNA miniprep after 10 minutes in SACI. This is what the instrument delivers today.
---

SACI is a fixed-angle benchtop microcentrifuge for six 1.5–2.0 mL microtubes. The
body, lid and rotor are printed in PLA and driven by a 12 V DC motor. Materials
cost **R$ 77**, against R$ 5,500 for the commercial reference unit.

It is not a demonstration piece. SACI has been used for real work — clarifying
60 % glycerol on a silica column and plasmid-DNA miniprep — with results compared
against a commercial centrifuge and quantified on a NanoDrop One.

The safety design is deliberate. The lid limit switch sits **in series with the
motor**, not as an indicator: opening the lid cuts the power. The 12.5 mm
cylindrical wall is also a decision — mass to damp vibration and a containment
barrier.

One finding changes how the instrument is operated: **the rotor wells are
through-holes.** The conical tip of the tube hangs below the rotor, held by the
shoulder of the recess. That sets a clearance that must be checked before every
assembly, and it means any spill passes through the rotor and into the chamber.

## What hasn't been measured yet

**Rotor speed under load, and therefore RCF.** This gap blocks everything else.
The motor catalogue suggests 12,500 rpm, which would give roughly 5,150 × g at a
29.5 mm radius — but that is a theoretical upper bound, not a result. **Until RCF
is measured, no result obtained on this instrument can be compared with one from
another centrifuge.** The v0.1 release is published with that limitation stated:
the instrument is *described, not characterized*.

Five instrumentation parts were designed just to close this gap: a reflective
tachometer target, known-imbalance masses, a coupling hub, an IR-thermometer
mount and a standardized-distance arm for measuring noise.

## Prior work

Sule, Petsiuk & Pearce, *Open source completely 3-D printable centrifuge*. The
geometry in this release is the group's own.

<!-- TODO(authorship): author list and order not final (two full names and six ORCIDs missing). Candidate: Kiura, G. T.; Robira, B. M. C.; Benites; Sardilli; Lopes, A. M.; Molino, J. V. D. Add `authors:` to the frontmatter once confirmed. -->
<!-- TODO(funder): funder and process number pending. -->
<!-- TODO(figures): Zenodo/DOI link only after a DOI is actually reserved. -->

