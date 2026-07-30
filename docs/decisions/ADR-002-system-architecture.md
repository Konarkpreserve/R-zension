# ADR-002: System Architecture

| Field | Value |
|-------|-------|
| ADR | 002 |
| Title | System Architecture |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension is expected to evolve from an MVP into a scalable AI-powered platform supporting multiple organizations, thousands of users, intelligent analytics, and continuous feature expansion.

The architecture must

- Support independent development
- Scale individual services
- Maintain high availability
- Be easy to maintain
- Allow future technology evolution

A tightly coupled monolithic architecture would become increasingly difficult to maintain as the project grows.

---

# Decision

R-zension will adopt a **Service-Oriented Architecture (SOA)** with clear separation of responsibilities between frontend, backend, AI services, and infrastructure.

Core services include

- React Client
- Express Backend API
- Oracle AI Service (FastAPI)
- PostgreSQL
- Redis
- Docker Infrastructure

Each service will own a specific responsibility and communicate using well-defined APIs.

---

# Architecture Overview

```text
                Users
                   │
                   ▼
        React Frontend (Vite)
                   │
          HTTPS / REST API
                   │
                   ▼
          Express Backend API
          ├───────────────┐
          │               │
          ▼               ▼
   PostgreSQL         Redis Cache
          │
          ▼
     Business Data

          ▲
          │
          ▼
 Oracle AI Service (FastAPI)
```

---

# Service Responsibilities

## React Frontend

Responsibilities

- User Interface
- Authentication Flow
- Dashboard
- Analytics
- Leaderboards
- Goal Management
- Oracle Chat Interface

Should never

- Access database directly
- Contain business logic
- Store secrets

---

## Express Backend

Responsibilities

- REST API
- Authentication
- Authorization
- Business Logic
- Validation
- Database Communication
- API Orchestration

Should never

- Execute AI models directly
- Render frontend pages

---

## Oracle AI Service

Responsibilities

- AI Recommendations
- Performance Analysis
- Prompt Processing
- Ranking Insights
- Goal Suggestions
- Future Model Integration

Runs independently from the backend.

---

## PostgreSQL

Responsibilities

- Persistent Storage
- Transactions
- Relationships
- Data Integrity

---

## Redis

Responsibilities

- Caching
- Session Storage (future)
- Frequently Accessed Data
- Rate Limiting (future)

---

# Communication Pattern

```text
Frontend

↓

Backend

↓

AI Service

↓

Response

↓

Frontend
```

Clients never communicate directly with the AI service.

---

# API Communication

Communication between services uses

- HTTPS
- REST APIs
- JSON Payloads

Future considerations

- gRPC
- Event-driven messaging
- Message queues

---

# Data Flow

Example

```text
User Requests Dashboard

↓

React

↓

Backend

↓

Database

↓

Oracle (optional)

↓

Backend

↓

React

↓

User
```

---

# Scalability Strategy

Each service should be independently scalable.

Examples

- Scale Backend only
- Scale Oracle independently
- Increase PostgreSQL resources
- Expand Redis memory

Scaling one service should not require scaling every service.

---

# Deployment Strategy

Every service runs inside its own Docker container.

Benefits

- Isolation
- Portability
- Predictable environments
- Easier deployment

---

# Security Boundaries

Frontend

- Public

Backend

- Protected API

Oracle

- Internal Service

Database

- Private Network

Redis

- Internal Network

Only the backend should communicate with internal services.

---

# Fault Isolation

If one component fails

- Frontend remains available when possible
- Backend returns graceful errors
- AI failures do not stop core application features
- Cache failures fall back to database
- Monitoring detects unhealthy services

---

# Alternatives Considered

## Monolithic Application

Pros

- Simple deployment
- Easier initial development

Cons

- Difficult scaling
- Tight coupling
- Larger deployments
- Harder maintenance

Decision

Rejected.

---

## Microservices

Pros

- Maximum scalability
- Independent deployments
- Team autonomy

Cons

- Significant operational complexity
- Distributed debugging
- Higher infrastructure costs

Decision

Deferred until future growth justifies it.

---

## Service-Oriented Architecture

Pros

- Clear separation of concerns
- Moderate complexity
- Independent AI service
- Easier maintenance
- Scalable architecture

Decision

Accepted.

---

# Consequences

Positive

- Modular codebase
- Independent deployments
- Easier maintenance
- Better scalability
- Technology flexibility

Negative

- Additional service communication
- Increased deployment complexity
- More monitoring requirements

---

# Risks

Potential risks

- Network latency
- Service failures
- API version mismatch
- Infrastructure complexity

Mitigation

- Health checks
- Monitoring
- Versioned APIs
- Retry mechanisms
- Graceful degradation

---

# Future Evolution

The architecture supports future additions including

- Notification Service
- Analytics Service
- Background Workers
- Event Queue
- File Storage Service
- WebSocket Gateway
- Kubernetes Deployment

without requiring major architectural changes.

---

# Decision Summary

The Service-Oriented Architecture provides the best balance between scalability, maintainability, operational complexity, and future extensibility for the R-zension platform.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy