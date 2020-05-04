import { Component, OnInit } from '@angular/core';

import { Tw } from '../../models/tw';
import { TwService } from '../../services/tw/tw.service'

@Component({
  selector: 'app-tw-list',
  templateUrl: './tw-list.component.html',
  styleUrls: ['./tw-list.component.css']
})
export class TwListComponent implements OnInit {

  tws: Tw[]
  addTw: Tw = {
    id: null,
    message: '',
    user_id: 1,
    created_at: null,
    updated_at: null
  };
  constructor(
    private twService: TwService
  ) {  }

  ngOnInit(): void {
    this.getTws();
  }

  getTws(): void {
    this.twService.getTws()
    .subscribe(tws => this.tws = tws.reverse());
  }

  deleteTw(tw: Tw): void {
    this.tws = this.tws.filter(t => t !== tw);
    this.twService.deleteTw(tw).subscribe(res => console.log(res));
  }

  receiveTw($event) {
    this.tws.unshift($event);
    this.addTw.message = '';
  }
}
