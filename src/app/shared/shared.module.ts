import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { NumberEuroPipe } from './pipes/number-euro.pipe';
import { FadeLoadDirective } from './directives/fade-load.directive';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    NumberEuroPipe,
    FadeLoadDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BreadcrumbsComponent,
    NumberEuroPipe,
    FadeLoadDirective
  ]
})
export class SharedModule { }
