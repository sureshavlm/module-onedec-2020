import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component'

@NgModule({
	declarations: [ LoginComponent ],
	providers: [],
	imports: [ BrowserModule, FormsModule ],
	bootstrap: [ LoginComponent ]
})

export class DemoModule {
	
}



