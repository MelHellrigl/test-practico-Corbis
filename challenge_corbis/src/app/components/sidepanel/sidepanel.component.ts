import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css'],
})
export class SidepanelComponent implements OnInit {
  public comments: Array<any> = [];

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.getComment();
  }

  public getComment() {
    this.apiservice.getApi().subscribe((resp: any) => {
      this.comments = resp.comments;
    });
  }
}
