"use client";

import React, { useState } from "react";
import { DoctorCard } from "@/components/TopDoctors/DoctorCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchDoctors } from "@/lib/fetchDoctors";
import { FaSearch, FaStar, FaRegStar, FaFilter } from "react-icons/fa";

export default function Doctors() {
  const [page, setPage] = useState(1);
  // const limit = 5;
  const { data, error, isLoading } = useQuery({
    // queryKey: ["doctors", page],
    // queryFn: () => fetchDoctors({ page, limit }),
    queryFn: () => fetchDoctors(),
    keepPreviousData: true,
  });

  const [searchText, setSearchText] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedReview, setSelectedReview] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleReviewChange = (e) => {
    setSelectedReview(e.target.value);
  };

  const handleApplyFilters = () => {
    console.log("Filters Applied:");
    console.log("Search Text:", searchText);
    console.log("Selected Role:", selectedRole);
    console.log("Selected Review:", selectedReview);
    // You can use these values to send a request to the backend or filter data
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching doctors: {error.message}</p>;
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-2 py-6 min-h-screen flex flex-col-reverse md:flex-row gap-6 md:gap-4">
      <div className="w-full md:w-2/3 xl:w-3/4">
        {/* Cards */}
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3">
          {data.map((doctor) => (
            <DoctorCard key={doctor.uid} doctor={doctor} />
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center w-full mt-14 space-x-4">
          <Button
            variant="outline"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>

          <Button
            variant="outline"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === data?.totalPages}
          >
            Next
          </Button>
        </div>
      </div>
      {/* Filter */}
      <div className="w-full md:w-1/3 xl:w-1/4 rounded-2xl bg-white shadow-lg p-6 flex flex-col space-y-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
          Find Your Doctor
        </h2>

        {/* Search Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            id="searchText"
            value={searchText}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search doctors..."
          />
        </div>

        {/* Filters Section */}
        <div className="space-y-6">
          {/* Doctor Specialty Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Specialty
            </h3>
            <div className="mb-4">
              <select
                id="specialtyFilter"
                value={selectedRole}
                onChange={handleRoleChange}
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Specialties</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatrician">Pediatrician</option>
                <option value="Orthopedic">Orthopedic</option>
              </select>
            </div>
          </div>

          {/* Rating Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Minimum Rating
            </h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center space-x-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="review"
                    value={rating}
                    checked={selectedReview === String(rating)}
                    onChange={handleReviewChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <div className="flex items-center">
                    {[...Array(rating)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                    {[...Array(5 - rating)].map((_, i) => (
                      <FaRegStar key={i} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{rating}+</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <button
          onClick={handleApplyFilters}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 rounded-lg flex items-center justify-center"
        >
          <FaFilter className="mr-2" />
          Apply Filters
        </button>
      </div>
    </div>
  );
}
