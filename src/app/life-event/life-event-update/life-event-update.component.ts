import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-life-event-update',
  templateUrl: './life-event-update.component.html',
  styleUrls: ['./life-event-update.component.css']
})
export class LifeEventUpdateComponent implements OnInit {

  @Input() event: LifeEvent;
  @Input() family: Human[];

  @Output() submitLifeEvent = new EventEmitter();
  @Output() deleteLifeEvent = new EventEmitter();


  constructor(private lifeEventService: LifeEventService) { }

  ngOnInit() {

  }

  //selectタグの[compareWith]属性で定義した関数
  //selectの選択状態を制御する。
  byId(item1: Human, item2: Human) {
    //null判定
    if(item1 == null || item2 == null){      
      return false;
    }    
    return item1.id === item2.id;
  }


  //イベント：削除ボタン
 deleteRow(){
    this.deleteLifeEvent.emit();
    //submitさせない
    return false;   
 }

  //イベント：サブミット
  onSubmit(form: NgForm): void {
    const event: LifeEvent = {
          uuid: form.value.uuid,
          year: form.value.year,
          familyPerson:form.value.familyPerson,
          eventName: form.value.eventName,
          money: form.value.money,
          timestamp: new Date()

        };
    this.lifeEventService.update(event);
    this.submitLifeEvent.emit();
    form.reset();  
  }

}
