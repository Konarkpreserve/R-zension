# R-zension System Architecture

**Project:** R-zension  
**Tagline:** Rise. Analyze. Ascend.  
**Product Category:** Competitive Growth Platform with Intelligent Performance Insights

---

## 1. Overview

R-zension is a competitive growth platform designed to help users track performance, compare progress, analyze competitive standing, and receive intelligent insights that support continuous improvement.

The system follows a **modular feature-first architecture**. Instead of organizing the product only by technical layers, R-zension groups business capabilities into clear domains such as Identity, Competition, Ascension, Oracle, and Experience. This keeps related logic close together, makes the system easier to explain, and allows individual product areas to evolve without forcing broad changes across the application.

At a high level, R-zension is composed of:

| Layer | Technology | Primary Responsibility |
| --- | --- | --- |
| Frontend | React | User interface, state presentation, user interactions |
| Backend | Express | API orchestration, business rules, authentication boundaries, ranking workflows |
| Database | PostgreSQL | Durable source of truth for users, scores, competitions, and application data |
| Oracle Engine | Python FastAPI | AI-powered insights, predictions, trend analysis, and recommendations |
| Ranking Engine | AVL Tree | Efficient ranking updates and leaderboard ordering logic |

The backend owns the core product rules. The Oracle Engine is intentionally separated so intelligent analysis can evolve independently while the Express backend remains the authority for identity, competition state, and leaderboard behavior.

---

## 2. Architecture Goals

R-zension is designed around the following architecture goals.

| Goal | Description |
| --- | --- |
| Scalability | The system should support growth in users, competitions, score submissions, leaderboard reads, and insight requests without requiring a rewrite of the core architecture. |
| Maintainability | Each domain should have a clear responsibility so engineers can change one feature area without unexpectedly breaking another. |
| Modularity | Feature-first boundaries should keep frontend and backend capabilities organized around business concepts rather than scattered technical fragments. |
| Performance | Score submissions, ranking updates, and leaderboard retrieval should be efficient. The AVL ranking engine supports fast ordered ranking operations while PostgreSQL remains the durable data store. |
| Explainability | The system should be easy to explain in interviews, demos, onboarding sessions, and architecture reviews. Each component should have a clear reason to exist. |

---

## 3. System Context Diagram

```text
+------+
| User |
+------+
   |
   v
+----------------+
| React Frontend |
+----------------+
   |
   v
+-----------------+
| Express Backend |
+-----------------+
   |
   v
+------------+
| PostgreSQL |
+------------+
   |
   v
+--------------------------------+
| Oracle Engine (Python FastAPI) |
+--------------------------------+
```

### Component Responsibilities

| Component | Responsibility |
| --- | --- |
| User | Interacts with R-zension by signing in, submitting scores, viewing leaderboards, and consuming insights. |
| React Frontend | Provides the user experience, captures user actions, renders competition data, displays rankings, and presents Oracle insights. |
| Express Backend | Exposes application APIs, applies business rules, validates requests, manages identity boundaries, coordinates ranking updates, persists data, and calls the Oracle Engine when insight generation is required. |
| PostgreSQL | Acts as the source of truth for persistent application data, including users, competitions, scores, leaderboard records, and insight-related data. |
| Oracle Engine (Python FastAPI) | Produces AI insights, predictions, trend analysis, and recommendations based on data provided by the backend. |

The diagram shows the primary flow of responsibility. In practice, the Express backend coordinates communication between PostgreSQL and the Oracle Engine. PostgreSQL remains the authoritative data layer, while the Oracle Engine receives only the data needed for analysis.

---

## 4. Container Architecture

R-zension is organized into four major runtime containers.

```text
+----------------+       HTTP/API       +-----------------+
| React Frontend | -------------------> | Express Backend |
+----------------+                      +-----------------+
                                               |
                                               | SQL / Data Access
                                               v
                                        +------------+
                                        | PostgreSQL |
                                        +------------+
                                               ^
                                               |
                                        Persisted state
                                               |
                                               v
                                   +-------------------------+
                                   | AVL Ranking Engine      |
                                   | Backend-owned logic     |
                                   +-------------------------+
                                               |
                                               | HTTP/API
                                               v
                              +--------------------------------+
                              | Oracle Engine (Python FastAPI) |
                              +--------------------------------+
```

| Container | Role | Communication |
| --- | --- | --- |
| Frontend | Presents pages, layouts, forms, dashboards, leaderboards, and insight views. | Sends HTTP requests to the Express backend and renders API responses. |
| Backend | Owns core application workflows, business rules, identity boundaries, leaderboard coordination, and integration with the Oracle Engine. | Receives requests from React, reads/writes PostgreSQL, updates ranking structures, and calls the Oracle Engine over HTTP. |
| Database | Stores durable application state. | Accessed by the Express backend through database queries. |
| Oracle Engine | Performs intelligence-specific processing. | Receives analysis requests from the Express backend and returns insight results. |

