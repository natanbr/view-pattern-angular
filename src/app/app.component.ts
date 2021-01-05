import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageData, View, ViewData, ViewError, ViewLoader } from './models/view';
import { ViewDataProviderService } from './services/view-data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'view-pattern';

  constructor(private readonly dataProvider: ViewDataProviderService) {}

  generateData(): void {
    this.dataProvider.generateData();
  }

  generateError(): void {
    this.dataProvider.generateError();
  }

  generateLoading(): void {
    // this.dataProvider.generateLoading();
    this.dataProvider.generateSkeletonLoading();

  }

}
