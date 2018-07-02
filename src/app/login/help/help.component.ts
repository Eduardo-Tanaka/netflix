import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Country } from './country.model';

@Component({
  selector: 'app-login-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

	public helpForm: FormGroup;
	public selectedHelp: string = 'email';
	public showSelectCountry: boolean = false;
	public selectedCountryClass: string = 'nf-flag-br';
	public countries: Country[] = [
		{
			id: 'AF',
			className: 'nf-flag-af',
			countryName: 'Afghanistan',
			countryCode: 93
		},
		{
			id: 'AX',
			className: 'nf-flag-ax',
			countryName: 'Åland Islands',
			countryCode: 358
		},
		{
			id: 'AL',
			className: 'nf-flag-al',
			countryName: 'Albania',
			countryCode: 355
		},
		{
			id: 'DZ',
			className: 'nf-flag-dz',
			countryName: 'Algeria',
			countryCode: 213
		},
		{
			id: 'AS',
			className: 'nf-flag-as',
			countryName: 'American Samoa',
			countryCode: 1
		},
		{
			id: 'AD',
			className: 'nf-flag-ad',
			countryName: 'Andorra',
			countryCode: 376
		},
		{
			id: 'AO',
			className: 'nf-flag-ao',
			countryName: 'Angola',
			countryCode: 244
		},
		{
			id: 'AI',
			className: 'nf-flag-ai',
			countryName: 'Anguilla',
			countryCode: 1
		},
		{
			id: 'AG',
			className: 'nf-flag-ag',
			countryName: 'Antigua &amp; Barbuda',
			countryCode: 1
		},
		{
			id: 'AR',
			className: 'nf-flag-ar',
			countryName: 'Argentina',
			countryCode: 54
		},
		{
			id: 'AM',
			className: 'nf-flag-am',
			countryName: 'Armenia',
			countryCode: 374
		},
		{
			id: 'AW',
			className: 'nf-flag-aw',
			countryName: 'Aruba',
			countryCode: 297
		},
		{
			id: 'AU',
			className: 'nf-flag-au',
			countryName: 'Australia',
			countryCode: 61
		},
		{
			id: 'AT',
			className: 'nf-flag-at',
			countryName: 'Austria',
			countryCode: 43
		},
		{
			id: 'AZ',
			className: 'nf-flag-az',
			countryName: 'Azerbaijan',
			countryCode: 994
		},
		{
			id: 'BS',
			className: 'nf-flag-bs',
			countryName: 'Bahamas',
			countryCode: 1
		},
		{
			id: 'BH',
			className: 'nf-flag-bh',
			countryName: 'Bahrain',
			countryCode: 973
		},
		{
			id: 'BD',
			className: 'nf-flag-bd',
			countryName: 'Bangladesh',
			countryCode: 880
		},
		{
			id: 'BB',
			className: 'nf-flag-bb',
			countryName: 'Barbados',
			countryCode: 1
		},
		{
			id: 'BY',
			className: 'nf-flag-by',
			countryName: 'Belarus',
			countryCode: 375
		},
		{
			id: 'BE',
			className: 'nf-flag-be',
			countryName: 'Belgium',
			countryCode: 32
		},
		{
			id: 'BZ',
			className: 'nf-flag-bz',
			countryName: 'Belize',
			countryCode: 501
		},
		{
			id: 'BJ',
			className: 'nf-flag-bj',
			countryName: 'Benin',
			countryCode: 229
		},
		{
			id: 'BM',
			className: 'nf-flag-bm',
			countryName: 'Bermuda',
			countryCode: 1
		},
		{
			id: 'BT',
			className: 'nf-flag-bt',
			countryName: 'Bhutan',
			countryCode: 975
		},
		{
			id: 'BO',
			className: 'nf-flag-bo',
			countryName: 'Bolivia',
			countryCode: 591
		},
		{
			id: 'BA',
			className: 'nf-flag-ba',
			countryName: 'Bosnia &amp; Herzegovina',
			countryCode: 387
		},
		{
			id: 'BW',
			className: 'nf-flag-bw',
			countryName: 'Botswana',
			countryCode: 267
		},
		{
			id: 'BR',
			className: 'nf-flag-br',
			countryName: 'Brazil',
			countryCode: 55
		},
		{
			id: 'IO',
			className: 'nf-flag-io',
			countryName: 'British Indian Ocean Territory',
			countryCode: 246
		}
	]

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  	this.helpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    });
  }

  changeSelectedHelp(selected: string) {
  	this.selectedHelp = selected;
  }

  openSelectCountry() {
  	this.showSelectCountry = !this.showSelectCountry;

  	setTimeout(() => {
  		//const list = <HTMLElement>document.querySelector('.ui-select-options');
	    const targetLi = <HTMLElement>document.querySelector('.ui-select-item-selected');
	    targetLi.scrollIntoView()
	    //list.scrollTop = (targetLi.offsetTop - 50);
  	}, 1);
  }

  selectCountry(country: Country) {
  	this.selectedCountryClass = country.className;
  	this.showSelectCountry = false;
  }

  submit() {
  	if (this.selectedHelp === 'email') {
  		this.helpForm.get('tel').setErrors(null);
		} else {
			this.helpForm.get('email').setErrors(null);
		}
  	if (this.helpForm.invalid) {
  		if (this.selectedHelp === 'email') {
  			this.helpForm.get('email').markAsTouched();
  		} else {
  			this.helpForm.get('tel').markAsTouched();
  		}
      return;
    }

    alert('OK, funcionalidade não implementada');
  }
}
