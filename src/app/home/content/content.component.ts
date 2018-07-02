import { Component, OnInit } from '@angular/core';
import { Content } from './content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

	public activeIndex: number = 0;
	public navContents: Content[] = [
		{
			active: true,
			svgIcon: 'svg-icon-icon-cancel',
			xLink: '#icon-cancel',
			smallDivClass: 'icon-cancel',
			smallSvgIcon: 'svg-icon-icon-cancel',
			smallxLink: '#icon-cancel',
			type: 'Content.Nav1',
			typeShort: "Content.Nav1Short"
		},
		{
			active: false,
			svgIcon: 'svg-icon-icon-cross-device-screens-desktop',
			xLink: '#icon-cross-device-screens-desktop',
			smallDivClass: 'icon-cross-device-screens-small',
			smallSvgIcon: 'svg-icon-icon-cross-device-screens-small',
			smallxLink: '#icon-cross-device-screens-small',
			type: 'Content.Nav2',
			typeShort: "Content.Nav2Short"
		},
		{
			active: false,
			svgIcon: 'svg-icon-icon-price-tag',
			xLink: '#icon-price-tag',
			smallDivClass: 'icon-cross-device-screens-small',
			smallSvgIcon: 'icon-price-tag',
			smallxLink: '#icon-price-tag',
			type: 'Content.Nav3',
			typeShort: "Content.Nav3Short"
		}
	]

  constructor() { }

  ngOnInit() {
  }

  handleContentNavClick(index: number): void {
  	this.navContents[this.activeIndex].active = false;
  	this.navContents[index].active = true;
  	this.activeIndex = index;

  	const elem = <HTMLElement>document.getElementById('this-is-netflix');
  	elem.scrollIntoView();
  }

}
