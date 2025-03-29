import DoctorRule from "./DoctorRule";

const OurRulesAndPolicy = () => {
    return (
        <div className="lg:flex-1 text-[#000000bc] p-2 lg:p-0">
            <h3 className="text-xl md:text-3xl pb-4 font-semibold">Want to reach the thousand of people through us ?</h3>
            <p className="mb-4">
            We are looking for compassionate and dedicated doctors to collaborate with us in serving people through our platform. If you are a medical professional passionate about making healthcare more accessible, we invite you to join our mission. By working with us, you can connect with patients online, provide consultations, and contribute to improving lives. Let&apos;s work together to make quality healthcare available to those who need it most.
            </p>
            <h4 className="text-xl md:text-2xl font-semibold mb-4">
                Doctors Rules and Policy
            </h4>
            <p className="mb-4">
            It HealthPoint, we are committed to protecting your privacy and personal information. This privacy policy explains how we.
            </p>
            <ul className="ml-2">
                <li>
                    <DoctorRule
                        rule={"Valid Certification & License – You must be a certified and licensed medical professional, ensuring credibility and compliance with healthcare regulations."}/>
                </li>
                <li>
                    <DoctorRule
                        rule={"Commitment to Availability – You should maintain a clear and updated schedule, ensuring timely online and onsite consultations for patients who book appointments."}/>
                </li>
                <li>
                    <DoctorRule
                        rule={"Professionalism & Ethics – Uphold the highest standards of medical ethics, confidentiality, and patient care while interacting with patients through our platform."}/>
                </li>
                <li>
                    <DoctorRule
                        rule={"Transparent Fees & Policies – Clearly state your consultation fees and adhere to our platform's payment and cancellation policies to maintain trust and transparency."}/>
                </li>
                <li>
                    <DoctorRule
                        rule={"Responsiveness & Communication – Respond promptly to patient inquiries and appointment requests, ensuring a smooth and reliable experience for those seeking medical assistance."}/>
                </li>
            </ul>
        </div>
    );
};

export default OurRulesAndPolicy;