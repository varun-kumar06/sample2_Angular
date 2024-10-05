import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private route:Router) {};

home(){
  this.route.navigate(["home"]);
}
contact(){
  this.route.navigate(["contact-us"]);
}
about(){
  this.route.navigate(["about-us"]);
}
}
