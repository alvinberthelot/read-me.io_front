import { Component } from '@angular/core';
import {MatAutocomplete} from '@angular/material'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {ReadMe} from "./services/readMe.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  versionAPI: string;

  constructor(private readMe: ReadMe){
    this.getVersion();
  }

  getVersion(){
    this.readMe.getVersion().subscribe(
      (result: any) => {
        this.versionAPI = result.version;
      }
    );
  }

  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.options.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  submitButton(event: any){
    console.log(event);
  }
}
