import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[taskFinished]',
  standalone: true
})
export class TaskFinishedDirective implements OnInit {

  @Input() taskFinished: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
   if (this.taskFinished) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
  }

}
