import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [SearchPipe],
  imports: [BrowserModule],
  exports: [SearchPipe],
})
export class CoreModule {}
