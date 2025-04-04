import Image from 'next/image';
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = ({ name, review, dp }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                ))}
            </div>
            
            <p className="text-gray-600 mb-4 text-base leading-relaxed">
                &quot;{review}&quot;
            </p>
            
            <div className="flex items-center relative">
                <Image
                    src={dp} 
                    width={48}
                    height={48}
                    alt={name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-100"
                />
                <div>
                    <h3 className="font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-500 text-sm">Patient</p>
                </div>
                <div className="absolute right-0 bottom-0 text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-blue-200">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H3c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;