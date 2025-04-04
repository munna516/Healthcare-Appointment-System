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

  // const handleReviewChange = (e) => {
  //   setSelectedReview(e.target.value);
  // };

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedSpecialty("");
    setSelectedReview("");
  };

  if (loading) {
    return (
      <div className="max-w-7xl w-full min-h-screen mx-auto mt-40 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00a6fb]"></div>
      </div>
    );
  }

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
          {/* <div className="mb-4">
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
          </div> */}
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
