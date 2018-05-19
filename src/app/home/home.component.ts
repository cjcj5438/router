import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.name = this.routeInfo.snapshot.params['name'];
  }

}
