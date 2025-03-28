import Image from 'next/image';
import React from 'react';

const AboutService = ({service}) => {
    return (
        <div className='flex gap-2 items-center mb-4'>
            <Image
                alt='available service sign'
                src={"/assets/icons/icons8-correct-50.png"}
                width={30}
                height={30}
            ></Image>
            <h4 className='text-xl font-semibold'>{service}</h4>
        </div>
    );
};

export default AboutService;