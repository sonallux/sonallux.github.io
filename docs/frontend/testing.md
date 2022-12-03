---
tags: [frontend,testing]
---

# Testing

- Unit Tests
  - Jest
  - Testing Library https://testing-library.com/docs/queries/about#priority
- Integration/e2e Tests
  - [Cypress](https://www.cypress.io)
  - [Playwright](https://playwright.dev)
- Other cool testing tools
  - [vitest](https://github.com/vitest-dev/vitest)


## Mocking

- `createMock(...)` from [@testing-library/angular/jest-utils](https://www.npmjs.com/package/@testing-library/angular)
- `createSpyFromClass(...)` from [jest-auto-spies](https://www.npmjs.com/package/jest-auto-spies)

## Angular
- [ng-mocks](https://ng-mocks.sudo.eu/)
  - `MockComponent(Component)` creates a mock of an Component. Good for testing individual components without needing to bootstrap all sub component
  - `MockPipe(Pipe, value => JSON.stringify(value))` mock a pipe
  - ...
- [Spectacular](https://www.npmjs.com/package/@ngworker/spectacular)
- [Spectator](https://github.com/ngneat/spectator) ngneat has other [cool libraries](https://github.com/ngneat) for Angular and JS/TS too
