import AdminStatistics from "./components/AdminStatistics/AdminStatistics";

const dashboard = () => {
    const role = "admin";
    return (
        role === "admin" ? 
        <AdminStatistics></AdminStatistics>: 
        <div>Normal users</div>
    );
};

export default dashboard;