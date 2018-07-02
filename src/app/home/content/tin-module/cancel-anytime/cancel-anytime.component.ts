import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cancel-anytime',
  templateUrl: './cancel-anytime.component.html',
  styleUrls: ['./cancel-anytime.component.css']
})
export class CancelAnytimeComponent implements OnInit {

	@Input() activeIndex: boolean;

  constructor() { }

  ngOnInit() {
  }

}
