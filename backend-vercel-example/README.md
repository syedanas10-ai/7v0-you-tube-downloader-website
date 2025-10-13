# SSA Downloader Backend (Vercel)

Deploy this minimal Node.js backend to Vercel, then set SSA_BACKEND_URL in your frontend project to its base URL.

- Endpoint: GET /api/download?type=video|audio&url=ENCODED_URL&quality=360|480|720|1080|1440|2160 (video) or low|medium|high (audio)
- Streams directly with correct headers so browsers trigger a download.

Steps:
1) Copy this folder to a new GitHub repo (or import directly in Vercel).
2) Deploy to Vercel (Project Framework: Other).
3) After deploy, copy your deployed base URL (e.g. https://ssa-backend.vercel.app) and set SSA_BACKEND_URL in your frontend's Vars.
