# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SSTS (Shree Swaminarayan Temple Sydney) is a Node.js/Express website for the Sydney Swaminarayan Mandir. It serves public-facing temple pages and has a separate Angular admin panel for managing events and calendar icons.

## Commands

- **Start (production):** `npm start` (runs `node ./bin/www`)
- **Start (development):** `npm run dev` (runs `nodemon server.js`)
- **Default port:** 3000 (configurable via `PORT` env var)
- **Environment:** Set `NODE_ENV=production` for production config, otherwise defaults to dev

There are no test or lint scripts configured.

## Architecture

### Backend (Express)

- **Entry point:** `app.js` sets up Express with EJS templating, session/passport auth, and routes
- **Server bootstrap:** `bin/www` creates the HTTP server
- **Config:** `config/index.js` — switches between dev/prod database and file path configs based on `NODE_ENV`
- **Database:** MySQL via `lib/db.js` (connection pool with promisified queries)

### Routing

- `routes/index.js` — all public page routes (`/`, `/about-us`, `/bal-mandal`, `/trivia`, etc.). Most are simple `res.render()` calls
- `routes/events.js` — delegates to `app/controllers/events/` for event listing logic
- `routes/media.js` — gallery middleware using `node-gallery` package
- `routes/admin/` — admin API routes (events CRUD, calendar icons, users, auth, file upload)
- `routes/ddPreview.js` — daily darshan preview

### Views (EJS)

- `views/` — EJS templates using old-style `<% include partials/header %>` syntax (EJS ~2.5.7)
- `views/partials/` — shared partials: `header.ejs`, `menu.ejs`, `footer.ejs`, `footer-info.ejs`, countdown timer, buttons, banners
- Common page structure: `header` partial in `<head>`, `menu` partial at top of `<body>`, content in `<div class="container bg-light">`, `footer` partial at bottom

### Admin Panel (Angular)

- **Source:** `sourceCode/admin/` — Angular project with its own `package.json`
- **Built output:** `admin/` — pre-built Angular app served at `/admin` route
- **Modules:** Events management and Calendar Icons management under `src/app/secure/`
- **Auth:** JWT interceptor + fake backend for dev, passport-based auth in production

### Data Storage

- **Events:** stored as JSON files in `public/events/` (dev) or `/home/sstsahos/ssts-events` (prod), plus MySQL `event` table
- **Calendar icons:** JSON files in `public/calendaricons/`
- **Media/images:** `public/media/` (dev) or `../public_html/media-content` (prod)
- **Schema:** `schemas/ssts.sql` — MySQL schema with `event` table

### Static Assets

- `public/javascripts/` — jQuery, Bootstrap, Galleria, custom app.js
- `public/stylesheets/` — Bootstrap, Material Design, custom styles
- `public/galleria/` — Galleria image gallery library with plugins and themes