The frontend never communicates directly with PostgreSQL or the Oracle Engine. All frontend requests go through the Express backend so business rules, permissions, and orchestration remain centralized.

---

## 5. Backend Architecture

The backend uses **feature-first modules**. Each module represents a business domain and contains the logic, routes, services, validation, and data access patterns needed for that domain.

The current business domains are:

| Domain | Responsibility |
| --- | --- |
| Identity | Handles user identity boundaries such as user profiles, authentication-related API responsibilities, and user-specific access rules. |
| Competition | Manages competitions, score submissions, competitor relationships, leaderboard workflows, and competitive state. |
| Ascension | Represents growth, progress tracking, user improvement, milestone movement, and performance evolution over time. |
| Oracle | Coordinates requests to the Oracle Engine, stores or retrieves insight-related data, and exposes insight APIs to the frontend. |
| Experience | Supports demo mode, recruiter-facing sample flows, seeded demo users, and controlled demonstration data. |

### Backend Module Pattern

```text
server/
  features/
    identity/
    competition/
    ascension/
    oracle/
    experience/
```

Each backend feature should own its domain language and business behavior. Shared infrastructure should exist only where multiple domains truly need the same capability.

### Backend Responsibilities

| Responsibility | Backend Ownership |
| --- | --- |
| Request validation | Express backend |
| Authentication boundaries | Identity domain |
| Competition workflows | Competition domain |
| Score persistence | Competition domain with PostgreSQL |
| Ranking updates | Competition domain using the AVL ranking engine |
| Growth progress interpretation | Ascension domain |
| Oracle Engine orchestration | Oracle domain |
| Demo data loading | Experience domain |

---

## 6. Frontend Architecture

The frontend mirrors the backend using a **feature-first architecture**. User-facing capabilities are grouped by product domain, while shared UI and application infrastructure remain in common folders.

Recommended frontend structure:

```text
client/
  src/
    core/
    features/
      identity/
      competition/
      ascension/
      oracle/
      experience/
    shared/
    layouts/
    pages/
    assets/
```

| Area | Responsibility |
| --- | --- |
| core | Application bootstrap, global configuration, API client setup, routing foundations, and cross-cutting frontend infrastructure. |
| features | Domain-specific UI, state, hooks, forms, views, and client-side behavior organized around product features. |
| shared | Reusable components, utilities, constants, and UI primitives used across multiple features. |
| layouts | Application shells and structural layout components used by pages. |
| pages | Route-level screens that compose feature components into complete user journeys. |
| assets | Static visual assets, images, icons, and other frontend resources. |

The frontend should keep business-specific UI close to the feature it supports. Shared components should remain generic and reusable.

---

## 7. Oracle Engine

The Oracle Engine is a Python FastAPI service dedicated to intelligent performance analysis. It exists as a separate container so AI-related behavior can evolve independently from core backend workflows.

### Oracle Engine Responsibilities

The Oracle Engine should only perform:

- AI insights
- Predictions
- Trend analysis
- Recommendation generation

### Explicit Non-Responsibilities

The Oracle Engine must never handle:

| Not Owned By Oracle Engine | Reason |
| --- | --- |
| Authentication | Identity must remain a backend-owned product boundary. |
| Authorization | Access decisions must be enforced by the Express backend. |
| Leaderboard logic | Ranking and competition rules belong to the backend Competition domain. |
| Score persistence | PostgreSQL remains the source of truth through backend-controlled writes. |
| Competition ownership rules | These are core business rules and should remain in the Express backend. |

The Oracle Engine should receive structured data from the backend, perform analysis, and return explainable insight results. It should not become a second backend or an alternative source of product truth.

---

## 8. Database Architecture

PostgreSQL is the **source of truth** for R-zension.

All durable application state should be persisted in PostgreSQL, including users, competitions, scores, leaderboard records, demo data, and stored insight results where applicable.

### PostgreSQL Responsibilities

| Responsibility | Description |
| --- | --- |
| Durability | Stores application state safely beyond a single request or process lifetime. |
| Consistency | Preserves authoritative records for users, competitions, scores, and relationships. |
| Querying | Supports retrieval of historical data, current state, and reporting-oriented views. |
| Recovery | Enables the application to rebuild runtime structures if a server process restarts. |

### AVL Tree Clarification

The AVL Tree is **not the database**.

