'use client'

import { useTheme } from "next-themes"
import { IoBookOutline, IoMoonOutline } from "react-icons/io5"
import { twMerge } from "tailwind-merge"

const Navbar = () => {
    return (
        <div className="secondary-text py-3 flex items-center justify-between">
            <IoBookOutline className="w-10 h-10 p-1" />
            <ThemeToggler />
        </div>
    )
}

export default Navbar

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="flex items-center gap-3">
            <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={twMerge(' w-11 px-0.5 h-6 flex items-center rounded-xl bg-slate-500 dark:bg-highlight-primary relative duration-300 cursor-pointer')}>
                <div className="w-5 h-5 rounded-full bg-white duration-300 dark:translate-x-full">

                </div>
            </div>
            <IoMoonOutline className="w-5 h-5 text-secondary-text-light dark:text-highlight-primary duration-300" />
        </div>
    )
}