
export function ProjectPanelSkeleton () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
            {[...Array(6)].map((_, index) => (
                <div key={index} className="shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 bg-gray-900 space-y-2">
                    <div className="flex justify-between space-x-1">
                        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-800 rounded w-1/4"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-800 rounded"></div>
                        <div className="h-4 bg-gray-800 rounded w-5/6"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}