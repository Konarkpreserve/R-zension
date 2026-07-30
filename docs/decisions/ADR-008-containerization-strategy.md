# ADR-008: Containerization Strategy

| Field | Value |
|-------|-------|
| ADR | 008 |
| Title | Containerization Strategy |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension consists of multiple independent services

- React Frontend
- Express Backend
- Oracle AI Service
- PostgreSQL
- Redis

Developers work across different operating systems, including Windows, Linux, and macOS. Running these services directly on local machines often leads to environment inconsistencies, dependency conflicts, and deployment challenges.

A standardized deployment environment is required to ensure consistent development, testing, and production operations.

---

# Decision

All services will be containerized using Docker.

Development environments will use Docker Compose to orchestrate multiple containers.

Each service will have its own Dockerfile and runtime environment.

---

# Container Architecture

```text
                 Docker Compose

        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼

   React Client   Express API   Oracle AI

        │            │            │
        └────────────┼────────────┘

               Internal Network

        ┌────────────┼────────────┐
        ▼            ▼

   PostgreSQL      Redis
```

---

# Objectives

Containerization should provide

- Environment consistency
- Easy onboarding
- Deployment portability
- Service isolation
- Dependency management
- Simplified CI/CD

---

# Services

Each service runs independently.

| Service | Container |
|----------|-----------|
| Client | React |
| Backend | Express |
| Oracle | FastAPI |
| Database | PostgreSQL |
| Cache | Redis |

---

# Docker Compose

Docker Compose is responsible for

- Starting services
- Networking
- Volumes
- Environment variables
- Service dependencies

Developers should start the platform using a single command.

---

# Networking

Containers communicate through an isolated Docker network.

Communication

```text
Client

↓

Backend

↓

Oracle

↓

PostgreSQL

↓

Redis
```

Internal services are not exposed publicly unless required.

---

# Persistent Storage

Persistent volumes are required for

- PostgreSQL
- Redis (optional)
- Uploaded assets (future)

Containers themselves should remain stateless whenever possible.

---

# Image Strategy

Each service owns its own image.

Example

```text
client

backend

oracle

postgres

redis
```

Images should be built independently.

---

# Dockerfile Principles

Each Dockerfile should

- Be minimal
- Use official base images
- Use multi-stage builds where appropriate
- Minimize image size
- Run as a non-root user whenever possible

---

# Base Images

Recommended

| Service | Base Image |
|----------|------------|
| React | Node LTS |
| Backend | Node LTS |
| Oracle | Python Slim |
| PostgreSQL | Official PostgreSQL |
| Redis | Official Redis |

---

# Build Strategy

Each service should build independently.

Pipeline

```text
Source Code

↓

Install Dependencies

↓

Run Tests

↓

Build

↓

Create Docker Image

↓

Deploy
```

---

# Environment Variables

Configuration must be injected through

- Environment variables
- Docker Compose
- Secret management (future)

Never bake secrets into images.

---

# Health Checks

Every service should expose health checks.

Examples

```text
GET /health
```

Compose should use health checks to determine service readiness.

---

# Startup Order

Recommended sequence

```text
PostgreSQL

↓

Redis

↓

Oracle

↓

Backend

↓

Frontend
```

Service startup dependencies should be declared in Docker Compose.

---

# Logging

Containers should write logs to

```text
stdout

stderr
```

Log aggregation can be added later without modifying application code.

---

# Resource Limits

Future production deployments should define

- CPU limits
- Memory limits
- Restart policies
- Health checks

Development environments may omit strict limits.

---

# Security

Containers should

- Run with least privilege
- Avoid privileged mode
- Use minimal images
- Avoid unnecessary packages
- Keep dependencies updated

---

# Image Versioning

Images should be versioned using

```text
MAJOR.MINOR.PATCH
```

Avoid relying solely on the `latest` tag in production.

---

# Volume Strategy

Persist

- Database data
- Future uploaded files

Do not persist

- Build artifacts
- Temporary caches
- Application binaries

---

# CI/CD Integration

Docker images should be built automatically during CI.

Pipeline

```text
Source

↓

Tests

↓

Docker Build

↓

Image Validation

↓

Container Registry

↓

Deployment
```

---

# Alternatives Considered

## Native Installation

Pros

- No Docker dependency

Cons

- Environment inconsistencies
- Dependency conflicts
- Difficult onboarding

Decision

Rejected.

---

## Virtual Machines

Pros

- Strong isolation

Cons

- Heavy resource usage
- Slow startup
- More maintenance

Decision

Rejected.

---

## Docker Containers

Pros

- Lightweight
- Fast startup
- Portable
- Consistent
- Excellent ecosystem

Decision

Accepted.

---

# Consequences

Positive

- Consistent environments
- Faster onboarding
- Simplified deployments
- Easier scaling
- Better CI/CD integration

Negative

- Docker learning curve
- Additional storage usage
- Image maintenance

---

# Future Evolution

Future improvements include

- Kubernetes
- Docker Swarm
- Container Registry
- Auto Scaling
- Service Mesh
- Sidecar Containers
- Infrastructure as Code

These enhancements can be adopted without redesigning the application architecture.

---

# Decision Summary

Docker is adopted as the standard containerization platform for R-zension. Docker Compose orchestrates all services during development, ensuring consistent environments, simplified deployment, and a scalable foundation for future production infrastructure.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy
- ADR-009 Caching Strategy
- Docker Setup Guide
- Deployment Guide
```