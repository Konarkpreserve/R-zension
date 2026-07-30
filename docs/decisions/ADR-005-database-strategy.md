# ADR-005: Database Strategy

| Field | Value |
|-------|-------|
| ADR | 005 |
| Title | Database Strategy |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

R-zension stores highly relational data including

- Users
- Organizations
- Goals
- Leaderboards
- Rankings
- Analytics
- Permissions
- AI Insights
- Audit Logs

The database must ensure

- Strong consistency
- High reliability
- Data integrity
- Excellent query performance
- Future scalability

The project also requires transactional operations, complex joins, reporting queries, and future analytical workloads.

---

# Decision

PostgreSQL is selected as the primary database for R-zension.

Redis will complement PostgreSQL as the caching layer but will not replace persistent storage.

---

# Database Architecture

```text
             React

               │

               ▼

        Express Backend

         │          │

         ▼          ▼

   PostgreSQL     Redis

         │

         ▼

 Persistent Storage
```

---

# Responsibilities

## PostgreSQL

Responsible for

- User accounts
- Organizations
- Authentication data
- Goals
- Leaderboards
- Rankings
- Analytics
- Audit logs
- AI history
- Relationships

---

## Redis

Responsible for

- Cache
- Frequently accessed data
- Session storage (future)
- Rate limiting (future)
- Temporary values

Redis is never the source of truth.

---

# Why PostgreSQL?

Advantages

- ACID compliance
- Excellent relational model
- Advanced indexing
- JSON support
- Strong SQL capabilities
- Mature ecosystem
- Excellent performance
- Long-term reliability

---

# Why Not MongoDB?

Pros

- Flexible schema
- Easy horizontal scaling

Cons

- Weaker relational modeling
- More difficult reporting
- Less suitable for leaderboard relationships
- Increased data duplication

Decision

Rejected.

---

# Why Not MySQL?

Pros

- Popular
- Reliable

Cons

- Fewer advanced SQL capabilities
- Less flexibility for future analytics

Decision

Rejected.

---

# Data Modeling Principles

The schema should be

- Normalized
- Consistent
- Extensible
- Well indexed
- Easy to understand

Avoid unnecessary denormalization.

---

# Entity Relationships

Primary entities

```text
Organization

↓

Users

↓

Goals

↓

Leaderboard Entries

↓

Analytics

↓

AI Insights
```

---

# Database Ownership

The backend exclusively owns database access.

Neither

- React
- Oracle AI

should communicate directly with PostgreSQL.

---

# Transactions

Transactions should be used for

- User registration
- Goal creation
- Leaderboard updates
- Organization management
- Permission updates

Every multi-step operation must either complete successfully or roll back completely.

---

# Constraints

Use database constraints whenever appropriate.

Examples

- Primary Keys
- Foreign Keys
- Unique Constraints
- Check Constraints
- NOT NULL

Application validation alone is insufficient.

---

# Primary Keys

Every table should use

```text
UUID
```

Benefits

- Globally unique
- Better distributed systems support
- Easier data merging
- Improved security compared to sequential IDs

---

# Foreign Keys

Every relationship should enforce referential integrity.

Example

```text
Organization

↓

User

↓

Goal

↓

Leaderboard Entry
```

---

# Indexing Strategy

Create indexes for

- Foreign keys
- Frequently filtered columns
- Search fields
- Sorting columns
- Authentication lookups

Avoid unnecessary indexes that increase write costs.

---

# Query Strategy

Prefer

- Parameterized queries
- Pagination
- Explicit column selection
- Efficient joins

Avoid

- SELECT *
- Duplicate queries
- N+1 queries

---

# Soft Deletes

Business entities should use soft deletion.

Example fields

```text
deleted_at

deleted_by
```

Benefits

- Recovery
- Auditing
- Historical analysis

---

# Audit Data

Important operations should be recorded.

Examples

- User created
- Goal updated
- Permission changed
- Organization modified

Audit logs should be immutable.

---

# AI Data Storage

Store

- Request metadata
- Processing duration
- Confidence score
- Generated recommendations
- Validation result

Do not store

- API keys
- Internal prompts
- Sensitive provider credentials

---

# Data Integrity

Enforce

- Constraints
- Transactions
- Validation
- Referential integrity

The database should reject invalid data whenever possible.

---

# Backup Strategy

Support

- Daily backups
- Weekly snapshots
- Monthly archives

Recovery objectives are defined in

```text
docs/development/12-backup-recovery.md
```

---

# Performance Strategy

Optimize through

- Proper indexing
- Query optimization
- Connection pooling
- Caching
- Pagination

Measure before optimizing.

---

# Scalability Strategy

Future scaling options

- Read replicas
- Connection pooling
- Partitioning
- Archiving
- Horizontal application scaling

The initial deployment uses a single PostgreSQL instance.

---

# Security

Protect the database using

- Strong authentication
- Encrypted connections
- Principle of least privilege
- Network isolation
- Regular backups

Database credentials must never be committed to source control.

---

# Monitoring

Monitor

- Active connections
- Query latency
- Slow queries
- Storage utilization
- Lock contention
- Replication status (future)

---

# Alternatives Considered

## MongoDB

Pros

- Flexible schema
- Easy document storage

Cons

- Weak relational modeling
- Complex leaderboard relationships

Decision

Rejected.

---

## MySQL

Pros

- Stable
- Familiar

Cons

- Less advanced SQL capabilities
- Fewer analytics features

Decision

Rejected.

---

## PostgreSQL

Pros

- ACID compliance
- Advanced indexing
- JSON support
- Rich SQL
- Excellent reporting

Decision

Accepted.

---

# Consequences

Positive

- Strong consistency
- Reliable transactions
- Excellent reporting
- Mature tooling
- Future scalability

Negative

- More complex schema design
- Slightly steeper learning curve
- Requires careful indexing

---

# Future Evolution

The database architecture supports

- Read replicas
- Partitioned tables
- Materialized views
- Event sourcing
- Data warehouse integration
- Full-text search
- Time-series analytics

without requiring major architectural redesign.

---

# Decision Summary

PostgreSQL is adopted as the primary persistent datastore because it provides the reliability, transactional guarantees, relational modeling capabilities, and scalability required by R-zension. Redis complements PostgreSQL by accelerating read-heavy workloads without becoming the source of truth.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy
- ADR-008 Containerization Strategy
- ADR-009 Caching Strategy