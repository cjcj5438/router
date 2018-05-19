import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
  childId: number;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.childId = this.routeInfo.snapshot.params['id'];
  }
}
