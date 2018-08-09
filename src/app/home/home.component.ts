import { IComment } from './../icomment';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comments: IComment[] = [];
  @ViewChild('txtComment') txtComment: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  addComment(){

    let c: IComment= {
      comment: this.txtComment.nativeElement.value,
      like: 0,
      dislike: 0,
      numberOfReviews: 0,
      star: 0
    }

    this.comments.push(c);

  }

  reviewsCount(c: IComment, n: HTMLInputElement){
    c.numberOfReviews++;
    c.star += parseInt(n.value);
  }
  commentLike(c: IComment){
    c.like++;
  }
  commentDisLike(c: IComment){
    c.dislike++;
  }

}
