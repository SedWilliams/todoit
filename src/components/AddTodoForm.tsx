import { useState } from "react";

interface AddTodoFormProps {
    onSubmit(title: String): void;
}

//form that allows for the creation of new todo items
export default function AddTodoForm({onSubmit}: AddTodoFormProps) {

    //"controlled" input form
    //we use state to manage the input form value
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!input.trim()) {
            return;
        }

        onSubmit(input);
        setInput("");
    }

    return (
        <div className="m-5">
            <form className="flex" onSubmit={handleSubmit}>
                <input 
                    placeholder="Enter your task..."
                    className="rounded-l-md grow border-neutral-700 p-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="w-16 rounded-r-md bg-slate-900 text-white"
                >
                    Add
                </button>
            </form>
        </div>
    );
} 
