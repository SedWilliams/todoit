import { Todo } from "../types/todo";

interface TodoItemProps {
    Todo: Todo;
    onCompletedChange(id: number, completed: boolean): void;
}

export default function TodoItem({Todo, onCompletedChange}: TodoItemProps) {

    return (
        <div className="border rounded-md border-neutral-700 p-2.5">
            <label>
                <input 
                type="checkbox"
                className="scale-125 mr-2.5"
                checked={Todo.completed}
                onChange={(e) => onCompletedChange(Todo.id, e.target.checked)}
                />
                <span className={ Todo.completed ? "line-through text-gray-800" : ""}>
                    {Todo.title}
                </span>
            </label>
        </div>
    );
}