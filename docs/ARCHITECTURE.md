# Architecture

## Goal
A simple host experience with independently replaceable services for preparation, live video, production, publishing, and analytics.

## Boundaries
- **Web studio:** Next.js + TypeScript, responsive for phones and desktop.
- **Private data:** Supabase Auth/Postgres/Storage with row-level security.
- **Realtime media:** adapter boundary reserved for LiveKit/WebRTC; credentials are server-only.
- **Production:** raw media is preserved separately from edited output; editing will run as background work rather than blocking the studio.
- **Publishing:** YouTube is the live destination. Spotify is a finished-episode publishing path.
- **AI:** provider adapter; private prep content is sent only when the user invokes an AI feature.
- **Analytics:** provider snapshots normalize platform metrics without coupling the UI to one platform.

## Non-negotiable show rules
Episodes end no later than 45 minutes. Intro audio is configurable; copyrighted commercial audio is not stored in this repository. Secrets and private episode content are never committed.
