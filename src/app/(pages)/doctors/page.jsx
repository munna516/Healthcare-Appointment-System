"use client";
import { DoctorCard } from "@components/TopDoctors/DoctorCard";
import { Button } from "@components/ui/button";
import { useEffect, useState, useCallback } from "react";

const Doctors = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedReview, setSelectedReview] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("/api/doctors-cards");
        const data = await response.json();
        setDoctors(data);
        setFilteredDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filterDoctors = useCallback(() => {
    let results = [...doctors];

    if (searchText) {
      const searchLower = searchText.toLowerCase();
      results = results.filter((doctor) => {
        const name = doctor.fullName || "";
        const specialty = doctor.specialization || "";
        return (
          name.toLowerCase().includes(searchLower) ||
          specialty.toLowerCase().includes(searchLower)
        );
      });
    }

    if (selectedSpecialty) {
      results = results.filter(
        (doctor) => doctor.specialization === selectedSpecialty
      );
    }

    if (selectedReview) {
      const minRating = parseInt(selectedReview);
      results = results.filter(
        (doctor) => doctor.review && doctor.review >= minRating
      );
    }

    setFilteredDoctors(results);
  }, [doctors, searchText, selectedSpecialty, selectedReview]);

  useEffect(() => {
    filterDoctors();
  }, [searchText, selectedSpecialty, selectedReview, filterDoctors]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleReviewChange = (e) => {
    setSelectedReview(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedSpecialty("");
    setSelectedReview("");
  };

<<<<<<< HEAD
  const doctors = [
    {
      uid: "cardio_jsmith",
      photo_url: "https://i.ibb.co.com/cFx5cYx/download.jpg",
      bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.",
      services: ["Heart Check-up", "ECG", "Cardiac Surgery"],
      name: "Dr. John Smith",
      review: 4.5,
      title: "MD",
      degrees: ["MBBS", "MD", "FACS"],
      specialty: "Cardiology",
      experience: 15,
      fees: {
        online: 70,
        offline: 100,
      },
      contact: {
        phone: "+1-123-456-7890",
        // email: "dr.johnsmith@example.com",
      },
      location: {
        clinic_name: "Heart Care Center",
        address: "123 Main St, New York, NY 10001",
      },
      status: "verified",
    },
    {
      uid: "gyno_emiller",
      photo_url: "https://i.ibb.co.com/8c1tz58/Option-3-1024x683.jpg",
      bio: "Dr. Emily Miller specializes in obstetrics and gynecology with a focus on minimally invasive procedures.",
      services: ["Prenatal Care", "Pap Smear", "Laparoscopy"],
      name: "Dr. Emily Miller",
      review: 4.8,
      title: "MD",
      degrees: ["MBBS", "MD", "FACOG"],
      specialty: "Gynecology",
      experience: 12,
      fees: {
        online: 80,
        offline: 120,
      },
      contact: {
        phone: "+1-234-567-8901",
        // email: "dr.emily@example.com",
      },
      location: {
        clinic_name: "Women's Wellness Clinic",
        address: "456 Oak Ave, Los Angeles, CA 90001",
      },
      status: "verified",
    },

    {
      uid: "cardsio_jsmith",
      photo_url: "https://i.ibb.co.com/cFx5cYx/download.jpg",
      bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience in treating heart-related conditions.",
      services: ["Heart Check-up", "ECG", "Cardiac Surgery"],
      name: "Dr. John Smith",
      review: 4.5,
      title: "MD",
      degrees: ["MBBS", "MD", "FACS"],
      specialty: "Cardiology",
      experience: 15,
      fees: {
        online: 70,
        offline: 100,
      },
      contact: {
        phone: "+1-123-456-7890",
        // email: "dr.johnsmith@example.com",
      },
      location: {
        clinic_name: "Heart Care Center",
        address: "123 Main St, New York, NY 10001",
      },
      status: "verified",
    },
    {
      uid: "gyno_emsiller",
      photo_url: "https://i.ibb.co.com/8c1tz58/Option-3-1024x683.jpg",
      bio: "Dr. Emily Miller specializes in obstetrics and gynecology with a focus on minimally invasive procedures.",
      services: ["Prenatal Care", "Pap Smear", "Laparoscopy"],
      name: "Dr. Emily Miller",
      review: 4.8,
      title: "MD",
      degrees: ["MBBS", "MD", "FACOG"],
      specialty: "Gynecology",
      experience: 12,
      fees: {
        online: 80,
        offline: 120,
      },
      contact: {
        phone: "+1-234-567-8901",
        // email: "dr.emily@example.com",
      },
      location: {
        clinic_name: "Women's Wellness Clinic",
        address: "456 Oak Ave, Los Angeles, CA 90001",
      },
      status: "verified",
    },
    {
      uid: "neuro_rpatel",
      photo_url: "https://i.ibb.co.com/rc5FgXt/HKstrategies-755-1-1024x683.jpg",
      bio: "Dr. Raj Patel is a neurologist specializing in epilepsy and movement disorders.",
      services: ["EEG", "EMG", "Migraine Treatment"],
      name: "Dr. Raj Patel",
      review: 4.7,
      title: "MD",
      degrees: ["MBBS", "MD", "FAAN"],
      specialty: "Neurology",
      experience: 10,
      fees: {
        online: 90,
        offline: 140,
      },
      contact: {
        phone: "+1-345-678-9012",
        // email: "dr.raj@example.com",
      },
      location: {
        clinic_name: "NeuroCare Associates",
        address: "789 Pine St, Chicago, IL 60601",
      },
      status: "verified",
    },
    {
      uid: "nephro_swilliams",
      photo_url: "https://i.ibb.co.com/PCk7sdJ/pexels-photo-1462980.jpg",
      bio: "Dr. Sarah Williams is a nephrologist with expertise in kidney transplants and chronic kidney disease.",
      services: ["Dialysis", "Kidney Biopsy", "Hypertension Management"],
      name: "Dr. Sarah Williams",
      review: 3.6,
      title: "MD",
      degrees: ["MBBS", "MD", "FASN"],
      specialty: "Nephrology",
      experience: 14,
      fees: {
        online: 85,
        offline: 130,
      },
      contact: {
        phone: "+1-456-789-0123",
        // email: "dr.sarah@example.com",
      },
      location: {
        clinic_name: "Renal Health Center",
        address: "321 Elm St, Houston, TX 77002",
      },
      status: "verified",
    },
  ];
=======
  if (loading) {
    return (
      <div className="max-w-7xl w-full min-h-screen mx-auto mt-40 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a6fb]"></div>
      </div>
    );
  }

>>>>>>> 254988675bed2322977a90c93fbd0167b08da750
  return (
    <div className="max-w-7xl mt-20 w-full mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
      {/* Filter Section */}
      <div className="w-full md:w-1/3 xl:w-1/4 bg-white p-4 rounded-md shadow-lg">
        <div className="flex flex-col sm:flex-row md:flex-col gap-0 sm:gap-4 md:gap-0">
          {/* Filter by Search Input */}
          <div className="w-full">
            <div className="mb-4">
              <label
                htmlFor="searchText"
                className="block font-medium text-gray-700"
              >
                Search Doctor
              </label>
              <input
                type="text"
                id="searchText"
                value={searchText}
                onChange={handleSearchChange}
                className="mt-2 p-2 border rounded w-full"
                placeholder="Search by name, specialty..."
              />
            </div>

            {/* Filter by Specialty */}
            <div className="mb-4">
              <label
                htmlFor="specialtyFilter"
                className="block text-gray-700 mb-1 font-medium"
              >
                Doctor Specialty
              </label>
              <select
                id="specialtyFilter"
                value={selectedSpecialty}
                onChange={handleSpecialtyChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Specialties</option>
                {Array.from(new Set(doctors.map((d) => d.specialization))).map(
                  (specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  )
                )}
              </select>
            </div>
          </div>
          {/* Filter by Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-medium">
              Minimum Rating
            </label>
            <div className="flex flex-col space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center space-x-2 cursor-pointer hover:text-blue-600"
                >
                  <input
                    type="radio"
                    name="review"
                    value={rating}
                    checked={selectedReview === String(rating)}
                    onChange={handleReviewChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex">
                    {Array.from({ length: rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - rating }).map((_, i) => (
                      <span key={i + rating} className="text-gray-300 text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{rating}+</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="px-4 py-2 w-full"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Doctors List */}
      <div className="w-full md:w-2/3 xl:w-3/4">
        {filteredDoctors.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor?._id} doctor={doctor} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No doctors match your filters</p>
            <Button
              variant="primary"
              onClick={handleClearFilters}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
