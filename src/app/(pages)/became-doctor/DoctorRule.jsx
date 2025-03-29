import Image from "next/image";


const DoctorRule = ({rule}) => {
    return (
        <div className="flex gap-2 items-center mb-2">
            <Image
                src={"/assets/icons/icons8-correct-50.png"}
                width={30}
                height={30}
                alt="check mark for better readability"/>
            <p>{rule}</p>
        </div>
    );
};

export default DoctorRule;