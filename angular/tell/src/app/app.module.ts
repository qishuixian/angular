//BrowserModule封装在浏览器平台运行时的一些工具库，同时将commonModule和ApplicationModule打包导出
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';//HttpModule封装路由相关的服务等
import { RouterModule } from '@angular/router';//RouterModule封装路由相关的组件指令
import { ContactService } from './contact.service';//导入服务

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CollectionComponent } from './collection/collection.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/item.component';

import {
  UtilService,
  FooterComponent,
  HeaderComponent,
  PhonePipe,
  BtnClickDirective
} from './shared';

@NgModule({  //用于定义模块用的装饰器
  declarations: [  //导入模块依赖的组件、指令等
	AppComponent,
	CollectionComponent,
	DetailComponent,
	EditComponent,
	ListComponent,
	ListItemComponent,
	HeaderComponent,
  FooterComponent,
  PhonePipe,
  BtnClickDirective
  ],
  imports: [ //  用来导入当前模块所需的其他模块 
	BrowserModule, // BrowserModule注册了一些关键的provider和通用的指令，因此在imports属性中配置，作为模块供全局使用
	FormsModule,
	HttpModule,
	AppRoutingModule
  ],
  providers: [ContactService,UtilService],
  bootstrap: [AppComponent]  //bootstrap标记出引导组件，在angular启动时，奖被标记的组件渲染到模块中
})
export class AppModule { }
