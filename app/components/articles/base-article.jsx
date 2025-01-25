import Link from 'next/link';
import Image from 'next/image';

export default function BaseArticle({ title, description, imageUrl, id }) {
    return (
        <div className="grid grid-cols-3 mb-3">
            <Link href={`/blog/${id}`}>
                <Image
                    className="rounded-md shadow-sm mb-2 aspect-3/2 border dark:border-gray-700"
                    src={imageUrl}
                    alt="Article image"
                    width={100}
                    height={400}
                />
            </Link>

            <div className="flex flex-col gap-1 col-span-2 ml-2">
                <Link href={`/blog/${id}`}>
                    <h3 className="text-base font-bold text-black dark:text-white truncate">
                        {title}
                    </h3>
                    <p className="text-xs text-gray-700 font-bold dark:font-medium dark:text-gray-400 hyphens-auto">
                        {description}
                    </p>
                </Link>
            </div>
        </div>
    );
};