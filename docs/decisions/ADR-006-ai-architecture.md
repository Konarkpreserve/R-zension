# ADR-004: AI Service Architecture

| Field | Value |
|-------|-------|
| ADR | 004 |
| Title | AI Service Architecture |
| Status | Accepted |
| Date | 2026-07-27 |
| Decision Makers | R-zension Engineering Team |

---

# Context

Artificial Intelligence is one of the primary differentiators of the R-zension platform. Unlike traditional leaderboard systems that simply display rankings, R-zension aims to provide intelligent recommendations, performance analysis, personalized insights, and future predictive capabilities.

Embedding AI directly into the backend would tightly couple business logic with machine learning functionality, making maintenance, scaling, experimentation, and future model upgrades significantly more difficult.

The platform therefore requires an architecture where AI evolves independently without disrupting the rest of the application.

---

# Decision

The AI system will be implemented as an independent service called **Oracle**, built using Python and FastAPI.

Oracle will expose REST APIs that are consumed exclusively by the Express backend.

Frontend clients must never communicate directly with Oracle.

---

# High-Level Architecture

```text
User

↓

React Frontend

↓

Express Backend

↓

Oracle AI Service (FastAPI)

↓

AI Models

↓

Response

↓

Backend

↓

Frontend
```

---

# Responsibilities

Oracle is responsible for

- Performance analysis
- Personalized recommendations
- Ranking explanations
- Goal suggestions
- AI-generated insights
- Future prediction models
- Prompt orchestration
- AI response validation

Oracle is **not** responsible for

- Authentication
- Database ownership
- User interface rendering
- Session management
- Authorization
- Business workflows unrelated to AI

---

# Communication Flow

```text
Frontend

↓

Backend

↓

Oracle

↓

AI Processing

↓

Validated Response

↓

Backend

↓

Frontend
```

The backend acts as the single gateway to Oracle.

---

# Why a Separate AI Service?

Advantages

- Independent deployment
- Independent scaling
- Easier model experimentation
- Language flexibility
- Cleaner architecture
- Better maintainability
- Faster AI iteration

---

# Technology Selection

| Layer | Technology |
|--------|------------|
| Language | Python |
| Framework | FastAPI |
| API | REST |
| Serialization | JSON |
| Documentation | OpenAPI |
| Containerization | Docker |

---

# AI Processing Pipeline

```text
Incoming Request

↓

Validate Request

↓

Build Context

↓

Generate Prompt

↓

Call AI Model

↓

Validate Response

↓

Format Output

↓

Return Result
```

---

# Oracle Modules

The Oracle service is organized into

```text
oracle/

├── api/
├── services/
├── prompts/
├── models/
├── validators/
├── adapters/
├── utils/
├── config/
└── tests/
```

Each module has a single responsibility.

---

# Prompt Management

Prompts should

- Be version controlled
- Be modular
- Be reusable
- Be documented
- Avoid duplication

Business logic must never be embedded inside prompts.

---

# Response Validation

Every AI response should be validated before returning it.

Validation includes

- JSON schema
- Required fields
- Confidence threshold
- Safety checks
- Formatting

Invalid responses should never reach the frontend.

---

# Model Abstraction

Oracle should not depend directly on one AI provider.

Instead

```text
Oracle

↓

Model Adapter

↓

AI Provider
```

This abstraction allows future migration between providers without changing business logic.

---

# Supported Capabilities

Initial capabilities

- Goal recommendations
- Performance summaries
- Leaderboard explanations
- Personalized insights

Future capabilities

- Predictive analytics
- Behavioral analysis
- Team optimization
- Intelligent notifications
- Natural language querying
- AI-generated reports

---

# Failure Handling

If Oracle becomes unavailable

Backend should

- Return graceful error messages
- Log the incident
- Continue operating non-AI features
- Avoid application-wide failures

AI failures must not prevent users from accessing core platform functionality.

---

# Performance Targets

| Metric | Target |
|---------|---------|
| Health Check | < 100 ms |
| AI Response | < 5 seconds |
| Validation | < 50 ms |
| Error Rate | < 1% |

---

# Security

Oracle must never expose

- API Keys
- Internal prompts
- User secrets
- Infrastructure details

Communication between Backend and Oracle should occur only over trusted internal networks.

---

# Monitoring

Monitor

- Response time
- Request volume
- Model usage
- Error rate
- Timeout rate
- Validation failures
- Resource utilization

---

# Logging

Log

- Request ID
- Processing time
- Selected model
- Validation result
- Error category

Never log

- API secrets
- Sensitive prompts
- Personally identifiable information
- Authentication credentials

---

# Alternatives Considered

## AI Embedded in Backend

Pros

- Simpler architecture
- Fewer services

Cons

- Tight coupling
- Difficult scaling
- Harder maintenance
- Slower experimentation

Decision

Rejected.

---

## External AI Calls from Frontend

Pros

- Fewer backend requests

Cons

- API key exposure
- Security risks
- Loss of centralized validation
- Difficult monitoring

Decision

Rejected.

---

## Independent Oracle Service

Pros

- Modular architecture
- Secure API access
- Independent deployment
- Easy provider replacement
- Better scalability

Decision

Accepted.

---

# Consequences

Positive

- Clean separation of concerns
- Independent AI evolution
- Better maintainability
- Easier experimentation
- Improved scalability

Negative

- Additional infrastructure
- Service communication overhead
- More operational monitoring

---

# Future Evolution

Oracle is designed to support

- Multiple AI providers
- Model routing
- Agent workflows
- Retrieval-Augmented Generation (RAG)
- Fine-tuned models
- Scheduled AI jobs
- Background AI processing
- Multi-model orchestration

These enhancements can be introduced without changing the frontend or backend architecture.

---

# Decision Summary

Oracle will remain an independent AI service responsible for all intelligent capabilities within R-zension. This architecture maximizes flexibility, scalability, maintainability, and long-term adaptability while keeping the core application secure and modular.

---

# Related ADRs

- ADR-001 Project Vision
- ADR-002 System Architecture
- ADR-003 Technology Stack
- ADR-005 Database Strategy
- ADR-006 API Design Principles
- ADR-007 Authentication Strategy
- ADR-008 Containerization Strategy
```