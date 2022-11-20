---
tags: [java,test-containers,eventual-consistency,database,distributed-system]
---

# Eventual Consistency


## Eventually Consistent DDD (ECD3)
- [Software architecture design guidelines](https://github.com/EventuallyConsistentDDD/design-guidelines) for apps running under eventual consistency. Works with domain driven design.
- [Monotonic shopping cart example](https://github.com/brausu/workshop-eventual-consistency/tree/main/monotonic-shopping-card)
- [W-JAX 2022: Keeping CALM – Konsistenz in verteilten Systemen leichtgemacht](https://entwickler.de/reader/my-events/w-jax/jax-architecture-design/628b5aa461292f001d720097) von Susanne Braun
- [W-JAX 2022: Eventual Consistency – Du musst keine Angst haben!](https://entwickler.de/reader/my-events/w-jax/jax-architecture-design/628b5aa461292f001d7200a6) von Susanne Braun



## Lost Update and isolation levels of databases

- [Code example with PostgreSQL](https://github.com/brausu/workshop-eventual-consistency/blob/main/multithreaded-transaction-tests/src/test/java/org/ecd3/samples/transactions/PostgreSQLLostUpdateTest.java)
- [Code example with MySQL](https://github.com/brausu/workshop-eventual-consistency/blob/main/multithreaded-transaction-tests/src/test/java/org/ecd3/samples/transactions/MySQLLostUpdateTest.java)
