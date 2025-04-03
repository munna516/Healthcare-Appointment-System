import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@components/ui/dialog";

const DoctorInfo = ({doctor}) => {
    const {name, email, specialty, experience} = doctor;
  return (
    <DialogContent>
        <DialogHeader>
        <DialogTitle className="mb-4 pb-2 border-b-2">Doctor Info:</DialogTitle>
        <DialogDescription>
            <p className="text-xl font-semibold">{name}</p>
            <p className="mb-4">{email}</p>
            <h3 className="mb-2"><strong>Specialist: </strong>{specialty}</h3>
            <h4><strong>Experience: </strong>{experience}</h4>
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
  );
};

export default DoctorInfo;
