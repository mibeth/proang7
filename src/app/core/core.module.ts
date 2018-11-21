import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainMenuHeaderComponent } from './components/main-menu-header/main-menu-header.component';
import { BtnSearchComponent } from './components/btn-search/btn-search.component';
import { TopNavUserIconComponent } from './components/top-nav-user-icon/top-nav-user-icon.component';
import { ApplicationPipesModuleModule } from '../application-pipes-module/application-pipes-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, AsideLeftComponent, MainContentComponent, MainMenuComponent, MainMenuHeaderComponent, BtnSearchComponent, TopNavUserIconComponent],
  imports: [
    CommonModule,
    FormsModule,
    ApplicationPipesModuleModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
