import { Todo } from "../types/todo";

interface TodoItemProps {
    Todo: Todo;
}

export default function TodoItem({Todo}: TodoItemProps) {

    return (
        <div>
            <label>
                <input 
                type="checkbox"
                />
            </label>
        </div>
    );
}