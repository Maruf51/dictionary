'use client'

import { DataTypes } from '@/types/types'
import { NextPage } from 'next'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

const apiLink = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

interface Props {
    setData: (e: DataTypes) => void
}

const SearchField: NextPage<Props> = ({ setData }) => {
    const [searchValue, setSearchValue] = useState<string>('')

    const searchHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result = await fetch(apiLink+searchValue)
        const response = await result.json()
        if(response[0]) {
            setData(response[0])
        } else {
            setData(response)
        }
    }
    return (
        <form onSubmit={searchHandler} className='bg-slate-100 dark:bg-gray-900 w-full h-10 rounded-lg overflow-hidden relative flex duration-300'>
            <input
                className={twMerge('w-full h-full bg-transparent pl-3 pr-3 outline-none text-sm flex-1')}
                type="text"
                placeholder='Search here...'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                required
            />
            <button type='submit' className='h-10 w-16 flex justify-center items-center bg-highlight-primary text-white dark:text-white'>
                <FaSearch />
            </button>
        </form>
    )
}

export default SearchField