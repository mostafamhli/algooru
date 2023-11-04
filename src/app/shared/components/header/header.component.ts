import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('navLinks') navLinks!: ElementRef;

  constructor(public loaderService: LoaderService) {}
  onToggleMenu(e: any) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    this.navLinks.nativeElement.classList.toggle('top-[9%]');
  }
}
