import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { ViewContainerDirective } from './view-container-directive/view-container.component';
import { ViewContainerWrapperComponent } from './view-container-wrapper/view-container-wrapper.component';


@NgModule({
  declarations: [
    ViewContainerComponent,
    ViewContainerDirective,
    ViewContainerWrapperComponent
  ],
  exports: [
    ViewContainerComponent,
    ViewContainerDirective,
    ViewContainerWrapperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ViewPatternModule { }
