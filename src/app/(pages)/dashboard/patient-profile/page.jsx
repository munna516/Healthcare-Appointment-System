"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserProfile = () => {
  const { data, status } = useSession();
  console.log(data);
    return (
        <div className='max-w-3xl bg-[#00a6fb] py-8 mx-auto flex items-center justify-center gap-3'>
                    <Image
                        src={data?.user?.image}
                        width={300}
                        className='rounded-full w-40'
                        referrerPolicy="no-referrer" 
                        height={300}
                        alt='user image'/>
                    <div>
                        <h2 className="text-3xl text-white font-semibold">
                            {data?.user?.name}
                        </h2>
                        <p className='text-white font-semibold'>{data?.user?.email}</p>
                    </div>
                </div>
    );
};

export default UserProfile;