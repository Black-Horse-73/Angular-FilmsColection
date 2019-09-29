export class Film {
  constructor(poster: string, title: string, yearOfIssue: string) {
    this.poster = poster;
    this.title = title;
    this.yearOfIssue = yearOfIssue;
  }

  poster: string;
  title: string;
  yearOfIssue: string;
}
