import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;
  width: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.width = this.rating * 86 / 5;
  }


}
