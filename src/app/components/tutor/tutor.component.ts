import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Tutor } from 'src/app/models/tutor.model';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
})
export class TutorComponent implements OnChanges {
  @Input() tutor!: Tutor;

  constructor(private router: Router) {}
  ngOnChanges() {}

  goToTutorDetails(id: number) {
    this.router.navigate(['tutor', id]);
  }
}
