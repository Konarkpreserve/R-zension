# Debugging Guide

> This document defines the official debugging workflow for the R-zension project. It provides standardized procedures, tools, and best practices for identifying, reproducing, analyzing, and resolving issues across the frontend, backend, AI service, database, and infrastructure.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Debugging Guide |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

This guide helps developers

- Find bugs quickly
- Reduce debugging time
- Standardize troubleshooting
- Prevent recurring issues
- Improve software quality

---

# Debugging Principles

Always

- Reproduce the issue
- Understand the root cause
- Fix the cause, not the symptom
- Verify the fix
- Prevent regression

Never guess.

---

# Debugging Workflow

```text
Issue Report

↓

Reproduce

↓

Collect Information

↓

Identify Root Cause

↓

Implement Fix

↓

Test

↓

Review

↓

Deploy

↓

Monitor
```

---

# Before Debugging

Collect

- Error message
- Stack trace
- Browser
- Operating System
- Environment
- API request
- API response
- Console logs
- Server logs
- Database logs

---

# Frontend Debugging

## Browser Developer Tools

Use

- Console
- Network
- Elements
- Application
- Performance
- Memory

---

## Verify

- JavaScript errors
- Failed requests
- Missing assets
- Incorrect state
- Component rendering
- Authentication tokens

---

## Common Frontend Issues

- Blank screen
- Infinite loading
- React rendering errors
- Routing issues
- State synchronization
- CSS conflicts
- Hydration issues (future)

---

# React Debugging

Verify

- Props
- State
- Context
- Hooks
- Component hierarchy
- Re-renders

Use

- React Developer Tools

---

# Backend Debugging

Verify

- Request body
- Query parameters
- Headers
- Authentication
- Middleware
- Service logic
- Database queries
- Response object

---

# Express Debugging

Check

- Routes
- Controllers
- Services
- Middleware
- Validation
- Error handlers

---

# Database Debugging

Verify

- Connection
- Credentials
- Migrations
- Constraints
- Foreign keys
- Transactions
- Indexes

---

# PostgreSQL

Useful checks

```sql
SELECT version();
```

```sql
SELECT NOW();
```

Verify

- Active connections
- Query performance
- Locks
- Missing indexes

---

# Oracle AI Debugging

Verify

- Prompt generation
- Model selection
- Request payload
- Response schema
- Timeout
- Confidence score
- Error handling

---

# API Debugging

Check

- HTTP Method
- URL
- Headers
- JWT Token
- Request Body
- Status Code
- Response Body

Reference

```
docs/development/api-testing.md
```

---

# Authentication Debugging

Verify

- JWT validity
- Expiration
- Refresh token
- User permissions
- Session state

---

# Authorization Debugging

Verify

- User role
- Permissions
- Organization membership
- Resource ownership

---

# Docker Debugging

List containers

```bash
docker ps
```

View logs

```bash
docker compose logs
```

Follow logs

```bash
docker compose logs -f backend
```

Restart service

```bash
docker compose restart backend
```

---

# Network Debugging

Verify

- Ports
- DNS
- Firewall
- Docker networking
- CORS
- Proxy configuration

Useful command

```bash
netstat -ano
```

---

# Logging

Use logs to identify

- Request flow
- Exceptions
- Performance bottlenecks
- Unexpected behavior

Never rely solely on console output.

---

# Error Classification

## Critical

Examples

- Authentication failure
- Database corruption
- Service unavailable

Priority

Immediate

---

## High

Examples

- Broken API
- Major UI failure
- Oracle unavailable

Priority

Same day

---

## Medium

Examples

- Incorrect validation
- UI inconsistency
- Performance degradation

Priority

Current sprint

---

## Low

Examples

- Minor styling issue
- Typographical error
- Small UX improvement

Priority

Backlog

---

# Root Cause Analysis

Ask

- What failed?
- Why did it fail?
- Why was it not detected earlier?
- Could it happen again?
- How can it be prevented?

Document significant findings.

---

# Verification Checklist

After implementing a fix

- Original issue resolved
- Related features unaffected
- Tests updated
- Documentation updated
- No new warnings
- CI passes

---

# Common Problems

## Port Already In Use

Windows

```cmd
netstat -ano | findstr :3000
```

Terminate the conflicting process.

---

## Database Connection Failed

Verify

- PostgreSQL running
- Correct credentials
- Correct DATABASE_URL
- Network accessibility

---

## Docker Container Not Starting

Check

```bash
docker compose logs <service>
```

---

## CORS Error

Verify

- CORS_ORIGIN
- Allowed methods
- Allowed headers
- Frontend URL

---

## JWT Invalid

Verify

- Secret
- Expiration
- Token format
- Authorization header

---

## Build Failure

Verify

- Dependencies installed
- Environment variables
- TypeScript errors
- Lint errors

---

# Debugging Checklist

Before creating a Pull Request

- Issue reproduced
- Root cause identified
- Fix verified
- Tests passing
- Documentation updated
- Logs reviewed
- No regressions

---

# Best Practices

- Reproduce before fixing
- Use breakpoints instead of excessive logging
- Keep logs meaningful
- Remove temporary debug code
- Test edge cases
- Verify fixes in multiple environments
- Record important findings

---

# Tools

| Tool | Purpose |
|------|---------|
| Chrome DevTools | Frontend debugging |
| React DevTools | React inspection |
| VS Code Debugger | Application debugging |
| Docker Logs | Container debugging |
| PostgreSQL | Database debugging |
| Thunder Client | API debugging |
| Git | Code history |
| Jest/Vitest | Test verification |

---

# References

- testing-guide.md
- api-testing.md
- logging.md
- troubleshooting.md
- security.md
- system-architecture.md
- coding-standards.md
```