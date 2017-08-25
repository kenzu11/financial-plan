import { Component, OnInit } from '@angular/core';

import { FamilyService } from '../../shared/services/family/family.service';
import { Human } from '../../shared/services/family/human';


@Component({
  selector: 'app-family-list',
  templateUrl: './family-list.component.html',
  styleUrls: ['./family-list.component.css']
})
export class FamilyListComponent implements OnInit {

  family: Human[];

  constructor(private familyService: FamilyService) { }

  ngOnInit() {
    this.family = this.familyService.list;
  }


}
