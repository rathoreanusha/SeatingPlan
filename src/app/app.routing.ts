import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { NewPlanComponent } from 'app/new-plan/new-plan.component';
import { EditPlanComponent } from 'app/edit-plan/edit-plan.component';
import { HistoryComponent } from 'app/history/history.component';

const routes: Routes =[
    { 
      path: 'dashboard',     
      component: HomeComponent 
    },
    { 
      path: 'new-plan',       
      component: NewPlanComponent
    },
    { 
      path: 'edit-plan',      
      component: EditPlanComponent
    },
    { 
      path: 'history',        
      component: HistoryComponent
    },
    { 
      path: 'user',           
      component: UserComponent 
    },
    { 
      path: 'table',          
      component: TablesComponent 
    },
    { 
      path: 'typography',     
      component: TypographyComponent 
    },
    { 
      path: 'icons',          
      component: IconsComponent 
    },
    { 
      path: 'notifications',  
      component: NotificationsComponent   
    },
    { 
      path: 'upgrade',        
      component: UpgradeComponent 
    },
    { 
      path: '',          
      redirectTo: 'dashboard',    
      pathMatch: 'full' 
    }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
