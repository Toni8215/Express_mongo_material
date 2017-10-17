import { RepoService } from './repo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GitService } from './git.service';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import { SearchComponent } from './search-component/search-component.component';
import {MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {MatTooltipModule} from '@angular/material';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchTechComponent } from './search-tech/search-tech.component';
import { AppRoutingModule } from './app-routing-module';
import {MatChipsModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import { SavedLinksComponent } from './saved-links/saved-links.component';
import {MatCardModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchTechComponent,
    SavedLinksComponent,
    RegisterComponent,
    SignInComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpModule,
    MatChipsModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [GitService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }


