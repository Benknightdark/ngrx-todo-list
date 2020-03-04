import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import { Movie } from './Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {

    this.store.dispatch({ type: '[Movies Page] Load Movies' });
    this.store.dispatch({type:"[Movies API] Movies Loaded Success"});
  }


}
