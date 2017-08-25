import { Component, OnInit } from '@angular/core';
import { Human } from '../shared/services/family/human';
import { FamilyService } from '../shared/services/family/family.service';
import { LifeEvent } from '../shared/services/life-event/life-event';
import { LifeEventService } from '../shared/services/life-event/life-event.service';

@Component({
  selector: 'app-life-event',
  templateUrl: './life-event.component.html',
  styleUrls: ['./life-event.component.css',
                  '../shared/shared.css']

})
export class LifeEventComponent implements OnInit {

  family: Human[];
//  lifeEvents: LifeEvent[];

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.family = this.familyService.list;
 //   this.lifeEvents = this.lifeEventService.list;
  }

  isEmptyFamily(): boolean {
    return this.family.length === 0;
  }
}
