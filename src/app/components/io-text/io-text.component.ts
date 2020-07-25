import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-io-text',
  templateUrl: 'io-text.component.html',
  styleUrls: ['io-text.component.scss'],
})
export class IOTextComponent {
  private mode: ComponentMode = ComponentMode.Output;
  @Output()
  public valueChange = new EventEmitter<string>();
  @Input()
  value: string;

  validateTextChanges(value: string) {
    this.toggleMode();
    this.value = value;
    this.valueChange.emit(value);
  }

  cancelTextChanges() {
    this.toggleMode();
  }

  public inputMode() {
    return this.mode == ComponentMode.Input;
  }

  public outputMode() {
    return this.mode == ComponentMode.Output;
  }

  public toggleMode() {
    if (this.outputMode()) {
      this.mode = ComponentMode.Input;
    } else {
      this.mode = ComponentMode.Output;
    }
  }
}

enum ComponentMode {
  Input,
  Output,
}
