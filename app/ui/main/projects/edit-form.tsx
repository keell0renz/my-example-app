import { getProjectById, editProject, deleteProject } from "@/app/lib/projects/data";

interface EditProjectFormProps {
    id: string;
}

export default async function EditProjectForm({ id }: EditProjectFormProps) {
    const boundEditProject = editProject.bind(null, id)
    const boundDeleteProject = deleteProject.bind(null, id)

    const project = await getProjectById(id)

    const { title, description } = project

    return (
        <div className="max-w-lg mx-auto">
            <form action={boundEditProject} className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input name="title" className="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" defaultValue={title}/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea name="description" className="shadow bg-gray-800 appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="description" defaultValue={description}/>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Edit Project
                        </button>
                    </div>
                </div>
            </form>
            <form action={boundDeleteProject}>
                <button className="bg-red-500 hover:bg-red-700 text-gray-200 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Delete Project
                </button>
            </form>
        </div>
    );
}





