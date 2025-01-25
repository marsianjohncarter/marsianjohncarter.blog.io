import Navbar from '@/ui/navbar';
import { spaceGrotesk } from '@/ui/fonts';
import './globals.css';


export const experimental_ppr = true;

export const metadata = {
    title: 'marsianjohncarter blog',
    description: 'A explanatory technical blog that talks about the newest technologies.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${spaceGrotesk.className} antialiased`}>
                <Navbar />
                {children}

            </body>
        </html>
    );
}
