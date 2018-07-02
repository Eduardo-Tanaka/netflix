import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../content.model';

@Component({
  selector: 'app-content-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	@Input() content: Content

  constructor() { }

  ngOnInit() {
  }

}
