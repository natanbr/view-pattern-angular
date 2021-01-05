import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewNoPatternComponent } from './view-no-pattern/view-no-pattern.component';
import { ViewPatternContainerExampleComponent } from './view-pattern-container-example/view-pattern-container-example.component';
import { ViewPatternDirectiveExampleComponent } from './view-pattern-directive-example/view-pattern-directive-example.component';
import { ViewPatternWrapperExampleComponent } from './view-pattern-wrapper-example/view-pattern-wrapper-example.component';
import { ViewPatternModule } from '../shared/view-pattern.module';


@NgModule({
  declarations: [
    ViewNoPatternComponent,
    ViewPatternContainerExampleComponent,
    ViewPatternDirectiveExampleComponent,
    ViewPatternWrapperExampleComponent
  ],
  exports: [
    ViewNoPatternComponent,
    ViewPatternContainerExampleComponent,
    ViewPatternDirectiveExampleComponent,
    ViewPatternWrapperExampleComponent
  ],
  imports: [
    CommonModule,
    ViewPatternModule
  ]
})
export class ViewPatternExamplesModule { }
