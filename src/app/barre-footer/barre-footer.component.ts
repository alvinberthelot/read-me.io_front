import { Component, OnInit } from '@angular/core';
import { environment} from '../../environments/environment';
import {ReadMe} from '../services/readMe.service';

@Component({
  selector: 'app-barre-footer',
  templateUrl: './barre-footer.component.html',
  styleUrls: ['./barre-footer.component.scss']
})
export class BarreFooterComponent implements OnInit {

  versionAPI: string;
  pjson = environment.version;

  constructor(private readMe: ReadMe) {
    this.getVersion();
  }

  getVersion() {
    this.readMe.getVersion().subscribe(
      (result: any) => {
        this.versionAPI = result.version;
      }
    );
  }

  ngOnInit() {}
}