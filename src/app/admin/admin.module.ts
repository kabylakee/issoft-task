import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminLayoutComponent} from './shared/componens/admin-layout/admin-layout.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {DashboardPageComponent} from './dashboard-page/dashboard-page.component';
import {CreatePostsPageComponent} from './create-posts-page/create-posts-page.component';
import {EditPostsPageComponent} from './edit-posts-page/edit-posts-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: "full"},
        {path: 'login', component: LoginPageComponent},
        {path: 'dashboard', component: DashboardPageComponent},
        {path: 'create', component: CreatePostsPageComponent},
        {path: 'post:/id/edit', component: EditPostsPageComponent},
      ]
    }
  ])],
  exports: [],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
    DashboardPageComponent,
    CreatePostsPageComponent,
    EditPostsPageComponent
  ]
})
export class AdminModule {
}
