---
tags: [frontend, angular, accessibility]
---

# Accessibility in Angular

## Resources

- Code Lab about a11y in angular from Emma Twersky (Angular Team): https://codelabs.developers.google.com/angular-a11y
- [Angular a11y documentation](https://angular.dev/best-practices/a11y)
- Demo: https://github.com/korneevamg/angular-ally

## Rules
- `routerLinkActive` only visually because it only adds a CSS class. Therefore, always add `ariaCurrentWhenActive` too.
- skipLink for big navigation lists
- Add specific labels to buttons. e.g. close buttons on many elements should contain the element name.
- Hover and focus effect should be equal. e.g. a card with hover effect and close button, should make focus visible on card. For example using `:focus-within` selector.
- Form should use `<form (ngSubmit)="...">` instead of click listener on a button.
- Add `aria-invalid` if FormControl is invalid, added by angular material automatically

