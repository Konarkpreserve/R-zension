# Docker Setup Guide

> This document explains how Docker is used in R-zension for local development, testing, and future production deployments.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Docker Setup |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

Docker provides

- Consistent development environments
- Easy onboarding
- Isolated services
- Reproducible builds
- Simplified deployment

---

# Why Docker?

Without Docker

- Different package versions
- Different operating systems
- "Works on my machine" problems
- Manual dependency installation

With Docker

- Same environment everywhere
- Same package versions
- Easy setup
- Easy cleanup

---

# Prerequisites

Install

- Docker Desktop
- Docker Compose

Verify installation

```bash
docker --version

docker compose version
```

---

# Project Structure

```text
R-zension/

docker/
│
├── postgres/
├── redis/
├── nginx/
├── node/
└── python/

docker-compose.yml
```

---

# Services

The local development environment consists of

| Service | Purpose | Port |
|----------|----------|------|
| React | Frontend | 5173 |
| Express | Backend API | 3000 |
| Oracle (FastAPI) | AI Service | 8000 |
| PostgreSQL | Database | 5432 |
| Redis | Cache | 6379 |

---

# Docker Compose

The root contains

```text
docker-compose.yml
```

It is responsible for starting

- PostgreSQL
- Redis
- Backend
- AI Service
- Frontend

---

# Starting Containers

```bash
docker compose up -d
```

Options

| Command | Purpose |
|----------|----------|
| `docker compose up` | Start containers |
| `docker compose up -d` | Start in background |
| `docker compose down` | Stop containers |
| `docker compose restart` | Restart services |

---

# Verify Running Containers

```bash
docker ps
```

Expected containers

```text
rzension-postgres

rzension-redis

rzension-backend

rzension-ai

rzension-client
```

---

# View Logs

All services

```bash
docker compose logs
```

Specific service

```bash
docker compose logs postgres

docker compose logs backend

docker compose logs ai

docker compose logs client
```

Follow logs

```bash
docker compose logs -f backend
```

---

# Stop Containers

```bash
docker compose down
```

---

# Stop and Remove Volumes

```bash
docker compose down -v
```

Use only when resetting the local environment.

---

# Rebuild Containers

If dependencies or Dockerfiles change

```bash
docker compose up --build
```

Force rebuild

```bash
docker compose build --no-cache
```

---

# Restart a Single Service

Backend

```bash
docker compose restart backend
```

Database

```bash
docker compose restart postgres
```

---

# Execute Commands Inside Containers

Backend

```bash
docker compose exec backend sh
```

AI

```bash
docker compose exec ai bash
```

Database

```bash
docker compose exec postgres psql -U postgres
```

---

# PostgreSQL Data

Database files are stored in Docker volumes.

Benefits

- Data persists after container restart
- Easy backups
- Easy restoration

---

# Redis

Redis is used for

- Caching
- Session storage
- Background queues (future)
- Rate limiting

Redis stores temporary data.

---

# Networking

Docker automatically creates an internal network.

Services communicate using service names.

Example

```text
Backend → postgres

Backend → redis

Backend → ai
```

Avoid using localhost between containers.

---

# Environment Variables

Docker loads variables from

```text
server/.env

client/.env

ai/.env
```

Refer to

```
docs/development/02-environment-variables.md
```

---

# Images

Development images

- Node.js
- Python
- PostgreSQL
- Redis
- Nginx (future)

Use official images whenever possible.

---

# Volumes

Volumes should persist

- PostgreSQL data
- Uploaded files (future)
- Logs (optional)

Never persist

- node_modules
- Python cache
- Temporary files

---

# Health Checks

Every container should expose a health check.

Examples

Backend

```
GET /health
```

AI

```
GET /health
```

Database

```
pg_isready
```

---

# Development Workflow

```text
Pull Latest Code

↓

docker compose up -d

↓

Wait for Services

↓

Run Migrations

↓

Start Development

↓

Build Features

↓

Commit Changes

↓

docker compose down
```

---

# Updating Images

Pull latest images

```bash
docker compose pull
```

Rebuild

```bash
docker compose up --build
```

---

# Cleaning Docker

Remove stopped containers

```bash
docker container prune
```

Remove unused images

```bash
docker image prune
```

Remove unused volumes

```bash
docker volume prune
```

Remove everything unused

```bash
docker system prune
```

Force cleanup

```bash
docker system prune -a
```

Use with caution.

---

# Troubleshooting

## Port Already In Use

Find the process

Windows

```cmd
netstat -ano | findstr :5432
```

Stop the conflicting application.

---

## Docker Desktop Not Running

Start Docker Desktop.

Wait until the Docker Engine is running.

Verify

```bash
docker info
```

---

## Container Exits Immediately

Check logs

```bash
docker compose logs <service>
```

---

## Database Connection Failed

Verify

- PostgreSQL container is running
- DATABASE_URL is correct
- Credentials are correct

---

## Image Build Failed

Try

```bash
docker compose build --no-cache
```

---

# Best Practices

- Keep containers lightweight
- Use official base images
- Pin image versions
- Avoid running as root
- Keep Dockerfiles simple
- Use `.dockerignore`
- Store secrets outside images
- Rebuild only when necessary

---

# References

- local-setup.md
- environment-variables.md
- deployment.md
- backup-recovery.md
- troubleshooting.md
- system-architecture.md
- security.md
```