import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  hideArts: Set<number> = new Set<number>();

  toggle(arteId: number) {
    if (this.hideArts.has(arteId)) {
      this.hideArts.delete(arteId);
    }
    else {
      this.hideArts.add(arteId);
    }
  }

  isArteVisible(arteId: number): boolean {
    return !this.hideArts.has(arteId)
  }
  constructor() { }
}
