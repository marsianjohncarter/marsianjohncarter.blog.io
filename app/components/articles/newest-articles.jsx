import { createClient } from '@/utils/supabase/client';
import BaseArticle from '@/components/articles/base-article';

export default async function NewestArticles() {
    const supabase = createClient();
    const { data: newestPosts } = await supabase.from('blogposts').select('*').order('date', { ascending: false }).limit(6);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0 md:px-5">
            {newestPosts.map((post, index) => (
                <div key={index}>
                    <BaseArticle
                        title={post.title}
                        description={post.description}
                        imageUrl={post.imageUrl}
                        id={post.id}
                        key={index}
                    />
                    <div className="h-px block md:hidden bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
                </div>
            ))}
        </div>
    );
};