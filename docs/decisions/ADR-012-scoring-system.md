# ADR-012: Scoring System Design

| Field | Value |
|-------|-------|
| ADR | 012 |
| Title | Scoring System Design |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

The ranking system is only as good as its scoring mechanism.

A simple point accumulation model can easily be manipulated through repetitive low-value activities, making rankings unfair and reducing user trust.

R-zension requires a scoring system that

- Rewards meaningful achievements
- Prevents score inflation
- Encourages consistency
- Supports multiple organizations
- Is configurable
- Can evolve without code changes

---

# Decision

R-zension will use a **Weighted Modular Scoring Engine**.

The scoring engine calculates a user's Overall Score from multiple weighted scoring modules.

The ranking engine consumes only the final score.

---

# Scoring Architecture

```text
User Activity

↓

Event Processor

↓

Scoring Engine

↓

Weighted Score

↓

Ranking Engine

↓

Leaderboard
```

---

# Core Principles

The scoring engine should be

- Fair
- Explainable
- Configurable
- Deterministic
- Extensible
- Tamper-resistant

---

# Score Components

The Overall Score is composed of independent scoring modules.

Initial modules

- Goal Completion
- Consistency
- Quality
- Participation
- Bonus Achievements

Future modules

- Peer Recognition
- AI Performance
- Team Contribution
- Mentor Feedback
- Learning Progress

---

# Weight Configuration

Every module has a configurable weight.

Example

| Module | Weight |
|---------|---------|
| Goal Completion | 40% |
| Consistency | 25% |
| Quality | 20% |
| Participation | 10% |
| Bonus | 5% |

Weights should be configurable through administration rather than hardcoded.

---

# Score Calculation Flow

```text
Activity

↓

Module Score

↓

Apply Weight

↓

Aggregate

↓

Normalize

↓

Final Score
```

---

# Score Normalization

The final score should be normalized to maintain consistency across organizations.

Benefits

- Easier comparisons
- Stable leaderboards
- Future algorithm changes
- Better analytics

---

# Event-Based Scoring

Scores should be updated only when meaningful events occur.

Examples

- Goal completed
- Goal updated
- Achievement unlocked
- Evaluation completed

Avoid recalculating scores unnecessarily.

---

# Anti-Abuse Measures

Prevent

- Duplicate activity
- Artificial score farming
- Automated submissions
- Repeated low-value actions

Repeated identical events should not generate unlimited points.

---

# Score Decay (Future)

Certain score components may decay over time.

Examples

- Inactivity
- Seasonal competitions
- Time-sensitive achievements

Score decay should be configurable.

---

# Bonus Points

Bonus points should be limited.

Examples

- Milestones
- Streaks
- Special events
- Community awards

Bonus points should never dominate the total score.

---

# Negative Scores

The scoring engine supports penalties.

Examples

- Rule violations
- Missed deadlines
- Invalid submissions

Penalties should be transparent and auditable.

---

# Score History

Maintain historical records

- Previous score
- New score
- Difference
- Timestamp
- Triggering event

Historical scores support analytics and AI explanations.

---

# Score Recalculation

Full recalculation should be supported.

Use cases

- Weight changes
- Algorithm updates
- Data corrections
- Bug fixes

Recalculation must produce deterministic results.

---

# Organization Configuration

Organizations may customize

- Weights
- Bonus rules
- Penalties
- Enabled modules

Core engine behavior remains identical.

---

# Explainability

Every score should be explainable.

Oracle should answer

- Why did my score increase?
- Why did my score decrease?
- Which component contributed the most?
- What should I improve?

---

# Performance Targets

| Metric | Target |
|---------|---------|
| Score Update | < 150 ms |
| Full Recalculation | < 5 min per organization |
| Score Lookup | < 50 ms |

---

# Security

Only authorized services may modify scores.

Every score modification should generate an audit record.

Manual score overrides require administrator permissions.

---

# Monitoring

Track

- Score updates
- Recalculation duration
- Failed calculations
- Average scoring latency
- Module contribution distribution

---

# Alternatives Considered

## Fixed Point System

Pros

- Easy to understand
- Simple implementation

Cons

- Difficult to customize
- Encourages score inflation
- Limited flexibility

Decision

Rejected.

---

## Machine Learning Score

Pros

- Adaptive
- Intelligent weighting

Cons

- Difficult to explain
- Complex validation
- Lower transparency

Decision

Deferred.

---

## Weighted Modular Engine

Pros

- Configurable
- Transparent
- Extensible
- Fair
- AI friendly

Decision

Accepted.

---

# Consequences

Positive

- Fair rankings
- Configurable organizations
- Better explainability
- Easier feature expansion
- Future-ready architecture

Negative

- More complex implementation
- Requires weight management
- Periodic recalibration may be necessary

---

# Future Evolution

Future enhancements include

- Dynamic weighting
- Seasonal scoring profiles
- AI-assisted weight optimization
- Organization templates
- Skill-based scoring
- Team scoring
- Reputation scoring
- Adaptive difficulty modifiers

---

# Decision Summary

R-zension adopts a weighted modular scoring engine where independent scoring modules contribute to a normalized overall score. This approach ensures fairness, configurability, explainability, and long-term scalability while keeping the ranking engine independent of scoring logic.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-009 Caching Strategy
- ADR-011 Ranking System Design
- Database Design
- Analytics Architecture
- Oracle AI Architecture