export default function ParticipationSteps() {
  const steps = [
    { number: 1, title: "Choose your city", color: "text-red-500" },
    { number: 2, title: "Fill out the registration form", color: "text-red-500" },
    { number: 3, title: "Let's start the quiz fun!", color: "text-red-500" },
    { number: 4, title: "Check your email for the entry QR code", color: "text-white" },
  ]

  return (
    <section className="px-4 py-8 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Register for Buddy
        <br />
        passes to Drum Tao Live
      </h2>

      <div className="bg-gray-900 border border-red-500 rounded-lg p-6 sm:p-8">
        <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-6">HOW TO PARTICIPATE :</h3>

        <div className="space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="text-red-500 font-bold text-lg flex-shrink-0 w-20">STEP {step.number}:</div>
              <p className={`${step.color} text-sm sm:text-base leading-relaxed`}>{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-lg sm:text-xl font-bold mt-8 mb-8">
        To continue, please
        <br className="sm:hidden" />
        select your city
      </p>
    </section>
  )
}
