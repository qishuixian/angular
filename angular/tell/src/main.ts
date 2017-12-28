//项目的入口文件，通过这个文件来串联起整个项目
//要启动应用时，主要依赖于angular自带的platformBrowserDynamic函数和引用模块AppModule，然后调用platformBrowserDynamic().bootstrapModule()方法，来编译
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
