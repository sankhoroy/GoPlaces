import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
 @Input() reviews: any;  // Parent to child component data transfer
  constructor() { }      // via [reviews]="data" in "app.component.html".

  ngOnInit() {
  }

}
