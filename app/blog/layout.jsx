import { spaceGrotesk } from '@/ui/fonts';
import Navbar from '@/ui/navbar';

export const metadata = {
    title: 'All Blog posts',
    description: 'All marsianjohncarter blogposts in order.',
};

export default function RootLayout({ children }) {
    return (
        <div className='bg-white dark:bg-black'>
                {children}
        </div>
    );
}
