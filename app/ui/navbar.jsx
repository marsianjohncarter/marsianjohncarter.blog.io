'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import BlogLogo from '@/ui/blog-logo';

import './navbar.css';

const navigation = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Blog',
        link: '/blog',
    },
];

export default function Navbar() {
    const currentPath = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
        document.getElementById('menu-icon').checked = false;
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-black">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <BlogLogo />

                <input
                    className="menu-icon"
                    type="checkbox"
                    id="menu-icon"
                    name="menu-icon"
                    checked={isOpen}
                    onChange={toggleMenu}
                />
                <label htmlFor="menu-icon"></label>
                <nav className="nav">
                    <ul className="pt-5">
                        {navigation.map(({ name, link }) => (
                            <li key={link}>
                                <Link
                                    href={link}
                                    className={clsx(
                                        'block px-2 py-1 text-lg transition-colors duration-200 rounded-md mb-5',
                                        {
                                            'text-blue-500 dark:text-blue-400':
                                                currentPath === link,
                                        }
                                    )}
                                    onClick={handleLinkClick}
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                        <div className="hidden md:block">
                            <Link
                                type="button"
                                onClick={handleLinkClick}
                                className="bg-slate-200 py-3 px-16 text-black text-4xl font-bold rounded-md hover:bg-slate-300 hover:scale-105 transition-all cursor-pointer m-4"
                                href="/signin"
                            >
                                Sign In
                            </Link>
                            <Link
                                type="button"
                                onClick={handleLinkClick}
                                className="bg-slate-200 py-3 px-16 text-black text-4xl font-bold rounded-md hover:bg-slate-300 hover:scale-105 transition-all cursor-pointer m-4"
                                href="/signout"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </nav>
    );
}
