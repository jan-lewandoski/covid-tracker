import { Component, Input, OnInit } from '@angular/core';
import { SidebarOption } from 'src/app/core/models';

@Component({
  selector: 'custom-expansion-panel',
  templateUrl: './custom-expansion-panel.component.html',
  styleUrls: ['./custom-expansion-panel.component.scss'],
})
export class CustomExpansionPanelComponent implements OnInit {
  @Input() title: string;
  @Input() titleIconName: string;
  @Input() options: SidebarOption[];

  constructor() {}

  ngOnInit(): void {}
}
