---
tags: [frontend,testing]
---

# Cypress

[www.cypress.io](https://www.cypress.io)

- Selectors/Query from testing library can be used with Cypress with [@testing-library/cypress](https://testing-library.com/docs/cypress-testing-library/intro/)

## `cy.<x>()` Functions

Calls to `cy.<...>()` functions do not execute the action immediately, instead the commands are added to some kind of queue. The commands are executed all together at the end of each test. The example below show this behavior. When naively looking at the code, one would expect that the example would work, but it actually does not work.

Results are thenable, but they are not real promises. The following examples show this behavior. 

```ts
it('error', () => {
  let foo = true;

  cy.visit('')
  cy.get('...').should('contain.text', '...').then(() => foo = false)

  if (foo) {
    throw Error('Test 123')
  }
})
```

The automatic waiting for an element feature is applied to each function individually, but not to the whole `cy.` chain.

```html
<header>
  <a href="/">Home</a>
</header>
<nav *ngIf="!loading">
  <a href="/page1">Page One</a>
</nav>
```

```ts
it('Link to Page One is visible', () => {
  cy.visit('')
  cy.get('a').should('contain.text', 'PageOne')
})
```

## Assertions

Cypress does not have its own assertion library. It uses Chai. [Assertions - Cypress Documentation](https://docs.cypress.io/guides/references/assertions)

### Implicit assertion

```ts
cy.get('...').should('have.text', 'Foo');
```

### Explicit assertions

Useful for multiple assertions on the same element. The argument (here `$button`) is not the real DOM Element, instead it is a JQuery object, because Cypress uses JQuery internally. Therefore by convention the argument is prefixed with a `$`.

```ts
cy.get('...').should($button => {
  expect($button).to.have.text('Holidays');
  expect($button).to.have.class('mat-raised-button');
  expect($button).to.have.attr('href', '/holidays');
});
```

## Custom Commands

Custom commands (like `cy.testId('...')`) can be defined in a `e2e.ts` or `index.ts` file under `src/e2e/support`:

```ts
declare namespace Cypress {
  interface Chainable<Subject> {
    testId(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}

Cypress.Commands.add('testId', (selector: string) => cy.get(`[data-testid=${selector}]`));
```

## Component Tests

Cypress recently added support for [component testing](https://docs.cypress.io/guides/component-testing/overview).
