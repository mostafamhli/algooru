import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { SwiperModule } from 'swiper/angular';
import { OurTutorsComponent } from './components/our-tutors/our-tutors.component';
import { TutorComponent } from './components/tutor/tutor.component';
import { SharedModule } from './shared/shared.module';
import { TutorDetailsComponent } from './components/tutor-details/tutor-details.component';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { LoaderService } from './shared/services/loader.service';
import { SuggestedTutorComponent } from './components/suggested-tutor/suggested-tutor.component';

@NgModule({
  declarations: [
    AppComponent,
    OurTutorsComponent,
    TutorComponent,
    TutorDetailsComponent,
    SuggestedTutorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
