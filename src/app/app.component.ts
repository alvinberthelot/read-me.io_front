import { Component } from '@angular/core';
import {MatAutocomplete} from '@angular/material';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {ReadMe} from './services/readMe.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { extend } from 'webdriver-js-extender';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  templateControl: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;
  templates = [];
  extensions = [];

  constructor(private readMe: ReadMe) {
  }

  ngOnInit() {
    this.getTemplates();
    this.getExtention();
  }


  getTemplates() {
    this.readMe.getTemplates().subscribe(result => {
      this.templates = result;

      this.filteredOptions = this.templateControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filterLowerCase(val))
      );
    });
  }

  getExtention() {
    this.readMe.getExtention().subscribe(result => {
      result
        .map(item => {
          this.extensions.push({value: item, viewValue: "." + item})
        })
    });
  }

  filterLowerCase(val: string): string[] {
    return this.templates.filter(option => 
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  submitButton(event: any, extension: any) {
    console.log(event);
    console.log(extension);
  }
}
