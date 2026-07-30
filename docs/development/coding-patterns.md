# Coding Patterns

> This document defines the official coding patterns, architectural conventions, and implementation guidelines for the R-zension platform. It ensures that every developer writes code in a consistent, maintainable, scalable, and predictable manner.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Coding Patterns |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

This guide establishes

- Consistent architecture
- Predictable code structure
- Reusable patterns
- Scalable development
- Easier onboarding

---

# Core Principles

Every piece of code should be

- Readable
- Reusable
- Testable
- Maintainable
- Scalable

---

# Project Architecture

Use a layered architecture.

```text
Client

↓

Routes

↓

Controllers

↓

Services

↓

Repositories

↓

Database
```

Every layer has a single responsibility.

---

# Single Responsibility Principle

Each file should have one responsibility.

Good

```text
GoalService

GoalRepository

GoalController
```

Avoid

```text
GoalManager

Utils

Helper

CommonFunctions
```

---

# Folder Structure

Feature-first organization.

```text
src/

features/

    auth/

    goals/

    leaderboard/

    analytics/

    oracle/

shared/

config/

utils/
```

---

# Controllers

Controllers should

- Receive requests
- Validate input
- Call services
- Return responses

Controllers should NOT

- Access the database
- Contain business logic
- Perform calculations

---

# Services

Services contain

- Business logic
- Calculations
- Validation
- Rules
- Workflows

Services should not know HTTP details.

---

# Repositories

Repositories

- Read database
- Write database
- Execute queries

Repositories should never contain business logic.

---

# Models

Models represent

- Database entities
- Relationships
- Constraints

Models should not contain API logic.

---

# Utility Functions

Utilities should

- Be pure
- Be reusable
- Have no side effects

Examples

- Date formatting
- String helpers
- Math helpers

---

# React Components

Prefer

```text
Small

Reusable

Focused

Composable
```

Avoid

```text
1000-line components

Deep nesting

Multiple responsibilities
```

---

# Component Structure

```text
Component

↓

Props

↓

Hooks

↓

State

↓

Handlers

↓

Render
```

Maintain the same ordering in every component.

---

# Custom Hooks

Move reusable logic into hooks.

Examples

```text
useAuth()

useGoals()

useLeaderboard()

useOracle()

useAnalytics()
```

---

# State Management

Keep state

- Local when possible
- Shared only when necessary
- Minimal

Avoid duplicating state.

---

# API Layer

Never call APIs directly from components.

Preferred

```text
Component

↓

Service

↓

API Client

↓

Backend
```

---

# Error Handling

Handle errors

- Centrally
- Consistently
- Gracefully

Never ignore exceptions.

---

# Validation

Validate

- Frontend
- Backend
- Database

Never trust client input.

---

# Constants

Store reusable values in

```text
constants/
```

Examples

- Routes
- Status Codes
- Roles
- Colors
- Limits

Avoid magic values.

---

# Configuration

Configuration belongs in

```text
config/
```

Examples

- Database
- Authentication
- Environment
- Logging

---

# Environment Variables

Never hardcode

- URLs
- API Keys
- Passwords
- Secrets

Always use environment variables.

---

# Dependency Injection

Prefer passing dependencies instead of creating them internally.

Benefits

- Easier testing
- Better modularity
- Loose coupling

---

# Async Code

Use

```text
async

await
```

Avoid nested Promise chains.

Always handle failures.

---

# Database Queries

Prefer

- Parameterized queries
- Pagination
- Indexes

Avoid

- Raw SQL when unnecessary
- Duplicate queries
- N+1 queries

---

# Naming Conventions

## Variables

```text
camelCase
```

---

## Functions

```text
camelCase
```

---

## Components

```text
PascalCase
```

---

## Classes

```text
PascalCase
```

---

## Interfaces

```text
PascalCase
```

---

## Constants

```text
UPPER_SNAKE_CASE
```

---

## Files

```text
kebab-case
```

Examples

```text
goal-service.ts

goal-controller.ts

goal-card.tsx
```

---

# Boolean Variables

Use names like

```text
isLoading

isAdmin

hasPermission

canEdit
```

Avoid

```text
flag

value

status
```

---

# Function Design

Functions should

- Do one thing
- Be short
- Be descriptive
- Return predictable values

---

# Early Return

Prefer

```text
Validate

↓

Return Early

↓

Main Logic
```

Avoid deep nesting.

---

# Reusable Components

Extract repeated UI into reusable components.

Examples

```text
Button

Modal

Card

Input

Badge

Avatar
```

---

# Reusable Business Logic

Extract repeated logic into

- Services
- Hooks
- Utilities

Never duplicate business logic.

---

# Comments

Write comments only when

- Explaining complex logic
- Explaining why
- Documenting algorithms

Avoid commenting obvious code.

---

# Logging

Log

- Important events
- Errors
- Security events

Do not log

- Passwords
- Secrets
- Tokens

---

# Testing Pattern

Every feature should include

- Unit Tests
- Integration Tests

Critical flows should include

- End-to-End Tests

---

# Code Review Checklist

Review

- Naming
- Readability
- Architecture
- Performance
- Security
- Documentation
- Tests

---

# Anti-Patterns

Avoid

- God Components
- God Services
- Circular Dependencies
- Global Mutable State
- Duplicate Code
- Hardcoded Values
- Massive Functions
- Deep Nesting

---

# Refactoring Guidelines

Refactor when

- Code is duplicated
- Functions grow too large
- Responsibilities become mixed
- Readability decreases

Refactoring should not change behavior.

---

# Best Practices

- Keep files small
- Prefer composition over inheritance
- Write self-documenting code
- Follow existing patterns
- Review before committing
- Keep architecture consistent

---

# References

- coding-standards.md
- project-bible.md
- system-architecture.md
- api-specification.md
- testing-guide.md
- definition-of-done.md
- performance-guide.md