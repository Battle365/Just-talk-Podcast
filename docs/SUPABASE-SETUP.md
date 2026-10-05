# Supabase Free-Tier Setup

The application is ready to connect to a Supabase Free project, but no real credentials are committed.

1. Create/select a Supabase project on the **Free** plan only.
2. Apply the SQL migration in `supabase/migrations/001_initial_schema.sql`.
3. From the project's Connect dialog, place `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in the local/deployment secret environment, never hard-coded in Git.
4. The current MVP browser flows do not require a Supabase secret key. If a backend feature later requires one, it must remain server-only and requires the existing credential/security approval boundary.
5. Verify Row Level Security remains enabled on every private table before connecting real user data.
6. Do not enable paid compute, custom domains, PITR, paid add-ons, or a plan upgrade.
7. Monitor database, storage, egress, Auth MAU, Functions, and Realtime usage against the Free-plan ceilings.

Large raw podcast recordings are intentionally excluded from Supabase Storage for the MVP free-tier design.
