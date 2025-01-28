'use client';

import { useState } from 'react';
import { Moon, MoonIcon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function ModeToggle() {
    const [theme, setTheme] = useState(
        process.env.theme
    );
    const handleThemeChange = () => {
        // setTheme(theme === 'light' ? 'dark' : 'light');
        // localStorage.setItem('theme', theme);
        switch (theme) {
            case 'light':
                document.querySelector('html').classList.remove('dark');
                document.querySelector('html').classList.add('light');
                break;
            case 'dark':
                document.querySelector('html').classList.remove('light');
                document.querySelector('html').classList.add('dark');
                break;
        }
    };

    return (
        <Button variant="outline" size="icon" onClick={handleThemeChange}>
            {theme === 'light' ? (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            ) : (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
