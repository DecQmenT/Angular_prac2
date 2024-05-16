import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[moveButton]',
  standalone: true
})
export class MoveButtonDirective {
  private moveCount: number = 0;
  private maxMoves: number = 5;

  constructor(private e: ElementRef) { 
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.moveCount < this.maxMoves) {
      this.e.nativeElement.style.position = 'absolute';
      this.e.nativeElement.style.left = Math.random() * 90 + '%';
      this.e.nativeElement.style.top = Math.random() * 90 + '%';
      this.moveCount++;
    }
  }
}
