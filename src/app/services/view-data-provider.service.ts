import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { View, PageData, ViewData, ViewError } from '../models/view';

@Injectable({
  providedIn: 'root'
})
export class ViewDataProviderService {

  private _view$ = new BehaviorSubject<View<PageData>>(undefined);

  get view$(): Observable<View<PageData>> {
    return this._view$.asObservable();
  }

  generateData(): void {
    const data: ViewData<PageData> = {
      data: {
        header: 'header',
        moreText: 'more text',
        text: 'text',
      }
    };

    this._view$.next(data)
  }

  generateError(): void {
    const error: ViewError = {
      error:  {
        message: 'error message',
        name: 'error name'
      }
    };

    this._view$.next(error);
  }

  generateLoading(): void {
    const viewLoader: View<PageData> = {
      loader: true
    };

    this._view$.next(viewLoader);
  }

  generateSkeletonLoading(): void {
    const viewLoader: View<PageData> = {
      loader: true,
      data: {
        header: 'XXXXX',
        moreText: 'XXXXX',
        text: 'XXXXX',
      }
    };

    this._view$.next(viewLoader);
  }
}
