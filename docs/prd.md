# Product Requirements Document

## 1. Product Information

Product Name:
Embedly

Product Type:
Multi-tenant, embeddable AI-agent platform for websites

Status:
MVP Development

Primary Goal:
Allow businesses to embed an AI agent into their website that can
answer questions, retrieve information, remember permitted context,
and perform authorized actions through controlled tools.

---

## 2. Product Overview

Embedly is a developer-first AI-agent platform that allows businesses
to add an intelligent chatbot/agent to their websites.

Businesses can configure an AI agent, connect website/document
knowledge, define allowed tools, customize the widget, and monitor
conversations from a dashboard.

The system supports multiple businesses/tenants while keeping their
data isolated.

---

## 3. Problem Statement

Businesses often need to build and maintain their own AI chatbot,
RAG system, memory system, tool integrations, and website widget.

This creates unnecessary engineering complexity.

Embedly provides these capabilities as a unified platform.

---

## 4. Target Users

### Business Owners
Need an AI agent for their website.

### Developers
Need an embeddable AI-agent SDK/widget.

### Support Teams
Need to monitor conversations and customer interactions.

### Administrators
Need to manage tenants, users, agents, usage and platform health.

---

## 5. Core Features

### 5.1 Authentication

- Signup
- Login
- Logout
- Password management
- Session management
- Role-based access

### 5.2 Multi-Tenancy

Each business is a separate tenant.

Tenant data must never leak between businesses.

### 5.3 AI Agent

- Agent creation
- Agent configuration
- System instructions
- Model configuration
- Temperature/configuration
- Agent status

### 5.4 Knowledge / RAG

- Website content ingestion
- Document ingestion
- Text chunking
- Embeddings
- Vector search
- Context retrieval
- Source-aware responses

### 5.5 Memory

- Conversation history
- Permitted user memory
- Tenant-specific memory
- Memory retrieval
- Memory deletion

### 5.6 Tools

Agents can use explicitly authorized tools.

Examples:

- Product search
- Order lookup
- Email
- Cart operations
- Customer information lookup

### 5.7 Human Approval

Sensitive actions must require approval.

Example:

AI requests:
"Create order"

System:
"Approval required"

Human:
Approve / Reject

Only then can the action execute.

### 5.8 Embeddable Widget

Businesses can embed Embedly into their website.

Example:

<script src="..."></script>

Widget features:

- Chat interface
- Branding
- Theme
- Agent name
- Welcome message
- Responsive design

### 5.9 Business Dashboard

- Agents
- Knowledge
- Conversations
- Customers
- Tools
- Widget configuration
- Usage
- Settings

### 5.10 Admin Dashboard

- Businesses
- Users
- Agents
- Usage
- System monitoring
- Platform configuration

---

## 6. MVP Scope

The MVP will include:

- Authentication
- Multi-tenancy
- Agent creation
- Website/document RAG
- Conversation system
- Permitted memory
- Tool framework
- Human approval
- Embeddable widget
- Business dashboard
- Admin dashboard

---

## 7. MVP Exclusions

The MVP will NOT include:

- Banking integrations
- KYC
- Autonomous high-value purchases
- Voice agents
- WhatsApp
- Instagram
- 100+ integrations
- Fully autonomous sensitive actions

E-commerce/payment integrations may initially use mock integrations.

---

## 8. Success Criteria

A business should be able to:

1. Create an account.
2. Create a tenant/business.
3. Create an AI agent.
4. Add website/document knowledge.
5. Configure the agent.
6. Generate/embed the widget.
7. Ask questions through the widget.
8. Receive RAG-based answers.
9. Use permitted tools.
10. Approve sensitive actions.
11. Monitor conversations from the dashboard.