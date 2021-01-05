import { Input } from '@angular/core';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { View, PageData } from '../../models/view';
import { ViewDataProviderService } from '../../services/view-data-provider.service';

@Component({
  selector: 'app-view-no-pattern',
  templateUrl: './view-no-pattern.component.html',
  styleUrls: ['./view-no-pattern.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewNoPatternComponent implements OnInit {

  @Input() view$: Observable<View<PageData>>;

  constructor(private readonly dataProvider: ViewDataProviderService) { }

  ngOnInit(): void {
    this.view$ = this.dataProvider.view$;
  }

}
