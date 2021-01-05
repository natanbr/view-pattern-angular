import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { View } from 'src/app/models/view';

@Component({
  selector: 'view-container-wrapper',
  templateUrl: './view-container-wrapper.component.html',
  styleUrls: ['./view-container-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewContainerWrapperComponent<T> {

  @Input() appViewMain: TemplateRef<any>;
  @Input() errorTmp?: TemplateRef<any>;
  @Input() loaderTmp?: TemplateRef<any>;
  @Input() view: View<T>;

}
