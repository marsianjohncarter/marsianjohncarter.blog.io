import { SideArticlesSkeleton, MainArticleSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
import MainArticles from '@/components/articles/main-articles';
import SideArticles from '@/components/articles/side-articles';
import NewestArticles from '@/components/articles/newest-articles';
import PopularArticles from '@/components/articles/popular-articles';


export default async function HomePageArticles() {

    return (
        <>
            <MainArticles />
            <div className="max-w-4xl mx-auto mt-4">
                <div className="ml-3 mt-2">
                    <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-300">
                            Popular 🔥
                        </h2>
                        <div className="h-px bg-black dark:bg-gray-200 w-full"></div>
                    </div>
                    <Suspense fallback={<SideArticlesSkeleton />}>
                        <PopularArticles />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
