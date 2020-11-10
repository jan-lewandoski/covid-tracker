import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() value: string;
  @Input() type: 'default' | 'withAction';
  @Input() iconName: string;
  @Output() onCloseClicked = new EventEmitter<boolean>();
  @Output() valueChange = new EventEmitter<string>();
  @ViewChild('inputRef') inputRef: ElementRef;

  constructor() {}

  closeClicked() {
    this.onCloseClicked.emit(true);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.inputRef.nativeElement.focus();
    });
  }
}
