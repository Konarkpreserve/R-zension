# R-zension Folder Structure

> This document defines the official repository structure for R-zension. Every file, folder, and module should follow this layout unless an Architecture Decision Record (ADR) explicitly changes it.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Folder Structure |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Goals

The repository structure should be:

- Scalable
- Modular
- Easy to navigate
- Easy to maintain
- Feature-oriented
- Monorepo friendly

---

# Repository Structure

```text
R-zension/

├── .github/
│   ├── workflows/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
│
├── client/
│
├── server/
│
├── ai/
│
├── packages/
│
├── docs/
│
├── docker/
│
├── scripts/
│
├── tests/
│
├── .env.example
├── .gitignore
├── docker-compose.yml
├── README.md
└── LICENSE
```

---

# Client Structure

```text
client/

src/

    app/

    assets/

    components/

    features/

    hooks/

    layouts/

    lib/

    pages/

    providers/

    routes/

    services/

    store/

    styles/

    types/

    utils/

    main.tsx
```

---

# Feature Structure

Every feature follows

```text
feature-name/

    api/

    components/

    hooks/

    pages/

    schemas/

    services/

    store/

    types/

    utils/

    index.ts
```

---

# Components

```text
components/

    ui/

    charts/

    forms/

    feedback/

    navigation/

    oracle/

    leaderboard/

    analytics/

    common/
```

---

# Pages

```text
pages/

    Landing/

    Authentication/

    Dashboard/

    Leaderboard/

    Oracle/

    Analytics/

    Goals/

    Profile/

    Settings/

    Admin/
```

---

# Layouts

```text
layouts/

    PublicLayout/

    DashboardLayout/

    AdminLayout/

    AuthLayout/
```

---

# Services

```text
services/

    auth/

    analytics/

    oracle/

    leaderboard/

    goals/

    profile/

    settings/
```

---

# Server Structure

```text
server/

src/

    config/

    middleware/

    routes/

    controllers/

    services/

    repositories/

    models/

    validators/

    policies/

    jobs/

    events/

    utils/

    app.ts

    server.ts
```

---

# Route Structure

```text
routes/

    auth.routes.ts

    users.routes.ts

    dashboard.routes.ts

    oracle.routes.ts

    leaderboard.routes.ts

    analytics.routes.ts

    goals.routes.ts

    profile.routes.ts

    settings.routes.ts

    admin.routes.ts
```

---

# Controllers

One controller per resource.

Examples

- AuthController
- UserController
- GoalController
- OracleController

Controllers should only:

- Validate request
- Call service
- Return response

Business logic belongs in services.

---

# Services

Contain business logic.

Examples

- GoalService
- OracleService
- RankService
- AnalyticsService

Services must never contain HTTP-specific code.

---

# Repositories

Responsible for database access only.

Examples

- UserRepository
- GoalRepository
- RankRepository

Repositories never contain business rules.

---

# AI Service

```text
ai/

app/

    api/

    core/

    models/

    prompts/

    pipelines/

    services/

    utils/

tests/

requirements.txt

main.py
```

---

# Prompt Structure

```text
prompts/

    oracle/

    analytics/

    recommendations/

    ranking/

    summaries/
```

---

# Packages

Reusable shared code.

```text
packages/

    ui/

    config/

    types/

    eslint-config/

    tsconfig/
```

---

# Documentation

```text
docs/

architecture/

assets/

decisions/

design/

handbook/

product/
```

---

# Tests

```text
tests/

unit/

integration/

e2e/

fixtures/

mocks/
```

---

# Docker

```text
docker/

client/

server/

ai/

postgres/

nginx/
```

---

# Scripts

```text
scripts/

setup/

database/

deployment/

maintenance/
```

---

# Assets

```text
assets/

branding/

icons/

images/

illustrations/

logos/
```

---

# Naming Conventions

Folders

kebab-case

Files

kebab-case

React Components

PascalCase

Variables

camelCase

Types

PascalCase

Constants

UPPER_SNAKE_CASE

---

# Import Rules

Prefer

Feature → Shared

Avoid

Feature → Feature

Use aliases instead of long relative imports.

Example

```ts
import { Button } from "@/components/ui";
```

---

# Dependency Direction

```
UI

↓

Features

↓

Services

↓

Repositories

↓

Database
```

Never reverse this flow.

---

# Module Ownership

Client

- UI
- State
- User Interaction

Server

- Business Logic
- APIs
- Authorization

AI

- Predictions
- Recommendations
- Intelligence

Database

- Persistence

---

# Future Expansion

Supports

- Mobile App
- Desktop App
- Enterprise Edition
- Plugins
- Microservices
- Public SDK
- Public API

without changing the repository organization.

---

# References

- system-architecture.md
- api-specification.md
- database-design.md
- ADR-002-system-architecture.md
- ADR-003-tech-stack.md
```