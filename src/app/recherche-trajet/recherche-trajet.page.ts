import { Component, OnInit } from '@angular/core';
import { mobiscroll, MbscCalendarOptions } from '@mobiscroll/angular';

mobiscroll.settings = {
  lang: 'fr',
  theme: 'material',
  display: 'bubble'
};
const now = new Date();

@Component({
  selector: 'app-recherche-trajet',
  templateUrl: './recherche-trajet.page.html',
  styleUrls: ['./recherche-trajet.page.scss'],
})
export class RechercheTrajetPage implements OnInit {
  calendarBottom: Date;
  calendarTop: Date;
  calendarCenter: Date;
  calendarBubble: Date;
  calendarFullscreen: Date;
  calendarInline: Date;

  calendarBottomSettings: MbscCalendarOptions = {
    display: 'bottom'
  };

  calendarTopSettings: MbscCalendarOptions = {
    display: 'top'
  };

  calendarCenterSettings: MbscCalendarOptions = {
    display: 'center'
  };

  calendarBubbleSettings: MbscCalendarOptions = {
    display: 'bubble'
  };

  calendarFullscreenSettings: MbscCalendarOptions = {
    display: 'center',
    layout: 'liquid'
  };

  calendarInlineSettings: MbscCalendarOptions = {
    display: 'inline'
  };
  private currentNumber = 0;
  constructor() { }
  private increment() {
    this.currentNumber++;
  }

  private decrement() {
    this.currentNumber--;
  }
  ngOnInit() {
  }

}
