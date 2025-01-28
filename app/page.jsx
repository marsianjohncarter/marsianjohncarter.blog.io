import Link from 'next/link';
import FeaturedArticles from '@/ui/home-page-article';
import { cinzelDecorative } from '@/ui/fonts';
export default function Home() {
    return (
        <section className="bg-white dark:bg-black">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-start lg:py-16 lg:px-12">
                <div className="text-center">
                    <h1
                        className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${cinzelDecorative.className}`}
                    >
                        Blog
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-2  dark:text-gray-400">
                        Discover the latest trends and insights in technology
                        with my blog.
                    </p>
                </div>
                <FeaturedArticles />
                <div className="flex flex-col mb-8 lg:mb-16 space-y-4 justify-center items-center sm:space-y-0 sm:space-x-4 my-10">
                    <Link
                        href="/blog"
                        className="animated-button dark:bg-black"
                    >
                        <span>All Posts</span>
                        <span>All Posts</span>
                        <span>All Posts</span>
                        <span>All Posts</span>
                        <span>All Posts</span>
                    </Link>
                </div>
                
            </div>
        </section>
    );
}
