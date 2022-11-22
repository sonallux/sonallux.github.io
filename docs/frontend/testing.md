---
tags: [frontend,testing]
---

# Frontend testing

- [Cypres](https://www.cypress.io)
- [Playwright](https://playwright.dev)
- [vitest](https://github.com/vitest-dev/vitest)

## Cypres
- Testing library query can be used with Cypres

### Assertions

Cypress does not have its own assertion library. It uses Chai. [Assertions - Cypress Documentation](https://docs.cypress.io/guides/references/assertions)

#### Implicit assertion

```ts
cy.get('...').should('have.text', 'Foo');
```

#### Explicit assertions

Usefull for multiple assertions on the same element

```ts
cy.get('...').should(button => {
  expect(button).to.have.text('Holidays');
  expect(button).to.have.class('mat-raised-button');
  expect(button).to.have.attr('href', '/holidays');
});
```


## Testing Library
- https://testing-library.com/docs/queries/about#priority
