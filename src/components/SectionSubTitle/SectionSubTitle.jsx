import React from 'react';

const SectionSubTitle = ({text, className}) => {
    return (
        <h1 className={`font-bold mb-4 lg:text-lg capitalize pl-4 border-l-2 border-[#00a6fb]
        text-[#00a6fb] ${className}`}>
            {text}
        </h1>
    );
};

export default SectionSubTitle;