import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './login.component.html',
	styleUrls: []
})

export class LoginComponent {
	username: string;
	title = 'Login Page';
	products: any;
	flag: boolean;

	constructor() {
		this.flag = true;
		this.username = 'admin_123';
		this.products = [
						{name: 'iPhone 10', price: 100000},
						{name: 'MacBook Pro', price: 70000},
	
						{name: 'iMac ', price: null},					];
	}

	change() {
		this.flag = !this.flag;
	}

	onLoginBtnClick() {
		alert('You clicked on Login button!');
	}

}
