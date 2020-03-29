import { TestBed } from '@angular/core/testing';

import { ServiceBotService } from './service-bot.service';

describe('ServiceBotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBotService = TestBed.get(ServiceBotService);
    expect(service).toBeTruthy();
  });
});
