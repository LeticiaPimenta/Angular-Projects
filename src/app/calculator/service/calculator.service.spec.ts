import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('must ensure that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calculate(1, 4, CalculatorService.SUM);
      expect(soma).toEqual(5);
    })
  );



});
