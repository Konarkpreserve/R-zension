# R-zension Git Workflow

> This document defines the official Git workflow for the R-zension project. Every contributor must follow this workflow to ensure a clean commit history, reliable releases, and smooth collaboration.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Git Workflow |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

The Git workflow is designed to provide

- Predictable development
- Safe collaboration
- Stable releases
- Traceable changes
- Easy rollbacks

---

# Workflow Principles

Every change should be

- Small
- Reviewable
- Tested
- Documented
- Reversible

---

# Repository Model

R-zension follows a trunk-based development model with short-lived feature branches.

```text
main
 │
 ├──────── feature/*
 │
 ├──────── bugfix/*
 │
 ├──────── hotfix/*
 │
 ├──────── docs/*
 │
 └──────── chore/*
```

---

# Primary Branch

## main

Purpose

- Production-ready code
- Protected branch
- Always deployable

Rules

- No direct commits
- Pull Requests only
- Required approvals
- Passing CI required

---

# Branch Naming

Use

```text
type/short-description
```

Examples

```text
feature/oracle-chat

feature/user-profile

feature/goal-tracking

bugfix/login-refresh

bugfix/dashboard-loading

hotfix/api-timeout

docs/security-guide

docs/api-specification

chore/eslint-upgrade

refactor/user-service

test/auth-controller
```

---

# Creating a Feature

Start from

```bash
git checkout main

git pull origin main

git checkout -b feature/new-feature
```

---

# Development Cycle

```text
Create Branch

↓

Implement Feature

↓

Commit Changes

↓

Push Branch

↓

Open Pull Request

↓

Code Review

↓

CI Validation

↓

Merge to main
```

---

# Commit Frequency

Commit

- After every logical unit of work
- Before switching tasks
- Before large refactoring
- Before opening a Pull Request

Avoid massive commits.

---

# Commit Message Format

Format

```text
type(scope): description
```

---

## Types

- feat
- fix
- docs
- style
- refactor
- perf
- test
- chore
- build
- ci

---

## Examples

```text
feat(goals): add milestone completion

fix(auth): resolve refresh token bug

docs(api): update endpoint documentation

refactor(leaderboard): simplify ranking service

test(profile): add profile integration tests

perf(dashboard): optimize analytics queries
```

---

# Pull Request Workflow

Every Pull Request must

- Target `main`
- Pass all automated checks
- Include a clear description
- Link the related issue
- Be reviewed before merging

---

# Pull Request Template

Every PR includes

- Summary
- Motivation
- Screenshots (UI Changes)
- Testing Performed
- Breaking Changes
- Checklist

---

# Code Review Requirements

Every Pull Request requires

- At least one approval
- Passing CI pipeline
- No merge conflicts
- Documentation updates
- Test coverage maintained

Critical features may require multiple reviewers.

---

# Merge Strategy

Preferred

**Squash and Merge**

Benefits

- Clean history
- One commit per feature
- Easy rollback
- Better release notes

Avoid merge commits unless specifically required.

---

# Conflict Resolution

When conflicts occur

1. Update local `main`
2. Rebase feature branch
3. Resolve conflicts
4. Run tests
5. Push updated branch

---

# Rebasing

Preferred over merge during feature development.

Example

```bash
git checkout feature/oracle

git fetch origin

git rebase origin/main
```

---

# Protected Branch Rules

The `main` branch should enforce

- Required Pull Requests
- Required Reviews
- Required Status Checks
- Linear History
- Signed Commits (Future)
- No Force Pushes

---

# Hotfix Workflow

```text
Production Issue

↓

Create hotfix/* Branch

↓

Implement Fix

↓

Test

↓

Review

↓

Merge to main

↓

Deploy Immediately
```

---

# Release Workflow

```text
Development

↓

Pull Request

↓

Merge to main

↓

CI Pipeline

↓

Deployment

↓

Production
```

---

# Tagging

Release Tags

```text
v1.0.0

v1.1.0

v1.2.3
```

Semantic Versioning

```
MAJOR.MINOR.PATCH
```

---

# Versioning Rules

MAJOR

Breaking changes.

MINOR

New backward-compatible functionality.

PATCH

Bug fixes.

---

# Git Ignore

Never commit

- Environment Files
- Secrets
- Build Output
- Dependencies
- Logs
- Temporary Files
- IDE Configuration
- Generated Artifacts

---

# Large Files

Avoid committing

- Videos
- Datasets
- Build Artifacts
- Database Dumps

Use

- Cloud Storage
- Git LFS (if required)

---

# Rollback Strategy

Rollback by

- Git Revert
- Release Tag
- Deployment Rollback

Avoid rewriting shared history.

---

# Continuous Integration

Every push triggers

- Install Dependencies
- Lint
- Type Check
- Unit Tests
- Integration Tests
- Build Validation
- Security Scan

---

# Continuous Deployment

Deployment occurs only after

- Successful CI
- Approved Pull Request
- Merge to `main`

Production deployments should be automated.

---

# Best Practices

- Pull before starting work
- Keep branches short-lived
- Rebase frequently
- Commit often
- Write meaningful commit messages
- Delete merged branches
- Review before merging

---

# Common Mistakes

Avoid

- Direct commits to `main`
- Force pushing shared branches
- Large unrelated commits
- Skipping code review
- Ignoring failed CI
- Merging without testing

---

# Git Workflow Checklist

Before opening a Pull Request

- Branch is up to date
- Tests pass
- Lint passes
- Documentation updated
- Commit messages are clean
- No secrets committed

---

# References

- project-bible.md
- coding-standards.md
- branching-strategy.md
- definition-of-done.md
- ADR-003-tech-stack.md
```