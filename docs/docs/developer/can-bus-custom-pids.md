---
sidebar_position: 1
---

# Adding Custom CAN-Bus PID Reading

Guidelines for extending the OBD dock's `dock-stm32g0` firmware to read additional CAN-bus PIDs beyond the defaults (speed, RPM, odometer).

:::info Status
This firmware is not published yet. This page is a placeholder for the customization guide.
:::

## TODO

- [ ] Document the FDCAN PID request/response format used by `dock-stm32g0`.
- [ ] Document how to register a new PID handler and surface it over the USB Type-C link to the core tracker.
- [ ] List known vehicle-specific PID quirks.
