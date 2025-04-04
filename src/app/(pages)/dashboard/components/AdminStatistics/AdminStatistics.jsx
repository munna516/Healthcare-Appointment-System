import InformationStat from "./InformationStat";
import LastWeekAppointment from "./LastWeekAppointment";

const AdminStatistics = () => {
    return (
        <div className="max-w-5xl w-full mx-auto">
            <div className="flex gap-4 mb-4 items-center">
                <InformationStat
                    heading={"Our Doctors"}
                    info={"40+"}/>
                <InformationStat
                    heading={"Total Appointments"}
                    info={"400+"}/>
                <InformationStat
                    heading={"Service Category"}
                    info={"20+"}/>
            </div>
            <LastWeekAppointment/>
        </div>
    );
};

export default AdminStatistics;