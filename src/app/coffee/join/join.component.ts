import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent {
  @ViewChildren('inputElements', { read: ElementRef })
  inputElements!: QueryList<ElementRef>;
  readonly inputElementId = 'number-block-input-focus-id-';

  @HostListener('document:keydown.backspace', ['$event']) onKeydownHandler() {
    if (this.document.activeElement) {
      const currentInputId = parseInt(this.document.activeElement.id.slice(-1));

      if (currentInputId) {
        const previousInputRef = this.getInputElementReference(
          currentInputId - 1
        ) as HTMLInputElement;
        const currentInputRef = this.getInputElementReference(
          currentInputId as number
        );

        if (previousInputRef && currentInputRef.value.length === 0) {
          timer(10).subscribe(() => previousInputRef.focus());
        }
      }
    }
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  inputEvent($event: any, input: HTMLInputElement, idx: number) {
    if ($event.target.value.length > 1) {
      $event.target.value = 0;
    }

    const nextInputRef = this.getInputElementReference(
      idx + 1
    ) as HTMLInputElement;
    if (nextInputRef && !nextInputRef?.value) {
      nextInputRef.focus();
    }
  }

  focusEvent(idx: number) {
    this.clearInput(idx);
  }

  private clearInput(idx: number) {
    this.getInputElementReference(idx).value = '';
  }

  private getInputElementReference(key: string | number): HTMLInputElement {
    return this.document.getElementById(
      `${this.inputElementId}${key}`
    ) as HTMLInputElement;
  }
}
