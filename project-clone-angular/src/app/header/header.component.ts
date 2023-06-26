import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isBottom: boolean = false;
  menus = [
    { name: 'Home' },
    { name: 'Tv Shows' },
    { name: 'Movies' },
    { name: 'My List' },
  ];
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY >= 100) {
      this.isBottom = true;
    } else {
      this.isBottom = false;
    }
  }
}
