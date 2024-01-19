import { Routes } from '@angular/router';
import { OverviewComponent } from '../features/overview/overview.component';
import { SellsComponent } from '../features/sells/sells.component';
import { AnalyticsComponent } from '../features/analytics/analytics.component';

export const routes: Routes = [
    { 
        path: '', 
        component: OverviewComponent
    },
    { 
        path: 'sells', 
        component: SellsComponent
    },
    { 
        path: 'analytics', 
        component: AnalyticsComponent
    },
];
