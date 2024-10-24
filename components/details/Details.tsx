import { DataTypes } from '@/types/types'
import { NextPage } from 'next'
import { useRef, useState } from 'react'
import { FaExternalLinkAlt, FaPause, FaPlay } from 'react-icons/fa'

interface Props {
    data: DataTypes
}

const Details: NextPage<Props> = ({ data }) => {
    const { meanings, phonetic, phonetics, sourceUrls, word, title } = data
    const audio = phonetics?.find(phnt => phnt.audio).audio || null
    const audioRef = useRef<HTMLAudioElement | null>(null)

    const [isPlaying, setIsPlaying] = useState<boolean>(false)

    const togglePlay = () => {
        if (isPlaying) {
            audioRef?.current?.pause();
        } else {
            audioRef?.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleEnded = () => {
        setIsPlaying(false);
    };
    return (
        <div className='mt-7'>
            {
                title &&
                <div className='mt-3 text-center'>
                    <h1 className='text-2xl'>{title}</h1>
                    <p className='secondary-text text-sm mt-2 md:w-[60%] mx-auto'>{data.message}</p>
                </div>
            }
            {
                word &&
                <>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-3 flex-1'>
                            <h1 className='text-4xl font-medium'>{word}</h1>
                            {
                                phonetic && <h3 className=' text-highlight-primary'>{phonetic}</h3>
                            }
                        </div>
                        {
                            audio && <div onClick={togglePlay} className='w-16 h-16 bg-highlight-secondary flex justify-center items-center rounded-full cursor-pointer'>
                                {
                                    isPlaying ? <FaPause className='text-highlight-primary' /> : <FaPlay className='text-highlight-primary' />
                                }
                                <audio onEnded={handleEnded} ref={audioRef} src={audio} />
                            </div>
                        }
                    </div>
                    {
                        meanings && <div>
                            {
                                meanings.map((meaning, index) => {
                                    const { partOfSpeech, definitions, synonyms } = meaning
                                    return (
                                        <div key={index} className='mt-5'>
                                            <h1 className='flex items-end text-xl gap-2 after:mb-2 after:w-full after:h-1 after:border-b after:border-slate-300 dark:after:border-slate-700 after:border-dashed after:block after:duration-300'>{partOfSpeech}</h1>
                                            <h2 className='mt-3 secondary-text mb-2'>Meaning:</h2>
                                            {
                                                definitions[0] &&
                                                <ul className='px-2 flex flex-col gap-2.5'>
                                                    {
                                                        definitions.map((dfn: { definition: string, example?: string }, index: number) => {
                                                            return (
                                                                <li className='list-disc ml-3 marker:text-highlight-primary text-gray-600 dark:text-gray-400 duration-300' key={index}>{dfn.definition}
                                                                    <ul>
                                                                        {
                                                                            dfn.example && <li className='text-sm secondary-text ml-3 list-[square]'>&quot;{dfn.example}&quot;</li>
                                                                        }
                                                                    </ul>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                            {
                                                synonyms[0] && <div className='mt-3 flex gap-2'>
                                                    <p className='secondary-text'>Synonyms:</p>
                                                    <div className='flex gap-x-1.5 flex-wrap'>
                                                        {
                                                            synonyms.map((snm: string, index: number) => <p key={index} className='text-highlight-primary'>{snm}{synonyms.length !== index + 1 && ','}</p>)
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                    <div className='w-full border-t border-slate-300 dark:border-slate-700 border-dashed duration-300 mt-5 py-5'>
                        <h2 className='secondary-text'>Source</h2>
                        {
                            sourceUrls?.map((url: string, index: number) => {
                                return (
                                    <div key={index} className='flex gap-2 items-center'>
                                        <a href={url} target='_blank' className='underline text-sm'>{url}</a>
                                        <FaExternalLinkAlt className='text-xs' />
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Details