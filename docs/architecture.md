# System Architecture

## 1. Architecture Overview

Embedly follows a modular, multi-tenant architecture.

High-level flow:

User
  ↓
Website
  ↓
Embedly Widget
  ↓
Embedly API
  ↓
Authentication / Tenant Validation
  ↓
Agent Runtime
  ↓
 ┌───────────────┬───────────────┬───────────────┐
 │ LLM           │ RAG           │ Memory        │
 │               │               │               │
 └───────────────┴───────────────┴───────────────┘
          ↓
        Tools
          ↓
 Permission / Approval
          ↓
 External Services

---

## 2. Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### API

- Node.js
- Express
- TypeScript

### Database

- PostgreSQL
- Prisma

### Vector Search

- pgvector

### Cache / Jobs

- Redis
- BullMQ

### AI

- LLM Provider
- Agent Runtime
- RAG
- Memory
- Tool Calling
- Evaluation

---

## 3. Core Components

### Widget

Responsible for:

- Chat UI
- Message streaming
- User interaction
- Widget configuration
- Authentication/session handling

### API

Responsible for:

- Authentication
- Authorization
- Tenant isolation
- Validation
- API endpoints
- Rate limiting
- Business logic

### Agent Runtime

Responsible for:

- Prompt construction
- Context retrieval
- RAG
- Memory
- Tool selection
- LLM interaction
- Response generation

### Knowledge Service

Responsible for:

- URL ingestion
- Document ingestion
- Parsing
- Chunking
- Embeddings
- Vector search

### Memory Service

Responsible for:

- Storing permitted memories
- Retrieving relevant memories
- Updating memories
- Deleting memories

### Tool Service

Responsible for:

- Tool registration
- Tool permissions
- Tool execution
- Tool validation
- Approval requirements

---

## 4. Security Architecture

The backend must enforce:

- Authentication
- Authorization
- Tenant isolation
- Input validation
- Permission checks
- Rate limiting
- Tool authorization
- Human approval

The AI agent must NEVER directly access the database.

The AI agent must NEVER directly execute sensitive operations.

All sensitive actions must go through backend-controlled tools.

---

## 5. Multi-Tenant Architecture

Every tenant-owned resource must be associated
with a tenant ID.

Example:

User
  ↓
Tenant
  ↓
Agent
  ↓
Knowledge
  ↓
Conversation
  ↓
Messages

Every request must validate tenant ownership.

---

## 6. Data Flow

### Normal Chat

User
→ Widget
→ API
→ Authentication
→ Tenant validation
→ Agent Runtime
→ Memory retrieval
→ RAG retrieval
→ LLM
→ Response
→ Widget

### Tool Execution

User
→ Agent
→ Tool request
→ Backend validation
→ Permission check
→ Approval if required
→ Tool execution
→ Result
→ Agent
→ User

---

## 7. Folder Structure

apps/
  dashboard/
  widget/

services/
  api/
  agent-runtime/
  knowledge/
  memory/
  tools/

packages/
  ui/
  types/
  config/
  sdk/
