# ADR-009: Caching Strategy

| Field | Value |
|-------|-------|
| ADR | 009 |
| Title | Caching Strategy |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

As R-zension grows, the platform will experience increasing read traffic from

- Leaderboards
- Dashboards
- Analytics
- Organization data
- User profiles
- AI recommendations

Serving every request directly from PostgreSQL would increase database load, reduce response speed, and limit scalability.

A caching layer is required to improve performance while maintaining data consistency.

---

# Decision

Redis will be used as the primary caching solution.

Redis is a performance optimization layer only.

PostgreSQL remains the single source of truth.

---

# Architecture

```text
User

↓

React

↓

Express Backend

↓

Redis Cache

↓

PostgreSQL

↓

Response
```

Cache is always checked before querying the database.

---

# Responsibilities

Redis is responsible for

- Frequently accessed data
- Leaderboard cache
- Dashboard cache
- Analytics cache
- Temporary calculations
- Future rate limiting
- Future session storage

Redis should never become permanent storage.

---

# Cache Flow

```text
Request

↓

Check Redis

↓

Cache Hit?

↓

Yes → Return Cached Data

↓

No

↓

Query PostgreSQL

↓

Store in Redis

↓

Return Response
```

---

# Why Redis?

Advantages

- Extremely fast
- In-memory storage
- Simple API
- Mature ecosystem
- High throughput
- Docker support

---

# Cacheable Data

Suitable for caching

- Leaderboards
- Organization details
- Dashboard summaries
- Analytics
- User preferences
- Public metadata
- Frequently accessed configuration

---

# Do Not Cache

Avoid caching

- Passwords
- JWT secrets
- API keys
- Sensitive credentials
- Frequently changing transactional data
- Personally identifiable information unless justified

---

# Cache Keys

Keys should follow a consistent naming convention.

Examples

```text
leaderboard:{organizationId}

user:{userId}

goal:{goalId}

analytics:{organizationId}

dashboard:{userId}
```

Avoid generic key names.

---

# Expiration Strategy

Use Time-To-Live (TTL).

Recommended defaults

| Data | TTL |
|------|------|
| Leaderboards | 5 Minutes |
| Dashboard | 2 Minutes |
| Analytics | 10 Minutes |
| Configuration | 1 Hour |
| Public Metadata | 24 Hours |

TTL values may change based on usage patterns.

---

# Cache Invalidation

Invalidate cache when

- Goals change
- Rankings update
- Organization data changes
- User profile changes
- Analytics recalculated

Cache invalidation should occur immediately after successful database updates.

---

# Cache Strategy

Primary strategy

```text
Cache-Aside Pattern
```

Workflow

```text
Application

↓

Check Cache

↓

Miss

↓

Database

↓

Populate Cache

↓

Return Response
```

---

# Read Operations

Sequence

```text
Redis

↓

PostgreSQL (if needed)

↓

Update Cache

↓

Return
```

---

# Write Operations

Sequence

```text
Database Update

↓

Successful Commit

↓

Invalidate Cache

↓

Return Success
```

Database updates should always occur before cache updates.

---

# Cache Consistency

The application should tolerate temporary cache staleness.

Critical business operations must always validate against PostgreSQL.

---

# Performance Goals

| Metric | Target |
|---------|---------|
| Cache Lookup | < 5 ms |
| Cache Hit Ratio | > 90% |
| Cache Miss | < 10% |
| Redis Availability | > 99.9% |

---

# Monitoring

Track

- Cache hit ratio
- Cache miss ratio
- Memory usage
- Connected clients
- Evictions
- Expired keys
- Command latency

---

# Security

Redis should

- Run on an internal network
- Require authentication (production)
- Not be publicly exposed
- Encrypt traffic where appropriate

Sensitive information should not be cached unnecessarily.

---

# Persistence

Development

Persistence optional.

Production

Persistence may be enabled depending on operational requirements.

Redis remains a cache, not a backup system.

---

# Failure Handling

If Redis becomes unavailable

Application should

- Continue serving requests
- Fall back to PostgreSQL
- Log the incident
- Monitor degraded performance

Redis failure must not make the application unavailable.

---

# Alternatives Considered

## In-Memory Application Cache

Pros

- Simple implementation

Cons

- Lost on restart
- Not shared across instances
- Difficult horizontal scaling

Decision

Rejected.

---

## Memcached

Pros

- Fast
- Lightweight

Cons

- Fewer advanced features
- No persistence options
- Smaller ecosystem

Decision

Rejected.

---

## Redis

Pros

- High performance
- Rich feature set
- Mature ecosystem
- Excellent Docker support
- Future session management
- Rate limiting support

Decision

Accepted.

---

# Consequences

Positive

- Reduced database load
- Faster API responses
- Better scalability
- Improved user experience
- Lower infrastructure pressure

Negative

- Cache invalidation complexity
- Additional infrastructure
- Potential stale data

---

# Future Evolution

Future caching enhancements include

- Distributed Redis Cluster
- Multi-level caching
- CDN integration
- Edge caching
- Intelligent cache warming
- Automatic cache eviction strategies
- AI-assisted cache optimization

---

# Decision Summary

Redis is adopted as the official caching layer for R-zension using the Cache-Aside pattern. PostgreSQL remains the authoritative data source, while Redis significantly improves read performance, scalability, and overall user experience.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-004 AI Service Architecture
- ADR-005 Database Strategy
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy
- ADR-008 Containerization Strategy
- Database Design
- Performance Guide
- Monitoring Guide
- Deployment Guide