---
name: Light_sensor
title: Transmittance densitometer for biomass
summary: A printed clamshell that clamps around the reactor tube and reads biomass with 850 nm infrared — no opening, no sampling.
group: control
stage: design-closed
scale: Inline, on the reactor tube
order: 5
hero: light-sensor-01-diagrama.svg
license: CERN-OHL-S-2.0 · CC-BY-4.0 (hardware and documentation) · MIT (firmware)
files: Design note (DENSITOMETRO.md), firmware (tube_od_sensor.ino), SVG diagram and photos of the printed sleeve. Not yet public and no DOI.
specs:
  - { label: Sensor, value: "TSL2591 (I²C 0x29) · 600 M:1 dynamic range, with normalized auto-ranging" }
  - { label: Emitter, value: "850 nm infrared LED, pulsed only during integration" }
  - { label: Measurement, value: "OD = log₁₀(I₀/I) · dark subtraction at every point" }
  - { label: Logging, value: "microSD + DS3231 RTC + waterproof DS18B20 probe" }
  - { label: Rates, value: "1 Hz acquisition (display) · 60-reading average per logged line" }
  - { label: Interface, value: "Web page with live chart · REST API · serial commands" }
  - { label: Power, value: "Entire circuit at 3.3 V, over USB" }
images:
  - file: light-sensor-01-diagrama.svg
    alt: Diagram with the ESP32 wiring and a section showing the light path through the tube
    caption: Wiring and optical geometry. On the right, the section of the sleeve — LED on one side, sensor on the other, culture in between.
  - file: light-sensor-02-luva-metades.jpg
    credit: photo
    alt: Two halves of a black 3D-printed cylindrical sleeve, open side by side, seen from above
    caption: The two halves of the sleeve. On the left, the opening where the beam enters; on the right, the cradle that holds the sensor board.
  - file: light-sensor-03-luva-berco.jpg
    credit: photo
    alt: A black cylindrical part held in the hand, showing the internal cavity
    caption: The internal cradle, with the guides that position the sensor.
  - file: light-sensor-04-luva-abertura.jpg
    credit: photo
    alt: A closed black cylindrical sleeve with a small round hole in its wall
    caption: Closed. The small opening in the wall is where the beam enters; the black body seals out external light.
---

Light_sensor measures how much biomass is in the culture **without opening the
reactor and without taking a sample.** A printed clamshell sleeve closes around the
tube. On one side there is an 850 nm infrared LED; diametrically opposite, a TSL2591
sensor. Light passes through the culture, and what reaches the other side drops as
cells multiply.

Choosing infrared solves two problems at once. **It is pigment-independent** — in the
IR, chlorophyll does not absorb, so the sensor sees scattering by the cells, which is
what correlates with biomass; measured in red, a culture fading from nitrogen
limitation would look like a biomass drop that never happened. And **it is invisible
to the culture:** 850 nm is outside the photosynthetically active range, so the
instrument can measure every second, 24 hours a day, without adding a photon to the
photoperiod that Light_control is imposing.

Every measurement is a pair: integrate with the LED on, integrate with it off,
subtract. That removes ambient light leaking past the sleeve joint and the sensor's
dark current — which is what makes it possible to measure with the grow lights on
next to it, and with duty varying through the day. Without it, the instrument would
show a "circadian oscillation of biomass" that was pure artefact.

It logs to a microSD card with date, time and culture temperature, and serves a live
chart over the local network. It samples at 1 Hz for the display and logs the mean
of 60 acquisitions per line — cutting noise by √60 ≈ 7.7× and leaving 1,440 lines a
day instead of 864,000.

## What hasn't been measured yet

**The optical-density ceiling.** The optical path here is the inner diameter of the
tube — around 40 mm, against 10 mm in a benchtop cuvette. Attenuation is exponential
in path length: a culture reading OD 1.0 in a cuvette would read about OD 4.0 here.
The sensor has the dynamic range for that; what runs out first is stray light. A
serial-dilution test against the spectrophotometer defines the OD above which the
instrument stops tracking — and that number becomes a declared parameter.

The OD-versus-dry-weight curve, which is what turns attenuation into biomass, is also
missing. Until then, **report OD, never "biomass".**

<!-- TODO(authorship): author list/order and funder pending. -->
