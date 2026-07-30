# ADR-006: API Design Principles

| Field | Value |
|-------|-------|
| ADR | 006 |
| Title | API Design Principles |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension consists of multiple services that communicate through APIs.

These services include

- React Frontend
- Express Backend
- Oracle AI Service
- Future external integrations

Without standardized API design, the project would quickly suffer from

- Inconsistent endpoints
- Difficult integrations
- Poor developer experience
- Hard-to-maintain clients
- Versioning problems

The project requires APIs that are predictable, secure, scalable, and easy to document.

---

# Decision

All APIs within R-zension will follow REST architectural principles using JSON as the standard data exchange format.

Every API should be

- Consistent
- Versioned
- Secure
- Well documented
- Predictable
- Backward compatible whenever possible

---

# API Architecture

```text
Client

↓

REST API

↓

Express Backend

↓

Business Logic

↓

Database

↓

Response
```

The backend serves as the single public API layer.

---

# API Style

The platform adopts

- REST
- JSON
- HTTPS
- Stateless communication

Future technologies such as GraphQL or gRPC may be introduced only where justified.

---

# Resource Naming

Resources use plural nouns.

Examples

```text
/users

/goals

/organizations

/leaderboards

/analytics

/oracle
```

Avoid

```text
/getUsers

/createGoal

/deleteOrganization
```

---

# Endpoint Structure

Standard format

```text
/api/v1/resource
```

Examples

```text
/api/v1/users

/api/v1/goals

/api/v1/leaderboards
```

---

# Versioning Strategy

API versioning uses URL versioning.

Example

```text
/api/v1/users
```

Future

```text
/api/v2/users
```

Major breaking changes require a new API version.

---

# HTTP Methods

| Method | Purpose |
|----------|----------|
| GET | Retrieve data |
| POST | Create resource |
| PUT | Replace resource |
| PATCH | Partial update |
| DELETE | Remove resource |

Methods must follow standard HTTP semantics.

---

# Response Format

Successful responses follow a consistent structure.

```json
{
  "success": true,
  "data": {},
  "message": "Operation completed successfully."
}
```

---

# Error Format

Errors follow a common schema.

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request data."
  }
}
```

---

# HTTP Status Codes

Use standard status codes.

| Code | Meaning |
|------|----------|
| 200 | Success |
| 201 | Resource Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

Avoid inventing custom HTTP status codes.

---

# Request Validation

Every request should validate

- Body
- Query parameters
- Path parameters
- Headers
- Authentication

Invalid requests should fail before business logic executes.

---

# Authentication

Protected endpoints require

```text
Authorization: Bearer <JWT>
```

Authentication is handled by the backend.

---

# Authorization

Authorization should verify

- User identity
- Organization membership
- User role
- Resource ownership

Authentication does not imply authorization.

---

# Pagination

Collection endpoints should support

```text
?page=1

&limit=20
```

Future support

```text
&sort=

&order=

&filter=
```

---

# Filtering

Example

```text
/api/v1/goals?status=completed
```

Filtering should be optional and composable.

---

# Sorting

Example

```text
?sort=score&order=desc
```

---

# Searching

Example

```text
?search=leadership
```

Search should never replace filtering.

---

# Idempotency

Methods

| Method | Idempotent |
|---------|------------|
| GET | Yes |
| PUT | Yes |
| DELETE | Yes |
| POST | No |
| PATCH | Usually No |

Clients should understand these guarantees.

---

# API Documentation

Every endpoint should include

- Description
- Parameters
- Authentication requirements
- Example request
- Example response
- Error responses

Documentation should be generated using OpenAPI.

---

# Rate Limiting

Future implementation

Examples

- Authentication endpoints
- AI endpoints
- Public APIs

Purpose

- Prevent abuse
- Protect infrastructure
- Improve reliability

---

# Caching

Cache only

- Safe GET requests
- Public reference data
- Frequently requested information

Never cache personalized or sensitive responses without proper controls.

---

# Security Principles

Every endpoint should

- Require HTTPS
- Validate input
- Prevent injection attacks
- Protect sensitive data
- Enforce authorization

---

# Logging

Log

- Request ID
- Endpoint
- Duration
- Status code
- Error category

Never log

- Passwords
- API keys
- JWT secrets

---

# Monitoring

Track

- Request count
- Response time
- Error rate
- Latency
- Throughput

---

# Alternatives Considered

## GraphQL

Pros

- Flexible queries
- Reduced over-fetching

Cons

- Increased complexity
- Harder caching
- Steeper learning curve

Decision

Deferred.

---

## gRPC

Pros

- High performance
- Efficient serialization

Cons

- Less browser friendly
- Additional tooling

Decision

Deferred.

---

## REST

Pros

- Industry standard
- Simple
- Excellent tooling
- Easy debugging
- Wide compatibility

Decision

Accepted.

---

# Consequences

Positive

- Consistent APIs
- Better developer experience
- Easier maintenance
- Strong documentation
- Simplified integrations

Negative

- Some endpoint duplication
- More verbose than GraphQL
- Version management required

---

# Future Evolution

Potential additions

- GraphQL Gateway
- gRPC Internal APIs
- API Gateway
- WebSocket APIs
- Event-driven integrations
- Public Developer APIs

These additions should preserve existing REST contracts whenever practical.

---

# Decision Summary

R-zension adopts REST with JSON, standardized response structures, URL-based versioning, and consistent resource-oriented design. This provides a stable foundation for internal services, frontend communication, and future external integrations.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-007 Authentication Strategy
- ADR-008 Containerization Strategy
- ADR-009 Caching Strategy
- API Specification
- Security Architecture