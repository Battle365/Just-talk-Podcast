# ADR 0003: Local studio before live media

**Status:** Accepted

Build and test the studio interaction model before connecting a realtime media provider. Participant roles, layouts, introductions, controls, and the 45-minute policy remain application concerns; LiveKit/WebRTC will later supply media through an adapter. This reduces credential risk and keeps provider-specific code from owning the podcast workflow.
