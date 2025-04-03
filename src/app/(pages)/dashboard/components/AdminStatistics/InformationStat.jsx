const InformationStat = ({className, heading, info}) => {
    return (
        <div className={`w-full flex flex-col items-center justify-center md:w-1/3 bg-white border-1 rounded-lg border-black h-24 shadow-md ${className}`}>
            <h3 className="text-xl font-semibold text-[#000000c8]">{heading}</h3>
            <h2 className="text-2xl font-bold text-[#000000c8]">{info}</h2>
        </div>
    );
};

export default InformationStat;