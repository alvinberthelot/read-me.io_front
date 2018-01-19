import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BarreFooterComponent } from './barre-footer/barre-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    BarreFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule, 
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
