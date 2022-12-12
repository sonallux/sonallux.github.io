---
tags: [liquibase,database,java]
---

# Liquibase

## Rollback
Liquibase can rollback already applied changesets. It is recommended to always add corresponding rollback operations to a changeset, to be able to rollback in case of failures/errors.
Some liquibase change types support auto rollback, for all other operations a manual rollback SQL statement can be specified in the `rollback` tag. See [Auto Rollback | Liquibase Docs](https://docs.liquibase.com/workflows/liquibase-community/liquibase-auto-rollback.html).
