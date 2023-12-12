import ProjectPanel from "../ui/projects/panel";
import { ProjectPanelSkeleton } from "../ui/projects/skeletons";
import { Suspense } from "react";

export default function Projects() {

    return (
        <div className="m-8">
            <Suspense fallback={<ProjectPanelSkeleton />}>
                <ProjectPanel />
            </Suspense>
        </div>
    );
}