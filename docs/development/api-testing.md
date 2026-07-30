# API Testing Guide

> This document defines the standards, tools, workflows, and best practices for testing the R-zension APIs. Every API endpoint must be tested before deployment.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | API Testing |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Backend Team |

---

# Purpose

API testing ensures

- Correct functionality
- Stable integrations
- Reliable responses
- Proper validation
- Secure endpoints

---

# Objectives

Every API should

- Return the correct response
- Validate all inputs
- Handle errors gracefully
- Be properly authenticated
- Meet performance expectations

---

# Testing Stack

| Tool | Purpose |
|------|---------|
| Thunder Client | Development Testing |
| Postman | Manual Testing |
| Supertest | Automated Integration Tests |
| Jest | Backend Testing |
| OpenAPI | API Documentation |
| Swagger UI | API Exploration |

---

# API Base URLs

Development

```text
Backend API
http://localhost:3000/api

Oracle API
http://localhost:8000
```

---

# Request Lifecycle

```text
Client

↓

API Request

↓

Authentication

↓

Validation

↓

Business Logic

↓

Database

↓

Response

↓

Client
```

---

# Response Standards

## Success

```json
{
  "success": true,
  "message": "Goal created successfully.",
  "data": {}
}
```

---

## Error

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": []
}
```

---

# Status Codes

| Code | Meaning |
|------|----------|
| 200 | OK |
| 201 | Created |
| 204 | No Content |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 409 | Conflict |
| 422 | Validation Error |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# API Categories

Test every endpoint under

- Authentication
- Users
- Goals
- Milestones
- Analytics
- Oracle
- Leaderboards
- Organizations
- Notifications
- Admin

---

# Authentication Testing

Verify

- Registration
- Login
- Logout
- Refresh Token
- Invalid Credentials
- Expired Token
- Missing Token
- Revoked Token

---

# Authorization Testing

Verify

- User permissions
- Organization permissions
- Admin permissions
- Forbidden routes
- Resource ownership

---

# Validation Testing

Every endpoint should validate

- Required fields
- Invalid data types
- Invalid formats
- Empty values
- Duplicate values
- Maximum lengths
- Minimum lengths

---

# CRUD Testing

For every resource

Test

- Create
- Read
- Update
- Delete

Verify

- Correct status code
- Database update
- Response body
- Validation
- Error handling

---

# Query Parameter Testing

Verify

- Pagination
- Sorting
- Filtering
- Searching

Examples

```text
?page=1

?limit=20

?sort=name

?search=react
```

---

# Pagination Testing

Verify

- First page
- Last page
- Empty page
- Invalid page
- Large page size

---

# File Upload Testing

Future feature

Verify

- Valid file types
- Invalid file types
- Maximum file size
- Missing files
- Duplicate uploads

---

# Oracle API Testing

Verify

- Prompt validation
- Response schema
- Confidence score
- Timeout handling
- Error responses
- Fallback logic

Oracle responses should always follow the defined schema.

---

# Database Verification

After successful requests verify

- Data inserted
- Data updated
- Data deleted
- Constraints enforced
- Relationships maintained

---

# Negative Testing

Verify

- Invalid IDs
- Invalid JSON
- Missing fields
- Wrong HTTP methods
- Unauthorized access
- Invalid headers

---

# Performance Testing

Measure

- Average response time
- Slowest endpoint
- Database latency
- AI latency

Targets

| Endpoint Type | Target |
|--------------|---------|
| Standard API | <200 ms |
| Database Query | <100 ms |
| Oracle API | <5 seconds |

---

# Security Testing

Verify

- JWT validation
- Expired tokens
- Token tampering
- SQL Injection protection
- XSS protection
- Rate limiting
- CORS policy

---

# Rate Limiting

Verify

- Normal usage
- Burst requests
- Limit exceeded
- Retry behavior

Expected response

```text
429 Too Many Requests
```

---

# Error Handling

Every endpoint should

- Return structured errors
- Never expose stack traces
- Never leak internal information
- Provide meaningful messages

---

# Automated Testing

Integration tests should cover

- Authentication
- CRUD operations
- Database interactions
- Authorization
- Validation

Executed automatically in CI.

---

# Manual Testing Checklist

Before release

- All endpoints tested
- Authentication verified
- Authorization verified
- Validation verified
- Error handling verified
- Documentation updated

---

# API Versioning

Current

```text
/api/v1
```

Future versions

```text
/api/v2

/api/v3
```

Older versions should remain supported during migration.

---

# API Documentation

Every endpoint must include

- Description
- Method
- URL
- Request body
- Parameters
- Response examples
- Error responses

Reference

```
docs/architecture/api-specification.md
```

---

# Common Mistakes

Avoid

- Returning inconsistent response formats
- Missing validation
- Exposing internal errors
- Ignoring edge cases
- Missing authorization checks
- Not testing negative scenarios

---

# Best Practices

- Test every endpoint before merging
- Automate integration tests
- Keep responses consistent
- Validate all inputs
- Test failure scenarios
- Document API changes

---

# References

- api-specification.md
- testing-guide.md
- debugging.md
- security.md
- definition-of-done.md
- system-architecture.md