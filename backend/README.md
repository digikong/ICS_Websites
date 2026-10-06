# CosmoChem Backend

Java 21 + Spring Boot 3.x backend matching the existing React/Vite application.

## Services
- gateway-service: public API entrypoint
- auth-service: signup/login/refresh/logout, customer profile and staff RBAC
- product-service: catalogue CRUD + Redis read cache
- quote-service: quote/enquiry API + Cloudflare R2 attachments
- content-service: Careers, Gallery and Site Settings + Redis
- notification-service: Kafka consumer for quote notification emails
- audit-service: Kafka activity logs, 10-day archive and staff presence

## Data ownership
Neon PostgreSQL is source of truth.
Schemas: auth, product, quote, content, audit.
Redis is cache only.
R2 is object storage.
Kafka is for asynchronous business/audit events.

## Start
cp .env.example .env
docker compose --env-file .env up --build

Browser API:
http://localhost:8080/api/v1

Internal service ports are not published.