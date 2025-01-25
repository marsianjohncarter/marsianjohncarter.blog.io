'use client';

const Skeleton = ({ className }) => (
    <div aria-live="polite" aria-busy="true" className={className}>
        <span
            className={
                'inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none'
            }
        >
            ‌
        </span>
        <br />
    </div>
);

const HeaderSkeleton = ({ className }) => (
    <div aria-live="polite" aria-busy="true" className={className}>
        <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none h-6">
            ‌
        </span>
        <br />
    </div>
);

const SVGSkeleton = ({ className }) => (
    <svg className={className + ' animate-pulse rounded bg-gray-300'} />
);

export const SideArticlesSkeleton = () => {
    return (
        <>
            <div className="grid grid-cols-3 mb-3">
                <SVGSkeleton className="justify-center rounded-md shadow-sm mb-2 w-[100px] h-[69px] md:w-[85px] md:h-[54px]" />
                <div className="flex flex-col gap-1 col-span-2 ml-5">
                    <HeaderSkeleton className="text-base font-medium text-white w-3/6" />
                    <div className="text-xs text-gray-400 hyphens-auto">
                        <Skeleton className="rounded-none" />
                        <Skeleton className="rounded-none" />
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
            <div className="grid grid-cols-3 mb-3">
                <SVGSkeleton className="justify-center rounded-md shadow-sm mb-2 w-[100px] h-[69px] md:w-[85px] md:h-[54px]" />
                <div className="flex flex-col gap-1 col-span-2 ml-5">
                    <HeaderSkeleton className="text-base font-medium text-white w-3/6" />
                    <div className="text-xs text-gray-400 hyphens-auto">
                        <Skeleton className="rounded-none" />
                        <Skeleton className="rounded-none" />
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
            <div className="grid grid-cols-3 mb-3">
                <SVGSkeleton className="justify-center rounded-md shadow-sm mb-2 w-[100px] h-[69px] md:w-[85px] md:h-[54px]" />
                <div className="flex flex-col gap-1 col-span-2 ml-5">
                    <HeaderSkeleton className="text-base font-medium text-white w-3/6" />
                    <div className="text-xs text-gray-400 hyphens-auto">
                        <Skeleton className="rounded-none" />
                        <Skeleton className="rounded-none" />
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
            <div className="grid grid-cols-3 mb-3">
                <SVGSkeleton className="justify-center rounded-md shadow-sm mb-2 w-[100px] h-[69px] md:w-[85px] md:h-[54px]" />
                <div className="flex flex-col gap-1 col-span-2 ml-5">
                    <HeaderSkeleton className="text-base font-medium text-white w-3/6" />
                    <div className="text-xs text-gray-400 hyphens-auto">
                        <Skeleton className="rounded-none" />
                        <Skeleton className="rounded-none" />
                    </div>
                </div>
            </div>
            <div className="h-px bg-gray-600 w-full opacity-20 mb-4 dark:bg-gray-200" />
        </>
    );
};

export const MainArticleSkeleton = () => {
    return (
        <div className="m-3 col-span-2">
            <SVGSkeleton className="rounded-2xl shadow-sm mb-2 w-full aspect-3/2" />

            <div className="flex justify-between items-center mb-2">
                <div className="flex-1">
                    <HeaderSkeleton className="w-[150px] h-6" />
                </div>
                <div className="flex-none">
                    <Skeleton className="w-[136px] h-6" />
                </div>
            </div>
            <div className="w-full">
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-3/4 h-6" />
            </div>
        </div>
    );
};

export const BlogPostsSkeleton = () => {
    return (
        <div className="border dark:border-slate-600 rounded-lg p-4 mb-4 shadow hover:shadow-lg hover:border-slate-400 transition-all duration-300 ease-linear">
            <div className="grid grid-rows-2">
                <div className="grid">
                    <div className="col-span-3">
                        <HeaderSkeleton className='w-2/6 mb-4'/>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />

                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 hidden md:block hyphens-auto">

                        </p>
                    </div>
                </div>
                <div className="flex justify-center text-center pt-20">
                    <Skeleton className='w-[20%] md:w-[10%]' />
                    <p className="text-gray-600 dark:text-gray-400 block md:hidden">

                    </p>
                </div>
                <div className="mt-5 hidden md:block">

                </div>
            </div>
        </div>
    );
};
