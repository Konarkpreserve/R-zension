# R-zension Coding Standards

> This document defines the official coding standards for every codebase in the R-zension project. Every contributor is expected to follow these standards to ensure consistency, maintainability, readability, and long-term scalability.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Coding Standards |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

The primary objectives are

- Consistency
- Readability
- Maintainability
- Scalability
- Testability
- Security

Code should be understandable without requiring explanation from the original author.

---

# General Principles

Write code that is

- Simple
- Predictable
- Explicit
- Modular
- Reusable
- Testable

Avoid clever code.

Prefer clear code.

---

# Naming Conventions

## Files

Use

```
kebab-case
```

Examples

```
user-profile.tsx

goal-service.ts

leaderboard-card.tsx
```

---

## Folders

Use

```
kebab-case
```

---

## React Components

Use

```
PascalCase
```

Example

```tsx
UserProfileCard
```

---

## Variables

Use

```
camelCase
```

Example

```ts
const currentUser
```

---

## Functions

Use

```
camelCase
```

Examples

```ts
calculateScore()

fetchLeaderboard()

generateOracleInsight()
```

---

## Interfaces

Use

```
PascalCase
```

Example

```ts
interface UserProfile
```

---

## Types

Use

```
PascalCase
```

---

## Enums

Use

```
PascalCase
```

Example

```ts
enum GoalStatus
```

---

## Constants

Use

```
UPPER_SNAKE_CASE
```

Example

```ts
MAX_LOGIN_ATTEMPTS
```

---

# File Organization

Every file should follow

```text
Imports

Constants

Types

Interfaces

Component / Class

Helper Functions

Exports
```

---

# Import Order

1. External Packages

2. Internal Aliases

3. Relative Imports

4. Styles

Example

```ts
import React from "react";

import { Button } from "@/components/ui";

import { formatDate } from "./utils";

import "./styles.css";
```

---

# React Standards

Components should

- Be small
- Have one responsibility
- Prefer composition
- Use hooks
- Avoid unnecessary state

Prefer functional components.

---

# Component Size

Recommended

```
< 250 lines
```

Preferred

```
< 150 lines
```

Split larger components.

---

# Hooks

Custom hooks begin with

```
use
```

Example

```ts
useLeaderboard()

useOracle()

useGoals()
```

---

# State Management

Use

- Local State
- Zustand
- TanStack Query

Avoid unnecessary global state.

---

# TypeScript Rules

Always

- Enable strict mode
- Avoid `any`
- Use explicit types where beneficial
- Prefer interfaces for object contracts
- Use type aliases for unions

---

# Function Design

Functions should

- Perform one task
- Return early
- Avoid deep nesting
- Have descriptive names

Preferred

```ts
function calculateProgress() {}
```

Avoid

```ts
function processEverything() {}
```

---

# Error Handling

Always

- Catch expected errors
- Return meaningful messages
- Log unexpected failures

Never ignore errors silently.

---

# Async Code

Use

```ts
async / await
```

Avoid

Nested Promise chains.

---

# Comments

Write comments only when necessary.

Good comments explain

- Why

Avoid comments that explain

- What

The code should explain itself.

---

# Magic Values

Avoid

```ts
if (score > 93)
```

Prefer

```ts
const PASSING_SCORE = 93;
```

---

# Logging

Log

- Errors
- Warnings
- Important events

Never log

- Passwords
- Tokens
- Secrets
- Personal information

---

# Security

Never

- Trust client input
- Store secrets in code
- Disable validation

Always

- Validate input
- Escape output
- Use parameterized queries

---

# API Standards

Controllers should

- Validate
- Authenticate
- Authorize
- Delegate to services

Business logic belongs in services.

---

# Database Rules

Repositories

- Access database
- Return entities
- No business logic

Services

- Apply business rules
- Coordinate repositories

---

# Testing

Every feature should include

- Unit Tests
- Integration Tests

Critical flows should include

- End-to-End Tests

---

# Code Review Checklist

Review for

- Correctness
- Readability
- Performance
- Security
- Accessibility
- Test Coverage
- Documentation

---

# Formatting

Use

- ESLint
- Prettier

Formatting is automated.

Manual formatting should not be required.

---

# Git Commit Messages

Format

```
type(scope): description
```

Examples

```
feat(goals): add milestone tracking

fix(auth): refresh token validation

docs(api): update authentication endpoints

refactor(profile): simplify avatar upload
```

---

# Pull Request Standards

Every pull request should include

- Clear title
- Description
- Screenshots (UI Changes)
- Linked Issue
- Test Results

---

# Performance

Optimize for

- Readability first
- Performance second

Do not optimize prematurely.

Measure before optimizing.

---

# Accessibility

UI changes must support

- Keyboard Navigation
- Screen Readers
- Focus Visibility
- WCAG AA Compliance

---

# Definition of Clean Code

Clean code is

- Easy to read
- Easy to modify
- Easy to test
- Easy to review
- Easy to delete

If deleting code is difficult, the design should be reconsidered.

---

# Non-Negotiable Rules

Never

- Commit secrets
- Use `any` without justification
- Ignore lint errors
- Merge failing tests
- Skip code reviews
- Disable security checks

---

# References

- project-bible.md
- definition-of-done.md
- git-workflow.md
- branching-strategy.md
- ADR-003-tech-stack.md
```