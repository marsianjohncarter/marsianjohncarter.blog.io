'use client';

import { getAllPosts } from '@/lib/supabaseClient';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';



const Post = ({ id, title, description, readingTime }) => {
    const blogUrl = `/blog/id${id}`;

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
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto w-full px-8 py-10 bg-white dark:bg-black text-black dark:text-white">

            <h1 className="text-3xl font-bold mb-6">
                Blog Posts / Newest first
            </h1>
            <div className="space-y-4">
                {posts.map((item) => (
                    <Post {...item} id={item.id} key={item.id} />
                ))}
            </div>
        </div>
    );
}
