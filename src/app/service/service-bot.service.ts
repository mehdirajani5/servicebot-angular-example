import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceBotService {

  constructor() { }

  initServiceBot() {
    const scriptText = `window.servicebotSettings = {
        servicebot_id: "E0OQN0P0Dort", // LIVE & TEST MODE IDs ARE DIFFERENT
        service: "Flat Subscription",
        email: "test@gmail.com" // REPLACE WITH USER'S EMAIL
      };
      (function () {
        var s = document.createElement('script');
        s.src = 'https://js.servicebot.io/embeds/servicebot-billing-settings-embed.js';
        s.async = true; s.type = 'text/javascript';
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
      })();`;

    const scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.text = scriptText;
    document.body.appendChild(scriptTag);
  }
}
