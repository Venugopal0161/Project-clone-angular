import { Component, OnInit } from '@angular/core';
import actionMovies from '../../assets/action_movies.json';
import comedyMovies from '../../assets/comedy_movies.json';
import docMovies from '../../assets/documentry_movies.json';
import horrorMovies from '../../assets/horror_movies.json';
import romanticMovies from '../../assets/romantic_movies.json';
import topRated from '../../assets/toprated_movies.json';
import trending from '../../assets/trending.json';

@Component({
  selector: 'app-moviecategorys',
  templateUrl: './moviecategorys.component.html',
  styleUrls: ['./moviecategorys.component.scss'],
})
export class MoviecategorysComponent implements OnInit {
  trendingData: any = trending;
  toprateddata: any = topRated;

  comedyMoviesdata: any = comedyMovies;
  actionMoviesdata: any = actionMovies;
  docMoviesdata: any = docMovies;
  horrorMoviesdata: any = horrorMovies;
  romanticMoviesdata: any = romanticMovies;
  skeleton_loaderCount = Array(8)
    .fill(0)
    .map((x, i) => i);

  constructor() {}

  ngOnInit() {
    console.log(this.trendingData);
    // this.trendingData.results.reduce((a: any, b: any) => {
    //   return (a.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
    //     a.backdrop_path
    //   ));
    // });

    this.trendingData.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.toprateddata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });

    this.comedyMoviesdata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.actionMoviesdata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.docMoviesdata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.horrorMoviesdata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
    this.romanticMoviesdata.results.forEach((element: any) => {
      element.backdrop_path = 'https://image.tmdb.org/t/p/original'.concat(
        element.backdrop_path
      );
    });
  }
}
