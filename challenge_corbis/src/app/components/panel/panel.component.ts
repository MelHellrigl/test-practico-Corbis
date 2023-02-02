import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  public objetives: Array<any> = [];
  public perspectives: Array<any> = [];

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.getObjetives();
    this.getPerspectives();
  }

  public getObjetives() {
    this.apiservice.getApi().subscribe((resp: any) => {
      this.objetives = resp.objectives;
    });
  }
  public getPerspectives() {
    this.apiservice.getApi().subscribe((resp: any) => {
      this.perspectives = resp.perspectives;
    });
  }
}
