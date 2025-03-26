import React from 'react';
import SectionSubTitle from '../SectionSubTitle/SectionSubTitle';
import SectionTitle from '../sectionTitle/SectionTitle';
import AboutVisuals from './AboutVisuals';

const AboutUs = () => {
    return (
        <div className='max-w-7xl w-full mx-auto pb-20'>
            <div className='flex flex-col lg:flex-row justify-between gap-8 '>
                <div className='md:w-1/2'>
                    <AboutVisuals></AboutVisuals>
                </div>
                <div className='md:w-1/2 pt-0 lg:pt-0 md:pt-32'>
                    <SectionSubTitle
                    text={"about us"}
                    ></SectionSubTitle>
                    <SectionTitle
                    text={"Caring for Your Health, Every Step of the Way."}>
                    </SectionTitle>
                    <p className='lg:text-lg text-[#000000b4]'>
                    Our team is dedicated to providing personalized and comprehensive healthcare services to meet the needs of every patient. With a strong focus on compassionate care, we connect patients with qualified doctors, allowing them to access prescriptions and schedule appointments with ease. We believe in making healthcare accessible.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;