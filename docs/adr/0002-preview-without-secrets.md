# ADR 0002: Safe preview without service credentials

**Status:** Accepted

The repository must build and test without real Supabase or provider credentials. During development, preparation UI uses in-memory preview state. Production persistence is enabled only when the required Supabase public configuration exists, while privileged service keys remain server-only. This keeps public source code free of secrets and lets UI/business-rule tests run deterministically.
