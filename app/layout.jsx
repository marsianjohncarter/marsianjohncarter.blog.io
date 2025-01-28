import Navbar from '@/ui/navbar';
import Footer from '@/ui/footer';

import { monserrat } from '@/ui/fonts';
import './globals.css';

export const experimental_ppr = true;

export const metadata = {
    title: 'marsianjohncarter blog',
    description:
        'A explanatory technical blog that talks about the newest technologies.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className='dark'>
            <body className={`${monserrat.className} antialiased selection:bg-slate-200 selection:text-slate-600 dark:selection:bg-gray-800 dark:selection:text-gray-200`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}

