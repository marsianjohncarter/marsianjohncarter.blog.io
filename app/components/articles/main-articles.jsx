import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { createClient } from '@/utils/supabase/server';

const ItemImage = ({ src, alt, width, height }) => (
    <Image
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover border border-gray-600 hover:border-gray-400 transition-all duration-300 ease-linear"
        src={src}
        alt={alt}
        width={width}
        height={height}
    />
);

export default async function MainArticles() {
    const supabase = createClient();
    const { data: newestPosts } = await supabase
        .from('blogposts')
        .select('*')
        .order('date', { ascending: false })
        .limit(4);
    
    return (
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {newestPosts.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={
                            <ItemImage
                                src={item.imageUrl}
                                alt={item.title}
                                width={700}
                                height={500}
                            />
                        }
                        className={clsx(
                            (i === 0 || i === newestPosts.length - 1) ? 'md:col-span-2' : 'md:col-span-1',
                            'overflow-hidden'
                        )}
                        link={`/blog/${item.id}`}
                    />
                ))}
            </BentoGrid>
    );
}
