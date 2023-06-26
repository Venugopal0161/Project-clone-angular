import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecategorysComponent } from './moviecategorys/moviecategorys.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent, MoviecategorysComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({
      animation: 'pulse',
      loadingText: 'This item is actually loading...',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
