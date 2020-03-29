import { Component, AfterViewInit } from '@angular/core';
import { ServiceBotService } from './service/service-bot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private bot: ServiceBotService
  ) {}

  ngAfterViewInit() {
    console.log('service bot app initialized');
    this.bot.initServiceBot();
  }
}
