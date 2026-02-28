# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SSTS (Shree Swaminarayan Temple Sydney) is a dual-app monorepo: an Express/EJS public website and an Angular 15 admin SPA for content management.

## Commands

### Express Backend (root)
- **Start (production):** `npm start` (runs `node ./bin/www`)
- **Start (dev):** `npx nodemon bin/www` (the `npm run dev` script references a nonexistent `server.js`; use `bin/www` instead)
- **Port:** 3000 by default, or `PORT` env var

### Angular Admin App (`sourceCode/admin/`)
- **Dev server:** `npm start` (proxies API calls to Express at localhost:3000)
- **Production build:** `npm run build` (outputs to `../../admin/` which Express serves statically)
- **Watch build:** `npm run watch`
- **Mock API:** `npm run server:mock`

No test or lint scripts exist for either app.

## Architecture

### Express Backend
- **Entry:** `bin/www` → `app.js` (middleware, routes, error handler)
- **Views:** EJS templates in `views/`, partials in `views/partials/` (uses old `<% include %>` syntax)
- **Static assets:** served from `public/`
- **Config:** `config/index.js` selects dev/prod settings based on `NODE_ENV`

### Route Mounting
- `/` → `routes/index.js` — public pages (about, murtis, history, donations, etc.)
- `/events` → `routes/events.js` — reads event JSON files via `app/controllers/events/`
- `/media/*` → `routes/media.js` — photo gallery via `node-gallery`
- `/dd-preview` → `routes/ddPreview.js` — redirects to latest daily darshan folder
- `/admin/*` → `routes/admin/index.js` — REST API, then falls through to `express.static('admin/')` for the Angular SPA

### Event Data (File-Based, Not MySQL)
- Events are individual JSON files in `public/events/` (dev) or `/home/sstsahos/ssts-events` (prod)
- Calendar icons similarly in `public/calendaricons/`
- Admin API reads/writes/soft-deletes these JSON files directly via `fs`
- "Delete" is a soft-delete: sets `unpublished: true` on the JSON, does not remove the file
- Events with a future `publishDate` are hidden from the public site

### Database (MySQL)
- `lib/db.js` creates a promisified connection pool
- Only used for the `subscriber` table (`POST /admin/users/subscribe`); events do NOT use the database

### Authentication
- Passport Basic and Local strategies in `utils/strategies/`
- Admin login uses hardcoded credentials checked via Basic auth at `POST /admin/auth/basic`
- Angular `AuthGuard` protects secure routes; `JwtInterceptor` attaches Bearer token header

### Angular Admin App (`sourceCode/admin/src/`)
- Angular 15 with Angular Material, Bootstrap 5, CKEditor5, ngx-datatable
- Lazy-loaded modules: `EventsModule` (`/events`) and `CalendarIconsModule` (`/calendarIcons`)
- Builds output directly to repo root `admin/` directory (committed to git)
- Tests are disabled (`skipTests: true` in schematics)

### Special Behaviors
- A special event named `"[LIVE STREAM ONLY]: NOT FOR PUBLISHING"` controls the live stream panel on the events page; its `description` field uses pipe-delimited key|value pairs separated by `~`
- Image URLs are auto-prepended with `/images/events/` by the admin API if not already present
- Events have a `lowimageurl` field (filename with `-lowly` suffix) for progressive loading
