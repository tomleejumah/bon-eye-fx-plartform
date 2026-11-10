# Architecture

## Service boundaries

- `apps/web`: public website and future member/admin experiences. Deployed to Vercel.
- `apps/api`: REST API, business rules, authentication, payments and integrations. Hosted on the Debian server.
- `packages/shared`: transport contracts and types consumed by both workspaces.

The browser communicates with the API over HTTPS. Secrets remain in the API environment and must never be exposed through `NEXT_PUBLIC_*` variables.

## Initial endpoint

- `GET /api/v1/health`: process liveness information. It does not claim database readiness.

## Planned backend modules

1. Authentication, sessions and role-based access control.
2. PostgreSQL persistence and migrations.
3. Courses, lessons, enrollments and protected media.
4. Plans, subscriptions, payment callbacks and receipts.
5. Signals and membership entitlements.
6. Mentorship bookings and availability.
7. YouTube live event management.
8. Audit logs, notifications and administration.
