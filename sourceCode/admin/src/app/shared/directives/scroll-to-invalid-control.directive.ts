import { Directive, HostListener, ElementRef } from "@angular/core";
import { FormGroupDirective } from "@angular/forms";

@Directive({
  selector: "[ScrollToInvalidControl]",
  standalone: false,
})
export class ScrollToInvalidControlDirective {
  constructor(
    private el: ElementRef,
    private formGroupDir: FormGroupDirective
  ) {}

  @HostListener("ngSubmit") onSubmit() {
    if (this.formGroupDir.control.invalid) {
      this.scrollToFirstInvalidControl();
    }
  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement =
      this.el.nativeElement.querySelector(".ng-invalid");

    scroll({
      top: this.getTopOffset(firstInvalidControl),
      behavior: "smooth",
    });

    firstInvalidControl.focus();
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 35;
    const controlElTop = controlEl.getBoundingClientRect().top;
    const absoluteControlElTop = controlElTop + window.scrollY;

    return absoluteControlElTop - labelOffset;
  }
}
