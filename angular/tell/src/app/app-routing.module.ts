import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//RouterModule 路由模块  routes 路由数组对象
import { CollectionComponent } from './collection/collection.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'list', //默认跳转
    pathMatch: 'full'   // 如果地址栏中输入没有定义的路由就跳转到one路由界面
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/:id',
    component: DetailComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'collection',
    component: CollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//根路由模块
  exports: [RouterModule],
})
export class AppRoutingModule { }

