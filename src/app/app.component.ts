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
  
  templates = [
    'Java',
    'Javascript',
    'C#'
  ];

  extensions = [
    {value: 'txt', viewValue: '.txt'},
    {value: 'asciii-doc', viewValue: '.ascii-doc'},
    {value: 'markdown', viewValue: '.md'}
  ]

  readmeFile: string;
  versionAPI: string;
  
  filteredOptions: Observable<string[]>;

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

  submitButton(template: any, extension: any) {
    console.log(template, extension);

    if(template == undefined && extension == undefined)
    {
      this.readMe.getReadme().subscribe( ReadMe => {
        this.readmeFile = ReadMe;
      });
    }
    else
    {
      
    }
  }

  ngOnInit() {
    this.filteredOptions = this.templateControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.templates.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
