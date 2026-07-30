# ADR-011: Ranking System Design

| Field | Value |
|-------|-------|
| ADR | 011 |
| Title | Ranking System Design |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

The ranking system is the core feature of R-zension.

Unlike traditional leaderboard applications that simply sort users by a single score, R-zension aims to provide an intelligent, explainable, fair, and extensible ranking engine capable of supporting multiple organizations and different ranking methodologies.

The system must

- Rank users fairly
- Update efficiently
- Explain rank changes
- Scale to millions of records
- Support future AI enhancements

---

# Decision

R-zension will use a **Score-Based Dynamic Ranking System**.

Each leaderboard entry will contain

- Overall Score
- Rank
- Trend
- Rank Change
- Historical Position
- AI Explanation

The ranking engine will be completely independent from the presentation layer.

---

# Ranking Architecture

```text
User Activity

↓

Score Engine

↓

Ranking Engine

↓

Leaderboard

↓

Oracle AI

↓

Frontend
```

---

# Core Principles

The ranking system should be

- Fair
- Transparent
- Deterministic
- Fast
- Explainable
- Extensible

---

# Score Calculation

A user's score is computed from multiple weighted metrics.

Examples

- Goal completion
- Task quality
- Consistency
- Performance
- Activity
- Bonus achievements

Weights should be configurable instead of hardcoded.

---

# Ranking Flow

```text
User Action

↓

Score Updated

↓

Ranking Recalculated

↓

Leaderboard Updated

↓

Analytics Updated

↓

Oracle Generates Insights
```

---

# Ranking Method

Ranking uses

```text
Descending Overall Score
```

Highest score receives Rank 1.

---

# Tie Resolution

When two users have the same score, apply tie-breakers in the following order

1. Higher consistency score
2. Higher completed goals
3. Earlier achievement timestamp
4. Lower user UUID (final deterministic fallback)

Every ranking calculation must produce identical results for identical data.

---

# Rank Types

Support

- Global Rank
- Organization Rank
- Team Rank (Future)
- Department Rank (Future)
- Seasonal Rank (Future)
- Custom Leaderboards (Future)

---

# Ranking Frequency

Initial implementation

- Real-time updates after score changes

Future optimization

- Event-driven recalculation
- Scheduled batch recomputation
- Incremental ranking

---

# Historical Rankings

Store

- Previous rank
- Previous score
- Rank movement
- Timestamp

This enables trend analysis and AI explanations.

---

# Rank Movement

Each update should calculate

- Current Rank
- Previous Rank
- Difference
- Direction

Possible values

```text
↑ Improved

↓

Declined

→ Unchanged

NEW
```

---

# Leaderboard Size

Default

```text
Top 100
```

Future

- Top 500
- Top 1000
- Unlimited with pagination

---

# Pagination

Leaderboards should support

```text
?page=1

&limit=50
```

Avoid loading every ranked user at once.

---

# Ranking Consistency

Ranking calculations should always be

- Repeatable
- Deterministic
- Independent of request timing

---

# AI Integration

Oracle should explain

- Why rank changed
- What improved
- What decreased
- Recommended next actions
- Predicted future rank

AI never determines the official score.

AI only explains the results.

---

# Performance Goals

| Metric | Target |
|---------|---------|
| Rank Lookup | < 100 ms |
| Leaderboard Load | < 200 ms |
| Score Update | < 150 ms |
| Rank Recalculation | < 500 ms |

---

# Database Strategy

Store

- Current Rank
- Current Score
- Previous Rank
- Previous Score
- Last Updated

Historical snapshots may be stored separately for analytics.

---

# Caching Strategy

Cache

- Top leaderboards
- Frequently viewed rankings
- Organization rankings

Invalidate cache after successful ranking updates.

---

# Security

Users may view only leaderboards they are authorized to access.

Organization data must remain isolated.

Administrative ranking operations require elevated permissions.

---

# Monitoring

Track

- Ranking recalculation time
- Leaderboard load time
- Cache hit ratio
- Ranking update failures
- Average score update duration

---

# Alternatives Considered

## Simple SQL ORDER BY

Pros

- Easy implementation
- Minimal infrastructure

Cons

- Difficult historical tracking
- Limited extensibility
- No AI integration

Decision

Rejected.

---

## AVL Tree Ranking

Pros

- Fast ordered operations
- Efficient insertions
- Efficient rank queries

Cons

- Complex persistence
- Additional implementation effort
- Harder distributed synchronization

Decision

Deferred for future optimization.

---

## Score-Based Dynamic Ranking

Pros

- Simple
- Scalable
- Easy analytics
- AI friendly
- Extensible
- Works well with PostgreSQL and Redis

Decision

Accepted.

---

# Consequences

Positive

- Predictable rankings
- Explainable results
- Easy AI integration
- Scalable architecture
- Flexible scoring model

Negative

- Frequent recalculations for large datasets
- Cache invalidation complexity
- Requires careful optimization as user count grows

---

# Future Evolution

Future enhancements include

- Elo-style ranking
- Skill-based ranking
- Seasonal resets
- League and division systems
- Percentile rankings
- AI-assisted score weighting
- Event-driven ranking engine
- Distributed ranking service
- Real-time WebSocket leaderboard updates

---

# Decision Summary

R-zension adopts a dynamic score-based ranking engine that separates score computation, ranking calculation, and AI explanation into independent components. This architecture provides fairness, transparency, scalability, and flexibility while supporting future ranking models without major architectural changes.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-009 Caching Strategy
- ADR-010 Error Handling Strategy
- Database Design
- Leaderboard Screen Specification
- Oracle AI Architecture