import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('./views/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'newest',
    loadChildren: () =>
      import('./views/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'oldest',
    loadChildren: () =>
      import('./views/gallery/gallery.module').then((m) => m.GalleryModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./views/add-new-meme/add-new-meme.module').then(
        (m) => m.AddNewMemeModule
      ),
  },
  {
    path: 'random',
    loadChildren: () =>
      import('./views/random-meme/random-meme.module').then(
        (m) => m.RandomMemeModule
      ),
  },
  {
    path: 'meme/:id',
    loadChildren: () =>
      import('./views/single-meme/single-meme.module').then(
        (m) => m.SingleMemeModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'logout',
    loadChildren: () =>
      import('./views/logout/logout.module').then((m) => m.LogoutModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./views/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'user/:username',
    loadChildren: () =>
      import('./views/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./views/admin-dashboard/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./views/gallery/gallery.module').then((m) => m.GalleryModule),
  },

  {
    path: '**',
    loadChildren: () =>
      import('./views/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
