"use client"
import Image from "next/image";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Checkbox } from "@components/ui/checkbox";
import toast from "react-hot-toast";
// import { DatePicker } from "@/components/ui/date-picker";

export default function DoctorForm() {
  const handleFormSubmit = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const licenseNumber = form.licenseNumber.value;
    const gender = form.gender.value;
    const specialization = form.specialization.value;
    const fee = form.fee.value;
    const experience = form.experience.value;
    const bio = form.bio.value;
    const imageFile = form.profilePhoto.files[0];

    console.log("Doctor form: ", bio);
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGEBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgData = await response.json();

      if (!imgData.success) {
        toast.error("Image upload failed");
        return;
      }
  
      const imageUrl = imgData.data.url; 
      const res = await fetch("/api/became-doctor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          licenseNumber,
          gender,
          specialization,
          fee,
          experience,
          bio,
          registered : false,
          imageUrl, // Save image URL to the database
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to submit form");
      }
  
      const result = await res.json();
      toast.success("successfully submitted");
    } catch (error) {
      toast.error("error occurred!");
    };
  }
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
      <form onSubmit={handleFormSubmit} className="space-y-4 p-4 border rounded-lg shadow-sm">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input type="text" id="fullName" name="fullName" placeholder="Enter your full name" />
      </div>

      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>

      <div>
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="number" id="phone" name="phone" placeholder="Enter your phone number" />
      </div>

      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select name="gender">
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

      <div>
        <Label htmlFor="profilePhoto">Profile Photo</Label>
        <Input type="file" id="profilePhoto" name="profilePhoto" />
      </div>

      <h3 className="text-lg font-semibold mt-4">Professional Details</h3>

      <div>
        <Label htmlFor="licenseNumber">Medical License Number</Label>
        <Input type="text" id="licenseNumber" name="licenseNumber" placeholder="Enter your license number" />
      </div>

      <div>
        <Label htmlFor="specialization">Specialization</Label>
        <Select name="specialization">
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

      <div>
        <Label htmlFor="fee">Consultation Fee (Online & Onsite)</Label>
        <Input type="number" id="fee" name="fee" placeholder="Enter your fee" />
      </div>

      <div>
        <Label htmlFor="experience">Years of Experience</Label>
        <Input type="number" id="experience" name="experience" placeholder="Enter years of experience" />
      </div>

      <div>
        <Label htmlFor="bio">Brief Bio/About You</Label>
        <Textarea id="bio" name="bio" placeholder="Write a short bio about yourself" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="privacyPolicy" name="privacyPolicy" required />
        <Label htmlFor="privacyPolicy" className="font-semibold">You Agree To Our Privacy Policy</Label>
      </div>

      <Button type="submit" className="w-full">Submit</Button>
    </form>
    </div>
  );
}
