import React from 'react';

const SectionTitle = ({text, className}) => {
    return (
        <h1 className={`text-xl capitalize md:text-4xl font-bold pb-6 ${className}`}>
            {text}
        </h1>
    );
};

export default SectionTitle;