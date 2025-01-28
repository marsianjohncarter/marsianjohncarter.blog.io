import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';

import { cinzelDecorative } from '@/ui/fonts';


export default function BaseArticle({
    title,
    description,
    imageUrl,
    id,
    date,
}) {
    return (
        <div className="w-full mb-3">
            <Link href={`/blog/${id}`}>
                <Card className="w-full h-auto min-h-36 hover:border-gray-700 transition-all duration-300 ease-linear">
                    <CardHeader>
                        <CardTitle
                            className={`${cinzelDecorative.className} font-semibold truncate`}
                        >
                            {title}
                        </CardTitle>
                        <CardDescription className=" text-gray-500 truncate">
                            {description}
                        </CardDescription>
                        <CardDescription className=" text-gray-500 ">
                            {date}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}
