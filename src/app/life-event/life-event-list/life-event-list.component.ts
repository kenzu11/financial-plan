import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../../shared/services/family/human';
import { LifeEvent } from '../../shared/services/life-event/life-event';
import { LifeEventService } from '../../shared/services/life-event/life-event.service';


@Component({
  selector: 'app-life-event-list',
  templateUrl: './life-event-list.component.html',
  styleUrls: ['./life-event-list.component.css']
})
export class LifeEventListComponent implements OnInit {

  @Input() family: Human[];
  events: LifeEvent[];


  constructor(private lifeEventService: LifeEventService ) { }
  ngOnInit() {
    this.events = this.lifeEventService.list;
  }

  //イベント：子コンポ―ネットから発生されたイベントを処理
  //htmlの(deleteLifeEvent)="deleteEventRow($event)で定義された場所
  deleteEventRow(e){
    //サービスのdelメソッドを呼び出し、データの削除
    this.lifeEventService.del(e);
    //表示するためにデータの再取得
    this.events = this.lifeEventService.list;
  }


}
