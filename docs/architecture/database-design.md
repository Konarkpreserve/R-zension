# R-zension Database Design

> This document defines the logical database design for the R-zension platform. It specifies entities, relationships, normalization rules, indexing strategy, constraints, and data integrity principles.

---

# Document Information

| Field | Value |
|--------|-------|
| Document | Database Design |
| Product | R-zension |
| Version | 1.0 |
| Status | Active |
| Owner | Engineering Team |

---

# Purpose

Design a scalable, secure, and maintainable relational database capable of supporting millions of users and future platform expansion.

---

# Database Technology

Primary Database

- PostgreSQL

Future Support

- Read Replicas
- Partitioning
- Database Sharding
- Time-Series Extensions
- Full Text Search

---

# Design Principles

- Third Normal Form (3NF)
- ACID Compliance
- Referential Integrity
- Optimized Indexing
- Soft Deletes
- UUID Primary Keys
- Auditability

---

# High-Level Entity Diagram

```text
User
 │
 ├──────── Profile
 │
 ├──────── Goals
 │          │
 │          ├──── Milestones
 │          └──── Activities
 │
 ├──────── Achievements
 │
 ├──────── Skills
 │
 ├──────── Rankings
 │
 ├──────── Notifications
 │
 ├──────── Sessions
 │
 └──────── Oracle Insights

Organization
 │
 └──────── Members

Leaderboard
 │
 └──────── Rankings
```

---

# Primary Entities

## User

Stores authentication and identity information.

Fields

- id
- email
- username
- password_hash
- role
- status
- email_verified
- created_at
- updated_at
- deleted_at

Relationships

- One Profile
- Many Goals
- Many Achievements
- Many Skills
- Many Sessions
- Many Notifications

---

## UserProfile

Stores personal information.

Fields

- id
- user_id
- first_name
- last_name
- display_name
- avatar_url
- cover_image_url
- bio
- country
- website
- github_url
- linkedin_url
- created_at
- updated_at

Relationship

One-to-One with User

---

## Goal

Stores user goals.

Fields

- id
- user_id
- title
- description
- category
- priority
- progress
- due_date
- status
- created_at
- updated_at

Relationships

- User
- Milestones
- Activities

---

## GoalMilestone

Stores milestone information.

Fields

- id
- goal_id
- title
- description
- progress
- due_date
- completed_at

---

## GoalActivity

Stores goal history.

Examples

- Created
- Updated
- Completed
- Archived

---

## Skill

Stores user skills.

Fields

- id
- user_id
- name
- category
- level
- experience_points
- last_updated

---

## Achievement

Stores badges and accomplishments.

Fields

- id
- user_id
- badge
- title
- description
- earned_at

---

## Leaderboard

Stores leaderboard metadata.

Fields

- id
- season
- category
- start_date
- end_date
- status

---

## Ranking

Stores user rankings.

Fields

- id
- leaderboard_id
- user_id
- score
- rank
- percentile
- updated_at

---

## OracleInsight

Stores AI-generated recommendations.

Fields

- id
- user_id
- type
- title
- summary
- confidence_score
- generated_at
- expires_at

---

## Notification

Stores notifications.

Fields

- id
- user_id
- title
- message
- category
- read
- created_at

---

## Organization

Stores organization information.

Fields

- id
- name
- description
- logo_url
- owner_id
- created_at

---

## OrganizationMember

Stores organization membership.

Fields

- organization_id
- user_id
- role
- joined_at

Composite Primary Key

- organization_id
- user_id

---

## Session

Stores authenticated sessions.

Fields

- id
- user_id
- device
- ip_address
- refresh_token
- expires_at
- revoked_at

---

## AuditLog

Stores immutable audit records.

Fields

- id
- actor_id
- action
- entity
- entity_id
- ip_address
- created_at

---

# Relationships

| Parent | Child | Type |
|----------|--------|------|
| User | UserProfile | One-to-One |
| User | Goal | One-to-Many |
| Goal | GoalMilestone | One-to-Many |
| Goal | GoalActivity | One-to-Many |
| User | Skill | One-to-Many |
| User | Achievement | One-to-Many |
| User | Notification | One-to-Many |
| User | Session | One-to-Many |
| User | OracleInsight | One-to-Many |
| Leaderboard | Ranking | One-to-Many |
| Organization | OrganizationMember | One-to-Many |

---

# Naming Convention

Tables

snake_case

Columns

snake_case

Primary Keys

id

Foreign Keys

entity_id

Indexes

idx_table_column

---

# Primary Keys

Every table uses

UUID

Example

```sql
id UUID PRIMARY KEY
```

---

# Foreign Keys

Example

```sql
user_id REFERENCES users(id)
```

Cascade Rules

- RESTRICT by default
- CASCADE where ownership requires deletion
- SET NULL where historical data should remain

---

# Soft Deletes

Tables supporting soft deletes include

- User
- Goal
- Achievement
- Organization

Soft delete field

```text
deleted_at TIMESTAMP NULL
```

---

# Indexing Strategy

Primary Indexes

- Primary Keys

Secondary Indexes

- email
- username
- user_id
- leaderboard_id
- goal_id
- created_at
- updated_at

Composite Indexes

- (user_id, status)
- (leaderboard_id, rank)
- (organization_id, role)

---

# Constraints

Unique

- email
- username

Not Null

- Primary Keys
- Foreign Keys
- Required Fields

Check Constraints

- progress BETWEEN 0 AND 100
- confidence_score BETWEEN 0 AND 1
- rank > 0

---

# Transactions

Use transactions for

- Goal Creation
- Goal Completion
- Ranking Updates
- Organization Membership
- Achievement Unlocking
- Oracle Processing

---

# Audit Strategy

Track

- Entity Created
- Entity Updated
- Entity Deleted
- Login
- Permission Changes
- Security Events

Audit records are immutable.

---

# Data Retention

| Data | Retention |
|------|-----------|
| User Data | Until Account Deletion |
| Sessions | 90 Days |
| Audit Logs | 7 Years |
| Notifications | 1 Year |
| Oracle Insights | 180 Days |
| Activity Logs | 2 Years |

---

# Backup Strategy

- Daily Incremental Backups
- Weekly Full Backups
- Monthly Archive Snapshots
- Point-in-Time Recovery
- Offsite Backup Storage

---

# Performance Considerations

- Proper Indexing
- Query Optimization
- Pagination
- Connection Pooling
- Materialized Views (Future)
- Read Replicas
- Partition Large Tables

---

# Security

Sensitive fields

- password_hash
- refresh_token
- ip_address

Security Measures

- Encryption at Rest
- TLS in Transit
- Least Privilege Access
- Parameterized Queries
- Row-Level Security (Future)

---

# Future Expansion

The schema supports

- Teams
- Workspaces
- Enterprise Organizations
- AI Model Versioning
- Public APIs
- Plugin Ecosystem
- Billing
- Subscription Plans
- Marketplace

without requiring major redesign.

---

# References

- system-architecture.md
- folder-structure.md
- api-specification.md
- security.md
- ADR-002-system-architecture.md
- ADR-003-tech-stack.md
```