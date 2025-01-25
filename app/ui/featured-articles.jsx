import { SideArticlesSkeleton, MainArticleSkeleton } from '@/ui/skeletons';
import { Suspense } from 'react';
import MainArticle from '@/components/articles/main-article';
import SideArticles from '@/components/articles/side-articles';
import NewestArticles from '@/components/articles/newest-articles';
import PopularArticles from '@/components/articles/popular-articles';

import { createClient } from '@/utils/supabase/client';

export default async function FeaturedArticles() {
    const supabase = createClient();



    async function getAllPosts() {
        const { data, error } = await supabase.from('blogposts').select('*');

        if (error) {
            console.error('Error fetching posts:', error.message);
            throw error;
        }

        return data;
    }

    async function getMostViewedPosts(limit = 6) {
        const { data, error } = await supabase
            .from('blogposts')
            .select('*')
            .order('views', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Error fetching most viewed posts:', error.message);
            throw error;
        }
        console.log(data);

        return data;
    }

    async function getNewestPosts(limit = 6) {
        const { data, error } = await supabase
            .from('blogposts')
            .select('*')
            .order('date', { ascending: false })
            .limit(limit);

        if (error) {
            console.error('Error fetching newest posts:', error.message);
            throw error;
        }

        return data;
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Suspense fallback={<MainArticleSkeleton />}>
                    <MainArticle getNewestPost={getNewestPosts} />
                </Suspense>
                <div className="ml-3 mt-2">
                    <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-300">
                            Featured
                        </h2>
                        <div className="h-px bg-black dark:bg-gray-200 w-full"></div>
                    </div>
                    <Suspense fallback={<SideArticlesSkeleton />}>
                        <SideArticles getAllPosts={getAllPosts} />
                    </Suspense>
                </div>
            </div>
            <div>
                <div className="ml-3 mt-2">
                    <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-300">
                            Newest
                        </h2>
                        <div className="h-px bg-black dark:bg-gray-200 w-full"></div>
                    </div>
                    <Suspense fallback={<SideArticlesSkeleton />}>
                        <NewestArticles getNewestPosts={getNewestPosts} />
                    </Suspense>
                </div>
                <div className="ml-3 mt-2">
                    <div className="flex items-center gap-4 mb-3">
                        <h2 className="text-xl font-semibold whitespace-nowrap text-gray-700 dark:text-gray-300">
                            Popular
                        </h2>
                        <div className="h-px bg-black dark:bg-gray-200 w-full"></div>
                    </div>
                    <Suspense fallback={<SideArticlesSkeleton />}>
                        <PopularArticles getMostViewedPosts={getMostViewedPosts} />
                    </Suspense>
                </div>
            </div>
        </>
    );
}
