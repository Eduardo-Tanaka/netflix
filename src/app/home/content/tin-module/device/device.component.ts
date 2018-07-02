import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

	@Input() activeIndex: boolean;
	
  constructor() { }

  ngOnInit() {
  }

}
