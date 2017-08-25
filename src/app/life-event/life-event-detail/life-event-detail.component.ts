import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';

@Component({
  selector: 'app-life-event-detail',
  templateUrl: './life-event-detail.component.html',
  styleUrls: ['./life-event-detail.component.css']
})
export class LifeEventDetailComponent implements OnInit {

  @Input() event: LifeEvent;
  @Input() family: Human[];

  @Input()  isEdit:boolean=false;

  @Output() deleteLifeEvent = new EventEmitter<LifeEvent>();


  constructor() { }

  ngOnInit() {
  }


  ageOfYear(birthday: Date, year: number = new Date().getFullYear()): number {
    return year - birthday.getFullYear();
  }

  //イベント：子コンポ―ネット（life-event-update）から発生されたイベントを処理
  //htmlの(submitLifeEvent)="changeEvent()"で定義された場所
  changeEvent() {
    this.isEdit = false;
  }

  //イベント：子コンポ―ネット（life-event-update）から発生されたイベントを処理
  //htmlの(deleteLifeEvent)="deleteEventRow()で定義された場所
  deleteEvent(){
    this.deleteLifeEvent.emit(this.event);
    this.isEdit = false;
  }

  //イベント：このコンポーネントのクリックイベント
  onClick(){
    //編集モード（このコンポーネントを非表示に。life-event-updateを表示に）に移行
    this.isEdit=true;
  }

}
