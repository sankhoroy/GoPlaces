import { Component , Pipe, PipeTransform} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';  // Imports
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-root',     // Decorator
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
  type = 'hospitals+near+';
  placeName = '';
  key = '&key=AIzaSyBDVZs4cvivGO3S1cl67LaRrPkUNkOZ0dQ';
  data: any = [];
  //   we create a url "finalstring" by concatenating
  //  all the parts of string when "Go" button is clicked
  //  by goTo function.
  //   Then we send HTTP request to server and fetch json
  //   data and store .json.results[] in  "retrived" which
  //   finally stored in "data".

  constructor( private h: Http) {}
  goTo(s: string) { this.placeName = s;
    this.placeName.replace(' ', '+');
    const finalsearch = `${this.url}${this.placeName}${this.key}`;
    this.h.get(finalsearch)
        .subscribe(
          (res: Response) => {
            const retrived = res.json().results;
            this.data = retrived;
          },
          err => console.log('some error occured in server')
        );
  }



}
