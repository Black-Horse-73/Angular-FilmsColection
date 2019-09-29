import { Component } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent {

  films;

  constructor() {

    this.films = [
      { poster: '../../assets/img/ivi.jpg', title: 'Игра в иммитацию', yearOfIssue: 2019 },
      { poster: '../../assets/img/sr.jpg', title: 'Славные ребята', yearOfIssue: 1990 },
      { poster: '../../assets/img/g.jpg', title: 'Гангстер', yearOfIssue: 2007 },
      { poster: '../../assets/img/dkp.jpg', title: 'Далласский клуб покупателей', yearOfIssue: 2013 },
      { poster: '../../assets/img/t.jpeg', title: 'Терминал', yearOfIssue: 2004 },
      { poster: '../../assets/img/inp.jpg', title: 'Игра на понижение', yearOfIssue: 2015 },
      { poster: '../../assets/img/с.jpg', title: 'Кокаин', yearOfIssue: 2001 },
      { poster: '../../assets/img/e.jpg', title: 'Эксперимент', yearOfIssue: 2010 }
    ]
  }

  deleteFilm(i) {
    this.films.splice(i, 1)
  }
  addFilm(post, titl, year) {
    this.films.push({
      poster: post.value,
      title: titl.value,
      yearOfIssue: year.value
    })

  }
}
