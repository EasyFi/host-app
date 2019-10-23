import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// MAterial 
// import {DomSanitizer} from '@angular/platform-browser';
// import {MatIconRegistry} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {MatIconModule} from '@angular/material/icon';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatButtonModule} from '@angular/material/button';
import {MaterialModule} from './material-module' ;
// Project Components
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';

// home 
import { HomeComponent } from './home/home.component';
import { FaultsComponent } from './home/faults/faults.component';
import { TodoListComponent } from './home/todoList/todoList.component';
import { AnalyticsComponent } from './home/analytics/analytics.component';

// devices
import { DEvicessComponent } from './devices/devices.component' ;
// recharges
import { RechargesComponent } from './recharges/recharges.component' ;
import { RechargeComponent } from './recharges/recharge/recharge.component' ;
import { RechargesCalendarComponent } from './recharges/rechargesCalendar/rechargesCalendar.component' ;
import { PackageComponent } from './recharges/package/package.component' ;

// accounts 
import { AccountsComponent } from './accounts/accounts.component' ;
import { LedgerComponent } from './accounts/ledger/ledger.component' ;
import { TopupComponent } from './accounts/topup/topup.component' ;
'./accounts/ledger/ledger.component' ;
import { TopupDenominationsComponent } from './accounts/topupDenominations/topupDenominations.component' ;


@NgModule({

  imports:      [ BrowserModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent
                , HelloComponent
                , LoginComponent 
                , HomeComponent
                , AnalyticsComponent
                , FaultsComponent
                , TodoListComponent
                , RechargesComponent
                , RechargeComponent
                , RechargesCalendarComponent
                , PackageComponent
                , AccountsComponent
                , LedgerComponent
                , TopupComponent
                , TopupDenominationsComponent
                ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
