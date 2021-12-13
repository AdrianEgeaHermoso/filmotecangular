import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmotecangular';

  public images=[
    {src:'/assets/img/marlon.png'},
    {src:'assets/img/marilyn.png'},
    {src:'assets/img/burt.png'},
    {src:'assets/img/marx.png'},
  ];

  edad = 0;

  constructor() { }
ngOnInit() {
}

  
}
