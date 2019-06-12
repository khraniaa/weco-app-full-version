import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publier-trajet',
  templateUrl: './publier-trajet.page.html',
  styleUrls: ['./publier-trajet.page.scss'],
})
export class PublierTrajetPage implements OnInit {
  private currentNumber = 5;
  constructor() { }
  private decrement() {
    this.currentNumber--;
  }
  ngOnInit() {
  }

}
