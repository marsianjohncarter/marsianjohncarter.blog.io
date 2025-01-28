import { BlogPostsSkeleton } from '@/ui/skeletons';
import { cinzelDecorative } from '@/ui/fonts';
export default function Loading() {
    const tenElements = Array.from({ length: 10 });

    return (
        <div className="max-w-4xl mx-auto w-full px-8 py-10 bg-white dark:bg-black text-black dark:text-white">
            <h1 className={`${cinzelDecorative.className} text-3xl font-bold mb-6 text-center`}>Blog Posts / Newest first</h1>
            <div className="space-y-4">
                {tenElements.map(index => (
                    <BlogPostsSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}
