---
tags: [frontend,angular]
---

# Angular

## Injection Functions

Using the `inject()` Function seams to be the new way of doing DI in Angular. This functions takes an `InjectionToken` as parameter an returns the value for it from the currently active injector. For more details see [this nice blog post](https://marmicode.io/blog/angular-inject-and-injection-functions)

```ts
@Component(...)
export class ComponentOld {
    constructor(private httpClient: HttpClient) {}
}

@Component(...)
export class ComponentNew {
  private httpClient = inject(HttpClient)
}
```

### Benefits of this new approach
#### Type safety
Constructor injection with the `@Inject()` decorator does not have type safety. But when using the `inject()` the type can be correctly inferred:
```ts
const MyToken = new InjectionToken<number>('MyToken');

@Component(...)
class ComponentOld {
  constructor(@Inject(MyToken) private value: string) // Compiler can not catch this type mismatch
}

@Component(...)
class ComponentNew {
  private value = inject(MyToken) // type number is correctly inferred
}
```

#### Boilerplate reduction by composing injection functions

```ts
@Component(...)
class RecipesComponent {
  recipes$ = injectSelection(selectRecipes);
}

function injectSelection(selector) {
  return inject(Store).select(selector);
}
```

```ts
@Component(...)
class ComponentOld {
  protected entity$: Observable<Entity>;

  constructor(route: ActivatedRoute, http: HttpClient) {
    this.entity$ = route.params.pipe(
      map(params => params['id']),
      filter(id => !!id),
      switchMap(id => http.get<Entity>(`api/entity/{id}`))
    )
  }
}

@Component(...)
class ComponentNew {
  protected entity$ = fetchEntity();
}

const fetchEntity = () => {
  const http = inject(HttpClient)
  const route = inject(ActivatedRoute)

  return route.params.pipe(
    map(params => params['id']),
    filter(id => !!id),
    switchMap(id => http.get<Entity>(`api/entity/{id}`))
  )
}
```

## Dynamic Forms

Next to [template-driven Forms](https://angular.io/guide/forms) and [reactive Forms](https://angular.io/guide/reactive-forms) Angular has a guide about a third type of forms:  [Dynamic Forms](https://angular.io/guide/dynamic-form)

- Library from [Udo Schöfer](https://github.com/udos86): https://github.com/udos86/ng-dynamic-forms
