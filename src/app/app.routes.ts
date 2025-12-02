import { Routes } from '@angular/router';
import { TodosPageContainer } from '@features/todos/containers/todos-page/todos-page.container';

export const routes: Routes = [
  {
    path: '',
    component: TodosPageContainer,
  },
  // You can add additional feature routes here in the future
];
