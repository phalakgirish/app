import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'loginscreen',
    loadChildren: () => import('./pages/loginscreen/loginscreen.module').then( m => m.LoginscreenPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'readstatus/:id',
    loadChildren: () => import('./pages/readstatus/readstatus.module').then( m => m.ReadstatusPageModule)
  },
  {
    path: 'mygroup',
    loadChildren: () => import('./pages/mygroup/mygroup.module').then( m => m.MygroupPageModule)
  },
  {
    path: 'mydevotee/:id',
    loadChildren: () => import('./pages/mydevotee/mydevotee.module').then( m => m.MydevoteePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'mydevotee-list',
    loadChildren: () => import('./pages/mydevotee-list/mydevotee-list.module').then( m => m.MydevoteeListPageModule)
  },
  {
    path: 'devoteDashboard',
    loadChildren: () => import('./pages/devote-dashboard/devote-dashboard.module').then( m => m.DevoteDashboardPageModule)
  },
  {
    path: 'article-list',
    loadChildren: () => import('./pages/article/article-list/article-list.module').then( m => m.ArticleListPageModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./pages/article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'readmore/:id',
    loadChildren: () => import('./pages/readmore/readmore.module').then( m => m.ReadmorePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./pages/aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'upsana-registration',
    loadChildren: () => import('./pages/upsana-registration/upsana-registration.module').then( m => m.UpsanaRegistrationPageModule)
  },
  {
    path: 'upsana-upcomming/:id',
    loadChildren: () => import('./pages/upsana-upcomming/upsana-upcomming.module').then( m => m.UpsanaUpcommingPageModule)
  },
  {
    path: 'upsana-search-number/:id',
    loadChildren: () => import('./pages/upsana-search-number/upsana-search-number.module').then( m => m.UpsanaSearchNumberPageModule)
  },

  {
    path: 'upasana-users-list',
    loadChildren: () => import('./pages/upasana-users-list/upasana-users-list.module').then( m => m.UpasanaUsersListPageModule)
  },
  {
    path: 'upasana-list',
    loadChildren: () => import('./pages/upasana-list/upasana-list.module').then( m => m.UpasanaListPageModule)
  },
  {
    path: 'upasana-add-devotee',
    loadChildren: () => import('./pages/upasana-add-devotee/upasana-add-devotee.module').then( m => m.UpasanaAddDevoteePageModule)
  },
  {
    path: 'literature',
    loadChildren: () => import('./pages/literature/literature.module').then( m => m.LiteraturePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'mygroup-devotee',
    loadChildren: () => import('./pages/mygroup-devotee/mygroup-devotee.module').then( m => m.MygroupDevoteePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
