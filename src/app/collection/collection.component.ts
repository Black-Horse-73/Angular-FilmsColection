import {Component, OnInit} from '@angular/core';
import {Film} from '../model/Film';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  films: Array<Film> = new Array<Film>();

  constructor() {}
  ngOnInit(): void {
    this.films.push(new Film('../../assets/img/ivi.jpg', 'Игра в иммитацию', 2019));
    this.films.push(new Film('../../assets/img/sr.jpg', 'Славные ребята', 1990));
    this.films.push(new Film('../../assets/img/g.jpg', 'Гангстер', 2007));
    this.films.push(new Film('../../assets/img/t.jpeg', 'Терминал', 2004));
    this.films.push(new Film('../../assets/img/inp.jpg', 'Игра на понижение', 2015));
    this.films.push(new Film('../../assets/img/c.jpg', 'Кокаин', 2001));
    this.films.push(new Film('../../assets/img/e.jpg', 'Эксперимент', 2010));
  }


  deleteFilm(index) {
    this.films.splice(index, 1);
  }

  addFilm(poster, title, year) {
    const newFilm = new Film(poster.value, title.value, year.value);
    this.films.push(newFilm);
    console.log(newFilm);
  }
}
