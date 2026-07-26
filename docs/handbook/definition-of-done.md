# R-zension Definition of Done (DoD)

> The Definition of Done (DoD) defines the minimum quality standard that every feature, bug fix, enhancement, refactor, and documentation update must satisfy before it can be considered complete and merged into the `main` branch.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Definition of Done |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

The Definition of Done ensures

- Consistent Quality
- Stable Releases
- Predictable Development
- Reduced Technical Debt
- Reliable Software

A task is **not complete** until every applicable requirement in this document has been satisfied.

---

# Guiding Principles

Done means

- Built
- Tested
- Reviewed
- Documented
- Secure
- Deployable

Partially completed work is **not done**.

---

# General Checklist

Every task must satisfy

- Functional Requirements Completed
- Acceptance Criteria Met
- Code Reviewed
- Tests Passing
- Documentation Updated
- Security Reviewed
- Performance Verified
- Accessibility Verified
- CI Pipeline Passed

---

# Functional Requirements

The implementation must

- Meet the specification
- Handle expected inputs
- Handle edge cases
- Handle error scenarios
- Produce expected outputs

No known functional defects should remain.

---

# Code Quality

The code must

- Follow Coding Standards
- Follow Project Architecture
- Be Readable
- Be Maintainable
- Avoid Duplication
- Contain No Dead Code

---

# Static Analysis

Required

- ESLint Passes
- TypeScript Passes
- No Build Errors
- No Critical Warnings

---

# Testing

Every feature requires

## Unit Tests

Business logic.

---

## Integration Tests

API interactions.

---

## End-to-End Tests

Critical user journeys.

---

# Test Requirements

All applicable tests must

- Pass
- Be Repeatable
- Run in CI

No flaky tests.

---

# Security Checklist

Verify

- Authentication
- Authorization
- Input Validation
- Output Encoding
- Rate Limiting
- Sensitive Data Protection
- Secret Management

No known security vulnerabilities may be introduced.

---

# Accessibility

UI changes must satisfy

- Keyboard Navigation
- Screen Reader Compatibility
- Visible Focus Indicators
- Sufficient Color Contrast
- Reduced Motion Support

Target

WCAG 2.2 AA

---

# Performance

Performance should remain within target budgets.

Verify

- API Response Time
- Database Queries
- Bundle Size
- Rendering Performance

No unnecessary regressions.

---

# Documentation

Update documentation when applicable

- API Specification
- Architecture Documents
- Database Design
- Feature Documentation
- User Stories
- Changelog

Code without documentation is incomplete.

---

# Database Changes

If schema changes occur

- Migration Created
- Migration Tested
- Rollback Verified
- Indexes Reviewed
- Constraints Verified

---

# API Changes

If APIs change

- OpenAPI Documentation Updated
- Request Validation Updated
- Response Schema Updated
- Error Responses Updated

Backward compatibility should be maintained whenever possible.

---

# Frontend Requirements

Verify

- Responsive Design
- Loading States
- Error States
- Empty States
- Success States

UI should remain consistent with the design system.

---

# Backend Requirements

Verify

- Validation
- Logging
- Error Handling
- Authorization
- Business Rules
- Transactions

Controllers remain thin.

Business logic belongs in services.

---

# AI Requirements

For Oracle features

Verify

- Prompt Validation
- Response Validation
- Safety Filters
- Confidence Scores
- Graceful Fallback

Oracle must never block the platform if unavailable.

---

# Logging

Ensure

- Meaningful Logs
- Error Logs
- Audit Logs (where required)

Never log

- Passwords
- Tokens
- Secrets
- Personally Sensitive Data

---

# Monitoring

If applicable

- Metrics Added
- Alerts Updated
- Dashboards Updated

---

# Deployment

Deployment requirements

- Builds Successfully
- Docker Image Builds
- Environment Variables Verified
- Database Migration Ready

Deployment must be repeatable.

---

# Pull Request Requirements

Every Pull Request must include

- Clear Description
- Linked Issue
- Screenshots (UI Changes)
- Testing Summary
- Reviewer Approval

---

# Code Review

Before merge

- At Least One Approval
- All Comments Addressed
- CI Passed
- Merge Conflicts Resolved

---

# Release Readiness

A feature is release-ready when

- Feature Flag Configured (if applicable)
- Documentation Complete
- Monitoring Available
- Rollback Strategy Defined

---

# Post-Merge Verification

After merge

- Deployment Successful
- Smoke Tests Pass
- Logs Healthy
- Metrics Healthy
- No Critical Errors

---

# Not Done If

The task is **not done** if

- Tests Fail
- CI Fails
- Documentation Missing
- Security Review Incomplete
- Accessibility Broken
- Performance Regressed
- Review Pending
- Acceptance Criteria Incomplete

---

# Done Checklist

Before marking a task complete

- Functional Requirements Complete
- Acceptance Criteria Complete
- Code Reviewed
- Tests Passing
- Documentation Updated
- Security Verified
- Performance Verified
- Accessibility Verified
- CI Passed
- Ready for Production

---

# Quality Gate

Every Pull Request must pass

| Check | Required |
|--------|----------|
| Build | ✅ |
| Lint | ✅ |
| Type Check | ✅ |
| Unit Tests | ✅ |
| Integration Tests | ✅ |
| Security Scan | ✅ |
| Documentation Review | ✅ |
| Code Review | ✅ |

No Pull Request may bypass the quality gate.

---

# Success Criteria

A completed feature should

- Work correctly
- Be understandable
- Be maintainable
- Be secure
- Be tested
- Be documented
- Be deployable

---

# References

- project-bible.md
- coding-standards.md
- git-workflow.md
- branching-strategy.md
- ADR-003-tech-stack.md
- security.md
```