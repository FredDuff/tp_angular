import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Tw } from '../../models/tw';
import { TwService } from '../../services/tw/tw.service';

@Component({
  selector: 'app-tw-form-add',
  templateUrl: './tw-form-add.component.html',
  styleUrls: ['./tw-form-add.component.css']
})
export class TwFormAddComponent implements OnInit {

  @Output() twEvent = new EventEmitter<Tw>();

  @Input() tw: Tw;


  constructor(private twService: TwService) { }

  ngOnInit(): void {
  }

  saveTw(): void {
    if (this.tw.id) {
      this.twService.updateTw(this.tw).subscribe(tw => {
        this.twEvent.emit(tw);
      })
    } else {
      this.twService.saveTw(this.tw).subscribe(tw =>  {
        this.twEvent.emit(tw);
      })
    }
  }
  
}
