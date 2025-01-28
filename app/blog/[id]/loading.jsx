export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto p-4 mt-8">
            <div className="flex justify-center mb-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
            
            <div className="animate-pulse flex flex-col space-y-6">
                <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                <div className="space-y-3">
                    <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 w-4/5 bg-gray-200 dark:bg-gray-700 rounded"></div>
                </div>
            </div>
        </div>
    );
}
