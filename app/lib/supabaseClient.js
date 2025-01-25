



export async function addPost(
    title,
    description,
    date,
    views,
    readingTime,
    imageUrl,
    author
) {
    const { data, error } = await supabase
        .from('blogposts')
        .insert([
            { title, description, date, views, readingTime, imageUrl, author },
        ]);

    if (error) {
        console.error('Error creating post:', error.message);
        throw error;
    }

    return data[0];
}

export async function getPost(id) {
    const { data, error } = await supabase
        .from('blogposts')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error('Error fetching post:', error.message);
        throw error;
    }

    return data;
}
export async function getAllPosts() {
    const { data, error } = await supabase.from('blogposts').select('*');
    
    if (error) {
        console.error('Error fetching posts:', error.message);
        throw error;
    }

    return data;
}

export async function getMostViewedPosts(limit = 6) {
    const { data, error } = await supabase
        .from('blogposts')
        .select('*')
        .order('views', { ascending: false })
        .limit(limit);

    if (error) {
        console.error('Error fetching most viewed posts:', error.message);
        throw error;
    }
    console.log(data)

    return data;
}

export async function getNewestPosts(limit = 6) {
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


export async function deletePost(id) {
    const { data, error } = await supabase
        .from('blogposts')
        .delete()
        .eq('id', id);

    if (error || data.length === 0) {
        throw new Error(
            `Post with id ${id} not found or error deleting post: ${error.message}`
        );
    }

    return data;
}

export async function checkSession() {
    const {
        data: { session },
    } = await supabase.auth.getSession();
    return session;
}
