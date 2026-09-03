import { DestroyRef, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective {
  private elementRef = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  constructor() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(this.elementRef.nativeElement);

    this.destroyRef.onDestroy(() => {
      observer.disconnect();
    });
  }
}
