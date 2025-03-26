import React from 'react';
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle';
import SectionTitle from '../sectionTitle/SectionTitle';
import Questions from './Questions';
import FaqVisual from './FaqVisual';

const FaqSection = () => {
    return (
        <div className='max-w-7xl w-full mx-auto'>
            <div className='flex items-center justify-center flex-col mb-6'>
                <SectionSubTitle
                    text={"FAQ"}
                />
                <SectionTitle
                    text={"frequently asked questions"}
                />
            </div>
            <div className='flex flex-col-reverse md:flex-row gap-4'>
                <Questions/>
                <FaqVisual/>
            </div>
        </div>
    );
};

export default FaqSection;