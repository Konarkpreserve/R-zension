# ADR-014: Event-Driven Architecture

| Field | Value |
|-------|-------|
| ADR | 014 |
| Title | Event-Driven Architecture |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension consists of multiple independent services

- React Frontend
- Express Backend
- Oracle AI
- PostgreSQL
- Redis

As the platform grows, directly coupling services through synchronous API calls increases latency, creates cascading failures, and makes new features difficult to add.

Many platform actions naturally produce events.

Examples

- User created
- Goal completed
- Score updated
- Rank changed
- Organization created
- Achievement unlocked

These events should be reusable by multiple services.

---

# Decision

R-zension will adopt an **Event-Driven Architecture (EDA)** for internal business events.

The backend remains the source of truth while publishing domain events that other services may consume.

Initially, events may be processed in-process.

The architecture should be designed so that an external message broker can be introduced without changing business logic.

---

# Architecture

```text
User Action

↓

Express Backend

↓

Business Logic

↓

Database Transaction

↓

Domain Event Published

↓

────────────────────────────────

↓

Oracle AI

Analytics

Notifications

Audit Logs

Future Services
```

---

# Objectives

The event architecture should

- Reduce service coupling
- Improve scalability
- Improve maintainability
- Enable asynchronous processing
- Support future microservices
- Simplify feature expansion

---

# Event Lifecycle

```text
Business Action

↓

Validate

↓

Commit Transaction

↓

Publish Event

↓

Subscribers Process Event

↓

Update Their Own State
```

Events should never be published before a successful database transaction.

---

# Event Types

Examples

- UserRegistered
- UserUpdated
- GoalCreated
- GoalCompleted
- GoalDeleted
- ScoreUpdated
- RankChanged
- AchievementUnlocked
- OrganizationCreated
- InvitationAccepted

Future events may be introduced without affecting existing consumers.

---

# Event Structure

Every event should contain

- Event ID
- Event Name
- Event Version
- Timestamp
- Producer
- Correlation ID
- Payload

Example

```json
{
  "eventId": "evt_7fb3a1",
  "eventName": "GoalCompleted",
  "version": "1.0",
  "timestamp": "2026-07-27T15:45:18Z",
  "producer": "backend",
  "correlationId": "REQ-91FA22",
  "payload": {
    "goalId": "...",
    "userId": "...",
    "organizationId": "..."
  }
}
```

---

# Event Naming

Events should use past-tense business language.

Examples

Correct

```text
GoalCompleted

ScoreUpdated

RankChanged
```

Incorrect

```text
UpdateScore

CalculateRank

RunLeaderboard
```

Events represent facts that have already occurred.

---

# Event Producers

Initially

- Express Backend

Future

- Oracle AI
- Notification Service
- Analytics Service

---

# Event Consumers

Initial consumers

- Oracle AI
- Cache Manager
- Audit Logger

Future consumers

- Notification Service
- Recommendation Engine
- Reporting Service
- WebSocket Gateway
- Data Warehouse

---

# Event Ordering

Ordering is guaranteed only within the same business transaction.

Consumers must not assume global ordering across unrelated events.

---

# Idempotency

Every consumer must be idempotent.

Processing the same event multiple times should produce the same final state.

Duplicate event delivery must not corrupt data.

---

# Reliability

Events should be

- Durable
- Retryable
- Traceable
- Logged

Transient failures should trigger retry mechanisms.

---

# Transaction Strategy

Database update

↓

Successful Commit

↓

Publish Event

Never publish events before transaction success.

---

# Failure Handling

If an event consumer fails

- Retry processing
- Log the failure
- Continue serving users
- Avoid blocking other consumers

Consumer failures should not affect the originating request.

---

# Event Versioning

Events should be versioned.

Example

```text
GoalCompleted v1

GoalCompleted v2
```

Consumers should remain backward compatible where possible.

---

# Security

Events should never expose

- Passwords
- Authentication tokens
- Secrets
- API keys

Sensitive fields should be removed before publication.

---

# Monitoring

Track

- Published events
- Failed events
- Processing latency
- Retry count
- Consumer failures
- Dead-letter events (future)

---

# Performance Goals

| Metric | Target |
|---------|---------|
| Event Publish | < 50 ms |
| Consumer Start | < 100 ms |
| Event Processing | < 500 ms |
| Delivery Success | > 99.9% |

---

# Event Storage

Events are operational messages, not the system of record.

Business data remains in PostgreSQL.

Future event persistence may support

- Replay
- Analytics
- Debugging
- Event sourcing experiments

---

# Alternatives Considered

## Direct Service Calls

Pros

- Simple implementation
- Easy debugging

Cons

- Tight coupling
- Cascading failures
- Difficult scaling

Decision

Rejected.

---

## Full Event Sourcing

Pros

- Complete history
- Replay capability
- Powerful analytics

Cons

- Significant complexity
- Higher storage requirements
- Increased development effort

Decision

Deferred.

---

## Event-Driven Architecture

Pros

- Loose coupling
- Independent services
- Easier scaling
- Better extensibility
- Improved resilience

Decision

Accepted.

---

# Consequences

Positive

- Better scalability
- Independent service evolution
- Easier feature addition
- Reduced coupling
- Improved reliability

Negative

- Increased architectural complexity
- Eventual consistency
- Monitoring requirements
- Retry management

---

# Future Evolution

Future enhancements include

- RabbitMQ
- Apache Kafka
- Redis Streams
- Dead Letter Queues
- Event Replay
- Event Store
- Saga Pattern
- Distributed Workflow Engine

The current architecture is intentionally designed so these technologies can be introduced with minimal changes to business logic.

---

# Decision Summary

R-zension adopts an Event-Driven Architecture for internal domain events. Business actions publish immutable events after successful database transactions, enabling loosely coupled services, asynchronous processing, and a scalable foundation for future microservice expansion.

---

# Related ADRs

- ADR-002 System Architecture
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-008 Containerization Strategy
- ADR-009 Caching Strategy
- ADR-010 Error Handling Strategy
- ADR-011 Ranking System Design
- ADR-013 Oracle AI Decision System
- System Architecture
- API Specification
- Monitoring Guide
```