# ADR 0007: Supabase must remain free-tier only

**Status:** Accepted

Supabase is the MVP system of record for authentication, relational metadata, private preparation data, guest-invite metadata, media metadata, and analytics snapshots. The project must remain on Supabase Free. No plan upgrade, paid add-on, custom domain, paid compute, or other charge-generating Supabase feature may be enabled without explicit owner approval.

## Guardrails
Current Free-plan planning ceilings are recorded in code: 500 MB database, 1 GB file storage, 5 GB egress, 50,000 monthly active users, 500,000 Edge Function invocations, 2 million Realtime messages, and 200 peak Realtime connections. These values are operational guardrails, not an invitation to consume the full quota.

## Video storage decision
Repeated raw multi-participant podcast video can exhaust 1 GB quickly. Supabase Storage therefore must not become the long-term raw-video archive. Raw-video storage remains behind an adapter. No paid alternative will be activated without explicit approval; until a suitable free path is selected, the app stores media metadata and uses local/test placeholders.

## Failure behavior
If a feature would exceed a Free-plan capability or require a paid Supabase feature, implementation stops at the adapter/boundary and documents a free alternative before any paid action.
