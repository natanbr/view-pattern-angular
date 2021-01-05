# Angular View Pattern
Many web views are following a very common structure:
- show a *loader* while retriving data
- show *error* if the async call failed
- otherwice show the *main view* content

In this repo, I am sharing a "pattern" the the implementation I developed to reduce the code duplication that comes with this structure,
but even more importantly to *enfore* the implementation of the error handler, and the loader.
(Belive me, it's wired to see an empty page because of a missing loader, or an infinit loading page only because the error handling was forgoten... can happen to the best of us 😅).

### Use case
Let's say you are loading a some data from a server.
You subscribe to an observable and map the results to your template:
`response$ = dataService.retriveData(...)`


## Usage
There are 3 implementation of the view pattern

### `view-container-directive`
#### Description
Is the implementation of the pattern as a structural directive
The implementation example is in the coresponding example file `view-pattern-directive-example` 
#### Selector:
`[viewContainer]`
#### Properties: 
`@Input() view:View<T>` - The `View` opject with data type of `T`
`@Input() main:TemplateRef` - A reference to the *main* template
`@Input() error:TemplateRef` - A reference to the *error* handeling template
`@Input() loading:TemplateRef` - A reference to the *loader* template
#### Code Snippet
```
<... *viewContainer="view$ | async;
                          main mainTmp;
                          error errorTmp;
                          loading loaderTmp">
<...>

<ng-template #mainTmp>...</ng-template>
<ng-template #errorTmp>...</ng-template>
<ng-template #loaderTmp>...</ng-template>
```

### `view-container` (component)
Indentical to the directive with the main difference of beeing used as a component.
A full example can be found coresponding example file `view-pattern-container-example`.

#### Selector:
`view-container`

#### Code Snippet
```
<view-container
  *ngIf="view$ | async as view"
  [appViewMain]="mainTmp"
  [errorTmp]="errorTmp"
  [loaderTmp]="loaderTmp"
  [view]="view">
</view-container>

<ng-template #mainTmp>...</ng-template>
<ng-template #errorTmp>...</ng-template>
<ng-template #loaderTmp>...</ng-template>
```

### `view-container-wrapper` (component)
A wrapper component for the `view-container` added as an example for redusing duplications with the loader and error handler templates.
Also, it demonstrate a usage of the main template as `<ng-content>`

#### Selector:
`[view-container-wrapper]`

#### Code Snippet
```
<view-container-wrapper
  class="view-container"
  *ngIf="view$ | async as view"
  [appViewMain]="mainTmp"
  [view]="view">
  <!-- since the main view is not a templte, checking for that view.data exists is needed -->
  <div *ngIf="view.data">
    <h4> {{ view.data.header }} </h4>
    <p> {{ view.data.text }} </p>
    <p> {{ view.data.moreText }} </p>
  </div>

</view-container-wrapper>
```
#### Code Snippet
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
