# Testing Guide

> This document defines the testing strategy, testing standards, tools, and best practices used throughout the R-zension project. Every feature must be thoroughly tested before being merged into the `main` branch.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Testing Guide |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

Testing helps us

- Prevent bugs
- Ensure reliability
- Catch regressions
- Improve code quality
- Increase deployment confidence

---

# Testing Philosophy

Every feature should be

- Testable
- Predictable
- Repeatable
- Independent

Testing is part of development, not a separate phase.

---

# Testing Pyramid

```text
                End-to-End Tests
                     ▲
             Integration Tests
                     ▲
               Unit Tests
```

We prioritize

1. Unit Tests
2. Integration Tests
3. End-to-End Tests

---

# Testing Stack

| Layer | Tool |
|--------|------|
| Frontend Unit | Vitest |
| Frontend Components | React Testing Library |
| Backend Unit | Jest |
| Backend Integration | Supertest |
| API Testing | Thunder Client / Postman |
| E2E | Playwright |
| AI Testing | Pytest |
| Coverage | Istanbul / V8 |

---

# Test Directory Structure

```text
client/
│
├── src/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/

server/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── fixtures/

ai/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── prompts/
```

---

# Types of Tests

## Unit Tests

Purpose

Test a single function or component.

Examples

- Utility functions
- React components
- Validation logic
- Service methods

Requirements

- Fast
- Independent
- No database
- No network requests

---

## Integration Tests

Purpose

Verify multiple modules work together.

Examples

- API + Database
- Authentication
- Controllers + Services
- ORM operations

---

## End-to-End Tests

Purpose

Simulate real user behavior.

Examples

- User login
- Goal creation
- Goal completion
- Dashboard loading
- Oracle recommendations

---

## API Tests

Verify

- Status codes
- Response body
- Validation
- Authentication
- Authorization
- Error handling

---

## AI Tests

Verify

- Prompt generation
- Response format
- Safety validation
- Confidence score
- Error handling
- Fallback logic

Do not depend on external AI APIs during automated testing.

---

# Test Naming

Good

```text
should create a goal successfully

should reject invalid email

should return unauthorized user

should calculate completion percentage
```

Avoid

```text
test1

goal test

login works

check api
```

---

# Test Data

Use

- Fixtures
- Factories
- Mock objects

Avoid

- Production data
- Personal information
- Hardcoded secrets

---

# Mocking

Mock

- External APIs
- Email services
- AI providers
- Payment gateways
- File storage

Do not mock

- Business logic
- Core algorithms

---

# Frontend Testing

Verify

- Rendering
- State changes
- User interaction
- Form validation
- Navigation
- Error states
- Loading states

---

# Backend Testing

Verify

- Controllers
- Services
- Middleware
- Authentication
- Authorization
- Database operations

---

# Database Testing

Use

- Test database
- Seed data
- Rollback after tests

Never run automated tests against production databases.

---

# AI Testing

Validate

- Prompt construction
- Input validation
- Output schema
- Timeout handling
- Invalid responses
- Safety filters

---

# Code Coverage

Minimum targets

| Component | Coverage |
|------------|----------|
| Utilities | 95% |
| Services | 90% |
| Controllers | 85% |
| Components | 85% |
| Overall Project | 85% |

Coverage should improve over time.

---

# Test Execution

Run all tests

Frontend

```bash
npm test
```

Backend

```bash
npm test
```

AI

```bash
pytest
```

---

# Watch Mode

Frontend

```bash
npm run test:watch
```

Backend

```bash
npm run test:watch
```

---

# Coverage Reports

Generate coverage

Frontend

```bash
npm run coverage
```

Backend

```bash
npm run coverage
```

Python

```bash
pytest --cov
```

---

# Continuous Integration

Every Pull Request automatically runs

- Unit Tests
- Integration Tests
- Lint
- Type Checking
- Build Verification

Pull Requests cannot be merged if CI fails.

---

# Test Checklist

Before submitting a Pull Request

- All tests pass
- No skipped tests
- No flaky tests
- Coverage maintained
- New functionality tested
- Edge cases covered

---

# Performance Testing

Verify

- API response time
- Database query speed
- Page load time
- Oracle response latency

---

# Security Testing

Test

- Authentication
- Authorization
- Input validation
- SQL Injection prevention
- XSS prevention
- Rate limiting

---

# Regression Testing

After every major feature

Verify

- Existing functionality still works
- Previous bugs remain fixed
- UI consistency maintained

---

# Common Mistakes

Avoid

- Testing implementation details
- Ignoring edge cases
- Shared test state
- Large test dependencies
- Slow unit tests
- Network calls in unit tests

---

# Best Practices

- Write tests with new features
- Keep tests simple
- Test behavior, not implementation
- Make tests deterministic
- Use descriptive test names
- Review tests during code review

---

# Definition of Done

A feature is not complete until

- Unit tests pass
- Integration tests pass
- E2E tests pass (if applicable)
- Coverage requirements are met
- CI pipeline passes

---

# References

- api-testing.md
- debugging.md
- coding-standards.md
- definition-of-done.md
- git-workflow.md
- security.md
```