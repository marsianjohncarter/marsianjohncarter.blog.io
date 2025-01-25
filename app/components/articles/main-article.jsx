import Image from "next/image";
import Link from "next/link";
import { createClient } from '@/utils/supabase/server';

export default async function MainArticle() {
    const supabase = createClient();
    const { data: newestPost } = await supabase.from('blogposts').select('*').order('date', { ascending: false }).limit(1);
    console.log(newestPost)
    const { title, description, date, imageUrl, id } = newestPost[0];
    return (
        <div className="m-3 col-span-2 lg:col-span-3 flex flex-col items-center">
            <Link href={`/blog/${id}`}>
                <div className="w-full flex justify-center">
                    <Image
                        className="rounded-2xl shadow-sm mb-2 border border-gray-600 hover:border-gray-400 transition-all duration-300 ease-linear"
                        src={imageUrl}
                        alt="Profile picture"
                        width={700}
                        height={500}
                    />
                </div>
                <div className="grid grid-cols-2 items-center mb-2 w-full lg:px-20">
                    <h3 className="text-2xl font-bold text-black dark:text-white truncate styled-link">
                        <span>{title}</span>
                    </h3>
                    <p className="text-black dark:text-white text-right opacity-85">
                        {date}
                    </p>
                </div>
                <div className="max-w-full w-full  lg:px-20">
                    <p className="text-black dark:text-gray-300 opacity-65 hyphens-auto break-words">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    );
};