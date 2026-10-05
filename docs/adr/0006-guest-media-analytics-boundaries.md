# ADR 0006: Guest, media, and analytics boundaries

**Status:** Accepted

Guest access uses expiring episode-scoped invitations rather than public host authentication. Media uploads are validated before a storage provider is invoked, and raw recordings remain distinct from uploads/edited assets. Analytics are normalized into internal snapshots so the dashboard does not depend directly on a provider response shape. Provider credentials and actual storage/API calls remain outside this credential-free development stage.
