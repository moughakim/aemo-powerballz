import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { HomeComponent } from './components/home/home.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemAnalyticsComponent } from './components/item-analytics/item-analytics.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemService } from './services/item.service';
import { ItemTypeService } from './services/item-type.service';
import { VideoMosaicComponent } from './components/video-mosaic/video-mosaic.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { WodPanelComponent } from './components/wod-panel/wod-panel.component';
import { MovementDetailsComponent } from './components/movement-details/movement-details.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    HomeComponent,
    SidebarComponent,
    MainContentComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemAnalyticsComponent,
    VideoMosaicComponent,
    LeaderBoardComponent,
    WodPanelComponent,
    MovementDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ItemService, ItemTypeService],
  bootstrap:[AppComponent]
})
export class AppModule { }
