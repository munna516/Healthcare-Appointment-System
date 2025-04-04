import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@components/ui/dialog";

const DoctorInfo = ({doctor}) => {
    const {fullName, phone, fee, bio, licenseNumber, email, specialization, experience} = doctor;
  return (
    <DialogContent>
        <DialogHeader>
        <DialogTitle className="mb-4 pb-2 border-b-2">Doctor Info:</DialogTitle>
        <DialogDescription>
            <p className="text-xl font-semibold">{fullName}</p>
            <p className="mb-4">{email}</p>
            <p>Fees:{fee} $</p>
            <h3 className="mb-2"><strong>Specialist: </strong>{specialization}</h3>
            <p><strong>Experience: </strong>{experience} Year</p>
            <p><strong>licenseNumber: </strong>{licenseNumber}</p>
            <p><strong>PhoneNumber: </strong>{phone}</p>
            <p><strong>Bio: </strong>{bio}</p>
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
  );
};

export default DoctorInfo;