It is a **ranking engine** used to efficiently maintain ordered leaderboard state. The AVL ranking engine supports fast insertion, update, balancing, and rank-oriented operations, but it does not replace PostgreSQL.

| Concern | Owner |
| --- | --- |
| Durable score storage | PostgreSQL |
| Authoritative user and competition records | PostgreSQL |
| Runtime ranking optimization | AVL ranking engine |
| Rebuildable leaderboard ordering | AVL ranking engine backed by PostgreSQL data |

If runtime ranking state is lost, it should be possible to rebuild it from PostgreSQL.

---

## 9. Request Lifecycle

When a user submits a new score, the system follows this lifecycle:

```text
+----------------+
| React Frontend |
+----------------+
        |
        | Submit score request
        v
+-----------------+
| Express Backend |
+-----------------+
        |
        | Validate request and apply business rules
        v
+------------+
| PostgreSQL |
+------------+
        |
        | Persist score as source of truth
        v
+--------------------+
| AVL Ranking Update |
+--------------------+
        |
        | Recalculate affected ranking position
        v
+-----------------+
| Oracle Analysis |
+-----------------+
        |
        | Generate insights when required
        v
+----------------------+
| Response to Frontend |
+----------------------+
```

### Step-by-Step Flow

| Step | Component | Description |
| --- | --- | --- |
| 1 | React Frontend | User submits a new score through the UI. |
| 2 | Express Backend | Backend receives the request, validates the payload, checks user and competition rules, and starts the score submission workflow. |
| 3 | PostgreSQL | The score is persisted as durable application state. |
| 4 | AVL Ranking Update | The ranking engine updates the affected leaderboard ordering based on the new score. |
| 5 | Oracle Analysis | The backend sends relevant performance context to the Oracle Engine if insights, predictions, trends, or recommendations are needed. |
| 6 | Response to Frontend | The backend returns the updated score state, ranking result, and any available Oracle insight data to the React frontend. |

The Express backend coordinates the full lifecycle. This keeps the frontend simple, protects business rules, and prevents the Oracle Engine from taking ownership of core application state.

---

## 10. Experience Mode

Experience Mode exists to support recruiters, evaluators, and project demonstrations.

It allows R-zension to present a polished, realistic product journey without requiring a live user base or manually prepared data before every demo.

### Experience Mode Responsibilities

| Capability | Description |
| --- | --- |
| Demo users | Loads predefined users that represent realistic competitors and growth journeys. |
| Demo competitions | Provides sample competitions with meaningful score and leaderboard states. |
| Demo scores | Seeds representative score histories so ranking, ascension, and insight views feel complete. |
| Demo insights | Supports demonstration-friendly Oracle outputs based on prepared or generated performance context. |

Experience Mode should remain clearly separated from normal production user workflows. Demo data should support storytelling and evaluation, while production data remains governed by normal Identity, Competition, Ascension, and Oracle rules.

---

## 11. Deployment

The future deployment architecture keeps the same container boundaries used by the local and development architecture.

```text
+----------------+
| React Frontend |
+----------------+
        |
        v
+-----------------+
| Express Backend |
+-----------------+
        |
        v
+------------+
| PostgreSQL |
+------------+
        |
        v
+--------------------------------+
| Oracle Engine (Python FastAPI) |
+--------------------------------+
```

### Deployment Responsibilities

| Runtime | Deployment Role |
| --- | --- |
| React Frontend | Served as the user-facing web application. |
| Express Backend | Deployed as the main API and orchestration service. |
| PostgreSQL | Deployed as the durable relational database. |
| Oracle Engine | Deployed as a separate Python FastAPI service for intelligent analysis. |

Deployment should preserve the architectural rule that the React frontend communicates with the Express backend, and the Express backend coordinates all database and Oracle Engine interactions.

---

## 12. Guiding Principles

R-zension should continue to evolve according to these architecture principles.

| Principle | Meaning |
| --- | --- |
| Single Responsibility | Each component and module should have one clear reason to change. |
| Feature-first | Code should be organized around product capabilities and business domains. |
| Modularity | Features should be independently understandable, testable, and changeable. |
| Scalability | The architecture should support growth in users, scores, competitions, rankings, and insight workloads. |
| Maintainability | The codebase should stay approachable for future engineers, reviewers, and contributors. |
| Interview Explainability | The architecture should be easy to communicate clearly in technical interviews, recruiter demos, and portfolio reviews. |

The central architecture idea is simple: **React presents the experience, Express owns the product rules, PostgreSQL stores the truth, the AVL Tree optimizes rankings, and the Oracle Engine explains performance intelligence.**
