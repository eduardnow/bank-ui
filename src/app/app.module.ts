import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { HolderComponent } from './components/holder/holder.component';
import { AccountComponent } from './components/account/account.component';
import { ViewHolderComponent } from './components/view-holder/view-holder.component';
import { CreateHolderComponent } from './components/create-holder/create-holder.component';
import { HolderService } from './services/holder.service';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HolderComponent,
    AccountComponent,
    ViewHolderComponent,
    CreateHolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    HolderService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
