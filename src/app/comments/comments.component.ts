import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  name = new FormControl('');
  comment = new FormControl('');

  comments: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  commentSubmit(): void {
    console.log("testr");

    this.comments.push({
      name: this.name.value,
      comment: this.comment.value
    });

    console.log(this.comments);


  }

}
