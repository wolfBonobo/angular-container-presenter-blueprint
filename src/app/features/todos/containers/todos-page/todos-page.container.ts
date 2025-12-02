import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosFacade } from '../../data-access/todos.facade';
import { TodosListComponent } from '@features/todos/components/todos-list/todos-list.component';
import { Todo } from '@features/todos/data-access/todo.model';
import { TodosStatsComponent } from '@features/todos/components/todos-stats/todos-stats.component';

@Component({
  selector: 'app-todos-page',
  standalone: true,
  imports: [CommonModule, TodosListComponent, TodosStatsComponent],
  templateUrl: './todos-page.container.html',
  styleUrl: './todos-page.container.css',
})
export class TodosPageContainer implements OnInit {
  private readonly facade = inject(TodosFacade);

  readonly todos$ = this.facade.todos$;
  readonly loading$ = this.facade.loading$;

  ngOnInit(): void {
    this.facade.loadTodos();
  }

  onToggle(todo: Todo): void {
    this.facade.toggle(todo);
  }

  onRemove(todo: Todo): void {
    this.facade.remove(todo);
  }
}
