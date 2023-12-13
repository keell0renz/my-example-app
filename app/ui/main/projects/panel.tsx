import { getProjects } from "@/app/lib/projects/data"

interface ProjectCardProps {
    id: string,
    title: string,
    description: string,
    created_at: Date
}

function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 bg-gray-900 hover:bg-gray-800">
            <div className="flex justify-between">
                <h2 className="font-bold text-2xl mb-2">{props.title}</h2>
                <p className="text-grey-dark">{props.created_at.toLocaleDateString()}</p>
            </div>
            <p className="text-grey-darker text-base">{props.description}</p>
        </div>
    );
}

export default async function ProjectPanel() {
    const projects = await getProjects();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
                <ProjectCard key={index} id={project.id} title={project.title} description={project.description} created_at={project.created_at}/>
            ))}
        </div>
    );
}