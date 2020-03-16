import { FilterPipe } from './pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule

} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DialogAddItemComponent } from './components/add-items/add-items.component';
import { RetailerComponent } from './pages/retailer/retailer.component';
import { ItemsComponent } from './pages/items/items.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { AnalyticContainerComponent } from './components/analytic-container/analytic-container.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { InviteRequestComponent } from './components/invite-request/invite-request.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DialogComponent } from './components/dialog/dialog.component';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { FeedbackCardComponent } from './components/feedback-card/feedback-card.component';
import { AddItemsComponent } from './components/add-items/add-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidePanelComponent,
    DashboardComponent,
    RetailerComponent,
    ItemsComponent,
    TransactionsComponent,
    LoginComponent,
    AnalyticContainerComponent,
    RecentOrdersComponent,
    InviteRequestComponent,
    ItemCardComponent,
    DialogComponent,
    DialogAddItemComponent,
    FeedbacksComponent,
    FeedbackCardComponent,
    AddItemsComponent,
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSelectModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AuthGuard, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
