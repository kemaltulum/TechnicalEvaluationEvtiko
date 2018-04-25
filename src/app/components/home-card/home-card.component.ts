import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../modals/home.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {
  @Input('home') home: Home;

  constructor() { }

  ngOnInit() {
  }

}
