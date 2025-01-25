import { BookmarkIcon } from '@heroicons/react/24/solid';
import { courierPrime } from '@/ui/fonts';


export default function BlogLogo() {
    return (
        <a
            href="/"
            className="flex items-center space-x-3"
        >
            <span className={`${courierPrime.className} self-center font-semibold whitespace-nowrap text-black dark:text-white`}>
                <div className='flex items-center grid-cols-2 justify-center'>
                    <BookmarkIcon className='h-8'/>
                    <span className='text-small'>marsianjohncarter</span>
                </div>
            </span>
        </a>
    );
}
