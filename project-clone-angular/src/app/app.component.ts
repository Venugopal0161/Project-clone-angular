import { Component } from '@angular/core';
import topsliderMovies from '.././assets/topSlider.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  topSliderPosters: any = topsliderMovies;
  title = 'project-clone-angular';

  images: any = [];
  currentIndex: number = 0;

  ngOnInit(): void {
    this.topSliderPosters.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.images = this.topSliderPosters.results;
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      console.log(this.currentIndex, this.currentIndex + 1, this.images.length);
    }, 3000); // Change slide every 3 seconds (adjust as needed)
  }
}
