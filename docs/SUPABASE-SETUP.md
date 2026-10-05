# Supabase Free-Tier Setup

The application is ready to connect to a Supabase Free project, but no real credentials are committed.

1. Create/select a Supabase project on the **Free** plan only.
2. Apply the SQL migration in `supabase/migrations/001_initial_schema.sql`.
3. Configure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` only in the deployment/local secret environment, never in Git.
4. Keep `SUPABASE_SERVICE_ROLE_KEY` server-only if it is ever required; the browser must never receive it.
5. Verify Row Level Security remains enabled on all private tables.
6. Do not enable paid compute, custom domains, PITR, paid add-ons, or a plan upgrade.
7. Monitor database, storage, egress, Auth MAU, Functions, and Realtime usage against the Free-plan ceilings.

Large raw podcast recordings are intentionally excluded from Supabase Storage for the MVP free-tier design. Supabase may hold small approved assets later, but raw-video archival requires a separate explicitly approved free solution.
