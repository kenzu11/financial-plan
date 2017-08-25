import { Injectable } from '@angular/core';

import { Human } from './human';


@Injectable()
export class FamilyService {

  family: Human[];

  constructor() {
    this.family = [];
    let family = localStorage.getItem('family');
    this.family = family ? JSON.parse(family): [];
    this.family.forEach(value => {
      value.birthday = new Date(value.birthday);
    })
  }

  add(human: Human): void {
    this.family.push(human);
    localStorage.setItem('family', JSON.stringify(this.family));

  }

  update(rownum: number, human: Human): void {
    this.family[rownum] = human;
    localStorage.setItem('family', JSON.stringify(this.family));
  }

  get list(): Human[] {
    return this.family;
  }

}
