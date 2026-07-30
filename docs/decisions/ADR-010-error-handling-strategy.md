# ADR-010: Error Handling Strategy

| Field | Value |
|-------|-------|
| ADR | 010 |
| Title | Error Handling Strategy |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension consists of multiple distributed services

- React Frontend
- Express Backend
- Oracle AI Service
- PostgreSQL
- Redis

Failures can occur at every layer.

Without a standardized error handling strategy

- Users receive inconsistent messages
- Debugging becomes difficult
- Logs become unreliable
- APIs become unpredictable
- Monitoring becomes less effective

The platform requires a consistent and secure error handling approach.

---

# Decision

All services will follow a unified error handling strategy.

Every error should be

- Predictable
- Structured
- Logged
- Traceable
- Secure
- User-friendly

Internal implementation details must never be exposed to clients.

---

# Error Handling Architecture

```text
Request

↓

Validation

↓

Business Logic

↓

Exception

↓

Global Error Handler

↓

Structured Response

↓

Logging

↓

Monitoring
```

Every service should use centralized error handling.

---

# Error Categories

## Validation Errors

Examples

- Missing fields
- Invalid data
- Incorrect formats

HTTP Status

```text
400

422
```

---

## Authentication Errors

Examples

- Missing token
- Invalid token
- Expired token

HTTP Status

```text
401
```

---

## Authorization Errors

Examples

- Insufficient permissions
- Resource access denied

HTTP Status

```text
403
```

---

## Resource Errors

Examples

- User not found
- Goal not found
- Organization not found

HTTP Status

```text
404
```

---

## Conflict Errors

Examples

- Duplicate email
- Duplicate organization
- Duplicate resource

HTTP Status

```text
409
```

---

## Business Rule Errors

Examples

- Invalid workflow
- Ranking restriction
- Goal already completed

HTTP Status

```text
422
```

---

## Infrastructure Errors

Examples

- Database unavailable
- Redis unavailable
- Oracle unavailable

HTTP Status

```text
500

503
```

---

# Standard Error Response

Every API should return

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "Requested resource could not be found.",
    "requestId": "REQ-8F4A912C"
  }
}
```

---

# Error Codes

Examples

```text
VALIDATION_ERROR

AUTHENTICATION_FAILED

AUTHORIZATION_FAILED

RESOURCE_NOT_FOUND

CONFLICT

RATE_LIMIT_EXCEEDED

DATABASE_ERROR

ORACLE_ERROR

UNKNOWN_ERROR
```

Error codes should remain stable across API versions.

---

# Global Exception Handler

Every service should implement a centralized exception handler.

Responsibilities

- Catch unhandled exceptions
- Log errors
- Format responses
- Hide internal details
- Attach request identifiers

---

# Frontend Handling

Frontend should

- Display friendly messages
- Retry safe operations when appropriate
- Redirect unauthorized users
- Preserve user input when possible

Frontend should never display stack traces.

---

# Backend Handling

Backend should

- Validate requests
- Throw typed exceptions
- Log errors
- Return standardized responses

---

# Oracle Handling

Oracle should

- Validate requests
- Validate AI responses
- Handle provider failures
- Return structured errors

Unexpected model output should never reach clients directly.

---

# Database Errors

Handle

- Connection failures
- Constraint violations
- Deadlocks
- Transaction failures
- Timeout errors

Database implementation details should remain internal.

---

# Retry Strategy

Retries should be used only for transient failures.

Suitable examples

- Network timeout
- Temporary Redis outage
- Temporary Oracle timeout

Do not retry

- Validation failures
- Authentication failures
- Business rule violations

---

# Logging

Every error log should include

- Timestamp
- Request ID
- Service
- Endpoint
- Error code
- Error category
- Severity

---

# Monitoring

Track

- Error rate
- Top error categories
- Failed endpoints
- AI failures
- Database failures
- Authentication failures

---

# Security

Never expose

- Stack traces
- SQL queries
- API keys
- Internal file paths
- Secrets
- Infrastructure details

Public responses should remain generic.

---

# Severity Levels

| Severity | Description |
|----------|-------------|
| Critical | System unavailable |
| High | Major feature unavailable |
| Medium | Recoverable business error |
| Low | Minor issue with workaround |
| Info | Expected operational event |

---

# Alternatives Considered

## Local Try-Catch Everywhere

Pros

- Simple implementation

Cons

- Duplicate code
- Inconsistent responses
- Difficult maintenance

Decision

Rejected.

---

## Global Error Handling

Pros

- Consistent responses
- Centralized logging
- Easier monitoring
- Better maintainability

Decision

Accepted.

---

# Consequences

Positive

- Consistent API behavior
- Easier debugging
- Better observability
- Improved user experience
- Stronger security

Negative

- Additional implementation effort
- Requires disciplined exception design

---

# Future Evolution

Future improvements include

- Distributed tracing
- Automatic error classification
- AI-assisted root cause analysis
- Error dashboards
- Automatic incident creation
- Self-healing workflows

---

# Decision Summary

R-zension adopts a centralized, structured error handling strategy across all services. Every error is classified, logged, monitored, and returned using a standardized response format while protecting sensitive implementation details.

---

# Related ADRs

- ADR-002 System Architecture
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy
- Logging Guide
- Monitoring Guide
- Debugging Guide
- Troubleshooting Guide