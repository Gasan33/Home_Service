import { NotebookPen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import GlobalApi from "../../../_services/GlobalApi";
import Image from 'next/image';
import Link from 'next/link';
import BookingSection from './BookingSection';

const SuggestedBusinessList = ({ business }) => {
    const [businessList, setbusinessList] = useState([]);

    useEffect(() => {


        getBusinessList();

    }, [business]);

    const getBusinessList = () => {
        GlobalApi.getBusinessByCategory(business.category.name).then((resp) => {
            setbusinessList(resp?.businessLists);
        });
    };
    return business.name && (

        <div className='md:pl-10'>
            <BookingSection business={business} >
                <Button className="flex gap-2 w-full"><NotebookPen />Book Appointment</Button>
            </BookingSection>
            <div className='hidden md:block'>
                <h2 className='font-bold text-lg mt-3 mb-3'>Similar Business</h2>
                <div className=''>
                    {businessList && businessList.map((item, index) => (
                        <Link href={"/details/" + item.id} key={index} className='flex gap-2 mb-4 hover:border rounded-lg p-2 cursor-pointer hover:shadow-md border-primary'>
                            <Image src={item.images[0].url} alt={item.name}
                                width={80} height={80} className='rounded-lg object-cover' />
                            <div className=''>
                                <h2 className='font-bold'>{business.name}</h2>
                                <h2 className='text-primary'>{business.contactPerson}</h2>
                                <h2 className='text-gray-400'>{business.address}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default SuggestedBusinessList