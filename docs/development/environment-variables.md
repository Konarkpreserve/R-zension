# Environment Variables

> This document defines every environment variable used throughout the R-zension platform. It serves as the single source of truth for configuring the application across local development, testing, staging, and production.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Environment Variables |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

Environment variables are used to

- Configure services
- Store secrets securely
- Separate environments
- Avoid hardcoded values
- Enable safe deployments

---

# Directory Structure

```text
client/
    .env

server/
    .env

ai/
    .env
```

Never commit these files.

---

# Environment Types

| Environment | Purpose |
|-------------|---------|
| Development | Local machine |
| Testing | Automated testing |
| Staging | Pre-production |
| Production | Live application |

---

# Client Environment Variables

Location

```text
client/.env
```

Example

```env
VITE_APP_NAME=R-zension

VITE_API_URL=http://localhost:3000/api

VITE_AI_API_URL=http://localhost:8000

VITE_ENVIRONMENT=development
```

---

## Variables

### VITE_APP_NAME

Application name displayed in the frontend.

Example

```env
VITE_APP_NAME=R-zension
```

---

### VITE_API_URL

Express backend API.

Example

```env
VITE_API_URL=http://localhost:3000/api
```

---

### VITE_AI_API_URL

Oracle AI service.

Example

```env
VITE_AI_API_URL=http://localhost:8000
```

---

### VITE_ENVIRONMENT

Current frontend environment.

Values

```text
development

testing

staging

production
```

---

# Server Environment Variables

Location

```text
server/.env
```

Example

```env
NODE_ENV=development

PORT=3000

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/rzension

JWT_SECRET=CHANGE_ME

JWT_EXPIRES_IN=15m

REFRESH_TOKEN_EXPIRES_IN=7d

AI_SERVICE_URL=http://localhost:8000

REDIS_URL=redis://localhost:6379

CORS_ORIGIN=http://localhost:5173
```

---

## NODE_ENV

Current runtime.

Values

```text
development

test

production
```

---

## PORT

Backend server port.

Example

```env
PORT=3000
```

---

## DATABASE_URL

PostgreSQL connection string.

Example

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/rzension
```

---

## JWT_SECRET

Secret used to sign access tokens.

Example

```env
JWT_SECRET=CHANGE_ME_TO_A_LONG_RANDOM_SECRET
```

Requirements

- Minimum 32 characters
- Random
- Never committed

---

## JWT_EXPIRES_IN

Access token lifetime.

Example

```env
JWT_EXPIRES_IN=15m
```

---

## REFRESH_TOKEN_EXPIRES_IN

Refresh token lifetime.

Example

```env
REFRESH_TOKEN_EXPIRES_IN=7d
```

---

## AI_SERVICE_URL

Oracle service endpoint.

Example

```env
AI_SERVICE_URL=http://localhost:8000
```

---

## REDIS_URL

Redis connection.

Example

```env
REDIS_URL=redis://localhost:6379
```

---

## CORS_ORIGIN

Allowed frontend origin.

Example

```env
CORS_ORIGIN=http://localhost:5173
```

---

# AI Service Environment Variables

Location

```text
ai/.env
```

Example

```env
ENVIRONMENT=development

PORT=8000

OPENAI_API_KEY=

MODEL_NAME=gpt-5.5

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/rzension

LOG_LEVEL=INFO
```

---

## ENVIRONMENT

Current AI environment.

Example

```env
ENVIRONMENT=development
```

---

## PORT

Oracle API port.

Example

```env
PORT=8000
```

---

## OPENAI_API_KEY

API key used by Oracle.

Example

```env
OPENAI_API_KEY=YOUR_KEY
```

Never expose this value.

---

## MODEL_NAME

Default AI model.

Example

```env
MODEL_NAME=gpt-5.5
```

---

## DATABASE_URL

Database connection for AI.

Example

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/rzension
```

---

## LOG_LEVEL

Logging level.

Values

```text
DEBUG

INFO

WARNING

ERROR
```

---

# Secrets

Secrets include

- JWT secrets
- API keys
- Database passwords
- OAuth credentials
- Encryption keys

Secrets must never be

- Hardcoded
- Logged
- Committed to GitHub
- Shared in screenshots

---

# .gitignore

The following files must remain ignored.

```gitignore
client/.env

server/.env

ai/.env

.env

.env.*
```

---

# Validation

Every required environment variable should be validated during application startup.

If a required value is missing

- Stop application startup
- Display a clear error message
- Do not use fallback secrets

---

# Local Development

Use local values only.

Example

```text
Frontend → localhost:5173

Backend → localhost:3000

Oracle → localhost:8000

PostgreSQL → localhost:5432

Redis → localhost:6379
```

---

# Production

Production secrets should be managed using the deployment platform.

Never

- Store production secrets in Git
- Share production credentials
- Reuse development secrets

---

# Rotation Policy

Rotate

| Secret | Frequency |
|----------|-----------|
| JWT Secret | Every major release or after compromise |
| API Keys | As required |
| Database Password | Every 90 days |
| OAuth Secrets | Every 90 days |

---

# Best Practices

- Keep `.env.example` updated
- Validate all required variables
- Use descriptive names
- Remove unused variables
- Store secrets securely
- Never commit credentials

---

# References

- local-setup.md
- docker-setup.md
- deployment.md
- security.md
- api-specification.md
```