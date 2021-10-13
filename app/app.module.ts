import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes,RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewUserComponent} from './new-user/new-user.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {CascadingDropdownComponent} from './cascading-dropdown/cascading-dropdown.component';
import {PasswordToggleDirective} from './password-toggle.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { StudentHomepageComponent } from './student-homepage/student-homepage.component';


const appRoutes :Routes=[
  {path:"" , component: LoginComponent},
  {path:"newregister" , component: NewUserComponent},
  {path:"studenthomepage" , component: StudentHomepageComponent},
]

@NgModule({
  declarations: [AppComponent,LoginComponent,FooterComponent,NewUserComponent,HeaderComponent, CascadingDropdownComponent,PasswordToggleDirective, StudentHomepageComponent],
  
  imports: [MatRadioModule,BrowserModule,MatInputModule,MatCardModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,FlexLayoutModule,MatFormFieldModule,ReactiveFormsModule,MatButtonModule,MatToolbarModule,AppRoutingModule,AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes),HttpClientModule,
    BrowserAnimationsModule,MatIconModule,MatTabsModule,MatSidenavModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
