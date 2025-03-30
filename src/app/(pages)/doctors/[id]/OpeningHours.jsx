const OpeningHours = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Opening Time</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Friday - Saturday</span>
          <span className="text-gray-600">7:30 am - 4:00 pm</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Sunday - Monday</span>
          <span className="text-gray-600">10:30 am - 12:00 pm</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Tuesday</span>
          <span className="text-red-500">Closed</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Wednesday</span>
          <span className="text-gray-600">8:30 am - 5:00 pm</span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-gray-700">Thursday</span>
          <span className="text-gray-600">7:30 am - 4:00 pm</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          * Hours may vary on public holidays
        </p>
      </div>
    </div>
  );
};

export default OpeningHours;
