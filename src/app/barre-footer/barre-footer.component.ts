import { Component, OnInit } from '@angular/core';
import { environment} from "../../environments/environment";
@Component({
  selector: 'app-barre-footer',
  templateUrl: './barre-footer.component.html',
  styleUrls: ['./barre-footer.component.scss']
})
export class BarreFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pjson = environment.version
}

