'use client';

import { useActionState } from 'react';
import  { createProject, type State } from '@/lib/actions';

const initialState: State = {
    message: null,
    errors: {},
};

export default function CreateProjectForm() {
    const [state, formAction, isPending] = useActionState(createProject, initialState);

    return <form className="flex flex-col gap-4 m-12" action={formAction}>
        <label htmlFor="title" className="flex flex-col">
            <div>Title:</div>
        </label>
            <input
                className="border p-2 rounded bg-green-800/20 hover:bg-green-800/40"
                id="title"
                name="title"
                type="text"
                aria-describedby='title-error'
                required
            />
            <div id="title-error" aria-live="polite" aria-atomic="true">
                {state.errors?.title?.map((error) => (
                <p key={error}>{error}</p>
                ))}
            </div>
        <label htmlFor="description" className="flex flex-col">
            <div>Description:</div>
        </label>
            <textarea
                className="border p-2 bg-green-800/20 hover:bg-green-800/40 rounded"
                id="description"
                name="description"
                aria-describedby='description-error'
                required>
            </textarea>
            <div id="description-error" aria-live="polite" aria-atomic="true">
                {state.errors?.description?.map((error) => (
                <p key={error}>{error}</p>
                ))}
            </div>
        <label htmlFor="technologies" className="flex flex-col">
            <div>Technologies (separate by commas):</div>
        </label>
        <input
            className="border p-2 bg-green-800/20 hover:bg-green-800/40 rounded"
            id="technologies"
            type="text"
            name="technologies"
            aria-describedby="technologies-error"
            required />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
                {state.errors?.technologies?.map((error) => (
                <p key={error}>{error}</p>
                ))}
        </div>
            <label htmlFor="yearCompleted" className="flex flex-col">
                <div>Year Completed:</div>
            </label>
            <input
                className="border p-2 bg-green-800/20 hover:bg-green-800/40 rounded"
                id="yearCompleted"
                type="number"
                name="yearCompleted"
                aria-describedby="yearCompleted-error"
                required
            />
            <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
                {state.errors?.yearCompleted?.map((error) => (
                <p key={error}>{error}</p>
                ))}
            </div>
        
        <button className="border p-2 font-semibold rounded bg-green-800 text-white hover:bg-green-600 hover:cursor-pointer" type="submit">Create Project</button>
    </form>
}