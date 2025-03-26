export default function WorkingProcess() {
    const steps = [
      { 
        id: "01", 
        title: "Fill The Form", 
        color: "bg-green-500", 
        text: "Provide your personal details and health concerns to help us understand your needs better."
      },
      { 
        id: "02", 
        title: "Book An Appointment", 
        color: "bg-blue-500", 
        text: "Choose a suitable date and time to consult with our healthcare professionals seamlessly."
      },
      { 
        id: "03", 
        title: "Check-Ups", 
        color: "bg-pink-500", 
        text: "Meet with our doctors for a thorough medical check-up and health assessment that is important."
      },
      { 
        id: "04", 
        title: "Get Reports", 
        color: "bg-yellow-500", 
        text: "Receive your detailed medical reports and expert recommendations for your health journey."
      },
    ];
  
    return (
      <section className="bg-gradient-to-r from-blue-50 to-yellow-50 py-16 px-4">
        {/* Title Section */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-600 font-semibold">| How We Work</p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Our Working Process
          </h2>
        </div>
  
        {/* Steps Section */}
        <div className="relative mt-10 flex justify-center">
          <div className="relative w-full max-w-6xl overflow-x-auto">
            {/* Steps with Flex */}
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-8 lg:gap-10 w-full">
              {steps.map((step, index) => (
                <div key={index} className="text-center flex-1 min-w-[150px]">
                  <div
                    className={`w-16 h-16 flex items-center justify-center text-white font-bold rounded-full mx-auto ${step.color}`}
                  >
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold mt-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
