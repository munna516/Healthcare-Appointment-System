"use client";
import { useState, useEffect } from "react";
import { format, addDays } from "date-fns";

export default function RescheduleModal({ isOpen, onClose, appointmentId }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const [loading, setLoading] = useState(false);
  const [appointment, setAppointment] = useState(null);
  const [error, setError] = useState(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  useEffect(() => {
    if (!isOpen || !appointmentId) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/appointments/${appointmentId}`);
        const { data } = await res.json();

        if (!res.ok) throw new Error("Failed to fetch appointment");

        const appointmentDate = new Date(data.date?.$date || data.date);
        if (isNaN(appointmentDate.getTime())) {
          throw new Error("Invalid date format");
        }

        setAppointment({
          ...data,
          date: appointmentDate,
        });
        setDate(format(appointmentDate, "yyyy-MM-dd"));
        setTime(data.time || "12:00");
      } catch (err) {
        setError(err.message);
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isOpen, appointmentId]);

  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = 12 + Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    return `${hour.toString().padStart(2, "0")}:${minute}`;
  });

  const today = new Date();
  const dates = [
    { value: format(today, "yyyy-MM-dd") },
    { value: format(addDays(today, 1), "yyyy-MM-dd") },
    { value: format(addDays(today, 2), "yyyy-MM-dd") },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`/api/appointments/${appointmentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date, time }),
      });

      if (!res.ok) throw new Error("Failed to reschedule");

      onClose();
      window.location.reload();
    } catch (err) {
      setError(err.message);
      console.error("Update error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Reschedule Appointment</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </div>

        {loading && !appointment ? (
          <p>Loading appointment details...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : appointment ? (
          <>
            <div className="mb-4">
              <p>
                Current: {format(appointment.date, "dd MMMM")} at{" "}
                {appointment.time}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block mb-1">Select Date</label>
                <button
                  type="button"
                  onClick={() => setShowDateDropdown(!showDateDropdown)}
                  className="w-full p-2 border border-gray-300 rounded-md text-left flex justify-between items-center"
                >
                  {date ? format(new Date(date), "dd MMMM") : "Select date"}
                  <span
                    className={`transition-transform ${
                      showDateDropdown ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {showDateDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                    {dates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => {
                          setDate(d.value);
                          setShowDateDropdown(false);
                        }}
                        className={`block w-full text-left p-2 hover:bg-blue-50 ${
                          date === d.value ? "bg-blue-100 text-blue-800" : ""
                        }`}
                      >
                        {format(new Date(d.value), "dd MMMM")}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block mb-1">Select Time (12 PM - 8 PM)</label>
                <button
                  type="button"
                  onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                  className="w-full p-2 border border-gray-300 rounded-md text-left flex justify-between items-center"
                >
                  {time}
                  <span
                    className={`transition-transform ${
                      showTimeDropdown ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {showTimeDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setTime(t);
                          setShowTimeDropdown(false);
                        }}
                        className={`block w-full text-left p-2 hover:bg-blue-50 ${
                          time === t ? "bg-blue-100 text-blue-800" : ""
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? "Processing..." : "Reschedule"}
                </button>
              </div>
            </form>
          </>
        ) : null}
      </div>
    </div>
  );
}
