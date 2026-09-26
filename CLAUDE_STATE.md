# Bosnia Trip — State

## Phase
0 — foundation (live: Supabase project + first Vercel deploy)

## Live infra
- Supabase project ref: xivcyqsffitabwbvdmyr (eu-central-1)
- Vercel project: bosnia-trip (prj_LIaJjKGNzEbdKfmXq5xhrGrKCzJ7)
- Live URL: https://bosnia-trip-armantrakos-projects.vercel.app
- Env vars set on Vercel: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY

## Completed
- Next.js/Tailwind scaffold: layout, globals.css (design tokens), bottom nav
- Landing page hero (rest of landing page = phase 2)
- Core DB schema: profiles, categories, locations, location_categories,
  location_seasons, saved_places, visited_places, badges, user_badges,
  trips, trip_days, trip_locations — with RLS policies
- Seed data: categories + badges (taxonomy only, not location facts)

## Architecture
- Next.js App Router, TypeScript, Tailwind, shadcn/ui (added per-component as needed)
- Supabase: Postgres + Auth, RLS on all user-owned tables
- MapLibre + OSM for the map (no Google Maps)
- Gemini API for the AI trip planner only — everything else (badges, nearby,
  season filters) is plain TS/SQL

## Env vars (needed once real accounts exist)
- NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (server-only)
- GEMINI_API_KEY

## Known issues / open decisions
- No Supabase project or Vercel project connected yet
- ~50 location seed dataset not yet created — needs verified real
  coordinates/descriptions (web search), not fabricated
- Auth pages, /explore, /locations/[slug], /map, /trips, /passport,
  seasonal pages, Spin My Trip, AI planner: not started

## Next task
Get Supabase/Vercel targets confirmed, then: apply migrations, scaffold
/explore + /locations/[slug] against real (searched, verified) seed data.
