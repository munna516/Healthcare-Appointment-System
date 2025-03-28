import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
// import { DatePicker } from "@/components/ui/date-picker";

export default function DoctorForm() {
  return (
    <div className="p-6 flex-1 border-2 bg-white shadow-lg rounded-xl space-y-4">
        <div className="flex items-center gap-2">
            <Image
                src={"/assets/icons/form.png"}
                width={40}
                height={40}
                alt="form icon"/>
            <h2 className="text-xl font-bold">Fill the form for Registration</h2>
        </div>
      
      {/* Full Name */}
      <div>
        <Label>Full Name</Label>
        <Input type="text" placeholder="Enter your full name" />
      </div>
      
      {/* Email Address */}
      <div>
        <Label>Email Address</Label>
        <Input type="email" placeholder="Enter your email" />
      </div>
      
      {/* Phone Number */}
      <div>
        <Label>Phone Number</Label>
        <Input type="number" placeholder="Enter your phone number" />
      </div>
      
      {/* Date of Birth */}
      {/* <div>
        <Label>Date of Birth</Label>
        <DatePicker />
      </div> */}
      
      {/* Gender */}
      <div>
        <Label>Gender</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Profile Photo */}
      <div>
        <Label>Profile Photo</Label>
        <Input type="file" />
      </div>
      
      <h3 className="text-lg font-semibold mt-4">Professional Details</h3>
      
      {/* Medical License Number */}
      <div>
        <Label>Medical License Number</Label>
        <Input type="text" placeholder="Enter your license number" />
      </div>
      
      {/* Specialization */}
      <div>
        <Label>Specialization</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Physician</SelectItem>
            <SelectItem value="cardiologist">Cardiologist</SelectItem>
            <SelectItem value="dermatologist">Dermatologist</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Consultation Fee */}
      <div>
        <Label>Consultation Fee (Online & Onsite)</Label>
        <Input type="number" placeholder="Enter your fee" />
      </div>
      
      {/* Years of Experience */}
      <div>
        <Label>Years of Experience</Label>
        <Input type="number" placeholder="Enter years of experience" />
      </div>
      
      {/* Brief Bio */}
      <div>
        <Label>Brief Bio/About You</Label>
        <Textarea placeholder="Write a short bio about yourself" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox required/>
        <p className="font-semibold">You Agree To Our Privacy Policy</p>
      </div>
      
      {/* Submit Button */}
      <Button className="w-full" variant="primary">Submit</Button>
    </div>
  );
}
