import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
})
export class PricingComponent implements OnInit {
  constructor() {
    render({
      id: '#myPaypalButtons20',
      currency: 'USD',
      value: '20.00',
      onApprove: (details) => {},
    });
    render({
      id: '#myPaypalButtons60',
      currency: 'USD',
      value: '60.00',
      onApprove: (details) => {},
    });
  }

  ngOnInit(): void {}
}
