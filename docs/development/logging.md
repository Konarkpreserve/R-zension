# Logging Guide

> This document defines the logging strategy for the R-zension platform. It establishes standards for structured logging, log levels, storage, monitoring, auditing, and security across all services.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Logging Guide |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

Logging enables us to

- Debug issues
- Monitor system health
- Trace requests
- Audit user actions
- Detect security incidents
- Analyze performance

---

# Logging Principles

Every log should be

- Meaningful
- Structured
- Searchable
- Consistent
- Secure

Logs should explain **what happened**, not just that something happened.

---

# Logging Architecture

```text
Client

↓

Backend (Express)

↓

Oracle (FastAPI)

↓

Database

↓

Log Files

↓

Log Aggregation (Future)

↓

Monitoring Dashboard
```

---

# Services That Generate Logs

| Service | Generates Logs |
|----------|----------------|
| React | Client Errors |
| Express | API Requests |
| FastAPI | AI Requests |
| PostgreSQL | Database Events |
| Redis | Cache Events |
| Docker | Container Logs |
| GitHub Actions | CI/CD Logs |

---

# Log Levels

## TRACE

Purpose

Very detailed debugging information.

Use for

- Function execution
- Variable inspection
- Development only

Production

❌ Disabled

---

## DEBUG

Purpose

Development diagnostics.

Examples

- SQL query execution
- Cache lookup
- Internal workflow

Production

⚠ Limited

---

## INFO

Purpose

Normal application events.

Examples

- User login
- Goal created
- Oracle request completed
- API started

Production

✅ Enabled

---

## WARN

Purpose

Unexpected but recoverable situations.

Examples

- Slow database query
- Retry attempt
- Deprecated API usage

Production

✅ Enabled

---

## ERROR

Purpose

Application failures.

Examples

- Database connection failure
- API exception
- Validation failure
- Service unavailable

Production

✅ Enabled

---

## FATAL

Purpose

Critical system failures.

Examples

- Application crash
- Database unavailable
- Startup failure

Production

✅ Enabled

---

# Log Format

All logs should contain

- Timestamp
- Level
- Service
- Request ID
- User ID (if available)
- Message

Example

```json
{
  "timestamp": "2026-07-27T18:30:12Z",
  "level": "INFO",
  "service": "backend",
  "requestId": "REQ-001245",
  "userId": "USR-019",
  "message": "Goal created successfully."
}
```

---

# Timestamp Standard

Use

```text
ISO 8601 (UTC)
```

Example

```text
2026-07-27T18:30:12Z
```

Never use local machine time in logs.

---

# Request ID

Every incoming request receives a unique Request ID.

Purpose

- Trace requests
- Correlate logs
- Debug distributed systems

Example

```text
REQ-8F34D91A
```

---

# Correlation ID

Future enhancement.

Used to track requests across multiple services.

Example

```text
COR-20260727-000127
```

---

# Backend Logging

Log

- Incoming requests
- Authentication
- Authorization
- Validation failures
- Database operations
- External API calls
- Errors
- Response time

---

# Frontend Logging

Log

- JavaScript exceptions
- Failed API requests
- Rendering errors
- Network failures

Do not log sensitive user information.

---

# Oracle Logging

Log

- Prompt generation
- Model selected
- Processing time
- Confidence score
- Response validation
- AI errors

Never log

- API keys
- User secrets
- Full prompts containing sensitive information

---

# Database Logging

Log

- Migration execution
- Connection failures
- Slow queries
- Deadlocks
- Transaction failures

---

# Authentication Logging

Log

- Login success
- Login failure
- Logout
- Password reset
- Token refresh
- Account lockout

---

# Security Logging

Log

- Unauthorized access
- Permission denial
- Rate limiting
- Invalid JWT
- Suspicious requests
- SQL injection attempts
- XSS attempts

---

# Audit Logging

Audit logs record important business events.

Examples

- User created
- Goal deleted
- Role changed
- Organization updated
- Administrator action

Audit logs should be immutable.

---

# Performance Logging

Measure

- API response time
- Database query time
- Oracle processing time
- Page load time

Example

```text
Request completed in 82 ms
```

---

# Error Logging

Every error log should include

- Error message
- Stack trace (development only)
- Request ID
- Endpoint
- Service
- Timestamp

Production should avoid exposing stack traces externally.

---

# Log Rotation

Rotate logs

- Daily
- Weekly (large deployments)
- By file size (future)

Archive older logs.

---

# Log Retention

| Log Type | Retention |
|-----------|-----------|
| Application Logs | 30 Days |
| Audit Logs | 1 Year |
| Security Logs | 1 Year |
| CI/CD Logs | 90 Days |

Retention periods may change based on compliance requirements.

---

# Sensitive Information

Never log

- Passwords
- JWT Secrets
- API Keys
- Refresh Tokens
- Database Passwords
- Credit Card Data
- Personal Secrets

Mask sensitive values whenever necessary.

---

# Structured Logging

Preferred

```json
{
  "level": "INFO",
  "service": "oracle",
  "message": "Recommendation generated",
  "requestId": "REQ-82B7A3",
  "durationMs": 1240
}
```

Avoid

```text
Recommendation finished.
```

---

# Monitoring Integration

Future integrations

- Grafana
- Loki
- Prometheus
- ELK Stack
- OpenTelemetry

---

# CI/CD Logging

Log

- Build status
- Test results
- Deployment status
- Security scan results
- Release version

---

# Log Review Checklist

Review logs for

- Repeated errors
- Slow endpoints
- Authentication failures
- High memory usage
- Unexpected warnings
- Security events

---

# Best Practices

- Use structured logs
- Log meaningful events
- Keep log messages concise
- Include Request IDs
- Avoid duplicate logs
- Remove debug logs before release
- Protect sensitive information

---

# References

- debugging.md
- monitoring.md
- security.md
- system-architecture.md
- api-testing.md
- troubleshooting.md