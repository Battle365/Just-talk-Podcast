# Test Plan

## Unit
Pure business rules such as the 45-minute hard limit, episode state transitions, permissions, and publishing eligibility.

## Integration
Supabase repository behavior, studio token endpoints, provider adapters, recording metadata, and analytics normalization using test doubles where credentials are unavailable.

## Sanity / smoke
Application boots, host can reach preparation and studio surfaces, and critical server routes respond.

## Regression
Every fixed defect receives a test. CI runs type checking, unit/integration tests, and build checks on pull requests.

## End-to-end
Before release: host creates episode -> guest joins -> session records -> 45-minute policy ends session -> raw/edit metadata persists -> publishing workflow is prepared.
