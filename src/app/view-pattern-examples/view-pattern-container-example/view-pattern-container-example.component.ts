import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { View, PageData } from '../../models/view';
import { ViewDataProviderService } from '../../services/view-data-provider.service';

@Component({
  selector: ' view-pattern-container-example',
  templateUrl: './view-pattern-container-example.component.html',
  styleUrls: ['./view-pattern-container-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewPatternContainerExampleComponent implements OnInit {

  @Input() view$: Observable<View<PageData>>;

  constructor(private readonly dataProvider: ViewDataProviderService) { }

  ngOnInit(): void {
    this.view$ = this.dataProvider.view$;
  }

}
