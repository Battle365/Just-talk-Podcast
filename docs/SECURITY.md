# Security Baseline

- Repository may remain public; secrets must not be committed.
- Browser code may use only Supabase public project configuration intended for client use.
- Service-role credentials are server-only and are not required for the current MVP client flows.
- Row Level Security protects private host data.
- Guest access is episode-scoped and expiring.
- Public podcast playback requires neither authentication nor payment.
- Provider credentials belong in secret environment configuration, not source code.
- Supabase must remain on the Free plan unless the owner explicitly approves a paid change.
- Free-tier usage should warn at 80% of an encoded ceiling; reaching a ceiling is a stop condition for adding consumption.
- Large raw podcast recordings are not archived in Supabase Storage.
