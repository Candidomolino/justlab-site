---
name: OCTinho
title: 10 L flask photobioreactor
summary: The OCTO architecture adapted to a 10 L borosilicate flask, with a lid designed for five pass-throughs. Only the flask exists so far.
group: reactor
areas: [bioprocess]
stage: preliminary
scale: Nominal 10 L
order: 2
hero: octinho-01-frasco-10l.jpg
license: CERN-OHL-S-2.0 (hardware) · CC-BY-4.0 (documentation and data)
files: A v0.1 release is in preparation (two-page design note, SVG/PNG schematics, part requirements, dimension sheet, E0–E6 test plan, licences). There is no CAD, STL or fabrication profile yet. It is not public and has no DOI.
specs:
  - { label: Vessel, value: "Borosilicate 3.3 flask, 10,000 mL, with approximate volume scale" }
  - { label: Working volume, value: "Target 10 L — not yet verified" }
  - { label: Structure, value: "Proposed: PVC (nominal 25 mm) + PLA segments, external support for the LED bars" }
  - { label: Lid, value: "Moulded silicone with 5 pass-throughs — gas in/out, liquid in/out, sampling" }
  - { label: Lighting, value: "Same LED model as OCTO · number of bars and power to be defined" }
  - { label: Control, value: "Manual in this version; ESP32 out of scope for now" }
images:
  - file: octinho-01-frasco-10l.jpg
    credit: photo
    alt: A 10 litre glass flask lying on a bench with an engraved volume scale
    caption: The flask, which today is the whole of OCTinho. The engraved scale is approximate volume — the level-to-volume curve still has to be measured.
  - file: octinho-02-medida-gargalo.jpg
    credit: photo
    alt: A digital caliper measuring the mouth of a glass flask on a lab bench
    caption: Surveying the neck with a caliper. Mouth and thread define the lid interfaces and must be measured before the mould is made.
  - file: octinho-03-montagem.png
    lang: pt
    alt: Schematic of the proposed reactor assembly with unbuilt parts in dashed lines
    caption: Proposed assembly. Dashed lines mark structure that has not been built.
  - file: octinho-04-interfaces.png
    lang: pt
    alt: Diagram of the planned input and output interfaces on the reactor lid
    caption: The five pass-throughs of the designed lid, with no physical layout defined yet.
---

It is honest to start here: **the reactor has not been built yet.** What exists is
the flask — a 10,000 mL borosilicate 3.3 vessel — and a design on paper that adapts
the OCTO architecture to this scale.

The difference from OCTO is not only volume. The designed silicone lid has **five
pass-throughs** — gas in and out, liquid in and out, and sampling — against OCTO's
two gas ports. That is exactly OCTO's current limitation, addressed in the next
design.

The target is 10 L of working volume in a nominal 10 L flask, which deserves
suspicion: headspace, foaming and carry-over must be checked before the target
means anything. If it does not fit, the choice between a smaller volume and a
different vessel is still open.

## What hasn't been measured yet

Practically everything: flask body, height, mouth and neck; the actual PVC
diameter; the bars and connectors; the thread and seal. **There is no CAD, STL or
released fabrication profile in this version**, and no geometry audit of OCTO counts
as validation of OCTinho.

Two things should not be carried over from OCTO by analogy: the reported
autoclavability of the silicone and the pump's 80 L/min rating. Both must be
confirmed on this reactor's own circuit.

<!-- TODO(authorship): author list/order and funder pending. -->
