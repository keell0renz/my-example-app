import { Suspense } from "react";
import ProjectPanel from "@/app/ui/main/projects/panel";
import { ProjectPanelSkeleton } from "@/app/ui/main/projects/skeletons";

export default function Projects() {

    return (
        <div className="m-8">
            <Suspense fallback={<ProjectPanelSkeleton />}>
                <ProjectPanel />
            </Suspense>
        </div>
    );
}