import { Component, OnInit } from '@angular/core';

import { NgForm } from'@angular/forms';
import { Human } from '../../shared/services/family/human';
import { FamilyService } from '../../shared/services/family/family.service';
import { Relationship } from '../../shared/services/family/relationship';

import * as UUID from 'uuid';


@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent implements OnInit {

  human: Human;
  relationships: any;

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.relationships = new Relationship().get();
  }

  public onSubmit(form: NgForm): void {

    const human: Human = {
      id:UUID.v4(),
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.add(human);

    form.reset();
  }

}
