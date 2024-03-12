---
tags: [frontend,microfrontend]
---

# Microfrontend

- Shell App is required, apps must conform to some rules from shell, so they can be integrated in to shell
- WJAX 2023 - [Manfred Steyer: Microfrontends with Modern Angular](https://www.angulararchitects.io/en/presentations/micro-frontends-with-modern-angular-3/)
- [Microfrontends using Import Maps - Blog Post from Manfred Steyer](https://www.angulararchitects.io/en/blog/import-maps-the-next-evolution-step-for-micro-frontends-article/)
- Free E-Book [Enterprise Angular: Micro Frontends and Moduliths with Angular](https://www.angulararchitects.io/en/ebooks/micro-frontends-and-moduliths-with-angular/) from Manfred Steyer
- Frontends with import maps [Blog Post](https://jgelin.medium.com/its-time-to-talk-about-import-map-micro-frontend-and-nx-monorepo-0b8e2c07568a)

## module federation
  - `requiredVersion: 'auto'` not good, because even minor/patch differences cause problems
  - Only use one Angular version
    - `singleton: true` und `strictVersion: true`
    - Monorepo

## webcomponents
  - built in angular support with [angular elements](https://angular.io/guide/elements)
  - different Angular version possible (even major version differences)
  - Multiple Router.forRoot() do not work
    - Send a custom event to notify all apps about url changes
