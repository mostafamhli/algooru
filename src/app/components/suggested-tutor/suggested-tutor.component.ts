import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from 'src/app/models/tutor.model';
import { TutorService } from 'src/app/services/tutor.service';
import { SwiperOptions } from 'swiper';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';


SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
@Component({
  selector: 'app-suggested-tutor',
  templateUrl: './suggested-tutor.component.html',
  styleUrls: ['./suggested-tutor.component.css'],
})
export class SuggestedTutorComponent {
  bestTutors: Tutor[] = [];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor(private route: Router, private tutorService: TutorService) {}

  ngOnInit() {
    this.getBestTutors();
  }

  getBestTutors() {
    this.tutorService.getTutorRandomly().subscribe((data) => {
      this.bestTutors = data;
    });
  }

  goToTutorDetails(id: number) {
    this.route.navigate(['tutor', id]);
  }

  onSwiper([swiper]: any) {
  }

  onSlideChange() {
  }
}
