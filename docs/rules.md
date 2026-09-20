# Development Rules

## 1. General Principles

- Read PRD before implementing product functionality.
- Read architecture before modifying system structure.
- Read design before implementing UI.
- Keep changes small and focused.
- Do not modify unrelated files.
- Prefer simple solutions.
- Avoid unnecessary abstractions.
- Reuse existing code.
- Do not duplicate business logic.

---

## 2. TypeScript

- Use TypeScript.
- Avoid `any`.
- Prefer explicit types.
- Use shared types where appropriate.
- Keep API contracts typed.

---

## 3. Backend

- Validate every external input.
- Authenticate protected requests.
- Authorize every tenant-owned resource.
- Never trust tenant IDs from the client.
- Enforce tenant isolation server-side.
- Never expose secrets to the frontend.

---

## 4. AI Rules

The AI agent must not:

- Directly access the database.
- Execute arbitrary code.
- Execute unauthorized tools.
- Perform sensitive actions without approval.

The AI must operate through controlled backend services.

---

## 5. Database

- Use Prisma for database access.
- Keep migrations version controlled.
- Add indexes where required.
- Maintain tenant relationships.
- Avoid N+1 queries.
- Never expose raw database queries to the AI.

---

## 6. API

- Validate request bodies.
- Validate query parameters.
- Return consistent responses.
- Use appropriate HTTP status codes.
- Handle errors centrally.
- Protect sensitive endpoints.

---

## 7. Frontend

- Use reusable components.
- Keep components focused.
- Avoid unnecessary client components.
- Handle loading/error/empty states.
- Use accessible semantic HTML.

---

## 8. Security

Never commit:

- API keys
- Passwords
- Tokens
- Database credentials
- Private keys

Use environment variables.

---

## 9. Git

Use meaningful commits.

Example:

feat: add agent creation API

fix: prevent cross-tenant conversation access

refactor: extract tool permission service

docs: update architecture