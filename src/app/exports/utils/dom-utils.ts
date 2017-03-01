import { ElementRef } from '@angular/core';
import { WindowRef } from '../window-ref';

export function centerWindowPosition(elementRef: ElementRef, windowRef: WindowRef) {
  const rect = elementRef.nativeElement.getBoundingClientRect();
  const elmHeight = rect.height;
  const elmWidth = rect.width;
  const winHeight = windowRef.innerHeight;
  const winWidth = windowRef.innerWidth;

  return {
    left: ( winWidth - elmWidth) / 2,
    top: ( winHeight - elmHeight) / 2
  };
}
