import { Component } from '@angular/core';

@Component({
  template: `
    <dx-button
        text="Click me"
        (onClick)="helloWorld()">
    </dx-button>
    `,
})
export class DashboardComponent {
  constructor() {}
}
