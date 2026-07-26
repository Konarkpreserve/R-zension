# R-zension Branching Strategy

> This document defines the official branching strategy for the R-zension repository. The objective is to maintain a clean, predictable, and scalable Git history while enabling rapid development and safe deployments.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Branching Strategy |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

The branching strategy exists to

- Protect production
- Enable parallel development
- Simplify collaboration
- Reduce merge conflicts
- Maintain deployment stability

---

# Guiding Principles

Branches should be

- Short-lived
- Focused
- Easy to review
- Easy to merge
- Easy to delete

No branch should exist indefinitely.

---

# Branch Hierarchy

```text
main
│
├── feature/*
├── bugfix/*
├── hotfix/*
├── docs/*
├── refactor/*
├── test/*
├── chore/*
├── ci/*
└── release/* (Future)
```

---

# Main Branch

Branch

```text
main
```

Purpose

- Production-ready code
- Stable releases
- Deployment source

Rules

- Protected
- No force pushes
- No direct commits
- Pull Requests only

---

# Feature Branches

Naming

```text
feature/<feature-name>
```

Examples

```text
feature/auth-system

feature/dashboard

feature/oracle-chat

feature/goal-management

feature/analytics
```

Purpose

Develop new functionality.

---

# Bug Fix Branches

Naming

```text
bugfix/<issue-name>
```

Examples

```text
bugfix/login-loop

bugfix/profile-loading

bugfix/api-timeout
```

Purpose

Resolve non-critical defects.

---

# Hotfix Branches

Naming

```text
hotfix/<issue-name>
```

Examples

```text
hotfix/security-patch

hotfix/payment-failure

hotfix/auth-crash
```

Purpose

Resolve production-critical issues.

Hotfixes receive the highest deployment priority.

---

# Documentation Branches

Naming

```text
docs/<document-name>
```

Examples

```text
docs/api

docs/security

docs/design-system
```

Purpose

Documentation updates only.

---

# Refactor Branches

Naming

```text
refactor/<module>
```

Examples

```text
refactor/auth-service

refactor/dashboard

refactor/database
```

Purpose

Improve internal implementation without changing behavior.

---

# Test Branches

Naming

```text
test/<module>
```

Examples

```text
test/auth

test/profile

test/goals
```

Purpose

Testing improvements.

---

# Chore Branches

Naming

```text
chore/<task>
```

Examples

```text
chore/eslint

chore/docker

chore/dependencies
```

Purpose

Maintenance tasks.

---

# CI Branches

Naming

```text
ci/<task>
```

Examples

```text
ci/github-actions

ci/docker-build

ci/security-scan
```

Purpose

Continuous Integration updates.

---

# Future Release Branches

Reserved

```text
release/v1.0

release/v2.0
```

Purpose

Release stabilization.

Currently not used.

---

# Branch Lifecycle

```text
Create Branch

↓

Develop

↓

Commit

↓

Push

↓

Pull Request

↓

Review

↓

Merge

↓

Delete Branch
```

---

# Branch Lifetime

Recommended

| Branch Type | Lifetime |
|--------------|----------|
| Feature | 1–7 Days |
| Bug Fix | 1–3 Days |
| Hotfix | Same Day |
| Documentation | 1–3 Days |
| Refactor | 2–7 Days |

Branches should be merged as soon as practical.

---

# Synchronization

Feature branches should regularly synchronize with `main`.

Preferred

```bash
git fetch origin

git rebase origin/main
```

Avoid long-running branches.

---

# Merge Policy

Allowed

```
feature/* → main

bugfix/* → main

hotfix/* → main

docs/* → main

refactor/* → main

test/* → main

chore/* → main

ci/* → main
```

Direct merges between feature branches are discouraged.

---

# Branch Protection

Protected Branches

- main

Protection Rules

- Pull Request Required
- CI Required
- Review Required
- Linear History
- No Force Push
- No Branch Deletion

---

# Ownership

Every branch should have

- Author
- Reviewer
- Linked Issue

Abandoned branches should be deleted.

---

# Pull Request Requirements

Every branch must

- Pass CI
- Pass Tests
- Pass Lint
- Update Documentation (if required)
- Receive Approval

Only then may it be merged.

---

# Branch Naming Rules

Use

- Lowercase
- Hyphens
- Descriptive names

Good

```text
feature/user-dashboard

bugfix/session-timeout

docs/database-design
```

Avoid

```text
feature/Test

feature/newStuff

bugfix/fix

branch1

testing
```

---

# Deleting Branches

Delete immediately after merge.

Commands

```bash
git branch -d feature/dashboard

git push origin --delete feature/dashboard
```

---

# Emergency Procedure

For production incidents

```text
Production Issue

↓

Create hotfix Branch

↓

Fix

↓

Review

↓

Merge

↓

Deploy

↓

Delete Branch
```

---

# Best Practices

- One feature per branch
- One purpose per branch
- Small Pull Requests
- Frequent rebasing
- Descriptive names
- Delete merged branches
- Keep `main` deployable

---

# Common Mistakes

Avoid

- Long-lived branches
- Multiple features in one branch
- Direct commits to `main`
- Unreviewed merges
- Force pushing protected branches
- Ignoring merge conflicts

---

# Success Criteria

A healthy repository should have

- Clean Git history
- Small Pull Requests
- Fast reviews
- Few merge conflicts
- Stable `main`
- Short-lived branches

---

# References

- git-workflow.md
- coding-standards.md
- definition-of-done.md
- project-bible.md
- ADR-003-tech-stack.md
```