# Comprehensive System Specification - Admin Dashboard (SSTS)

## Table of Contents
1. [Introduction](#introduction)
2. [Functional Requirements](#functional-requirements)
   - [User Authentication](#user-authentication)
   - [Event Management](#event-management)
   - [Calendar Icons (Legacy/Placeholder)](#calendar-icons-legacyplaceholder)
3. [Architecture and Design](#architecture-and-design)
   - [Core Architecture](#core-architecture)
   - [Module Structure](#module-structure)
   - [Service Layer](#service-layer)
   - [Declaratives (Pipes & Directives)](#declaratives-pipes--directives)
4. [Data Models and Schemas](#data-models-and-schemas)
5. [User Interface and UX](#user-interface-and-ux)
6. [Technical Configuration](#technical-configuration)
7. [Build and Deployment](#build-and-deployment)

---

## 1. Introduction
The **SSTS Admin Dashboard** is a custom-built content management solution designed to manage events and community data for the SSTS platform. Built with **Angular 21**, it prioritizes modularity, ease of use, and efficient content entry through rich text integration and streamlined media management.

---

## 2. Functional Requirements

### 2.1 User Authentication
- **Secure Entry**: Access is restricted via a dedicated login portal (`/public/login`).
- **Credential Validation**: Validates username and password against the `/auth/basic2` endpoint.
- **Session Persistence**: Utilizes `localStorage` (`isLoggedIn` key) to maintain session state across page refreshes.
- **Route Protection**: The `AuthGuard` implement's `canActivate` to intercept unauthorized navigation, redirecting to login with a `returnUrl` query parameter for post-login redirection.
- **Logout Protocol**: Clears local storage and resets the `AuthService` state via a `BehaviorSubject`.

### 2.2 Event Management
The Events module (`/events`) is the primary functional area of the application.
- **Event List View**:
  - Displays events in a tabular/list format.
  - **Live Search**: Client-side search filtering using a custom `EventsSearchPipe` that maps across `name`, `description`, and `startDate`.
  - **Status Indicators**: Visual cues (Check/Times circles) for "Published" vs "Unpublished" status.
- **Event Form (Add/Edit)**:
  - **Contextual UI**: Dynamic headers and validation rules based on whether the user is adding a new record or editing an existing one (identified by `filename` path parameter).
  - **Rich Text Editing**: Integration of `@kolkov/angular-editor` for the `description` field, including custom toolbar configurations (Arial/Times fonts, custom title classes).
  - **Advanced Date Management**:
    - Uses `ngbDatepicker`.
    - **Logic**: Selecting a "Start Date" automatically pre-fills the "End Date". Users can manually override the end date by toggling the "Change end date" checkbox.
  - **Image Management**:
    - Integrated `app-file-upload` component.
    - Supports previewing existing and newly selected images via `FileReader`.
    - Automated upload to `${environment.CONTEXT_PATH}/fileupload/events`.
  - **Form Validation**: 
    - Required fields: Name, Description, Start Date, Image URL (for new entries).
    - **Smoothing UX**: Custom `ScrollToInvalidControl` directive automatically scrolls to the first invalid field on submission.

### 2.3 Calendar Icons (Legacy/Placeholder)
- A module exists for `calendarIcons` but is currently commented out in the sidebar and routing configuration, indicating planned or deprecated functionality.

---

## 3. Architecture and Design

### 3.1 Core Architecture
The application follows a **Modular Micro-App** strategy. The `AppModule` serves as a shell, hosting the routing configuration and layout containers.
- **Lazy Loading**: Every major feature (Events, Public, etc.) is lazy-loaded to reduce initial bundle size.
- **State Management**: Uses RxJS `BehaviorSubject` for lightweight state tracking (e.g., authentication status).

### 3.2 Module Structure
| Module | Location | Purpose |
| :--- | :--- | :--- |
| `AppModule` | `/src/app/app.module.ts` | Root shell, contains layout and core routing. |
| `CoreModule` | `/src/app/core/` | Single-use services (Auth, HTTP Interceptors). |
| `SharedModule` | `/src/app/shared/` | Reusable UI components, directives, and common pipes. |
| `SecureModule` | `/src/app/secure/` | Wrapper for protected feature modules available post-auth. |
| `PublicModule` | `/src/app/public/` | Handles Login, Logout, and 404 pages. |
| `LayoutModule` | `/src/app/layout/` | Structural components like Sidebar and Secure Layout. |

### 3.3 Service Layer
- **AuthService**: Manages login/logout state and interaction with `/auth/` endpoints.
- **EventsService**: Standard CRUD operations (`getAll`, `get(id)`, `add(data)`, `update(id, data)`, `delete(id)`). Uses `PATCH` for updates.
- **FileUploadService**: Handles `multipart/form-data` uploads to the backend.
- **Custom Date Services**:
  - `CustomAdapter`: Converts between `NgbDateStruct` and `DD/MM/YYYY` string format for storage.
  - `CustomDateParserFormatter`: Handles parsing keyboard input and formatting dates for display in the picker input.

### 3.4 Declaratives (Pipes & Directives)
- **SearchPipe**: A generic filtering pipe that takes keys and a term, performing a case-insensitive regex match across data arrays.
- **ScrollToInvalidControlDirective**: Enhances forms by ensuring users are immediately directed to errors on submission, using `getBoundingClientRect` for smooth scrolling.

---

## 4. Data Models and Schemas

### 4.1 Event Schema
The system operates on an object-based schema primarily serialized to JSON via the mock server.
| Field | Data Type | Validation | Notes |
| :--- | :--- | :--- | :--- |
| `name` | `string` | Required | Display name in the list. |
| `description` | `string` | Required | HTML string from the rich text editor. |
| `startDate` | `string` | Required | Format: `DD/MM/YYYY`. |
| `endDate` | `string` | Optional | Defaults to `startDate`. |
| `imageurl` | `string` | Required (Add) | Relative path: `/images/events/{filename}`. |
| `filename` | `string` | Read-only | Unique ID generated or derived from image upload. |
| `unpublished` | `boolean` | Optional | Inversed in the UI (Checkbox for "Published"). |

### 4.2 Auth State
| Field | Data Type | Source |
| :--- | :--- | :--- |
| `isLoggedIn` | `boolean` | `localStorage` / `BehaviorSubject` |
| `token` | `string` | (Implicit in API calls) |

---

## 5. User Interface and UX

### 5.1 Design Tokens
- **CSS Framework**: Bootstrap 5.3.
- **Icons**: FontAwesome 7 (Solid/Regular libraries).
- **Typography**: Inherited from Bootstrap (Sans-serif defaults).
- **Themes**: Professional admin aesthetic with card-based layouts and header-nav bars.

### 5.2 Layout Components
- **Sidebar**: 
  - Supports "Collapsed" and "Expanded" states.
  - Persists state in `localStorage` (`sidemenu-expanded`).
  - Includes hover effects for peek-functionality when collapsed (`sidemenu-collapsed-hover`).
- **Secure Layout**: 100% height container with a fixed sidebar and a fluid right-section scroll area.

---

## 6. Technical Configuration

### 6.1 API Integration
The application uses a proxy configuration to bridge the frontend and mock backend.
- **Proxy Config (`proxy.conf.json`)**:
  - Routes URLs prefixed with `/admin` to `http://localhost:3000`.
- **Environment Variables**:
  - `apiUrl`: Base URL for the frontend dev server.
  - `CONTEXT_PATH`: Base path for API requests (set to `/admin`).
  - `LOCAL_PATH`: Source URL for media assets (mock server).

---

## 7. Build and Deployment

### 7.1 Optimization
- **PurgeCSS**: Integrated via `webpack.config.js` to strip unused Bootstrap classes, significantly reducing the final CSS bundle size.
- **Base HREF**: Production builds target `/admin/` via the `--base-href` flag in `package.json`.

### 7.2 Commands
- `npm run start`: Runs `ng serve` with proxy configuration.
- `npm run build`: Production build outputting to `../../admin`.
- `npm run server-mock`: Launches `json-server` on `database.json`.
