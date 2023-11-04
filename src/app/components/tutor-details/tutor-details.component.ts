import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Tutor } from 'src/app/models/tutor.model';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-tutor-details',
  templateUrl: './tutor-details.component.html',
  styleUrls: ['./tutor-details.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TutorDetailsComponent {
  productId!: number;
  tutor!: Tutor;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private tutorService: TutorService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.productId = +param.get('id');
      this.getTutorDetails(this.productId);
    });
  }

  getTutorDetails(id: number) {
    this.tutorService.getTutorById(id).subscribe((data) => {
      this.tutor = data;
    });
  }

  goBack() {
    this.route.navigate(['our-tutor']);
  }
}
