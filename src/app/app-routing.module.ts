import { NgModule,ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes:Routes= [
  { path:'',redirectTo:'app',pathMatch:'full' },
    { path: 'app',loadChildren: './components/module-components/structure.module#StructureModule' }, 
  { path: '**', redirectTo: '' }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

