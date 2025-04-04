import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({image, title, subTitle}) => {
    return (
        <div className='bg-white rounded-lg p-4 md:p-6'>
             <Image
                src={image}
                width={360}
                height={350}
                alt='service demo image'
                className='mb-4'
            ></Image>
            <div>
                <h3 className='text-xl font-semibold pb-2 hover:text-[#00a6fb]'>{title}</h3>
                <p className='text-slate-700 pb-4'>{subTitle}</p>
                <div className='flex items-center gap-2 hover:text-[#00a6fb]'>
                    <Link href={"/contact"}>To Know More</Link>
                    <span>
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;