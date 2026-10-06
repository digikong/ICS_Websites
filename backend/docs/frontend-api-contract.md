# Frontend API Contract

Base: http://localhost:8080/api/v1

AUTH
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
POST /auth/change-password

USERS
GET /users
POST /users
GET /users/me
PATCH /users/me
PATCH /users/{id}/status?active=true
DELETE /users/{id}

PRODUCTS
GET /products
GET /products/{slug}
POST /products
PUT /products/{id}
DELETE /products/{id}

Product response keeps current frontend fields:
id, name, slug, image, category, application, form, popularity, grade,
cas, formula, appearance, molecular, purity, shelf, synonyms, text

QUOTES
POST /quotes (multipart/form-data)
GET /quotes/my
GET /quotes
PATCH /quotes/{id}/status?status=Pending
DELETE /quotes/{id}

Quote multipart fields:
product, cas, quantity, unit, packaging, grade, date, company, person,
email, phone, industry, city, requirement, attachment

CAREERS
GET /careers
POST /careers
PUT /careers/{id}
DELETE /careers/{id}

GALLERY
GET /gallery
POST /gallery
PUT /gallery/{id}
DELETE /gallery/{id}

SETTINGS
GET /settings
PUT /settings

ACTIVITIES
GET /activities
GET /activities/archive
DELETE /activities

PRESENCE
GET /presence
POST /presence/heartbeat
POST /presence/offline

Authorization:
Bearer <accessToken>

Passwords never go into localStorage.