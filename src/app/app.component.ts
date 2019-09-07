import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sultan_the_Barbary_Lion.jpg/440px-Sultan_the_Barbary_Lion.jpg',
      description:'Leão'
    },
    {
      url:
      'https://www.worten.pt/i/0366c1e3c3f46a030081fde46d73d6ffff310aef.jpg',
      description:'Leoa'
    },
    {
      url:
      'https://www.worten.pt/i/0366c1e3c3f46a030081fde46d73d6ffff310aef.jpg',
      description:'Leoa'
    }
  ]
}
