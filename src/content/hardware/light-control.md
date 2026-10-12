---
name: Light_control
title: ESP32 photoperiod and intensity controller
summary: One light controller for all three reactors. The firmware holds no experiment — it runs JSON "recipes" swapped over Wi-Fi.
group: control
stage: bench
scale: Shared by SANDY, OCTinho and OCTO
order: 4
hero: light-control-01-diagrama.png
license: CERN-OHL-S-2.0 · CC-BY-4.0 (hardware and documentation) · MIT (firmware)
files: Design note, firmware (light_control_luz.ino), Python client, example recipes, an HTML simulator, the diagram, component measurements and the printed-board design. Not yet public and no DOI.
specs:
  - { label: Controller, value: "ESP32 DevKit V1 + XY-MOS MOSFET module (low-side) + DS3231 RTC" }
  - { label: PWM, value: "2 kHz, 12 bits (4,096 steps) — no flicker, no interaction with the quantum sensor" }
  - { label: Recipes, value: "JSON · modes manual / daily / elapsed · step or ramp interpolation" }
  - { label: Interfaces, value: "Web page · Python client · REST API · physical bypass switch" }
  - { label: Network, value: "Wi-Fi, with its own fallback access point if it cannot connect within 10 s" }
  - { label: Typical load, value: "4 × 24 V / 14 W bars = 56 W, 2.33 A → 24 V / 5 A supply, T3A fuse" }
images:
  - file: light-control-01-diagrama.png
    lang: pt
    alt: Wiring diagram with a 24 V supply, fuse, MOSFET module, ESP32 and LED bars
    caption: Electrical diagram. The fuse goes on the positive rail, ahead of everything; the bypass switch is in parallel with the MOSFET.
  - file: light-control-02-placa-3d.png
    alt: 3D render of a board with cut-outs for electronic modules
    caption: Render of the printed support board, which positions the supply, converter, ESP32, RTC and MOSFET module.
  - file: light-control-03-placa-plano.png
    lang: pt
    alt: Dimensioned plan drawing of the support board showing the position of each module
    caption: Dimensioned plan of the same board, with the position of each module.
---

Light_control is the light node that goes on all three reactors: an ESP32 with a
real-time clock and a MOSFET module that dims the LED bars by PWM. But what matters
is not the circuit — it is the software architecture.

**The firmware does not contain the experiment.** It is a generic recipe runner. A
recipe is a JSON file with a light-versus-time curve, stored in flash and swapped
over the network. Changing experiment means sending another JSON — seconds, no
cable, no IDE, no recompiling. The upload happens once.

Three modes cover what a photoperiod assay needs: a fixed value (`manual`), points
on a 24 h clock that repeat every day (`daily`), and points in hours since the start,
once only (`elapsed`). Interpolation is step or ramp, so a hard 16:8 photoperiod
and one with a one-hour dawn are the same structure with one word changed.

It runs through four independent paths: a browser, a command-line Python client, the
REST API directly, and **a physical bypass switch** that gives 100 % light regardless
of firmware, network or lock-up. That is the one that works when the other three
don't.

The clock is a battery-backed DS3231, and NTP only corrects it when there is
internet. If the network drops, the power flickers or the router restarts, **the
photoperiod stays correct** — the one thing a ten-day assay cannot lose.

## What hasn't been measured yet

**The PPFD-versus-duty curve.** The firmware speaks in percent duty, and that is all
it knows. The relation between duty and µmol photons m⁻² s⁻¹ is not exactly linear
and has not been mapped — until it is, **the right thing is to report duty, never
"intensity".** A sweep command exists in the Python client precisely to build the
curve without manual work.

The thermal test is also missing: 56 W dissipated next to 1–2 L of culture sets a
**sustainable duty ceiling**, which becomes a declared parameter of the instrument.

<!-- TODO(authorship): author list/order and funder pending. -->
