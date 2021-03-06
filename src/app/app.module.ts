import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {  AngularFireDatabaseModule } from '@angular/fire/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PostsComponent } from './components/posts/posts.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ItemManagerComponent } from './components/item-manager/item-manager.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {DataService} from './data.service';

import{HttpClientModule} from '@angular/common/http';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MovieinfoComponent } from './components/movieinfo/movieinfo.component';
import { MoviedetailsService } from './moviedetails.service';
import { ImdbComponent } from './components/imdb/imdb.component';
import {WeatherService} from './weather.service';
import { WeatherComponent } from './components/weather/weather.component';
import { Item2Component } from './components/item2/item2.component';
import { GitProfilerComponent } from './components/git-profiler/git-profiler.component';
import { GitdataService } from './gitdata.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list.component';
import { TrackComponent } from './components/track/track.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactFormComponent,
    ItemManagerComponent,
    NavbarComponent,
    PostsComponent,
    CalculatorComponent,
    MovieinfoComponent,
    ImdbComponent,
    WeatherComponent,
    Item2Component,
    GitProfilerComponent,
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    TrackComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFirestoreModule,
AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      
      {path: 'items', component: ItemManagerComponent},
      {path: 'contacts', component:ContactFormComponent },
      {path: 'posts', component: PostsComponent},
      {path: 'Calculator', component: CalculatorComponent},
      {path: 'MovieInfo', component: MovieinfoComponent},
      {path: 'imdb', component: ImdbComponent},
      {path: 'Weather', component: WeatherComponent},
      {path: 'item2', component: Item2Component },
      {path: 'GitProfiler', component: GitProfilerComponent },
      {path: 'employee', component : EmployeeComponent},
      {path: 'track', component : TrackComponent},
    
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // ReactiveFormsModule
  ],
  providers: [DataService,MoviedetailsService,WeatherService,GitdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
