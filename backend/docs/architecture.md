# CosmoChem Runtime Architecture

React/Vite
  -> API Gateway
      -> Auth Service -> Neon auth schema
      -> Product Service -> Neon product schema + Redis
      -> Quote Service -> Neon quote schema + Cloudflare R2
      -> Content Service -> Neon content schema + Redis
      -> Audit Service -> Neon audit schema
      -> Notification Service <- Kafka

Kafka is not used for normal product GET calls.

Product read:
Gateway -> Product -> Redis HIT -> response
                     Redis MISS -> Neon -> Redis -> response

Product write:
Gateway -> Product -> Neon -> Redis invalidation -> Kafka audit event

Quote submit:
Gateway -> Quote -> R2 attachment (optional) -> Neon -> Kafka events
Kafka consumers process audit + customer notification.