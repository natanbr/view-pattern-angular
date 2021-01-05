import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { View, PageData } from '../../models/view';
import { ViewDataProviderService } from '../../services/view-data-provider.service';

@Component({
  selector: 'view-pattern-wrapper-example',
  templateUrl: './view-pattern-wrapper-example.component.html',
  styleUrls: ['./view-pattern-wrapper-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPatternWrapperExampleComponent implements OnInit {

  @Input() view$: Observable<View<PageData>>;

  constructor(private readonly dataProvider: ViewDataProviderService) { }

  ngOnInit(): void {
    this.view$ = this.dataProvider.view$;
  }

}
