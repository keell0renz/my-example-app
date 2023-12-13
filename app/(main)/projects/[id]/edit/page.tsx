import EditProjectForm from "@/app/ui/main/projects/edit-form";

export default function EditProjects({ params }: { params: { id: string } }) {

    return (
        <div className="m-16">
            <EditProjectForm id={params.id} />
        </div>
    );
}