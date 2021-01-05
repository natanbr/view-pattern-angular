import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, ContentChild, ViewChildren, ChangeDetectorRef, NgZone, ApplicationRef, ElementRef } from '@angular/core';
import { View } from 'src/app/models/view';

@Component({
  selector: 'view-container',
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewContainerComponent<T> implements AfterViewInit {

  private _mainTemplateRef: TemplateRef<AppViewContext<T>> = null;
  private _errorTemplateRef: TemplateRef<AppViewContext<T>> = null;
  private _loaderTemplateRef: TemplateRef<AppViewContext<T>> = null;

  private _context: AppViewContext<T> = new AppViewContext<T>();

  constructor(
    private _viewContainer: ViewContainerRef,
    ) { }

  @Input() set appViewMain(templateRef: TemplateRef<any>) {
    this._mainTemplateRef = templateRef;
  }

  @Input() set errorTmp(templateRef: TemplateRef<any>) {
    this._errorTemplateRef = templateRef;
  }

  @Input() set loaderTmp(templateRef: TemplateRef<any>) {
    this._loaderTemplateRef = templateRef;
  }

  @Input() set view(view: View<T>) {
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

  ngAfterViewInit(): void {
    if (!this._errorTemplateRef) throw new Error('View Pattern: Missing Error Template');
    if (!this._loaderTemplateRef) throw new Error('View Pattern: Missing Loader Template');
    if (!this._mainTemplateRef) throw new Error('View Pattern: Missing Main Template');
  }

}

class AppViewContext<T> {
  public $implicit: View<T>;
  public view: View<T>;
}
