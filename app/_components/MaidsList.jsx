import { Button } from '@/components/ui/button'
import { AmieIcon, Calendar01Icon, DatesIcon, EarRings01Icon, HandBag01Icon, Money01Icon, Moon01Icon, Pdf01Icon, SignLanguageCIcon } from 'hugeicons-react'
import { Calendar, Flag, Languages, MoonIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsBag } from 'react-icons/bs'

const MaidsList = ({ maidsList, title }) => {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-[22px] text-primary'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 '>
                {maidsList.length > 0 ? maidsList.map((maid, index) => (
                    <Link href="https://wa.me/971545671677" key={index} className='shadow-md rounded-lg hover:shadow-lg hover:shadow-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>
                        <Image src={maid.image.url} alt={maid.name} width={400} height={200} className='h-[150px] md:h-[200px] object-fill rounded-lg' />
                        <div className='flex flex-col items-baseline p-3 gap-1'>
                            <h2 className='p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]'>
                                {maid.nationality}
                            </h2>
                            <h2 className='font-bold text-lg'>{maid.name}</h2>
                            <div className='flex gap-2 items-center'>
                                <BsBag width={16} height={16} />
                                {maid.position.map((pos, index) => (

                                    <h2 key={index} className='text-primary'>{pos}-</h2>

                                ))

                                }
                            </div>
                            <div className='flex gap-2 items-center'>
                                <Calendar01Icon width={16} height={16} />

                                <h2 className='text-gray-500'>{maid.age} year's old.</h2>


                            </div>
                            <div className='flex gap-2'>
                                <Languages width={16} height={16} />
                                {maid.languages.map((lang, index) => (

                                    <h2 key={index} className='text-gray-500'>{lang}-</h2>

                                ))

                                }
                            </div>
                            <div className='flex gap-2 items-center'>
                                <MoonIcon width={16} height={16} />

                                <h2 className='text-gray-500'>{maid.religion}.</h2>


                            </div>

                            <div className='flex gap-2 items-center'>
                                <EarRings01Icon width={16} height={16} />

                                <h2 className='text-gray-500'>{maid.maritalStatus}.</h2>


                            </div>

                            <div className='flex gap-2 items-center'>
                                <Money01Icon width={16} height={16} />

                                <h2 className='text-gray-500'>Maid’s Salary {maid.salary} AED/ Month.</h2>


                            </div>
                            {maid.cv && (
                                <div
                                    onClick={() => window.open(maid.cv.url, "_blank", "noopener,noreferrer")}
                                    className="flex gap-2 items-center text-primary cursor-pointer"
                                >
                                    <Pdf01Icon width={16} height={16} />
                                    <h2 className="text-gray-500">View CV</h2>
                                </div>
                            )}



                            <h2 className='text-gray-500 text-sm'>{maid.address}</h2>
                            <Button className='rounded-full mt-3 w-full'><HandBag01Icon />Hire</Button>
                        </div>
                    </Link>
                ))
                    :
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MaidsList