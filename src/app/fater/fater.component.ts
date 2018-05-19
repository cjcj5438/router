import {Component, OnInit} from '@angular/core';
import {childOfKind} from 'tslint';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fater',
  templateUrl: './fater.component.html',
  styleUrls: ['./fater.component.css']
})
export class FaterComponent implements OnInit {
  ID: number;
  Name: string;

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeInfo.data.subscribe((data: { fater: Fater }) => {
      this.ID = data.fater.id;
      this.Name = data.fater.name;
    });
  }

}

export class Fater {
  constructor(public id: number, public name: string) {
  }
}
