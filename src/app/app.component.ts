import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'filmotecangular';
  tablon!: URL[];
  edad = 0;
  name = String;

  urls = [{"name":"ebay","url":"http://ebay.com"},
{"name":"amazon","url":"http://amazon.com"},
{"name":"msn","url":"http://msn.com"},
{"name":"yahoo","url":"http://yahoo.com"},
{"name":"wikipedia","url":"http://wikipedia.org"}];

  constructor() { }
ngOnInit() {
//this.tablon = ["https://www.py4u.net/discuss/1168541", "5", "8", "24", "32", "11", "55"];
//this.fruits = ["pera", "manzana", "melón", "sandía", "mango"];
}

  
}
