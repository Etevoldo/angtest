import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  artUser: Array<number> = [1, 4, 7, 7];

  hideArts: Set<number> = new Set<number>();

  toggle(userId: number) {
    this.hideArts.clear();
    let firstArte = this.artUser[userId];
    let lastArte = this.artUser[userId + 1];

    for (let i = 0; i <= this.artUser[3];i++){
      if (firstArte > i || i >= lastArte)
        this.hideArts.add(i);
    }
  }

  isArteVisible(arteId: number): boolean {
    return !this.hideArts.has(arteId)
  }
  constructor() { }
}