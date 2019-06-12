import { Component, OnInit } from '@angular/core';
import {MbscCalendarOptions} from '@mobiscroll/angular';

@Component({
  selector: 'app-proposer-trajet',
  templateUrl: './proposer-trajet.page.html',
  styleUrls: ['./proposer-trajet.page.scss'],
})
export class ProposerTrajetPage implements OnInit {

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
