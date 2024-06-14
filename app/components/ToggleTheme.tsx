'use client';

import { useEffect, useState } from "react";

const ToggleTheme = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const doc = document.querySelector('html');
        const theme = dark ? "synthwave" : "valentine";
        doc?.setAttribute('data-theme', theme);
    }, [dark]);

    const moon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-4 h-4 text-primary dark:text-secondary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z">
            </path>
        </svg>);

    const sun = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="w-4 h-4 text-primary dark:text-seconary">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z">
            </path>
        </svg>
    );
    return (
        <button className="btn btn-primary dark:btn-secondary bg-base-300 btn-circle" onClick={() => setDark(!dark)}>
            <span className="rounded-full">
                {dark ? sun : moon}
            </span>
        </button>
    )
}

export default ToggleTheme
