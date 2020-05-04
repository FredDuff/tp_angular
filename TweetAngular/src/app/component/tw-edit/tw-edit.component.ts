import { Component, OnInit } from '@angular/core';
import { TwService } from 'src/app/services/tw/tw.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tw } from 'src/app/models/tw';

@Component({
  selector: 'app-tw-edit',
  templateUrl: './tw-edit.component.html',
  styleUrls: ['./tw-edit.component.css']
})
export class TwEditComponent implements OnInit {

  tw: Tw = {
    id: null,
    message: '',
    user_id: 1,
    created_at: null,
    updated_at: null
  };

  constructor(
    private twService: TwService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const twId = +this.route.snapshot.paramMap.get('id');
    
    this.twService.getTw(twId)
    .subscribe(tw => this.tw = tw);
  }

  goBack(): void {
    this.location.back();
  }

}
