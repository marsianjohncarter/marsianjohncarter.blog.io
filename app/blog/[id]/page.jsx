import { createClient } from '@/utils/supabase/server';
import BlogPostClient from './blog-post-client';

export default async function BlogPostPage({ params }) {
  const supabase = createClient();
  const { data: post, error } = await supabase
    .from('blogposts')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error) {
    console.error('Error fetching post:', error.message);
    throw error;
  }

  return <BlogPostClient initialPost={post} id={params.id} />;
}
