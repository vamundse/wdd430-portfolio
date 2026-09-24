import  { updateProject } from '@/lib/actions';

export default async function Page(props: { params: { id:string }}) {
    const params = await props.params;
    const id = params.id;

    return <form className="flex flex-col gap-4 m-12" action={updateProject.bind(null, id)}>
        <label className="flex flex-col">
            <div>Title:</div>
            <input className="border p-2 rounded bg-green-800/20 hover:bg-green-800/40" type="text" name="title" required />
        </label>
        <label className="flex flex-col">
            <div>Description:</div>
            <textarea className="border p-2 bg-green-800/20 hover:bg-green-800/40 rounded" name="description" required></textarea>
        </label>
        <label className="flex flex-col">
            <div>Technologies (separate by commas):</div>
            <input className="border p-2 bg-green-800/20 hover:bg-green-800/40 rounded" type="text" name="technologies" required />
        </label>
        <button className="border p-2 font-semibold rounded bg-green-800 text-white hover:bg-green-600 hover:cursor-pointer" type="submit">Update Project</button>
    </form>
}