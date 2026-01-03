import { Injectable,signal, computed } from "@angular/core";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    //state management with signals
    private todoSignal = signal<Todo[]>([]);

    // read (expsed to components)
    readonly todos = computed(() => this.todoSignal());

    // create
    addTodo(title: string) {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false
        };
        this.todoSignal.update(todos => [...todos, newTodo]);
    }

    //update (toggle complete)
    toggleTodo(id: number) {
        this.todoSignal.update(todos => 
            todos.map(todo =>
                todo.id === id
                 ? { ...todo, completed: !todo.completed }
                 : todo
            )
        );
    }

    // update (edit title)
    updateTodo(id: number, title: string) {
        this.todoSignal.update(todos =>
            todos.map(todo =>
                todo.id === id
                ? {...todo, title}
                :todo
            )
        )
    }

    // delete
    deleteTodo(id: number) {
        this.todoSignal.update(todos =>
            todos.filter(todo => todo.id !== id)
        );
    }
}