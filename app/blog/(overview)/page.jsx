import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import { cinzelDecorative } from '@/ui/fonts';

function BaseArticle({ id, title, description, readingTime, date }) {
    return (
        <div className="w-full mb-3">
            <Link href={`/blog/${id}`}>
                <Card className="w-full h-auto min-h-36 hover:border-gray-700 transition-all duration-300 ease-linear">
                    <CardHeader>
                        <div className='grid grid-rows-2 gap-4 grid-cols-1 md:grid-cols-4'>
                            <div className='col-span-3'>
                                <CardTitle
                                    className={`${cinzelDecorative.className} font-semibold mb-2`}
                                >
                                    {title}
                                </CardTitle>
                                <CardDescription className=" text-gray-500 truncate">
                                    {description}
                                </CardDescription>
                            </div>
                            <div>
                                <CardDescription className=" text-gray-500 ">
                                    {date} / {readingTime} min read
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent></CardContent>
                </Card>
            </Link>
        </div>
    );
}

function Post({ id, title, description, readingTime }) {
    const blogUrl = `/blog/${id}`;

    return (
        <Link href={blogUrl} key={id}>
            <article className="border dark:border-slate-600 rounded-lg p-4 mb-4 shadow hover:shadow-lg hover:border-slate-400 transition-all duration-300 ease-linear">
                <div className="grid grid-rows-2">
                    <div className="grid grid-cols-3">
                        <div className="col-span-3 md:col-span-2">
                            <h2 className="text-xl font-semibold mb-2 hyphens-auto line-clamp-1">
                                {title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 hyphens-auto">
                                {description}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-600 dark:text-gray-400 hidden md:block hyphens-auto">
                                {readingTime} minute read.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center text-center pt-20">
                        <p className="text-gray-600 dark:text-gray-400 block md:hidden">
                            {readingTime} minute read.
                        </p>
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default async function BlogPage() {
    // Create Supabase client
    const supabase = createClient();

    // Fetch blog posts from the database
    const { data: posts, error } = await supabase.from('blogposts').select('*');

    if (error) {
        console.error('Error fetching blog posts:', error.message);
        return (
            <div className="max-w-4xl mx-auto w-full px-8 py-10 bg-white dark:bg-black text-black dark:text-white">
                <h1 className="text-3xl font-bold mb-6">Error Loading Posts</h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Unable to load blog posts at this time.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto w-full px-8 py-10 bg-white dark:bg-black text-black dark:text-white">
            <h1 className={`${cinzelDecorative.className} text-3xl font-bold mb-6 text-center`}>
                Blog Posts / Newest first
            </h1>
            <div className="space-y-4">
                {posts?.length > 0 ? (
                    posts.map((item) => (
                        <BaseArticle {...item} id={item.id} key={item.id} />
                    ))
                ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                        No blog posts found.
                    </p>
                )}
            </div>
        </div>
    );
}
