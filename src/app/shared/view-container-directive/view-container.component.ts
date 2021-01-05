import { AfterViewInit, Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { View } from 'src/app/models/view';

@Directive({ selector: '[viewContainer]' })
export class ViewContainerDirective<T> implements AfterViewInit {

  private _context: AppViewContext<T> = new AppViewContext<T>();
  private _mainTemplateRef: TemplateRef<AppViewContext<T>> = null;
  private _errorTemplateRef: TemplateRef<AppViewContext<T>> = null;
  private _loaderTemplateRef: TemplateRef<AppViewContext<T>> = null;

  constructor(private _viewContainer: ViewContainerRef) { }

  ngAfterViewInit(): void {
    if (!this._errorTemplateRef) throw new Error('View Pattern: Missing Error Template')
    if (!this._loaderTemplateRef) throw new Error('View Pattern: Missing Loader Template')
    if (!this._mainTemplateRef) throw new Error('View Pattern: Missing Main Template')
  }

  @Input() set viewContainer(view: View<T>) {
    if (!view) return;

    this._context.$implicit = this._context.view = view;
    this._viewContainer.clear();

    if (view.loader)
      this._viewContainer.createEmbeddedView(this._loaderTemplateRef, this._context);

    if (view.error && !view.loader)
      this._viewContainer.createEmbeddedView(this._errorTemplateRef, this._context);

    if (view.data && !view.error)
      this._viewContainer.createEmbeddedView(this._mainTemplateRef, this._context);
  }

  @Input() set viewContainerMain(templateRef: TemplateRef<any>) {
    this._mainTemplateRef = templateRef;
  }

  @Input() set viewContainerError(templateRef: TemplateRef<any>) {
    this._errorTemplateRef = templateRef;
  }

  @Input() set viewContainerLoading(templateRef: TemplateRef<any>) {
    this._loaderTemplateRef = templateRef;
  }


  /** @internal */
  public static ngIfUseIfTypeGuard: void;

  /**
   * Assert the correct type of the expression bound to the `ngIf` input within the template.
   *
   * The presence of this static field is a signal to the Ivy template type check compiler that
   * when the `NgIf` structural directive renders its template, the type of the expression bound
   * to `ngIf` should be narrowed in some way. For `NgIf`, the binding expression itself is used to
   * narrow its type, which allows the strictNullChecks feature of TypeScript to work with `NgIf`.
   */
  static ngTemplateGuard_ngIf: 'binding';

  /**
   * Asserts the correct type of the context for the template that `NgIf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgIf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard<T>(dir: AppViewContext<T>, ctx: any):
      ctx is AppViewContext<Exclude<T, null|undefined>> {
    return true;
  }
}

export class AppViewContext<T> {
  public $implicit: View<T>;
  public view: View<T>;
}

export interface AppViewOptions {
  allowMultiViews: boolean;
}
