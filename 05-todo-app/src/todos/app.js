import todoStore from '../store/todo.store';
import html from './app.html?raw';
import { Todo } from './models/todo.model';
import { renderPending, renderTodos } from './use-cases';
import {Filters} from '../store/todo.store'

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount= () =>{
        renderPending(ElementIds.PendingCountLabel);
    }

    // Cuando la función App() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);

        displayTodos();
    })();

    // Referencias HTML
    const newDesccriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUL = document.querySelector(ElementIds.TodoList);
    const clearCompletedButton = document.querySelector(ElementIds.ClearCompletedButton);
    const filtersUL = document.querySelectorAll(ElementIds.TodoFilters);

    newDesccriptionInput.addEventListener('keyup', (e) =>{
        if(e.keyCode !== 13) return;
        if (e.target.value.trim().length === 0) return;

        todoStore.addTodo(e.target.value);
        displayTodos();
        e.target.value = '';
    });

    todoListUL.addEventListener('click', (e) =>{
        const element = e.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    todoListUL.addEventListener('click', (e) =>{
        const isDestroyedElement = e.target.className === 'destroy';
        const element = e.target.closest('[data-id]');
        if(!element || !isDestroyedElement) return;
        
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    clearCompletedButton.addEventListener('click', () =>{
        todoStore.deletedCompleted();
        displayTodos();
    });

    filtersUL.forEach(element =>{
        element.addEventListener('click', (element) =>{
            filtersUL.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();
        });
    });
}