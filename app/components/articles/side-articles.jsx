import { createClient } from '@/utils/supabase/client';
import BaseArticle from '@/components/articles/base-article';

export default async function SideArticles() {
    const supabase = createClient();
    const { data: allPosts } = await supabase.from('blogposts').select('*');
    console.log(allPosts);
    return (
        <>
            {allPosts.map((post) => (
                <div key={post.id}>
                    <BaseArticle
                        title={post.title}
                        description={post.description}
                        imageUrl={post.imageUrl}
                    />
                    <div className="h-px bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
                </div>
            ))}
        </>
    );
}
