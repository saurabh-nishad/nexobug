---
sidebar_position: 1
---

# BOM & Schematics

Interactive BOMs and PCB schematic explanations for both PCB sets, which mate via a horizontal USB Type-C connection.

![NexoBug tracker puck and OBD dock USB-C mating connectors](/img/product.png)

## Core Tracker PCB (NexoBug)

The standalone, battery-powered tracking puck.

- **MCU:** STM32H5 with ARM TrustZone for secure boot and encrypted comms.
- **Connectivity:** Quectel EG915U or SIMCom A7670G 4G module (VoLTE + GPS).
- **Motion & Dead-Reckoning:** LSM6DSOX MEMS-IMU with a Machine Learning Core to maintain route accuracy when GPS is lost (e.g. tunnels).
- **Power:** LiPo battery, fuel gauge IC, female USB Type-C port on the leading edge for charging and docking.

## Vehicle Telematics Dock PCB (OBD Adapter)

Sits inside a hollow, cartridge-style sleeve that mounts under the vehicle dashboard.

- **MCU:** STM32G0 with native FDCAN.
- **Vehicle Comms:** TJA1051 CAN transceiver reading raw telemetry (speed, RPM, odometer).
- **Power Management:** 12V-to-5V buck converter for automotive electrical transients, providing USB-PD power.
- **Interface:** OBD pigtail cable soldered to the rear; a male USB Type-C plug on the front mates with the core tracker.

![Exploded diagram of the OBD dock's internal PCB, pigtail wiring, and the puck's cassette slot interface](/img/3d-render-image.png)

:::info Status
Full KiCad/Altium schematics and BOM live in [`hardware/nexobug-core`](https://github.com/your-org/NexoBug/tree/main/hardware/nexobug-core) and [`hardware/obd-dock-adapter`](https://github.com/your-org/NexoBug/tree/main/hardware/obd-dock-adapter) once published.
:::
