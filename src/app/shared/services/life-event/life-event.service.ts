import { Injectable } from '@angular/core';
import { LifeEvent } from './life-event';


@Injectable()
export class LifeEventService {

  events: LifeEvent[];

  constructor() {
    this.events = [];
    let events = localStorage.getItem('events');
    this.events = events ? JSON.parse(events): [];
    this.events.forEach(value => {
      value.timestamp = new Date(value.timestamp);
      //console.log( value.familyPerson );
      //let person = JSON.stringify(value.familyPerson);
      //value.familyPerson = person?JSON.parse(person):[0];
    })
  }

  add(event: LifeEvent): void {
    this.events.push(event);
    this.events.sort((e1, e2) => e1.year - e2.year);
    localStorage.setItem('events', JSON.stringify(this.events));

  }

  del(evt: LifeEvent): void {
    let index: number;
    console.log(this.events);
    this.events = this.events.filter((event: LifeEvent) => {
      if (evt.uuid != event.uuid) {
        return event;
      }
    });

/*
    this.events.some((e, i, a) => {
      index = a.indexOf(e);
      return e.uuid === event.uuid;
    });

    if (index) {
      console.log(index + ':' + this.events.length);
      this.events.slice(index,1);
      console.log(index + '::' + this.events.length);

    }else{
      this.events = [];
    }*/

    console.log(this.events);

    localStorage.setItem('events', JSON.stringify(this.events));

  }


  update(event: LifeEvent): void {
    let index: number;
    this.events.some((e, i, a) => {
      index = a.indexOf(e);
      return e.uuid === event.uuid;
    });

    if (index) {
      this.events[index] = event;
    }else{
      this.events[0] = event;
      
    }

    this.events.sort((e1, e2) => e1.year - e2.year);
    localStorage.setItem('events', JSON.stringify(this.events));

  }

  get list(): LifeEvent[] {
    return this.events;
  }

}
