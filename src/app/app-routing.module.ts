import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Test1Page } from './about/test1/test1.page';
import { Test1PageModule } from './about/test1/test1.module';
import { Test2PageModule } from './about/test2/test2.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 't1',
    loadChildren: () => import('./about/test1/test1.module').then(m => Test1PageModule)
  },
  {
    path: 'paget2',
    loadChildren: () => import('./about/test2/test2.module').then(m => Test2PageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./contact/info/info.module').then( m => m.InfoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
