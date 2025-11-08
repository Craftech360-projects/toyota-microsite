// "use client"

// import Image from "next/image"

// interface CityPopupProps {
//   city: string
//   onClose: () => void
//   onPlay: () => void
// }

// const cityData: Record<
//   string,
//   {
//     date: string
//     day: string
//     venue: string
//     gateTime: string
//   }
// > = {
//   Chennai: {
//     date: "20th November 2025,",
//     day: "Thursday",
//     venue: "Chennai Trade Centre,\nNandambakkam",
//     gateTime: "6:00pm",
//   },
//   Vijayawada: {
//     date: "18th November 2025,",
//     day: "Tuesday",
//     venue: "VMRDA Convention Centre,\nVijayawada",
//     gateTime: "6:00pm",
//   },
//   Bengaluru: {
//     date: "20th December 2025,",
//     day: "Saturday",
//     venue: "Bangalore International\nExhibition Centre",
//     gateTime: "6:00pm",
//   },
//   Delhi: {
//     date: "20th November 2025,",
//     day: "Thursday",
//     venue: "Indira Gandhi Indoor\nStadium",
//     gateTime: "6:00pm",
//   },
//   Jaipur: {
//     date: "3rd November 2025,",
//     day: "Monday",
//     venue: "Jaipur City Palace\nGround",
//     gateTime: "6:00pm",
//   },
//   Varanasi: {
//     date: "3rd November 2025,",
//     day: "Monday",
//     venue: "Varanasi Convention\nCentre",
//     gateTime: "6:00pm",
//   },
// }

// export default function CityPopup({ city, onClose, onPlay }: CityPopupProps) {
//   const info = cityData[city]

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/70">
//       <div className="bg-black rounded-2xl p-6 sm:p-8 max-w-md w-full border border-gray-800 shadow-2xl relative">

//         {/* Image Section with Close Button */}
//         <div className="relative mb-6">
//           <Image
//             src={`/cover/${city.toLowerCase()}.png`} // Changed to dynamic src
//             alt="Event Banner"
//             width={600}
//             height={300}
//             className="rounded-xl w-full object-cover"
//           />
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors"
//           >
//             <svg
//               className="w-7 h-7 sm:w-8 sm:h-8"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Title */}
//         <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-white">DRUM TAO</h1>

//         {/* City Badge */}
//         <div className="bg-red-600 text-white py-2 px-0 text-center font-bold mb-6">
//           {city.toUpperCase()}
//         </div>

//         {/* Date Info */}
//         <div className="text-center mb-8">
//           <p className="text-white font-semibold text-sm sm:text-base">{info.date}</p>
//           <p className="text-white font-semibold text-sm sm:text-base">{info.day}</p>
//         </div>

//         {/* Venue */}
//         <div className="border-2 border-red-500 rounded-lg p-4 mb-8 text-center">
//           <p className="text-white font-bold mb-2">Venue</p>
//           <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">{info.venue}</p>
//         </div>

//         {/* Gates Open Time */}
//         <div className="text-center mb-8">
//           <p className="text-white font-semibold text-sm mb-2">Gates Open Time</p>
//           <p className="text-white text-lg font-bold">{info.gateTime}</p>
//         </div>

//         {/* Play Button */}
//         <button
//           onClick={onPlay}
//           className="w-full bg-red-600 text-white py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-red-700 transition-colors"
//         >
//           PLAY. WIN. EXPERIENCE
//         </button>
//       </div>
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import { CityConfig } from "@/lib/types"
import { format } from "date-fns" // Using date-fns for formatting

interface CityPopupProps {
  cityConfig: CityConfig // Use the full CityConfig object
  onClose: () => void
  onPlay: () => void
}

// Helper function to format time (e.g., "18:00:00" -> "6:00pm")
const formatTime = (timeString: string | null): string => {
  if (!timeString) return "TBD"
  const [hours, minutes] = timeString.split(":")
  const date = new Date()
  date.setHours(parseInt(hours, 10))
  date.setMinutes(parseInt(minutes, 10))
  return format(date, "h:mm a") // e.g., "6:00 PM"
}

// Helper function to format date (e.g., "2025-11-20" -> { date: "20th November 2025", day: "Thursday" })
const formatDateInfo = (dateString: string | null) => {
  if (!dateString) return { date: "Date TBD", day: "Day TBD" }
  const date = new Date(dateString)
  return {
    date: format(date, "do MMMM yyyy,"), // "20th November 2025,"
    day: format(date, "EEEE"), // "Thursday"
  }
}

export default function CityPopup({ cityConfig, onClose, onPlay }: CityPopupProps) {
  const { city_name, venue, event_date, start_time } = cityConfig
  const { date, day } = formatDateInfo(event_date)
  const gateTime = formatTime(start_time)
  
  // Format venue text for display
  const formattedVenue = venue ? venue.replace(/\\n/g, "\n") : "Venue TBD"

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 bg-black/70">
      <div className="bg-black rounded-2xl p-6 sm:p-8 max-w-md w-full border border-gray-800 shadow-2xl relative">

        {/* Image Section with Close Button */}
        <div className="relative mb-6">
          <Image
            src={`/cover/${city_name.toLowerCase()}.png`} // Dynamic src
            alt="Event Banner"
            width={600}
            height={300}
            className="rounded-xl w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-red-500 transition-colors"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-6 text-white">DRUM TAO</h1>

        {/* City Badge */}
        <div className="bg-red-600 text-white py-2 px-0 text-center font-bold mb-6">
          {city_name.toUpperCase()}
        </div>

        {/* Date Info */}
        <div className="text-center mb-8">
          <p className="text-white font-semibold text-sm sm:text-base">{date}</p>
          <p className="text-white font-semibold text-sm sm:text-base">{day}</p>
        </div>

        {/* Venue */}
        <div className="border-2 border-red-500 rounded-lg p-4 mb-8 text-center">
          <p className="text-white font-bold mb-2">Venue</p>
          <p className="text-white text-sm sm:text-base leading-relaxed whitespace-pre-line">{formattedVenue}</p>
        </div>

        {/* Gates Open Time */}
        <div className="text-center mb-8">
          <p className="text-white font-semibold text-sm mb-2">Gates Open Time</p>
          <p className="text-white text-lg font-bold">{gateTime}</p>
        </div>

        {/* Play Button */}
        <button
          onClick={onPlay}
          className="w-full bg-red-600 text-white py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-red-700 transition-colors"
        >
          PLAY. WIN. EXPERIENCE
        </button>
      </div>
    </div>
  )
}