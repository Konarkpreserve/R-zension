# R-zension API Specification

> This document defines the official REST API standards, conventions, endpoint structure, request/response formats, authentication mechanisms, versioning strategy, and error handling guidelines for the R-zension platform.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | API Specification |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Backend Engineering Team |

---

# Purpose

Provide a standardized API design that is:

- Consistent
- Predictable
- Secure
- Versioned
- Well Documented
- Easy to Consume

---

# API Architecture

Style

REST API

Protocol

HTTPS Only

Encoding

UTF-8

Content Type

```http
Content-Type: application/json
```

---

# Base URL

Development

```text
http://localhost:3000/api/v1
```

Staging

```text
https://staging-api.r-zension.com/api/v1
```

Production

```text
https://api.r-zension.com/api/v1
```

---

# API Versioning

Current Version

```
v1
```

Future

```
v2
v3
```

Versioning Strategy

URI Versioning

Example

```text
/api/v1/users
```

---

# Resource Naming

Use plural nouns.

Examples

```
/users
/goals
/leaderboards
/analytics
/notifications
```

Avoid

```
/getUsers
/createGoal
/deleteUser
```

---

# HTTP Methods

| Method | Purpose |
|---------|----------|
| GET | Retrieve |
| POST | Create |
| PATCH | Partial Update |
| PUT | Full Replacement |
| DELETE | Delete |

---

# Authentication

Authentication Method

JWT Access Token

Header

```http
Authorization: Bearer <token>
```

Refresh Token

Stored securely using HTTP-only cookies.

---

# Authorization

Role-Based Access Control

Roles

- User
- Recruiter
- Organization
- Moderator
- Administrator
- Super Administrator

Authorization is enforced on every protected endpoint.

---

# Standard Response Format

## Success

```json
{
  "success": true,
  "message": "Request completed successfully.",
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Requested resource could not be found."
  }
}
```

---

# HTTP Status Codes

| Code | Meaning |
|------|----------|
| 200 | OK |
| 201 | Created |
| 202 | Accepted |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Failed |
| 429 | Too Many Requests |
| 500 | Internal Server Error |
| 503 | Service Unavailable |

---

# Pagination

Query Parameters

```text
?page=1&limit=20
```

Response

```json
{
  "success": true,
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 20,
    "totalItems": 250,
    "totalPages": 13,
    "hasNext": true,
    "hasPrevious": false
  }
}
```

---

# Filtering

Examples

```text
/users?role=user

/goals?status=active

/leaderboards?season=current
```

---

# Sorting

Ascending

```text
?sort=name
```

Descending

```text
?sort=-createdAt
```

Multiple

```text
?sort=priority,-createdAt
```

---

# Searching

Example

```text
/users?search=konark
```

Supports

- Partial Match
- Case Insensitive
- Full Text Search (Future)

---

# Common Headers

Request

```http
Authorization

Content-Type

Accept

User-Agent
```

Response

```http
Content-Type

Cache-Control

ETag

X-Request-ID
```

---

# Rate Limiting

Default

```
100 requests/minute
```

Authentication

```
20 requests/minute
```

AI Endpoints

```
30 requests/minute
```

Response

```http
429 Too Many Requests
```

---

# Authentication Endpoints

| Method | Endpoint |
|---------|----------|
| POST | /auth/register |
| POST | /auth/login |
| POST | /auth/logout |
| POST | /auth/refresh |
| POST | /auth/forgot-password |
| POST | /auth/reset-password |
| GET | /auth/me |

---

# User Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /users/me |
| GET | /users/{id} |
| PATCH | /users/profile |
| DELETE | /users/me |

---

# Goal Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /goals |
| POST | /goals |
| GET | /goals/{id} |
| PATCH | /goals/{id} |
| DELETE | /goals/{id} |
| POST | /goals/{id}/complete |

---

# Milestone Endpoints

| Method | Endpoint |
|---------|----------|
| POST | /goals/{id}/milestones |
| PATCH | /milestones/{id} |
| DELETE | /milestones/{id} |

---

# Analytics Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /analytics |
| GET | /analytics/progress |
| GET | /analytics/streaks |
| GET | /analytics/skills |

---

# Leaderboard Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /leaderboards |
| GET | /leaderboards/{id} |
| GET | /leaderboards/current |

---

# Oracle Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /oracle/recommendations |
| GET | /oracle/insights |
| POST | /oracle/analyze |
| GET | /oracle/history |

---

# Achievement Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /achievements |
| GET | /achievements/{id} |

---

# Notification Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /notifications |
| PATCH | /notifications/{id}/read |
| PATCH | /notifications/read-all |

---

# Organization Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /organizations |
| POST | /organizations |
| PATCH | /organizations/{id} |
| DELETE | /organizations/{id} |

---

# Admin Endpoints

| Method | Endpoint |
|---------|----------|
| GET | /admin/dashboard |
| GET | /admin/users |
| PATCH | /admin/users/{id} |
| GET | /admin/system |
| GET | /admin/logs |
| POST | /admin/oracle/refresh |

---

# Validation

Validation occurs

- Before Controller Execution
- Using Request Schemas
- Before Business Logic

Validation Errors

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "fields": {
      "email": "Invalid email address",
      "password": "Password is required"
    }
  }
}
```

---

# Idempotency

Safe Methods

- GET
- PUT
- DELETE

POST endpoints may support idempotency keys for operations such as payment or subscription features in future releases.

---

# Security

API Security Includes

- HTTPS Only
- JWT Authentication
- Refresh Tokens
- CORS
- CSRF Protection
- Rate Limiting
- Input Validation
- SQL Injection Prevention
- XSS Protection

---

# Logging

Log

- Request ID
- Endpoint
- Method
- User ID
- Status Code
- Response Time
- Error Details

Sensitive information must never be logged.

---

# API Documentation

Documentation Standard

OpenAPI 3.1

Interactive Documentation

- Swagger UI
- ReDoc

Generated automatically from source annotations.

---

# Deprecation Policy

Deprecated endpoints remain supported for at least one major release.

Responses include

```http
Deprecation: true
Sunset: 2028-01-01
```

Migration guides are provided before removal.

---

# Performance Targets

| Metric | Target |
|---------|--------|
| Average Response | < 200 ms |
| Authentication | < 300 ms |
| Database Query | < 100 ms |
| Oracle Request | < 3 s |
| Uptime | 99.9% |

---

# API Design Principles

- RESTful
- Resource-Oriented
- Stateless
- Versioned
- Predictable
- Consistent
- Secure by Default
- Backward Compatible
- Developer Friendly

---

# Future Expansion

The API architecture supports

- GraphQL Gateway
- WebSocket Events
- Public Developer API
- Mobile Applications
- SDK Generation
- Third-Party Integrations
- Plugin Ecosystem

without breaking existing clients.

---

# References

- system-architecture.md
- database-design.md
- folder-structure.md
- security.md
- ADR-002-system-architecture.md
- ADR-003-tech-stack.md
- vision.md