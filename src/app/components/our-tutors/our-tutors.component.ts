import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Tutor } from 'src/app/models/tutor.model';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-our-tutors',
  templateUrl: './our-tutors.component.html',
  styleUrls: ['./our-tutors.component.css'],
})
export class OurTutorsComponent implements OnInit {
  tutorsList: Tutor[] = [];
  length = 5000;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  pageEvent!: PageEvent;

  constructor(
    private tutorService: TutorService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getAllTutors(this.pageIndex, this.pageSize);
  }

  getAllTutors(pageIndex: number, pageSize: number) {
    this.tutorService.getAllTutor(pageIndex, pageSize).subscribe((data) => {
      this.tutorsList = data;
      this.cd.detectChanges();
    });
  }

  search(searchedValue: string) {
    this.tutorService.getTutorBySearch(searchedValue).subscribe((res) => {
      this.tutorsList = res.slice(0, this.pageSize);
    });
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.tutorService
      .getAllTutor(e.pageIndex + 1, e.pageSize)
      .subscribe((data) => {
        this.tutorsList = data;
        this.cd.detectChanges();
      });
  }
}
