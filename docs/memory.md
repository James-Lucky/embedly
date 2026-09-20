# Project Memory

## Project

Embedly

## Last Updated

2026-09-20

## Current Phase

Phase 1 — Project Foundation

## Current Status

- Project architecture defined
- Core technology stack selected
- Multi-tenant architecture defined
- Agent runtime architecture defined
- MVP scope defined
- Security boundaries defined

---

## Completed

- Product concept finalized
- MVP scope defined
- Core architecture defined
- Technology stack selected
- AI safety boundaries defined

---

## In Progress

- Repository structure
- Database schema
- Authentication architecture

---

## Next Tasks

1. Initialize repository
2. Configure monorepo
3. Configure TypeScript
4. Configure Prisma
5. Configure PostgreSQL
6. Configure Redis
7. Implement authentication
8. Implement tenant isolation

---

## Important Decisions

### Decision 1

PostgreSQL is the primary database.

Reason:
Relational data, multi-tenancy and transactional requirements.

### Decision 2

pgvector is used for vector search.

Reason:
Allows vector search within PostgreSQL.

### Decision 3

Redis + BullMQ is used for background jobs.

Reason:
Useful for ingestion, embeddings and other asynchronous work.

### Decision 4

AI does not directly access the database.

Reason:
Security and controlled data access.

### Decision 5

Sensitive actions require backend authorization
and human approval where required.

---

## Current Architecture

Frontend:
Next.js / React / TypeScript

API:
Node.js / Express / TypeScript

Database:
PostgreSQL / Prisma

Vector:
pgvector

Cache / Jobs:
Redis / BullMQ

AI:
Agent Runtime + LLM + RAG + Memory + Tools

---

## Known Constraints

- Strict tenant isolation
- Backend authorization required
- AI cannot directly access database
- AI cannot execute arbitrary sensitive actions
- Sensitive actions require approval
- MVP uses mock ecommerce/payment integrations
- No banking/KYC in MVP
- No autonomous high-value purchases
- No voice/WhatsApp/Instagram in MVP
- No 100+ integrations in MVP

---

## Important Notes

Keep documentation synchronized with implementation.

When architecture changes:
1. Update architecture.md
2. Update relevant task
3. Record important decision here